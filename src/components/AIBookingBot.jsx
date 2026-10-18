import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, Sparkles, Calendar, Clock, 
  Phone, CheckCircle2, ChevronRight, AlertCircle, ArrowUpRight,
  ShieldCheck, RefreshCw, MessageCircle
} from 'lucide-react';
import { CLINIC_INFO, SERVICE_CATEGORIES } from '../data/clinicData';

// Knowledge base responses for natural clinical conversation
const CLINICAL_KNOWLEDGE = [
  {
    keywords: ["acne", "pimple", "breakout", "scar", "cystic", "pustule"],
    topic: "Severe Acne & Scar Revision",
    response: "For active acne and post-acne scarring, Dr. Suchithra follows an evidence-based clinical protocol rather than cosmetic parlor facials. This combines targeted medical prescriptions (such as retinoid therapy) with in-clinic procedures like subcision, TCA Cross, and chemical peels for deep scar remodeling. Would you like me to help you reserve an evening consultation slot?",
    suggestedSlots: true
  },
  {
    keywords: ["hair", "fall", "thinning", "prp", "bald", "scalp", "alopecia", "shedding"],
    topic: "Hair Fall & Autologous PRP Therapy",
    response: "Dr. Suchithra specializes in Autologous Platelet-Rich Plasma (PRP) therapy for androgenetic alopecia and diffuse hair shedding. Unlike salons where assistants perform treatments, Dr. Suchithra personally prepares and administers every PRP injection under sterile medical conditions. She also checks for hormonal, nutritional, and thyroid triggers.",
    suggestedSlots: true
  },
  {
    keywords: ["wart", "tag", "mole", "dpn", "growth", "rf", "ablation"],
    topic: "Radiofrequency (RF) Wart & Skin Tag Removal",
    response: "Warts and skin tags are painlessly removed using high-frequency Radiofrequency (RF) ablation under topical numbing. The procedure takes only 15–20 minutes, leaves no scars, and requires no stitches. Healing occurs cleanly in 4–7 days. Would you like to schedule an RF removal appointment?",
    suggestedSlots: true
  },
  {
    keywords: ["pigment", "melasma", "tan", "dark", "spot", "peel", "glow", "dull"],
    topic: "Medical Chemical Peels & Melasma",
    response: "Dr. Suchithra formulates pH-calibrated medical peels (Glycolic, Salicylic, and Yellow peels) specifically tested for South Indian Fitzpatrick skin types (III–V). This prevents Post-Inflammatory Hyperpigmentation (PIH) that often occurs with unregulated salon peels. Most patients see visible fading in 4–6 sessions.",
    suggestedSlots: true
  },
  {
    keywords: ["fee", "cost", "price", "charge", "consultation fee", "rate"],
    topic: "Consultation Fee",
    response: "Dr. Suchithra charges a very nominal consultation fee of ₹350 to ₹500 at her Karamana clinic. There is zero corporate hospital markup and she strictly avoids prescribing unnecessary expensive cosmetic products.",
    suggestedSlots: false
  },
  {
    keywords: ["timing", "time", "hour", "hours", "when", "open", "slot", "days", "sunday"],
    topic: "Clinic OP Timings",
    response: "Dr. Suchithra's clinic is open Monday through Saturday from 5:00 PM to 8:00 PM (By prior appointment). The clinic is closed on Sundays. Consultations take 15–20 minutes per patient to ensure thorough diagnosis.",
    suggestedSlots: true
  },
  {
    keywords: ["location", "address", "where", "landmark", "karamana", "map", "reach"],
    topic: "Clinic Address & Landmark",
    response: "The clinic is located Opposite Chaithanya Opticals, Kunjalamoodu, Karamana, Thiruvananthapuram (PIN: 695002). It is just 2.5 km from Thampanoor Railway Station and 3 km from East Fort, with convenient two-wheeler and street four-wheeler parking nearby.",
    suggestedSlots: false
  },
  {
    keywords: ["pedigree", "kims", "experience", "qualification", "degree", "doctor", "suchithra"],
    topic: "Doctor Credentials",
    response: "Dr. Suchithra C holds MBBS, MD, and DNB in Dermatology, Venereology & Leprosy. She has 11+ years of specialized clinical experience and previously served as Consultant Dermatologist at KIMSHEALTH Medical Centre, Attukal Devi Hospital, and NIMS Hospital.",
    suggestedSlots: false
  }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello! I am Dr. Suchithra's AI Clinical Assistant. How can I help you today? You can ask me about skin & hair concerns, consultation fees, or book an evening appointment directly to Dr. Suchithra's WhatsApp desk.",
    timestamp: 'Just now'
  }
];

