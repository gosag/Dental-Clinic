// Centralized clinic configurations for multi-tenant dental clinic preview system

export const CLINICS = {
  "hundaol-dental": {
    slug: "hundaol-dental",
    name: "Hundaol Dental Clinic",
    tagline: "Exceptional Dental Care in the Heart of Adama.",
    address: "Main Highway (Near the Old Post Office / Posta Bet), Kebele 02, Adama, Ethiopia",
    phone: "+251 91 197 0772", 
    whatsapp: "251911970772",
    rating:"5",
    email: "info@yourname.com",
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
},
  "new-grace-dental": {
    slug: "new-grace-dental",
    name: "New Grace medium dental clinic",
    tagline: "24/7 Dental Emergency & Care You Can Trust.",
    address: "Bole Road, Near Adama General Hospital & Medical College, Kebele 03, Adama, Ethiopia",
    phone: "+251 90 705 6456",
    whatsapp: "251907056456",
    email: "info@yourname.com",
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
    address: "Elemo Kiltu Street's Tana Mestewat Shopping Center 1st Floor, Near National building Shopping Mall, Adama, Ethiopia",
    phone: "+251 97 220 5858",
    whatsapp: "251972205858",
    email: "info@yourname.com",
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
  
  // ==========================================
  // CLIENT 1: DR. AMIR DENTAL CLINIC
  // ==========================================
  "dr-amir-dental": {
    slug: "dr-amir-dental",
    name: "Dr. Amir Dental Clinic",
    tagline: "Your Smile, Our Passion in Adama.",
    address: "Bole Road Area, G7WC+M7H, Adama, Ethiopia",
    phone: "+251 91 345 6789", // Placeholder for pitching
    whatsapp: "251913456789",
    email: "info@dramirdental.com",
    hours: "Mon-Sat: 8:00 AM - 7:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=dr.+amir+dental+clinic,Adama&output=embed",
    accentColor: "#059669", // Emerald Green theme
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Dr. Amir",
      credentials: "DDS — Cosmetic & Restorative Dentistry",
      bio: "Committed to delivering world-class dental restorations, cosmetic makeovers, and maintaining healthy smiles for life.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Amir"
    },
    services: [
      { name: "Cosmetic Veneers", description: "Custom porcelain and composite veneers designed to perfect your smile line." },
      { name: "Teeth Whitening", description: "Advanced in-office bleaching systems for rapid and dramatic results." },
      { name: "Root Canal Therapy", description: "Pain-free endodontic procedures to save damaged or infected teeth." },
      { name: "Crowns & Bridges", description: "Premium durable caps to perfectly restore structurally compromised teeth." },
      { name: "Regular Scaling", description: "Thorough plaque and tartar removal for deep periodontal health." },
      { name: "Emergency Dentistry", description: "Immediate relief for severe toothaches, trauma, or unexpected injuries." }
    ],
    whyUs: [
      { point: "Highly rated personalized patient care" },
      { point: "State-of-the-art cosmetic treatments" },
      { point: "Convenient central Adama location" },
      { point: "Fast response via WhatsApp support" }
    ],
    testimonials: [
      { name: "Abebe K.", stars: 5, text: "Dr. Amir fixed my front tooth perfectly. The cosmetic result exceeded my expectations!" },
      { name: "Marta G.", stars: 4, text: "Very precise work on my crown. Highly professional environment and clean setup." },
      { name: "Yonas S.", stars: 5, text: "Cleanest clinic in Adama. No long wait times if you message them beforehand." }
    ],
    faq: [
      { q: "Do you offer teeth whitening?", a: "Yes, we offer both in-office professional whitening and custom take-home kits." },
      { q: "Are root canals painful?", a: "Not at all. We use precise local anesthesia to ensure the entire procedure is completely comfortable." },
      { q: "Do you take walk-ins?", a: "Yes, we accept walk-in patients, but scheduling online guarantees you see the doctor immediately." },
      { q: "How long do veneers last?", a: "With proper care and routine checkups, our high-quality veneers can last 10 to 15 years." }
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
  },

  // ==========================================
  // CLIENT 2: NANO DENTAL & MAXILLOFACIAL CENTER
  // ==========================================
  "nano-dental": {
    slug: "nano-dental",
    name: "Nano Dental and Maxillofacial Center",
    tagline: "Advanced Maxillofacial and Dental Care Around the Clock.",
    address: "17 Megbiya, Adama, Ethiopia",
    phone: "+251 96 280 2801",
    whatsapp: "251962802801",
    email: "info@nanodentalcenter.com",
    hours: "Open 24 hours / 7 days a week",
    mapEmbedUrl: "https://maps.google.com/maps?q=Nano+dental+and+maxillofacial+center,Adama&output=embed",
    accentColor: "#06B6D4", // Modern Cyan/Teal theme
    accentColorLight: "#CFFAFE",
    doctor: {
      name: "Dr. Tolera",
      credentials: "DDS, MD — Oral & Maxillofacial Surgeon",
      bio: "Specializing in complex extractions, jaw reconstructions, and advanced surgical interventions with a gentle approach.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Tolera"
    },
    services: [
      { name: "Maxillofacial Surgery", description: "Expert surgical care for jaw alignment, facial trauma, and complex structures." },
      { name: "Wisdom Teeth Extraction", description: "Safe, surgical removal of impacted or painful third molars." },
      { name: "Dental Implants", description: "Permanent, premium titanium posts to securely replace missing teeth roots." },
      { name: "Emergency Trauma Care", description: "24/7 immediate assistance for facial injuries and dental fractures." },
      { name: "Bone Grafting", description: "Rebuilding jaw bone density to fully support future dental implants." },
      { name: "General Consultations", description: "In-depth diagnostic imaging and treatment mapping for oral health." }
    ],
    whyUs: [
      { point: "Open 24 hours for urgent dental emergencies" },
      { point: "Specialized oral and maxillofacial surgeons" },
      { point: "Advanced surgical theater and imaging" },
      { point: "Seamless booking and premium care standards" }
    ],
    testimonials: [
      { name: "Fikru T.", stars: 5, text: "They saved my jaw after a bad accident late at night. The 24/7 service is literally a lifesaver." },
      { name: "Selam W.", stars: 5, text: "Had my wisdom teeth pulled here. Extremely professional surgical team, felt absolutely zero pain." },
      { name: "Daniel M.", stars: 5, text: "High tech equipment and very skilled specialists. Best spot for implants in Adama." }
    ],
    faq: [
      { q: "Are you really open 24/7?", a: "Yes! We run a full round-the-clock emergency desk for dental trauma and urgent surgical needs." },
      { q: "What is maxillofacial surgery?", a: "It focuses on treating diseases, injuries, and defects in the head, neck, face, and jaws." },
      { q: "How long does an implant take?", a: "The placement takes about an hour, followed by a few months of healing before placing the final crown." },
      { q: "Do I need a referral for surgery?", a: "No, you can book a direct consultation with our surgeons anytime via phone or WhatsApp." }
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
  },

  // ==========================================
  // CLIENT 3: DR. ABEL SPECIALITY DENTAL CLINIC
  // ==========================================
  "dr-abel-dental": {
    slug: "dr-abel-dental",
    name: "Dr. Abel Speciality Dental Clinic",
    tagline: "Specialized Orthodontic and Advanced Care in Dembela.",
    address: "Franko, Woreda 09, Dembela, Adama, Ethiopia",
    phone: "+251 91 224 7740",
    whatsapp: "251912247740",
    email: "contact@drabeldental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=DR+ABEL+SPECIALITY+DENTAL+CLINIC,Adama&output=embed",
    accentColor: "#4F46E5", // Indigo theme
    accentColorLight: "#E0E7FF",
    doctor: {
      name: "Dr. Abel",
      credentials: "DDS — Orthodontics & Pediatric Specialist",
      bio: "Dedicated to creating beautiful, straight smiles for patients of all ages using modern braces and custom aligner techniques.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Abel"
    },
    services: [
      { name: "Orthodontics / Braces", description: "Traditional metal and modern clear ceramic braces to correct teeth alignment." },
      { name: "Pediatric Care", description: "Specialized gentle dentistry to build early positive dental habits for kids." },
      { name: "Laser Dentistry", description: "Minimally invasive gum therapies performed precisely using advanced dental lasers." },
      { name: "Full Mouth Dentures", description: "Custom-crafted partial and full dentures designed to perfectly restore natural function." },
      { name: "Composite Fillings", description: "Beautiful, seamless tooth-colored fillings for structural tooth restoration." },
      { name: "Fluoride Treatment", description: "Deep mineral enamel fortification to actively shield teeth from aggressive decay." }
    ],
    whyUs: [
      { point: "Expert orthodontic specialist on-site" },
      { point: "Child-friendly, calming clinical environment" },
      { point: "Advanced dental laser technology" },
      { point: "Open all week long for continuous care" }
    ],
    testimonials: [
      { name: "Kedir A.", stars: 5, text: "Got my braces done here. Dr. Abel checks everything thoroughly and the progress is amazing." },
      { name: "Meron D.", stars: 5, text: "My daughter used to fear dentists, but she absolutely loves coming here. Incredible patience!" },
      { name: "Tariku B.", stars: 4, text: "Top-tier cleanliness and modern layout. Booking ahead on WhatsApp makes everything fast." }
    ],
    faq: [
      { q: "At what age should kids see an orthodontist?", a: "We recommend an initial orthodontic screening around age 7 to track jaw development." },
      { q: "How long does braces treatment last?", a: "Depending on complexity, it usually ranges anywhere from 12 to 24 months." },
      { q: "Do you offer clear brackets?", a: "Yes, we provide aesthetic ceramic clear braces that blend right in with your teeth." },
      { q: "Is there parking available?", a: "Yes, there is accessible street and lot parking directly in front of the Dembela location." }
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
  }

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