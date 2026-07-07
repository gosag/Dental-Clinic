const clinic = {
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
}

export default clinic
