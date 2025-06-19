
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Twitter, Mail, Phone, MapPin, Download, ExternalLink, Award, Users, Code, Brain, Eye, MessageSquare, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
        skills: 'Skills',
        projects: 'Projects',
        awards: 'Awards',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'AI Developer & Data Scientist',
        subtitle: 'Transforming Data Into Real-World AI Solutions',
        description: 'Passionate about building advanced AI systems, computer vision applications, and intelligent data-driven solutions that make a real impact.',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
        downloadCV: 'Download CV'
      },
      about: {
        title: 'About Me',
        description: 'Gacha Hamadi is a highly skilled AI Developer & Data Scientist with expertise in AI development, computer vision, machine learning, natural language processing, and full-stack deployment. He has built advanced real-world AI systems involving document AI, computer vision (object detection, eye-tracking, real-time vigilance systems), web scraping, NLP-based fake news detection, LLM agents, and GPT-4 conversational systems.',
        mission: 'Beyond technical expertise, Gacha demonstrates strong leadership as an active IEEE leader and multi-award-winning AI innovator. His mission is to bridge the gap between cutting-edge AI research and practical real-world applications.',
        experience: 'Years of Experience',
        projectsCompleted: 'Projects Completed',
        awardsWon: 'Awards Won'
      },
      skills: {
        title: 'Technical Skills',
        aiml: 'AI & Machine Learning',
        cv: 'Computer Vision',
        nlp: 'NLP & Web Scraping',
        backend: 'Backend Development',
        deployment: 'Deployment & Databases',
        soft: 'Leadership & Soft Skills'
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
          fullstack: 'Full Stack'
        }
      },
      awards: {
        title: 'Awards & Community',
        leadership: 'IEEE Leadership',
        hackathons: 'Hackathon Victories'
      },
      blog: {
        title: 'Latest Insights',
        readMore: 'Read More'
      },
      contact: {
        title: 'Get In Touch',
        description: 'Ready to collaborate on your next AI project? Let\'s discuss how we can bring your ideas to life.',
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        location: 'Tunisia',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com'
      }
    },
    fr: {
      nav: {
        home: 'Accueil',
        about: 'À Propos',
        skills: 'Compétences',
        projects: 'Projets',
        awards: 'Récompenses',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Développeur IA & Data Scientist',
        subtitle: 'Transformer les Données en Solutions IA Réelles',
        description: 'Passionné par la création de systèmes IA avancés, d\'applications de vision par ordinateur et de solutions intelligentes basées sur les données.',
        viewProjects: 'Voir les Projets',
        contactMe: 'Me Contacter',
        downloadCV: 'Télécharger CV'
      },
      about: {
        title: 'À Propos de Moi',
        description: 'Gacha Hamadi est un développeur IA et data scientist hautement qualifié avec une expertise en développement IA, vision par ordinateur, apprentissage automatique, traitement du langage naturel et déploiement full-stack.',
        mission: 'Au-delà de l\'expertise technique, Gacha démontre un leadership fort en tant que leader IEEE actif et innovateur IA multi-primé.',
        experience: 'Années d\'Expérience',
        projectsCompleted: 'Projets Terminés',
        awardsWon: 'Récompenses Gagnées'
      },
      skills: {
        title: 'Compétences Techniques',
        aiml: 'IA & Apprentissage Automatique',
        cv: 'Vision par Ordinateur',
        nlp: 'NLP & Web Scraping',
        backend: 'Développement Backend',
        deployment: 'Déploiement & Bases de Données',
        soft: 'Leadership & Soft Skills'
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
          fullstack: 'Full Stack'
        }
      },
      awards: {
        title: 'Récompenses & Communauté',
        leadership: 'Leadership IEEE',
        hackathons: 'Victoires Hackathon'
      },
      blog: {
        title: 'Dernières Réflexions',
        readMore: 'Lire Plus'
      },
      contact: {
        title: 'Prenons Contact',
        description: 'Prêt à collaborer sur votre prochain projet IA ? Discutons de la façon dont nous pouvons donner vie à vos idées.',
        name: 'Votre Nom',
        email: 'Votre Email',
        message: 'Votre Message',
        send: 'Envoyer le Message',
        location: 'Tunisie',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'نبذة',
        skills: 'المهارات',
        projects: 'المشاريع',
        awards: 'الجوائز',
        blog: 'المدونة',
        contact: 'التواصل'
      },
      hero: {
        title: 'مطور ذكاء اصطناعي وعالم بيانات',
        subtitle: 'تحويل البيانات إلى حلول ذكاء اصطناعي حقيقية',
        description: 'شغوف ببناء أنظمة ذكاء اصطناعي متقدمة وتطبيقات رؤية حاسوبية وحلول ذكية مدفوعة بالبيانات.',
        viewProjects: 'عرض المشاريع',
        contactMe: 'تواصل معي',
        downloadCV: 'تحميل السيرة الذاتية'
      },
      about: {
        title: 'نبذة عني',
        description: 'غشة حمادي هو مطور ذكاء اصطناعي وعالم بيانات ماهر للغاية مع خبرة في تطوير الذكاء الاصطناعي ورؤية الحاسوب والتعلم الآلي ومعالجة اللغات الطبيعية.',
        mission: 'بالإضافة إلى الخبرة التقنية، يُظهر غشة قيادة قوية كقائد IEEE نشط ومبدع ذكاء اصطناعي متعدد الجوائز.',
        experience: 'سنوات الخبرة',
        projectsCompleted: 'المشاريع المكتملة',
        awardsWon: 'الجوائز المحرزة'
      },
      skills: {
        title: 'المهارات التقنية',
        aiml: 'الذكاء الاصطناعي والتعلم الآلي',
        cv: 'رؤية الحاسوب',
        nlp: 'معالجة اللغات الطبيعية',
        backend: 'تطوير الخادم',
        deployment: 'النشر وقواعد البيانات',
        soft: 'القيادة والمهارات الناعمة'
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
          fullstack: 'تطوير شامل'
        }
      },
      awards: {
        title: 'الجوائز والمجتمع',
        leadership: 'قيادة IEEE',
        hackathons: 'انتصارات الهاكاثون'
      },
      blog: {
        title: 'أحدث الرؤى',
        readMore: 'اقرأ المزيد'
      },
      contact: {
        title: 'تواصل معي',
        description: 'جاهز للتعاون في مشروع الذكاء الاصطناعي التالي؟ دعنا نناقش كيف يمكننا إحياء أفكارك.',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        location: 'تونس',
        phone: '+216 94 188 391',
        email_addr: 'kachahamadi999@gmail.com'
      }
    }
  };

  const t = translations[currentLang];

  const projects = [
    {
      title: 'Document Classification System',
      description: 'Advanced document classification using LayoutLMv3 with 90% accuracy on diverse document types.',
      tech: ['LayoutLMv3', 'Python', 'Computer Vision'],
      category: 'ai',
      github: 'https://github.com/gacha-hamadi/document-classification',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    },
    {
      title: 'Driver Vigilance System',
      description: 'Real-time eye tracking system for driver monitoring with 95% detection rate using MediaPipe and OpenCV.',
      tech: ['MediaPipe', 'OpenCV', 'Computer Vision'],
      category: 'cv',
      github: 'https://github.com/gacha-hamadi/driver-vigilance',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'
    },
    {
      title: 'Fake News Analysis',
      description: 'Web scraping and NLP-based fake news detection system with 95% accuracy, processing 1000+ articles.',
      tech: ['BeautifulSoup', 'NLTK', 'Scikit-learn'],
      category: 'nlp',
      github: 'https://github.com/gacha-hamadi/fake-news-analysis',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop'
    },
    {
      title: 'Information Extraction',
      description: 'Advanced document information extraction using LayoutLMv3 + Qwen32VB with 98% accuracy.',
      tech: ['LayoutLMv3', 'Qwen32VB', 'NLP'],
      category: 'ai',
      github: 'https://github.com/gacha-hamadi/information-extraction',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop'
    },
    {
      title: 'We Care AI Chatbot',
      description: 'AI chatbot platform for cancer patients using Gemini API, supporting 500+ users.',
      tech: ['Gemini API', 'Flask', 'NLP'],
      category: 'fullstack',
      github: 'https://github.com/gacha-hamadi/we-care-platform',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop'
    },
    {
      title: 'GPT-4 Conversational Agent',
      description: 'Advanced conversational AI agent using GPT-4 with fine-tuned prompt engineering.',
      tech: ['GPT-4', 'Prompt Engineering', 'FastAPI'],
      category: 'ai',
      github: '#',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop'
    }
  ];

  const skills = {
    aiml: ['YOLO', 'LayoutLMv3', 'Qwen32VB', 'GPT-4', 'Gemini API', 'Prompt Engineering'],
    cv: ['OpenCV', 'MediaPipe', 'Dlib', 'Image Processing', 'Object Detection'],
    nlp: ['NLTK', 'Scrapy', 'BeautifulSoup', 'Selenium', 'Fake News Detection'],
    backend: ['Python', 'FastAPI', 'Django', 'Flask', 'REST APIs'],
    deployment: ['PostgreSQL', 'API Design', 'Full-Stack Integration'],
    soft: ['Leadership', 'Problem-Solving', 'Innovation', 'Communication']
  };

  const awards = [
    { title: '1st Place - CISolutions Hackathon 2023', icon: Award },
    { title: '1st Place - SDC Non-Technical Challenge 2024', icon: Award },
    { title: '1st Place - Wie Heal Challenge 2024', icon: Award },
    { title: 'IEEE Member & Treasurer IEEE Sight Group', icon: Users }
  ];

  const blogPosts = [
    {
      title: 'Building Real-Time Driver Monitoring Systems with Computer Vision',
      excerpt: 'Deep dive into creating vigilance systems using MediaPipe and OpenCV for real-time applications.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
    },
    {
      title: 'Document AI with LayoutLMv3: My Experience',
      excerpt: 'Practical insights on implementing document classification and information extraction systems.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
    },
    {
      title: 'End-to-End Fake News Detection with NLP and Web Scraping',
      excerpt: 'Complete pipeline for building reliable fake news detection systems using modern NLP techniques.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop'
    },
    {
      title: 'GPT-4 Conversational Agents for Business Applications',
      excerpt: 'Best practices for implementing GPT-4 based conversational AI in real-world business scenarios.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=200&fit=crop'
    }
  ];

  const [projectFilter, setProjectFilter] = useState('all');
  const filteredProjects = projectFilter === 'all' ? projects : projects.filter(p => p.category === projectFilter);

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gacha Hamadi
            </div>
            
            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a key={key} href={`#${key}`} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {value}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full p-1">
                {['en', 'fr', 'ar'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setCurrentLang(lang)}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                      currentLang === lang ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:text-blue-500'
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
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl">
                👨‍💻
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
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3">
                {t.hero.viewProjects}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                {t.hero.contactMe}
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Download className="w-4 h-4 mr-2" />
                {t.hero.downloadCV}
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.description}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.mission}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.about.experience}</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.about.projectsCompleted}</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{t.about.awardsWon}</div>
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
              <Card key={category} className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {category === 'aiml' && <Brain className="w-6 h-6 text-blue-500 mr-3" />}
                    {category === 'cv' && <Eye className="w-6 h-6 text-purple-500 mr-3" />}
                    {category === 'nlp' && <MessageSquare className="w-6 h-6 text-green-500 mr-3" />}
                    {category === 'backend' && <Server className="w-6 h-6 text-orange-500 mr-3" />}
                    {category === 'deployment' && <Database className="w-6 h-6 text-red-500 mr-3" />}
                    {category === 'soft' && <Users className="w-6 h-6 text-indigo-500 mr-3" />}
                    <h3 className="text-lg font-semibold">{t.skills[category]}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
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
      <section id="projects" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
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
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
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
              <Card key={index} className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        {t.projects.viewCode}
                      </a>
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-500">
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
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">{t.awards.hackathons}</h3>
              <div className="space-y-4">
                {awards.slice(0, 3).map((award, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
                    <Award className="w-8 h-8 text-yellow-500 mr-4" />
                    <span className="font-medium">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center">{t.awards.leadership}</h3>
              <div className="space-y-4">
                {awards.slice(3).map((award, index) => (
                  <div key={index} className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
                    <Users className="w-8 h-8 text-blue-500 mr-4" />
                    <span className="font-medium">{award.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.blog.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <Button size="sm" variant="outline" className="w-full">
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
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
                <MapPin className="w-6 h-6 text-blue-500 mr-4" />
                <span>{t.contact.location}</span>
              </div>
              
              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
                <Phone className="w-6 h-6 text-green-500 mr-4" />
                <span>{t.contact.phone}</span>
              </div>
              
              <div className="flex items-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
                <Mail className="w-6 h-6 text-red-500 mr-4" />
                <span>{t.contact.email_addr}</span>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <Button size="lg" variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/gacha-hamadi" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/gacha-hamadi" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://twitter.com/gacha_hamadi" target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t.contact.name}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder={t.contact.email}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      placeholder={t.contact.message}
                      rows={5}
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
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
          <p>&copy; 2024 Gacha Hamadi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
