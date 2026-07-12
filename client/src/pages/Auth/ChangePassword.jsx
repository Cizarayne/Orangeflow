import { Lock, Key, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "../../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Auth";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentpassword: "",
    newpassword: "",
    confirmnewpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { changepassword } = AuthContext();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (formData.newpassword !== formData.confirmnewpassword) {
        throw new Error("Passwords do not match");
      }
      if (formData.newpassword.length < 6) {
        throw new Error("New password must be at least 6 characters long");
      }

      await changepassword(formData);
      toast.success("Password changed successfully, please login again");
      navigate("/login");
    } catch (error) {
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 401) {
        toast.error(serverMessage || "Current password is incorrect");
      } else if (status === 400) {
        toast.error(serverMessage || "Invalid input, please check your details");
      } else {
        toast.error(serverMessage || error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        <div className="flex justify-center w-full mb-5">
          <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[30px] p-4 bg-orange-50/50">
            <Key className="text-[#000000]" size={60} />
          </div>
        </div>

        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Change your password
          </h1>
          <p className="text-black text-sm">Must be at least 6 characters.</p>
        </section>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Current Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="currentpassword"
              value={formData.currentpassword}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Current Password"
              type={showOldPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowOldPassword((prev) => !prev)}
            >
              {showOldPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          {/* New Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="newpassword"
              value={formData.newpassword}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="New Password"
              type={showNewPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowNewPassword((prev) => !prev)}
            >
              {showNewPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          {/* Confirm New Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="confirmnewpassword"
              value={formData.confirmnewpassword}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Confirm New Password"
              type={showConfirmPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-120 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="white" /> : "Change Password"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full h-12 border border-[#BFC9D1] text-[#131d23] font-bold rounded-[10px] hover:bg-[#f5faff] transition-all"
          >
            Cancel
          </button>
        </form>
      </div>

      <div className="h-12"></div>
    </main>
  );
}