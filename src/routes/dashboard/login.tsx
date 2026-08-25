import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { User, Lock, ArrowRight, ShieldAlert } from "lucide-react";
import { toast } from "sonner";
import { loginAdmin, verifyAdminToken } from "@/lib/leads-store";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/dashboard/login")({
  head: () => ({
    meta: [
      { title: "Admin Portal Access | Brown Lawn Care & Cleaning Service LLC" },
      { name: "description", content: "Authenticate to access Brown Lawn Care & Cleaning Service business console." },
      { name: "robots", content: "noindex, nofollow" }
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  // Check if already authenticated on mount
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("electrical-session-token");
      if (token) {
        const isValid = await verifyAdminToken(token);
        if (isValid) {
          navigate({ to: "/dashboard" });
          return;
        }
      }
      setCheckingSession(false);
    };
    checkToken();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMsg("Please enter both username and password.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const success = await loginAdmin(username, password);
      if (success) {
        toast.success("Authentication successful. Welcome back!");
        navigate({ to: "/dashboard" });
      } else {
        setErrorMsg("Invalid username or password. Please try again.");
        toast.error("Invalid credentials.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to communicate with authentication server.");
      toast.error("Login failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (checkingSession) {
    return (
      <div className="min-h-screen bg-[#0d0705] flex items-center justify-center">
        <div className="h-6 w-6 rounded-full border-2 border-copper border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0705] flex items-center justify-center px-4 relative overflow-hidden font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar with Return Link */}
      <div className="absolute top-6 left-6 z-20">
        <a 
          href="/" 
          className="text-[10px] text-white/40 hover:text-white uppercase font-bold tracking-widest transition-colors duration-300"
        >
          ← Back to Site
        </a>
      </div>

      <div
        className="w-full max-w-md bg-gradient-to-b from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md border border-white/5 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] p-8 sm:p-10 flex flex-col items-center text-center relative z-10 hover:border-copper/20 transition-all duration-300"
      >
        {/* Logo and Branding */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <img src={logo} alt="Brown Lawn Care & Cleaning Service Logo" className="h-12 w-auto opacity-90 object-contain mb-2 select-none bg-white rounded p-0.5" />
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2E7D32] select-none">Brown Lawn Care & Cleaning</h2>
          <h1 className="text-2xl font-bold font-serif text-white tracking-tight mt-1">Admin Portal</h1>
          <p className="text-[11px] text-white/50 font-medium max-w-xs mt-1 leading-relaxed">
            Access secure management controls, analytics, lead logs, and site reviews.
          </p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className="w-full mb-6 text-left animate-in fade-in slide-in-from-top-2 duration-250">
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3.5 flex items-start gap-3">
              <ShieldAlert className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
              <span className="text-[11px] font-semibold text-rose-350 leading-relaxed">{errorMsg}</span>
            </div>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full text-left space-y-5">
          {/* Username Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Username</label>
            <div className="relative">
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-white/20 focus:border-[#2E7D32] focus:ring-0 focus:outline-none transition-all duration-300"
              />
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-1.5">
            <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Password</label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder-white/20 focus:border-[#2E7D32] focus:ring-0 focus:outline-none transition-all duration-300"
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-[#2E7D32]/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] select-none cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-80 disabled:pointer-events-none mt-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                <span>Accessing...</span>
              </span>
            ) : (
              <>
                <span>Enter Admin Portal</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-6 text-center text-[9px] text-white/30 font-semibold tracking-wider uppercase">
        © {new Date().getFullYear()} Brown Lawn Care &amp; Cleaning Service, LLC · Admin Portal
      </div>
    </div>
  );
}
