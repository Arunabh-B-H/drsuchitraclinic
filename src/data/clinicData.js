export const CLINIC_INFO = {
  name: "Dr. Suchithra's Skin and Hair Care / Clinic",
  shortName: "Dr. Suchithra's Clinic",
  doctor: "Dr. Suchithra C",
  degrees: "MBBS, MD, DNB (Dermatology, Venereology & Leprosy)",
  role: "Founder & Chief Consultant Dermatologist",
  phone: "+91 90747 14272",
  phoneClean: "919074714272",
  experienceYears: "11+",
  reviewCount: "688+",
  rating: "5.0",
  consultationFee: "₹350 – ₹500",
  opTimings: "Monday – Saturday: 5:00 PM – 8:00 PM",
  opDays: "Monday to Saturday (Sunday Closed)",
  timingsShort: "Mon – Sat: 5:00 PM – 8:00 PM",
  address: "Opposite Chaithanya Opticals, Kunjalamoodu, Karamana, Thiruvananthapuram, Kerala 695002",
  landmark: "Opposite Chaithanya Opticals, Kunjalamoodu Junction",
  city: "Thiruvananthapuram (Trivandrum)",
  state: "Kerala",
  pin: "695002",
  hospitals: [
    "KIMSHEALTH Medical Centre",
    "Attukal Devi Hospital",
    "NIMS Hospital"
  ],
  quote: "Healthy skin is not achieved through cosmetic shortcuts—it is built on rigorous medical science and genuine clinical trust.",
  philosophy: "Evidence-Based Dermatology & Trust-Centric Aesthetics (Zero commercial salon gimmicks; purely doctor-administered medical treatments)",
  whatsappUrl: "https://wa.me/919074714272?text=Hello%20Dr.%20Suchithra%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20at%20your%20Karamana%20clinic.",
  instagramUrl: "https://www.instagram.com/dr_suchithra_skin_clinic/",
  instagramHandle: "@dr_suchithra_skin_clinic",
  facebookUrl: "https://www.facebook.com/drsuchithraclinic/",
  facebookPage: "Dr. Suchithra Skin & Hair Clinic",
  googleReviewUrl: "https://maps.google.com/?q=Dr+Suchithra+Skin+and+Hair+Clinic+Karamana+Trivandrum"
};

export const QUICK_CONCERNS = [
  { id: "acne", label: "Acne & Scars", icon: "Sparkles", category: "clinical", defaultTreatment: "Severe Acne & Scar Revision" },
  { id: "hair", label: "Hair Fall & PRP", icon: "Flame", category: "trichology", defaultTreatment: "Platelet-Rich Plasma (PRP) Therapy" },
  { id: "warts", label: "Warts & Skin Tags", icon: "Zap", category: "aesthetic", defaultTreatment: "Radiofrequency (RF) Ablation" },
  { id: "melasma", label: "Melasma & Pigmentation", icon: "Sun", category: "aesthetic", defaultTreatment: "Medical Chemical Peels" },
  { id: "psoriasis", label: "Psoriasis & Allergies", icon: "Shield", category: "clinical", defaultTreatment: "Psoriasis, Eczema & Allergies" },
  { id: "laser", label: "Laser Hair Reduction", icon: "Activity", category: "aesthetic", defaultTreatment: "Laser Hair Reduction" }
];

