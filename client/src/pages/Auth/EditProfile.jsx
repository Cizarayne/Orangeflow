import { User, Mail, Phone, Users, AtSign } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import { AuthContext } from "../../store/Auth";

export default function EditProfile() {
  const { user, updateProfile } = AuthContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);

  // Pre-fill form with current user data once available
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "",
      });
    }
  }, [user]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!formData.fullname || !formData.username || !formData.email || !formData.phone || !formData.gender) {
        throw new Error("Please fill all required fields");
      }

      // Update profile with new data
      await updateProfile(formData);
      toast.success("Profile updated successfully");
      navigate("/dashboard");
    } catch (error) {
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 409) {
        toast.error(serverMessage || "That username, email, or phone is already in use");
      } else if (status === 400) {
        toast.error(serverMessage || "Invalid input, please check your details");
      } else if (status === 401) {
        toast.error("Please login first to execute this action");
        navigate("/login");
      } else {
        toast.error(serverMessage || error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#f5faff]">
        <Loader size={60} color="black" />
      </main>
    );
  }

  return (
    <main className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        {/* Header Section */}
        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Edit Profile
          </h1>
          <p className="font-sans text-base text-[#5e5e5e]">
            Update your account information
          </p>
        </section>

        {/* Edit Profile Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Full Name */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <User size={20} />
            </span>
            <input
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Full Name"
              type="text"
              required
            />
          </div>

          {/* Username */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <AtSign size={20} />
            </span>
            <input
              name="username"
              value={formData.username}
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
              value={formData.email}
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
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Phone"
              type="text"
              required
            />
          </div>

          {/* Gender */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Users size={20} />
            </span>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600] appearance-none"
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Action Buttons */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-120 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="white" /> : "Save Changes"}
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