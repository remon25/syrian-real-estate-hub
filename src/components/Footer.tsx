import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Section - Full width on mobile and tablet */}
          <div className="space-y-4 text-center md:text-right md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-200">
              الجمعية السورية العامة للوكلاء العقاريين - من أجل مهنة عقارية
              منظمة، موثوقة، ومعتمدة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-200 hover:text-primary-foreground transition-colors"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-200 hover:text-primary-foreground transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="text-sm text-gray-200 hover:text-primary-foreground transition-colors"
                >
                  العضوية
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-sm text-gray-200 hover:text-primary-foreground transition-colors"
                >
                  الفعاليات
                </Link>
              </li>
              <li>
                <a
                  href="/profile/index.html"
                  className="text-sm text-gray-200 hover:text-primary-foreground transition-colors"
                >
                  بروفايل الجمعية
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-200">التدريب المهني</li>
              <li className="text-sm text-gray-200">الاستشارات القانونية</li>
              <li className="text-sm text-gray-200">التقارير السوقية</li>
              <li className="text-sm text-gray-200">الاعتماد المهني</li>
            </ul>
          </div>

          {/* Contact - Full width on tablet */}
          <div className="text-center md:text-right md:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-2 text-sm text-gray-200">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>دمشق، سوريا</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-200">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span dir="ltr">+963 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-200">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@syrianrea.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} الجمعية السورية العامة للوكلاء
            العقاريين. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
