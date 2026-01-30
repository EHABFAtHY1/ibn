import {
  Building2,
  Home,
  Factory,
  Hospital,
  GraduationCap,
  Store,
  HardHat,
  Briefcase,
  Users,
  FileText,
  Shield,
  BarChart3,
  ClipboardCheck,
  Search,
  Cog,
  PenTool,
  Zap,
  Building,
  Clock,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import shrka1 from "../assests/shrka/shrka_1.png";
import shrka2 from "../assests/shrka/shrka_2.png";
import shrka3 from "../assests/shrka/shrka_3.png";
import shrka4 from "../assests/shrka/shrka_4.png";
import shrka5 from "../assests/shrka/shrka_5.png";
import shrka6 from "../assests/shrka/shrka_6.png";
import shrka7 from "../assests/shrka/shrka_7.png";
import shrka8 from "../assests/shrka/shrka_8.png";
import shrka9 from "../assests/shrka/shrka_9.png";
import shrka10 from "../assests/shrka/shrka_10.png";
import shrka11 from "../assests/shrka/shrka_11.png";
import shrka12 from "../assests/shrka/shrka_12.png";
import shrka13 from "../assests/shrka/shrka_13.png";
import shrka14 from "../assests/shrka/shrka_14.png";
import shrka15 from "../assests/shrka/shrka_15.png";
import shrka16 from "../assests/shrka/shrka_16.png";

export const projectsData = {
  residential: {
    title: "المشاريع السكنية",
    description:
      "نماذج من إنجازاتنا المتميزة في القطاع السكني بمختلف أنواعه من الفلل الفاخرة إلى المجمعات السكنية المتكاملة",
    icon: <Home className="text-primary" size={60} />,
    projects: [
      {
        id: "villa-1",
        title: "فيلا سكنية فاخرة",
        image:
          "https://images.unsplash.com/photo-1706380469118-1e5c57701a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwbW9kZXJufGVufDF8fHx8MTc2MDQ1NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080",
        location: "الرياض",
        description:
          "تصميم معماري عصري فاخر مع مساحات واسعة ومرافق متكاملة تلبي أعلى معايير الجودة والراحة",
        fullDescription:
          "فيلا سكنية فاخرة تجمع بين الفخامة والراحة، مصممة بأحدث الأساليب المعمارية العصرية. تحتوي على مساحات واسعة ومرافق متكاملة تشمل حديقة خاصة، مسبح، وأنظمة ذكية للتحكم في الإضاءة والتكييف.",
        techStack: [
          "تصميم معماري ثلاثي الأبعاد",
          "عزل حراري متطور",
          "نظام إضاءة ذكي",
          "أنظمة أمان متطورة",
          "حديقة ذكية",
          "مسبح خاص",
        ],
        status: "مكتمل",
        area: "850 م²",
        duration: "12 شهر",
        team: "25 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
        ],
      },
      {
        id: "complex-1",
        title: "مجمع سكني متكامل",
        image:
          "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA0NDUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        location: "جدة",
        description:
          "مجمع سكني شامل يضم 50 وحدة سكنية مع مرافق ترفيهية وخدمات متكاملة للسكان",
        fullDescription:
          "مجمع سكني متكامل يوفر بيئة سكنية راقية ومتكاملة، يضم 50 وحدة سكنية متنوعة مع مرافق ترفيهية شاملة تشمل نادي رياضي، حمام سباحة، حدائق، وملاعب للأطفال.",
        techStack: [
          "أنظمة أمان متطورة",
          "مساحات خضراء",
          "مواقف ذكية",
          "نادي رياضي",
          "حمام سباحة",
          "ملاعب أطفال",
        ],
        status: "قيد التنفيذ",
        area: "12,000 م²",
        duration: "24 شهر",
        team: "60 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
        ],
      },
      {
        id: "apartments-1",
        title: "شقق سكنية عصرية",
        image:
          "https://images.unsplash.com/photo-1633177977329-a010820794d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        location: "الدمام",
        description:
          "شقق سكنية بتصميم معماري مبتكر يجمع بين الأناقة والوظائفية العملية",
        fullDescription:
          "شقق سكنية عصرية تتميز بتصميم معماري مبتكر يجمع بين الأناقة والوظائفية، مع استخدام مواد بناء عالية الجودة وتشطيبات فاخرة.",
        techStack: [
          "تهوية طبيعية",
          "عزل صوتي ممتاز",
          "تشطيبات فاخرة",
          "شرفات واسعة",
          "إطلالات بانورامية",
          "مصاعد حديثة",
        ],
        status: "مكتمل",
        area: "6,500 م²",
        duration: "15 شهر",
        team: "35 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
          "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
        ],
      },
    ],
  },
  commercial: {
    title: "المشاريع التجارية",
    description:
      "مشاريع تجارية متنوعة تشمل المجمعات التجارية والمباني الإدارية بأحدث المواصفات العالمية",
    icon: <Store className="text-primary" size={60} />,
    projects: [
      {
        id: "mall-1",
        title: "مجمع تجاري متكامل",
        image:
          "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1080",
        location: "الرياض",
        description:
          "مجمع تجاري ضخم يضم محلات تجارية متنوعة ومرافق ترفيهية حديثة",
        fullDescription:
          "مجمع تجاري متكامل يوفر تجربة تسوق وترفيه فريدة، يضم أكثر من 200 محل تجاري متنوع، مطاعم فاخرة، وصالات سينما.",
        techStack: [
          "تصميم عصري",
          "أنظمة تكييف مركزي",
          "مواقف متعددة الطوابق",
          "مصاعد بانورامية",
          "نظام إطفاء متطور",
          "إضاءة LED موفرة",
        ],
        status: "مكتمل",
        area: "45,000 م²",
        duration: "30 شهر",
        team: "120 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800",
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800",
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
        ],
      },
      {
        id: "office-1",
        title: "برج إداري",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1080",
        location: "جدة",
        description: "برج إداري حديث بـ 15 طابق مجهز بأحدث التقنيات والخدمات",
        fullDescription:
          "برج إداري عصري يوفر بيئة عمل مثالية للشركات والمؤسسات، مع مساحات مكتبية مرنة ومرافق خدمية متكاملة.",
        techStack: [
          "واجهات زجاجية عاكسة",
          "أنظمة BMS ذكية",
          "مصاعد عالية السرعة",
          "قاعات اجتماعات",
          "كافتيريا",
          "أمن وحراسة 24/7",
        ],
        status: "قيد التنفيذ",
        area: "28,000 م²",
        duration: "28 شهر",
        team: "85 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
          "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800",
        ],
      },
      {
        id: "showroom-1",
        title: "معرض تجاري",
        image:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1080",
        location: "الخبر",
        description: "معرض تجاري واسع بتصميم جذاب ومرافق حديثة",
        fullDescription:
          "معرض تجاري واسع مصمم لعرض المنتجات بشكل جذاب واحترافي، مع مساحات مرنة ومرافق متكاملة.",
        techStack: [
          "إضاءة احترافية",
          "أنظمة عرض متطورة",
          "مواقف واسعة",
          "تهوية ممتازة",
          "أرضيات فاخرة",
          "أنظمة صوت متقدمة",
        ],
        status: "مكتمل",
        area: "5,500 م²",
        duration: "10 شهور",
        team: "30 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
          "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
          "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800",
        ],
      },
    ],
  },
  industrial: {
    title: "المشاريع الصناعية",
    description:
      "مشاريع صناعية متطورة تلبي احتياجات القطاع الصناعي بمختلف تخصصاته",
    icon: <Factory className="text-primary" size={60} />,
    projects: [
      {
        id: "factory-1",
        title: "مصنع متطور",
        image:
          "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?w=1080",
        location: "الجبيل",
        description:
          "منشأة صناعية حديثة مجهزة بأحدث المعدات والتقنيات الإنتاجية",
        fullDescription:
          "مصنع متطور مصمم وفق أحدث المعايير الصناعية العالمية، يوفر بيئة إنتاجية فعالة وآمنة.",
        techStack: [
          "أنظمة تبريد صناعية",
          "رافعات ثقيلة",
          "أمان متقدم",
          "مساحات تخزين واسعة",
          "أنظمة معالجة",
          "كفاءة طاقة عالية",
        ],
        status: "مكتمل",
        area: "15,000 م²",
        duration: "20 شهر",
        team: "70 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
        ],
      },
      {
        id: "warehouse-1",
        title: "مستودعات لوجستية",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1080",
        location: "الدمام",
        description: "مستودعات حديثة للتخزين واللوجستيات بمواصفات عالمية",
        fullDescription:
          "مستودعات لوجستية متطورة مصممة لتوفير حلول تخزين فعالة ومرنة للشركات والمؤسسات.",
        techStack: [
          "أرفف ذكية",
          "أنظمة جرد آلي",
          "تحكم بدرجة الحرارة",
          "أمن محكم",
          "أرضيات صناعية",
          "إضاءة موفرة",
        ],
        status: "قيد التنفيذ",
        area: "22,000 م²",
        duration: "16 شهر",
        team: "55 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
          "https://images.unsplash.com/photo-1586528116022-619b0f8d7a5a?w=800",
          "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=800",
        ],
      },
    ],
  },
  medical: {
    title: "المشاريع الطبية",
    description:
      "مشاريع طبية متخصصة تشمل المستشفيات والمراكز الصحية بأعلى المعايير الطبية",
    icon: <Hospital className="text-primary" size={60} />,
    projects: [
      {
        id: "hospital-1",
        title: "مستشفى متخصص",
        image:
          "https://images.unsplash.com/photo-1678803262971-329b90abaa51?w=1080",
        location: "الرياض",
        description: "مرافق طبية حديثة مجهزة بأحدث التقنيات والمعدات الطبية",
        fullDescription:
          "مستشفى متخصص مجهز بأحدث الأجهزة والمعدات الطبية، يوفر بيئة علاجية متطورة وآمنة للمرضى.",
        techStack: [
          "أنظمة تهوية طبية",
          "غرف عمليات معقمة",
          "أنظمة طوارئ",
          "معدات تشخيص متقدمة",
          "عناية مركزة",
          "صيدلية مركزية",
        ],
        status: "مكتمل",
        area: "18,000 م²",
        duration: "30 شهر",
        team: "90 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800",
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
        ],
      },
      {
        id: "clinic-1",
        title: "مركز طبي تخصصي",
        image:
          "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1080",
        location: "جدة",
        description: "مركز طبي حديث يضم عيادات متخصصة ومختبرات متقدمة",
        fullDescription:
          "مركز طبي تخصصي يوفر خدمات طبية متكاملة في تخصصات متعددة، مع مختبرات حديثة ومعدات تشخيصية متطورة.",
        techStack: [
          "عيادات مجهزة",
          "مختبرات طبية",
          "أشعة رقمية",
          "نظام حجز إلكتروني",
          "صيدلية",
          "انتظار مريح",
        ],
        status: "مكتمل",
        area: "4,500 م²",
        duration: "12 شهر",
        team: "40 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800",
          "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800",
          "https://images.unsplash.com/photo-1629909615371-0f1e2f0c97a3?w=800",
        ],
      },
    ],
  },
  educational: {
    title: "المشاريع التعليمية",
    description:
      "مشاريع تعليمية حديثة توفر بيئة تعليمية محفزة ومجهزة بأحدث التقنيات",
    icon: <GraduationCap className="text-primary" size={60} />,
    projects: [
      {
        id: "school-1",
        title: "مجمع تعليمي",
        image:
          "https://images.unsplash.com/photo-1704040686324-e0552fbc9167?w=1080",
        location: "الرياض",
        description: "بيئة تعليمية متطورة مصممة لتحفيز الإبداع والتعلم الفعال",
        fullDescription:
          "مجمع تعليمي متكامل يوفر بيئة تعليمية محفزة ومجهزة بأحدث الوسائل والتقنيات التعليمية الحديثة.",
        techStack: [
          "فصول ذكية",
          "مختبرات حديثة",
          "مكتبة رقمية",
          "قاعات متعددة الوسائط",
          "ملاعب رياضية",
          "مقصف صحي",
        ],
        status: "مكتمل",
        area: "12,000 م²",
        duration: "18 شهر",
        team: "65 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
        ],
      },
      {
        id: "university-1",
        title: "كلية جامعية",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?w=1080",
        location: "الدمام",
        description: "مبنى جامعي حديث مجهز بمرافق أكاديمية وبحثية متقدمة",
        fullDescription:
          "كلية جامعية حديثة توفر بيئة أكاديمية متطورة للطلاب والباحثين، مع مرافق بحثية ومختبرات متخصصة.",
        techStack: [
          "قاعات محاضرات كبيرة",
          "مختبرات أبحاث",
          "مكتبة ضخمة",
          "مراكز دراسية",
          "كافتيريا طلابية",
          "مواقف واسعة",
        ],
        status: "قيد التنفيذ",
        area: "25,000 م²",
        duration: "36 شهر",
        team: "100 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
        ],
      },
    ],
  },
  mixed: {
    title: "المشاريع المتعددة الاستخدامات",
    description:
      "مشاريع متنوعة تجمع بين الاستخدامات السكنية والتجارية والإدارية",
    icon: <Building2 className="text-primary" size={60} />,
    projects: [
      {
        id: "mixed-1",
        title: "برج متعدد الاستخدامات",
        image:
          "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1080",
        location: "الرياض",
        description:
          "برج حديث يجمع بين الوحدات السكنية والمكاتب الإدارية والمحلات التجارية",
        fullDescription:
          "برج متعدد الاستخدامات يوفر بيئة متكاملة للسكن والعمل والتسوق، مع مرافق وخدمات شاملة.",
        techStack: [
          "تصميم معماري فريد",
          "مصاعد سريعة",
          "أمن متطور",
          "مواقف متعددة",
          "حدائق معلقة",
          "مركز لياقة",
        ],
        status: "مكتمل",
        area: "35,000 م²",
        duration: "32 شهر",
        team: "110 عضو",
        gallery: [
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
          "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800",
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
        ],
      },
    ],
  },
};

