import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { RiContactsBook2Fill } from "react-icons/ri";

const FuturisticFooter = () => {
  return (
    <motion.footer
      
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 pt-20 pb-16 px-6 sm:px-12 border-t border-gray-700"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
      </div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-500 filter blur-[90px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-5 gap-10">
          <div className="space-y-6 sm:ml-10">
            <div className="flex items-center gap-3">
              <RiContactsBook2Fill className="text-2xl text-blue-400" />
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Let's Connect
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Interested in collaborating or just want to say hi? Reach out through any channel.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:hello@example.com" className="p-2 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all" aria-label="Email">
                <HiMail className="text-xl text-cyan-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg border border-gray-700 hover:bg-gray-700 transition-all" aria-label="Schedule Meeting">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Projects', 'Skills', 'Testimonials', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
              Digital Spaces
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: <FaGithub className="text-xl" />, name: 'GitHub', color: 'text-gray-300' }, { icon: <FaLinkedin className="text-xl text-blue-400" />, name: 'LinkedIn', color: 'text-blue-400' }, { icon: <FaTwitter className="text-xl text-sky-400" />, name: 'Twitter', color: 'text-sky-400' }, { icon: <FaCodepen className="text-xl text-gray-200" />, name: 'CodePen', color: 'text-gray-200' }].map((social) => (
                <a key={social.name} href="#" className={`flex items-center gap-2 p-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-all ${social.color}`}>
                  {social.icon}
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-400">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm">
              Join my newsletter for occasional updates on projects and articles.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-gray-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg font-medium text-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ERMIAS GETNET. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default FuturisticFooter;
