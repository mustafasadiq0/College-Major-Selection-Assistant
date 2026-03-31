// بيانات التخصصات الجامعية في العراق - تحديث 2026
export const specializations = {
  medical: {
    name: "التخصصات الطبية والصحية",
    color: "bg-red-500",
    icon: "🏥",
    specializations: [
      {
        id: "medicine",
        name: "الطب البشري",
        description: "دراسة جسم الإنسان وأمراضه وطرق علاجها مع التركيز على التقنيات الحديثة",
        duration: "6 سنوات",
        subjects: ["التشريح", "علم وظائف الأعضاء", "الكيمياء الحياتية", "علم الأمراض", "الطب الباطني", "الجراحة العامة"],
        careerPaths: ["طبيب عام", "طبيب مختص", "جراح", "باحث طبي"],
        averageSalary: "1,800,000 - 6,000,000 دينار عراقي",
        jobMarket: "مطلوب بشدة (استقرار وظيفي عالي)",
        universities: ["جامعة بغداد", "جامعة البصرة", "جامعة الموصل", "جامعة الكوفة"],
        interests: ["العلوم", "مساعدة الآخرين", "البحث العلمي"],
        skills: ["التحليل", "الدقة", "التواصل", "الصبر"]
      },
      {
        id: "epidemiology",
        name: "علم الأوبئة والأمراض النادرة",
        description: "تخصص حيوي يركز على دراسة انتشار الأمراض والوقاية منها (تخصص نادر مطلوب حكومياً)",
        duration: "5-6 سنوات",
        subjects: ["الإحصاء الحيوي", "علم الأوبئة", "الصحة العامة", "الأمراض الانتقالية", "إدارة الأزمات الصحية"],
        careerPaths: ["خبير أوبئة", "مستشار صحة عامة", "باحث في الأمراض النادرة"],
        averageSalary: "2,000,000 - 4,500,000 دينار عراقي",
        jobMarket: "مطلوب جداً في وزارة الصحة والمنظمات الدولية",
        universities: ["جامعة بغداد - كلية الطب", "جامعة كركوك"],
        interests: ["البحث العلمي", "الإحصاء", "الصحة العامة"],
        skills: ["تحليل البيانات", "التفكير الاستراتيجي", "الدقة"]
      },
      {
        id: "dentistry",
        name: "طب الأسنان",
        description: "تشخيص وعلاج أمراض الفم والأسنان مع التوجه نحو التجميل الرقمي",
        duration: "5 سنوات",
        subjects: ["تشريح الفم", "أمراض اللثة", "جراحة الفم", "تقويم الأسنان", "التعويضات السنية الرقمية"],
        careerPaths: ["طبيب أسنان عام", "أخصائي تقويم", "جراح فم ووجه وفكين"],
        averageSalary: "1,500,000 - 4,000,000 دينار عراقي",
        jobMarket: "مطلوب (نمو كبير في القطاع الخاص)",
        universities: ["جامعة بغداد", "جامعة البصرة", "الجامعات الأهلية المعتمدة"],
        interests: ["العلوم", "الدقة", "التجميل"],
        skills: ["المهارات اليدوية", "الدقة", "التواصل"]
      }
    ]
  },
  tech_engineering: {
    name: "الهندسة والتحول الرقمي",
    color: "bg-blue-600",
    icon: "💻",
    specializations: [
      {
        id: "cybersecurity",
        name: "أمن سيبراني وعمليات SOC",
        description: "حماية الأنظمة والشبكات من الهجمات الرقمية (من أكثر الوظائف طلباً في 2026)",
        duration: "4 سنوات",
        subjects: ["أمن الشبكات", "التشفير", "التحقيق الجنائي الرقمي", "إدارة الثغرات", "الأمن السحابي"],
        careerPaths: ["مهندس أمن سيبراني", "محلل SOC", "مختبر اختراق"],
        averageSalary: "2,500,000 - 7,000,000 دينار عراقي",
        jobMarket: "مطلوب بشدة في المصارف، الاتصالات، والجهات الحكومية",
        universities: ["الجامعة التكنولوجية", "جامعة بغداد", "جامعة تكنولوجيا المعلومات والاتصالات"],
        interests: ["التكنولوجيا", "الأمن", "حل الألغاز"],
        skills: ["التفكير النقدي", "البرمجة", "السرعة في الاستجابة"]
      },
      {
        id: "data_engineering",
        name: "هندسة البيانات والذكاء الاصطناعي",
        description: "بناء خطوط البيانات وتطوير نماذج التعلم الآلي لحل المشاكل الواقعية",
        duration: "4 سنوات",
        subjects: ["SQL متقدم", "Python للذكاء الاصطناعي", "Big Data", "التعلم الآلي", "حوكمة البيانات"],
        careerPaths: ["مهندس بيانات", "عالم بيانات", "مهندس ذكاء اصطناعي"],
        averageSalary: "2,000,000 - 6,000,000 دينار عراقي",
        jobMarket: "مطلوب جداً للتحول الرقمي الوطني",
        universities: ["الجامعة التكنولوجية", "جامعة بغداد", "جامعة بابل"],
        interests: ["الرياضيات", "البرمجة", "المنطق"],
        skills: ["التحليل الإحصائي", "البرمجة", "نمذجة البيانات"]
      },
      {
        id: "digital_transformation",
        name: "معماري التحول الرقمي (e-Gov)",
        description: "تصميم وإدارة أنظمة الحوكمة الإلكترونية والأتمتة الحكومية",
        duration: "4 سنوات",
        subjects: ["تحليل العمليات", "تكامل الأنظمة", "إدارة الهوية الرقمية", "تصميم الخدمات"],
        careerPaths: ["معماري حلول", "مدير تحول رقمي", "محلل نظم حكومية"],
        averageSalary: "3,000,000 - 8,000,000 دينار عراقي",
        jobMarket: "مطلوب بشدة في المشاريع الحكومية الكبرى",
        universities: ["جامعة تكنولوجيا المعلومات والاتصالات", "جامعة بغداد"],
        interests: ["الإدارة", "التكنولوجيا", "التنظيم"],
        skills: ["التخطيط الاستراتيجي", "القيادة", "تحليل النظم"]
      }
    ]
  },
  energy_infra: {
    name: "الطاقة والبنى التحتية",
    color: "bg-orange-500",
    icon: "⚡",
    specializations: [
      {
        id: "renewable_energy",
        name: "هندسة الطاقة المتجددة والكفاءة",
        description: "التركيز على الطاقة الشمسية، استغلال الغاز المصاحب، وتحسين كفاءة الشبكة",
        duration: "4 سنوات",
        subjects: ["الطاقة الشمسية", "أنظمة القدرة", "كفاءة الطاقة", "إدارة الغاز المصاحب"],
        careerPaths: ["مهندس طاقة متجددة", "مستشار كفاءة طاقة", "مهندس أنظمة قدرة"],
        averageSalary: "1,500,000 - 4,500,000 دينار عراقي",
        jobMarket: "مطلوب في مشاريع الطاقة الوطنية والاستثمارات الدولية",
        universities: ["الجامعة التكنولوجية", "جامعة البصرة", "جامعة الأنبار"],
        interests: ["البيئة", "الفيزياء", "الابتكار"],
        skills: ["التصميم الهندسي", "التحليل", "إدارة المشاريع"]
      },
      {
        id: "industrial_automation",
        name: "الأتمتة الصناعية و SCADA",
        description: "التحكم في العمليات الصناعية في قطاعات النفط والغاز والبتروكيماويات",
        duration: "4 سنوات",
        subjects: ["PLC/DCS", "أنظمة SCADA", "التحكم الآلي", "IIoT (إنترنت الأشياء الصناعي)"],
        careerPaths: ["مهندس أتمتة", "مهندس سيطرة ونظم", "مهندس صيانة ذكية"],
        averageSalary: "2,000,000 - 5,500,000 دينار عراقي",
        jobMarket: "مطلوب بشدة في القطاع النفطي والصناعي",
        universities: ["الجامعة التكنولوجية", "جامعة البصرة - هندسة النفط"],
        interests: ["الآلات", "الإلكترونيات", "البرمجة الصناعية"],
        skills: ["حل المشاكل التقنية", "الدقة", "العمل الميداني"]
      }
    ]
  },
  business_fintech: {
    name: "الأعمال والتقنيات المالية",
    color: "bg-emerald-600",
    icon: "💰",
    specializations: [
      {
        id: "fintech",
        name: "التقنيات المالية والامتثال الرقمي",
        description: "الجمع بين المالية والتقنية لإدارة المدفوعات الرقمية والمصارف الحديثة",
        duration: "4 سنوات",
        subjects: ["أنظمة الدفع الرقمي", "الأمن المالي", "الامتثال الرقمي", "Blockchain"],
        careerPaths: ["أخصائي FinTech", "مسؤول امتثال رقمي", "محلل مدفوعات"],
        averageSalary: "1,500,000 - 4,000,000 دينار عراقي",
        jobMarket: "مطلوب جداً مع توجه الدولة نحو الدفع الإلكتروني",
        universities: ["جامعة بغداد - الإدارة والاقتصاد", "الجامعة المستنصرية"],
        interests: ["المالية", "التكنولوجيا", "القانون"],
        skills: ["التحليل المالي", "فهم التشريعات", "التواصل"]
      },
      {
        id: "digital_marketing",
        name: "التسويق الرقمي وتحليل البيانات",
        description: "إدارة العلامات التجارية في الفضاء الرقمي بناءً على تحليل سلوك المستهلك",
        duration: "4 سنوات",
        subjects: ["تحليلات الويب", "SEO/SEM", "إدارة المحتوى", "سلوك المستهلك الرقمي"],
        careerPaths: ["مدير تسويق رقمي", "محلل بيانات تسويقية", "خبير نمو"],
        averageSalary: "1,000,000 - 3,500,000 دينار عراقي",
        jobMarket: "مطلوب جداً في القطاع الخاص والشركات الناشئة",
        universities: ["جامعة بغداد", "الجامعات الأهلية"],
        interests: ["الإبداع", "التواصل", "البيانات"],
        skills: ["الإبداع", "التحليل", "كتابة المحتوى"]
      }
    ]
  }
};

