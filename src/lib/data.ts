export type Service = {
  slug: string;
  name: string;
  problem: string;
  loss: string;
  solution: string;
  positioning: string;
};

export type Niche = {
  name: string;
  happens: string;
  moneyLost: string;
  automation: string;
};

export const services: Service[] = [
  {
    slug: "ai-call-answering",
    name: "AI Call Answering",
    problem: "Missed calls when busy",
    loss: "Lost bookings",
    solution: "AI voice agent + calendar booking",
    positioning: "Never miss a booking again",
  },
  {
    slug: "appointment-system",
    name: "Appointment System",
    problem: "Manual scheduling & no reminders",
    loss: "No-shows",
    solution: "Booking + auto reminders",
    positioning: "Reduce no-shows",
  },
  {
    slug: "whatsapp-bot",
    name: "WhatsApp Bot",
    problem: "Slow replies to messages",
    loss: "Lost customers",
    solution: "Auto replies + booking bot",
    positioning: "Instant replies = more conversions",
  },
  {
    slug: "lead-qualification",
    name: "Lead Qualification",
    problem: "Time wasted on bad leads",
    loss: "Lost good leads",
    solution: "AI filters leads",
    positioning: "Stop wasting time",
  },
  {
    slug: "follow-up-automation",
    name: "Follow-up Automation",
    problem: "No follow-ups",
    loss: "Lost conversions",
    solution: "Automated sequences",
    positioning: "Convert more leads",
  },
  {
    slug: "instagram-automation",
    name: "Instagram Automation",
    problem: "DMs ignored",
    loss: "Lost engagement",
    solution: "Auto DM + posting",
    positioning: "Turn IG into lead machine",
  },
  {
    slug: "website-chatbot",
    name: "Website Chatbot",
    problem: "Visitors leave",
    loss: "Lost conversions",
    solution: "AI chatbot + lead capture",
    positioning: "Convert visitors",
  },
  {
    slug: "order-system",
    name: "Order System",
    problem: "Manual orders",
    loss: "Errors",
    solution: "Structured booking/order system",
    positioning: "Smooth operations",
  },
  {
    slug: "invoice-automation",
    name: "Invoice Automation",
    problem: "Manual invoices",
    loss: "Delayed payments",
    solution: "Auto invoices + reminders",
    positioning: "Get paid faster",
  },
  {
    slug: "crm-setup",
    name: "CRM Setup",
    problem: "Leads scattered",
    loss: "No tracking",
    solution: "CRM + automation",
    positioning: "All-in-one business system",
  },
  {
    slug: "missed-call-text",
    name: "Missed Call Text",
    problem: "Missed calls ignored",
    loss: "Lost leads",
    solution: "Auto reply on missed call",
    positioning: "Capture every lead",
  },
  {
    slug: "support-automation",
    name: "Support Automation",
    problem: "Repeated queries",
    loss: "Time waste",
    solution: "AI support bot",
    positioning: "Save time",
  },
  {
    slug: "review-system",
    name: "Review System",
    problem: "No review requests",
    loss: "Low ratings",
    solution: "Auto review requests",
    positioning: "More 5-star reviews",
  },
  {
    slug: "lead-funnel",
    name: "Lead Funnel",
    problem: "Ads without system",
    loss: "Wasted ad spend",
    solution: "Landing + automation",
    positioning: "Better conversions",
  },
  {
    slug: "consultation-booking",
    name: "Consultation Booking",
    problem: "Manual booking",
    loss: "Lost clients",
    solution: "Booking + reminders",
    positioning: "Close more clients",
  },
  {
    slug: "multi-channel-system",
    name: "Multi-channel System",
    problem: "Messages everywhere",
    loss: "Missed chats",
    solution: "Unified inbox + automation",
    positioning: "Centralized communication",
  },
];

