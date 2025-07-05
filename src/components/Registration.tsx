import { UserPlus, Calendar, Globe, Star } from 'lucide-react';

export default function Registration() {
  const benefits = [
    {
      title: "Free Participation",
      description: "No registration fees or hidden costs. The competition is completely free for all participants.",
      icon: <Star className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Open to All",
      description: "Any high school student (grades 9-12) worldwide can participate. No prerequisites or qualifications required.",
      icon: <Globe className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Online Format",
      description: "Participate from anywhere in the world. All you need is an internet connection and a passion for astronomy.",
      icon: <UserPlus className="w-8 h-8 text-orange-400" />
    },
    {
      title: "Flexible Timing",
      description: "12-hour window to complete the competition, allowing participants from different time zones to participate.",
      icon: <Calendar className="w-8 h-8 text-orange-400" />
    }
  ];

  const eligibilityItems = [
    {
      title: "Grade Level",
      description: "Currently enrolled in grades 9-12 or recent graduates",
      icon: <Calendar className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Age Requirement",
      description: "18 years old or younger at competition time",
      icon: <UserPlus className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Global Access",
      description: "Open to students from any country worldwide",
      icon: <Globe className="w-6 h-6 text-orange-400" />
    }
  ];

  return (
    <section id="register" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-white mb-4">How to Register</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto"></div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg text-center border border-slate-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20  group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Registration Steps */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg mb-12 border border-slate-600 shadow-xl ">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Simple Registration Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Fill Out Form</h4>
              <p className="text-slate-300">Complete the registration form with your basic information</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Get Confirmation</h4>
              <p className="text-slate-300">Receive confirmation email with competition details</p>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/50">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">Participate</h4>
              <p className="text-slate-300">Join the competition on the scheduled date</p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-lg mb-8 border border-slate-600 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Eligibility Requirements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityItems.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">{item.title}</h4>
                <p className="text-slate-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Dates */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 p-6 rounded-lg text-center shadow-xl">
          <h4 className="font-semibold text-white mb-2">Important Dates</h4>
          <p className="text-slate-300">
            <strong className="text-orange-400">Competition Date:</strong> August 30, 2025<br />
            <strong className="text-orange-400">Time window:</strong> 12:00 - 23:59 Eastern Standard Time<br />
            <strong className="text-orange-400">Registration Deadline:</strong> August 25, 2025
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 ">
          <h4 className="text-2xl font-semibold text-white mb-4">Ready to Explore the Universe?</h4>
          <p className="text-slate-300 mb-6">
            Join hundreds of students from around the world in this exciting astronomy competition!
          </p>
          <a
            href="#registration-form"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 text-lg font-semibold transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            <span className="mr-2">Register Now - It's Free!</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">🚀</span>
          </a>
        </div>
      </div>
    </section>
  );
}
