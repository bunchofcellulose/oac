export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About the OAC</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              The Online Astronomy Competition (OAC) is a free, open competition designed for high school students 
              passionate about astronomy and space science.
            </p>
            
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Covers all aspects of astronomy - from planetary science and stellar evolution to cosmology and observational techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Problems designed to challenge students beyond standard high school coursework</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Free and open to all high school students worldwide</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Conducted entirely online for maximum accessibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">•</span>
                <span>Top performers receive recognition and certificates</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl border border-slate-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-3">🌟</span>
              Our Mission
            </h3>
            <p className="text-slate-300 leading-relaxed">
              To inspire and nurture the next generation of astronomers, astrophysicists, and space scientists 
              by providing an engaging, accessible platform for students to explore the wonders of the universe. 
              We aim to foster curiosity about the cosmos and encourage students to pursue careers in astronomy 
              and related fields.
            </p>
          </div>
        </div>
        
        {/* Competition Format Section */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-4">Competition Format</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Stage 1 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl border border-slate-600 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 animate-slide-in-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 animate-pulse-custom">
                  1
                </div>
                <h4 className="text-2xl font-bold text-white">First Round</h4>
              </div>
              <div className="space-y-3 text-slate-300">
                <p><span className="text-orange-400 font-semibold">Date:</span> September 6, 2025</p>
                <p><span className="text-orange-400 font-semibold">Eligibility:</span> Open to all high school students worldwide</p>
                <p><span className="text-orange-400 font-semibold">Format:</span> Multiple choice questions covering foundational astronomy concepts</p>
                <p className="text-sm mt-4 text-slate-400">Anyone can participate in this round - no prerequisites required!</p>
              </div>
            </div>
            
            {/* Stage 2 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg shadow-xl border border-slate-600 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 animate-slide-in-right animation-delay-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 animate-pulse-custom animation-delay-600">
                  2
                </div>
                <h4 className="text-2xl font-bold text-white">Second Round</h4>
              </div>
              <div className="space-y-3 text-slate-300">
                <p><span className="text-orange-400 font-semibold">Date:</span> October 4, 2025</p>
                <p><span className="text-orange-400 font-semibold">Eligibility:</span> Top performers from Round 1 (invitation only)</p>
                <p><span className="text-orange-400 font-semibold">Format:</span> Olympiad-style problems requiring deeper analytical skills</p>
                <p className="text-sm mt-4 text-slate-400">Winners receive official awards and recognition!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