export const projectCategories = [
  {
    id: "residential",
    title: "المشاريع السكنية",
    description: "فلل فاخرة ومجمعات سكنية متكاملة بأعلى معايير الجودة",
    icon: <Home size={80} />,
    color: "from-[#c5a572] to-[#a88b4d]",
    count: "150+",
  },
  {
    id: "commercial",
    title: "المشاريع التجارية",
    description: "مجمعات ومباني تجارية حديثة ومتطورة",
    icon: <Store size={80} />,
    color: "from-[#d4af37] to-[#c5a572]",
    count: "85+",
  },
  {
    id: "industrial",
    title: "المشاريع الصناعية",
    description: "منشآت صناعية ومستودعات بأحدث التقنيات",
    icon: <Factory size={80} />,
    color: "from-[#b8954d] to-[#a88b4d]",
    count: "45+",
  },
  {
    id: "medical",
    title: "المشاريع الطبية",
    description: "مستشفيات ومراكز طبية متخصصة",
    icon: <Hospital size={80} />,
    color: "from-[#c5a572] to-[#b8954d]",
    count: "30+",
  },
  {
    id: "educational",
    title: "المشاريع التعليمية",
    description: "مدارس وجامعات ومراكز تعليمية حديثة",
    icon: <GraduationCap size={80} />,
    color: "from-[#d4af37] to-[#c5a572]",
    count: "60+",
  },
  {
    id: "mixed",
    title: "المشاريع المتعددة",
    description: "مشاريع متنوعة تجمع استخدامات متعددة",
    icon: <Building2 size={80} />,
    color: "from-[#c5a572] to-[#a88b4d]",
    count: "25+",
  },
];

