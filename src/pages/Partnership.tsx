import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building2, Database, TrendingUp, BookOpen, Users, Globe } from "lucide-react";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">الشراكة مع سويس هوم</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              شراكة استراتيجية لتطوير القطاع العقاري السوري
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-4 sm:p-8 text-center md:text-right">
                <div className="flex flex-col items-center md:flex-row md:items-baseline gap-4 mb-6">
                  <img src="/favi.webp" className="h-12 w-12 text-primary" />
                  <h2 className="text-[22px] sm:text-3xl font-bold">شراكتنا مع سويس هوم</h2>
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
      </section>

      {/* Features Section */}
      <section className="pt-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">تشمل الشراكة</h2>
              <p className="text-lg text-muted-foreground">
                مجموعة شاملة من الخدمات والحلول التقنية المتقدمة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">هدف الشراكة</h2>
                <div className="space-y-4">
                  {goals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-800">{goal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits for Members */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">فوائد الشراكة للأعضاء</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">وجود رقمي قوي</h3>
                  <p className="text-muted-foreground">
                    صفحة احترافية على منصة سويس هوم مع شارة العضوية المعتمدة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">أدوات إدارة متقدمة</h3>
                  <p className="text-muted-foreground">
                    نظام CRM شامل لإدارة العملاء والعقارات بكفاءة عالية
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">معلومات سوقية دقيقة</h3>
                  <p className="text-muted-foreground">
                    تقارير وتحليلات شهرية تساعد في اتخاذ قرارات مستنيرة
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">تدريب ودعم مستمر</h3>
                  <p className="text-muted-foreground">
                    برامج تدريبية ودعم فني متواصل لضمان أفضل استخدام للمنصة
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">
                اكتشف المزيد عن سويس هوم
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                زر منصة سويس هوم واطلع على الخدمات والحلول التقنية المتاحة
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="https://swesshome.com" target="_blank" rel="noopener noreferrer">
                  زيارة منصة سويس هوم
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
