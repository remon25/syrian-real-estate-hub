import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Award } from "lucide-react";

const upcomingEvents = [
  {
    title: "أساسيات التقييم العقاري",
    type: "ورشة عمل",
    date: "15 يناير 2025",
    time: "10:00 ص - 2:00 م",
    location: "دمشق - مركز التدريب",
    capacity: "30 مشارك",
    discount: "30% للأعضاء",
    status: "متاح",
  },
  {
    title: "قوانين وعقود البيع والشراء",
    type: "ورشة عمل",
    date: "22 يناير 2025",
    time: "10:00 ص - 2:00 م",
    location: "دمشق - مركز التدريب",
    capacity: "25 مشارك",
    discount: "40% للأعضاء",
    status: "متاح",
  },
  {
    title: "التسويق العقاري الرقمي",
    type: "ورشة عمل",
    date: "29 يناير 2025",
    time: "10:00 ص - 4:00 م",
    location: "دمشق - مركز التدريب",
    capacity: "35 مشارك",
    discount: "50% للأعضاء",
    status: "متاح",
  },
  {
    title: "اتجاهات السوق - تقرير الشهر",
    type: "ندوة",
    date: "5 فبراير 2025",
    time: "5:00 م - 7:00 م",
    location: "عبر الإنترنت",
    capacity: "100 مشارك",
    discount: "مجاني للأعضاء",
    status: "متاح",
  },
];

const benefits = [
  "جميع الورش تمنح شهادة مشاركة معتمدة",
  "للأعضاء خصومات بين 30% – 100%",
  "التسجيل عبر الموقع أو الواتساب",
  "مواد تدريبية رقمية متاحة للأعضاء",
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">الفعاليات القادمة</h2>
              <p className="text-lg text-muted-foreground">
                ورش عمل ودورات تدريبية متخصصة في مختلف جوانب العمل العقاري
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant={event.status === "متاح" ? "default" : "secondary"}>
                        {event.type}
                      </Badge>
                      <Badge variant="outline" className="text-secondary border-secondary">
                        {event.discount}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="h-5 w-5 text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    <Button className="w-full" size="lg">
                      سجّل الآن
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">محاور التدريب الرئيسية</h2>
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
                  <CardTitle>القوانين والعقود</CardTitle>
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

              <Card>
                <CardHeader>
                  <CardTitle>خدمة العملاء</CardTitle>
                  <CardDescription>
                    مهارات التواصل وبناء الثقة مع العملاء
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>التقنيات الحديثة</CardTitle>
                  <CardDescription>
                    استخدام الأدوات التقنية في العمل العقاري
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
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
