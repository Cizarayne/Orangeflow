import { useState, useEffect, useRef } from "react";
import { Bell } from "lucide-react";
import { AuthContext } from "../store/Auth";

// Formats an ISO date string into "6th july, 2026 7:20AM"
function formatLastLogin(isoDate) {
  if (!isoDate) return null;

  const date = new Date(isoDate);
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  const month = date.toLocaleString("en-US", { month: "long" }).toLowerCase();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${day}${suffix} ${month}, ${year} ${hours}:${minutes}${ampm}`;
}

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function Notification() {
  const { getLastLogin, getLoginHistory } = AuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const [lastLogin, setLastLogin] = useState(null);
  const [loginHistory, setLoginHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  // Close the panel on any click outside the bell/dropdown
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [lastLoginValue, historyValue] = await Promise.all([
          getLastLogin(),
          getLoginHistory(),
        ]);
        setLastLogin(lastLoginValue);
        setLoginHistory(historyValue || []);
      } catch (err) {
        setError(err.message || "Couldn't load login activity");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [getLastLogin, getLoginHistory]);

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Bell trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-11 h-11 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-[#FF5C00] hover:border-[#FF5C00] bg-white transition-all duration-200"
        title="Notifications"
      >
        <Bell size={18} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF5C00]" />
      </button>

      {/* Dropdown panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-lg border border-neutral-100 p-4 z-50">
          <p className="text-sm font-semibold text-neutral-800 mb-3">
            Notifications
          </p>

          {isLoading && (
            <p className="text-sm text-neutral-500 px-1">Loading activity…</p>
          )}

          {!isLoading && error && (
            <p className="text-sm text-red-500 px-1">{error}</p>
          )}

          {!isLoading && !error && (
            <>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#FF5C00]/10 flex items-center justify-center shrink-0">
                  <Bell size={14} className="text-[#FF5C00]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-800 font-medium">
                    Last login
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {lastLogin
                      ? formatLastLogin(lastLogin)
                      : "This is your first login"}
                  </p>
                </div>
              </div>

              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider px-1 mb-2">
                Login history
              </p>

              {loginHistory.length === 0 ? (
                <p className="text-sm text-neutral-500 px-1">
                  No login history yet.
                </p>
              ) : (
                <ul className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                  {loginHistory.map((entry, idx) => (
                    <li
                      key={idx}
                      className="flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <span className="text-xs font-medium text-neutral-800">
                        {formatLastLogin(entry.timestamp)}
                      </span>
                      <span className="text-[11px] text-neutral-500">
                        {entry.browser} on {entry.os}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}