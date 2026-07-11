import { Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Accent Bar */}
      <div className="h-2 w-full bg-linear-to-r from-orange-500 to-orange-600" />

      {/* Main Content Layout Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 grow flex flex-col justify-center gap-12 w-full">
        
        {/* SECTION 1: Asymmetric Hero Container */}
        <section className="w-full bg-linear-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl overflow-hidden relative p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 min-h-72">
          {/* Left Layout Data */}
          <div className="max-w-xl flex flex-col items-center text-center md:items-start md:text-left z-10">
            <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Legal Documentation
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-orange-50 text-base md:text-lg leading-relaxed max-w-lg">
              Effective Date: July 1, 2026
            </p>
            <p className="mt-3 text-orange-100 text-sm max-w-md">
              Welcome to OrangeFlow. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            {/* Context Actions (Updated: Arrow icon removed) */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link 
                to="/" 
                className="px-6 py-3 bg-slate-950 text-white font-semibold rounded-xl text-sm transition-all duration-200 hover:bg-slate-900 active:scale-95 shadow-md"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Right Layout Decorative Vector */}
          <div className="hidden md:flex relative w-48 h-48 shrink-0 items-center justify-center opacity-20 pointer-events-none select-none">
            <span className="text-[180px] font-black font-mono leading-none tracking-tighter text-white">
              §
            </span>
          </div>
        </section>

        {/* SECTION 2: Agreement Banner */}
        <div className="bg-orange-50/60 border border-orange-100 p-5 rounded-2xl text-slate-700 text-sm md:text-base text-center font-medium">
          By using OrangeFlow, you agree to the practices described in this Privacy Policy.
        </div>

        {/* SECTION 3: Main Policy Body Container */}
        <section className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xs flex flex-col gap-10 text-slate-700">
          
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="text-orange-500 font-mono text-base">1.</span> Information We Collect
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-slate-600">We may collect the following types of information:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-orange-600">Personal Information</h3>
                <p className="text-xs text-slate-500 mb-3">When you voluntarily provide it, we may collect information such as:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile information</li>
                  <li>Any information submitted through contact forms, newsletter subscriptions, comments, or account registration</li>
                </ul>
              </div>

              <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Non-Personal Information</h3>
                <p className="text-xs text-slate-500 mb-3">We may automatically collect certain technical information, including:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device info & Operating system</li>
                  <li>Pages visited & Time spent on pages</li>
                  <li>Referring website & Cookies</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              <span className="text-orange-500 font-mono text-base">2.</span> How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed mb-4">We may use your information to:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm bg-slate-50/50 p-5 rounded-xl border border-slate-100">
              <ul className="list-disc list-inside space-y-1.5">
                <li>Provide and maintain our website</li>
                <li>Improve user experience</li>
                <li>Personalize content</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send newsletters (only if you subscribe)</li>
              </ul>
              <ul className="list-disc list-inside space-y-1.5">
                <li>Notify you of updates and new content</li>
                <li>Monitor website performance and analytics</li>
                <li>Detect fraud, abuse, or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                <span className="text-orange-500 font-mono text-base">3.</span> Cookies
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                OrangeFlow uses cookies and similar technologies to improve functionality and enhance your browsing experience. Cookies may be used to remember user preferences, keep users logged in, and analyze website traffic. You can disable cookies through your browser settings, although some features of the website may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
                <span className="text-orange-500 font-mono text-base">4.</span> Analytics
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We may use third-party analytics services to understand how visitors interact with our website. These services collect parameters like pages visited, time spent on the site, device/browser information, and referral sources to help us improve our services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50/40 border border-slate-100 p-5 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-2">5. Newsletter</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                If you subscribe to our newsletter, we use your email solely to send new articles, updates, announcements, and promotional content. Unsubscribe at any time via the link in our emails.
              </p>
            </div>
            <div className="bg-slate-50/40 border border-slate-100 p-5 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-2">6. User Accounts</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                If you create an account, you are responsible for maintaining the credentials' confidentiality. We encourage users to choose strong passwords and never share account credentials.
              </p>
            </div>
            <div className="bg-slate-50/40 border border-slate-100 p-5 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-2">7. Comments & Content</h3>
              <p className="text-xs leading-relaxed text-slate-600">
                If commenting is enabled, any content you choose to publish may be publicly visible. Please avoid posting sensitive or confidential details in public areas of the website.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">8. Third-Party Links</h2>
              <p className="text-xs leading-relaxed text-slate-600">
                OrangeFlow may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage users to review the privacy policies of any external websites they visit.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">9. Data Sharing</h2>
              <p className="text-xs leading-relaxed text-slate-600">
                We do not sell your personal information. We may share information only when necessary: with trusted service providers who help operate our website, to comply with legal obligations, to prevent fraud, or during a business transfer.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">10. Data Retention</h2>
              <p className="text-xs leading-relaxed text-slate-600">
                We retain personal information only for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our policies. When no longer required, it will be securely deleted or anonymized.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">11. Data Security</h2>
              <p className="text-xs leading-relaxed text-slate-600">
                We implement reasonable administrative, technical, and organizational measures to protect your information against unauthorized access or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="max-w-md">
              <h3 className="font-bold text-white mb-1 text-base">12. Children's Privacy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                OrangeFlow is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take steps to delete it.
              </p>
            </div>
            <div className="max-w-md">
              <h3 className="font-bold text-white mb-1 text-base">13. Your Rights</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Depending on your location, you may have the right to access, correct, delete, restrict, or request a copy of your personal data. To exercise these rights, please drop us a line below.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">14. Changes to This Privacy Policy</h2>
            <p className="text-xs leading-relaxed text-slate-500">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes become effective constitutes acceptance of the revised Privacy Policy.
            </p>
          </div>

        </section>

        {/* SECTION 4: Direct Business Channels & Closing Statement */}
        <section id="contact" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-slate-200 pt-10">
          {/* Direct Channels */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-xs max-w-md mx-auto md:mx-0 w-full">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-[#ff6600] shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                15. Contact Privacy Office
              </span>
              <a href="mailto:privacy@orangeflow.com" className="text-base font-bold text-slate-800 hover:text-[#ff6600] transition-colors block">
                privacy@orangeflow.com
              </a>
              <a href="https://orangeflow.com" target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:underline inline-flex items-center gap-0.5 mt-0.5">
                orangeflow.com <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Final Statement Paragraph */}
          <div className="text-center md:text-right">
            <p className="text-slate-700 italic font-medium text-sm leading-relaxed max-w-sm md:ml-auto">
              "Thank you for trusting OrangeFlow. We are committed to protecting your privacy and providing a safe, transparent, and enjoyable experience for all of our readers."
            </p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-orange-500">
              Live smarter. Move forward. Think OrangeFlow.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}