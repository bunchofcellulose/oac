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
            <p className="text-lg text-slate-300 leading-relaxed">
              The Online Astronomy Competition (OAC) is a free, open competition designed for high school students 
              passionate about astronomy and space science. Whether you're a seasoned stargazer or just beginning 
              to explore the cosmos, the OAC provides an exciting platform to test your knowledge and compete with 
              fellow astronomy enthusiasts from around the world.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Our competition covers all aspects of astronomy - from planetary science and stellar evolution to 
              cosmology and observational techniques. The problems are designed to challenge students beyond 
              standard high school coursework, introducing concepts that spark curiosity about the universe 
              and encourage deeper exploration of astronomical phenomena.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Participation in the OAC is completely free and open to all high school students worldwide. 
              The competition is conducted entirely online, making it accessible to students regardless of 
              their location. Top performers receive recognition and certificates, making the OAC a valuable 
              addition to any student's academic portfolio.
            </p>
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
      </div>
    </section>
  );
}
