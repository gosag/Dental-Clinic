// Centralized clinic configurations for multi-tenant dental clinic preview system
  
export const CLINICS = {
  
"dental-clinic": {
  slug: "dental-clinic",
  name: "Adama Dental Clinic",
  tagline: "Exceptional Dental Care in the Heart of Adama.",
  address: "Mebrat Haile, Kebele 02, Adama, Ethiopia",
  city: "Adama",
  phone: "+251 90 000 0000", 
  whatsapp: "251900000000",
  rating: "5",
  email: "info@example.com",
  hours: "Mon-Sun: 8:00 AM - 8:00 PM",
  mapEmbedUrl: "https://maps.google.com/maps?q=Posta+Adama,Ethiopia&output=embed",
  accentColor: "#2563EB",
  accentColorLight: "#DBEAFE",
  doctor: {
    name: "Dr. Abebe Bekele",
    credentials: "DDS — General & Preventive Dentistry",
    bio: "Dedicated to providing gentle, comprehensive dental care and educating patients on long-term oral health.",
    photo: "https://placehold.co/400x400/eeeeee/31343c?text=Dr.+Abebe+Bekele"
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
    { name: "Chala D.", stars: 5, text: "They took great care of my kids. The doctor is very patient and explains everything clearly." },
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