export const partners = [
  {
    logo: shrka1,
  },
  {
    logo: shrka2,
  },
  {
    logo: shrka3,
  },
  {
    logo: shrka4,
  },
  {
    logo: shrka5,
  },
  {
    logo: shrka6,
  },
  {
    logo: shrka7,
  },
  {
    logo: shrka8,
  },
  {
    logo: shrka9,
  },
  {
    logo: shrka10,
  },
  {
    logo: shrka11,
  },
  {
    logo: shrka12,
  },
  {
    logo: shrka13,
  },
  {
    logo: shrka14,
  },
  {
    logo: shrka15,
  },
  {
    logo: shrka16,
  },
];

export const departments = [
  {
    id: "hr",
    title: "إدارة الموارد البشرية",
    icon: <Users className="text-primary" size={28} />,
    subDepartments: [
      {
        id: "hr-recruitment",
        title: "قسم التوظيف",
        icon: <Users className="text-primary" size={20} />,
        sections: ["التوظيف المباشر", "التدريب والتطوير", "إدارة المواهب"],
      },
      {
        id: "hr-admin",
        title: "قسم الشؤون الإدارية",
        icon: <Users className="text-primary" size={20} />,
        sections: ["الرواتب والمزايا", "الحضور والانصراف", "الملفات الإدارية"],
      },
      {
        id: "hr-relations",
        title: "قسم علاقات الموظفين",
        icon: <Users className="text-primary" size={20} />,
        sections: [
          "الشكاوى والمقترحات",
          "الأنشطة الاجتماعية",
          "التواصل الداخلي",
        ],
      },
    ],
  },
  {
    id: "finance",
    title: "الإدارة المالية",
    icon: <Briefcase className="text-primary" size={28} />,
    subDepartments: [
      {
        id: "finance-accounting",
        title: "قسم المحاسبة",
        icon: <Briefcase className="text-primary" size={20} />,
        sections: ["المحاسبة العامة", "التقارير المالية", "المراجعة الداخلية"],
      },
      {
        id: "finance-treasury",
        title: "قسم الخزينة",
        icon: <Briefcase className="text-primary" size={20} />,
        sections: ["إدارة النقدية", "التحصيل والمدفوعات", "البنوك والتسويات"],
      },
      {
        id: "finance-budgeting",
        title: "قسم الموازنة والتخطيط",
        icon: <Briefcase className="text-primary" size={20} />,
        sections: ["إعداد الموازنة", "التخطيط المالي", "تحليل التكاليف"],
      },
    ],
  },
  {
    id: "projects",
    title: "إدارة المشاريع",
    icon: <HardHat className="text-primary" size={28} />,
    subDepartments: [
      {
        id: "projects-planning",
        title: "قسم التخطيط والجدولة",
        icon: <HardHat className="text-primary" size={20} />,
        sections: ["تخطيط المشاريع", "الجدولة الزمنية", "متابعة التنفيذ"],
      },
      {
        id: "projects-execution",
        title: "قسم التنفيذ الإنشائي",
        icon: <HardHat className="text-primary" size={20} />,
        sections: ["الإشراف الميداني", "ضبط الجودة", "السلامة المهنية"],
      },
      {
        id: "projects-technical",
        title: "قسم الدعم الفني",
        icon: <HardHat className="text-primary" size={20} />,
        sections: ["الدراسات الفنية", "المواصفات", "الاستشارات"],
      },
    ],
  },
];

