import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Award,
  BookOpen,
  FileText,
  TrendingUp,
  Shield,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import officeOne from "@/assets/office-1.jpg";
import officeTwo from "@/assets/office-2.jpg";
import officeThree from "@/assets/offcie-3.webp";
import officeFour from "@/assets/office-4.png";
import officeFive from "@/assets/office-5.webp";
import officeSix from "@/assets/office-6.jpg";
import officeSeven from "@/assets/office-7.jpg";
import officesEight from "@/assets/office-8.png";
import officeNine from "@/assets/office-9.jpg";
import officeTen from "@/assets/office-10.webp";

const features = [
  {
    icon: Users,
    title: "من نحن",
    description: "تعرف على رسالتنا، رؤيتنا، وأهدافنا في تطوير القطاع العقاري",
    link: "/about",
  },
  {
    icon: Award,
    title: "المكاتب المعتمدة",
    description:
      "قائمة بالمكاتب الأعضاء مع إمكانية التحويل المباشر إلى صفحاتهم على منصة سويس هوم",
    link: "/membership",
  },
  {
    icon: BookOpen,
    title: "التدريب والفعاليات",
    description: "ورش عمل، دورات، مؤتمرات وبرامج تطوير مهني متخصصة",
    link: "/events",
  },
  {
    icon: FileText,
    title: "الخدمات",
    description: "استشارات قانونية، عقود موحدة، مواد تدريبية وتقارير سوق شهرية",
    link: "/contact",
  },
];

