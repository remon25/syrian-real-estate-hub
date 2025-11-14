import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Lightbulb, Users, Handshake } from "lucide-react";

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
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              نحن هيئة مهنية غير ربحية نعمل على رفع مستوى العمل العقاري في سوريا
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">من نحن؟</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  الجمعية السورية العامة للوكلاء العقاريين هي هيئة مهنية غير
                  ربحية تعمل على رفع مستوى العمل العقاري في سوريا، ودعم المكاتب
                  والوكلاء العقاريين عبر برامج تدريب، تنظيم السوق، وتقديم خدمات
                  قانونية وتقنية متقدمة.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">رؤيتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    قطاع عقاري سوري منظم، احترافي، مبني على معايير موحدة وثقة
                    متبادلة بين الوكلاء والعملاء.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">رسالتنا</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    يهدف البرنامج إلى تمكين المكاتب العقارية من خلال التدريب
                    والتأهيل المهني المستمر، وتوحيد المعايير المهنية، ودعم
                    القوانين والتشريعات المتخصصة، إضافة إلى توفير حلول تقنية
                    حديثة بالشراكة مع منصة سويس هوم.{" "}
                  </p>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission Points */}
      <section className="pt-10 g-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              تمكين المكاتب العقارية من خلال
            </h2>
            <div className="grid md:grid-cols-2 gap-6 place-items-center">
              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    تدريب وتأهيل مهني مستمر
                  </h3>
                  <p className="text-muted-foreground">
                    برامج تدريبية متخصصة وورش عمل دورية
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    توحيد المعايير المهنية
                  </h3>
                  <p className="text-muted-foreground">
                    وضع معايير موحدة للعمل العقاري
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    دعم القوانين والتشريعات
                  </h3>
                  <p className="text-muted-foreground">
                    استشارات قانونية ودعم تشريعي متخصص
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-6 rounded-lg">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">حلول تقنية حديثة</h3>
                  <p className="text-muted-foreground">
                    بالشراكة مع منصة سويس هوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">قيمنا</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">مجلس الإدارة</h2>
            <p className="text-lg text-muted-foreground mb-12">
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
