import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import Logo from './Logos';
const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden text-[#124A36] bg-[#FFF8F0] mt-16"
      dir="rtl"
    >
      {/* Gradient Background */}
      <div className="bg-gradient-to-r from-[#FFF8F0] via-[#F5E6D3] to-[#FFF8F0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid רספונסיבי */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* 1) לוגו + תיאור קצר */}
            <div className="space-y-4">
              <Logo />
              <p className="text-gray-600 leading-relaxed">
                פתרונות דיגיטליים מתקדמים לעסקים
              </p>
            </div>

            {/* 2) קישורים מהירים */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#124A36] hover:text-[#124A36]/80 transition-colors">
                קישורים מהירים
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'שירותים', href: '/services' },
                  { name: 'תיק עבודות', href: '#portfolio' },
                  { name: 'אודות', href: '/about' },
                  { name: 'בלוג', href: '/blog' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                        inline-block
                        text-gray-600 hover:text-[#124A36]
                        transition-all duration-300
                        transform hover:-translate-x-1
                        hover:font-medium
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3) צור קשר */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#124A36] hover:text-[#124A36]/80 transition-colors">
                צור קשר
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@gaya-tech.co.il"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#124A36] transition-all duration-300 group"
                >
                  <Mail
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>info@gaya-tech.co.il</span>
                </a>

                <a
                  href="tel:054-1234567"
                  className="flex items-center gap-2 text-gray-600 hover:text-[#124A36] transition-all duration-300 group"
                >
                  <Phone
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>054-1234567</span>
                </a>

                <div className="flex items-center gap-2 text-gray-600 hover:text-[#124A36] transition-all duration-300 group">
                  <MapPin
                    size={18}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>תל אביב, ישראל</span>
                </div>
              </div>
            </div>

            {/* 4) רשתות חברתיות */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#124A36] hover:text-[#124A36]/80 transition-colors">
                עקבו אחרינו
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#124A36] transition-all duration-300 transform hover:scale-125"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#124A36] transition-all duration-300 transform hover:scale-125"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#124A36] transition-all duration-300 transform hover:scale-125"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* פס תחתון */}
          <div className="mt-12 border-t border-[#124A36]/10 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} גאיה טק. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;