export const standards = [
  {
    icon: Search,
    title: "فحص المواد",
    description:
      "فحص شامل ودقيق لجميع المواد المستخدمة للتأكد من مطابقتها للمواصفات العالمية",
  },
  {
    icon: ClipboardCheck,
    title: "مراجعة الأعمال",
    description: "مراجعة دورية ومستمرة لجميع مراحل التنفيذ من قبل فريق متخصص",
  },
  {
    icon: BarChart3,
    title: "اختبارات الأداء",
    description: "إجراء اختبارات دقيقة ومتقدمة لضمان أداء المشروع بكفاءة عالية",
  },
  {
    icon: Shield,
    title: "معايير السلامة",
    description: "تطبيق أعلى معايير السلامة المهنية لحماية العاملين والممتلكات",
  },
  {
    icon: FileText,
    title: "التوثيق الشامل",
    description: "توثيق كامل ومفصل لجميع مراحل المشروع والاختبارات المنجزة",
  },
];

export const services = [
  {
    icon: Building,
    title: "الأعمال الإنشائية",
    description:
      "تصميم وتنفيذ الأعمال الإنشائية بأعلى معايير الجودة والسلامة مع استخدام أحدث التقنيات",
  },
  {
    icon: PenTool,
    title: "الأعمال المعمارية",
    description:
      "تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفية وتلبي احتياجات العملاء",
  },
  {
    icon: Zap,
    title: "الأعمال الكهربائية",
    description:
      "أنظمة كهربائية حديثة ومتطورة تلبي جميع الاحتياجات بكفاءة عالية",
  },
  {
    icon: Cog,
    title: "الأعمال الميكانيكية",
    description:
      "أنظمة ميكانيكية متقدمة للتكييف والتهوية والسباكة بأحدث المواصفات",
  },
];

