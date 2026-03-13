export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md">

            <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8">

                {/* Nav Links */}
                <div className="flex gap-8 mx-auto">

                    <a
                        href="#home"
                        className="px-5 py-2 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition"
                    >
                        Home
                    </a>

                    <a
                        href="#works"
                        className="px-5 py-2 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition"
                    >
                        Works
                    </a>

                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)] transition"
                    >
                        Contact
                    </a>

                </div>

                {/* Logo */}
                <div className="absolute right-8">
                    <img
                        src="/logo.png"
                        className="w-10 h-10"
                    />
                </div>

            </div>

        </nav>
    )
}