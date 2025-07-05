import { Book, ExternalLink, Star, Telescope } from 'lucide-react';

export default function SampleProblems() {
  return (
    <section id="problems" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sample Problems</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Explore the types of challenging astronomy problems you&apos;ll encounter in the OAC. These samples demonstrate
            the level of knowledge and analytical thinking required for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-lg shadow-xl border border-slate-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-orange-400 mr-2 group-hover:text-orange-300 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-white">Stellar Astrophysics</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Problems involving stellar evolution, main sequence stars, supernovae, and stellar properties
              including magnitude, luminosity, and spectral classification.
            </p>
            <div className="bg-slate-800/50 p-4 rounded text-sm text-slate-300 border border-slate-600">
              <strong className="text-orange-400">Example:</strong> A star has an apparent magnitude of 6.5 and an absolute magnitude of 2.1. 
              Calculate its distance in parsecs and determine its spectral class if its surface temperature is 5,800 K.
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-lg shadow-xl border border-slate-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 group">
            <div className="flex items-center mb-4">
              <Book className="w-6 h-6 text-orange-400 mr-2 group-hover:text-orange-300 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-white">Planetary Science</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Challenges involving orbital mechanics, planetary characteristics, exoplanet detection,
              and comparative planetology within our solar system and beyond.
            </p>
            <div className="bg-slate-800/50 p-4 rounded text-sm text-slate-300 border border-slate-600">
              <strong className="text-orange-400">Example:</strong> An exoplanet orbits its star with a period of 365 days. If the star has 
              a mass of 1.2 solar masses, calculate the planet&apos;s orbital radius and determine if it lies within the habitable zone.
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-lg shadow-xl border border-slate-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20  group">
            <div className="flex items-center mb-4">
              <Telescope className="w-6 h-6 text-orange-400 mr-2 group-hover:text-orange-300 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-white">Observational Astronomy</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Problems involving telescope design, photometry, spectroscopy, and analysis of 
              astronomical observations and data interpretation.
            </p>
            <div className="bg-slate-800/50 p-4 rounded text-sm text-slate-300 border border-slate-600">
              <strong className="text-orange-400">Example:</strong> A telescope with a 10-meter primary mirror observes a galaxy. 
              Calculate the telescope&apos;s light-gathering power compared to the human eye and determine 
              the faintest magnitude it can detect.
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-lg shadow-xl border border-slate-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20  group">
            <div className="flex items-center mb-4">
              <Book className="w-6 h-6 text-orange-400 mr-2 group-hover:text-orange-300 transition-colors duration-300" />
              <h3 className="text-xl font-bold text-white">Cosmology</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Advanced problems involving the Big Bang theory, cosmic microwave background,
              dark matter, dark energy, and the large-scale structure of the universe.
            </p>
            <div className="bg-slate-800/50 p-4 rounded text-sm text-slate-300 border border-slate-600">
              <strong className="text-orange-400">Example:</strong> Given a Hubble constant of 70 km/s/Mpc, calculate the age of the universe
              assuming a flat cosmology and determine the distance to a galaxy with a redshift of z = 2.
            </div>
          </div>
        </div>

        {/* Recommended Study Topics */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-lg shadow-xl border border-slate-500 ">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Recommended Study Topics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Telescope className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Positional Astronomy</h4>
              <p className="text-sm text-slate-300">Coordinate systems, celestial sphere, star positions</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Star className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Luminosity and Flux</h4>
              <p className="text-sm text-slate-300">Stellar magnitudes, distance modulus, brightness</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Book className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Celestial Mechanics</h4>
              <p className="text-sm text-slate-300">Kepler&apos;s laws, orbital dynamics, gravitational physics</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Star className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Stellar Physics</h4>
              <p className="text-sm text-slate-300">Stellar evolution, HR diagram, stellar nucleosynthesis</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Star className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Galactic Physics</h4>
              <p className="text-sm text-slate-300">Milky Way structure, galaxy types, dark matter</p>
            </div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-lg mb-4 mx-auto w-fit group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Book className="w-8 h-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Cosmology</h4>
              <p className="text-sm text-slate-300">Big Bang, cosmic expansion, dark energy</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 ">
          <p className="text-slate-300 mb-4">
            Want to practice with more sample problems?
          </p>
          <button className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Access Full Problem Set
          </button>
        </div>
      </div>
    </section>
  );
}