// إحداثيات الرياض كمثال
export const address = {
  // طريق الملك عبدالله، حي الصفراء, Al Safra', Buraydah 52382, Saudi Arabia

  street: "طريق الملك عبدالله",
  city: "Al Safra",
  country: "المملكة العربية السعودية",
  coordinates: {
    lat: 24.7136,
    lng: 46.6753,
  },
};

export const quickContacts = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: "+966 53 500 3675",
    link: "tel:+966535003675",
  },
  {
    icon: Mail,
    label: "راسلنا",
    value: "info@ibnalshekh.net",
    link: "mailto:info@ibnalshekh.net",
  },
  {
    icon: Clock,
    label: "ساعات العمل",
    value: "السبت - الخميس: ٨ص - ٥م",
    link: null,
  },
];

export const socialLinks = [
  {
    icon: Facebook,
    label: "فيسبوك",
    url: "https://www.facebook.com/iibnalshaikh",
    color: "hover:bg-blue-600",
  },
  {
    icon: Twitter,
    label: "تويتر",
    url: "https://www.twitter.com/iibnalshaikh",
    color: "hover:bg-sky-500",
  },
  {
    icon: Linkedin,
    label: "لينكدإن",
    url: "https://www.linkedin.com/iibnalshaikh",
    color: "hover:bg-blue-700",
  },
  {
    icon: Instagram,
    label: "إنستغرام",
    url: "https://www.instagram.com/iibnalshaikh",
    color: "hover:bg-pink-600",
  },
];

