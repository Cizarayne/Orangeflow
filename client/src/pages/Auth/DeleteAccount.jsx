import { Lock, EyeClosed, Eye, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/ui/Loader";
import { AuthContext } from "../../store/Auth";

export default function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { delete: deleteAccount } = AuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (!password) {
        throw new Error("Please enter your password to confirm");
      }

      await deleteAccount(password);
      toast.success("Your account has been deleted");
      navigate("/");
    } catch (error) {
      const status = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (status === 401) {
        toast.error(serverMessage || "Incorrect password");
      } else if (status === 400) {
        toast.error(serverMessage || "Please enter your password");
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
        {/* Warning Icon */}
        <div className="flex justify-center w-full mb-5">
          <div className="flex items-center justify-center border-2 border-red-500 rounded-[30px] p-4 bg-red-50">
            <TriangleAlert className="text-red-500" size={60} />
          </div>
        </div>

        {/* Header Section */}
        <section className="text-center mb-8 w-full max-w-md">
          <h1 className="font-sans text-3xl font-bold text-[#131d23] mb-2">
            Delete Account
          </h1>
          <p className="text-[#5e5e5e] text-sm">
            This action is permanent and cannot be undone. All your data will
            be lost. Enter your password to confirm.
          </p>
        </section>

        {/* Delete Confirmation Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Password */}
          <div className="relative flex flex-col">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
              <Lock size={20} />
            </span>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full h-12 pl-10 pr-12 bg-[#f5faff] border border-[#BFC9D1] rounded-[10px] transition-all focus:outline-none focus:border-2 focus:border-red-500"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              required
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center pr-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          {/* Action Buttons */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full h-14 bg-red-600 text-white font-bold rounded-[10px] active:scale-[0.98] transition-all shadow-md hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader size={60} color="black" /> : "Permanently Delete Account"}
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