const QUICK_ACTIONS = [
  "📅 Book Appointment",
  "💰 Consultation Fee & Hours",
  "✨ Acne & Scars",
  "💇 Hair Fall & PRP",
  "📍 Clinic Location & Landmark"
];

export default function AIBookingBot({ initialOpen = false, onClose }) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [bookingState, setBookingState] = useState({
    active: false,
    step: 0, // 0: concern, 1: date, 2: slot, 3: name, 4: complete
    concern: "",
    date: "",
    slot: "5:30 PM",
    name: ""
  });

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (initialOpen) {
      setIsOpen(true);
    }
  }, [initialOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // focus input on desktop
      if (window.innerWidth > 768) {
        inputRef.current?.focus();
      }
    }
  }, [isOpen, messages, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  const generateWhatsAppUrl = (concern, date, slot, name) => {
    const safeConcern = concern || "General Dermatology Consultation";
    const safeDate = date || "Earliest available date";
    const safeSlot = slot || "5:00 PM – 8:00 PM";
    const namePart = name ? `%0APatient Name: ${name}` : "";
    const text = `Hello Dr. Suchithra, I booked a consultation via your Clinic AI Assistant.%0A%0A*Concern:* ${safeConcern}%0A*Preferred Date:* ${safeDate}%0A*Time Slot:* ${safeSlot}${namePart}%0A%0APlease confirm my appointment slot at your Karamana clinic.`;
    return `https://wa.me/${CLINIC_INFO.phoneClean}?text=${text}`;
  };

  const handleSendMessage = (textToSend = null) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Process logic
    setTimeout(() => {
      processBotResponse(text);
      setIsTyping(false);
    }, 700);
  };

  const processBotResponse = (userInput) => {
    const lower = userInput.toLowerCase();

    // 1. If currently in interactive booking flow
    if (bookingState.active) {
      if (bookingState.step === 0) {
        // user gave concern
        setBookingState((prev) => ({ ...prev, concern: userInput, step: 1 }));
        addBotMessage(`Got it: ${userInput}. What day would you prefer for your visit? (Dr. Suchithra consults Monday through Saturday, 5:00 PM to 8:00 PM). You can say "Tomorrow", "Saturday", or type a date.`);
        return;
      } else if (bookingState.step === 1) {
        // user gave date
        setBookingState((prev) => ({ ...prev, date: userInput, step: 2 }));
        addBotMessage(`Perfect, noted for ${userInput}. Which time slot suits you best? Options: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM, 7:00 PM, or 7:30 PM.`);
        return;
      } else if (bookingState.step === 2) {
        // user gave slot
        setBookingState((prev) => ({ ...prev, slot: userInput, step: 3 }));
        addBotMessage(`Great, ${userInput} reserved. Lastly, may I have your Name (and optional contact number)?`);
        return;
      } else if (bookingState.step === 3) {
        // user gave name
        const completedBooking = { ...bookingState, name: userInput, step: 4 };
        setBookingState(completedBooking);
        
        const waLink = generateWhatsAppUrl(completedBooking.concern, completedBooking.date, completedBooking.slot, userInput);

        addBotMessage(
          `Thank you, ${userInput}! Your consultation request is prepared:\n\n• Concern: ${completedBooking.concern}\n• Date: ${completedBooking.date}\n• Evening Slot: ${completedBooking.slot}\n• Location: Opp. Chaithanya Opticals, Karamana\n• Nominal Fee: ₹350–₹500\n\nTap the button below to send this directly to Dr. Suchithra's WhatsApp desk to lock in your slot:`,
          {
            type: 'booking_card',
            booking: completedBooking,
            waLink: waLink
          }
        );
        return;
      }
    }

    // 2. Trigger booking flow if user mentions "book", "appointment", "schedule", "reserve"
    if (lower.includes("book") || lower.includes("appointment") || lower.includes("reserve") || lower.includes("schedule") || lower.includes("consult")) {
      setBookingState({
        active: true,
        step: 0,
        concern: "",
        date: "",
        slot: "5:30 PM",
        name: ""
      });
      addBotMessage("I would be glad to help you book your consultation with Dr. Suchithra C! First, what is your primary skin or hair concern? (e.g. Acne, Hair fall & PRP, Wart removal, Melasma, or General checkup)");
      return;
    }

    // 3. Check knowledge base
    const matched = CLINICAL_KNOWLEDGE.find((item) => 
      item.keywords.some((kw) => lower.includes(kw))
    );

    if (matched) {
      addBotMessage(matched.response, matched.suggestedSlots ? {
        type: 'action_chips',
        actions: ["Book This Treatment on WhatsApp", "Check Consultation Hours", "Speak with Clinic"]
      } : null);
      return;
    }

    // 4. Default intelligent fallback
    addBotMessage(
      "Dr. Suchithra C provides personalized physician-led clinical dermatology at her Karamana clinic. Would you like to book a consultation slot, or ask about our specific procedures like Medical Peels, PRP for Hair Loss, or RF Wart Removal?",
      {
        type: 'action_chips',
        actions: ["📅 Book an Appointment", "📍 Where is the clinic?", "💰 What is the consultation fee?"]
      }
    );
  };

  const addBotMessage = (text, meta = null) => {
    const botMsg = {
      id: Date.now(),
      sender: 'bot',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      meta: meta
    };
    setMessages((prev) => [...prev, botMsg]);
  };

  const handleChipClick = (action) => {
    if (action.includes("Book") || action.includes("Appointment")) {
      handleSendMessage("I want to book an appointment");
    } else if (action.includes("Fee")) {
      handleSendMessage("What is the consultation fee?");
    } else if (action.includes("Acne")) {
      handleSendMessage("Tell me about acne and scar treatment");
    } else if (action.includes("Hair")) {
      handleSendMessage("Tell me about hair fall and PRP therapy");
    } else if (action.includes("Location") || action.includes("Where")) {
      handleSendMessage("Where is the clinic located?");
    } else if (action.includes("Hours") || action.includes("Timing")) {
      handleSendMessage("What are your clinic timings?");
    } else if (action.includes("Speak")) {
      window.location.href = `tel:${CLINIC_INFO.phoneClean}`;
    } else {
      handleSendMessage(action);
    }
  };

  return (
    <>
      {/* Floating Launcher Button (visible when bot is closed) */}
      {!isOpen && (
        <div 
          className="ai-bot-floating-trigger"
          style={{
            position: 'fixed',
            bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
            right: '14px',
            zIndex: 95
          }}
        >
          {/* Main Launcher Pill / Circle */}
          <button
            onClick={handleOpen}
            aria-label="Open Dr. Suchithra AI Assistant"
            className="ai-launcher-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'linear-gradient(135deg, #0F172A 0%, #134E4A 55%, #0D9488 100%)',
              color: '#FFFFFF',
              padding: '0.55rem 1.1rem 0.55rem 0.55rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 28px -4px rgba(13, 148, 136, 0.5), 0 0 0 1px rgba(45, 212, 191, 0.35)',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              e.currentTarget.style.boxShadow = '0 18px 36px -4px rgba(13, 148, 136, 0.55), 0 0 0 1.5px rgba(45, 212, 191, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 28px -4px rgba(13, 148, 136, 0.5), 0 0 0 1px rgba(45, 212, 191, 0.35)';
            }}
          >
            {/* Doctor Portrait Thumbnail with Live Green Dot */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #2DD4BF',
                flexShrink: 0,
                backgroundColor: '#0F172A'
              }}>
                <img 
                  src="/assets/dr-suchithra.jpg" 
                  alt="Dr. Suchithra AI Assistant"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-1px',
                right: '-1px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#22C55E',
                border: '2px solid #0F172A',
                boxShadow: '0 0 8px #22C55E'
              }} />
            </div>

            <div style={{ textAlign: 'left' }} className="ai-launcher-text">
              <div style={{ fontSize: '0.86rem', fontWeight: 800, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>AI Clinic Bot</span>
                <Sparkles size={13} color="#2DD4BF" />
              </div>
              <div style={{ fontSize: '0.68rem', color: '#99F6E4', fontWeight: 600 }}>
                Ask or Book Instantly
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Interactive Chat Window Modal / Sheet */}
      {isOpen && (
        <div 
          className="ai-bot-container"
          style={{
            position: 'fixed',
            bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))',
            right: '20px',
            width: '400px',
            maxWidth: 'calc(100vw - 30px)',
            height: '620px',
            maxHeight: 'calc(100vh - 40px)',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 25px 60px -10px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(13, 148, 136, 0.2)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.25s ease forwards'
          }}
        >
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #134E4A 100%)',
            color: '#FFFFFF',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #2DD4BF',
                  backgroundColor: '#E2E8F0'
                }}>
                  <img 
                    src="/assets/dr-suchithra.jpg" 
                    alt="Dr. Suchithra AI"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '11px',
                  height: '11px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  border: '2px solid #0F172A'
                }} />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontSize: '0.98rem', fontWeight: 800 }}>Dr. Suchithra's AI Care</span>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    background: 'rgba(45, 212, 191, 0.2)',
                    color: '#2DD4BF',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(45, 212, 191, 0.3)'
                  }}>
                    WhatsApp Connected
                  </span>
                </div>
                <p style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '0.1rem' }}>
                  Karamana Clinic • OP: 5:00 PM – 8:00 PM
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                onClick={() => {
                  setMessages(INITIAL_MESSAGES);
                  setBookingState({ active: false, step: 0, concern: "", date: "", slot: "5:30 PM", name: "" });
                }}
                aria-label="Restart chat"
                title="Restart conversation"
                style={{
                  color: '#94A3B8',
                  padding: '0.35rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                <RefreshCw size={15} />
              </button>

              <button
                onClick={handleClose}
                aria-label="Close chat window"
                style={{
                  color: '#94A3B8',
                  padding: '0.35rem',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94A3B8'}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backgroundColor: '#F8FAFC'
          }}>
            {/* Clinic Trust Ribbon inside chat */}
            <div style={{
              background: '#F0FDFA',
              border: '1px solid #CCFBF1',
              borderRadius: '12px',
              padding: '0.65rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: '#0F766E'
            }}>
              <ShieldCheck size={16} style={{ color: '#0D9488', flexShrink: 0 }} />
              <span>Nominal Fee: <strong>₹350–₹500</strong> • 100% Doctor Consultation</span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  gap: '0.25rem'
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.85rem 1.05rem',
                    borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    backgroundColor: msg.sender === 'user' ? '#0D9488' : '#FFFFFF',
                    color: msg.sender === 'user' ? '#FFFFFF' : '#1E293B',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                    border: msg.sender === 'user' ? 'none' : '1px solid #E2E8F0',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {msg.text}

                  {/* Render interactive WhatsApp booking card if generated */}
                  {msg.meta?.type === 'booking_card' && (
                    <div style={{
                      marginTop: '0.85rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid #E2E8F0'
                    }}>
                      <a
                        href={msg.meta.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{
                          width: '100%',
                          padding: '0.75rem 1rem',
                          fontSize: '0.88rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          borderRadius: '10px'
                        }}
                      >
                        <MessageCircle size={17} fill="#FFFFFF" />
                        <span>Send to Dr. Suchithra on WhatsApp</span>
                      </a>
                    </div>
                  )}

                  {/* Render Action Chips */}
                  {msg.meta?.type === 'action_chips' && (
                    <div style={{
                      marginTop: '0.75rem',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem'
                    }}>
                      {msg.meta.actions.map((act) => (
                        <button
                          key={act}
                          onClick={() => handleChipClick(act)}
                          style={{
                            background: '#F0FDFA',
                            color: '#0D9488',
                            border: '1px solid #99F6E4',
                            borderRadius: '9999px',
                            padding: '0.35rem 0.75rem',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#0D9488';
                            e.currentTarget.style.color = '#FFFFFF';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F0FDFA';
                            e.currentTarget.style.color = '#0D9488';
                          }}
                        >
                          {act}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <span style={{ fontSize: '0.68rem', color: '#94A3B8', padding: '0 0.35rem' }}>
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.65rem 1rem',
                borderRadius: '16px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                width: 'fit-content'
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D9488', animation: 'pulseSubtle 1s infinite' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D9488', animation: 'pulseSubtle 1s infinite 0.2s' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#0D9488', animation: 'pulseSubtle 1s infinite 0.4s' }} />
                <span style={{ fontSize: '0.74rem', color: '#64748B', marginLeft: '0.3rem' }}>Dr. Suchithra's AI is replying...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips Bar */}
          <div style={{
            padding: '0.5rem 0.85rem',
            background: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            gap: '0.45rem',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}>
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action}
                onClick={() => handleChipClick(action)}
                style={{
                  background: '#F1F5F9',
                  color: '#334155',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '9999px',
                  fontSize: '0.74rem',
                  fontWeight: 600,
                  border: '1px solid #E2E8F0',
                  flexShrink: 0,
                  cursor: 'pointer'
                }}
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div style={{
            padding: '0.75rem 1rem',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask a question or book slot..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              style={{
                flex: 1,
                padding: '0.65rem 0.95rem',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                fontSize: '0.88rem',
                outline: 'none',
                fontFamily: 'inherit',
                backgroundColor: '#F8FAFC'
              }}
            />

            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim()}
              aria-label="Send message"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: inputText.trim() ? '#0D9488' : '#CBD5E1',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                transition: 'background-color 0.2s',
                flexShrink: 0
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
