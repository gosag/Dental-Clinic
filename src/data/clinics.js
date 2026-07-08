// Centralized clinic configurations for multi-tenant dental clinic preview system

export const CLINICS = {
  "smile-care": {
    slug: "smile-care",
    name: "Smile Care Dental Clinic",
    tagline: "Modern dentistry, gentle hands — right here in Adama.",
    address: "Kebele 12, Main Road, Adama, Ethiopia",
    phone: "+251 91 234 5678",
    whatsapp: "251912345678",
    email: "smilecare@example.com",
    hours: "Mon – Sat: 8:00 AM – 6:00 PM",
    mapEmbedUrl: "https://www.google.com/maps?q=8.5366,39.2487&output=embed",
    accentColor: "#1A6B8A",
    accentColorLight: "#E8F4F8",

    doctor: {
      name: "Dr. Selam Bekele",
      credentials: "BDS, Addis Ababa University — 12 years experience",
      bio: "Dr. Bekele founded Smile Care in 2012 with one goal: make quality dental care accessible and anxiety-free for every patient in Adama.",
      photo: "",
    },

    services: [
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Teeth Whitening", description: "Safe, in-clinic whitening that brightens your smile by several shades in one visit." },
      { name: "Tooth Extraction", description: "Gentle extractions performed under local anesthesia for minimal discomfort." },
      { name: "Root Canal", description: "Pain-relieving endodontic treatment that saves your natural tooth." },
      { name: "Dental Braces", description: "Orthodontic treatment for children and adults to correct alignment." },
      { name: "Dental Fillings", description: "Tooth-colored composite fillings that restore and blend naturally." },
    ],

    whyUs: [
      { point: "Fully sterilized equipment for every patient" },
      { point: "Open Saturdays — no waiting until Monday" },
      { point: "WhatsApp booking — confirm your slot in minutes" },
      { point: "Pain-free approach, especially for anxious patients" },
    ],

    testimonials: [
      { name: "Meron T.", stars: 5, text: "I had a root canal and felt almost nothing. The team was calm and professional the whole time." },
      { name: "Dawit A.", stars: 5, text: "Finally a dental clinic in Adama that feels modern. Clean, friendly, and on time." },
      { name: "Hana G.", stars: 4, text: "Brought my daughter for her first cleaning. She wasn't scared at all — the staff is great with kids." },
    ],

    faq: [
      { q: "Does it hurt?", a: "Most procedures are done under local anesthesia. We also offer anxiety management for nervous patients — just let us know." },
      { q: "How much does a cleaning cost?", a: "Prices vary by procedure. Call or WhatsApp us and we'll give you a clear quote before your visit." },
      { q: "Do you accept walk-ins?", a: "Yes, but booking ahead guarantees your slot and reduces wait time." },
      { q: "How long does a typical visit take?", a: "A routine cleaning takes 30–45 minutes. We'll always give you a time estimate when you book." },
    ],

    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: {
          title: "Our Services",
          subtitle: "Comprehensive dental care for every smile.",
        },
        doctor: { eyebrow: "Meet Your Doctor" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked an appointment",
        },
        reviews: { title: "What Our Patients Say" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" },
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: {
          name: "Name is required",
          phone: "Phone is required",
          service: "Please select a service",
        },
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." },
    },
  },

  "bethel-dental": {
    slug: "bethel-dental",
    name: "Bethel Dental Care",
    tagline: "Excellence in dental health — serving Addis Ababa since 2008.",
    address: "Piassa, Near Addis Mall, Addis Ababa, Ethiopia",
    phone: "+251 91 876 5432",
    whatsapp: "251918765432",
    email: "bethel.dental@example.com",
    hours: "Mon – Fri: 8:30 AM – 5:30 PM, Sat: 9:00 AM – 2:00 PM",
    mapEmbedUrl: "https://www.google.com/maps?q=9.0408,38.7469&output=embed",
    accentColor: "#D4A574",
    accentColorLight: "#FFF5ED",

   /*  doctor: {
      name: "Dr. Kebede Alemu",
      credentials: "DDS, University of Addis Ababa — 15 years experience",
      bio: "Dr. Alemu is a specialist in cosmetic and restorative dentistry. With over 15 years of practice, he's committed to delivering Hollywood-smile results with the utmost care and precision.",
      photo: "",
    }, */

    services: [
      { name: "Cosmetic Whitening", description: "Advanced laser whitening for a dazzling, natural-looking smile." },
      { name: "Veneers & Bonding", description: "Porcelain veneers and composite bonding to transform your smile." },
      { name: "Implants", description: "Titanium dental implants that feel and function like natural teeth." },
      { name: "Crown & Bridge", description: "Durable, aesthetically pleasing crowns and bridges." },
      { name: "Orthodontics", description: "Clear aligners and traditional braces for perfect alignment." },
      { name: "Deep Cleaning", description: "Periodontal therapy to eliminate gum disease at the root." },
    ],

    whyUs: [
      { point: "State-of-the-art digital imaging technology" },
      { point: "Flexible evening and weekend appointments" },
      { point: "Comprehensive smile makeovers available" },
      { point: "International standards of sterilization and hygiene" },
    ],

    testimonials: [
      { name: "Abdi K.", stars: 5, text: "Dr. Alemu transformed my smile with veneers. I couldn't be happier with the results!" },
      { name: "Fikadu L.", stars: 5, text: "Professional, friendly, and results-oriented. My implant feels like a real tooth." },
      { name: "Rahel M.", stars: 5, text: "The technology here is impressive. My teeth have never been whiter and healthier." },
    ],

    faq: [
      { q: "Are implants painful?", a: "No, the procedure is performed under sedation. Most patients report minimal discomfort." },
      { q: "How long do veneers last?", a: "With proper care, porcelain veneers can last 10–15 years or longer." },
      { q: "Do you offer payment plans?", a: "Yes, we offer flexible financing options for major procedures." },
      { q: "Can I get same-day service?", a: "For emergencies and minor touch-ups, yes. Contact us to arrange an urgent appointment." },
    ],

    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: {
          title: "Our Services",
          subtitle: "Complete dental solutions for your perfect smile.",
        },
        doctor: { eyebrow: "Meet Our Director" },
        whyUs: { title: "Why Bethel Dental" },
        book: {
          title: "Schedule Your Visit",
          submit: "Book Now →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll send you a confirmation on WhatsApp shortly.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I'd like to book an appointment at Bethel Dental",
        },
        reviews: { title: "Patient Testimonials" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Visit Bethel Dental", whatsappUs: "Message Us" },
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Special Requests",
        selectService: "Select a service",
        errors: {
          name: "Name is required",
          phone: "Phone is required",
          service: "Please select a service",
        },
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." },
    },
  },
  
  "hundaol-dental": {
    slug: "hundaol-dental",
    name: "Hundaol Dental Clinic",
    tagline: "Exceptional Dental Care in the Heart of Adama.",
    address: "G7Q6+RJR, Adama, Ethiopia",
    phone: "+251 91 197 0772",
    whatsapp: "251911970772",
    email: "hello@hundaoldental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Hundaol+Dental+Clinic,Adama&output=embed",
    accentColor: "#2563EB",
    accentColorLight: "#DBEAFE",
    doctor: {
      name: "Dr. Hundaol",
      credentials: "DDS — General & Preventive Dentistry",
      bio: "Dedicated to providing gentle, comprehensive dental care and educating patients on long-term oral health.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Hundaol"
    },
    services: [
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Pediatric Dentistry", description: "Gentle, anxiety-free dental care designed specifically for children." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." }
    ],
    whyUs: [
      { point: "Open 7 days a week from 8 AM to 8 PM" },
      { point: "Family-friendly environment for all ages" },
      { point: "WhatsApp booking — confirm your slot in minutes" },
      { point: "State-of-the-art sterilization protocols" }
    ],
    testimonials: [
      { name: "Biruk T.", stars: 5, text: "Very convenient hours! I was able to come in after work. The staff is incredibly friendly." },
      { name: "Chala D.", stars: 5, text: "They took great care of my kids. Dr. Hundaol is very patient and explains everything clearly." },
      { name: "Sara M.", stars: 4, text: "Clean facility and fast service. Booking through WhatsApp made everything so easy." }
    ],
    faq: [
      { q: "Are you open on weekends?", a: "Yes! We are open every day, including Saturdays and Sundays, from 8:00 AM to 8:00 PM." },
      { q: "Do you treat young children?", a: "Absolutely. We specialize in pediatric dentistry and making kids feel safe and comfortable." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Does a routine cleaning hurt?", a: "Not at all. Our hygienists use gentle techniques, and we ensure you are comfortable throughout the process." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Our Services", subtitle: "Comprehensive dental care for every smile." },
        doctor: { eyebrow: "Meet Your Doctor" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked an appointment"
        },
        reviews: { title: "What Our Patients Say" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a service" }
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." }
    }
  ,

 "dr-abel-speciality": {
    slug: "dr-abel-speciality",
    name: "DR ABEL SPECIALITY DENTAL CLINIC",
    tagline: "Your Smile, Our Speciality.",
    address: "Franko, Woreda 09, Dembela, Adama 1000",
    phone: "+251 91 224 7740",
    whatsapp: "251912247740",
    email: "contact@drabeldental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=DR+ABEL+SPECIALITY+DENTAL+CLINIC,Adama&output=embed",
    accentColor: "#059669",
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Dr. Abel",
      credentials: "DDS — Chief Specialist Dentist",
      bio: "Expert in advanced restorative, cosmetic, and implant dentistry, bringing cutting-edge care to Adama.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Abel"
    },
    services: [
      { name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
      { name: "Cosmetic Dentistry", description: "Veneers, contouring, and smile makeovers tailored to your facial structure." },
      { name: "Root Canal Therapy", description: "Advanced endodontic treatment utilizing the latest technology to save damaged teeth." },
      { name: "Dental Crowns & Bridges", description: "Custom-crafted caps and bridges to restore tooth shape, size, and strength." },
      { name: "Teeth Whitening", description: "Professional-grade bleaching for a brilliantly white smile in one session." },
      { name: "Orthodontics", description: "Modern braces and clear aligners to correct bite and alignment issues." }
    ],
    whyUs: [
      { point: "Specialized treatments you can't get at standard clinics" },
      { point: "Advanced cosmetic and restorative technology" },
      { point: "Centrally located in Dembela, Adama" },
      { point: "Comprehensive consultation before any major procedure" }
    ],
    testimonials: [
      { name: "Elias K.", stars: 5, text: "Dr. Abel did my dental implants. The process was explained perfectly and the results are incredible." },
      { name: "Mekdes A.", stars: 5, text: "The best clinic for cosmetic work in Adama. I am so confident in my new smile!" },
      { name: "Yosef B.", stars: 5, text: "Professional, clean, and top-tier expertise. They saved a tooth that another clinic told me to extract." }
    ],
    faq: [
      { q: "Do you offer payment plans for implants?", a: "We offer flexible payment options for major restorative work. Please contact us for a consultation." },
      { q: "How long does a root canal take?", a: "Most root canals can be completed in 1 to 2 visits, depending on the complexity of the tooth." },
      { q: "Am I a candidate for cosmetic dentistry?", a: "During your initial consultation, Dr. Abel will evaluate your oral health and discuss the best cosmetic options for your goals." },
      { q: "Are your whitening treatments safe?", a: "Yes, we use clinically approved, professional-grade materials that protect your enamel while lifting stains." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Specialty Services", subtitle: "Advanced treatments for a perfect, healthy smile." },
        doctor: { eyebrow: "Meet Your Specialist" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book a Consultation",
          submit: "Request Consultation →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your consultation via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked a consultation"
        },
        reviews: { title: "What Our Patients Say" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service of Interest",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a service" }
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." }
    }
  }
},
  "dr-ebrahim-dental": {
    slug: "dr-ebrahim-dental",
    name: "Dr. Ebrahim Dental clinic plc.",
    tagline: "Comprehensive Dental Services for the Whole Family.",
    address: "Derartu square, Soreti city mall 2nd floor, Wiirtuu gabaa sooretti, Adama",
    phone: "+251 91 285 7116",
    whatsapp: "251912857116",
    email: "info@drebrahimdental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Dr.+Ebrahim+Dental+clinic+plc.,Adama&output=embed",
    accentColor: "#0284C7",
    accentColorLight: "#E0F2FE",
    doctor: {
      name: "Dr. Ebrahim",
      credentials: "DDS — Chief Dental Surgeon",
      bio: "With years of experience, Dr. Ebrahim focuses on providing top-level surgical and restorative services.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Ebrahim"
    },
    services: [
      { name: "Oral Surgery", description: "Expert surgical procedures including wisdom teeth removal and complex extractions." },
      { name: "Restorative Dentistry", description: "High-quality crowns, bridges, and dentures to restore function and appearance." },
      { name: "General Dentistry", description: "Routine exams, x-rays, and professional cleanings for the whole family." },
      { name: "Dental Implants", description: "Durable and natural-looking tooth replacements." },
      { name: "Root Canal Therapy", description: "Comfortable and effective treatment to save infected or damaged teeth." },
      { name: "Teeth Whitening", description: "Professional whitening treatments for a brighter, more confident smile." }
    ],
    whyUs: [
      { point: "Located conveniently in Soreti city mall" },
      { point: "Comprehensive care for all age groups" },
      { point: "Led by a highly experienced Chief Dental Surgeon" },
      { point: "Modern equipment and strict sterilization standards" }
    ],
    testimonials: [
      { name: "Samuel T.", stars: 5, text: "Dr. Ebrahim is a master at his craft. My extraction was painless and healed perfectly." },
      { name: "Helen W.", stars: 5, text: "Great family clinic. They are wonderful with my kids and the location in the mall is very convenient." },
      { name: "Abebech K.", stars: 4, text: "Very professional and clean. They took the time to explain all my treatment options." }
    ],
    faq: [
      { q: "Do you offer services for children?", a: "Yes, we provide comprehensive dental care for patients of all ages, including children." },
      { q: "Where exactly are you located?", a: "We are on the 2nd floor of the Soreti city mall, right at Derartu square." },
      { q: "How long does a surgical extraction take?", a: "It depends on the complexity, but most procedures take between 30 to 60 minutes. We ensure you are completely numb and comfortable first." },
      { q: "Can I book via WhatsApp?", a: "Absolutely! Just send us a message and we'll help you find an available slot." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Our Services", subtitle: "Expert dental care for the entire family." },
        doctor: { eyebrow: "Meet the Surgeon" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked an appointment"
        },
        reviews: { title: "Patient Reviews" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a service" }
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." }
    }
  },

  "new-grace-dental": {
    slug: "new-grace-dental",
    name: "New Grace medium dental clinic",
    tagline: "24/7 Dental Emergency & Care You Can Trust.",
    address: "G7RC+VG7, Adama, Ethiopia",
    phone: "+251 90 705 6456",
    whatsapp: "251907056456",
    email: "info@newgracedental.com",
    hours: "Open 24 hours daily",
    mapEmbedUrl: "https://maps.google.com/maps?q=New+Grace+medium+dental+clinic,Adama&output=embed",
    accentColor: "#DC2626",
    accentColorLight: "#FEE2E2",
    doctor: {
      name: "Dr. Samuel",
      credentials: "DDS — Emergency Dental Care",
      bio: "Leading our 24/7 team to handle dental traumas, severe pain, and urgent extractions whenever you need us.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Samuel"
    },
    services: [
      { name: "Emergency Extractions", description: "Immediate relief for severe toothaches and irreparably damaged teeth." },
      { name: "Trauma Care", description: "Urgent treatment for chipped, broken, or knocked-out teeth." },
      { name: "Pain Management", description: "Rapid diagnostics and treatments to stop dental pain day or night." },
      { name: "Emergency Root Canals", description: "Prompt endodontic intervention to save infected teeth causing severe discomfort." },
      { name: "Repair of Restorations", description: "Quick fixes for lost fillings, broken crowns, or damaged dentures." },
      { name: "General Checkups", description: "Routine dental care available during standard and non-standard hours." }
    ],
    whyUs: [
      { point: "The only fully 24/7 dental clinic in Adama" },
      { point: "No appointment needed for severe emergencies" },
      { point: "Equipped for all types of dental traumas" },
      { point: "Calm, reassuring staff trained for high-stress situations" }
    ],
    testimonials: [
      { name: "Kaleb M.", stars: 5, text: "I woke up at 2 AM with unbearable pain. They took me in immediately and fixed the problem. Lifesavers!" },
      { name: "Tsedey Y.", stars: 5, text: "My son chipped his tooth playing sports on a Sunday evening. Dr. Samuel was amazing and very calming." },
      { name: "Girma A.", stars: 4, text: "Very grateful they are open late. The care was excellent and the clinic is spotless." }
    ],
    faq: [
      { q: "Are you really open 24 hours?", a: "Yes, our doors are open and we have dental professionals on staff 24 hours a day, 7 days a week." },
      { q: "Do I need to call before coming in for an emergency?", "a": "You are welcome to walk in, but calling or sending a WhatsApp message beforehand helps us prepare for your arrival." },
      { q: "Do you charge extra for late-night visits?", a: "We maintain fair, transparent pricing. Any out-of-hours fees will be discussed clearly before treatment begins." },
      { q: "Can I book a routine cleaning here?", a: "Absolutely. While we specialize in emergencies, we also provide a full range of standard dental services." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Emergency & Routine Services", subtitle: "Immediate care when you need it most." },
        doctor: { eyebrow: "Meet Your Emergency Dentist" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp right away.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I have a dental emergency/need to book an appointment"
        },
        reviews: { title: "Patient Reviews" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a service" }
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." }
    }
  },

  "ana-speciality-dental": {
    slug: "ana-speciality-dental",
    name: "Ana Speciality Dental Clinic",
    tagline: "Advanced Dentistry Tailored for You.",
    address: "Elemo Kiltu Street's Tana Mestewat Shopping Center 1st Floor, Near National building Shopping Mall, Adama",
    phone: "+251 97 220 5858",
    whatsapp: "251972205858",
    email: "contact@annaspecialtydental.com",
    hours: "Mon-Sat: 8:30 AM - 6:30 PM, Sun: Closed",
    mapEmbedUrl: "https://maps.google.com/maps?q=Ana+Speciality+Dental+Clinic,Adama&output=embed",
    accentColor: "#9333EA",
    accentColorLight: "#F3E8FF",
    doctor: {
      name: "Dr. Ana",
      credentials: "DDS — Orthodontics & Smile Design",
      bio: "Passionate about transforming smiles using the latest in orthodontic solutions and cosmetic procedures.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Ana"
    },
    services: [
      { name: "Orthodontics", "description": "Traditional braces and clear aligners for perfectly straight teeth." },
      { name: "Smile Makeovers", "description": "Customized cosmetic plans to give you the flawless smile you've always wanted." },
      { name: "Porcelain Veneers", "description": "Ultra-thin, custom-made shells designed to cover the front surface of teeth." },
      { name: "Professional Whitening", "description": "Advanced laser whitening for dramatic, long-lasting results." },
      { name: "Preventative Care", "description": "Deep cleanings, fluoride treatments, and sealants to protect your oral health." },
      { name: "Cosmetic Bonding", "description": "Quick and painless repairs for chipped, cracked, or discolored teeth." }
    ],
    whyUs: [
      { point: "Specialists in aesthetics and orthodontics" },
      { point: "Located right in Tana Mestewat Shopping Center" },
      { point: "Personalized smile design consultations" },
      { point: "Utilizing the latest cosmetic dental technology" }
    ],
    testimonials: [
      { name: "Lidet O.", stars: 5, text: "Dr. Ana completely transformed my smile with veneers. The attention to detail is unmatched." },
      { name: "Biniyam S.", stars: 5, text: "Got my braces done here. The staff is always friendly and they explain every step of the process." },
      { name: "Fikirte D.", stars: 4, text: "Beautiful, modern clinic. The whitening treatment I received gave me fantastic results." }
    ],
    faq: [
      { q: "Am I too old for braces?", a: "Never! We offer discreet orthodontic options like clear aligners that are incredibly popular with adults." },
      { q: "How long do veneers last?", a: "With proper care and good oral hygiene, high-quality porcelain veneers can last 10-15 years or more." },
      { q: "What should I expect during a smile consultation?", a: "We will take photos, discuss your goals, evaluate your dental health, and create a customized treatment plan." },
      { q: "Do you offer general dentistry as well?", a: "Yes, a beautiful smile starts with a healthy foundation, so we offer full preventative and general care." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Doctor",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Our Specialty Services", subtitle: "Crafting beautiful, healthy smiles." },
        doctor: { eyebrow: "Meet the Specialist" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book a Consultation",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your consultation via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked a consultation"
        },
        reviews: { title: "Patient Transformations" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Service",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a service",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a service" }
      },
      footer: { siteBy: "Site by ", previewNote: "Preview demo." }
    }
  },
}

/**
 * Get clinic data by slug
 * @param {string} slug - The clinic slug (e.g., 'smile-care', 'bethel-dental')
 * @returns {object} Clinic data object, or default clinic if slug not found
 */
export function getClinicBySlug(slug) {
  return CLINICS[slug]
}

/**
 * Get all available clinic slugs for preview
 * @returns {string[]} Array of clinic slugs
 */
export function getAvailableClinicSlugs() {
  return Object.keys(CLINICS)
}

/**
 * Default export for backward compatibility
 */
export default CLINICS["smile-care"]