export const SERVICE_CATEGORIES = [
  {
    id: "aesthetic",
    title: "Aesthetic & Cosmetology",
    tagline: "High-Margin, Doctor-Administered Procedures",
    badge: "Clinical Aesthetics",
    services: [
      {
        id: "peels",
        name: "Medical Chemical Peels",
        tag: "Physician Formulated",
        description: "Customized Glycolic, Salicylic, and Yellow peels for stubborn melasma, tanning, post-inflammatory hyperpigmentation, and active acne.",
        details: "Unlike beauty parlor peels which can cause irreversible PIH on Indian skin, Dr. Suchithra personally assesses your Fitzpatrick skin phototype and chooses pH-stabilized medical grades.",
        indication: "Stubborn Melasma, Sun Tanning, Acne Breakouts",
        duration: "30 - 45 mins",
        sessions: "4 - 6 sessions spaced 3 weeks apart",
        doctorLedAdvantage: "100% Doctor Application (No technician hands)",
        suitableFor: "Fitzpatrick Skin Types III – V"
      },
      {
        id: "rf-ablation",
        name: "Radiofrequency (RF) Ablation",
        tag: "Scarless & Painless",
        description: "Painless, scarless micro-surgical precision removal of warts, skin tags, DPN (dermatosis papulosa nigra), and benign facial moles.",
        details: "High-frequency radio waves vaporize the lesion at cellular level under local topical numbing. No stitches, minimal recovery downtime, with zero collateral tissue burning.",
        indication: "Skin Tags, Facial Warts, Moles, Milia, Seborrheic Keratoses",
        duration: "15 - 30 mins",
        sessions: "Single session typically sufficient",
        doctorLedAdvantage: "Instant cosmetic clearance with clinical histology review if required",
        suitableFor: "All ages & body zones"
      },
      {
        id: "medi-facials",
        name: "Advanced Medi-Facials & Rejuvenation",
        tag: "Skin Barrier Restoration",
        description: "Clinical hydration, hyperpigmentation correction, and anti-aging skin barrier restoration combining medical active infusion.",
        details: "Formulated without synthetic fragrance or comedogenic salon oils. Designed to soothe reactive, sensitive, or photodamaged skin while rebuilding the stratum corneum.",
        indication: "Dull Complexion, Photoaging, Dehydrated Skin Barrier",
        duration: "45 mins",
        sessions: "Maintenance every 4 - 6 weeks",
        doctorLedAdvantage: "Custom cocktail of hyaluronic acid, antioxidants, and ceramides",
        suitableFor: "Sensitive and stressed skin"
      },
      {
        id: "laser-hair",
        name: "Laser Hair Reduction",
        tag: "Permanent Diode Laser",
        description: "Permanent diode laser treatments for unwanted facial and body hair with integrated sapphire cooling technology.",
        details: "Safe, US-FDA standard medical diode wavelengths calibrated specifically for Indian hair shafts, safely targeting melanin in the follicle without heating the epidermal pigment.",
        indication: "PCOS Hirsutism, Facial Hair, Underarms, Full Body",
        duration: "20 - 60 mins",
        sessions: "6 - 8 sessions for 85-95% reduction",
        doctorLedAdvantage: "Endocrine & hormonal checkup protocol before laser initiation",
        suitableFor: "Women & Men"
      }
    ]
  },
  {
    id: "clinical",
    title: "Clinical Dermatology & Chronic Conditions",
    tagline: "Hospital-Grade Diagnostic & Systemic Management",
    badge: "Evidence-Based Medicine",
    services: [
      {
        id: "acne-scars",
        name: "Severe Acne & Scar Revision",
        tag: "Targeted Prescriptions + Subcision",
        description: "Targeted prescription protocols (including retinoid therapy) combined with subcision, TCA cross, and micro-needling for depressed scars.",
        details: "Root-cause medical approach targeting sebum hyperproduction, Cutibacterium acnes colonization, follicular hyperkeratinization, and dermal remodeling.",
        indication: "Cystic Acne, Ice-Pick Scars, Boxcar Scars, Rolling Scars",
        duration: "45 mins",
        sessions: "3 - 5 sessions for deep scar remodeling",
        doctorLedAdvantage: "Hospital-pedigree prescription management minimizing recurrence",
        suitableFor: "Teens & Adults with active or scarred acne"
      },
      {
        id: "psoriasis-eczema",
        name: "Psoriasis, Eczema & Allergies",
        tag: "Immune-Mediated Care",
        description: "Long-term immune-mediated skin disorder management with personalized barrier therapy, biologics guidance, and flare-prevention protocols.",
        details: "Compassionate chronic disease care. Dr. Suchithra creates steroid-sparing maintenance plans to keep patients clear and symptom-free without rebound flares.",
        indication: "Plaque Psoriasis, Atopic Dermatitis, Contact Dermatitis, Urticaria",
        duration: "Comprehensive Doctor Consultation",
        sessions: "Ongoing clinical monitoring",
        doctorLedAdvantage: "Steroid-sparing protocols & holistic trigger identification",
        suitableFor: "Chronic pediatric and adult cases"
      },
      {
        id: "vitiligo-pigment",
        name: "Vitiligo & Pigmentary Disorders",
        tag: "Medical Repigmentation",
        description: "Medical repigmentation, targeted topical immunomodulators, oral antioxidants, and specialized phototherapy guidance.",
        details: "Careful mapping of lesion stability, Wood's lamp examination, and scientific repigmentation strategies designed to halt spreading and stimulate melanocyte migration.",
        indication: "Segmental & Generalized Vitiligo, Post-Burn Hypopigmentation",
        duration: "Diagnostic Mapping",
        sessions: "Personalized multi-month timeline",
        doctorLedAdvantage: "Objective Wood's lamp assessment & evidence-based stabilization",
        suitableFor: "Patients seeking honest, ethical prognosis"
      },
      {
        id: "infections",
        name: "Fungal & Bacterial Infections",
        tag: "Diagnostic Testing & Eradication",
        description: "Diagnostic testing, KOH mounts, and systemic eradication protocols for recalcitrant dermatophytosis, candidiasis, and bacterial folliculitis.",
        details: "In Kerala's humid climate, steroid-modified fungal infections (Tinea incognito) are rampant. Dr. Suchithra de-prescribes harmful cocktail OTC creams and cures the infection permanently.",
        indication: "Recalcitrant Ringworm (Tinea), Boils, Impetigo, Folliculitis",
        duration: "Clinical Consultation",
        sessions: "Follow-up until negative diagnostic clearance",
        doctorLedAdvantage: "Zero harmful steroid creams; 100% fungal mycological eradication",
        suitableFor: "Patients struggling with stubborn recurring infections"
      }
    ]
  },
  {
    id: "trichology",
    title: "Trichology & Scalp Health",
    tagline: "Autologous Growth Factor Therapy & Scalp Therapeutics",
    badge: "Specialized Hair Care",
    services: [
      {
        id: "prp-therapy",
        name: "Platelet-Rich Plasma (PRP) Therapy",
        tag: "Autologous Growth Factors",
        description: "Autologous growth-factor injections for hair thinning, androgenetic alopecia, and telogen effluvium, directly administered by Dr. Suchithra.",
        details: "Uses high-yield double-spin centrifugation of the patient's own blood to concentrate platelets 5x to 7x. Injected with micro-fine insulin needles into the scalp dermis to awaken dormant follicles.",
        indication: "Male & Female Pattern Baldness, Post-COVID Hair Shedding",
        duration: "45 mins per session",
        sessions: "4 - 6 sessions spaced 4 weeks apart",
        doctorLedAdvantage: "100% Prepared and injected by Dr. Suchithra personally",
        suitableFor: "Grade 1 - 5 hair thinning & androgenetic loss"
      },
      {
        id: "scalp-care",
        name: "Clinical Scalp Care & Alopecia Areata",
        tag: "Therapeutic Scalp Solutions",
        description: "Specialized therapy for severe chronic dandruff, seborrheic dermatitis, itchy scalp, and intralesional therapy for patchy alopecia areata.",
        details: "Scalp dermoscopy to differentiate between fungal overgrowth, inflammatory eczema, and autoimmune follicle attack, followed by targeted anti-inflammatory regimens.",
        indication: "Stubborn Dandruff, Scalp Psoriasis, Patchy Hair Loss",
        duration: "Diagnostic Exam + Treatment",
        sessions: "Bi-weekly to monthly as indicated",
        doctorLedAdvantage: "Microscopic dermoscopic evaluation of follicular ostia",
        suitableFor: "Recurrent flake, itching, and patchy bald spots"
      }
    ]
  }
];

