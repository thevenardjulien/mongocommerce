import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Header() {  

    const isConnected = Cookies.get("isConnected");
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("isConnected");
        navigate("/login");
    }

    return (
        <header className="flex items-center bg-gray-900">
            <div className="py-6 px-4 sm:px-6 lg:px-8 flex-1">
                <h1 className="text-3xl font-bold text-white">
                    <a href="/">MongoCommerce</a>
                </h1>
            </div>
            <nav className="flex-1">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div>
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <a
                                href="/"
                                className="text-white hover:scale-105"
                            >
                                Home
                            </a>
                            <a
                                href="/products"
                                className="text-white hover:scale-105"
                            >
                                Products
                            </a>
                            {!isConnected &&
                                <>
                                    <a
                                        href="/login"
                                        className="text-white hover:scale-105"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="/register"
                                        className="text-white hover:scale-105"
                                    >
                                        Register
                                    </a>
                                </>

                            }
                            {isConnected &&
                                <a
                                    href="#"
                                    className="text-white hover:scale-105"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </a>
                            }
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    )
}