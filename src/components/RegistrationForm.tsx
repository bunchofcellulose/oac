'use client';

import { useState } from 'react';
import { User, Mail, School, MapPin, Calendar } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    parentEmail: '',
    school: '',
    grade: '',
    age: '',
    country: '',
    previousExperience: '',
    motivation: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://oac-backend-production.up.railway.app/api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const msg = await res.text();

      if (res.ok) {
        alert("✅ Registration successful! Check your email for confirmation.");
      } else {
        alert(`❌ Error: ${msg}`);
      }

    } catch (err) {
      console.error("Error submitting form", err);
      alert("❌ Failed to submit form.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="registration-form" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 to-indigo-950/85"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Registration Form
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300">
            Complete the form below to register for the Online Astronomy Competition. Registration is free!
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg shadow-xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Student Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Parent/Guardian Email *
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <School className="w-4 h-4 inline mr-2" />
                  School Name *
                </label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Grade Level *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                  <option value="graduated">Recent Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Age *
                </label>
                <select
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                >
                  <option value="">Select Age</option>
                  {[14, 15, 16, 17, 18].map(age => (
                    <option key={age} value={age}>{age}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Previous Astronomy Experience (Optional)
                </label>
                <textarea
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  placeholder="Tell us about any astronomy courses, competitions, or activities you've participated in..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Why do you want to participate in the OAC? (Optional)
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-purple-400"
                  placeholder="Share your passion for astronomy and what you hope to gain from this competition..."
                />
              </div>
            </div>

            <div className="border-t border-slate-600 pt-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreement"
                  className="mt-1 mr-3 w-4 h-4 text-purple-600 bg-slate-600 border-slate-500 rounded focus:ring-purple-500 focus:ring-2"
                  required
                />
                <label htmlFor="agreement" className="text-sm text-slate-300">
                  I agree to the competition rules and understand that I will compete with integrity and honesty. 
                  I confirm that I am eligible to participate based on the age and grade requirements. *
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Register for OAC - Free!
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center ">
          <p className="text-sm text-slate-400">
            Questions about registration? <a href="#contact" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
}
