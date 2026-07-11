import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom"; 
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  CircleUserRound,
  Bell,
  UserRoundCog,
  Bolt,
  Headset,
  ChartPie,
  UserRoundKey,
  UserRoundX,
  ChevronRight,
  ChevronDown,
  Search,
  ArrowRight,
  User,
  UserRoundPen,
  UserStar,
  Mars,
  Venus,
} from "lucide-react";
import { toast } from "sonner";
import { AuthContext } from "../store/Auth";
import logoImg from "../assets/Orangeflow.png"; 
import Loader from "./ui/Loader"; 

/* Expand-on-hover search bar — looks up a user by Flow ID via the public /user/:id endpoint */
function UserIdSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { getuser } = AuthContext();

  const handleSearch = async (event) => {
    event.preventDefault();
    const id = query.trim();
    if (!id) return;

    setLoading(true);
    setError("");
    setResult(null);
    setShowModal(true);

    try {
      const data = await getuser(id);
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || "User not found");
    } finally {
      setLoading(false);
      setQuery(""); 
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setResult(null);
    setError("");
  };

  return (
    <>
      <form onSubmit={handleSearch} className="w-full md:w-auto">
        <div className="flex items-center h-10 w-full md:w-10 md:focus-within:w-64 md:hover:w-64 bg-[#f5faff] border border-[#BFC9D1] rounded-full duration-300 ease-out transition-all overflow-hidden">
          <span className="flex items-center justify-center h-10 w-10 text-[#131d23] shrink-0">
            <Search size={18} />
          </span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by Flow ID"
            className="w-full text-[#131d23] text-sm placeholder:text-zinc-400 bg-transparent outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center h-8 w-8 mr-1 text-[#131d23] hover:text-white rounded-full hover:bg-[#ff6600] transition-all shrink-0"
            aria-label="Search"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </form>

      {/* Result Modal */}
      {showModal &&
        createPortal(
          <div
            className="fixed flex items-start justify-center pt-24 px-5 md:pt-32 bg-black/40 backdrop-blur-sm inset-0 overflow-y-auto z-9999"
            onClick={closeModal}
          >
            <div
              className="relative max-w-md w-full mb-10 p-6 bg-white rounded-2xl shadow-2xl animate-fadeIn drop-shadow-md"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute text-[#ff6600] transition-all hover:opacity-70 right-4 top-4"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <div className="flex justify-center w-full mb-5">
                <div
                  className={`flex items-center justify-center border-2 rounded-[30px] p-4 ${
                    error
                      ? "border-red-500 bg-red-50"
                      : "border-[#ff6600] bg-orange-50/50"
                  }`}
                >
                  <User
                    className={error ? "text-red-500" : "text-black"}
                    size={60}
                  />
                </div>
              </div>

              <section className="max-w-md w-full mb-8 text-center">
                <h1 className="mb-2 font-bold font-sans text-[#131d23] text-3xl">
                  {loading
                    ? "Searching..."
                    : error
                      ? "User Not Found"
                      : "User Found"}
                </h1>
                {!loading && !error && (
                  <p className="text-black text-sm">
                    Here's the profile matching that Flow ID.
                  </p>
                )}
              </section>

              <div className="flex flex-col w-full gap-4">
                {loading && (
                  <div className="flex justify-center py-4">
                    <Loader size={60} color="black" />
                  </div>
                )}

                {!loading && error && (
                  <p className="text-center text-red-500 text-sm">{error}</p>
                )}

                {!loading && result && (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 p-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px]">
                      <span className="text-black">
                        <UserRoundPen size={20} />
                      </span>
                      <div>
                        <p className="text-[#5e5e5e] text-xs tracking-wide uppercase">
                          Full Name
                        </p>
                        <p className="font-medium text-[#131d23]">
                          {result.fullname}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px]">
                      <span className="text-black">
                        <UserStar size={20} />
                      </span>
                      <div>
                        <p className="text-[#5e5e5e] text-xs tracking-wide uppercase">
                          Username
                        </p>
                        <p className="font-medium text-[#131d23]">
                          {result.username}
                        </p>
                      </div>
                    </div>

                    {result.gender && (
                      <div className="flex items-center gap-4 p-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px]">
                        <span className="text-black">
                          {result.gender.toLowerCase() === "female" ? (
                            <Venus size={20} />
                          ) : (
                            <Mars size={20} />
                          )}
                        </span>
                        <div>
                          <p className="text-[#5e5e5e] text-xs tracking-wide uppercase">
                            Gender
                          </p>
                          <p className="font-medium text-[#131d23] capitalize">
                            {result.gender}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  onClick={closeModal}
                  className="relative h-12 w-full mt-2 font-bold text-white bg-black border rounded-[10px] hover:border-[#ff6600] duration-150 transition-all active:scale-95 active:translate-y-0.5"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false); 
  const [isMobileExploreOpen, setIsMobileExploreOpen] = useState(false); 
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMobilePrivacyOpen, setIsMobilePrivacyOpen] = useState(false); 
  
  const dropdownRef = useRef(null);
  const exploreRef = useRef(null);
  const notificationRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [lastLogin, setLastLogin] = useState(null);
  const [loginHistory, setLoginHistory] = useState([]);
  const [isLoadingLastLogin, setIsLoadingLastLogin] = useState(true);

  const { user, logout, getLastLogin, getLoginHistory } = AuthContext();
  const navigate = useNavigate();

  const exploreCategories = [
    "Countries",
    "Wildlife",
    "Automobile",
    "Fashion",
    "Education",
    "Science & Research",
    "Healthcare",
    "Artificial Intelligence",
    "Space & Astronomy",
    "Travel & Tourism",
    "Food & Cuisine",
    "History",
    "Architecture",
    "Aviation",
  ];

  const handleLogout = async () => {
    try {
      await logout();
      closeAllDropdowns();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Something went wrong logging out");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsPrivacyOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!user) return;

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
  }, [user, getLastLogin, getLoginHistory]);

  const closeAllDropdowns = () => {
    setIsDropdownOpen(false);
    setIsPrivacyOpen(false);
    setIsMobilePrivacyOpen(false);
    setIsExploreOpen(false);
    setIsMobileExploreOpen(false);
    setIsOpen(false);
  };

  const handleMouseEnterExplore = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setIsExploreOpen(true);
  };

  const handleMouseLeaveExplore = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setIsExploreOpen(false);
    }, 150); 
  };

  return (
    <nav className="sticky max-w-[92%] xl:max-w-7xl mx-auto my-6 text-[#131d23] bg-white/95 border border-gray-100/50 rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.12)] duration-300 transition-all backdrop-blur-md left-0 right-0 ring-1 ring-black/5 top-6 z-50">
      <div className="w-full px-6 lg:px-10 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                alt="Orangeflow Logo"
                className="h-36 w-auto mt-1 align-left object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="relative py-2 font-sans font-semibold text-[#131d23] text-base hover:text-[#ff6600] duration-300 opacity-80 transition-all hover:opacity-100 group"
            >
              Home
              <span className="absolute h-0.5 w-full bg-[#ff6600] duration-300 ease-out transition-transform bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100" />
            </Link>

            {/* Explore dropdown triggering on hover and linking to /explore on click */}
            <div 
              className="relative" 
              ref={exploreRef}
              onMouseEnter={handleMouseEnterExplore}
              onMouseLeave={handleMouseLeaveExplore}
            >
              <Link
                to="/explore"
                onClick={() => setIsExploreOpen(false)}
                className="flex items-center gap-1 relative py-2 font-sans font-semibold text-[#131d23] text-base hover:text-[#ff6600] duration-300 opacity-80 transition-all hover:opacity-100 focus:outline-none"
              >
                <span>Explore</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isExploreOpen ? "rotate-180" : ""}`} />
              </Link>

              {isExploreOpen && (
                /* Changed w-140 to w-[32rem] (or choose w-96) to prevent container overflow layout breakdown */
                <div className="absolute left-1/2 -translate-x-1/2 w-[32rem] pt-4 mt-0 z-50 transform transition-all animate-fadeIn">
                  <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] grid grid-cols-2 gap-1.5">
                    {exploreCategories.map((category) => (
                      <Link
                        key={category}
                        to={`/explore/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={closeAllDropdowns}
                        className="px-3 py-2 font-semibold text-sm text-zinc-600 hover:text-[#ff6600] rounded-xl hover:bg-[#ff6600]/5 duration-200 transition-all"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="relative py-2 font-sans font-semibold text-[#131d23] text-base hover:text-[#ff6600] duration-300 opacity-80 transition-all hover:opacity-100 group"
            >
              About
              <span className="absolute h-0.5 w-full bg-[#ff6600] duration-300 ease-out transition-transform bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100" />
            </Link>

            <Link
              to="/contact"
              className="relative py-2 font-sans font-semibold text-[#131d23] text-base hover:text-[#ff6600] duration-300 opacity-80 transition-all hover:opacity-100 group"
            >
              Contact
              <span className="absolute h-0.5 w-full bg-[#ff6600] duration-300 ease-out transition-transform bottom-0 left-0 origin-center scale-x-0 group-hover:scale-x-100" />
            </Link>
          </div>

          {/* Desktop Auth CTA Buttons / Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            <UserIdSearch />

            {user ? (
              <>
                {/* NOTIFICATION BELL */}
                <div className="relative" ref={notificationRef}>
                  <button
                    onClick={() => setNotificationOpen((prev) => !prev)}
                    aria-label="Notifications"
                    aria-expanded={notificationOpen}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 focus:outline-none ${
                      notificationOpen
                        ? "text-[#ff6600] bg-[#ff6600]/5"
                        : "text-[#131d23] hover:text-[#ff6600]"
                    }`}
                  >
                    <Bell size={22} strokeWidth={1.5} />
                    <span className="absolute h-2 w-2 bg-[#ff6600] rounded-full right-2 top-2" />
                  </button>

                  {notificationOpen && (
                    <div className="absolute w-80 mt-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] transform transition-all animate-fadeIn origin-top-right right-0 z-50">
                      <p className="mb-3 font-bold text-[#131d23] text-sm">
                        Notifications
                      </p>

                      <div className="flex items-start gap-3 mb-3 p-3 bg-[#f5faff] rounded-xl">
                        <div className="flex items-center justify-center h-8 w-8 bg-orange-50 rounded-full shrink-0">
                          <Bell size={14} className="text-[#ff6600]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-[#131d23] text-sm">
                            Last login
                          </p>
                          <p className="mt-0.5 text-xs text-zinc-500">
                            {isLoadingLastLogin
                              ? "Loading…"
                              : lastLogin
                                ? formatLastLogin(lastLogin)
                                : "This is your first login"}
                          </p>
                        </div>
                      </div>

                      <p className="mb-2 px-1 font-bold text-[10px] text-zinc-400 tracking-wider uppercase">
                        Login history
                      </p>

                      {isLoadingLastLogin ? (
                        <p className="px-1 text-sm text-zinc-500">Loading…</p>
                      ) : loginHistory.length === 0 ? (
                        <p className="px-1 text-sm text-zinc-500">
                          No login history yet.
                        </p>
                      ) : (
                        <ul className="max-h-56 pr-1 space-y-1.5 overflow-y-auto">
                          {loginHistory.map((entry, idx) => (
                            <li
                              key={idx}
                              className="flex flex-col gap-0.5 p-2.5 rounded-lg hover:bg-[#f5faff] transition-colors"
                            >
                              <span className="font-medium text-[#131d23] text-xs">
                                {formatLastLogin(entry.timestamp)}
                              </span>
                              <span className="text-[11px] text-zinc-500">
                                {entry.browser} on {entry.os}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => {
                      setIsDropdownOpen(!isDropdownOpen);
                      if (isDropdownOpen) setIsPrivacyOpen(false);
                    }}
                    className="flex items-center justify-center text-[#131d23] hover:text-[#ff6600] duration-200 transition-all active:scale-95 focus:outline-none"
                    aria-label="User Profile Menu"
                  >
                    <CircleUserRound size={34} strokeWidth={1.5} />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute w-64 mt-3 py-3 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] transform transition-all animate-fadeIn origin-top-right right-0 z-50">
                      <div className="mb-2 px-4 py-2 border-b border-gray-100/80">
                        <p className="font-bold text-[#131d23] text-sm truncate">
                          {user.fullname || "Orangeflow User"}
                        </p>
                        <p className="mt-0.5 text-xs text-zinc-500 truncate">
                          {user.email}
                        </p>
                      </div>

                      <div className="flex flex-col gap-0.5 px-2">
                        <Link
                          to="/dashboard"
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-3 py-2 font-semibold text-sm text-zinc-600 hover:text-[#ff6600] rounded-xl hover:bg-[#ff6600]/5 duration-200 transition-all"
                        >
                          <ChartPie size={18} className="text-zinc-400" />
                          <span>Dashboard</span>
                        </Link>

                        <Link
                          to="/support"
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-3 px-3 py-2 font-semibold text-sm text-zinc-600 hover:text-[#ff6600] rounded-xl hover:bg-[#ff6600]/5 duration-200 transition-all"
                        >
                          <Headset size={18} className="text-zinc-400" />
                          <span>Help & Support</span>
                        </Link>

                        <div>
                          <button
                            onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
                            className="flex items-center justify-between w-full px-3 py-2 font-semibold text-left text-sm text-zinc-600 hover:text-[#ff6600] rounded-xl hover:bg-[#ff6600]/5 duration-200 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <Bolt size={18} className="text-zinc-400" />
                              <span>Privacy & Security</span>
                            </div>
                            {isPrivacyOpen ? (
                              <ChevronDown
                                size={16}
                                className="text-zinc-400"
                              />
                            ) : (
                              <ChevronRight
                                size={16}
                                className="text-zinc-400"
                              />
                            )}
                          </button>

                          {isPrivacyOpen && (
                            <div className="flex flex-col gap-0.5 ml-4 mt-1 pl-2 border-gray-100 border-l transition-all">
                              <Link
                                to="/edit-profile"
                                onClick={closeAllDropdowns}
                                className="flex items-center gap-3 px-3 py-1.5 font-semibold text-xs text-zinc-500 hover:text-[#ff6600] rounded-lg hover:bg-[#ff6600]/5 duration-200 transition-all"
                              >
                                <UserRoundCog
                                  size={16}
                                  className="text-zinc-400"
                                />
                                <span>Edit profile</span>
                              </Link>

                              <Link
                                to="/change-password"
                                onClick={closeAllDropdowns}
                                className="flex items-center gap-3 px-3 py-1.5 font-semibold text-xs text-zinc-500 hover:text-[#ff6600] rounded-lg hover:bg-[#ff6600]/5 duration-200 transition-all"
                              >
                                <UserRoundKey
                                  size={16}
                                  className="text-zinc-400"
                                />
                                <span>Change password</span>
                              </Link>

                              <Link
                                to="/delete-account"
                                onClick={closeAllDropdowns}
                                className="flex items-center gap-3 px-3 py-1.5 font-semibold text-red-500 text-xs rounded-lg hover:bg-red-50 duration-200 transition-all"
                              >
                                <UserRoundX
                                  size={16}
                                  className="text-red-400"
                                />
                                <span>Delete account</span>
                              </Link>
                            </div>
                          )}
                        </div>

                        <hr className="mx-2 my-1 border-gray-100" />

                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full gap-3 px-3 py-2.5 font-bold text-left text-red-600 text-sm rounded-xl hover:bg-red-50 duration-200 transition-all"
                        >
                          <LogOut size={18} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="h-11 px-6 font-bold text-sm text-white bg-[#ff6600] rounded-xl shadow-sm duration-200 transition-all hover:opacity-85 active:scale-[0.98]">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="h-11 px-6 font-bold text-sm text-white bg-black rounded-xl shadow-sm duration-200 transition-all hover:opacity-85 active:scale-[0.98]">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#131d23] hover:text-[#ff6600] duration-200 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="flex flex-col md:hidden gap-4 pb-6 pt-4 px-6 bg-white border-gray-500/30 border-t rounded-b-2xl animate-fadeIn">
          <div className="pb-2 px-1">
            <UserIdSearch />
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-1 font-sans font-semibold text-[#131d23] hover:text-[#ff6600] duration-200 opacity-80 transition-all hover:opacity-100"
            >
              Home
            </Link>

            {/* Mobile Explore Accordion */}
            <div className="flex flex-col">
              <Link
                to="/explore"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-1 font-sans font-semibold text-[#131d23] hover:text-[#ff6600] duration-200 opacity-80 transition-all"
              >
                <span>Explore</span>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsMobileExploreOpen(!isMobileExploreOpen);
                  }}
                  className="p-1"
                >
                  {isMobileExploreOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </button>
              </Link>

              {isMobileExploreOpen && (
                <div className="grid grid-cols-2 gap-2 ml-2 pl-4 py-2 border-gray-200 border-l max-h-64 overflow-y-auto">
                  {exploreCategories.map((category) => (
                    <Link
                      key={category}
                      to={`/explore/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={closeAllDropdowns}
                      className="py-1 font-sans text-sm font-medium text-zinc-600 hover:text-[#ff6600]"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="py-1 font-sans font-semibold text-[#131d23] hover:text-[#ff6600] duration-200 opacity-80 transition-all hover:opacity-100"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="py-1 font-sans font-semibold text-[#131d23] hover:text-[#ff6600] duration-200 opacity-80 transition-all hover:opacity-100"
            >
              Contact
            </Link>
          </div>

          <hr className="border-gray-500/20" />

          {/* Mobile Auth Actions */}
          <div className="flex flex-col gap-3">
            {user ? (
              <div className="flex flex-col gap-2 p-4 bg-[#f5f5f5]/40 border border-gray-500/10 rounded-xl">
                <div className="pb-2 px-1 border-b border-gray-500/20">
                  <p className="font-bold text-[#131d23] text-base truncate">
                    {user.fullname || "Orangeflow User"}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 truncate">
                    {user.email}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2 font-sans font-semibold text-[#131d23]/90">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 py-1"
                  >
                    <ChartPie size={18} className="text-zinc-600" /> Dashboard
                  </Link>
                  
                  <Link
                    to="/support"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 py-1"
                  >
                    <Headset size={18} className="text-zinc-600" /> Help &
                    Support
                  </Link>

                  <div className="flex flex-col gap-2 mt-1">
                    <button
                      onClick={() =>
                        setIsMobilePrivacyOpen(!isMobilePrivacyOpen)
                      }
                      className="flex items-center justify-between w-full py-1 font-semibold text-[#131d23]/90 text-base text-left"
                    >
                      <div className="flex items-center gap-2.5">
                        <Bolt size={18} className="text-zinc-600" />
                        <span>Privacy & Security</span>
                      </div>
                      {isMobilePrivacyOpen ? (
                        <ChevronDown size={18} className="text-zinc-500" />
                      ) : (
                        <ChevronRight size={18} className="text-zinc-500" />
                      )}
                    </button>

                    {isMobilePrivacyOpen && (
                      <div className="flex flex-col gap-2.5 ml-2 pl-4 py-1 border-gray-200 border-l transition-all">
                        <Link
                          to="/edit-profile"
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-[#ff6600]"
                        >
                          <UserRoundCog size={16} /> Edit profile
                        </Link>
                        <Link
                          to="/change-password"
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-2.5 text-sm text-zinc-600 hover:text-[#ff6600]"
                        >
                          <UserRoundKey size={16} /> Change password
                        </Link>
                        <Link
                          to="/delete-account"
                          onClick={closeAllDropdowns}
                          className="flex items-center gap-2.5 text-red-600 text-sm hover:opacity-80"
                        >
                          <UserRoundX size={16} /> Delete account
                        </Link>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center h-11 w-full gap-2 mt-4 font-bold text-sm text-white bg-red-600 rounded-[10px] shadow-sm duration-200 transition-all active:scale-[0.98]"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <button className="h-12 w-full font-bold text-white bg-[#ff6600] rounded-[10px] shadow-sm duration-200 transition-all hover:opacity-85 active:scale-[0.98]">
                    Login
                  </button>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <button className="h-12 w-full font-bold text-white bg-black rounded-[10px] shadow-sm duration-200 transition-all hover:opacity-85 active:scale-[0.98]">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}