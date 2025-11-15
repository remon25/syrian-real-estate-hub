import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  BookOpen,
  Scale,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";
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
  {
    icon: Award,
    title: 'الحصول على صفة "مكتب عقاري معتمد"',
    description: "تظهر الشارة على ملف مكتبك داخل منصة سويس هوم",
  },
  {
    icon: BookOpen,
    title: "خدمات تدريب مهني مستمر",
    description: "ورش عمل شهرية + شهادات معتمدة",
  },
  {
    icon: Scale,
    title: "استشارات قانونية من مستشارين متخصصين",
    description: "تدقيق عقود، تنظيم قضايا، نصائح مهنية",
  },
  {
    icon: Users,
    title: "الوجود في دليل المكاتب المعتمدة",
    description:
      "يُعرض مكتبك في موقع الجمعية مع رابط مباشر لصفحتك في سويس هوم.",
  },
  {
    icon: TrendingUp,
    title: "تقارير عقارية شهرية",
    description: "مؤشرات أسعار، اتجاهات السوق، بيانات تحليلية",
  },
  {
    icon: FileText,
    title: "حضور فعاليات ومؤتمرات",
    description: "خصومات - دعوات خاصة",
  },
];

const Membership = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    officeName: '',
    license: '',
    province: '',
    responsiblePerson: '',
    phone: '',
    email: '',
    swissHomeLink: '',
    notes: ''
  });
  const [heroRef, heroVisible] = useScrollReveal();
  const [benefitsRef, benefitsVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      alert("تم إرسال طلبك بنجاح! سنتواصل معك قريباً لاستكمال إجراءات العضوية");
      setIsSubmitting(false);
      setFormData({
        officeName: '',
        license: '',
        province: '',
        responsiblePerson: '',
        phone: '',
        email: '',
        swissHomeLink: '',
        notes: ''
      });
    }, 1000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              العضوية والانتساب
            </h1>
            <p 
              className="text-xl md:text-2xl text-primary-foreground/90"
              style={{
                animation: heroVisible ? "fadeInUp 0.8s ease-out 0.4s both" : "none",
              }}
            >
              انضم إلى شبكة الوكلاء العقاريين المعتمدين واستفد من مجموعة من الخدمات الحصرية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div 
              ref={benefitsRef}
              className="text-center mb-16"
              style={{
                opacity: benefitsVisible ? 1 : 0,
                transform: benefitsVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
                <span>لماذا تنضم إلى الجمعية؟</span>
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
                عضويتك تمنح مكتبك مجموعة من الفوائد الحصرية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  style={{
                    opacity: benefitsVisible ? 1 : 0,
                    transform: benefitsVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.7s ease-out ${index * 100}ms`,
                  }}
                >
                  <Card className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="pt-10 pb-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              ref={formRef}
              className="text-center mb-12"
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out",
              }}
            >
              <h2 className="text-3xl font-bold mb-8 inline-block relative">
                <span>نموذج الانتساب</span>
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
              <p className="text-lg text-muted-foreground mt-4">
                املأ بياناتك للانضمام إلى الجمعية
              </p>
            </div>

            <div
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.3s",
              }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="officeName">اسم المكتب *</Label>
                        <Input
                          id="officeName"
                          value={formData.officeName}
                          onChange={(e) => handleChange('officeName', e.target.value)}
                          placeholder="أدخل اسم المكتب"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="license">رقم الترخيص *</Label>
                        <Input
                          id="license"
                          value={formData.license}
                          onChange={(e) => handleChange('license', e.target.value)}
                          placeholder="أدخل رقم الترخيص"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="province">المحافظة *</Label>
                        <Input
                          id="province"
                          value={formData.province}
                          onChange={(e) => handleChange('province', e.target.value)}
                          placeholder="أدخل المحافظة"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="responsiblePerson">الشخص المسؤول *</Label>
                        <Input
                          id="responsiblePerson"
                          value={formData.responsiblePerson}
                          onChange={(e) => handleChange('responsiblePerson', e.target.value)}
                          placeholder="أدخل اسم المسؤول"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف *</Label>
                        <Input
                          className="text-right"
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="أدخل رقم الهاتف"
                          dir="ltr"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني *</Label>
                        <Input
                          className="text-right"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="أدخل البريد الإلكتروني"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="swissHomeLink">
                        رابط صفحة سويس هوم (إن وجد)
                      </Label>
                      <Input
                        className="text-right"
                        id="swissHomeLink"
                        type="url"
                        value={formData.swissHomeLink}
                        onChange={(e) => handleChange('swissHomeLink', e.target.value)}
                        placeholder="https://"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">ملاحظات إضافية</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleChange('notes', e.target.value)}
                        placeholder="أي معلومات إضافية تود إضافتها"
                        rows={4}
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      className="w-full hover:scale-105 transition-transform"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;