import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Helix Nebula Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2848&q=95")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50"></div>
      
      {/* Floating cosmic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-float opacity-40 animation-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-amber-400 rounded-full animate-float opacity-50 animation-delay-2"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto ">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600">
          Online Astronomy Competition
        </h1>
        <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Explore the cosmos with fellow astronomy enthusiasts from around the world.
          Test your knowledge of stars, planets, galaxies, and the mysteries of the universe
          in our exciting online competition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#register"
            className="group bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span className="flex items-center justify-center">
              Register Now - Free!
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">🚀</span>
            </span>
          </Link>
          <Link
            href="#about"
            className="group border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span className="flex items-center justify-center">
              Learn More
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">🌟</span>
            </span>
          </Link>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
}
