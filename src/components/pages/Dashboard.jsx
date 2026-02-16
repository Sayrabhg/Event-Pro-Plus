import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserEmail, removeAuthData } from "../../utils/token";
import { getProfileApi } from "../../api/api";

export default function Dashboard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(getUserEmail() || "Loading...");

    useEffect(() => {
        getProfileApi()
            .then(res => {
                setEmail(res.data?.email || res.data?.data?.email);
            })
            .catch(err => {
                console.error("Profile fetch failed", err);
            });
    }, []);

    const handleLogout = () => {
        removeAuthData();
        navigate("/auth");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Dashboard
                </h1>

                <p className="text-gray-600 mb-6">Logged in as</p>

                <div className="bg-green-50 text-green-700 font-semibold py-3 rounded-xl mb-6">
                    {email}
                </div>

                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}
