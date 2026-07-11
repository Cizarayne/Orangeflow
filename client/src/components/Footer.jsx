import { Link } from "react-router-dom";
import logoImg from "../assets/Orangeflow.png"; // Adjust this path based on your folder structure[cite: 2]

export default function Footer() {
  const currentYear = new Date().getFullYear(); // cite: 2

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }; // cite: 2

  return (
    <footer className="bg-black text-white border-t border-zinc-800/80 font-sans antialiased selection:bg-[#ff6600] selection:text-white relative"> {/* cite: 2 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12"> {/* cite: 2 */}
        {/* Top Section: Brand & Nav Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-zinc-800/60"> {/* cite: 2 */}
          {/* Logo Section */}
          <div className="shrink-0 flex items-center"> {/* cite: 2 */}
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              {/* Optional grayscale-to-color effect on hover to match sleek tech vibe */}
              <img
                src={logoImg}
                alt="Orangeflow Logo"
                className="h-28 w-auto object-contain brightness-0 invert tracking-wide transition-all duration-300 hover:brightness-100 hover:invert-0"
              /> {/* cite: 2 */}
            </Link>
          </div>

          {/* Minimal Quick Links & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8"> {/* cite: 2 */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium"> {/* cite: 2 */}
              <Link
                to="/"
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-white hover:underline decoration-[#ff6600] decoration-2 underline-offset-4 transition-all duration-200"
              >
                Home
              </Link> {/* cite: 2 */}
              <Link
                to="/explore"
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-white hover:underline decoration-[#ff6600] decoration-2 underline-offset-4 transition-all duration-200"
              >
                Explore
              </Link> {/* cite: 2 */}
              <Link
                to="/about"
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-white hover:underline decoration-[#ff6600] decoration-2 underline-offset-4 transition-all duration-200"
              >
                About
              </Link> {/* cite: 2 */}
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-white hover:underline decoration-[#ff6600] decoration-2 underline-offset-4 transition-all duration-200"
              >
                Contact
              </Link> {/* cite: 2 */}

              {/* Added Help & Support Link */}
              <Link
                to="/support"
                onClick={scrollToTop}
                className="text-zinc-400 hover:text-white hover:underline decoration-[#ff6600] decoration-2 underline-offset-4 transition-all duration-200"
              >
                Help & Support
              </Link> {/* cite: 2 */}
            </nav>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="text-xs font-semibold uppercase tracking-widest text-[#ff6600] hover:text-white flex items-center gap-1.5 transition-colors duration-200 group focus:outline-none"
              aria-label="Back to top"
            >
              Back to top {/* cite: 2 */}
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span> {/* cite: 2 */}
            </button>
          </div>
        </div>

        {/* Bottom Section: Copyright, Inspiration & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8"> {/* cite: 2 */}
          {/* Copyright Statement */}
          <p className="text-xs text-[#E6F5FF] order-3 md:order-1 tracking-wide"> {/* cite: 2 */}
            &copy; {currentYear}{" "}
            <span className="text-zinc-300 font-semibold">Orangefow</span>. Live
            smarter. Move forward. {/* cite: 2 */}
          </p>

          {/* Minimal Inspiration Message */}
          <p className="text-xs italic text-[#E6F5FF] order-2 tracking-wider font-light"> {/* cite: 2 */}
            Built to inspire. Designed to scale. {/* cite: 2 */}
          </p>

          {/* Social Icons with Orange Border and Interactive Transformations */}
          <div className="flex flex-wrap gap-3 order-1 md:order-3 items-center"> {/* cite: 2 */}
            {/* X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border border-[#ff6600]/80 rounded-2xl p-2 bg-zinc-950 hover:bg-zinc-900 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
            > {/* cite: 2 */}
              <img
                src="https://s.magecdn.com/social/mb-x.svg"
                alt="X"
                className="w-5 h-5 object-contain brightness-0 invert"
              /> {/* cite: 2 */}
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border border-[#ff6600]/80 rounded-2xl p-2 bg-zinc-950 hover:bg-zinc-900 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
            > {/* cite: 2 */}
              <img
                src="https://s.magecdn.com/social/mb-instagram.svg"
                alt="Instagram"
                className="w-5 h-5 object-contain brightness-0 invert"
              /> {/* cite: 2 */}
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border border-[#ff6600]/80 rounded-2xl p-2 bg-zinc-950 hover:bg-zinc-900 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
            > {/* cite: 2 */}
              <img
                src="https://s.magecdn.com/social/mb-facebook.svg"
                alt="Facebook"
                className="w-5 h-5 object-contain brightness-0 invert"
              /> {/* cite: 2 */}
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center border border-[#ff6600]/80 rounded-2xl p-2 bg-zinc-950 hover:bg-zinc-900 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out shadow-sm"
            > {/* cite: 2 */}
              <img
                src="https://s.magecdn.com/social/mb-linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 object-contain brightness-0 invert"
              /> {/* cite: 2 */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}