export const niches: Niche[] = [
  {
    name: "Barbers / Salons",
    happens: "Missed calls during service, manual booking, slow responses",
    moneyLost: "Lost bookings from missed calls",
    automation: "AI call agent, WhatsApp booking, reminders",
  },
  {
    name: "Clinics",
    happens: "Reception overloaded, repetitive queries, rescheduling chaos",
    moneyLost: "Missed calls, no-show patients",
    automation: "AI receptionist, booking/rescheduling bot, reminders",
  },
  {
    name: "Real Estate",
    happens: "Unqualified leads, slow response, poor follow-up",
    moneyLost: "Lost leads to competitors",
    automation: "Lead qualification bot, follow-ups, scheduling",
  },
  {
    name: "Tour / Rental",
    happens: "Repeated inquiries, manual bookings, scattered communication",
    moneyLost: "Slow replies, booking confusion",
    automation: "Chatbot, booking system, Instagram automation",
  },
  {
    name: "Gyms",
    happens: "Leads not followed up, poor conversion",
    moneyLost: "Leads go cold quickly",
    automation: "Lead nurturing bot, trial booking, follow-ups",
  },
  {
    name: "Restaurants",
    happens: "Missed reservation calls, unmanaged DMs",
    moneyLost: "Lost reservations, no repeat customers",
    automation: "Reservation bot, WhatsApp ordering, feedback automation",
  },
  {
    name: "Local Services",
    happens: "Missed calls while on job, no system",
    moneyLost: "Lost jobs",
    automation: "Call answering AI, scheduling, quote automation",
  },
  {
    name: "Car Services",
    happens: "Repeated queries, manual bookings",
    moneyLost: "Missed appointments",
    automation: "Booking bot, reminders, inquiry automation",
  },
  {
    name: "Coaching Centers",
    happens: "Manual lead calling, poor conversion",
    moneyLost: "Lost student enrollments",
    automation: "Lead qualification, course recommendation, follow-ups",
  },
  {
    name: "Recruitment",
    happens: "Manual resume screening, repetitive communication",
    moneyLost: "Time wasted on bad candidates",
    automation: "AI screening, interview scheduling, follow-ups",
  },
  {
    name: "Hotels",
    happens: "Repeated guest queries, multi-platform messages",
    moneyLost: "Lost bookings due to slow response",
    automation: "Guest chatbot, booking automation, reviews",
  },
  {
    name: "Lawyers",
    happens: "Unqualified inquiries, repetitive calls",
    moneyLost: "Time wasted",
    automation: "Client qualification bot, scheduling",
  },
  {
    name: "Interior Designers",
    happens: "Slow responses, unstructured leads",
    moneyLost: "Lost high-ticket clients",
    automation: "Lead capture, portfolio bot, booking",
  },
  {
    name: "E-commerce",
    happens: "Repetitive support queries",
    moneyLost: "Bad reviews, slow response",
    automation: "Support chatbot, order tracking",
  },
  {
    name: "Logistics",
    happens: "Constant tracking queries, manual updates",
    moneyLost: "Operational inefficiency",
    automation: "Tracking bot, notifications",
  },
  {
    name: "Content Creators",
    happens: "Too many DMs, missed opportunities",
    moneyLost: "Lost brand deals",
    automation: "DM filtering, lead capture",
  },
  {
    name: "Education Consultants",
    happens: "Repeated queries, poor follow-up",
    moneyLost: "Lost conversions",
    automation: "Consultation bot, nurturing, booking",
  },
];

export const faqs = [
  {
    question: "How fast can we launch?",
    answer: "MVP automations typically go live in 10-14 days; full rollouts with CRM and multi-channel agents in 3-5 weeks.",
  },
  {
    question: "What tools do you build on?",
    answer: "We use battle-tested AI stacks, CRMs, and messaging APIs (Twilio, WhatsApp Cloud, Meta, email, calendaring).",
  },
  {
    question: "Do you integrate with my existing systems?",
    answer: "Yes. We connect to your CRM, booking tools, calendars, forms, and ads to keep data flowing end-to-end.",
  },
  {
    question: "How do you measure success?",
    answer: "We define conversion and efficiency KPIs per flow, then instrument dashboards to track lift, speed, and leak reduction.",
  },
  {
    question: "Is support included?",
    answer: "We provide hypercare during rollout and offer ongoing optimization retainers if you want us to keep tuning.",
  },
];

export const processSteps = [
  {
    title: "Discover",
    detail: "Map your current lead and ops flows, capture leak points, and define success metrics.",
  },
  {
    title: "Design",
    detail: "Prototype conversations, routing, and data syncs that protect brand voice and compliance.",
  },
  {
    title: "Build",
    detail: "Ship agents, automations, and integrations with rigorous testing and fallback paths.",
  },
  {
    title: "Iterate",
    detail: "Optimize with real usage dataâ€”improving response quality, conversion, and speed continuously.",
  },
];

export const highlights = [
  { label: "Avg. response", value: "<5s", detail: "across assisted channels" },
  { label: "No-show drop", value: "-38%", detail: "after reminders + rebooking" },
  { label: "Lead capture lift", value: "+42%", detail: "from instant follow-ups" },
  { label: "Ops time saved", value: "15-25h/wk", detail: "per team from automation" },
];

export const contactChannels = [
  { label: "Email", value: "arcade.richang@gmail.com" },
  { label: "Phone", value: "+31 6 16960842" },
  { label: "HQ", value: "Remote-first" },
];

