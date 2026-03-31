import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const stats = [
    { icon: Sparkles, label: "تخصص حديث", value: "20+", color: "text-blue-600" },
    { icon: TrendingUp, label: "نمو السوق", value: "45%", color: "text-green-600" },
    { icon: Users, label: "فرص وظيفية", value: "عالية", color: "text-purple-600" },
    { icon: Zap, label: "رواتب تنافسية", value: "عالية", color: "text-orange-600" }
  ];

  const topSpecializations = [
    { name: "الأمن السيبراني", icon: "🛡️", demand: "عالي جداً", salary: "2.5-7M" },
    { name: "هندسة البيانات", icon: "📊", demand: "عالي جداً", salary: "2-6M" },
    { name: "الطاقة المتجددة", icon: "☀️", demand: "عالي", salary: "1.5-4.5M" },
    { name: "التقنيات المالية", icon: "💳", demand: "متزايد", salary: "1.5-4M" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">📚</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">مساعد التخصص</h1>
              <p className="text-xs text-slate-500">دليلك الأكاديمي 2026</p>
            </div>
          </div>
          <Badge className="bg-blue-50 text-blue-700 border-blue-200">إصدار 2026 المحدث ⚡</Badge>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full border border-blue-200">
            🎓 اختر مستقبلك بذكاء
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            مساعد اختيار التخصص الجامعي في العراق
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            اكتشف التخصصات الأكثر طلباً في سوق العمل العراقي. نحلل اهتماماتك لنرشدك نحو التخصصات النادرة والمستقبلية التي تضمن لك مساراً مهنياً ناجحاً.
          </p>
          <Button
            onClick={() => setLocation("/quiz")}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-7 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            ابدأ اختبار التخصص الآن
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6 text-center">
                <div className={`w-14 h-14 ${stat.color} mx-auto mb-4 flex items-center justify-center text-2xl`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Specializations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              تخصصات المستقبل في العراق 2026
            </h2>
            <p className="text-slate-600 text-lg">التخصصات الأكثر طلباً والأعلى رواتب</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSpecializations.map((spec, index) => (
              <Card
                key={index}
                className="border-t-4 border-t-blue-500 hover:shadow-xl transition-all hover:scale-105 cursor-pointer bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="text-5xl mb-4">{spec.icon}</div>
                  <CardTitle className="text-lg">{spec.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">الطلب:</span>
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700">{spec.demand}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">الراتب:</span>
                    <span className="font-semibold text-green-700">{spec.salary}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-20">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl">لماذا تستخدم مساعد التخصص؟</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">بيانات واقعية</h3>
                <p className="text-slate-600">معلومات مستمدة من أحدث تقارير سوق العمل العراقي 2026</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">تخصصات نادرة</h3>
                <p className="text-slate-600">نسلط الضوء على مجالات غير مشبعة توفر فرصاً وظيفية أسرع</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">تحليل شامل</h3>
                <p className="text-slate-600">لا نكتفي بالاسم، بل نعرض المواد والرواتب والجامعات</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل أنت مستعد لاختيار تخصصك؟</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            اختبرنا يستغرق 5 دقائق فقط ويساعدك على اكتشاف التخصصات الأنسب لك بناءً على اهتماماتك وقدراتك.
          </p>
          <Button
            onClick={() => setLocation("/quiz")}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-lg rounded-xl font-semibold"
          >
            ابدأ الآن
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm mt-20 py-8">
        <div className="container mx-auto px-4 text-center text-slate-600 text-sm">
          <p>© 2026 مساعد اختيار التخصص الجامعي في العراق. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
