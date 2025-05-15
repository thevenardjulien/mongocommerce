export default function Header() {
    return (
        <header className="flex items-center">
            <div className="py-6 px-4 sm:px-6 lg:px-8 flex-1">
                <h1 className="text-3xl font-bold">
                    <a href="/">MongoCommerce</a>
                </h1>
            </div>
            <nav className="flex-1">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div>
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <a
                                href="/"
                                className="text-gray-900 hover:text-gray-500"
                            >
                                Home
                            </a>
                            <a
                                href="/products"
                                className="text-gray-900 hover:text-gray-500"
                            >
                                Products
                            </a>
                            <a
                                href="/login"
                                className="text-gray-900 hover:text-gray-500"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                className="text-gray-900 hover:text-gray-500"
                            >
                                Register
                            </a>
                            <a
                                href="#"
                                className="text-gray-900 hover:text-gray-500"
                            >
                                Logout
                            </a>
                        </nav>
                    </div>
                </div>
            </nav>
        </header>
    )
}