export const workingProjects = [
  {
    id: "residential",
    title: "فيلا سكنية فاخرة",
    image:
      "https://images.unsplash.com/photo-1706380469118-1e5c57701a05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwbW9kZXJufGVufDF8fHx8MTc2MDQ1NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    location: "الرياض",
    description:
      "تصميم معماري عصري فاخر مع مساحات واسعة ومرافق متكاملة تلبي أعلى معايير الجودة والراحة",
    fullDescription:
      "فيلا سكنية فاخرة تجمع بين الفخامة والراحة، مصممة بأحدث الأساليب المعمارية العصرية. تحتوي على مساحات واسعة ومرافق متكاملة تشمل حديقة خاصة، مسبح، وأنظمة ذكية للتحكم في الإضاءة والتكييف.",
    techStack: [
      "تصميم معماري ثلاثي الأبعاد",
      "عزل حراري متطور",
      "نظام إضاءة ذكي",
      "أنظمة أمان متطورة",
      "حديقة ذكية",
      "مسبح خاص",
    ],
    status: "قيد التنفيذ",
    area: "850 م²",
    duration: "12 شهر",
    team: "25 عضو",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
  },
  {
    id: "residential",
    title: "مجمع سكني متكامل",
    image:
      "https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjA0NDUwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "جدة",
    description:
      "مجمع سكني شامل يضم 50 وحدة سكنية مع مرافق ترفيهية وخدمات متكاملة للسكان",
    fullDescription:
      "مجمع سكني متكامل يوفر بيئة سكنية راقية ومتكاملة، يضم 50 وحدة سكنية متنوعة مع مرافق ترفيهية شاملة تشمل نادي رياضي، حمام سباحة، حدائق، وملاعب للأطفال.",
    techStack: [
      "أنظمة أمان متطورة",
      "مساحات خضراء",
      "مواقف ذكية",
      "نادي رياضي",
      "حمام سباحة",
      "ملاعب أطفال",
    ],
    status: "قيد التنفيذ",
    area: "12,000 م²",
    duration: "24 شهر",
    team: "60 عضو",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    ],
  },
  {
    id: "residential",
    title: "شقق سكنية عصرية",
    image:
      "https://images.unsplash.com/photo-1633177977329-a010820794d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNTI4MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    location: "الدمام",
    description:
      "شقق سكنية بتصميم معماري مبتكر يجمع بين الأناقة والوظائفية العملية",
    fullDescription:
      "شقق سكنية عصرية تتميز بتصميم معماري مبتكر يجمع بين الأناقة والوظائفية، مع استخدام مواد بناء عالية الجودة وتشطيبات فاخرة.",
    techStack: [
      "تهوية طبيعية",
      "عزل صوتي ممتاز",
      "تشطيبات فاخرة",
      "شرفات واسعة",
      "إطلالات بانورامية",
      "مصاعد حديثة",
    ],
    status: "قيد التنفيذ",
    area: "6,500 م²",
    duration: "15 شهر",
    team: "35 عضو",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    ],
  },
];
