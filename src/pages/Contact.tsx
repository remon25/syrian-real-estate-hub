import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    content: "دمشق، سوريا",
  },
  {
    icon: Phone,
    title: "الهاتف",
    content: "+963 XX XXX XXXX",
    direction: "ltr" as const,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "info@syrianrea.com",
    direction: "ltr" as const,
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    content: "10 ص – 6 م (الأحد - الخميس)",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنتواصل معك في أقرب وقت ممكن",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              نسعد باستقبال استفساراتكم وملاحظاتكم وطلبات التعاون
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p 
                    className="text-muted-foreground"
                    dir={info.direction}
                  >
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">نموذج تواصل سريع</h2>
              <p className="text-lg text-muted-foreground">
                املأ النموذج وسنتواصل معك في أقرب وقت
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        placeholder="أدخل رقم هاتفك"
                        dir="ltr"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="أدخل بريدك الإلكتروني"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">الموضوع *</Label>
                    <Input 
                      id="subject" 
                      required 
                      placeholder="موضوع الرسالة"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="اكتب رسالتك هنا..."
                      rows={6}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  لديك سؤال محدد؟
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold mb-2">للاستفسار عن العضوية</h4>
                    <p className="text-sm text-muted-foreground">
                      راجع صفحة العضوية أو تواصل معنا مباشرة
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-2">للتسجيل في الفعاليات</h4>
                    <p className="text-sm text-muted-foreground">
                      زر صفحة الفعاليات للاطلاع على البرنامج
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-2">للشراكات والتعاون</h4>
                    <p className="text-sm text-muted-foreground">
                      نرحب بالشراكات المهنية والمؤسسية
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
