import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { questions, Answer, SpecializationCategory } from "@/lib/specializations";

export default function Quiz() {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: SpecializationCategory, weight: number) => {
    const newAnswers = [...answers, { questionId: question.id, value, weight }];
    setAnswers(newAnswers);
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsAnswered(false);
    } else {
      // Navigate to results with answers
      setLocation(`/results?answers=${JSON.stringify(answers)}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setIsAnswered(true);
    }
  };

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-8">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="mb-6 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          العودة للرئيسية
        </Button>

        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-slate-900">اختبار التخصص</h1>
            <span className="text-sm font-semibold text-slate-600">
              السؤال {currentQuestion + 1} من {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Quiz Card */}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-center text-slate-900">
                {question.question}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value, option.weight)}
                    disabled={isAnswered}
                    className={`p-4 rounded-lg border-2 transition-all text-right font-medium ${
                      isAnswered
                        ? "border-slate-200 bg-slate-50 text-slate-600 cursor-not-allowed"
                        : "border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 text-slate-900 cursor-pointer"
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  السابق
                </Button>

                <div className="flex gap-2">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all ${
                        index <= currentQuestion ? "bg-blue-600" : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  {currentQuestion === questions.length - 1 ? "إنهاء الاختبار" : "التالي"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tip */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center text-sm text-slate-700">
            💡 اختر الإجابة التي تعكس اهتماماتك وشغفك الحقيقي
          </div>
        </div>
      </div>
    </div>
  );
}
