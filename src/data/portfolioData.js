export const portfolioData = {
  personal: {
    name: "Bilal Arshad",
    title: "UI/UX Designer | Product & Interaction Designer",
    tagline: "Passionate UI/UX Designer dedicated to crafting user-centered wireframes, interactive prototypes, and scalable design systems in Figma. Turning complex problems into intuitive, accessible, and delightful digital experiences.",
    availability: "Open to UI/UX Designer Roles, Product Design Internships & Freelance",
    location: "Islamabad, Pakistan",
    email: "bilalarshd66@gmail.com",
    phone: "(+92) 310-5789804",
    avatar: "/bilal-arshad.jpg",
    resumeUrl: "#resume",
  },

  stats: [
    { label: "Degree CGPA", value: "3.34" },
    { label: "UI/UX Projects", value: "10+" },
    { label: "Published Case Studies", value: "3+" },
    { label: "Design Experience", value: "2+ Yrs" },
  ],

  about: {
    bio: "Passionate UI/UX Designer specialized in creating human-centered digital experiences. Skilled in crafting intuitive wireframes, high-fidelity prototypes, and component-driven design systems in Figma. Dedicated to solving user problems with clarity, visual hierarchy, and seamless user journeys.",
    extendedBio: "With a strong foundation in Human-Centered Design and Software Engineering from COMSATS University Islamabad (Wah Campus), I specialize in transforming complex user requirements into clean, functional, and visually compelling digital products. My core focus lies in user empathy, design systems, interactive prototyping, and seamless design-to-development handoffs.",
    highlights: [
      {
        title: "Figma & Design Systems",
        description: "Building scalable, component-based design systems, auto-layout UI libraries, and atomic design tokens.",
        icon: "Layers"
      },
      {
        title: "User-Centered Research",
        description: "Mapping end-to-end user journeys, personas, empathy maps, and low-to-high fidelity wireframes.",
        icon: "Compass"
      },
      {
        title: "Interaction & Usability",
        description: "Designing interactive micro-interactions, clickable prototypes, and running usability assessments for peak accessibility.",
        icon: "Sparkles"
      }
    ]
  },

  skills: {
    categories: [
      {
        id: "ui-ux",
        name: "UI/UX & Design Tools",
        description: "Industry-standard platforms for interface design, wireframing, and visual assets.",
        skills: [
          { name: "Figma", level: 80, icon: "Figma", popular: true },
          { name: "Adobe XD", level: 68, icon: "Layers", popular: true },
          { name: "FigJam (Whiteboarding)", level: 70, icon: "Palette", popular: true },
          { name: "Adobe Illustrator", level: 62, icon: "Sparkles" },
          { name: "Wireframing", level: 70, icon: "Layout", popular: true },
          { name: "Interactive Prototyping", level: 68, icon: "Play", popular: true }
        ]
      },
      {
        id: "design-craft",
        name: "Design Methodologies",
        description: "Core UI/UX principles for crafting intuitive, accessible, and structured user journeys.",
        skills: [
          { name: "Design Systems & Components", level: 68, icon: "Boxes", popular: true },
          { name: "User Flows & Journey Mapping", level: 70, icon: "GitFork", popular: true },
          { name: "Visual Hierarchy & Typography", level: 67, icon: "Layout" },
          { name: "Responsive & Mobile-First Layouts", level: 70, icon: "Smartphone", popular: true },
          { name: "Accessibility & WCAG Standards", level: 63, icon: "Users" },
          { name: "Information Architecture", level: 65, icon: "Network", popular: true }
        ]
      },
      {
        id: "user-research",
        name: "User Research & Strategy",
        description: "Empathy-driven research methodologies to discover user pain points and validate concepts.",
        skills: [
          { name: "User Personas & Empathy Maps", level: 68, icon: "Users", popular: true },
          { name: "Usability Testing & Heuristics", level: 65, icon: "Zap", popular: true },
          { name: "Low & High Fidelity Wireframes", level: 70, icon: "Layout", popular: true },
          { name: "Problem Framing & UX Audits", level: 62, icon: "Workflow" },
          { name: "Competitive Benchmarking", level: 64, icon: "Sparkles" },
          { name: "User Interview Analysis", level: 60, icon: "Users" }
        ]
      },
      {
        id: "visual-interaction",
        name: "Visual & Interaction Design",
        description: "Crafting captivating aesthetic details, tokens, and fluid interactive animations.",
        skills: [
          { name: "Design Tokens & UI Variables", level: 68, icon: "Boxes", popular: true },
          { name: "Interactive Micro-Interactions", level: 66, icon: "Play", popular: true },
          { name: "Responsive Grid & Layout Systems", level: 70, icon: "Layout", popular: true },
          { name: "Component-Based UI Architecture", level: 67, icon: "Layers" },
          { name: "High-Fidelity UI Mockups", level: 70, icon: "Palette", popular: true },
          { name: "Design Handoff & Specifications", level: 65, icon: "Workflow" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "motozone-marketplace",
      title: "MotoZone — Vehicle Buying & Selling Marketplace",
      category: "Web Design",
      categories: ["Web Design", "UI/UX"],
      badge: "Behance Case Study",
      year: "2025 – 2026",
      shortDescription: "Complete web UI design in Figma featuring wireframes, high-fidelity prototypes, and a consistent component-based design system for an online vehicle marketplace.",
      fullDescription: "MotoZone is a comprehensive vehicle marketplace design concept. Crafted the entire web interface in Figma, mapped end-to-end user flows for vehicle exploration, seller onboarding, verified listings, and buyer-seller messaging to deliver a frictionless experience.",
      role: "Lead UI/UX & Product Designer",
      duration: "2025 – 2026",
      deliverables: ["Figma UI/UX Design System", "High-Fidelity Wireframes", "Interactive Figma Prototype", "User Journey Maps & Flows"],
      impact: ["Complete Component-Based UI System", "Smooth Browsing & Seller Onboarding", "Full Case Study Published on Behance"],
      accentColor: "from-blue-600 to-indigo-700",
      image: "/motozone.png",
      imagePlaceholder: {
        type: "gradient",
        title: "MotoZone Car Showroom",
        theme: "blue-indigo",
        icon: "Globe"
      },
      tags: ["Figma", "UI/UX", "Web Design", "Design System", "User Flows", "Prototyping"],
      behanceUrl: "https://www.behance.net/gallery/255040587/MOTOZONE-CAR-SHOWROOM",
      figmaUrl: "https://www.figma.com/design/vUvMdb0x8wnRdvDSY5G02h/Motozone-Figma?node-id=0-1&t=w7vDljZP6oYq4bs6-1"
    },
    {
      id: "flux-mobile-app",
      title: "Flux — Mobile App UI/UX Design",
      category: "App Design",
      categories: ["App Design", "UI/UX"],
      badge: "Behance Featured",
      year: "2025 – 2026",
      shortDescription: "A complete mobile application UI/UX concept designed in Figma, focused on clean visual hierarchy, intuitive navigation, and consistent component styling.",
      fullDescription: "Flux explores modern mobile interaction patterns and AI analytics experiences. Designed from low-fidelity wireframes to interactive high-fidelity Figma prototypes, focusing on thumb-friendly navigation, sleek typography, micro-interactions, and a cohesive design system.",
      role: "Lead Mobile UI/UX Designer",
      duration: "2025 – 2026",
      deliverables: ["Mobile UI/UX Design in Figma", "Visual Hierarchy & Layouts", "Interactive Figma Prototype", "Design Specs & Guidelines"],
      impact: ["Published on Behance", "Zero Friction Mobile Navigation", "Modern Minimalist Aesthetic"],
      accentColor: "from-violet-600 to-purple-800",
      image: "/flux.png",
      imagePlaceholder: {
        type: "gradient",
        title: "Flux Mobile Experience",
        theme: "violet-purple",
        icon: "Smartphone"
      },
      tags: ["Figma", "Mobile UI/UX", "App Design", "Prototyping", "Design System"],
      behanceUrl: "https://www.behance.net/gallery/254635821/Flux",
      figmaUrl: "https://www.figma.com/proto/QAFL6GcCgaI4jN85Dpol1Y/Flux?node-id=19-120&starting-point-node-id=19%3A120&t=lGhabQWrswcCEf1Z-1"
    },
    {
      id: "all-muslim-app",
      title: "All-Muslim — Islamic Lifestyle & Prayer App",
      category: "App Design",
      categories: ["App Design", "UI/UX"],
      badge: "Islamic Lifestyle UX",
      year: "2025 – 2026",
      shortDescription: "A modern, spiritually uplifting mobile application UI designed in Figma, featuring accurate prayer times, Quran reading experience, Qibla compass, and daily Azkar tracker.",
      fullDescription: "All-Muslim is an intuitive and tranquil Islamic lifestyle mobile companion designed in Figma. Focused on serene aesthetics, accessible Arabic/Urdu typography, customizable prayer alerts, high-readability Quran recitation flows, and a comprehensive component-based design system.",
      role: "Lead UI/UX & Mobile App Designer",
      duration: "2025 – 2026",
      deliverables: ["Figma UI/UX Design System", "High-Fidelity Wireframes", "Interactive Mobile Prototypes", "Prayer & Quran UI Flows"],
      impact: ["Serene & Accessible Spiritual Interface", "Complete Multi-Screen Component Library", "Optimized Daily Habit & Azkar UX"],
      accentColor: "from-emerald-600 via-teal-600 to-green-700",
      image: "/allmuslim.png",
      imagePlaceholder: {
        type: "gradient",
        title: "All-Muslim Lifestyle Experience",
        theme: "emerald-teal",
        icon: "Smartphone"
      },
      tags: ["Figma", "UI/UX", "App Design", "Islamic UX", "Mobile Design", "Prototyping"],
      behanceUrl: "https://www.behance.net/bilalrajput19",
      figmaUrl: "https://www.figma.com/design/mNYIelG8thZCA3xPWVKnK0/AL-Muslim?node-id=0-1&t=QqdoAwZA1e4xYYoT-1"
    },
    {
      id: "alpha-gym",
      title: "Alpha Gym — Fitness & Workout Mobile App",
      category: "App Design",
      categories: ["App Design", "UI/UX"],
      badge: "Fitness Mobile UX",
      year: "2025 – 2026",
      shortDescription: "A bold, energetic mobile application UI designed in Figma for Alpha Gym, featuring workout tracking, trainer booking, and personalized fitness goals.",
      fullDescription: "Alpha Gym is an energetic, performance-focused fitness mobile application designed with a sleek dark aesthetic. Crafted intuitive mobile user journeys for membership enrollment, personal training schedules, interactive workout timers, and personalized fitness goal tracking.",
      role: "Lead UI/UX & Mobile App Designer",
      duration: "2025 – 2026",
      deliverables: ["Mobile UI/UX Design in Figma", "High-Fidelity Mobile Wireframes", "Membership & Workout Booking Flows", "Interactive Mobile Prototype"],
      impact: ["High-Energy Dark Mobile Aesthetic", "Intuitive Workout & Class Booking", "Component-Based UI Library"],
      accentColor: "from-amber-600 via-orange-600 to-red-600",
      image: "/alphagym.png",
      imagePlaceholder: {
        type: "gradient",
        title: "Alpha Gym Experience",
        theme: "orange-red",
        icon: "Dumbbell"
      },
      tags: ["Figma", "UI/UX", "App Design", "Mobile Design", "Fitness UX", "Prototyping"],
      behanceUrl: "https://www.behance.net/gallery/255323007/Alpha-Gym-Website",
      figmaUrl: "https://www.figma.com/design/CWFUTEJ5s4xd8d5p1tXHim/Alpha-Gym?node-id=0-1&t=DSiVPIMfL8ZGY340-1"
    },
    {
      id: "medicare-health-app",
      title: "Medicare — Health & Patient Login App",
      category: "App Design",
      categories: ["App Design", "UI/UX"],
      badge: "Healthcare UX",
      year: "2025 – 2026",
      shortDescription: "A modern, accessible healthcare mobile application UI designed in Figma, featuring seamless patient authentication, appointment booking, and medical records access.",
      fullDescription: "Medicare Health App is designed to simplify patient onboarding and healthcare management. Focused on accessible UI, high-contrast readability, secure login & biometric verification flows, doctor consultation scheduling, and comprehensive digital medical records.",
      role: "Lead UI/UX & Mobile App Designer",
      duration: "2025 – 2026",
      deliverables: ["Figma UI/UX Design System", "Patient Authentication Flows", "Medical Records & Dashboard Screens", "Interactive Mobile Prototype"],
      impact: ["Streamlined Patient Onboarding Flow", "Accessible & Clean Medical UI System", "Complete High-Fidelity Figma Prototype"],
      accentColor: "from-cyan-600 via-teal-600 to-emerald-700",
      image: "/medicare.png",
      imagePlaceholder: {
        type: "gradient",
        title: "Medicare Health Experience",
        theme: "cyan-teal",
        icon: "Heart"
      },
      tags: ["Figma", "UI/UX", "App Design", "Healthcare UX", "Mobile Design", "Prototyping"],
      behanceUrl: "https://www.behance.net/bilalrajput19",
      figmaUrl: "https://www.figma.com/design/Cenn0ewWdR0MTKv8jFFfjz/Medicare-Health-Login-App?node-id=0-1&t=nOWAp7YBG3uWbSmU-1"
    },
    {
      id: "sales-distribution-hub",
      title: "Sales Distribution Hub — Enterprise UX Design",
      category: "System Design",
      categories: ["System Design", "UI/UX", "Web Design", "App Design"],
      badge: "Enterprise Dashboard UX",
      year: "2025 – 2026",
      shortDescription: "Role-based dashboard and mobile UI design in Figma for distributors, field officers, and bookers, accompanied by complete wireframes and atomic design system.",
      fullDescription: "Engineered as an enterprise sales and distribution ecosystem UX. Designed role-specific dashboard UIs in Figma tailored to distinct workflows: inventory managers, order bookers, and field executives. Created intuitive wireframes, data visualization cards, and streamlined transactional user flows.",
      role: "Lead UI/UX & Product Designer",
      duration: "2025 – 2026",
      deliverables: ["Multi-Role Dashboard UIs in Figma", "Mobile App Wireframes & Prototypes", "Inventory & Order UX Modules", "Scalable Component Library"],
      impact: ["Seamless Multi-Role Experience", "Comprehensive Data Visualization", "Graduation Capstone Design"],
      accentColor: "from-emerald-600 to-teal-800",
      image: "/saleshub.png",
      imagePlaceholder: {
        type: "gradient",
        title: "Sales Distribution System",
        theme: "emerald-teal",
        icon: "Layers"
      },
      tags: ["Figma", "UI/UX", "Dashboard UX", "Design System", "Wireframing", "Enterprise UX"],
      behanceUrl: "https://www.behance.net/bilalrajput19",
      figmaUrl: "https://www.figma.com/design/hO7Em4MHKKUewZUhFNYHf6/Sales-Distrbution-Hub?t=nOWAp7YBG3uWbSmU-1"
    }
  ],

  experience: [
    {
      type: "work",
      role: "Product Designer (UI/UX)",
      company: "Bake Parlour Company",
      period: "Oct 2025 – Jul 2026",
      location: "Islamabad / On-Site",
      description: "Designed the end-to-end role-based Sales Distribution Hub web and mobile app interface, starting from low-fidelity Figma wireframes to interactive mockups and production design specs.",
      highlights: [
        "Crafted responsive dashboards, order workflows, and inventory management screens with strict focus on clarity and usability",
        "Collaborated with stakeholders to translate user requirements into actionable Figma prototypes and interactive UI components",
        "Streamlined user workflows across distributors, field officers, and bookers to reduce task completion time"
      ],
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems", "User Research"]
    },
    {
      type: "work",
      role: "UI/UX & Product Design Specialist (Part-Time, Remote)",
      company: "Factory Web Services",
      period: "Aug 2024 – Jun 2026",
      location: "Remote",
      description: "Created user-friendly interfaces, visual components, and UX workflows for web and mobile products in a distributed Agile team environment.",
      highlights: [
        "Designed user journey maps, high-fidelity mockups, and responsive layouts in Figma",
        "Conducted usability reviews and coordinated closely with development teams for smooth design handoff",
        "Maintained and expanded cross-platform component libraries and design guidelines"
      ],
      skills: ["Figma", "UI/UX Design", "Wireframing", "Design Systems", "Usability Testing", "Agile"]
    }
  ],

  education: [
    {
      type: "education",
      degree: "Bachelor of Software Engineering",
      institution: "COMSATS University Islamabad, Wah Campus",
      period: "Sep 2022 – Jul 2026",
      location: "CGPA: 3.34 / 4.00",
      description: "Four-year undergraduate program focusing on human-computer interaction, user interface design principles, and digital product architecture.",
      highlights: [
        "Academic CGPA: 3.34 / 4.00",
        "Final Year Project: Sales Distribution Hub (Enterprise UI/UX, Multi-Role Dashboards & Figma Design System)",
        "Specialized in Human-Computer Interaction (HCI), UI/UX wireframing, and Design Systems"
      ]
    },
    {
      type: "education",
      degree: "FSc (Pre-Engineering)",
      institution: "The Hope College, Wah Cantt",
      period: "2019 – 2021",
      location: "Wah Cantt, Pakistan",
      description: "Higher secondary education with strong analytical, mathematical, and scientific foundation.",
      highlights: [
        "Pre-Engineering fundamentals",
        "Analytical problem-solving and structured design logic"
      ]
    }
  ],

  leadership: [
    {
      role: "Founder",
      organization: "COMSATS Heritage Society",
      institution: "COMSATS University Islamabad, Wah Campus",
      period: "2023 – 2026",
      description: "Founded and led the society, organizing cultural and academic events, including designing complete event branding, visual identity, and promotional materials.",
      highlights: [
        "Created end-to-end visual branding, posters, social media banners, and print promotional materials",
        "Led cross-functional student teams and coordinated university-wide events"
      ]
    }
  ],

  certifications: [
    {
      title: "UI/UX Design & Figma Specialization",
      issuer: "Practical Projects & Case Studies",
      year: "2023 – Present",
      type: "Specialization"
    },
    {
      title: "Design Systems & Interactive Prototyping",
      issuer: "Advanced UI/UX Specialization",
      year: "2024 – Present",
      type: "Design Specialization"
    }
  ],

  languages: [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Urdu", proficiency: "Native" }
  ],

  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bilal-arshad", icon: "Linkedin", handle: "in/bilal-arshad" },
    { name: "Behance", url: "https://www.behance.net/bilalrajput19", icon: "Palette", handle: "bilalrajput19" },
    { name: "GitHub", url: "https://github.com/BilalArshad22", icon: "Github", handle: "BilalArshad22" },
    { name: "Email", url: "mailto:bilalarshd66@gmail.com", icon: "Mail", handle: "bilalarshd66@gmail.com" }
  ]
};
