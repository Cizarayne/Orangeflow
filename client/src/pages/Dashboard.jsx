import { useNavigate } from "react-router-dom";
import {
  UserRound,
  VenusAndMars,
  Mail,
  Phone,
  TagPlus,
  House,
  Globe,
  Bell,
  Bolt,
  UserRoundCog,
  UserRoundKey,
  UserRoundX,
  LogOut,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
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

export default function Dashboard() {
  const { user, logout, getLastLogin, getLoginHistory } = AuthContext();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [lastLogin, setLastLogin] = useState(null);
  const [loginHistory, setLoginHistory] = useState([]);
  const [isLoadingLastLogin, setIsLoadingLastLogin] = useState(true);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setSettingsOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        setIsLoadingLastLogin(true);
        const [lastLoginValue, historyValue] = await Promise.all([
          getLastLogin(),
          getLoginHistory(),
        ]);
        setLastLogin(lastLoginValue);
        setLoginHistory(historyValue || []);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoadingLastLogin(false);
      }
    };

    fetchLoginData();
  }, [getLastLogin, getLoginHistory]);

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <p className="text-[#1e293b]">No user data available.</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans flex flex-col justify-between pb-24 relative selection:bg-orange-500 selection:text-white">
      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-1 max-w-275 w-full mx-auto px-6 py-10 flex flex-col gap-6">
        {/* HEADER SECTION */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Profile
            </h1>
            <p className="text-sm text-gray-500 mt-0.5">
              View all your profile details here.
            </p>
          </div>

          {/* TOP RIGHT ICON NAV */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Home"
              className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
            >
              <House size={18} />
            </button>

            <button
              type="button"
              onClick={() => navigate("/explore")}
              aria-label="Explore"
              className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm text-gray-700"
            >
              <Globe size={18} />
            </button>

            {/* NOTIFICATION BELL */}
            <div className="relative" ref={notificationRef}>
              <button
                type="button"
                onClick={() => setNotificationOpen((prev) => !prev)}
                aria-label="Notifications"
                aria-expanded={notificationOpen}
                className={`relative w-10 h-10 border rounded-xl flex items-center justify-center transition-colors shadow-sm ${
                  notificationOpen
                    ? "bg-orange-50 border-orange-200 text-[#ff6600]"
                    : "border-gray-200/80 bg-white hover:bg-gray-50 text-gray-700"
                }`}
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff6600] rounded-full" />
              </button>

              {notificationOpen && (
                <div className="fixed left-4 right-4 top-24 md:absolute md:top-auto md:left-auto md:right-0 mt-2 max-w-sm md:w-80 bg-white border border-gray-100/80 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-4 z-50">
                  <p className="text-sm font-bold text-gray-900 mb-3">
                    Notifications
                  </p>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 mb-3">
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                      <Bell size={14} className="text-[#ff6600]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        Last login
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {isLoadingLastLogin
                          ? "Loading…"
                          : lastLogin
                            ? formatLastLogin(lastLogin)
                            : "This is your first login"}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-1 mb-2">
                    Login history
                  </p>

                  {isLoadingLastLogin ? (
                    <p className="text-sm text-gray-500 px-1">Loading…</p>
                  ) : loginHistory.length === 0 ? (
                    <p className="text-sm text-gray-500 px-1">
                      No login history yet.
                    </p>
                  ) : (
                    <ul className="max-h-56 overflow-y-auto space-y-1.5 pr-1">
                      {loginHistory.map((entry, idx) => (
                        <li
                          key={idx}
                          className="flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-xs font-medium text-gray-800">
                            {formatLastLogin(entry.timestamp)}
                          </span>
                          <span className="text-[11px] text-gray-500">
                            {entry.browser} on {entry.os}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* SETTINGS DROPDOWN */}
            <div className="relative" ref={settingsRef}>
              <button
                type="button"
                onClick={() => setSettingsOpen((prev) => !prev)}
                aria-label="Settings"
                aria-expanded={settingsOpen}
                className={`w-10 h-10 border rounded-xl flex items-center justify-center transition-colors shadow-sm ${
                  settingsOpen
                    ? "bg-orange-50 border-orange-200 text-[#ff6600]"
                    : "border-gray-200/80 bg-white hover:bg-gray-50 text-gray-700"
                }`}
              >
                <Bolt size={18} />
              </button>

              {settingsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100/80 rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] py-1.5 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      setSettingsOpen(false);
                      navigate("/edit-profile");
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <UserRoundCog size={16} className="text-gray-500" />
                    Edit profile
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSettingsOpen(false);
                      navigate("/change-password");
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <UserRoundKey size={16} className="text-gray-500" />
                    Change Password
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSettingsOpen(false);
                      navigate("/delete-account");
                    }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <UserRoundX size={16} className="text-red-500" />
                    Delete account
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                logout();
                toast.success("Logged out successfully");
                navigate("/login");
              }}
              aria-label="Logout"
              className="w-10 h-10 border border-gray-200/80 bg-white rounded-xl flex items-center justify-center hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors shadow-sm text-gray-700"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        {/* TOP DUAL CARDS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT COLUMN: AVATAR PRESENTATION ELEMENT */}
          <div className="md:col-span-5 bg-white rounded-2xl p-8 flex flex-col items-center justify-center border border-gray-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-h-85">
            <div className="w-44 h-44 rounded-full bg-white border border-gray-100 p-2 flex items-center justify-center relative shadow-[0_4px_20px_rgba(0,0,0,0.04)] outline-1 outline-orange-500/20">
              <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center relative">
                <UserRound size={90} className="text-gray-300 stroke-[1.5]" />
              </div>
              <div className="absolute bottom-2 right-2 w-7 h-7 bg-[#ff6600] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-xl uppercase font-bold text-gray-900 mt-5 tracking-tight">
              {user.fullname}
            </h2>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-2 border border-gray-200/50">
              @{user.username}
            </span>
          </div>

          {/* RIGHT COLUMN: BIO & PARAMETERS CARD */}
          <div className="md:col-span-7 bg-white rounded-2xl p-8 border border-gray-100/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] relative flex flex-col justify-between min-h-85">
            <div>
              <div className="flex items-center justify-between pb-4">
                <h3 className="text-md font-bold text-gray-900">
                  Bio & other details
                </h3>
                <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-2">
                <div>
                  <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider block">
                    Flow ID
                  </label>
                  <p className="text-sm font-medium text-gray-700 mt-1 flex items-center gap-1.5 break-all">
                    <span className="text-black font-bold">
                      <TagPlus size={20} />
                    </span>{" "}
                    {user._id || "6a44f7c4f6a3a9274250c7cd"}
                  </p>
                </div>
                <div>
                  <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider block">
                    Email Address
                  </label>
                  <p className="text-sm font-medium text-gray-700 mt-1 flex items-center gap-1.5 truncate">
                    <Mail size={20} className="text-black/80 stroke-2" />{" "}
                    {user.email || "promely1@gmail.com"}
                  </p>
                </div>

                <div>
                  <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider block">
                    Phone Number
                  </label>
                  <p className="text-sm font-medium text-gray-700 mt-1 flex items-center gap-1.5">
                    <Phone size={20} className="text-black/80 stroke-2" />{" "}
                    {user.phone || "08146232381"}
                  </p>
                </div>

                <div>
                  <label className="text-[12px] text-gray-400 font-bold uppercase tracking-wider block">
                    Gender Identity
                  </label>
                  <p className="text-sm font-medium text-gray-700 mt-1 flex items-center gap-1.5 capitalize">
                    <span className="text-black text-xs">
                      <VenusAndMars size={20} />
                    </span>{" "}
                    {user.gender || "male"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50/70 border border-slate-100 rounded-xl">
              <p className="text-xs text-slate-500 italic leading-relaxed font-normal">
                "Passionate about streamlining digital workflows and building
                sustainable technology ecosystems for modern professionals."
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: SOCIAL MEDIA PLATFORMS */}
        <div className="bg-white border border-gray-100/80 rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-5">
            Social Media Platforms
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-4 py-2">
            <a
              href={user.socials?.twitter || "https://twitter.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <span className="font-black text-sm text-gray-900 font-sans">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </span>
            </a>
            <a
              href={user.socials?.instagram || "https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
              </svg>
            </a>
            <a
              href={user.socials?.facebook || "https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-800 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"></path>
              </svg>
            </a>
            <a
              href={user.socials?.linkedin || "https://linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-800 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              href={user.socials?.tiktok || "https://tiktok.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-800 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31.01 2.61.01 3.91.02.08 1.53.63 3.05 1.71 4.11.96.91 2.26 1.43 3.59 1.53v3.83c-1.39-.07-2.77-.54-3.92-1.35-.16-.11-.3-.23-.45-.36V13.5c0 1.95-.53 3.91-1.68 5.48-1.56 2.11-4.09 3.3-6.67 3.01-2.91-.32-5.51-2.49-6.31-5.33-.94-3.34.62-7.07 3.73-8.38 1.15-.49 2.42-.64 3.65-.45v3.91c-.81-.24-1.72-.08-2.4.42-.87.65-1.28 1.83-1.04 2.9.27 1.25 1.45 2.19 2.73 2.11 1.44-.09 2.52-1.35 2.46-2.79V0h3.69z"></path>
              </svg>
            </a>
            <a
              href={user.socials?.youtube || "https://youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 border border-gray-200/80 rounded-xl flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
            >
              <svg
                className="w-5 h-5 text-gray-800 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.517 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.503 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.386.507 9.386.507s7.518 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
