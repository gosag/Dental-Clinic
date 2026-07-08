// Centralized clinic configurations for multi-tenant dental clinic preview system

export const CLINICS = {
  "hundaol-dental": {
    slug: "hundaol-dental",
    name: "Hundaol Dental Clinic",
    tagline: "Exceptional Dental Care in the Heart of Adama.",
    address: "G7Q6+RJR, Adama, Ethiopia",
    phone: "+251 91 197 0772",
    whatsapp: "251911970772",
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
    address: "G7RC+VG7, Adama, Ethiopia",
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
    address: "Elemo Kiltu Street's Tana Mestewat Shopping Center 1st Floor, Near National building Shopping Mall, Adama",
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
