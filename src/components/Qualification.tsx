import { UserPlus, Calendar, Globe, Star } from 'lucide-react';

export default function Registration() {
  const benefits = [
    {
      title: "Free Participation",
      description: "No registration fees or hidden costs. The competition is completely free for all participants.",
      icon: <Star className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Open to All",
      description: "Any high school student (grades 9-12) worldwide can participate. No prerequisites or qualifications required.",
      icon: <Globe className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Online Format",
      description: "Participate from anywhere in the world. All you need is an internet connection and a passion for astronomy.",
      icon: <UserPlus className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Flexible Timing",
      description: "12-hour window to complete the competition, allowing participants from different time zones to participate.",
      icon: <Calendar className="w-8 h-8 text-purple-600" />
    }
  ];

  const eligibilityItems = [
    {
      title: "Grade Level",
      description: "Currently enrolled in grades 9-12 or recent graduates",
      icon: <Calendar className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Age Requirement",
      description: "18 years old or younger at competition time",
      icon: <UserPlus className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Global Access",
      description: "Open to students from any country worldwide",
      icon: <Globe className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Register</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Registration Steps */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Simple Registration Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fill Out Form</h4>
              <p className="text-gray-700">Complete the registration form with your basic information</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Get Confirmation</h4>
              <p className="text-gray-700">Receive confirmation email with competition details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Participate</h4>
              <p className="text-gray-700">Join the competition on the scheduled date</p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="bg-purple-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Eligibility Requirements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Dates */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
          <h4 className="font-semibold text-gray-900 mb-2">Important Dates</h4>
          <p className="text-gray-700">
            <strong>Competition Date:</strong> August 30, 2025<br />
            <strong>Time window:</strong> 12:00 - 23:59 Eastern Standard Time<br />
            <strong>Registration Deadline:</strong> August 25, 2025
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Explore the Universe?</h4>
          <p className="text-gray-700 mb-6">
            Join hundreds of students from around the world in this exciting astronomy competition!
          </p>
          <a
            href="#registration-form"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-lg font-semibold"
          >
            Register Now - It's Free!
          </a>
        </div>
      </div>
    </section>
  );
}
