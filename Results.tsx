import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  DollarSign,
  TrendingUp,
  Users,
  MapPin,
  Star,
  Award,
} from "lucide-react";
import { useLocation } from "wouter";
import { specializations, calculateResults, Answer, SpecializationCategory } from "@/lib/specializations";

export default function Results() {
  const [, setLocation] = useLocation();
  const [selectedSpec, setSelectedSpec] = useState<any>(null);

  // Parse answers from URL
  const answers: Answer[] = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const answersStr = params.get("answers");
      return answersStr ? JSON.parse(answersStr) : [];
    } catch {
      return [];
    }
  }, []);

  const results = useMemo(() => calculateResults(answers), [answers]);

  const getTopRecommendations = () => {
    return results.slice(0, 3).map((result) => {
      const categoryData = specializations[result.category];
      return {
        ...result,
        categoryData,
        topSpecializations: categoryData.specializations.slice(0, 2),
      };
    });
  };

  const topRecommendations = getTopRecommendations();

  const SpecializationDetail = ({ spec }: { spec: any }) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-blue-600" />
              معلومات أساسية
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-slate-500" />
              <div>
                <span className="text-sm text-slate-600">مدة الدراسة:</span>
                <p className="font-semibold text-slate-900">{spec.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-slate-500" />
              <div>
                <span className="text-sm text-slate-600">سوق العمل:</span>
                <p className="font-semibold text-green-700">{spec.jobMarket}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-slate-500" />
              <div>
                <span className="text-sm text-slate-600">الراتب المتوقع:</span>
                <p className="font-semibold text-slate-900">{spec.averageSalary}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Star className="h-5 w-5 text-purple-600" />
              المهارات المطلوبة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {spec.skills.map((skill: string, index: number) => (
                <Badge key={index} className="bg-purple-100 text-purple-700 border-purple-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">المواد الدراسية الرئيسية</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {spec.subjects.map((subject: string, index: number) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700">{subject}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-blue-600" />
            مجالات العمل المتاحة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {spec.careerPaths.map((career: string, index: number) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-medium text-slate-900">{career}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-red-600" />
            الجامعات المتاحة
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {spec.universities.map((university: string, index: number) => (
              <div key={index} className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg">
                <Award className="h-4 w-4 text-blue-600" />
                <span className="text-slate-700">{university}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  if (answers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center">
        <Card className="border-none shadow-xl max-w-md">
          <CardHeader className="text-center">
            <CardTitle>لم نتمكن من تحميل النتائج</CardTitle>
            <CardDescription>يرجى العودة والقيام بالاختبار مجدداً</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => setLocation("/quiz")} className="bg-blue-600 hover:bg-blue-700">
              العودة للاختبار
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            العودة للرئيسية
          </Button>

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">نتائج اختبارك</h1>
            <p className="text-lg text-slate-600">
              بناءً على إجاباتك، إليك أفضل التخصصات المناسبة لك
            </p>
          </div>
        </div>

        {/* Top Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">أفضل التوصيات لك</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRecommendations.map((recommendation, index) => (
              <Card
                key={recommendation.category}
                className={`border-none shadow-lg transition-all hover:shadow-xl cursor-pointer ${
                  index === 0 ? "ring-2 ring-blue-500 md:scale-105" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{recommendation.categoryData.icon}</span>
                    {index === 0 && <Badge className="bg-blue-600">الأنسب لك</Badge>}
                  </div>
                  <CardTitle className="text-lg">{recommendation.categoryData.name}</CardTitle>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">مستوى التطابق</span>
                      <span className="font-bold text-blue-600">{recommendation.percentage}%</span>
                    </div>
                    <Progress value={recommendation.percentage} className="h-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {recommendation.topSpecializations.map((spec: any) => (
                      <Button
                        key={spec.id}
                        variant="ghost"
                        className="w-full justify-start text-right text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                        onClick={() => setSelectedSpec(spec)}
                      >
                        {spec.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        {selectedSpec && (
          <Card className="mb-12 border-none shadow-xl">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl text-slate-900">{selectedSpec.name}</CardTitle>
                  <CardDescription className="text-lg mt-2">{selectedSpec.description}</CardDescription>
                </div>
                <Button variant="ghost" onClick={() => setSelectedSpec(null)}>
                  إغلاق
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <SpecializationDetail spec={selectedSpec} />
            </CardContent>
          </Card>
        )}

        {/* All Categories */}
        <Card className="border-none shadow-xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">جميع التخصصات حسب مستوى التطابق</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={results[0]?.category} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6">
                {results.map((result) => (
                  <TabsTrigger key={result.category} value={result.category} className="flex flex-col gap-1">
                    <span className="text-lg">{specializations[result.category].icon}</span>
                    <span className="text-xs hidden md:inline">
                      {specializations[result.category].name.split(" ")[0]}
                    </span>
                    <Badge variant="outline" className="text-xs mt-1">
                      {result.percentage}%
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              {results.map((result) => (
                <TabsContent key={result.category} value={result.category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {specializations[result.category].specializations.map((spec) => (
                      <Card
                        key={spec.id}
                        className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 border-none shadow-md"
                        onClick={() => setSelectedSpec(spec)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg text-slate-900">{spec.name}</CardTitle>
                          <CardDescription className="line-clamp-2">{spec.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-slate-600">المدة:</span>
                              <span className="font-semibold">{spec.duration}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-600">السوق:</span>
                              <Badge variant="outline" className="text-xs">
                                {spec.jobMarket}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant="outline"
            onClick={() => setLocation("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            العودة للرئيسية
          </Button>
          <Button
            onClick={() => setLocation("/quiz")}
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
          >
            إعادة الاختبار
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Button>
        </div>

        {/* Footer Tip */}
        <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-slate-700 font-medium">
            💡 تذكر: اختيار التخصص هو خطوة مهمة. تحدث مع مستشاريك الأكاديميين للحصول على مزيد من المعلومات
          </p>
        </div>
      </div>
    </div>
  );
}
