import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Award, BookOpen, Scale, TrendingUp, Users, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

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
    title: "استشارات قانونية متخصصة",
    description: "تدقيق عقود، تنظيم قضايا، نصائح مهنية",
  },
  {
    icon: Users,
    title: "الوجود في دليل المكاتب المعتمدة",
    description: "يُعرض مكتبك مع رابط مباشر لصفحتك",
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال طلبك بنجاح",
        description: "سنتواصل معك قريباً لاستكمال إجراءات العضوية",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">العضوية والانتساب</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              انضم إلى شبكة الوكلاء العقاريين المعتمدين واستفد من مجموعة من الخدمات الحصرية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا تنضم إلى الجمعية؟</h2>
              <p className="text-lg text-muted-foreground">
                عضويتك تمنح مكتبك مجموعة من الفوائد الحصرية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">نموذج الانتساب</h2>
              <p className="text-lg text-muted-foreground">
                املأ بياناتك للانضمام إلى الجمعية
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="officeName">اسم المكتب *</Label>
                      <Input id="officeName" required placeholder="أدخل اسم المكتب" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="license">رقم الترخيص *</Label>
                      <Input id="license" required placeholder="أدخل رقم الترخيص" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="province">المحافظة *</Label>
                      <Input id="province" required placeholder="أدخل المحافظة" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="responsiblePerson">الشخص المسؤول *</Label>
                      <Input id="responsiblePerson" required placeholder="أدخل اسم المسؤول" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder="أدخل رقم الهاتف"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="أدخل البريد الإلكتروني"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="swissHomeLink">رابط صفحة سويس هوم (إن وجد)</Label>
                    <Input 
                      id="swissHomeLink" 
                      type="url" 
                      placeholder="https://"
                      dir="ltr"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">ملاحظات إضافية</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="أي معلومات إضافية تود إضافتها"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">متطلبات العضوية</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      امتلاك ترخيص رسمي لمزاولة مهنة الوساطة العقارية
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      الالتزام بمعايير الجمعية وأخلاقيات المهنة
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      دفع رسوم العضوية السنوية
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      المشاركة في برامج التدريب والتطوير المهني
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
