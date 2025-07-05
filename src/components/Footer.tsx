export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 to-indigo-950/80"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-sm">OAC</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Online Astronomy Competition
              </span>
            </div>
            <p className="text-slate-300">
              A premier online astronomy competition for high school students worldwide.
              Explore the cosmos and compete with fellow astronomy enthusiasts.
            </p>
          </div>

          <div className="">
            <h3 className="font-semibold text-lg mb-4 text-orange-300">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">About</a></li>
              <li><a href="#register" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">Register</a></li>
              <li><a href="#problems" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">Problems</a></li>
              <li><a href="#faq" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">FAQ</a></li>
              <li><a href="#contact" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          <div className="">
            <h3 className="font-semibold text-lg mb-4 text-orange-300">Contact</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="mailto:astronomycompetition@gmail.com" className="hover:text-orange-300 transition-colors duration-300 transform hover:translate-x-1">
                  astronomycompetition@gmail.com
                </a>
              </li>
              <li>Competition: August 30, 2025</li>
              <li>Registration: FREE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center ">
          <p className="text-slate-300">
            © Online Astronomy Competition 2025. All rights reserved.
          </p>
          <p className="text-slate-400 mt-2 text-sm">
            Inspiring Future Astronomers <span className="animate-twinkle">🌟</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
