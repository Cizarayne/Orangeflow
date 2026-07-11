import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Link2 } from "lucide-react";

const POLICY_ITEMS = [
  { id: "1", title: "Ownership", content: "Unless otherwise stated, all articles, graphics, logos, designs, and original content published on Orangeflow are the property of Orangeflow or its respective content creators and are protected by applicable copyright laws.[cite: 4]" },
  { id: "2", title: "Permitted Use", content: "You may: Read and share links to our content. Quote short excerpts with proper attribution and a link back to the original article where applicable. Use content only as permitted by applicable copyright laws.[cite: 4]" },
  { id: "3", title: "Prohibited Use", content: "Without prior written permission, you may not: Copy or republish entire articles. Reproduce our content for commercial purposes. Remove copyright notices or branding. Distribute modified versions of our original content as your own.[cite: 4]" },
  { id: "4", title: "User-Submitted Content", content: "By submitting content to Orangeflow, you confirm that you own the necessary rights or have permission to share the material. You also grant Orangeflow a non-exclusive license to display, publish, and distribute your submitted content as part of our services.[cite: 4]" },
  { id: "5", title: "Copyright Infringement", content: "If you believe your copyrighted work has been used on Orangeflow without authorization, please contact us with: Your name and contact information, a description of the copyrighted work, the URL or location of the allegedly infringing content, and a statement that you believe the use is unauthorized. We will review all valid reports and take appropriate action.[cite: 4]" },
  { id: "6", title: "Changes", content: "Orangeflow reserves the right to update this Copyright Policy at any time. Any changes become effective immediately upon publication.[cite: 4]" }
];

export default function CopyrightPolicy() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="w-full max-w-4xl font-sans mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#131d23] mb-6 tracking-tight">Copyright Policy</h2>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        {POLICY_ITEMS.map((item, idx) => {
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
                  <span>{item.title}</span>
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