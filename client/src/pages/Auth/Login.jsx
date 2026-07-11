import { Link } from "react-router-dom";
import { Lock, UserRoundKey, EyeClosed, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Auth";
import Loader from "../../components/ui/Loader";




export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = AuthContext();
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
      if (!formData.identifier || !formData.password) {
        throw new Error("Please fill in all fields");
      }
      if (formData.password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      const type = getIdentifierType(formData.identifier);
      const payload = {
        [type]: formData.identifier,
        password: formData.password,
      };

      // Call login API
      await login(payload);
      toast.success("Login successful, Welcome back!");
      navigate("/explore");
    } catch (error) {
      // Server error handling moved here where 'error' is defined
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 401) {
        toast.error("Invalid Credentials, please try again");
      } else if (status === 404) {
        toast.error("Account not found, please sign up");
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
      {/* Form Container with Drop Shadow */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        {/* Header Section */}
        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Login to Orangeflow
          </h1>
          <p className="font-sans text-base text-[#5e5e5e]">
            Join thousands already in the flow
          </p>
        </section>
        
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Identifier */}
          <div className="relative flex flex-col mb-4">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <UserRoundKey size={20} />
            </span>
            <input
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Email / Phone / Username"
              type="text"
              required
            />
          </div>

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
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-black"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/forgot-password">
              <span className="text-[#ff6600] font-bold text-sm hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </Link>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-85 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="black" /> : "Sign In"}
          </button>

          {/* Footer Link */}
          <div className="mt-4 text-center">
            <p className="text-[#131d23]">
              Don't have an account?{" "}
              <Link
                className="text-[#ff6600] font-bold hover:underline"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="h-12"></div>
    </main>
  );
}