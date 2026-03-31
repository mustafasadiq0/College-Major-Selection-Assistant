import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ShieldCheck, Cpu, Zap, Wallet } from 'lucide-react';

const HomePage = ({ onStartQuiz }) => {
  const stats = [
    { icon: Cpu, label: "تخصص حديث 2026", value: "20+" },
    { icon: ShieldCheck, label: "تخصص نادر ومطلوب", value: "10+" },
    { icon: Zap, label: "نمو سوق العمل", value: "45%" },
    { icon: Wallet, label: "رواتب تنافسية", value: "عالية" }
  ];

  const popularSpecializations = [
    { name: "الأمن السيبراني", category: "تقني", demand: "عالي جداً", icon: "🛡️" },
    { name: "هندسة البيانات", category: "تقني", demand: "عالي جداً", icon: "📊" },
    { name: "الطاقة المتجددة", category: "هندسي", demand: "عالي", icon: "☀️" },
    { name: "التقنيات المالية", category: "إداري", demand: "متزايد", icon: "💳" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            تحديثات عام 2026 متوفرة الآن 🚀
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            مستقبلك يبدأ هنا: مساعد اختيار التخصص الجامعي في العراق
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            اكتشف التخصصات الأكثر طلباً في سوق العمل العراقي لعام 2026. 
            نحلل اهتماماتك لنرشدك نحو التخصصات النادرة والمستقبلية التي تضمن لك مساراً مهنياً ناجحاً.
          </p>
          <Button 
            onClick={onStartQuiz}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-xl rounded-xl shadow-lg transition-all hover:scale-105"
          >
            ابدأ اختبار التخصص 2026
            <ArrowRight className="mr-2 h-6 w-6" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-md bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Specializations 2026 */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              تخصصات المستقبل في العراق 2026
            </h2>
            <p className="text-slate-600">التخصصات التي تشهد أعلى معدلات نمو وطلب في القطاعين العام والخاص</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSpecializations.map((spec, index) => (
              <Card key={index} className="hover:shadow-xl transition-all border-t-4 border-t-blue-500 group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{spec.icon}</div>
                  <CardTitle className="text-xl">{spec.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{spec.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge 
                    variant="secondary"
                    className="w-full justify-center py-1 bg-blue-50 text-blue-700 border-blue-100"
                  >
                    الطلب: {spec.demand}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why this tool? */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">لماذا تستخدم مساعد التخصص؟</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight className="h-4 w-4 text-green-600" /></div>
                  <p className="text-slate-700"><strong>بيانات واقعية:</strong> معلومات مستمدة من أحدث تقارير سوق العمل العراقي 2026.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight className="h-4 w-4 text-green-600" /></div>
                  <p className="text-slate-700"><strong>تخصصات نادرة:</strong> نسلط الضوء على مجالات غير مشبعة توفر فرصاً وظيفية أسرع.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full"><ArrowRight className="h-4 w-4 text-green-600" /></div>
                  <p className="text-slate-700"><strong>تحليل شامل:</strong> لا نكتفي بالاسم، بل نعرض المواد، الرواتب، والجامعات المتاحة.</p>
                </li>
              </ul>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">هل تعلم؟</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                في عام 2026، أصبح تخصص "الأمن السيبراني" و "هندسة البيانات" من أعلى الرواتب في العراق، 
                حيث تتجاوز رواتب الخبراء في هذه المجالات 5 ملايين دينار عراقي شهرياً في القطاع الخاص والمصرفي.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" onClick={onStartQuiz}>
                اكتشف المزيد الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