// Custom hook for scroll animations
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const Home = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes continuousScale {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-scale-in {
          animation: scaleIn 1.2s ease-out;
        }

        .animate-continuous-scale {
          animation: continuousScale 20s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 animate-continuous-scale"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.85)), url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          ref={heroRef}
          className="container mx-auto px-4 py-12 sm:py-16 relative z-10 text-center text-white"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out",
          }}
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              animation: heroVisible
                ? "fadeInUp 0.8s ease-out 0.2s both"
                : "none",
            }}
          >
            الجمعية السورية العامة للوكلاء العقاريين
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto"
            style={{
              animation: heroVisible
                ? "fadeInUp 0.8s ease-out 0.4s both"
                : "none",
            }}
          >
            من أجل مهنة عقارية منظمة، موثوقة، ومعتمدة
          </p>
          <p
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-white/85 max-w-4xl mx-auto leading-relaxed"
            style={{
              animation: heroVisible
                ? "fadeInUp 0.8s ease-out 0.6s both"
                : "none",
            }}
          >
            نحن أول كيان مهني مستقل يجمع المكاتب والوكلاء العقاريين في سوريا،
            بهدف تطوير المهنة، تنظيم الممارسات، رفع الكفاءة، وحماية مصالح
            العاملين والعملاء. نعمل على توحيد الجهود، اعتماد المعايير المهنية،
            توفير التدريب، وتقديم خدمات قانونية وتقنية تساعد على تحسين جودة
            العمل العقاري في سوريا.
          </p>
          <div
            style={{
              animation: heroVisible
                ? "fadeInUp 0.8s ease-out 0.8s both"
                : "none",
            }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto hover:scale-105 transition-transform"
            >
              <Link to="/membership">انتسب الآن إلى الجمعية</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div
            ref={featuresRef}
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: featuresVisible ? 1 : 0,
              transform: featuresVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold  inline-block relative mb-8 sm:mb-10">
              <span className="title-underline">ما نقدمه</span>
              <svg
                className={featuresVisible ? "animate-underline" : ""}
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120%",
                  height: "8px",
                }}
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  className="animated-underline"
                  d="M0,4 Q50,0 100,4 T200,4"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-base sm:text-lg max-w-2xl mx-auto">
              نعمل على توحيد الجهود، اعتماد المعايير المهنية، توفير التدريب،
              وتقديم خدمات قانونية وتقنية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: `all 0.7s ease-out ${index * 100}ms`,
                }}
              >
                <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-bounce-in">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={feature.link}>اعرف المزيد</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-16 pb-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div
            ref={valuesRef}
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: valuesVisible ? 1 : 0,
              transform: valuesVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              <span className="title-underline">لماذا الانضمام إلينا؟</span>
              <svg
                className={valuesVisible ? "animate-underline" : ""}
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120%",
                  height: "8px",
                }}
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  className="animated-underline"
                  d="M0,4 Q50,0 100,4 T200,4"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "اعتماد مهني",
                description: 'احصل على شارة "مكتب عقاري معتمد" وزد من مصداقيتك',
              },
              {
                icon: TrendingUp,
                title: "تطوير مستمر",
                description: "ورش عمل وتدريبات مهنية منتظمة لتطوير مهاراتك",
              },
              {
                icon: FileText,
                title: "دعم قانوني",
                description: "استشارات قانونية متخصصة ومواد تدريبية حصرية",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center"
                style={{
                  opacity: valuesVisible ? 1 : 0,
                  transform: valuesVisible ? "scale(1)" : "scale(0.9)",
                  transition: `all 0.7s ease-out ${index * 150}ms`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 hover:bg-secondary/30 transition-all hover:scale-110 duration-300">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="pt-16 pb-16 sm:py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 inline-block relative">
              <span className="title-underline">أعضاء الجمعية</span>
              <svg
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "120%",
                  height: "8px",
                }}
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q50,0 100,4 T200,4"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              نفخر بشراكتنا مع المكاتب العقارية الرائدة في سوريا
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
            {[
              {
                id: "50335",
                name: "عقارkey",
                abbr: "العقارات الذهبية",
                placeholder: `${officeOne}`,
              },
              {
                id: "50376",
                name: "مكتب سهيل العقاري",
                abbr: "سهيل",
                placeholder: `${officeTwo}`,
              },
              {
                id: "50353",
                name: "مكتب حلا الشام",
                abbr: "حلا الشام العقاري",
                placeholder: `${officeThree}`,
              },
              {
                id: "50119",
                name: "مكتب الإدلبي العقاري",
                abbr: "مكتب الإدلبي العقاري",
                placeholder: `${officeFour}`,
              },
              {
                id: "50069",
                name: "مكتب الرحمن العقاري",
                abbr: "الرحمن العقاري",
                placeholder: `${officeFive}`,
              },
              {
                id: "50347",
                name: "الوكيل للعقارات",
                abbr: "الرؤية",
                placeholder: `${officeSix}`,
              },
              {
                id: "50361",
                name: " مكتب تنبكجي للأعمال العقارية",
                abbr: "تنبكجي",
                placeholder: `${officeSeven}`,
              },
              {
                id: "50251",
                name: "مكتب الوفا العقاري ",
                abbr: "الوفا",
                placeholder: `${officesEight}`,
              },
              {
                id: "50270",
                name: "مكتب الوفاء للتطوير العقاري",
                abbr: "الوفاء",
                placeholder: `${officeNine}`,
              },
              {
                id: "50357",
                name: "مكتب الفارس للتطوير العقاري",
                abbr: "الفارس",
                placeholder: `${officeTen}`,
              },
            ].map((member, index) => (
              <Link
                target="_blank"
                to={`https://swesshome.com/ar/agents/${member.id}`}
                key={index}
                className="group relative block"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 flex flex-col items-center justify-center h-full min-h-[160px] group-hover:-translate-y-2">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[5px] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={member.placeholder}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Name */}
                  <h3 className="text-sm sm:text-base font-semibold text-center leading-tight group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  {/* Verified Badge */}
                  <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 text-secondary" />
                    <span>معتمد</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-bl-lg" />
              </Link>
            ))}
          </div>

         
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-16 pb-16 sm:py-20 bg-primary text-primary-foreground border-b border-gray-500 border-[1px] border-x-none">
        <div
          ref={ctaRef}
          className="container mx-auto px-4 text-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            انضم إلى شبكة الوكلاء العقاريين المعتمدين
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            كن جزءاً من مجتمع مهني يسعى لتطوير القطاع العقاري في سوريا
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto hover:scale-105 transition-transform"
          >
            <Link to="/membership">ابدأ عضويتك الآن</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