export const PATIENT_REVIEWS = [
  {
    id: 1,
    name: "Aravind R. Nair",
    avatarLetter: "A",
    avatarBg: "#1A73E8", // Google Blue
    locality: "Karamana, Trivandrum",
    timeAgo: "2 weeks ago",
    date: "Verified Google Review • 2 weeks ago",
    rating: 5,
    treatmentTag: "CYSTIC ACNE & SCAR REVISION",
    category: "acne",
    text: "Dr. Suchithra is hands down the best dermatologist in Trivandrum. I spent thousands at commercial cosmetic clinics with zero results. Dr. Suchithra explained the exact medical science, prescribed the right medicine with no unnecessary products, and my skin cleared within 8 weeks. The result exceeded my expectations — I feel so much more confident now."
  },
  {
    id: 2,
    name: "Dr. Priya M. Pillai",
    avatarLetter: "P",
    avatarBg: "#EA4335", // Google Red
    locality: "Kowdiar, Thiruvananthapuram",
    timeAgo: "1 month ago",
    date: "Verified Google Review • 1 month ago",
    rating: 5,
    treatmentTag: "AUTOLOGOUS PRP HAIR THERAPY",
    category: "hair",
    text: "I had an excellent clinical experience at this clinic. As a fellow medical professional, I appreciate her rigorous hospital pedigree from KIMSHEALTH. She personally administered all my PRP sessions herself rather than handing me over to a nurse or technician. Hair thinning has stopped completely and density has visibly improved. I would suggest you visit with confidence."
  },
  {
    id: 3,
    name: "Biju Varghese",
    avatarLetter: "B",
    avatarBg: "#34A853", // Google Green
    locality: "East Fort / Attukal, Trivandrum",
    timeAgo: "3 weeks ago",
    date: "Verified Google Review • 3 weeks ago",
    rating: 5,
    treatmentTag: "RADIOFREQUENCY WART REMOVAL",
    category: "warts",
    text: "Had multiple stubborn warts on my neck for over 3 years. Dr. Suchithra removed over 15 tags in 20 minutes with radiofrequency ablation. Very welcoming and friendly doctor. Completely painless after topical numbing cream, no scars left at all. Highly recommend Dr. Suchithra's clinic for any skin tag issues."
  },
  {
    id: 4,
    name: "Meera Krishnan",
    avatarLetter: "M",
    avatarBg: "#F59E0B", // Google Amber
    locality: "Kunjalamoodu, Karamana",
    timeAgo: "2 months ago",
    date: "Verified Google Review • 2 months ago",
    rating: 5,
    treatmentTag: "MEDICAL CHEMICAL PEEL & MELASMA",
    category: "pigment",
    text: "Suffered from post-pregnancy melasma patches on my cheeks. Honestly, I went in just hoping the hyperpigmentation would look a little better. Dr. Suchithra used gentle doctor-grade yellow peels and strict sunscreen guidance. The dark patches have faded by 90%! Special thanks to Dr. Suchithra and her caring staff."
  },
  {
    id: 5,
    name: "Sreenath Sreekumar",
    avatarLetter: "S",
    avatarBg: "#0D9488", // Medical Teal
    locality: "Vazhuthacaud, Trivandrum",
    timeAgo: "2 months ago",
    date: "Verified Google Review • 2 months ago",
    rating: 5,
    treatmentTag: "GENERAL DERMATOLOGY & ALLERGIES",
    category: "eczema",
    text: "I visited Dr. Suchithra's Clinic today. Very welcoming and friendly staff. She listened patiently, explained everything clearly and made me feel comfortable throughout the visit. I got a great experience and good treatment with very reasonable consultation charges. You can visit with complete confidence."
  },
  {
    id: 6,
    name: "Riswan K.",
    avatarLetter: "R",
    avatarBg: "#1A73E8", // Google Blue
    locality: "Kazhakoottam / Technopark",
    timeAgo: "2 months ago",
    date: "Verified Google Review • 2 months ago",
    rating: 5,
    treatmentTag: "CLINICAL DERMOSCOPY & SCALP HEALTH",
    category: "hair",
    text: "Recently I had visited the clinic for stubborn dandruff and hair shedding. Before the treatment, I was always self-conscious. Dr. Suchithra diagnosed the root cause with a dermatoscope and prescribed targeted barrier shampoos. The scalp itching disappeared in 4 days and hair fall drastically reduced. Thank you all for making the experience positive and stress free."
  },
  {
    id: 7,
    name: "Maidhily M. V.",
    avatarLetter: "M",
    avatarBg: "#EA4335", // Google Red
    locality: "Pattom, Thiruvananthapuram",
    timeAgo: "1 month ago",
    date: "Verified Google Review • 1 month ago",
    rating: 5,
    treatmentTag: "PEDIATRIC ECZEMA & SKIN BARRIER",
    category: "eczema",
    text: "I had an excellent doctor experience of my life at this clinic. My 4-year-old had severe recurring eczema rashes. Dr. Suchithra listened patiently, did not rush, and prescribed safe non-steroidal emollients. Within 10 days the flare was under total control. The doctor and staff are very friendly. I highly recommend Dr. Suchithra's Clinic."
  },
  {
    id: 8,
    name: "Ananya Nair",
    avatarLetter: "A",
    avatarBg: "#8B5CF6", // Google Purple
    locality: "Sasthamangalam, Trivandrum",
    timeAgo: "3 weeks ago",
    date: "Verified Google Review • 3 weeks ago",
    rating: 5,
    treatmentTag: "PERMANENT DIODE LASER CARE",
    category: "pigment",
    text: "Started my facial laser hair reduction with Dr. Suchithra. What sets her clinic apart is that every single laser pulse is calibrated for Indian skin phototypes with zero burning or pigment changes. Painless sapphire cooling and genuinely visible reduction from session one."
  }
];

