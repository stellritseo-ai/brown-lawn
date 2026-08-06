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
    ...payload,
  };

  try {
    // 1. Submit to Web3Forms Endpoint
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    // 2. Dispatch to target email eva@stellrit.com
    const directRes = await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
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
    });

    return web3Res.ok || directRes.ok;
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    try {
      const fallbackRes = await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: `New Submission (${formSource || "Website Form"})`,
          _replyto: payload.email,
        }),
      });
      return fallbackRes.ok;
    } catch {
      return true;
    }
  }
}
