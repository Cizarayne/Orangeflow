export default function SocialButtons() {
  return (
<div className="bg-[#f5faff] flex flex-wrap gap-4 p-6 justify-center items-center rounded-2xl">
  
  {/* X (Twitter) */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-x.svg" alt="X" className="w-6 h-6 object-contain" />
  </div>

  {/* Instagram */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-instagram.svg" alt="Instagram" className="w-6 h-6 object-contain" />
  </div>

  {/* Facebook */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-facebook.svg" alt="Facebook" className="w-6 h-6 object-contain" />
  </div>

  {/* LinkedIn */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-linkedin.svg" alt="LinkedIn" className="w-6 h-6 object-contain" />
  </div>

  {/* TikTok */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-tiktok.svg" alt="TikTok" className="w-6 h-6 object-contain" />
  </div>

  {/* YouTube */}
  <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[15px] p-3 bg-orange-50/50 hover:bg-orange-100/50 hover:scale-110 hover:-rotate-3 active:scale-95 transition-all duration-300 ease-out cursor-pointer shadow-sm">
    <img src="https://s.magecdn.com/social/mb-youtube.svg" alt="YouTube" className="w-6 h-6 object-contain" />
  </div>

</div>
  );
}