export const QUIZ_QUESTIONS = [
  {
    step: 1,
    question: "What is your primary area of concern?",
    description: "Select the primary focus for your doctor consultation",
    options: [
      { id: "face-acne", label: "Acne, Pimples & Scars", icon: "Sparkles", category: "clinical" },
      { id: "hair-scalp", label: "Hair Thinning, Loss & Dandruff", icon: "Flame", category: "trichology" },
      { id: "tags-warts", label: "Warts, Moles & Skin Tags", icon: "Zap", category: "aesthetic" },
      { id: "pigment-melasma", label: "Dark Spots, Melasma & Dullness", icon: "Sun", category: "aesthetic" },
      { id: "chronic-rash", label: "Itchy Rash, Eczema or Psoriasis", icon: "Shield", category: "clinical" }
    ]
  },
  {
    step: 2,
    question: "How long have you been experiencing this condition?",
    description: "Helps Dr. Suchithra evaluate acute vs. chronic pathology",
    options: [
      { id: "recent", label: "Recent flare-up (< 1 month)", subtitle: "Sudden onset or seasonal change" },
      { id: "moderate", label: "A few months (1 – 6 months)", subtitle: "Persistent despite basic skincare" },
      { id: "chronic", label: "Chronic / Long-standing (> 6 months)", subtitle: "Requires specialized medical intervention" },
      { id: "recurrent", label: "Recurring repeatedly", subtitle: "Keeps coming back after stopping creams" }
    ]
  },
  {
    step: 3,
    question: "What prior treatments have you tried?",
    description: "Prevents drug resistance and identifies prior steroid exposure",
    options: [
      { id: "none", label: "No prior medical treatment", subtitle: "Looking for first-line doctor guidance" },
      { id: "otc", label: "Tried OTC creams / Salon facials", subtitle: "No permanent improvement seen" },
      { id: "prescribed", label: "Prior prescriptions from other clinics", subtitle: "Seeking hospital-grade second opinion" },
      { id: "home", label: "Home remedies / Herbal pastes", subtitle: "Sometimes worsened irritation" }
    ]
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Treating Practitioner",
    salon: "Beauty parlor technician / Beautician",
    clinic: "Dr. Suchithra C, MBBS, MD, DNB (Dual Board Certified)"
  },
  {
    feature: "Skin Peels & Acids",
    salon: "Unbuffered generic salon acids (High risk of burning brown skin)",
    clinic: "pH-calibrated medical peels customized to Fitzpatrick Phototype"
  },
  {
    feature: "PRP for Hair Loss",
    salon: "Often handled by untrained assistants; generic centrifugation",
    clinic: "100% personally prepared and injected by Dr. Suchithra"
  },
  {
    feature: "Wart & Mole Removal",
    salon: "Harmful chemical etching or scarring acids",
    clinic: "Micro-surgical Radiofrequency (RF) with zero scarring"
  },
  {
    feature: "Product Philosophy",
    salon: "High-pressure sales of expensive salon packages",
    clinic: "Ethical prescription with zero unnecessary cosmetic products"
  },
  {
    feature: "Consultation Fee",
    salon: "Free 'consult' leading to ₹15,000+ salon packages",
    clinic: "Honest nominal fee (₹350 – ₹500) with clear medical counsel"
  }
];

