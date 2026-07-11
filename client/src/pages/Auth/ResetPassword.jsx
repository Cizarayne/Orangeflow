import { Lock, Key, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Auth";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { resetPassword } = AuthContext();
  const navigate = useNavigate();

  const getIdentifierType = (value) => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "email";
    if (/^\+?[\d\s]{7,15}$/.test(value)) return "phone";
    return "username";
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // Validate passwords match before submission
      if (formData.password !== formData.confirmPassword) {
        throw new Error("Passwords does not match");
      }

      const type = getIdentifierType(formData.identifier);
      const payload = {
        [type]: formData.identifier,
        password: formData.password,
      };

      await resetPassword(payload);
      toast.success("Password reset successful, you can now login");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <main className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      {/* Form Container with Drop Shadow */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        
        {/* Centered Icon Wrapper */}
        <div className="flex justify-center w-full mb-5">
          <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[30px] p-4 bg-orange-50/50">
            <Key className="text-[#000000]" size={60} />
          </div>
        </div>

        {/* Header Section */}
        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Reset your password
          </h1>
          <p className="text-black text-sm">Must be at least 8 characters.</p>
        </section>
        
        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
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

          {/* Confirm Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Eye size={20} />
              ) : (
                <EyeClosed size={20} />
              )}
            </span>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Reset
          </button>
        </form>
      </div>

      <div className="h-12"></div>
    </main>
  );
}