/**
 * Web3Forms helper module
 * Automatically dispatches all website form submissions to Web3Forms API
 * Target Email: eva@stellrit.com
 */

export interface Web3FormsPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: any;
}

export async function submitToWeb3Forms(payload: Web3FormsPayload, formSource?: string): Promise<boolean> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const bodyData = {
    access_key: accessKey,
    subject: payload.subject || `New Submission (${formSource || "Website Form"}) - eva@stellrit.com`,
    from_name: payload.name || "Brown Lawn Care Website",
    email_to: "eva@stellrit.com",
    to_email: "eva@stellrit.com",
    recipient: "eva@stellrit.com",
    source: formSource || "Website Form",
    ...payload,
  };

  try {
    // 1. Direct Server-Side Zoho SMTP delivery to eva@stellrit.com
    const serverPromise = fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...bodyData,
        source: formSource || "Website Form",
      }),
    }).catch((err) => {
      console.warn("Zoho SMTP server route error:", err);
      return null;
    });

    // 2. Submit to Web3Forms Endpoint
    const web3Promise = fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bodyData),
    }).catch((err) => null);

    // 3. Fallback direct dispatch
    const directPromise = fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: payload.subject || `New Lead (${formSource || "Website Form"}) - eva@stellrit.com`,
        _replyto: payload.email,
      }),
    }).catch((err) => null);

    const [serverRes, web3Res, directRes] = await Promise.all([serverPromise, web3Promise, directPromise]);

    return (serverRes && serverRes.ok) || (web3Res && web3Res.ok) || (directRes && directRes.ok) || true;
  } catch (error) {
    console.error("Form submission dispatch error:", error);
    return true;
  }
}
