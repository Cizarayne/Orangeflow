import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import ChangePassword from "./pages/Auth/ChangePassword";
import EditProfile from "./pages/Auth/EditProfile";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import DeleteAccount from "./pages/Auth/DeleteAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpAndSupport from "./pages/HelpAndSupport";
import Explore from "./pages/Explore";
import Architecture from "./components/categories/Architecture";
import Countries from "./components/categories/Countries";
import Wildlife from "./components/categories/Wildlife";
import Fashion from "./components/categories/Fashion";
import AutoMobile from "./components/categories/AutoMobile";
import Education from "./components/categories/Education";
import FoodAndCuisine from "./components/categories/FoodAndCuisine";
import ScienceAndResearch from "./components/categories/ScienceAndResearch";
import Healthcare from "./components/categories/Healthcare";
import ArtificialIntelligence from "./components/categories/ArtificialIntelligence";
import SpaceAndAstronomy from "./components/categories/SpaceAndAstronomy";
import Aviation from "./components/categories/Aviation";
import TravelAndTourism from "./components/categories/TravelAndTourism";
import History from "./components/categories/History";




import { AuthContext } from "./store/Auth";
import Loader from "./components/ui/Loader";


export default function App() {
  const { profile } = AuthContext();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        await profile(); // restores user + isLoggedIn if the cookie is still valid
      } catch (error) {
        console.log("profile error", error);
        toast.error("Session expired, please login again");
        // No valid session — that's fine, just stay logged out
      } finally {
        setCheckingAuth(false);
      }
    };
    restoreSession();
  }, [profile]);

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={300} color="black" />
      </div>
    );
  }

  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route
          path="/delete-account"
          element={
            <ProtectedRoute>
              <DeleteAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <Explore />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore/history"
          element={<ProtectedRoute><History /></ProtectedRoute>}
        />
        <Route path="/explore/travel-&-tourism" element={<ProtectedRoute><TravelAndTourism /></ProtectedRoute>} />
        <Route path="/change-password"element={<ProtectedRoute><ChangePassword /></ProtectedRoute>}/>
        <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
        <Route path="/explore/countries" element={<ProtectedRoute><Countries /></ProtectedRoute>} />
        <Route path="/explore/wildlife" element={<ProtectedRoute><Wildlife /></ProtectedRoute>} />
        <Route path="/explore/fashion" element={<ProtectedRoute><Fashion /></ProtectedRoute>} />
        <Route path="/explore/automobile" element={<ProtectedRoute><AutoMobile /></ProtectedRoute>} />
        <Route path="/explore/education" element={<ProtectedRoute><Education /></ProtectedRoute>} />
        <Route path="/explore/food-&-cuisine" element={<ProtectedRoute><FoodAndCuisine /></ProtectedRoute>} />
        <Route path="/explore/science-&-research" element={<ProtectedRoute><ScienceAndResearch /></ProtectedRoute>} />
        <Route path="/explore/healthcare" element={<ProtectedRoute><Healthcare /></ProtectedRoute>} />
        <Route path="/explore/artificial-intelligence" element={<ProtectedRoute><ArtificialIntelligence /></ProtectedRoute>} />
        <Route path="/explore/space-&-astronomy" element={<ProtectedRoute><SpaceAndAstronomy /></ProtectedRoute>} />
        <Route path="/explore/aviation" element={<ProtectedRoute><Aviation /></ProtectedRoute>} />
        <Route path="/explore/architecture" element={<ProtectedRoute><Architecture /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<HelpAndSupport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
