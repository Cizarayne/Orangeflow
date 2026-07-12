import { Lock, Key, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../store/Auth";
import Loader from "../../components/ui/Loader";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { resetPassword } = AuthContext();
  const navigate = useNavigate();
  const { token } = useParams(); // grabs :token from the URL

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const res = await resetPassword(
        token,
        formData.password,
        formData.confirmPassword
      );

      toast.success(res.message || "Password reset successful, you can now login");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || error.message || "Something went wrong"
      );
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
            Reset your password
          </h1>
          <p className="text-black text-sm">Must be at least 8 characters.</p>
        </section>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={8}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength={8}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-120 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="white" /> : "Confirm Reset"}
          </button>
        </form>
      </div>
      <div className="h-12"></div>
    </main>
  );
}