import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi, signupApi } from "../api/api";
import { setAuthData } from "../utils/token";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);


    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER",
    });

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginApi(loginData);

            // assuming backend returns { token: "JWT", email: "user@example.com" }
            setAuthData(res.data.token, res.data.email);
            localStorage.setItem("role", res.data.role);
            alert("Login successful");
            navigate("/");

        } catch (err) {
            alert(err.response?.data?.message || "Login failed");
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            await signupApi(signupData);
            alert("Signup successful");
            setIsLogin(true);
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-lightgreen px-4"> {/* bg-gradient-to-br from-emerald-600 to-green-800 */}
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* LEFT SIDE */}
                <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-green-800 to-emerald-900 text-white p-10">
                    <h2 className="text-4xl text-white font-bold mb-4">
                        {isLogin ? "Welcome Back!" : "Join Us Today"}
                    </h2>
                    <p className="text-center text-green-200 mb-8">
                        {isLogin
                            ? "Login to manage your events and dashboard."
                            : "Create your account and start managing events easily."}
                    </p>

                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white text-brown hover:text-green-700 transition"
                    >
                        {isLogin ? "Create Account" : "Login"}
                    </button>
                    {/* Back Button */}
                    <a
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 mt-4 text-green-200 hover:text-white transition w-fit cursor-pointer"
                    >
                        ← Back
                    </a>
                </div>

                {/* RIGHT SIDE */}
                <div className="p-8 md:p-12">
                    {isLogin ? (
                        /* LOGIN FORM */
                        <>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Login Account
                            </h2>

                            <form onSubmit={handleLoginSubmit} className="space-y-5">
                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="organizer@gmail.com"
                                        value={loginData.email}
                                        onChange={handleLoginChange}
                                        required
                                        className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Password</label>

                                    <div className="relative">
                                        <input
                                            type={showLoginPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="••••••••"
                                            value={loginData.password}
                                            onChange={handleLoginChange}
                                            required
                                            className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none pr-12"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
                                        >
                                            {showLoginPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                                >
                                    Login
                                </button>
                            </form>

                            <p className="text-sm text-center text-gray-500 mt-6">
                                Don’t have an account?{" "}
                                <span
                                    onClick={() => setIsLogin(false)}
                                    className="text-green-600 font-semibold cursor-pointer hover:underline"
                                >
                                    Sign Up
                                </span>
                            </p>
                        </>
                    ) : (
                        /* SIGNUP FORM */
                        <>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Create Account
                            </h2>

                            <form onSubmit={handleSignupSubmit} className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-600">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Puru Khapre"
                                        value={signupData.name}
                                        onChange={handleSignupChange}
                                        required
                                        className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="user@gmail.com"
                                        value={signupData.email}
                                        onChange={handleSignupChange}
                                        required
                                        className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600">Password</label>

                                    <div className="relative">
                                        <input
                                            type={showSignupPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="••••••••"
                                            value={signupData.password}
                                            onChange={handleSignupChange}
                                            required
                                            className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none pr-12"
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setShowSignupPassword(!showSignupPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
                                        >
                                            {showSignupPassword ? "🙈" : "👁️"}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-600">Role</label>
                                    <select
                                        name="role"
                                        value={signupData.role}
                                        onChange={handleSignupChange}
                                        className="w-full mt-1 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-green-500 focus:outline-none"
                                    >
                                        <option value="USER">USER</option>
                                        <option value="ORGANIZER">ORGANIZER</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                                >
                                    Sign Up
                                </button>
                            </form>

                            <p className="text-sm text-center text-gray-500 mt-6">
                                Already have an account?{" "}
                                <span
                                    onClick={() => setIsLogin(true)}
                                    className="text-green-600 font-semibold cursor-pointer hover:underline"
                                >
                                    Login
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
