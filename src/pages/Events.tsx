import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Award, Tag, MessageSquare, Library } from "lucide-react";

const benefits = [
  { text: "جميع الورش تمنح شهادة مشاركة معتمدة", icon: Award },
  { text: "للأعضاء خصومات بين 30% – 100%", icon: Tag },
  { text: "التسجيل عبر الموقع أو الواتساب", icon: MessageSquare },
  { text: "مواد تدريبية رقمية متاحة للأعضاء", icon: Library },
];

const Events = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">التدريب والفعاليات</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              نهدف لرفع الكفاءة المهنية للعاملين في القطاع العقاري من خلال برامج تعليمية عملية
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <p className="text-sm font-medium">{benefit.text}</p>
                    </CardContent>
                  </Card>
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
            <h2 className="text-3xl font-bold mb-12 text-center">الفعاليات المتكررة</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>التقييم العقاري</CardTitle>
                  <CardDescription>
                    أساسيات ومنهجيات التقييم العقاري الحديث
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>قوانين وعقود البيع والشراء</CardTitle>
                  <CardDescription>
                    الإطار القانوني والتعاقدي للمعاملات العقارية
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>التسويق الرقمي</CardTitle>
                  <CardDescription>
                    استراتيجيات التسويق العقاري عبر المنصات الرقمية
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>تحليل السوق</CardTitle>
                  <CardDescription>
                    قراءة اتجاهات السوق وفهم المؤشرات الاقتصادية
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-3">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">
                هل لديك اقتراح لموضوع تدريبي؟
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                نرحب باقتراحاتكم لمواضيع تدريبية جديدة تخدم تطوير القطاع العقاري
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="/contact">تواصل معنا</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Events;