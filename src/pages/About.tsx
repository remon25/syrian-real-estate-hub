import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Lightbulb, Users, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const values = [
  {
    icon: Handshake,
    title: "النزاهة",
    description: "الالتزام بأعلى معايير الأخلاق المهنية",
  },
  {
    icon: Eye,
    title: "الشفافية",
    description: "الوضوح في جميع التعاملات والإجراءات",
  },
  {
    icon: Users,
    title: "المهنية",
    description: "الحفاظ على معايير الجودة العالية",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "تبني الحلول الحديثة والتقنيات المتطورة",
  },
  {
    icon: Target,
    title: "التمكين",
    description: "دعم الأعضاء لتحقيق النجاح المهني",
  },
  {
    icon: Heart,
    title: "المسؤولية المجتمعية",
    description: "خدمة المجتمع وتطوير القطاع",
  },
];

const About = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [visionRef, visionVisible] = useScrollReveal();
  const [missionRef, missionVisible] = useScrollReveal();
  const [valuesRef, valuesVisible] = useScrollReveal();
  const [boardRef, boardVisible] = useScrollReveal();

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

        .animate-bounce-in {
          animation: bounceIn 0.6s ease-out;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={heroRef}
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out",
            }}
          >
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                animation: heroVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none",
              }}
            >
              من نحن
            </h1>
            <p 
              className="text-xl md:text-2xl text-primary-foreground/90"
              style={{
                animation: heroVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
              }}
            >
              نحن هيئة مهنية غير ربحية نعمل على رفع مستوى العمل العقاري في سوريا
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={contentRef}
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <Card className="mb-12">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 inline-block relative">
                    <span>من نحن؟</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    الجمعية السورية العامة للوكلاء العقاريين هي هيئة مهنية غير
                    ربحية تعمل على رفع مستوى العمل العقاري في سوريا، ودعم المكاتب
                    والوكلاء العقاريين عبر برامج تدريب، تنظيم السوق، وتقديم خدمات
                    قانونية وتقنية متقدمة.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div 
              ref={visionRef}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <div
                style={{
                  opacity: visionVisible ? 1 : 0,
                  transform: visionVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.7s ease-out",
                }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 animate-bounce-in">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      قطاع عقاري سوري منظم، احترافي، مبني على معايير موحدة وثقة
                      متبادلة بين الوكلاء والعملاء.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div
                style={{
                  opacity: visionVisible ? 1 : 0,
                  transform: visionVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.7s ease-out 0.15s",
                }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 animate-bounce-in">
                      <Target className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      يهدف البرنامج إلى تمكين المكاتب العقارية من خلال التدريب
                      والتأهيل المهني المستمر، وتوحيد المعايير المهنية، ودعم
                      القوانين والتشريعات المتخصصة، إضافة إلى توفير حلول تقنية
                      حديثة بالشراكة مع منصة سويس هوم.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="pt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={missionRef}
              className="text-center mb-12"
              style={{
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span>تمكين المكاتب العقارية من خلال</span>
                <svg
                  className={missionVisible ? "animate-underline" : ""}
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    height: "8px",
                  }}
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,4 Q50,0 100,4 T200,4"
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 place-items-center">
              {[
                {
                  num: "1",
                  title: "تدريب وتأهيل مهني مستمر",
                  desc: "برامج تدريبية متخصصة وورش عمل دورية"
                },
                {
                  num: "2",
                  title: "توحيد المعايير المهنية",
                  desc: "وضع معايير موحدة للعمل العقاري"
                },
                {
                  num: "3",
                  title: "دعم القوانين والتشريعات",
                  desc: "استشارات قانونية ودعم تشريعي متخصص"
                },
                {
                  num: "4",
                  title: "حلول تقنية حديثة",
                  desc: "بالشراكة مع منصة سويس هوم"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-background p-6 rounded-lg w-full"
                  style={{
                    opacity: missionVisible ? 1 : 0,
                    transform: missionVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease-out ${index * 100}ms`,
                  }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{item.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-16 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              ref={valuesRef}
              className="text-center mb-12"
              style={{
                opacity: valuesVisible ? 1 : 0,
                transform: valuesVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span>قيمنا</span>
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
                    d="M0,4 Q50,0 100,4 T200,4"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  style={{
                    opacity: valuesVisible ? 1 : 0,
                    transform: valuesVisible ? "scale(1)" : "scale(0.9)",
                    transition: `all 0.7s ease-out ${index * 100}ms`,
                  }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-all">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={boardRef}
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: boardVisible ? 1 : 0,
              transform: boardVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <h2 className="text-3xl font-bold mb-8 inline-block relative">
              <span>مجلس الإدارة</span>
              <svg
                className={boardVisible ? "animate-underline" : ""}
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
                  stroke="hsl(var(--secondary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 mt-6">
              يدير الجمعية مجلس إدارة من ذوي الخبرة والكفاءة في القطاع العقاري،
              ملتزمون بتحقيق رؤية الجمعية وخدمة أعضائها.
            </p>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground italic">
                  سيتم إضافة معلومات أعضاء مجلس الإدارة قريباً
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;