export const FAQS = [
  {
    q: "Do I need a prior appointment to see Dr. Suchithra?",
    a: "Yes. Consultations are conducted Monday through Saturday from 5:00 PM to 8:00 PM by prior appointment to prevent patient crowding and ensure Dr. Suchithra spends 15-20 minutes with each patient. You can reserve your slot via WhatsApp or call +91 90747 14272."
  },
  {
    q: "What is the consultation fee at the Karamana clinic?",
    a: "The consultation fee is nominal at ₹350 to ₹500, making hospital-grade dermatological care accessible without corporate markup."
  },
  {
    q: "Are chemical peels and lasers safe for South Indian skin?",
    a: "Yes, when administered by an MD Dermatologist. Dr. Suchithra uses specialized medical-grade solutions and calibrated laser wavelengths specifically validated for Fitzpatrick skin phototypes III, IV, and V, preventing post-inflammatory hyperpigmentation (PIH)."
  },
  {
    q: "Is PRP therapy for hair fall performed by Dr. Suchithra herself?",
    a: "Absolutely. At Dr. Suchithra's clinic, every PRP session—from blood centrifugation oversight to micro-scalp injections—is 100% performed by Dr. Suchithra herself, ensuring sterile clinical standards and precise follicular depth."
  },
  {
    q: "Where is the clinic located and is parking available?",
    a: "The clinic is located in Karamana, Thiruvananthapuram, directly Opposite Chaithanya Opticals at Kunjalamoodu Junction (PIN: 695002). Convenient two-wheeler and street four-wheeler parking are available nearby."
  }
];
