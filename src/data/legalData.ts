import type { LegalSection } from "@/components/legal/LegalPage";

export const LEGAL_LAST_UPDATED = "November 7, 2026";

const CONTACT_BLOCK = [
  "<b>One Shot Marketing</b>",
  "3064 Hurontario St., Mississauga, Ontario, Canada",
  "148 St Surrey, BC V3S 3E8, Canada",
  'Phone: <a href="tel:+14388554446">+1 (438) 855-4446</a>',
  'Email: <a href="mailto:info@oneshotmarketing.ca">info@oneshotmarketing.ca</a>',
];

export const privacyPolicy: {
  intro: string;
  sections: LegalSection[];
} = {
  intro:
    "Your privacy matters to us. This policy explains what personal information One Shot Marketing collects through oneshotmarketing.ca, how we use it, and the choices you have.",
  sections: [
    {
      id: "who-we-are",
      heading: "Who We Are",
      body: [
        "One Shot Marketing (“One Shot”, “we”, “us” or “our”) is a digital marketing and website development agency based in Ontario, Canada. We handle personal information in accordance with Canada’s <i>Personal Information Protection and Electronic Documents Act</i> (PIPEDA) and applicable provincial privacy laws.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      body: ["We only collect the information needed to respond to you and provide our services:"],
      list: [
        "<b>Enquiry and quote forms</b> – your name, email address, phone number, the industry you select and any message you write.",
        "<b>Chat assistant</b> – the name, phone number and email address you type into the chat on our website.",
        "<b>Phone, email and WhatsApp</b> – the details you share when you contact us directly.",
        "<b>Usage data</b> – pages visited, approximate location, device and browser type, and how you reached our site, collected through cookies and analytics tools (see “Cookies and Analytics”).",
      ],
    },
    {
      id: "how-we-use",
      heading: "How We Use Your Information",
      list: [
        "To respond to your enquiry and prepare quotes or proposals.",
        "To deliver, manage and support the services you request from us.",
        "To follow up about your project or request by phone, email or messaging apps.",
        "To understand how visitors use our website so we can improve its content and performance.",
        "To measure the effectiveness of our advertising campaigns.",
        "To meet our legal, accounting and regulatory obligations.",
      ],
      after: ["We do not sell your personal information."],
    },
    {
      id: "consent",
      heading: "Consent",
      body: [
        "By submitting a form, using the chat assistant or contacting us, you consent to us collecting and using your information for the purposes described in this policy. You may withdraw your consent at any time by contacting us, subject to legal or contractual restrictions. Withdrawing consent may limit our ability to respond to your request.",
      ],
    },
    {
      id: "cookies-analytics",
      heading: "Cookies and Analytics",
      body: [
        "Our website uses cookies and similar technologies, including <b>Google Analytics</b> and <b>Google Tag Manager</b>, to understand site traffic and measure our marketing. These tools may also be used for advertising measurement by Google. They collect information about your visit in a form that does not directly identify you.",
        'You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>. Some parts of the site may not work as intended if cookies are disabled.',
      ],
    },
    {
      id: "sharing",
      heading: "How We Share Information",
      body: ["We only share personal information with trusted service providers who help us operate our business, such as:"],
      list: [
        "Our customer relationship management (CRM) and enquiry management provider, which stores the details you submit through our forms and chat assistant.",
        "Website hosting, analytics and advertising providers (for example, Google).",
        "Communication tools such as email, phone and WhatsApp.",
      ],
    },
    {
      id: "storage-transfers",
      heading: "Data Storage and International Transfers",
      body: [
        "Some of our service providers may store or process information outside Canada, including in the United States and India. When this happens, your information may be subject to the laws of those countries. We take reasonable steps to ensure our providers protect your information appropriately.",
      ],
    },
    {
      id: "retention",
      heading: "Data Retention",
      body: [
        "We keep personal information only as long as necessary to fulfil the purposes described in this policy, including providing our services and meeting legal, tax and accounting requirements. When it is no longer needed, we securely delete or anonymize it.",
      ],
    },
    {
      id: "security",
      heading: "Security",
      body: [
        "We use reasonable administrative, technical and physical safeguards to protect personal information against loss, theft and unauthorized access. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your Rights",
      body: ["Subject to applicable law, you may:"],
      list: [
        "Request access to the personal information we hold about you.",
        "Ask us to correct inaccurate or incomplete information.",
        "Withdraw your consent or ask us to delete your information.",
        "Unsubscribe from marketing communications at any time.",
        'File a complaint with the <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">Office of the Privacy Commissioner of Canada</a> if you have concerns about how we handle your information.',
      ],
    },
    {
      id: "third-party-links",
      heading: "Third-Party Websites",
      body: [
        "Our website may link to third-party websites and social media platforms such as Facebook, Instagram, LinkedIn, Google Maps and WhatsApp. We are not responsible for the privacy practices of those sites, and we encourage you to read their privacy policies.",
      ],
    },
    {
      id: "children",
      heading: "Children’s Privacy",
      body: [
        "Our services are intended for businesses and are not directed to children. We do not knowingly collect personal information from anyone under the age of 16.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised “Last updated” date.",
      ],
    },
    {
      id: "contact",
      heading: "Contact Us",
      body: [
        "If you have questions about this Privacy Policy or would like to exercise your privacy rights, please contact us:",
        CONTACT_BLOCK.join("<br />"),
      ],
    },
  ],
};

export const termsAndConditions: {
  intro: string;
  sections: LegalSection[];
} = {
  intro:
    "These Terms and Conditions govern your use of oneshotmarketing.ca and the digital marketing and website development services provided by One Shot Marketing. Please read them carefully.",
  sections: [
    {
      id: "acceptance",
      heading: "Acceptance of Terms",
      body: [
        "By accessing or using our website, you agree to these Terms and Conditions and our <a href=\"/privacy-policy\">Privacy Policy</a>. If you do not agree, please do not use our website.",
      ],
    },
    {
      id: "services",
      heading: "Our Services",
      body: [
        "One Shot Marketing provides digital marketing and technology services, including website design and development, search engine optimization (SEO), social media marketing, performance marketing, OTA listing management and CRM solutions for businesses in the hotel, restaurant, immigration, beauty and clothing industries, among others.",
        "The specific scope, deliverables, timelines and fees for any project are set out in a separate proposal, quote or service agreement. If there is a conflict between these Terms and a signed agreement, the signed agreement prevails.",
      ],
    },
    {
      id: "website-use",
      heading: "Use of Our Website",
      body: ["You agree to use our website only for lawful purposes. You must not:"],
      list: [
        "Submit false, misleading or someone else’s information through our forms or chat assistant.",
        "Attempt to gain unauthorized access to the website, its servers or related systems.",
        "Introduce viruses, malicious code or anything that may disrupt the website.",
        "Copy, scrape or reuse website content for commercial purposes without our written permission.",
      ],
    },
    {
      id: "quotes-payments",
      heading: "Quotes, Fees and Payments",
      list: [
        "Free quotes and consultations are provided without obligation and are valid for the period stated in the quote.",
        "Fees, payment schedules and any deposits are defined in your proposal or service agreement.",
        "Advertising spend on third-party platforms (such as Google or Meta) is billed separately unless stated otherwise.",
        "Late or missed payments may result in work being paused until the account is brought up to date.",
      ],
    },
    {
      id: "client-responsibilities",
      heading: "Client Responsibilities",
      body: [
        "To deliver results on time, clients agree to provide accurate information, timely feedback and approvals, and any content, logos, images, credentials or access required for the project. Clients confirm they own or have permission to use all materials they provide to us.",
      ],
    },
    {
      id: "results",
      heading: "No Guarantee of Specific Results",
      body: [
        "Digital marketing results depend on many factors outside our control, including search engine algorithms, advertising platform policies, competition and market conditions. While we work hard to achieve the best possible outcomes, we do not guarantee specific rankings, traffic, leads, bookings or revenue.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual Property",
      body: [
        "All content on this website, including text, graphics, logos, images and design, is owned by or licensed to One Shot Marketing and is protected by intellectual property laws. You may not reproduce or distribute it without our prior written consent.",
        "Ownership of project deliverables transfers to the client upon full payment, unless otherwise agreed in writing. We may display completed work in our portfolio and marketing materials unless the client requests otherwise in writing.",
      ],
    },
    {
      id: "third-party",
      heading: "Third-Party Platforms and Links",
      body: [
        "Our services may rely on third-party platforms such as Google, Meta, OTA platforms, hosting providers and CRM tools. We are not responsible for changes, outages or policies of those platforms. Links to third-party websites are provided for convenience only and do not imply endorsement.",
      ],
    },
    {
      id: "liability",
      heading: "Limitation of Liability",
      body: [
        "Our website and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, One Shot Marketing is not liable for any indirect, incidental, special or consequential damages, or for any loss of profits, data or business, arising from your use of the website or our services. Our total liability for any claim relating to a project will not exceed the fees paid to us for that project.",
      ],
    },
    {
      id: "indemnity",
      heading: "Indemnification",
      body: [
        "You agree to indemnify and hold One Shot Marketing harmless from any claims, damages or expenses arising from your breach of these Terms or from materials you provide to us that infringe the rights of others.",
      ],
    },
    {
      id: "termination",
      heading: "Termination",
      body: [
        "Either party may end an engagement as set out in the applicable service agreement. Fees for work completed up to the termination date remain payable. We may suspend access to our website for anyone who violates these Terms.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing Law",
      body: [
        "These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada that apply there. Any disputes will be handled by the courts located in Ontario.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to These Terms",
      body: [
        "We may update these Terms and Conditions from time to time. Changes take effect when posted on this page with a revised “Last updated” date. Continued use of the website means you accept the updated Terms.",
      ],
    },
    {
      id: "contact",
      heading: "Contact Us",
      body: ["If you have any questions about these Terms and Conditions, please contact us:", CONTACT_BLOCK.join("<br />")],
    },
  ],
};
