import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1128] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Star className="text-[#6CABDD]" />
              <h3 className="text-xl font-bold">Manchester City</h3>
            </div>
            <p className="text-sm text-gray-400">
              Etihad Stadium<br />
              Manchester M11 3FF<br />
              United Kingdom
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#6CABDD] transition-colors">Home</a></li>
              <li><a href="#trophies" className="text-gray-400 hover:text-[#6CABDD] transition-colors">Trophies</a></li>
              <li><a href="#stats" className="text-gray-400 hover:text-[#6CABDD] transition-colors">Stats</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-[#6CABDD] transition-colors">Team</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#6CABDD] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6CABDD] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6CABDD] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#6CABDD] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm text-gray-400">Stay updated with the latest news and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#243772] px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-[#6CABDD]"
              />
              <button className="bg-[#6CABDD] p-2 rounded-lg hover:bg-[#5b9ac9] transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#243772] text-center text-sm text-gray-400"
        >
          <p>&copy; 2024 Manchester City. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}