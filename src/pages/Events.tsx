import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Award, Tag, MessageSquare, Library } from "lucide-react";
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

const benefits = [
  { text: "جميع الورش تمنح شهادة مشاركة معتمدة", icon: Award },
  { text: "للأعضاء خصومات بين 30% – 100%", icon: Tag },
  { text: "التسجيل عبر الموقع أو الواتساب", icon: MessageSquare },
  { text: "مواد تدريبية رقمية متاحة للأعضاء", icon: Library },
];

const Events = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
  const [topicsRef, topicsVisible] = useScrollReveal();
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
              التدريب والفعاليات
            </h1>
            <p 
              className="text-xl md:text-2xl text-primary-foreground/90"
              style={{
                animation: heroVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
              }}
            >
              نهدف لرفع الكفاءة المهنية للعاملين في القطاع العقاري من خلال برامج تعليمية عملية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div 
            ref={benefitsRef}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    style={{
                      opacity: benefitsVisible ? 1 : 0,
                      transform: benefitsVisible ? "translateY(0)" : "translateY(30px)",
                      transition: `all 0.7s ease-out ${index * 100}ms`,
                    }}
                  >
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-sm font-medium">{benefit.text}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="pt-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              ref={topicsRef}
              className="text-center mb-12"
              style={{
                opacity: topicsVisible ? 1 : 0,
                transform: topicsVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl font-bold mb-4 inline-block relative">
                <span>الفعاليات المتكررة</span>
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
                  title: "التقييم العقاري",
                  description: "أساسيات ومنهجيات التقييم العقاري الحديث"
                },
                {
                  title: "قوانين وعقود البيع والشراء",
                  description: "الإطار القانوني والتعاقدي للمعاملات العقارية"
                },
                {
                  title: "التسويق الرقمي",
                  description: "استراتيجيات التسويق العقاري عبر المنصات الرقمية"
                },
                {
                  title: "تحليل السوق",
                  description: "قراءة اتجاهات السوق وفهم المؤشرات الاقتصادية"
                }
              ].map((topic, index) => (
                <div
                  key={index}
                  style={{
                    opacity: topicsVisible ? 1 : 0,
                    transform: topicsVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease-out ${index * 100 + 200}ms`,
                  }}
                >
                  <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full border-2 hover:border-primary">
                    <CardHeader>
                      <CardTitle>{topic.title}</CardTitle>
                      <CardDescription>
                        {topic.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-3">
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
                  <span>هل لديك اقتراح لموضوع تدريبي؟</span>
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
                  نرحب باقتراحاتكم لمواضيع تدريبية جديدة تخدم تطوير القطاع العقاري
                </p>
                <div
                  style={{
                    animation: ctaVisible ? "fadeInUp 0.8s ease-out 0.6s both" : "none",
                  }}
                >
                  <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform" asChild>
                    <a href="/contact">تواصل معنا</a>
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

export default Events;