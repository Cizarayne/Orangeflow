import { Link } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import {
  UserRoundPen,
  Mail,
  Phone,
  Lock,
  UserStar,
  EyeClosed,
  Eye,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/Auth";

export default function Signup() {
  const [formdata, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
  });
  const { signup } = AuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signup(formdata);
      setLoading(false);
      toast.success("Signup successful!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      const data = error?.response?.data;

      let backendMessage;
      if (data) {
        if (typeof data === "string") {
          backendMessage = data;
        } else if (Array.isArray(data.errors) && data.errors.length > 0) {
          const first = data.errors[0];
          backendMessage = typeof first === "string" ? first : first?.message || first?.msg;
        } else {
          backendMessage = data.message || data.error || data.msg;
        }
      }

      setLoading(false);
      toast.error(backendMessage || "Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      {/* Form Container with Drop Shadow */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        {/* Header Section */}
        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Create an Orangeflow account
          </h1>
          <p className="font-sans text-base text-[#5e5e5e]">
            Join thousands already in the flow
          </p>
        </section>
        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Fullname */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <UserRoundPen size={20} />
            </span>
            <input
              name="fullname"
              value={formdata.fullname}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Fullname"
              type="text"
              required
            />
          </div>

          {/* Username */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <UserStar size={20} />
            </span>
            <input
              name="username"
              value={formdata.username}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Username"
              type="text"
              required
            />
          </div>

          {/* Email */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Mail size={20} />
            </span>
            <input
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Email"
              type="email"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Phone size={20} />
            </span>
            <input
              name="phone"
              value={formdata.phone}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Phone"
              type="tel"
              required
            />
          </div>

          {/* Gender Selection */}
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="flex-1">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formdata.gender === "male"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="male"
                  className={`flex items-center justify-center h-12 border rounded-[10px] font-semibold cursor-pointer transition-colors ${
                    formdata.gender === "male"
                      ? "bg-black text-white border-black"
                      : "bg-[#f5faff] text-[#5e5e5e] border-[#BFC9D1]"
                  }`}
                >
                  Male
                </label>
              </div>
              <div className="flex-1">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formdata.gender === "female"}
                  onChange={handleChange}
                  className="hidden"
                />
                <label
                  htmlFor="female"
                  className={`flex items-center justify-center h-12 border rounded-[10px] font-semibold cursor-pointer transition-colors ${
                    formdata.gender === "female"
                      ? "bg-black text-white border-black"
                      : "bg-[#f5faff] text-[#5e5e5e] border-[#BFC9D1]"
                  }`}
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              name="password"
              value={formdata.password}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center justify-center cursor-pointer text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-85 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="black" /> : "Sign Up"}
          </button>

          {/* Footer Link */}
          <div className="mt-4 text-center">
            <p className="text-[#131d23]">
              Already have an account?{" "}
              <Link
                className="text-[#ff6600] font-bold hover:underline"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="h-12"></div>
    </main>
  );
}