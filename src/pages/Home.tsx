import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, BookOpen, FileText, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Users,
    title: "من نحن",
    description: "تعرف على رسالتنا، رؤيتنا، وأهدافنا في تطوير القطاع العقاري",
    link: "/about",
  },
  {
    icon: Award,
    title: "المكاتب المعتمدة",
    description: "قائمة بالمكاتب الأعضاء المعتمدين مع إمكانية التواصل المباشر",
    link: "/membership",
  },
  {
    icon: BookOpen,
    title: "التدريب والفعاليات",
    description: "ورش عمل، دورات، مؤتمرات وبرامج تطوير مهني متخصصة",
    link: "/events",
  },
  {
    icon: FileText,
    title: "الخدمات",
    description: "استشارات قانونية، عقود موحدة، وتقارير سوق شهرية",
    link: "/contact",
  },
];

const stats = [
  { value: "500+", label: "عضو معتمد" },
  { value: "50+", label: "ورشة عمل" },
  { value: "10", label: "محافظات" },
  { value: "100%", label: "رضا الأعضاء" },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.85)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            الجمعية السورية العامة للوكلاء العقاريين
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            من أجل مهنة عقارية منظمة، موثوقة، ومعتمدة
          </p>
          <p className="text-lg mb-10 text-white/80 max-w-4xl mx-auto">
            نحن أول كيان مهني مستقل يجمع المكاتب والوكلاء العقاريين في سوريا، بهدف تطوير المهنة، تنظيم الممارسات، رفع الكفاءة، وحماية مصالح العاملين والعملاء.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            <Link to="/membership">انتسب الآن إلى الجمعية</Link>
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ما نقدمه</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نعمل على توحيد الجهود، اعتماد المعايير المهنية، توفير التدريب، وتقديم خدمات قانونية وتقنية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>اعرف المزيد</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا الانضمام إلينا؟</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">اعتماد مهني</h3>
              <p className="text-muted-foreground">
                احصل على شارة "مكتب عقاري معتمد" وزد من مصداقيتك
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">تطوير مستمر</h3>
              <p className="text-muted-foreground">
                ورش عمل وتدريبات مهنية منتظمة لتطوير مهاراتك
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">دعم قانوني</h3>
              <p className="text-muted-foreground">
                استشارات قانونية متخصصة ومواد تدريبية حصرية
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            انضم إلى شبكة الوكلاء العقاريين المعتمدين
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            كن جزءاً من مجتمع مهني يسعى لتطوير القطاع العقاري في سوريا
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
            <Link to="/membership">ابدأ عضويتك الآن</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
