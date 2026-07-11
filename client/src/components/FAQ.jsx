import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Link2 } from "lucide-react";

const FAQ_ITEMS = [
  { id: "1", question: "What is Orangeflow?", answer: "Orangeflow is an online platform that publishes informative articles, news, insights, and educational content across a variety of topics to help readers stay informed and discover new ideas." },
  { id: "2", question: "Is Orangeflow free to use?", answer: "Yes. Browsing and reading articles on Orangeflow is free. Some features or services may require an account if introduced in the future." },
  { id: "3", question: "How often is new content published?", answer: "We regularly publish new articles and update existing content to ensure our readers have access to fresh and relevant information." },
  { id: "4", question: "How can I report an error or incorrect information?", answer: "If you notice inaccurate information, broken links, or technical issues, please visit our Help & Support page or contact us using our support form. We appreciate feedback that helps us improve." },
  { id: "5", question: "Can I contribute articles to Orangeflow?", answer: "Yes. We welcome contributions from writers and subject matter experts. Visit our 'Write for Us' page to learn about our submission guidelines and editorial process." }
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="w-full max-w-4xl font-sans mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#131d23] mb-6 tracking-tight">FAQ</h2>
      
      {/* Unified Multi-row Card Body */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = expanded === item.id;
          return (
            <div key={item.id} className={idx !== 0 ? "border-t border-gray-200" : ""}>
              <button
                type="button"
                onClick={() => setExpanded(isOpen ? null : item.id)}
                className="w-full py-4 px-5 flex items-center justify-between text-left font-medium text-gray-900 hover:bg-gray-50/50 transition-colors text-sm md:text-base group"
              >
                <div className="flex items-center gap-3">
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.15 }} className="text-gray-400">
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </motion.div>
                  <span>{item.question}</span>
                </div>
                <Link2 size={16} className="text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity" />
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
                      {item.answer}
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