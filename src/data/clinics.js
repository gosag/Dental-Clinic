// Centralized clinic configurations for multi-tenant dental clinic preview system
  
export const CLINICS = {
  "wada-clinic": {
    slug: "wada-clinic",
    name: "WADA CLINIC",
    tagline: "Compassionate, 24/7 medical care for the Adama community.",
    address: "Kulefa, G7RG+CM, Adama, Ethiopia",
    phone: "+251 91 443 9363",
    whatsapp: "251914439363",
    email: "contact@wadaclinic.com",
    hours: "Open 24 hours",
    mapEmbedUrl: "https://maps.google.com/maps?q=WADA+CLINIC,Adama&output=embed",
    accentColor: "#0369A1",
    accentColorLight: "#E0F2FE",

    doctor: {
      name: "Dr. Wada",
      credentials: "MD — General Medicine",
      bio: "Committed to delivering high-quality, accessible healthcare to our community, day or night.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Wada",
    },

    services: [
      { name: "General Practice", description: "Comprehensive health evaluations and treatment for acute and chronic conditions." },
      { name: "Emergency Care", description: "24/7 medical attention for urgent health issues and minor injuries." },
      { name: "Pediatric Care", description: "Dedicated and gentle medical care tailored for infants, children, and adolescents." },
      { name: "Laboratory Services", description: "On-site diagnostics for fast and accurate test results." },
      { name: "Maternal Health", description: "Prenatal and postnatal care to support healthy mothers and babies." },
      { name: "Minor Surgery", description: "Safe and sterile minor surgical procedures performed by experienced doctors." },
    ],

    whyUs: [
      { point: "Open 24/7 for all your medical needs" },
      { point: "Highly rated by our local community" },
      { point: "Conveniently located in Kulefa, Adama" },
      { point: "Comprehensive care from diagnostics to treatment" },
    ],

    testimonials: [
      { name: "M/nur Abduro", stars: 5, text: "Excellent institution. The care I received was prompt and very professional." },
      { name: "Nura Gudeta", stars: 5, text: "MashaAllah. A great clinic that truly cares about its patients." },
      { name: "Bisrat Fikadu", stars: 5, text: "Top-tier service. The staff is welcoming and the doctors are very knowledgeable." },
    ],

    faq: [
      { q: "Are you open on public holidays?", a: "Yes, we are open 24 hours a day, 7 days a week, including all public holidays." },
      { q: "Do you have an on-site laboratory?", a: "Yes, we have a fully equipped laboratory for quick and reliable diagnostic testing." },
      { q: "Do I need an appointment to see a doctor?", a: "Walk-ins are always welcome, especially for emergencies. However, you can book an appointment to avoid waiting." },
      { q: "What should I bring for my visit?", a: "Please bring a valid ID and any relevant medical records or current medications." },
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
          title: "Our Medical Services",
          subtitle: "Comprehensive healthcare for you and your family.",
        },
        doctor: { eyebrow: "Meet the Doctor" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I just booked an appointment",
        },
        reviews: { title: "Patient Experiences" },
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
  "hundaol-dental": {
    slug: "hundaol-dental",
    name: "Hundaol Dental Clinic",
    tagline: "Exceptional Dental Care in the Heart of Adama.",
    address: "Main Highway (Near the Old Post Office / Posta Bet), Kebele 02, Adama, Ethiopia",
    city: "Adama",
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
 "hamdi-clinic": {
    slug: "hamdi-clinic",
    name: "Hamdi Clinic",
    tagline: "Caring for You, Every Step of the Way.",
    address: "Bole Behind Afnan Building, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 93 102 1530", 
    whatsapp: "251931021530",
    rating: "5",
    email: "info@hamdiclinic.com",
    hours: "Mon-Sun: Open until 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Hamdi+Clinic,Adama,Ethiopia&output=embed",
    accentColor: "#059669", /* A medical green */
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Medical Team at Hamdi Clinic",
      credentials: "General, Pediatric & Maternal Care Experts",
      bio: "Our dedicated team of professionals provides comprehensive healthcare services, including outpatient care, pediatrics, maternal care, and on-site laboratory testing for the Adama community.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Hamdi+Clinic+Team"
    },
    services: [
      { name: "General Checkups", description: "Comprehensive outpatient services and general family health consultations." },
      { name: "Pediatric Care", description: "Specialized, compassionate medical care for infants, children, and adolescents." },
      { name: "Maternal Care", description: "Dedicated maternal healthcare services supporting mothers at every stage." },
      { name: "Laboratory Services", description: "Accurate and timely on-site diagnostic testing to support your treatment." }
    ],
    whyUs: [
      { point: "Trusted healthcare provider in the heart of Adama" },
      { point: "Comprehensive care for the whole family under one roof" },
      { point: "On-site laboratory for fast and reliable test results" },
      { point: "Conveniently located behind the Afnan Building" }
    ],
    testimonials: [
      { name: "Abebech T.", stars: 5, text: "Excellent maternal care. The staff made me feel so comfortable and well taken care of." },
      { name: "Dawit M.", stars: 5, text: "Very professional team. We always bring our kids here for their checkups." },
      { name: "Hiwot A.", stars: 4, text: "Clean facility with a quick and efficient lab service. Highly recommended." }
    ],
    faq: [
      { q: "What are your operating hours?", a: "We are open daily and close at 8:00 PM." },
      { q: "Do you offer services for children?", a: "Yes, we have a dedicated pediatric department to take care of your children's health needs." },
      { q: "Where exactly are you located?", a: "We recently moved to a new location in Adama, Bole, right behind the Afnan Building." },
      { q: "Can I get my lab tests done there?", a: "Absolutely. We have a fully equipped laboratory on-site for your convenience." }
    ],
    ui: {
      demo: { badge: "DEMO", previewPrefix: "Preview site built for" },
      developer: { name: "Gosa Girma", url: "https://gosagirma.me" },
      nav: {
        services: "Services",
        doctor: "Our Team",
        reviews: "Reviews",
        book: "Book",
        findUs: "Find Us",
        bookNow: "Book Now",
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: { callNow: "Call Now", whatsappUs: "WhatsApp Us" },
      sections: {
        services: { title: "Our Services", subtitle: "Comprehensive medical care for you and your family." },
        doctor: { eyebrow: "Meet Your Healthcare Team" },
        whyUs: { title: "Why Choose Us" },
        book: {
          title: "Book an Appointment",
          submit: "Request Appointment →",
          successThanks: "Thanks, {name}!",
          successMessage: "We'll confirm your appointment via WhatsApp within 2 hours.",
          openWhatsapp: "Open WhatsApp",
          whatsappPrefill: "Hi, I would like to book an appointment"
        },
        reviews: { title: "What Our Patients Say" },
        faq: { title: "Frequently Asked Questions" },
        findUs: { title: "Find Us", whatsappUs: "WhatsApp Us" }
      },
      form: {
        name: "Full Name",
        phone: "Phone Number",
        service: "Department",
        date: "Preferred Date",
        message: "Message",
        selectService: "Select a department",
        errors: { name: "Name is required", phone: "Phone is required", service: "Please select a department" }
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
    city: "Adama",
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
    city: "Adama",
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
    city: "Adama",
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
    city: "Adama",
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
  },
  "lucy-dental": {
    slug: "lucy-dental",
    name: "Lucy Dental Clinic",
    tagline: "Brightening Smiles in the Heart of Addis Ababa.",
    address: "Bole, Atlas Road (Near European Union), Addis Ababa, Ethiopia",
    phone: "+251 91 123 4567",
    whatsapp: "251911234567",
    city: "Addis Ababa",
    rating: "4.9",
    email: "contact@lucydental.com",
    hours: "Mon-Sat: 8:30 AM - 7:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Lucy+Dental+Clinic,Addis+Ababa&output=embed",
    accentColor: "#10B981",
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Dr. Bethelhem",
      credentials: "DMD — Cosmetic & Restorative Dentistry",
      bio: "Committed to creating beautiful, confident smiles using the latest dental technology in a relaxing environment.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Bethelhem"
    },
    services: [
      { name: "Teeth Whitening", description: "Professional bleaching treatments for a noticeably brighter, whiter smile." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Orthodontics", description: "Braces and aligners to properly position your teeth and improve bite." },
      { name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
      { name: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." },
      { name: "Crown & Bridge", description: "Custom-made caps and bridges to restore damaged or missing teeth." }
    ],
    whyUs: [
      { point: "Conveniently located in Bole, Atlas" },
      { point: "Modern, state-of-the-art equipment" },
      { point: "Pain-free treatments focused on patient comfort" },
      { point: "Highly rated on social media for excellent service" }
    ],
    testimonials: [
      { name: "Helen T.", stars: 5, text: "Dr. Bethelhem is amazing! The clinic is super clean and the teeth whitening results were instant." },
      { name: "Ephrem K.", stars: 5, text: "Very professional staff. They explained my treatment plan clearly and the procedure was painless." },
      { name: "Selamawit Y.", stars: 4, text: "Great location and easy booking through WhatsApp. I didn't have to wait long at all." }
    ],
    faq: [
      { q: "Do you accept walk-in patients?", a: "Yes, but we recommend booking an appointment via WhatsApp to minimize your wait time." },
      { q: "How long does teeth whitening take?", a: "An in-office professional whitening session usually takes about 45 to 60 minutes." },
      { q: "Is root canal treatment painful?", a: "Not at all. We use modern local anesthesia so the procedure is completely painless." },
      { q: "Do you offer orthodontic treatments?", a: "Yes, we provide both traditional braces and clear aligner options." }
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

  "kaku-dental": {
    slug: "kaku-dental",
    name: "Kaku Dental Clinic",
    tagline: "Your Family’s Trusted Dental Care Partner.",
    address: "Jemo 1 (Near St. Michael Church), Addis Ababa, Ethiopia",
    phone: "+251 92 345 6789",
    whatsapp: "251923456789",
    city: "Addis Ababa",
    rating: "4.8",
    email: "hello@kakudental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Kaku+Dental+Clinic,Addis+Ababa&output=embed",
    accentColor: "#EC4899",
    accentColorLight: "#FCE7F3",
    doctor: {
      name: "Dr. Kidist",
      credentials: "DDS — General & Pediatric Dentistry",
      bio: "Passionate about making dental visits fun for kids and stress-free for adults.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Kidist"
    },
    services: [
      { name: "Pediatric Dentistry", description: "Gentle, anxiety-free dental care designed specifically for children." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." },
      { name: "Consultations", description: "Expert advice on oral hygiene and personalized treatment plans." }
    ],
    whyUs: [
      { point: "Dedicated kids play area to reduce anxiety" },
      { point: "Open every day of the week, including Sundays" },
      { point: "Affordable family packages available" },
      { point: "Seamless booking directly through WhatsApp" }
    ],
    testimonials: [
      { name: "Abel M.", stars: 5, text: "Brought my 5-year-old here and Dr. Kidist was incredibly patient. Highly recommend for families!" },
      { name: "Fikirte S.", stars: 5, text: "Clean clinic and friendly staff. The teeth cleaning was very thorough." },
      { name: "Dawit G.", stars: 4, text: "Great neighborhood clinic in Jemo. Open on Sundays which is a lifesaver." }
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

  "family-dental-adama": {
    slug: "family-dental-adama",
    name: "Family Dental Clinic",
    tagline: "Exceptional Oral Care for the Adama Community.",
    address: "Mebrat Hail Area, Kebele 04, Adama, Ethiopia",
    phone: "+251 93 456 7890",
    whatsapp: "251934567890",
    city: "Adama",
    rating: "4.7",
    email: "info@familydentaladama.com",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Family+Dental+Clinic,Adama&output=embed",
    accentColor: "#F59E0B",
    accentColorLight: "#FEF3C7",
    doctor: {
      name: "Dr. Kaleb",
      credentials: "DDS — Oral Surgery & Periodontics",
      bio: "With over a decade of experience in Adama, Dr. Kaleb brings expert surgical and preventive care to your doorstep.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Kaleb"
    },
    services: [
      { name: "Oral Surgery", description: "Expert wisdom tooth removal and complex extractions done safely." },
      { name: "Periodontics", description: "Advanced gum disease treatments to restore your oral health." },
      { name: "Night Guards", description: "Custom-fitted guards to prevent teeth grinding and jaw pain." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque." },
      { name: "Emergency Dental", description: "Immediate care for severe toothaches, broken teeth, and injuries." }
    ],
    whyUs: [
      { point: "Multilingual staff speaking Amharic, Oromiffa, and English" },
      { point: "Flexible payment options tailored for you" },
      { point: "Relaxing, newly renovated clinic environment" },
      { point: "Fast response for dental emergencies" }
    ],
    testimonials: [
      { name: "Tilahun W.", stars: 5, text: "I had a terrible toothache and Dr. Kaleb treated me immediately. Excellent emergency service." },
      { name: "Chaltu B.", stars: 5, text: "The staff is so welcoming and they speak Oromiffa which made my mother feel very comfortable." },
      { name: "Meron T.", stars: 4, text: "Very professional clinic in Mebrat Hail. Clean and efficient." }
    ],
    faq: [
      { q: "Do you handle dental emergencies?", a: "Yes, we prioritize emergency cases. Please call or WhatsApp us immediately if you are in pain." },
      { q: "What languages do your staff speak?", a: "We fluently speak Amharic, Afaan Oromoo, and English." },
      { q: "Do you provide custom night guards?", a: "Yes, we take impressions of your teeth to create perfectly fitted guards to protect against grinding." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." }
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

  "smile-care-adama": {
    slug: "smile-care-adama",
    name: "Smile Care Dental Clinic",
    tagline: "Modern Dentistry for a Confident You.",
    address: "Posta Bet Area, Near the Main Road, Adama, Ethiopia",
    phone: "+251 94 567 8901",
    whatsapp: "251945678901",
    city: "Adama",
    rating: "4.9",
    email: "appointments@smilecareadama.com",
    hours: "Mon-Sun: 8:30 AM - 6:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Smile+Care+Dental+Clinic,Adama&output=embed",
    accentColor: "#8B5CF6",
    accentColorLight: "#EDE9FE",
    doctor: {
      name: "Dr. Mahlet",
      credentials: "DDS — General & Preventive Dentistry",
      bio: "Dedicated to providing thorough preventive care and educating the Adama community on sustainable oral hygiene.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Mahlet"
    },
    services: [
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Cosmetic Fillings", description: "Tooth-colored resins that blend flawlessly with your natural teeth." },
      { name: "Fluoride Treatment", description: "Strengthen your enamel and prevent cavities with targeted fluoride applications." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." },
      { name: "Smile Consultations", description: "Comprehensive evaluations to plan your perfect smile makeover." }
    ],
    whyUs: [
      { point: "Centrally located in Adama’s Posta Bet area" },
      { point: "Focus on preventative care to save you money long-term" },
      { point: "Strict and state-of-the-art sterilization protocols" },
      { point: "Comfortable, anxiety-free clinic atmosphere" }
    ],
    testimonials: [
      { name: "Bereket A.", stars: 5, text: "Dr. Mahlet is fantastic. She explained everything she was doing and made me feel completely at ease." },
      { name: "Lensa D.", stars: 5, text: "The cleanest clinic I have visited in Adama. Great service and easy booking." },
      { name: "Yared K.", stars: 4, text: "Quick and painless filling. I was in and out in less than an hour." }
    ],
    faq: [
      { q: "Is your clinic easy to find?", a: "Yes, we are located right near the Old Post Office (Posta Bet) on the main road." },
      { q: "Do you offer aesthetic fillings?", a: "Yes, we use high-quality composite materials that match your natural tooth color perfectly." },
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

  "bishoftu-special-dental": {
    slug: "bishoftu-special-dental",
    name: "Bishoftu Special Dental Clinic",
    tagline: "Premium Dental Care in the City of Lakes.",
    address: "Central Square, Near Kuriftu Resort, Bishoftu, Ethiopia",
    phone: "+251 95 678 9012",
    whatsapp: "251956789012",
    city: "Bishoftu",
    rating: "4.8",
    email: "care@bishoftudental.com",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bishoftu+Special+Dental+Clinic,Bishoftu&output=embed",
    accentColor: "#06B6D4",
    accentColorLight: "#CFFAFE",
    doctor: {
      name: "Dr. Dawit",
      credentials: "DDS — Prosthodontics & General Dentistry",
      bio: "Bringing top-tier restorative dentistry to Bishoftu, helping patients regain the function and beauty of their smiles.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Dawit"
    },
    services: [
      { name: "Dentures", description: "Comfortable, custom-fitted full and partial dentures." },
      { name: "Crown & Bridge", description: "Custom-made caps and bridges to restore damaged or missing teeth." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." }
    ],
    whyUs: [
      { point: "Beautiful, accessible location near the lakes" },
      { point: "Specialized in restorative and prosthetic dentistry" },
      { point: "Fast turnaround times for crowns and dentures" },
      { point: "WhatsApp booking — confirm your slot in minutes" }
    ],
    testimonials: [
      { name: "Girum F.", stars: 5, text: "Got a new set of dentures from Dr. Dawit. The fit is perfect and the process was so smooth." },
      { name: "Sara W.", stars: 5, text: "Beautiful clinic in a great location. The staff is very friendly and efficient." },
      { name: "Kidus T.", stars: 4, text: "Highly recommend their teeth cleaning service. Very thorough." }
    ],
    faq: [
      { q: "How long does it take to get a dental bridge?", a: "Usually, it requires two visits spanning over a week. We take impressions on the first visit and fit the bridge on the second." },
      { q: "Do you accept walk-ins?", a: "We do accept walk-ins, but scheduling via WhatsApp guarantees you won't have to wait." },
      { q: "Are your procedures painful?", a: "We use the latest local anesthetics to ensure you feel minimal to no discomfort during your treatments." },
      { q: "Is there parking available?", a: "Yes, there is ample parking space available near the clinic." }
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

  "zema-dental": {
    slug: "zema-dental",
    name: "Zema Dental Clinic",
    tagline: "Harmonizing Health and Aesthetics in Bishoftu.",
    address: "Kebele 01, Main Road, Bishoftu, Ethiopia",
    phone: "+251 96 789 0123",
    whatsapp: "251967890123",
    city: "Bishoftu",
    rating: "4.9",
    email: "contact@zemadental.com",
    hours: "Mon-Sun: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Zema+Dental+Clinic,Bishoftu&output=embed",
    accentColor: "#3B82F6",
    accentColorLight: "#DBEAFE",
    doctor: {
      name: "Dr. Yonatan",
      credentials: "DMD — Cosmetic Dentistry & Endodontics",
      bio: "Fusing clinical excellence with an artist's eye, Dr. Yonatan transforms smiles and relieves pain with precision.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Yonatan"
    },
    services: [
      { name: "Smile Makeover", description: "Comprehensive cosmetic treatments to give you the smile of your dreams." },
      { name: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." },
      { name: "Bad Breath Treatment", description: "Targeted deep cleaning and advice to eliminate halitosis permanently." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." }
    ],
    whyUs: [
      { point: "State-of-the-art facility on Bishoftu's main road" },
      { point: "Specialized in advanced root canal therapies" },
      { point: "Open 7 days a week for your convenience" },
      { point: "Exceptional standard of hygiene and care" }
    ],
    testimonials: [
      { name: "Mekdes A.", stars: 5, text: "I was terrified of getting a root canal, but Dr. Yonatan made it completely painless. Highly recommend!" },
      { name: "Biniyam S.", stars: 5, text: "The cosmetic work they did on my front teeth is incredible. I finally feel confident smiling." },
      { name: "Roza M.", stars: 4, text: "Very modern clinic. Booking via WhatsApp is super easy and the staff replies quickly." }
    ],
    faq: [
      { q: "Are you open on weekends?", a: "Yes! We are open every day, including Saturdays and Sundays, from 8:00 AM to 7:00 PM." },
      { q: "Is a root canal painful?", a: "No, modern root canals are no more uncomfortable than getting a standard filling." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Can you fix chipped front teeth?", a: "Absolutely. We offer cosmetic bonding and veneers that seamlessly repair chipped teeth." }
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
  "dagmawi-dental": {
    slug: "dagmawi-dental",
    name: "Dagmawi Dental Clinic",
    tagline: "Precision Dental Care in CMC, Addis Ababa.",
    address: "CMC Michael, Next to Tsehay Real Estate, Addis Ababa, Ethiopia",
    phone: "+251 91 234 5678",
    whatsapp: "251912345678",
    rating: "4.8",
    city: "Addis Ababa",
    email: "contact@dagmawidental.com",
    hours: "Mon-Sat: 8:00 AM - 7:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=CMC,Addis+Ababa&output=embed",
    accentColor: "#0F766E",
    accentColorLight: "#CCFBF1",
    doctor: {
      name: "Dr. Dagmawi",
      credentials: "DDS — Restorative & General Dentistry",
      bio: "Committed to delivering high-quality, painless dental treatments utilizing modern techniques to ensure long-lasting oral health.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Dagmawi"
    },
    services: [
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Dental Crowns", description: "High-quality, natural-looking crowns to restore damaged teeth." },
      { name: "Root Canal Therapy", description: "Expert endodontic treatment to save infected teeth and relieve pain." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Teeth Whitening", description: "Professional bleaching treatments for a brighter, more confident smile." }
    ],
    whyUs: [
      { point: "Easily accessible location in the CMC area" },
      { point: "State-of-the-art sterilization and hygiene standards" },
      { point: "Friendly, highly trained staff focused on patient comfort" },
      { point: "Seamless booking directly through WhatsApp" }
    ],
    testimonials: [
      { name: "Yonatan T.", stars: 5, text: "Dr. Dagmawi was incredibly professional. The clinic is spotless and the equipment is very modern." },
      { name: "Fikir M.", stars: 5, text: "Best teeth cleaning experience I've had. Quick, painless, and very thorough." },
      { name: "Abel K.", stars: 4, text: "Great location and easy booking via WhatsApp. Very satisfied with my fillings." }
    ],
    faq: [
      { q: "Do I need to book in advance?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to guarantee your slot." },
      { q: "Is the clinic open on weekends?", a: "We are open on Saturdays from 8:00 AM to 7:30 PM. We are closed on Sundays." },
      { q: "Do you offer teeth whitening?", a: "Yes, we offer professional in-office whitening that provides immediate results." },
      { q: "Are your treatments painful?", a: "We prioritize patient comfort and use effective local anesthetics to ensure painless procedures." }
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

  "boku-dental": {
    slug: "boku-dental",
    name: "Boku Dental Clinic",
    tagline: "Bringing Brighter Smiles to Adama.",
    address: "Boku Area, Near Adama University Main Gate, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 92 876 5432",
    whatsapp: "251928765432",
    rating: "4.7",
    email: "info@bokudental.com",
    hours: "Mon-Sun: 8:30 AM - 6:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Adama+University,Adama&output=embed",
    accentColor: "#C2410C",
    accentColorLight: "#FFEDD5",
    doctor: {
      name: "Dr. Tadesse",
      credentials: "DDS — Preventive & Family Dentistry",
      bio: "Dedicated to the Adama community, providing gentle and accessible dental care for university students and families alike.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Tadesse"
    },
    services: [
      { name: "Emergency Dental", description: "Immediate care for severe toothaches, broken teeth, and injuries." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Orthodontic Consultations", description: "Initial evaluations for braces and smile alignment." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." }
    ],
    whyUs: [
      { point: "Conveniently located near Adama University" },
      { point: "Special discounts available for students with valid ID" },
      { point: "Open 7 days a week for flexible scheduling" },
      { point: "WhatsApp booking — confirm your slot in minutes" }
    ],
    testimonials: [
      { name: "Eyerusalem D.", stars: 5, text: "Perfect location for students! The staff is friendly and the prices are very fair." },
      { name: "Chala W.", stars: 5, text: "I came in with a terrible toothache and they treated me immediately. Highly recommend Dr. Tadesse." },
      { name: "Helen B.", stars: 4, text: "Clean facility and fast service. Booking through WhatsApp made everything so easy." }
    ],
    faq: [
      { q: "Do you offer student discounts?", a: "Yes, we offer special pricing for Adama University students upon presenting a valid student ID." },
      { q: "Are you open on Sundays?", a: "Yes, we are open every day of the week from 8:30 AM to 6:30 PM." },
      { q: "Do you handle dental emergencies?", a: "Absolutely. If you are in severe pain, please walk in or contact us immediately on WhatsApp." },
      { q: "Does a routine cleaning hurt?", a: "Not at all. Our team uses gentle techniques to ensure your comfort." }
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

  "hora-dental": {
    slug: "hora-dental",
    name: "Hora Dental Clinic",
    tagline: "Relaxing Dental Care by the Lakes.",
    address: "Lake Hora Road, Kebele 02, Bishoftu, Ethiopia",
    city: "Bishoftu",
    phone: "+251 93 112 2334",
    whatsapp: "251931122334",
    rating: "4.9",
    email: "smile@horadental.com",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Lake+Hora,Bishoftu&output=embed",
    accentColor: "#1D4ED8",
    accentColorLight: "#DBEAFE",
    doctor: {
      name: "Dr. Kalkidan",
      credentials: "DMD — Cosmetic & General Dentistry",
      bio: "Passionate about creating beautiful smiles in a calm, stress-free environment tailored for the residents and visitors of Bishoftu.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Kalkidan"
    },
    services: [
      { name: "Cosmetic Dentistry", description: "Veneers and bonding to give you a flawless, confident smile." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Pediatric Dentistry", description: "Gentle, anxiety-free dental care designed specifically for children." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Dentures & Bridges", description: "Custom-fitted solutions to replace missing teeth and restore function." }
    ],
    whyUs: [
      { point: "Serene clinic environment located near Lake Hora" },
      { point: "Patient-centered care focusing on eliminating dental anxiety" },
      { point: "Advanced cosmetic treatments available locally" },
      { point: "Fast and responsive WhatsApp appointment booking" }
    ],
    testimonials: [
      { name: "Bethelhem S.", stars: 5, text: "The clinic is beautiful and very calming. Dr. Kalkidan completely cured my fear of the dentist." },
      { name: "Dawit F.", stars: 5, text: "Excellent cosmetic work. My new veneers look completely natural. Thank you!" },
      { name: "Lidet K.", stars: 4, text: "Very clean and professional. The staff is polite and they respect your time." }
    ],
    faq: [
      { q: "Do you offer cosmetic dental procedures?", a: "Yes, we specialize in smile makeovers including veneers, bonding, and professional whitening." },
      { q: "Is there parking available?", a: "Yes, we have secure parking space available right outside the clinic on Lake Hora road." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Do you treat children?", a: "Absolutely! We create a fun and relaxed environment to make dental visits easy for kids." }
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

  "saron-dental": {
    slug: "saron-dental",
    name: "Saron Speciality Dental Clinic",
    tagline: "Advanced Dentistry for the Whole Family.",
    address: "Saris Abo, Near Kadisco Hospital, Addis Ababa, Ethiopia",
    city: "Addis Ababa",
    phone: "+251 94 445 5566",
    whatsapp: "251944455566",
    rating: "4.8",
    email: "appointments@sarondental.com",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Saris,Addis+Ababa&output=embed",
    accentColor: "#BE185D",
    accentColorLight: "#FCE7F3",
    doctor: {
      name: "Dr. Saron",
      credentials: "DDS — Oral Surgery & General Dentistry",
      bio: "With extensive experience in both complex surgical procedures and family dentistry, Dr. Saron ensures top-tier care for all ages.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Saron"
    },
    services: [
      { name: "Oral Surgery", description: "Expert wisdom tooth removal and complex extractions done safely." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." }
    ],
    whyUs: [
      { point: "Comprehensive care ranging from checkups to implants" },
      { point: "Highly skilled team with a focus on hygiene and safety" },
      { point: "Convenient location near Saris Abo and Kadisco Hospital" },
      { point: "Modern dental equipment and digital x-rays" }
    ],
    testimonials: [
      { name: "Tewodros G.", stars: 5, text: "I had my wisdom teeth extracted here. Dr. Saron is an absolute professional. Smooth recovery and no pain!" },
      { name: "Mahlet Y.", stars: 5, text: "Very friendly and efficient clinic. The staff makes you feel right at home." },
      { name: "Eyob T.", stars: 4, text: "Great neighborhood clinic. Responded very fast when I booked through WhatsApp." }
    ],
    faq: [
      { q: "Do you perform wisdom tooth extractions?", a: "Yes, Dr. Saron specializes in oral surgery, including complex wisdom tooth removals." },
      { q: "Is it easy to find your clinic?", a: "Yes, we are located in Saris Abo, just a short walk from Kadisco Hospital." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Do you use modern anesthesia?", a: "Yes, we utilize the latest local anesthetics to make sure your treatment is completely painless." }
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

  "rift-valley-dental": {
    slug: "rift-valley-dental",
    name: "Rift Valley Dental Clinic",
    tagline: "Your Trusted Dental Experts in Adama.",
    address: "Piassa Area, Mebrat Hail Road, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 95 998 8776",
    whatsapp: "251959988776",
    rating: "4.6",
    email: "hello@riftvalleydental.com",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Piassa,Adama&output=embed",
    accentColor: "#4D7C0F",
    accentColorLight: "#ECFCCB",
    doctor: {
      name: "Dr. Gemechu",
      credentials: "DDS — General Dentistry & Endodontics",
      bio: "Rooted in the Adama community, Dr. Gemechu combines extensive experience with a compassionate approach to dental care.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Gemechu"
    },
    services: [
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Root Canal", description: "Pain-free endodontic therapy to save severely infected teeth." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." }
    ],
    whyUs: [
      { point: "Central Adama location in the Piassa area" },
      { point: "Multilingual staff speaking Afaan Oromoo and Amharic fluently" },
      { point: "Extended hours — open until 8 PM every day" },
      { point: "Affordable family packages and transparent pricing" }
    ],
    testimonials: [
      { name: "Biftu A.", stars: 5, text: "Dr. Gemechu is excellent. He explains everything in Afaan Oromoo which made my grandmother very comfortable." },
      { name: "Kaleb W.", stars: 5, text: "I had a root canal done here and felt absolutely nothing. Highly recommended!" },
      { name: "Samrawit Z.", stars: 4, text: "Great that they are open late. I was able to get my teeth cleaned after finishing work." }
    ],
    faq: [
      { q: "What languages do you speak?", a: "Our clinic proudly serves patients in Afaan Oromoo, Amharic, and English." },
      { q: "Are you open in the evenings?", a: "Yes, we are open until 8:00 PM every day to accommodate patients after work." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Is root canal treatment painful?", a: "Not at all. We use modern local anesthesia so the procedure is completely painless." }
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
  "bole-smiles": {
    slug: "bole-smiles",
    name: "Bole Smiles Dental Clinic",
    tagline: "Premium Cosmetic and General Dentistry.",
    address: "Bole Medhanealem, Near Edna Mall, Addis Ababa, Ethiopia",
    city: "Addis Ababa",
    phone: "+251 91 333 4455",
    whatsapp: "251913334455",
    rating: "4.9",
    email: "appointments@bolesmiles.com",
    hours: "Mon-Sat: 8:30 AM - 8:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bole+Medhanealem,Addis+Ababa&output=embed",
    accentColor: "#8B5CF6",
    accentColorLight: "#EDE9FE",
    doctor: {
      name: "Dr. Yonatan",
      credentials: "DMD — Cosmetic Dentistry Specialization",
      bio: "Focusing on aesthetic perfection and comprehensive oral health, Dr. Yonatan transforms smiles in the vibrant heart of Bole.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Yonatan"
    },
    services: [
      { name: "Smile Makeover", description: "Comprehensive cosmetic treatments including veneers and bonding." },
      { name: "Teeth Whitening", description: "Advanced laser whitening for immediate, dazzling results." },
      { name: "General Checkups", description: "Thorough oral exams and digital x-rays to catch issues early." },
      { name: "Orthodontics", description: "Clear aligners and traditional braces for a perfectly straight smile." },
      { name: "Dental Implants", description: "Permanent, natural-looking replacements for missing teeth." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque." }
    ],
    whyUs: [
      { point: "Located centrally in Bole near Edna Mall" },
      { point: "Specialized in high-end cosmetic dentistry" },
      { point: "Extended evening hours to fit your busy schedule" },
      { point: "State-of-the-art digital scanning and imaging" }
    ],
    testimonials: [
      { name: "Meron A.", stars: 5, text: "I came in for teeth whitening and the results are incredible. Dr. Yonatan and his team are the best in Bole!" },
      { name: "Ephrem T.", stars: 5, text: "Very premium feel to the clinic. Clean, modern, and they really value your time." },
      { name: "Hanna K.", stars: 4, text: "Easy booking via WhatsApp and great customer service from the moment you walk in." }
    ],
    faq: [
      { q: "Do you offer clear aligners?", a: "Yes, we offer clear aligner therapies as a discreet alternative to traditional braces." },
      { q: "Is there parking available?", a: "Yes, there is secure parking available for our patients in the building." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "How long does laser whitening take?", a: "The procedure takes about an hour and you will see immediate results." }
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

  "abyssinia-dental-bishoftu": {
    slug: "abyssinia-dental-bishoftu",
    name: "Abyssinia Dental Care",
    tagline: "Quality Family Dentistry in Bishoftu.",
    address: "Town Center, Near the Main Bus Station, Bishoftu, Ethiopia",
    city: "Bishoftu",
    phone: "+251 92 444 5566",
    whatsapp: "251924445566",
    rating: "4.7",
    email: "hello@abyssiniadentalbishoftu.com",
    hours: "Mon-Sun: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bishoftu+Bus+Station,Bishoftu&output=embed",
    accentColor: "#059669",
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Dr. Fasika",
      credentials: "DDS — General & Restorative Dentistry",
      bio: "Committed to providing accessible, high-quality dental care to families across Bishoftu in a warm and welcoming environment.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Fasika"
    },
    services: [
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Dentures", description: "Comfortable, custom-fitted full and partial dentures." },
      { name: "Pediatric Care", description: "Gentle dental checkups and treatments specifically tailored for children." }
    ],
    whyUs: [
      { point: "Centrally located near the Bishoftu Bus Station" },
      { point: "Affordable family pricing with high-quality materials" },
      { point: "Open every day of the week including Sundays" },
      { point: "Experienced with anxious patients and children" }
    ],
    testimonials: [
      { name: "Samuel B.", stars: 5, text: "Dr. Fasika is very gentle. I usually hate the dentist, but I felt no pain during my extraction." },
      { name: "Tigist W.", stars: 5, text: "Great clinic for kids. My son was very comfortable and the staff was so patient with him." },
      { name: "Kaleb D.", stars: 4, text: "Very accessible location and they respond quickly on WhatsApp." }
    ],
    faq: [
      { q: "Do you treat children?", a: "Yes, we provide gentle, stress-free pediatric dentistry for kids of all ages." },
      { q: "Are you open on the weekends?", a: "We are open 7 days a week, including Saturdays and Sundays, from 8:00 AM to 7:00 PM." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Is the clinic easy to find?", a: "Very easy! We are located right in the town center near the main bus station." }
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

  "aba-geda-dental": {
    slug: "aba-geda-dental",
    name: "Aba Geda Dental Clinic",
    tagline: "Your Smile, Our Heritage.",
    address: "Near Aba Geda Hall, Kebele 12, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 93 555 6677",
    whatsapp: "251935556677",
    rating: "4.8",
    email: "info@abagedadental.com",
    hours: "Mon-Sat: 8:00 AM - 7:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Aba+Geda+Hall,Adama&output=embed",
    accentColor: "#DC2626",
    accentColorLight: "#FEE2E2",
    doctor: {
      name: "Dr. Biniyam",
      credentials: "DDS — Orthodontics & General Care",
      bio: "A trusted name in Adama, Dr. Biniyam specializes in straightening smiles and providing comprehensive preventive care.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Biniyam"
    },
    services: [
      { name: "Braces & Orthodontics", description: "Traditional braces and aligners to properly position your teeth." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Gum Therapy", description: "Treatments to reverse gingivitis and maintain healthy gums." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." }
    ],
    whyUs: [
      { point: "Expert orthodontic consultations and treatments" },
      { point: "Well-known and accessible location near Aba Geda Hall" },
      { point: "Strict sterilization and hygiene protocols" },
      { point: "Multilingual staff providing clear communication" }
    ],
    testimonials: [
      { name: "Lensa G.", stars: 5, text: "I got my braces done by Dr. Biniyam. The progress has been amazing and the price is very reasonable." },
      { name: "Tadesse M.", stars: 5, text: "Very clean clinic and professional staff. I highly recommend them for general checkups." },
      { name: "Chaltu A.", stars: 4, text: "Booking an appointment on WhatsApp was seamless. I barely had to wait." }
    ],
    faq: [
      { q: "Do you offer payment plans for braces?", a: "Yes, we offer flexible installment plans for our orthodontic patients." },
      { q: "What languages are spoken at the clinic?", a: "We speak Afaan Oromoo, Amharic, and English fluently." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Are orthodontic consultations free?", a: "We offer discounted initial consultations to discuss your braces and alignment options." }
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

  "megenagna-speciality": {
    slug: "megenagna-speciality",
    name: "Megenagna Speciality Dental",
    tagline: "Advanced Dental Care You Can Trust.",
    address: "Zefmesh Grand Mall Area, Megenagna, Addis Ababa, Ethiopia",
    city: "Addis Ababa",
    phone: "+251 94 666 7788",
    whatsapp: "251946667788",
    rating: "4.9",
    email: "care@megenagnadental.com",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Megenagna,Addis+Ababa&output=embed",
    accentColor: "#2563EB",
    accentColorLight: "#DBEAFE",
    doctor: {
      name: "Dr. Selam",
      credentials: "DMD — Endodontics & Oral Surgery",
      bio: "Specializing in complex dental cases, Dr. Selam brings advanced surgical techniques and pain management to her patients.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Selam"
    },
    services: [
      { name: "Root Canal Therapy", description: "Expert endodontic treatment to save infected teeth and relieve pain." },
      { name: "Oral Surgery", description: "Expert wisdom tooth removal and complex extractions done safely." },
      { name: "Dental Crowns", description: "High-quality, natural-looking crowns to restore damaged teeth." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque." },
      { name: "Emergency Dental", description: "Immediate care for severe toothaches, broken teeth, and injuries." }
    ],
    whyUs: [
      { point: "Specialized in complex root canals and surgeries" },
      { point: "Convenient location near Zefmesh Grand Mall" },
      { point: "Committed to 100% pain-free treatments" },
      { point: "Fast emergency response via WhatsApp" }
    ],
    testimonials: [
      { name: "Abel Y.", stars: 5, text: "I was in intense pain from an infected tooth. Dr. Selam performed a root canal and I felt immediate relief. Truly a lifesaver." },
      { name: "Mekdes F.", stars: 5, text: "Very modern clinic. The digital x-rays are super fast and Dr. Selam explains everything on the screen." },
      { name: "Yared T.", stars: 4, text: "Great location in Megenagna and excellent, professional service." }
    ],
    faq: [
      { q: "Do you accept emergency cases?", a: "Yes, we prioritize dental emergencies. Please reach out on WhatsApp for an immediate response." },
      { q: "Is a root canal painful?", a: "No, we use advanced local anesthetics so the procedure is completely comfortable and painless." },
      { q: "Do I need an appointment?", a: "While we accept walk-ins, we highly recommend booking ahead via WhatsApp to avoid waiting." },
      { q: "Do you extract wisdom teeth?", a: "Yes, Dr. Selam specializes in oral surgery including impacted wisdom tooth removals." }
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

  "oromia-premier-dental": {
    slug: "oromia-premier-dental",
    name: "Oromia Premier Dental",
    tagline: "First-Class Dental Care in Adama.",
    address: "Dembela City Center Area, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 95 777 8899",
    whatsapp: "251957778899",
    rating: "4.8",
    email: "contact@oromiapremierdental.com",
    hours: "Mon-Sun: 8:30 AM - 6:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Adama,Ethiopia&output=embed",
    accentColor: "#D97706",
    accentColorLight: "#FEF3C7",
    doctor: {
      name: "Dr. Lensa",
      credentials: "DDS — Preventive & Pediatric Dentistry",
      bio: "Dr. Lensa is passionate about educating the community on oral hygiene and providing stellar preventive care for all ages.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Lensa"
    },
    services: [
      { name: "Pediatric Dentistry", description: "Gentle, anxiety-free dental care designed specifically for children." },
      { name: "Fluoride Treatment", description: "Strengthen your enamel and prevent cavities with targeted fluoride applications." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing to remove plaque and prevent gum disease." },
      { name: "Dental Fillings", description: "Durable, tooth-colored composite fillings that restore your natural smile." },
      { name: "General Checkups", description: "Comprehensive oral exams and digital x-rays to catch issues early." },
      { name: "Tooth Extraction", description: "Safe extractions performed under local anesthesia for minimal discomfort." }
    ],
    whyUs: [
      { point: "Family-friendly environment tailored for young children" },
      { point: "Focus on preventative care to keep your natural teeth healthy" },
      { point: "Open 7 days a week for your convenience" },
      { point: "Smooth booking process through WhatsApp" }
    ],
    testimonials: [
      { name: "Fikirte D.", stars: 5, text: "My daughter used to cry at the dentist, but Dr. Lensa is a magician! Highly recommend for anyone with kids." },
      { name: "Biftu T.", stars: 5, text: "Excellent cleaning service. They really take their time and explain how to care for your teeth properly." },
      { name: "Girum Z.", stars: 4, text: "Very friendly staff and clean clinic. Easy to find in Adama." }
    ],
    faq: [
      { q: "Do you specialize in children's dentistry?", a: "Yes, Dr. Lensa is highly experienced in pediatric dentistry and making children feel safe." },
      { q: "Are you open on weekends?", a: "Yes, we are open every day of the week, including Saturdays and Sundays." },
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
  "adama-smile-center": {
    slug: "adama-smile-center",
    name: "Adama Smile Center",
    tagline: "Quality Care for the Whole Family.",
    address: "Near Adama Ras Hotel, Adama, Ethiopia",
    city: "Adama",
    phone: "+251 91 223 3445",
    whatsapp: "251912233445",
    rating: "4.7",
    email: "smile@adamasmile.com",
    hours: "Mon-Sat: 8:00 AM - 6:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Adama+Ras+Hotel,Adama&output=embed",
    accentColor: "#F472B6",
    accentColorLight: "#FCE7F3",
    doctor: {
      name: "Dr. Selam",
      credentials: "DDS — Family & Pediatric Dentistry",
      bio: "Dr. Selam brings a gentle, patient-centered approach to dentistry, focusing on making every visit comfortable for both children and adults.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Selam"
    },
    services: [
      { name: "Family Dentistry", description: "Comprehensive dental care for patients of all ages." },
      { name: "Pediatric Care", description: "Specialized, gentle dental care for your little ones." },
      { name: "Teeth Cleaning", description: "Professional scaling and polishing for a healthy, vibrant smile." },
      { name: "Dental Fillings", description: "Durable, tooth-colored restorations." },
      { name: "Tooth Extraction", description: "Safe and comfortable extractions." },
      { name: "Oral Hygiene Education", description: "Personalized advice to keep your smile healthy at home." }
    ],
    whyUs: [
      { point: "Centrally located in the heart of Adama" },
      { point: "Warm, family-oriented atmosphere" },
      { point: "Emphasis on preventative and pediatric care" },
      { point: "Easy, direct communication via WhatsApp" }
    ],
    testimonials: [
      { name: "Tigist M.", stars: 5, text: "Dr. Selam is wonderful with kids! My son actually enjoys going to the dentist now." },
      { name: "Yosef B.", stars: 5, text: "Very professional and kind staff. The clinic is always clean and welcoming." },
      { name: "Alemtsehay A.", stars: 4, text: "Great family clinic. They make scheduling very easy." }
    ],
    faq: [
      { q: "Do you offer pediatric dentistry?", a: "Yes, we specialize in making dental care a positive, anxiety-free experience for children." },
      { q: "How often should I have a checkup?", a: "We recommend a routine cleaning and exam every 6 months to maintain optimal oral health." },
      { q: "Do you accept walk-in patients?", a: "We prefer appointments, but we will do our best to accommodate emergencies." },
      { q: "Do I need an appointment?", a: "We highly recommend booking ahead via WhatsApp to ensure a timely visit." }
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

  "bishoftu-prime-dental": {
    slug: "bishoftu-prime-dental",
    name: "Bishoftu Prime Dental",
    tagline: "Your Partner in Dental Health.",
    address: "Main Road, Opposite the Hospital, Bishoftu, Ethiopia",
    city: "Bishoftu",
    phone: "+251 98 776 6554",
    whatsapp: "251987766554",
    rating: "4.9",
    email: "hello@bishoftuprime.com",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Bishoftu+General+Hospital&output=embed",
    accentColor: "#3B82F6",
    accentColorLight: "#DBEAFE",
    doctor: {
      name: "Dr. Bekele",
      credentials: "DDS — Restorative & Implant Dentistry",
      bio: "Dr. Bekele is committed to restorative excellence, using precision techniques to replace missing teeth and restore full functionality to your smile.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Bekele"
    },
    services: [
      { name: "Dental Implants", description: "State-of-the-art permanent solutions for missing teeth." },
      { name: "Crowns & Bridges", description: "Custom-made, high-quality restorations to restore your smile." },
      { name: "Root Canal Therapy", description: "Advanced endodontic care to save your natural teeth." },
      { name: "Teeth Cleaning", description: "Thorough cleaning to keep your gums and teeth healthy." },
      { name: "Dental Fillings", description: "Tooth-colored composite fillings for a natural look." },
      { name: "Consultation", description: "Comprehensive oral health evaluation." }
    ],
    whyUs: [
      { point: "Specialist-level care for implants and complex cases" },
      { point: "Prime location directly across from the general hospital" },
      { point: "Modern, high-precision equipment" },
      { point: "Committed to long-term oral health and patient education" }
    ],
    testimonials: [
      { name: "Fekadu K.", stars: 5, text: "I had an implant done by Dr. Bekele. The process was explained perfectly and I am very happy with the result." },
      { name: "Senait D.", stars: 5, text: "Extremely professional clinic. They set the standard for dental care in Bishoftu." },
      { name: "Meklit H.", stars: 4, text: "Very thorough and honest. I appreciate that they focus on long-term health." }
    ],
    faq: [
      { q: "What is the benefit of dental implants?", a: "Implants are the closest thing to natural teeth, providing excellent strength and aesthetics for replacing missing teeth." },
      { q: "Do you have advanced equipment?", a: "Yes, we invest in modern dental technology to ensure our patients receive the most precise treatments possible." },
      { q: "Do I need an appointment?", a: "Yes, for specialized procedures like implants, we require a consultation appointment, which you can book via WhatsApp." },
      { q: "Is your clinic accessible?", a: "We are conveniently located on the main road, directly opposite the hospital." }
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
  "assela-care-dental": {
    slug: "assela-care-dental",
    name: "Assela Care Dental",
    tagline: "Your Health, Our Priority in Assela.",
    address: "Near Arsi University Main Gate, Assela, Ethiopia",
    city: "Assela",
    phone: "+251 91 123 4567",
    whatsapp: "251911234567",
    rating: "4.8",
    email: "contact@asselacare.com",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Arsi+University,Assela&output=embed",
    accentColor: "#059669",
    accentColorLight: "#D1FAE5",
    doctor: {
      name: "Dr. Dawit",
      credentials: "DDS — General & Preventive Dentistry",
      bio: "Dr. Dawit has been serving the Assela community for over 8 years, focusing on pain-free preventive care for university students and local families alike.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Dawit"
    },
    services: [
      { name: "General Checkups", description: "Thorough exams and X-rays to ensure your teeth and gums are healthy." },
      { name: "Teeth Cleaning", description: "Professional scaling to remove plaque and tartar build-up." },
      { name: "Dental Fillings", description: "High-quality, tooth-colored restorations for cavities." },
      { name: "Tooth Extraction", description: "Safe and gentle removal of problematic teeth." },
      { name: "Root Canal Therapy", description: "Expert treatment to save infected or badly decayed teeth." },
      { name: "Preventive Education", description: "Guidance on brushing, flossing, and diet for lasting oral health." }
    ],
    whyUs: [
      { point: "Conveniently located near Arsi University" },
      { point: "Affordable student and family care packages" },
      { point: "Strict sterilization and hygiene protocols" },
      { point: "Easy WhatsApp booking system" }
    ],
    testimonials: [
      { name: "Netsanet M.", stars: 5, text: "Dr. Dawit is incredibly gentle. I had a filling done and didn't feel a thing!" },
      { name: "Kibrom T.", stars: 4, text: "Great clinic right near the campus. Very easy to schedule an appointment between classes." },
      { name: "Genet A.", stars: 5, text: "The staff is so friendly and the clinic is spotless. Highly recommended." }
    ],
    faq: [
      { q: "Do you offer discounts for students?", a: "Yes, we offer special rates for Arsi University students with a valid ID." },
      { q: "Can I book a same-day appointment?", a: "We accept walk-ins, but we recommend sending a WhatsApp message to secure a specific time slot." },
      { q: "Do you do cosmetic dentistry?", a: "We focus primarily on general and restorative dentistry, including tooth-colored fillings and cleanings." },
      { q: "Is the clinic accessible by public transport?", a: "Yes, we are right on the main road near the university gates, easily accessible by bajaj." }
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

  "arsi-smiles-dental": {
    slug: "arsi-smiles-dental",
    name: "Arsi Smiles Dental Clinic",
    tagline: "Modern Dentistry in the Heart of Assela.",
    address: "Central Market Area, Assela, Ethiopia",
    city: "Assela",
    phone: "+251 92 234 5678",
    whatsapp: "251922345678",
    rating: "4.9",
    email: "hello@arsismiles.com",
    hours: "Mon-Sat: 8:30 AM - 6:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Assela+Market&output=embed",
    accentColor: "#8B5CF6",
    accentColorLight: "#EDE9FE",
    doctor: {
      name: "Dr. Mahlet",
      credentials: "DMD — Cosmetic & Restorative Dentistry",
      bio: "Dr. Mahlet combines artistic vision with advanced dental techniques to give her patients the confident, healthy smiles they deserve.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Mahlet"
    },
    services: [
      { name: "Teeth Whitening", description: "Professional bleaching treatments for a noticeably brighter smile." },
      { name: "Dental Crowns", description: "Durable, natural-looking caps to restore damaged or broken teeth." },
      { name: "Cosmetic Fillings", description: "Seamless, tooth-colored restorations that blend perfectly." },
      { name: "General Checkups", description: "Comprehensive evaluations to maintain optimal oral health." },
      { name: "Teeth Cleaning", description: "Thorough plaque and tartar removal for healthy gums." },
      { name: "Dentures", description: "Custom-fitted removable prosthetics for missing teeth." }
    ],
    whyUs: [
      { point: "Specialized in cosmetic smile improvements" },
      { point: "Located right in the bustling central market area" },
      { point: "Modern clinic environment with comfortable seating" },
      { point: "Quick and responsive WhatsApp booking" }
    ],
    testimonials: [
      { name: "Eyerusalem W.", stars: 5, text: "I came in for teeth whitening before my wedding and the results were amazing! Thank you, Dr. Mahlet." },
      { name: "Samuel B.", stars: 5, text: "Very professional and clean. The best dental clinic in Assela." },
      { name: "Tewodros K.", stars: 4, text: "A bit busy because of the market location, but the care is top-notch." }
    ],
    faq: [
      { q: "How long does teeth whitening take?", a: "Our in-office treatment takes about 60 minutes and yields immediate results." },
      { q: "Do you make custom dentures?", a: "Yes, we provide both partial and full custom-fitted dentures." },
      { q: "Do I need an appointment?", a: "Due to high demand, we strongly encourage booking your appointment via WhatsApp beforehand." },
      { q: "Do you treat children?", a: "Yes, we welcome patients of all ages." }
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

  "chilalo-dental-center": {
    slug: "chilalo-dental-center",
    name: "Chilalo Dental Center",
    tagline: "Elevating Dental Care Standards.",
    address: "Bokoji Road, Near the Roundabout, Assela, Ethiopia",
    city: "Assela",
    phone: "+251 93 345 6789",
    whatsapp: "251933456789",
    rating: "4.7",
    email: "info@chilalodental.com",
    hours: "Mon-Sat: 8:00 AM - 7:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Assela+Roundabout&output=embed",
    accentColor: "#F59E0B",
    accentColorLight: "#FEF3C7",
    doctor: {
      name: "Dr. Girma",
      credentials: "DDS — Oral Surgery & Implantology",
      bio: "Dr. Girma brings advanced surgical expertise to Assela, providing complex extractions and implant solutions with a focus on patient comfort.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Girma"
    },
    services: [
      { name: "Oral Surgery", description: "Safe and efficient surgical removal of impacted wisdom teeth." },
      { name: "Dental Implants", description: "Permanent, secure replacements for missing teeth." },
      { name: "Emergency Dental", description: "Immediate care for severe pain, trauma, and infections." },
      { name: "Root Canal Therapy", description: "Advanced endodontic care to relieve pain and save teeth." },
      { name: "Teeth Cleaning", description: "Thorough scaling to maintain healthy gums." },
      { name: "General Consultations", description: "Comprehensive planning for complex dental needs." }
    ],
    whyUs: [
      { point: "Specialist in complex surgical procedures" },
      { point: "Equipped with advanced diagnostic imaging" },
      { point: "Dedicated emergency response during business hours" },
      { point: "Clear, transparent communication of treatment plans" }
    ],
    testimonials: [
      { name: "Aman T.", stars: 5, text: "Had my wisdom tooth removed by Dr. Girma. He is incredibly skilled and the healing process was very fast." },
      { name: "Lulit H.", stars: 5, text: "The clinic is very modern. I felt like I was in great hands during my root canal." },
      { name: "Dereje S.", stars: 4, text: "Excellent surgical care right here in Assela. Very reliable." }
    ],
    faq: [
      { q: "Do you handle dental emergencies?", a: "Yes, we prioritize patients experiencing severe pain or dental trauma." },
      { q: "Is wisdom tooth extraction painful?", a: "We use effective local anesthesia to ensure the procedure is completely painless." },
      { q: "Do you place implants?", a: "Yes, Dr. Girma specializes in the surgical placement of dental implants." },
      { q: "Do I need a referral to see Dr. Girma?", a: "No referral is needed. You can book directly with us via WhatsApp." }
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

  "central-assela-dental": {
    slug: "central-assela-dental",
    name: "Central Assela Dental",
    tagline: "Gentle Care for Growing Smiles.",
    address: "Kebele 02, Near the Main Bus Station, Assela, Ethiopia",
    city: "Assela",
    phone: "+251 94 456 7890",
    whatsapp: "251944567890",
    rating: "4.8",
    email: "care@centralassela.com",
    hours: "Mon-Sat: 8:00 AM - 6:00 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Assela+Bus+Station&output=embed",
    accentColor: "#EC4899",
    accentColorLight: "#FCE7F3",
    doctor: {
      name: "Dr. Helen",
      credentials: "DMD — Pediatric & Family Dentistry",
      bio: "Passionate about children's oral health, Dr. Helen creates a fun, anxiety-free environment to teach kids lifelong healthy habits.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Helen"
    },
    services: [
      { name: "Pediatric Dentistry", description: "Specialized, gentle dental care designed just for kids." },
      { name: "Fluoride Treatments", description: "Protecting young teeth from cavities and decay." },
      { name: "Family Checkups", description: "Convenient routine exams for both parents and children." },
      { name: "Dental Sealants", description: "Preventative coatings applied to the chewing surfaces of back teeth." },
      { name: "Teeth Cleaning", description: "Gentle plaque removal and polishing." },
      { name: "Dental Fillings", description: "Tooth-colored restorations for cavities of all sizes." }
    ],
    whyUs: [
      { point: "Child-friendly waiting area and treatment rooms" },
      { point: "Emphasis on preventative care and education" },
      { point: "Easily accessible location near the bus station" },
      { point: "Patient, caring staff trained to handle dental anxiety" }
    ],
    testimonials: [
      { name: "Tadesse W.", stars: 5, text: "Dr. Helen is amazing with kids! My daughter used to cry at the dentist, but now she looks forward to going." },
      { name: "Biftu M.", stars: 5, text: "A wonderful family clinic. We all get our checkups done here on the same day." },
      { name: "Hana Z.", stars: 4, text: "Very convenient location and they are great at communicating via WhatsApp." }
    ],
    faq: [
      { q: "At what age should I bring my child in?", a: "We recommend a first visit by their first birthday, or when their first tooth appears." },
      { q: "Do you treat adults too?", a: "Yes! While we specialize in kids, we offer comprehensive family dentistry for parents as well." },
      { q: "How do I book for multiple family members?", a: "Simply send us a WhatsApp message with the names and we will find a block of time for you." },
      { q: "Are dental sealants necessary?", a: "They are a highly effective, painless way to prevent cavities in children's molars." }
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

  "ethio-star-dental-assela": {
    slug: "ethio-star-dental-assela",
    name: "Ethio-Star Dental Assela",
    tagline: "Your Smile, Reimagined.",
    address: "Near Assela Hospital, Assela, Ethiopia",
    city: "Assela",
    phone: "+251 95 567 8901",
    whatsapp: "251955678901",
    rating: "4.9",
    email: "appointments@ethiostardental.com",
    hours: "Mon-Sat: 8:00 AM - 7:30 PM",
    mapEmbedUrl: "https://maps.google.com/maps?q=Assela+Hospital&output=embed",
    accentColor: "#0284C7",
    accentColorLight: "#E0F2FE",
    doctor: {
      name: "Dr. Yoseph",
      credentials: "DDS — Prosthodontics & Restorative Dentistry",
      bio: "Dr. Yoseph is committed to restoring full functionality and aesthetics to his patients' smiles, utilizing the latest restorative materials and techniques.",
      photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Yoseph"
    },
    services: [
      { name: "Crowns & Bridges", description: "Precision-crafted restorations to replace and protect teeth." },
      { name: "Dentures", description: "Comfortable, functional full and partial dentures." },
      { name: "Root Canal Therapy", description: "Expert treatment to salvage severely damaged teeth." },
      { name: "Teeth Cleaning", description: "Professional scaling to keep your smile bright and healthy." },
      { name: "Tooth Extraction", description: "Safe extractions, including problematic wisdom teeth." },
      { name: "Smile Makeovers", description: "Comprehensive plans combining multiple treatments for a perfect smile." }
    ],
    whyUs: [
      { point: "Located securely near Assela General Hospital" },
      { point: "Expertise in full mouth restorations and prosthetics" },
      { point: "Extended evening hours to fit your schedule" },
      { point: "Digital record keeping for efficient care" }
    ],
    testimonials: [
      { name: "Fikre T.", stars: 5, text: "Dr. Yoseph fixed a bridge for me that had been bothering me for years. It feels completely natural now." },
      { name: "Meaza K.", stars: 5, text: "Excellent service and very clean facilities. The late closing time is incredibly helpful for my work schedule." },
      { name: "Dawit G.", stars: 4, text: "Highly professional. Booking via WhatsApp was fast and they confirmed right away." }
    ],
    faq: [
      { q: "Do you stay open late?", a: "Yes, we are open until 7:30 PM to accommodate patients after work." },
      { q: "How long does a dental bridge take to make?", a: "Typically, it requires two visits separated by a week or two while the custom bridge is crafted." },
      { q: "Is the clinic near the main hospital?", a: "Yes, we are located just a short walk from Assela General Hospital." },
      { q: "Do I need an appointment?", a: "We strongly recommend booking ahead via WhatsApp to ensure zero waiting time." }
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