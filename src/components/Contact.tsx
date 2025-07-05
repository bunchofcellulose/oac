import { Mail, Clock, BookOpen } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 to-indigo-950/85"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300">
            Questions about the Online Astronomy Competition? We&apos;re here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-slate-600 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            </div>
            <p className="text-slate-300 mb-4">
              For questions about registration, competition details, or technical support.
            </p>
            <a
              href="mailto:astronomycompetition@gmail.com"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
            >
              <Mail className="w-4 h-4 mr-2" />
              astronomycompetition@gmail.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-slate-600 shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Response Time</h3>
            </div>
            <p className="text-slate-300 mb-4">
              We respond to all inquiries within 48 hours. Mark urgent competition matters as &quot;URGENT&quot;.
            </p>
            <div className="text-sm text-slate-400">
              <strong className="text-orange-300">Best times to contact:</strong> Weekdays 9 AM - 5 PM EST
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-lg border border-slate-600 shadow-lg">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-orange-400 mr-3" />
            <h3 className="text-xl font-bold text-white">Include in Your Email</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
            <div>
              <p>• Your full name and country</p>
              <p>• Grade level and school</p>
              <p>• Registration status</p>
            </div>
            <div>
              <p>• Clear description of your question</p>
              <p>• Any relevant screenshots</p>
              <p>• Competition-related documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
