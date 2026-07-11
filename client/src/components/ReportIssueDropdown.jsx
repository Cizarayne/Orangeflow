import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Link2, Send, Loader2, CheckCircle2, Zap, Palette, Timer, MessageCircleQuestionMark } from "lucide-react";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1522201447121551511/6a4ok9NPVv9rLvf0LcMHLFfrldxhnu7x6Jddbznx0m1lN8fsNqhmDI6E_0wxByaQrgeK";

const ISSUE_CATEGORIES = [
  { id: "1", label: "Pipeline & Flow failure", icon: Zap, color: "text-amber-500" },
  { id: "2", label: "UI Bug & Visual flaws", icon: Palette, color: "text-purple-500" },
  { id: "3", label: "Severe Latency", icon: Timer, color: "text-blue-500" },
  { id: "4", label: "General questions & Suggestions", icon: MessageCircleQuestionMark, color: "text-emerald-500" },
];

export default function ReportIssueDropdown() {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(ISSUE_CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("idle");

  const selectRef = useRef(null);
  const ActiveIcon = selectedCat.icon;

  useEffect(() => {
    function clickOutside(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) setIsSelectOpen(false);
    }
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "Orange Flow Bot",
          embeds: [{ title: "🚨 Issue Form Entry", fields: [{ name: "Category", value: selectedCat.label }, { name: "Description", value: description }] }]
        }),
      });
      if (res.ok) {
        setStatus("success");
        setDescription("");
        setTimeout(() => { setIsMainOpen(false); setStatus("idle"); }, 2000);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <div className="w-full max-w-4xl font-sans mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#131d23] mb-6 tracking-tight">Support Action Portal</h2>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {/* Accordion Row Header mapped precisely to screenshot blueprint */}
        <button
          type="button"
          onClick={() => setIsMainOpen(!isMainOpen)}
          className="w-full py-4 px-5 flex items-center justify-between text-left font-medium text-gray-900 hover:bg-gray-50/50 transition-colors text-sm md:text-base group"
        >
          <div className="flex items-center gap-3">
            <motion.div animate={{ rotate: isMainOpen ? 90 : 0 }} transition={{ duration: 0.15 }} className="text-gray-400">
              <ChevronRight size={16} strokeWidth={2.5} />
            </motion.div>
            <span>Report a Platform Issue</span>
          </div>
          <Link2 size={16} className="text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>

        <AnimatePresence initial={false}>
          {isMainOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {/* Dropdown Input Form */}
              <form onSubmit={handleSubmit} className="pl-11 pr-5 pb-6 pt-2 border-t border-gray-100 flex flex-col gap-4">
                
                {/* Category Picker using exact Lucide components */}
                <div className="relative" ref={selectRef}>
                  <label className="block text-xs font-bold text-[#5e5e5e] uppercase tracking-wider mb-1.5">Issue Type</label>
                  <button
                    type="button"
                    onClick={() => setIsSelectOpen(!isSelectOpen)}
                    className="w-full h-10 border border-gray-200 rounded-lg px-3 flex items-center justify-between text-sm text-[#131d23] bg-gray-50/50"
                  >
                    <div className="flex items-center gap-2">
                      <ActiveIcon size={16} className={selectedCat.color} />
                      <span>{selectedCat.label}</span>
                    </div>
                    <ChevronRight size={14} className={`text-gray-400 transition-transform duration-150 ${isSelectOpen ? "rotate-90" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isSelectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute left-0 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden py-1 z-50"
                      >
                        {ISSUE_CATEGORIES.map((cat) => {
                          const IconComponent = cat.icon;
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => { setSelectedCat(cat); setIsSelectOpen(false); }}
                              className="w-full h-9 px-3 text-left text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors text-[#131d23]"
                            >
                              <IconComponent size={16} className={cat.color} />
                              <span>{cat.label}</span>
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Text Area Description */}
                <div>
                  <label className="block text-xs font-bold text-[#5e5e5e] uppercase tracking-wider mb-1.5">What happened?</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe the steps to recreate the issue..."
                    rows={3}
                    required
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-[#ff6600] text-[#131d23] bg-gray-50/50 resize-none"
                  />
                </div>

                {/* Submit button status mapping */}
                <div>
                  {status === "success" ? (
                    <div className="w-full h-10 rounded-lg bg-emerald-50 text-emerald-600 font-semibold text-sm flex items-center justify-center gap-2">
                      <CheckCircle2 size={16} /> Report Forwarded to Discord Webhook
                    </div>
                  ) : (
                    <button
                      disabled={status === "loading" || !description.trim()}
                      type="submit"
                      className="w-full h-10 bg-[#ff6600] text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-[#e05a00] disabled:opacity-40 transition-colors"
                    >
                      {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={14} />}
                      Submit Report
                    </button>
                  )}
                </div>

              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}