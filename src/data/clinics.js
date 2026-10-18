// Centralized clinic configurations for multi-tenant dental clinic preview system
  
export const CLINICS = {
  
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
  
  // ==========================================
  // CLIENT 1: DR. AMIR DENTAL CLINIC
  // ==========================================
  

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