export type SpecializationCategory = keyof typeof specializations;
export type Specialization = typeof specializations[SpecializationCategory]["specializations"][0];

export const questions = [
  {
    id: 1,
    question: "ما هو المجال الذي يثير شغفك أكثر في عالم اليوم؟",
    options: [
      { text: "الرعاية الصحية وإنقاذ الأرواح", value: "medical" as SpecializationCategory, weight: 3 },
      { text: "بناء الأنظمة الرقمية وحماية البيانات", value: "tech_engineering" as SpecializationCategory, weight: 3 },
      { text: "تطوير الطاقة والبنى التحتية للمدن", value: "energy_infra" as SpecializationCategory, weight: 3 },
      { text: "إدارة الأموال والابتكار في الأعمال", value: "business_fintech" as SpecializationCategory, weight: 3 }
    ]
  },
  {
    id: 2,
    question: "أي نوع من المشاكل تفضل حله؟",
    options: [
      { text: "تشخيص الأمراض وفهم جسم الإنسان", value: "medical" as SpecializationCategory, weight: 2 },
      { text: "إصلاح الثغرات الأمنية أو كتابة الأكواد", value: "tech_engineering" as SpecializationCategory, weight: 2 },
      { text: "تصميم أنظمة طاقة مستدامة أو أتمتة مصانع", value: "energy_infra" as SpecializationCategory, weight: 2 },
      { text: "تحليل الأسواق وتطوير حلول دفع ذكية", value: "business_fintech" as SpecializationCategory, weight: 2 }
    ]
  },
  {
    id: 3,
    question: "كيف تتخيل بيئة عملك المثالية؟",
    options: [
      { text: "مستشفى متطور أو مختبر أبحاث", value: "medical" as SpecializationCategory, weight: 2 },
      { text: "مركز عمليات رقمي (SOC) أو شركة تقنية", value: "tech_engineering" as SpecializationCategory, weight: 2 },
      { text: "موقع عمل ميداني أو محطة طاقة ذكية", value: "energy_infra" as SpecializationCategory, weight: 2 },
      { text: "بنك رقمي أو شركة استشارات أعمال", value: "business_fintech" as SpecializationCategory, weight: 2 }
    ]
  },
  {
    id: 4,
    question: "ما هي المهارة التي تود تطويرها أكثر؟",
    options: [
      { text: "الدقة الطبية والتعامل مع المرضى", value: "medical" as SpecializationCategory, weight: 3 },
      { text: "البرمجة المتقدمة وحماية الأنظمة", value: "tech_engineering" as SpecializationCategory, weight: 3 },
      { text: "الهندسة الميدانية والتحكم الآلي", value: "energy_infra" as SpecializationCategory, weight: 3 },
      { text: "التحليل المالي والاستراتيجيات الرقمية", value: "business_fintech" as SpecializationCategory, weight: 3 }
    ]
  },
  {
    id: 5,
    question: "ما هو هدفك المهني الأكبر؟",
    options: [
      { text: "المساهمة في تحسين الصحة العامة", value: "medical" as SpecializationCategory, weight: 2 },
      { text: "قيادة التحول الرقمي في البلاد", value: "tech_engineering" as SpecializationCategory, weight: 2 },
      { text: "تأمين طاقة مستدامة وبناء الوطن", value: "energy_infra" as SpecializationCategory, weight: 2 },
      { text: "بناء اقتصاد رقمي قوي ومبتكر", value: "business_fintech" as SpecializationCategory, weight: 2 }
    ]
  }
];

export interface Answer {
  questionId: number;
  value: SpecializationCategory;
  weight: number;
}

export const calculateResults = (answers: Answer[]) => {
  const scores: Record<SpecializationCategory, number> = {
    medical: 0,
    tech_engineering: 0,
    energy_infra: 0,
    business_fintech: 0
  };

  answers.forEach(answer => {
    scores[answer.value] += answer.weight;
  });

  const sortedResults = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .map(([category, score]) => ({
      category: category as SpecializationCategory,
      score,
      percentage: Math.round((score / 12) * 100)
    }));

  return sortedResults;
};
