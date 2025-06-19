import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  Users,
  Code,
  Brain,
  Eye,
  MessageSquare,
  Database,
  Server,
  GraduationCap,
  Building,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm, ValidationError } from '@formspree/react';

const Portfolio = () => {
  const [state, handleSubmit] = useForm('xovwnvww');
  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'ar'>('en');
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        awards: 'Awards',
        blog: 'Blog',
        contact: 'Contact',
      },
      hero: {
        title: 'AI Developer & Data Scientist',
        subtitle: 'Transforming Data Into Real-World AI Solutions',
        description:
          'Passionate about building advanced AI systems, computer vision applications, and intelligent data-driven solutions that make a real impact.',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
        downloadCV: 'Download CV',
      },
      about: {
        title: 'About Me',
        description:
          'Gacha Hamadi is a highly skilled AI Developer & Data Scientist with extensive expertise in AI development, computer vision, NLP, and backend deployment. He has delivered real-world AI projects in document AI, computer vision pipelines, GPT-4 conversational agents, NLP-powered fake news detection, web scraping, and full-stack systems.',
        mission:
          'Gacha is an active community leader in IEEE, has won multiple national AI hackathons, and demonstrates outstanding full-lifecycle AI deployment capabilities combining strong technical, leadership, and communication skills.',
      },
      education: {
        title: 'Education',
        degrees: {
          master: {
            title: 'Professional Master in Data Science',
            period: '2022-2024',
            institution:
              'Higher Institute of Computer Science and Mathematics, Monastir',
            description:
              'Developed advanced expertise in machine learning, AI development, data analytics, and mathematical modeling. Completed capstone projects on real-world AI solutions, including computer vision, LLMs, and NLP.',
          },
          bachelor: {
            title: 'Bachelor in Mathematics and Applications',
            period: '2019-2022',
            institution:
              'Higher Institute of Computer Science and Mathematics, Monastir',
            description:
              'Built strong mathematical foundation in linear algebra, statistics, probability, and computational modeling that supports advanced AI solution design.',
          },
          highschool: {
            title: 'High School Diploma - Technical Science',
            period: '2018-2019',
            institution: 'Korba High School',
            description:
              'Focused on advanced sciences, analytical thinking, and technical problem-solving.',
          },
        },
      },
      skills: {
        title: 'Technical Skills',
        aiml: 'AI & Machine Learning',
        cv: 'Computer Vision',
        nlp: 'NLP & Web Scraping',
        backend: 'Backend Development',
        deployment: 'Deployment & Databases',
        soft: 'Leadership & Soft Skills',
      },
      experience: {
        title: 'Professional Experience',
        swconsulting: {
          title: 'AI Developer',
          company: 'SW Consulting',
          period: 'Nov 2024 – Present',
          achievements: [
            'Document classification using LayoutLMv3 (90% accuracy)',
            'Information extraction from documents (98% extraction accuracy)',
            'Object detection & segmentation using YOLO models',
            'Developed GPT-4 based AI conversational agent',
          ],
        },
        smartlab: {
          title: 'Master Internship',
          company: 'SMARTLAB FMM',
          period: 'Mar 2024 – Sep 2024',
          achievements: [
            'Real-time driver vigilance system (95% detection rate)',
            'MediaPipe, OpenCV, Dlib integration',
            'FastAPI, Django, PostgreSQL full-stack backend',
          ],
        },
        itgate: {
          title: 'Summer Internship',
          company: 'ItGateGroup',
          period: 'Jul 2023 – Aug 2023',
          achievements: [
            'Fake news detection using web scraping & NLP',
            'BeautifulSoup, Selenium, Scrapy implementation',
            'Sklearn, NLTK, Flask development',
          ],
        },
      },
      projects: {
        title: 'Featured Projects',
        viewCode: 'View Code',
        liveDemo: 'Live Demo',
        filter: {
          all: 'All Projects',
          ai: 'AI/ML',
          cv: 'Computer Vision',
          nlp: 'NLP',
          fullstack: 'Full Stack',
        },
      },
      awards: {
        title: 'Awards & Community',
        leadership: 'IEEE Leadership',
        hackathons: 'Hackathon Victories',
        details: 'View Details',
      },
      blog: {
        title: 'Latest Insights',
        readMore: 'Read More',
      },
      contact: {
        title: 'Get In Touch',
        description:
          "Ready to collaborate on your next AI project? Let's discuss how we can bring your ideas to life.",
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        location: 'Tunisia',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com',
      },
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        education: 'Formation',
        skills: 'Compétences',
        experience: 'Expérience',
        projects: 'Projets',
        awards: 'Récompenses',
        blog: 'Blog',
        contact: 'Contact',
      },
      hero: {
        title: 'Développeur IA & Data Scientist',
        subtitle: 'Transformer les Données en Solutions IA Réelles',
        description:
          "Passionné par la création de systèmes IA avancés, d'applications de vision par ordinateur et de solutions intelligentes basées sur les données.",
        viewProjects: 'Voir les Projets',
        contactMe: 'Me Contacter',
        downloadCV: 'Télécharger CV',
      },
      about: {
        title: 'À Propos de Moi',
        description:
          'Gacha Hamadi est un développeur IA et data scientist hautement qualifié avec une expertise étendue en développement IA, vision par ordinateur, NLP et déploiement backend.',
        mission:
          "Gacha est un leader communautaire actif à IEEE, a remporté plusieurs hackathons nationaux d'IA, et démontre des capacités exceptionnelles de déploiement IA.",
      },
      education: {
        title: 'Formation',
        degrees: {
          master: {
            title: 'Master Professionnel en Data Science',
            period: '2022-2024',
            institution:
              "Institut Supérieur d'Informatique et de Mathématiques, Monastir",
            description:
              "Développement d'une expertise avancée en apprentissage automatique, développement IA, analyse de données et modélisation mathématique.",
          },
          bachelor: {
            title: 'Licence en Mathématiques et Applications',
            period: '2019-2022',
            institution:
              "Institut Supérieur d'Informatique et de Mathématiques, Monastir",
            description:
              "Construction d'une base mathématique solide en algèbre linéaire, statistiques, probabilités et modélisation computationnelle.",
          },
          highschool: {
            title: 'Baccalauréat - Sciences Techniques',
            period: '2018-2019',
            institution: 'Lycée de Korba',
            description:
              'Concentration sur les sciences avancées, la pensée analytique et la résolution de problèmes techniques.',
          },
        },
      },
      skills: {
        title: 'Compétences Techniques',
        aiml: 'IA & Apprentissage Automatique',
        cv: 'Vision par Ordinateur',
        nlp: 'NLP & Web Scraping',
        backend: 'Développement Backend',
        deployment: 'Déploiement & Bases de Données',
        soft: 'Leadership & Soft Skills',
      },
      experience: {
        title: 'Expérience Professionnelle',
        swconsulting: {
          title: 'Développeur IA',
          company: 'SW Consulting',
          period: 'Nov 2024 – Présent',
          achievements: [
            'Classification de documents avec LayoutLMv3 (90% précision)',
            "Extraction d'informations de documents (98% précision)",
            "Détection et segmentation d'objets avec YOLO",
            'Agent conversationnel GPT-4 développé',
          ],
        },
        smartlab: {
          title: 'Stage de Master',
          company: 'SMARTLAB FMM',
          period: 'Mar 2024 – Sep 2024',
          achievements: [
            'Système de vigilance conducteur temps réel (95% détection)',
            'Intégration MediaPipe, OpenCV, Dlib',
            'Backend full-stack FastAPI, Django, PostgreSQL',
          ],
        },
        itgate: {
          title: "Stage d'Été",
          company: 'ItGateGroup',
          period: 'Jul 2023 – Aoû 2023',
          achievements: [
            'Détection fake news avec web scraping & NLP',
            'Implémentation BeautifulSoup, Selenium, Scrapy',
            'Développement Sklearn, NLTK, Flask',
          ],
        },
      },
      projects: {
        title: 'Projets Phares',
        viewCode: 'Voir le Code',
        liveDemo: 'Démo Live',
        filter: {
          all: 'Tous les Projets',
          ai: 'IA/ML',
          cv: 'Vision par Ordinateur',
          nlp: 'NLP',
          fullstack: 'Full Stack',
        },
      },
      awards: {
        title: 'Récompenses & Communauté',
        leadership: 'Leadership IEEE',
        hackathons: 'Victoires Hackathon',
        details: 'Voir Détails',
      },
      blog: {
        title: 'Dernières Réflexions',
        readMore: 'Lire Plus',
      },
      contact: {
        title: 'Prenons Contact',
        description:
          'Prêt à collaborer sur votre prochain projet IA ? Discutons de la façon dont nous pouvons donner vie à vos idées.',
        name: 'Votre Nom',
        email: 'Votre Email',
        subject: 'Sujet',
        message: 'Votre Message',
        send: 'Envoyer le Message',
        success: 'Message envoyé avec succès!',
        location: 'Tunisie',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com',
      },
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة',
        education: 'التعليم',
        skills: 'المهارات',
        experience: 'الخبرة',
        projects: 'المشاريع',
        awards: 'الجوائز',
        blog: 'المدونة',
        contact: 'التواصل',
      },
      hero: {
        title: 'مطور ذكاء اصطناعي وعالم بيانات',
        subtitle: 'تحويل البيانات إلى حلول ذكاء اصطناعي حقيقية',
        description:
          'شغوف ببناء أنظمة ذكاء اصطناعي متقدمة وتطبيقات رؤية حاسوبية وحلول ذكية مدفوعة بالبيانات.',
        viewProjects: 'عرض المشاريع',
        contactMe: 'تواصل معي',
        downloadCV: 'تحميل السيرة الذاتية',
      },
      about: {
        title: 'نبذة عني',
        description:
          'غشة حمادي هو مطور ذكاء اصطناعي وعالم بيانات ماهر للغاية مع خبرة واسعة في تطوير الذكاء الاصطناعي ورؤية الحاسوب.',
        mission:
          'غشة قائد مجتمعي نشط في IEEE، فاز بعدة هاكاثونات وطنية للذكاء الاصطناعي، ويُظهر قدرات استثنائية في نشر الذكاء الاصطناعي.',
      },
      education: {
        title: 'التعليم',
        degrees: {
          master: {
            title: 'ماجستير مهني في علم البيانات',
            period: '2022-2024',
            institution: 'المعهد العالي للرياضيات والحاسوب، المنستير',
            description:
              'تطوير خبرة متقدمة في التعلم الآلي وتطوير الذكاء الاصطناعي وتحليل البيانات والنمذجة الرياضية.',
          },
          bachelor: {
            title: 'بكالوريوس في الرياضيات والتطبيقات',
            period: '2019-2022',
            institution: 'المعهد العالي للرياضيات والحاسوب، المنستير',
            description:
              'بناء أساس رياضي قوي في الجبر الخطي والإحصاء والاحتمالات والنمذجة الحاسوبية.',
          },
          highschool: {
            title: 'شهادة الثانوية العامة - علوم تقنية',
            period: '2018-2019',
            institution: 'ثانوية قربة',
            description:
              'التركيز على العلوم المتقدمة والتفكير التحليلي وحل المشكلات التقنية.',
          },
        },
      },
      skills: {
        title: 'المهارات التقنية',
        aiml: 'الذكاء الاصطناعي والتعلم الآلي',
        cv: 'رؤية الحاسوب',
        nlp: 'معالجة اللغات الطبيعية',
        backend: 'تطوير الخادم',
        deployment: 'النشر وقواعد البيانات',
        soft: 'القيادة والمهارات الناعمة',
      },
      experience: {
        title: 'الخبرة المهنية',
        swconsulting: {
          title: 'مطور ذكاء اصطناعي',
          company: 'SW Consulting',
          period: 'نوفمبر 2024 – الحاضر',
          achievements: [
            'تصنيف المستندات باستخدام LayoutLMv3 (90% دقة)',
            'استخراج المعلومات من المستندات (98% دقة)',
            'كشف وتقسيم الكائنات باستخدام YOLO',
            'تطوير وكيل محادثة GPT-4',
          ],
        },
        smartlab: {
          title: 'تدريب ماجستير',
          company: 'SMARTLAB FMM',
          period: 'مارس 2024 – سبتمبر 2024',
          achievements: [
            'نظام يقظة السائق في الوقت الفعلي (95% كشف)',
            'تكامل MediaPipe, OpenCV, Dlib',
            'خادم شامل FastAPI, Django, PostgreSQL',
          ],
        },
        itgate: {
          title: 'تدريب صيفي',
          company: 'ItGateGroup',
          period: 'يوليو 2023 – أغسطس 2023',
          achievements: [
            'كشف الأخبار المزيفة باستخدام كشط الويب و NLP',
            'تنفيذ BeautifulSoup, Selenium, Scrapy',
            'تطوير Sklearn, NLTK, Flask',
          ],
        },
      },
      projects: {
        title: 'المشاريع المميزة',
        viewCode: 'عرض الكود',
        liveDemo: 'عرض مباشر',
        filter: {
          all: 'جميع المشاريع',
          ai: 'ذكاء اصطناعي',
          cv: 'رؤية حاسوب',
          nlp: 'معالجة لغات',
          fullstack: 'تطوير شامل',
        },
      },
      awards: {
        title: 'الجوائز والمجتمع',
        leadership: 'قيادة IEEE',
        hackathons: 'انتصارات الهاكاثون',
        details: 'عرض التفاصيل',
      },
      blog: {
        title: 'أحدث الرؤى',
        readMore: 'اقرأ المزيد',
      },
      contact: {
        title: 'تواصل معي',
        description:
          'جاهز للتعاون في مشروع الذكاء الاصطناعي التالي؟ دعنا نناقش كيف يمكننا إحياء أفكارك.',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        subject: 'الموضوع',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        success: 'تم إرسال الرسالة بنجاح!',
        location: 'تونس',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com',
      },
    },
  };

  const t = translations[currentLang];

  const projects = [
    {
      title: 'Document Classification System',
      description:
        'Advanced document classification using LayoutLMv3 with 90% accuracy on diverse document types.',
      tech: ['LayoutLMv3', 'Python', 'Computer Vision'],
      category: 'ai',
      github: 'https://github.com/HamadiKacha/document-classification',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    },
    {
      title: 'Driver Vigilance System',
      description:
        'Real-time eye tracking system for driver monitoring with 95% detection rate using MediaPipe and OpenCV.',
      tech: ['MediaPipe', 'OpenCV', 'Computer Vision'],
      category: 'cv',
      github: 'https://github.com/HamadiKacha/driver-vigilance',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    },
    {
      title: 'Fake News Analysis',
      description:
        'Web scraping and NLP-based fake news detection system with 95% accuracy, processing 1000+ articles.',
      tech: ['BeautifulSoup', 'NLTK', 'Scikit-learn'],
      category: 'nlp',
      github: 'https://github.com/HamadiKacha/fake-news-analysis',
      image:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
    },
    {
      title: 'Information Extraction',
      description:
        'Advanced document information extraction using LayoutLMv3 + Qwen32VB with 98% accuracy.',
      tech: ['LayoutLMv3', 'Qwen32VB', 'NLP'],
      category: 'ai',
      github: 'https://github.com/HamadiKacha/information-extraction',
      image:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop',
    },
    {
      title: 'We Care AI Chatbot',
      description:
        'AI chatbot platform for cancer patients using Gemini API, supporting 500+ users.',
      tech: ['Gemini API', 'Flask', 'NLP'],
      category: 'fullstack',
      github: 'https://github.com/HamadiKacha/we-care-platform',
      image:
        'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop',
    },
    {
      title: 'GPT-4 Conversational Agent',
      description:
        'Advanced conversational AI agent using GPT-4 with fine-tuned prompt engineering.',
      tech: ['GPT-4', 'Prompt Engineering', 'FastAPI'],
      category: 'ai',
      github: '#',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    },
  ];

  const skills = {
    aiml: [
      'YOLO',
      'LayoutLMv3',
      'Qwen32VB',
      'GPT-4',
      'Gemini API',
      'Prompt Engineering',
    ],
    cv: ['OpenCV', 'MediaPipe', 'Dlib', 'Image Processing', 'Object Detection'],
    nlp: ['NLTK', 'Scrapy', 'BeautifulSoup', 'Selenium', 'Fake News Detection'],
    backend: ['Python', 'FastAPI', 'Django', 'Flask', 'REST APIs'],
    deployment: ['PostgreSQL', 'API Design', 'Full-Stack Integration'],
    soft: ['Leadership', 'Problem-Solving', 'Innovation', 'Communication'],
  };

  const awards = [
    {
      title: '1st Place - CISolutions Hackathon 2023',
      icon: Award,
      description: 'Won first place in national AI hackathon competition',
    },
    {
      title: '1st Place - SDC Non-Technical Challenge 2024',
      icon: Award,
      description: 'Secured top position in innovation challenge',
    },
    {
      title: '1st Place - Wie Heal Challenge 2024',
      icon: Award,
      description: 'Led winning team in healthcare AI challenge',
    },
    {
      title: 'IEEE Member & Treasurer IEEE Sight Group',
      icon: Users,
      description: 'Active leadership role in IEEE community (2022-2024)',
    },
  ];

  const blogPosts = [
    {
      title:
        'Building Real-Time Driver Monitoring Systems with Computer Vision',
      excerpt:
        'Deep dive into creating vigilance systems using MediaPipe and OpenCV for real-time applications.',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop',
    },
    {
      title: 'Document AI with LayoutLMv3: My Experience',
      excerpt:
        'Practical insights on implementing document classification and information extraction systems.',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop',
    },
    {
      title: 'End-to-End Fake News Detection with NLP and Web Scraping',
      excerpt:
        'Complete pipeline for building reliable fake news detection systems using modern NLP techniques.',
      image:
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop',
    },
    {
      title: 'GPT-4 Conversational Agents for Business Applications',
      excerpt:
        'Best practices for implementing GPT-4 based conversational AI in real-world business scenarios.',
      image:
        'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop',
    },
  ];

  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedAward, setSelectedAward] = useState<number | null>(null);
  const filteredProjects =
    projectFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (formData.name && formData.email && formData.message) {
  //     // For now, just show success message
  //     setFormSubmitted(true);
  //     setTimeout(() => setFormSubmitted(false), 3000);

  //     // Reset form
  //     setFormData({ name: '', email: '', subject: '', message: '' });

  //     // In a real application, you would send the data to a backend API
  //     console.log('Form submitted:', formData);
  //   }
  // };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? 'dark bg-gray-900 text-white'
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      } ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gacha Hamadi
            </div> */}

            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  {value}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-1">
                {(['en', 'fr', 'ar'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                      currentLang === lang
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-md hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHOkV4A1TEuqA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687341639373?e=1755734400&v=beta&t=gPYTlYiubfvQlQBQuXCP-aPVxjYyWWQXBL7NlJyKfgs"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gacha Hamadi
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              {t.hero.title}
            </h2>

            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>

            <p className="text-lg mb-12 text-gray-500 dark:text-gray-500 max-w-4xl mx-auto">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3"
                >
                  {t.hero.viewProjects}
                </Button>
              </a>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <a href="#contact">{t.hero.contactMe}</a>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <a
                  href="cv.pdf"
                  download
                  className="flex items-center"
                  target="_blank"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.downloadCV}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.description}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.education.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-12">
                {Object.entries(t.education.degrees).map(
                  ([key, degree], index) => (
                    <div key={key} className="relative flex items-start group">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>

                      {/* Content card */}
                      <Card className="ml-8 flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                {degree.title}
                              </h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                {degree.institution}
                              </p>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-2" />
                              {degree.period}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {degree.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.experience.title}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500"></div>

              <div className="space-y-12">
                {Object.entries(t.experience)
                  .filter(([key]) => key !== 'title')
                  .map(([key, exp], index) => (
                    <div key={key} className="relative flex items-start group">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Building className="w-8 h-8 text-white" />
                      </div>

                      {/* Content card */}
                      <Card className="ml-8 flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                                {exp.title}
                              </h3>
                              <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.period}
                            </div>
                          </div>

                          <ul className="space-y-3">
                            {exp.achievements.map(
                              (
                                achievement: string,
                                achievementIndex: number,
                              ) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-start"
                                >
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-600 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </li>
                              ),
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {category === 'aiml' && (
                      <Brain className="w-6 h-6 text-blue-500 mr-3" />
                    )}
                    {category === 'cv' && (
                      <Eye className="w-6 h-6 text-purple-500 mr-3" />
                    )}
                    {category === 'nlp' && (
                      <MessageSquare className="w-6 h-6 text-green-500 mr-3" />
                    )}
                    {category === 'backend' && (
                      <Server className="w-6 h-6 text-orange-500 mr-3" />
                    )}
                    {category === 'deployment' && (
                      <Database className="w-6 h-6 text-red-500 mr-3" />
                    )}
                    {category === 'soft' && (
                      <Users className="w-6 h-6 text-indigo-500 mr-3" />
                    )}
                    <h3 className="text-lg font-semibold">
                      {t.skills[category as keyof typeof t.skills]}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {Object.entries(t.projects.filter).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setProjectFilter(key)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 ${
                    projectFilter === key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white/80 dark:bg-gray-700/80 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover:scale-105 transition-transform duration-200"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects.liveDemo}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.awards.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() =>
                  setSelectedAward(selectedAward === index ? null : index)
                }
              >
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300">
                        <award.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                          {award.title}
                        </h3>
                        <button className="text-blue-500 text-sm hover:underline mt-1">
                          {t.awards.details}
                        </button>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        selectedAward === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {selectedAward === index && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg animate-fade-in">
                      <p className="text-gray-600 dark:text-gray-300">
                        {award.description}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.blog.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full hover:scale-105 transition-transform duration-200"
                  >
                    {t.blog.readMore}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {t.contact.location}
                </span>
              </div>

              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {t.contact.phone}
                </span>
              </div>

              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">
                  {t.contact.email_addr}
                </span>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <a
                    href="https://www.linkedin.com/in/kacha-hamadi-1b84a2271/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <a
                    href="https://github.com/HamadiKacha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <a
                    href="https://twitter.com/gacha_hamadi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                {formSubmitted && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg animate-fade-in">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      <span className="text-green-700 dark:text-green-300">
                        {t.contact.success}
                      </span>
                    </div>
                  </div>
                )}

                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                    });
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="group">
                    <Input
                      type="text"
                      name="name"
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:scale-105"
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                    />
                  </div>

                  <div className="group">
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.contact.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:scale-105"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>

                  <div className="group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder={t.contact.subject}
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:scale-105"
                    />
                    <ValidationError
                      prefix="Subject"
                      field="subject"
                      errors={state.errors}
                    />
                  </div>

                  <div className="group">
                    <Textarea
                      name="message"
                      placeholder={t.contact.message}
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:scale-105 resize-none"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105 transition-all duration-200"
                  >
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Gacha Hamadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
