import { Mail, UserLock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import Loader from "../../components/ui/Loader";
import { AuthContext } from "../../store/Auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { forgotPassword } = AuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await forgotPassword(email);
      toast.success(res.message || "If an account exists, a reset link has been sent");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen justify-center flex flex-col items-center px-5 py-8 bg-[#f5faff] text-[#131d23]">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl drop-shadow-md">
        <div className="flex justify-center w-full mb-4">
          <div className="flex items-center justify-center border-2 border-[#ff6600] rounded-[30px] p-5 bg-orange-50/50">
            <UserLock className="text-[#000000]" size={55} />
          </div>
        </div>

        <section className="text-center mb-8 w-full">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Forgot your password
          </h1>
          <p className="font-sans text-base text-black">
            Enter the email associated with your
            account to receive a reset link
          </p>
        </section>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Mail size={20} />
            </span>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 pl-10 pr-4 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-[#ff6600]"
              placeholder="Enter your email address"
              type="email"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full h-14 bg-[#ff6600] text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-120 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="white" /> : "Request Reset Link"}
          </button>

          <div className="text-center">
            <Link to="/login" className="block w-full">
              <button
                type="button"
                className="mt-0 w-full h-14 bg-black text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85"
              >
                Back to Login
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="h-12"></div>
    </div>
  );
}