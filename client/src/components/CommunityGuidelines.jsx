import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Link2 } from "lucide-react";

const SECTIONS = [
  {
    id: "1",
    title: "Be Respectful",
    content:
      "Treat other users with kindness and respect. Personal attacks, harassment, discrimination, hate speech, bullying, or abusive language will not be tolerated.",
  },
  {
    id: "2",
    title: "Stay On Topic",
    content:
      "Keep comments and discussions relevant to the article or subject being discussed. Off-topic, repetitive, or promotional content may be removed.",
  },
  {
    id: "3",
    title: "Share Accurate Information",
    content:
      "When contributing facts or opinions, strive to be accurate and avoid spreading misinformation. If you discover an error, feel free to report it so we can review and correct it.",
  },
  {
    id: "4",
    title: "No Spam or Self-Promotion",
    content:
      "Do not post unsolicited advertisements, affiliate links, repetitive messages, or excessive self-promotion. Promotional content without prior approval may be removed.",
  },
  {
    id: "5",
    title: "Respect Intellectual Property",
    content:
      "Only share content that you have the right to use. Do not upload or copy copyrighted material without permission or proper attribution.",
  },
  {
    id: "6",
    title: "Protect Privacy",
    content:
      "Do not post personal, confidential, or sensitive information about yourself or others, including phone numbers, addresses, financial information, or private communications.",
  },
  {
    id: "7",
    title: "Report Problems Responsibly",
    content:
      "If you encounter abusive behavior, broken content, or inaccurate information, please report it through our support channels rather than engaging in arguments.",
  },
  {
    id: "8",
    title: "Moderation",
    content:
      "Orangeflow reserves the right to edit, hide, or remove comments or user-generated content that violates these guidelines. Repeated or serious violations may result in temporary or permanent restrictions on participation.",
  },
  {
    id: "9",
    title: "Updates",
    content:
      "These Community Guidelines may be updated periodically to reflect changes in our platform, services, or legal requirements. Continued use of Orangeflow signifies your acceptance of the latest version.",
  },
];

export default function CommunityGuidelines() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="w-full max-w-4xl font-sans mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#131d23] mb-6 tracking-tight">
        Community Guidelines
      </h2>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {SECTIONS.map((item, idx) => {
          const isOpen = expanded === item.id;
          return (
            <div
              key={item.id}
              className={idx !== 0 ? "border-t border-gray-200" : ""}
            >
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : item.id)}
                className="w-full py-4 px-5 flex items-center justify-between text-left font-medium text-gray-900 hover:bg-gray-50/50 transition-colors text-sm md:text-base group"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-gray-400"
                  >
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </motion.div>
                  <span>{item.title}</span>
                </div>
                <Link2
                  size={16}
                  className="text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="pl-11 pr-12 pb-4 text-sm text-[#5e5e5e] leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
