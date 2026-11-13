/**
 * Templar Transport Ltd — all site copy.
 * VERBATIM from templartransport.com (Nov 2026) unless marked "UI" (neutral interface wording)
 * or "derived" (rephrased only from facts stated on the old site — nothing new invented).
 * NOTE: the old /services page had no content at all; the services below are built strictly
 * from facts in the old Home/About copy.
 */

export const site = {
  name: 'Templar Transport Ltd',
  short: 'Templar Transport',
  url: 'https://www.templartransport.com',
  strap: 'Temperature Controlled Distribution', // from the logo
  founded: 1980,
  phone: '01747 824436',
  phoneHref: 'tel:+441747824436',
  mobiles: [
    { label: '07739 618069', href: 'tel:+447739618069' },
    { label: '07860 353470', href: 'tel:+447860353470' },
  ],
  email: 'info@templartransport.com',
  address: { lines: ['Templar Transport Ltd', 'Riversmeet', 'High Street', 'Gillingham', 'Dorset'], postcode: 'SP8 4AA', town: 'Gillingham', county: 'Dorset' },
  google: {
    url: 'https://maps.google.com/?cid=10247050785948431342',
    name: 'Templar Refrigerated Transport Services',
    score: '4.8',
    count: 5,
  },
};

/* The three slider lines from every page of the old site — verbatim */
export const facts = [
  'Over 30 years experience in the transportation of chilled and frozen goods',
  'Family run business established in 1980',
  'Small team of professional and friendly drivers',
];

export const home = {
  title: 'Templar Transport – Templar | Temperature Controlled Distribution',
  description: 'Established since 1980, Templar Transport Ltd provides temperature controlled distribution throughout the UK. Family run, chilled and frozen goods, vans to articulated lorries.',
  h1: 'Welcome to Templar Transport Ltd',
  welcome: 'Established since 1980, Templar Transport Ltd provides temperature controlled distribution throughout the UK. With a range of vehicles sizes available, this family run business prides itself on their professional and flexible service.',
};

export const about = {
  title: 'About Templar Transport – Templar Transport',
  description: 'Templar Transport is a family run business established in 1980 to provide temperature controlled distribution across the UK — chilled and frozen goods, van to articulated lorry.',
  h1: 'About Templar Transport',
  p1: 'Templar Transport is a family run business established in 1980 to provide temperature controlled distribution across the UK. We have over 30 years experience in the transportation of chilled and frozen goods throughout the country. With a selection of modern vehicles ranging from van to articulated lorry no job is too big or small for us.',
  p2: 'So whether a one off job or regular contract we will be happy to help.',
};

/* derived — every line traceable to the old copy above */
export const services = [
  { slug: 'chilled', n: '01', h: 'Chilled goods', p: 'Temperature controlled transportation of chilled goods throughout the UK.', src: 'Over 30 years experience in the transportation of chilled and frozen goods' },
  { slug: 'frozen', n: '02', h: 'Frozen goods', p: 'Temperature controlled transportation of frozen goods throughout the UK.', src: 'Over 30 years experience in the transportation of chilled and frozen goods' },
  { slug: 'fleet', n: '03', h: 'Van to articulated lorry', p: 'A selection of modern vehicles ranging from van to articulated lorry — no job is too big or small for us.', src: 'About page' },
  { slug: 'contracts', n: '04', h: 'One-off jobs or regular contracts', p: 'So whether a one off job or regular contract we will be happy to help.', src: 'About page' },
];

export const servicesPage = {
  title: 'Services – Templar Transport',
  description: 'Temperature controlled distribution throughout the UK: chilled and frozen goods, vehicles from van to articulated lorry, one-off jobs or regular contracts.',
  h1: 'Services',
};

export const contact = {
  title: 'Contact – Templar Transport',
  description: 'Contact Templar Transport Ltd, Gillingham, Dorset — 01747 824436, 07739 618069, 07860 353470 or info@templartransport.com.',
  h1: 'Contact',
};

/* Testimonials — verbatim from the old site's two posts */
export const testimonials = [
  { slug: 'joubere', company: 'Joubere ltd', name: 'Kevin Cahill', role: 'supply chain manager', logo: '/img/joubere.webp', title: 'Testimonial from Joubere ltd – Kevin Cahill – supply chain manager', quote: 'We have worked with Templar Transport for a number of years. Templar consistently provide a reliable, first class service with the flexibility to react quickly to the ever changing demands of the food manufacturing industry.' },
  { slug: 'addo', company: 'Addo food group', name: 'Trevor cook', role: 'supply chain manager', logo: '/img/addo.webp', title: 'Testimonial from Trevor cook – Addo food group – supply chain manager', quote: 'Templar Transport offer a flexible service and are always helpful when it comes to a job at short notice. Their range of vehicles also mean we can count on them for a variety of deliveries.' },
];

/* Google review — verbatim (the only text review on their Google listing) */
export const googleReviews = [
  { name: 'Phillipe Lloyd', stars: 5, when: '4 years ago', text: 'Great service. Clean trailers. Always on time.' },
];

/* Local SEO — towns around their Gillingham (SP8) base and Henstridge yard; every page states only real facts */
export type Area = { slug: string; name: string; county: string };
export const areas: Area[] = [
  { slug: 'gillingham', name: 'Gillingham', county: 'Dorset' },
  { slug: 'shaftesbury', name: 'Shaftesbury', county: 'Dorset' },
  { slug: 'sturminster-newton', name: 'Sturminster Newton', county: 'Dorset' },
  { slug: 'sherborne', name: 'Sherborne', county: 'Dorset' },
  { slug: 'blandford-forum', name: 'Blandford Forum', county: 'Dorset' },
  { slug: 'dorchester', name: 'Dorchester', county: 'Dorset' },
  { slug: 'poole', name: 'Poole', county: 'Dorset' },
  { slug: 'bournemouth', name: 'Bournemouth', county: 'Dorset' },
  { slug: 'henstridge', name: 'Henstridge', county: 'Somerset' },
  { slug: 'templecombe', name: 'Templecombe', county: 'Somerset' },
  { slug: 'wincanton', name: 'Wincanton', county: 'Somerset' },
  { slug: 'yeovil', name: 'Yeovil', county: 'Somerset' },
  { slug: 'frome', name: 'Frome', county: 'Somerset' },
  { slug: 'mere', name: 'Mere', county: 'Wiltshire' },
  { slug: 'warminster', name: 'Warminster', county: 'Wiltshire' },
  { slug: 'salisbury', name: 'Salisbury', county: 'Wiltshire' },
];
export const area = (s: string) => areas.find((a) => a.slug === s);

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Areas', href: '/areas' },
  { label: 'Contact', href: '/contact' },
];
