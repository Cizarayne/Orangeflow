import { useState } from "react";
import { Mail, ArrowUpRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput) return;

    // Simulate subscription success
    setIsSubscribed(true);
    setEmailInput("");
    setTimeout(() => setIsSubscribed(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Accent Bar */}
      <div className="h-2 w-full" />

      {/* Main Content Layout Container */}
      <main className="max-w-5xl mx-auto px-6 py-16 grow flex flex-col justify-center gap-12 w-full">
        {/* SECTION 1: Asymmetric Hero Container (Inspired by Screenshot 2026-06-29 173857.png) */}
        <section className="w-full bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl overflow-hidden relative p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 min-h-80">
          {/* Left Layout Data */}
          <div className="max-w-xl flex flex-col items-center text-center md:items-start md:text-left z-10">
            <div className="inline-block bg-orange-100  backdrop-blur-md text-orange-500 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Contact Us for Collaboration
            </h1>
            <p className="text-orange-50 italic text-base md:text-lg leading-relaxed max-w-lg">
              We love hearing from our readers whether it's a burning question
              about AI in healthcare, a tip on the latest EV breakthrough, or
              just a note to say hi. Your insights make this community smarter.
            </p>

            {/* Context Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a className="px-6 py-3 bg-slate-950 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-slate-900 active:scale-95 shadow-md">
                Our Socials
              </a>
              <a
                href="mailto:hello@orangefow.com"
                className="flex items-center gap-1 text-sm font-bold text-white hover:underline underline-offset-4"
              >
                Direct Mail <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Layout Decorative Vector - Reminiscent of the letter cutout structure */}
          <div className="hidden md:flex relative w-64 h-64 shrink-0 items-center justify-center opacity-25 pointer-events-none select-none">
            <span className="text-[220px] font-black font-mono leading-none tracking-tighter text-white">
              -ˋˏ ༻❁༺ ˎˊ-
            </span>
          </div>
          {/* SECTION 2: Social Channels Grid Wrapper */}
          <section
            id="channels"
            className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-center max-w-3xl mx-auto w-full"
          >
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Reach out through any of our social channels
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              DM us, tag us, or drop a comment we're active and we reply.
            </p>

            {/* Interactive Social Buttons Div Template */}
            <div className="flex flex-wrap gap-4 p-2 justify-center items-center">
              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-x.svg"
                  alt="X"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-linkedin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-tiktok.svg"
                  alt="TikTok"
                  className="w-6 h-6 object-contain"
                />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
              >
                <img
                  src="https://s.magecdn.com/social/mb-youtube.svg"
                  alt="YouTube"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </section>
        </section>

        {/* SECTION 3: Dark Mode Newsletter Panel (Inspired by Screenshot 2026-06-30 012328.png) */}
        <section className="w-full bg-[#131d23] rounded-3xl shadow-lg p-8 md:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Column */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Subscribe to our newsletter
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Prefer a quieter route? Subscribe to our weekly email newsletter
              and get the week's best posts distilled straight to your inbox. No
              spam, no fluff just handpicked insights on tech, science, health,
              transport, and lifestyle, delivered every Sunday morning.
            </p>
          </div>

          {/* Right Input and Button Column */}
          <div className="w-full lg:w-auto shrink-0 max-w-md">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch gap-3 w-full"
            >
              <div className="relative grow">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Write your email here..."
                  required
                  className="w-full h-12 px-4 bg-slate-900/60 border border-slate-700 rounded-xl text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#ff6600] focus:ring-1 focus:ring-[#ff6600] transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className={`h-12 px-6 font-bold rounded-xl text-sm tracking-wide shrink-0 transition-all duration-200 active:scale-95 ${
                  isSubscribed
                    ? "bg-emerald-500 text-white cursor-default flex items-center justify-center gap-1"
                    : "bg-white text-black hover:bg-slate-100 shadow-md"
                }`}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle size={16} /> Subscribed
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            <div className="mt-2 text-center sm:text-left">
              <span className="text-[11px] text-slate-500 tracking-wide">
                Unsubscribe anytime. We mean it. By subscribing, you agree to
                our{" "}
                <Link
                  to="/privacy-policy"
                  className="underline hover:text-slate-300 cursor-pointer"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 4: Direct Business Channels & Closing Statement */}
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-200 pt-10">
          {/* Direct Channels */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-xs max-w-md mx-auto md:mx-0 w-full">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-[#ff6600] shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Partnerships & Press
              </span>
              <a
                href="mailto:hello@orangefow.com"
                className="text-base font-bold text-slate-800 hover:text-[#ff6600] transition-colors block"
              >
                hello@orangefow.com
              </a>
              <span className="text-xs text-slate-400 block mt-0.5">
                We aim to respond within 24 hours.
              </span>
            </div>
          </div>

          {/* Final Statement Paragraph */}
          <div className="text-center md:text-right">
            <p className="text-slate-700 italic font-medium text-lg leading-relaxed">
              Whether you're here to learn, share, or collaborate welcome. Let's
              move forward together.
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-orange-500">
              Live smarter. Move forward. Think orangefow.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
