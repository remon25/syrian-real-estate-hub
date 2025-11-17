import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building2, Database, TrendingUp, BookOpen, Users, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

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

const features = [
  {
    icon: Users,
    title: "ربط العضوية بنظام سويس هوم",
    description: "تكامل تام بين نظام العضوية والمنصة الإلكترونية",
  },
  {
    icon: CheckCircle,
    title: 'عرض شارة "عضو الجمعية"',
    description: "شارة رسمية معتمدة تظهر داخل صفحات المكاتب الأعضاء",
  },
  {
    icon: TrendingUp,
    title: "تقارير سوقية شهرية",
    description: "بيانات وتحليلات شاملة عن سوق العقارات السوري",
  },
  {
    icon: BookOpen,
    title: "خدمات تدريب رقمية",
    description: "منصة تعليمية متكاملة لتطوير المهارات المهنية",
  },
  {
    icon: Database,
    title: "منصة بيانات وإدارة علاقات (CRM)",
    description: "أدوات حديثة لإدارة العملاء والعقارات بكفاءة",
  },
  {
    icon: Building2,
    title: "حلول تقنية متكاملة",
    description: "تقنيات حديثة لتحسين الأداء وتسهيل العمل",
  },
];

const goals = [
  "بناء قطاع عقاري أكثر مهنية وموثوقية",
  "تمكين المكاتب بأدوات وتقنيات حديثة",
];

const Partnership = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [goalsRef, goalsVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
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
              الشراكة مع سويس هوم
            </h1>
            <p 
              className="text-xl md:text-2xl text-primary-foreground/90"
              style={{
                animation: heroVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
              }}
            >
              شراكة استراتيجية لتطوير القطاع العقاري السوري
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
                <CardContent className="p-4 sm:p-8 text-center md:text-right">
                  <div className="flex flex-col items-center md:flex-row md:items-baseline gap-4 mb-6">
                    <img src="/favi.webp" className="h-12 w-12 text-primary" />
                    <h2 className="text-[22px] sm:text-3xl font-bold inline-block relative">
                      <span>شراكتنا مع سويس هوم</span>
                    </h2>
                  </div>
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    تتمتع الجمعية بشراكة استراتيجية مع شركة سويس هوم العقارية بصفتها الذراع التقني الرسمي للجمعية.
                  </p>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    تهدف هذه الشراكة إلى تزويد أعضاء الجمعية بأحدث الأدوات والتقنيات التي تساعدهم على تطوير أعمالهم 
                    وتقديم خدمات عقارية احترافية تلبي أعلى معايير الجودة.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              ref={featuresRef}
              className="text-center mb-16"
              style={{
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
                <span>تشمل الشراكة</span>
                <svg
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
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-lg text-muted-foreground mt-4">
                مجموعة شاملة من الخدمات والحلول التقنية المتقدمة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    opacity: featuresVisible ? 1 : 0,
                    transform: featuresVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease-out ${index * 100}ms`,
                  }}
                >
                  <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={goalsRef}
              style={{
                opacity: goalsVisible ? 1 : 0,
                transform: goalsVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-8 text-center inline-block relative w-full">
                    <span>هدف الشراكة</span>
                    <svg
                    className="w-[50%] md:w-[25%]"
                      style={{
                        position: "absolute",
                        bottom: "-12px",
                        left: "50%",
                        transform: "translateX(-50%)",
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
                  <div className="space-y-4 mt-6">
                    {goals.map((goal, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-4"
                        style={{
                          opacity: goalsVisible ? 1 : 0,
                          transform: goalsVisible ? "translateX(0)" : "translateX(-30px)",
                          transition: `all 0.7s ease-out ${index * 200}ms`,
                        }}
                      >
                        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-lg text-gray-800">{goal}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Members */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={benefitsRef}
              className="text-center mb-12"
              style={{
                opacity: benefitsVisible ? 1 : 0,
                transform: benefitsVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span>فوائد الشراكة للأعضاء</span>
                <svg
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
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "وجود رقمي قوي",
                  description: "صفحة احترافية على منصة سويس هوم مع شارة العضوية المعتمدة"
                },
                {
                  title: "أدوات إدارة متقدمة",
                  description: "نظام CRM شامل لإدارة العملاء والعقارات بكفاءة عالية"
                },
                {
                  title: "معلومات سوقية دقيقة",
                  description: "تقارير وتحليلات شهرية تساعد في اتخاذ قرارات مستنيرة"
                },
                {
                  title: "تدريب ودعم مستمر",
                  description: "برامج تدريبية ودعم فني متواصل لضمان أفضل استخدام للمنصة"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    opacity: benefitsVisible ? 1 : 0,
                    transform: benefitsVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease-out ${index * 100 + 200}ms`,
                  }}
                >
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={ctaRef}
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <Card className="bg-primary text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h2 
                  className="text-2xl font-bold mb-8 inline-block relative"
                  style={{
                    animation: ctaVisible ? "fadeInUp 0.8s ease-out 0.2s both" : "none",
                  }}
                >
                  <span>اكتشف المزيد عن سويس هوم</span>
                  <svg
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
                <p 
                  className="text-xl text-primary-foreground/90 mb-8 mt-4"
                  style={{
                    animation: ctaVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
                  }}
                >
                  زر منصة سويس هوم واطلع على الخدمات والحلول التقنية المتاحة
                </p>
                <div
                  style={{
                    animation: ctaVisible ? "fadeInUp 0.8s ease-out 0.6s both" : "none",
                  }}
                >
                  <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform" asChild>
                    <a href="https://swesshome.com" target="_blank" rel="noopener noreferrer">
                      زيارة منصة سويس هوم
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;