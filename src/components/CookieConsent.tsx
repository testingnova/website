import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const GA_MEASUREMENT_ID = "G-NNQ7GRZ4KR";
const CONSENT_KEY = "tn-cookie-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

function ensureGtagScript() {
  if (document.getElementById("ga-gtag-script")) return;
  const script = document.createElement("script");
  script.id = "ga-gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

// Full tracking: sets the standard GA client-id cookie, persists across visits.
function loadGoogleAnalytics() {
  ensureGtagScript();
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
  gtag("event", "cookie_consent", { consent_choice: "accepted" });
}

// Cookieless ping: counts a decline without setting any cookie or persistent
// client ID (client_storage: "none"), so it can't be linked to this visitor
// on a future visit — it only increments an aggregate "declined" count.
function pingDecline() {
  ensureGtagScript();
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, { client_storage: "none", send_page_view: false });
  gtag("event", "cookie_consent", { consent_choice: "declined" });
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "granted") {
      loadGoogleAnalytics();
    } else if (consent !== "denied") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "granted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "denied");
    pingDecline();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
          <Cookie className="w-5 h-5 text-brand-600" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed flex-grow">
          We use cookies to understand how visitors use our site via Google Analytics. No personal data is sold or shared with third parties.
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 border border-slate-200 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg text-sm font-medium bg-brand-600 text-white hover:bg-brand-900 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
