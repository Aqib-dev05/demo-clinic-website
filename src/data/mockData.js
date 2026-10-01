import { Stethoscope, Activity, HeartPulse, Brain, Baby, Bone } from 'lucide-react';

export const services = [
  {
    id: 'general-consultation',
    title: 'General Consultation',
    icon: Stethoscope,
    description: 'Comprehensive health check-ups and medical consultations for patients of all ages.',
    duration: '30 min',
    price: '$50',
    benefits: ['Detailed health assessment', 'Personalized advice', 'Prescription management'],
    process: ['Initial screening', 'Doctor consultation', 'Treatment plan', 'Follow-up scheduling'],
  },
  {
    id: 'cardiology',
    title: 'Cardiology Clinic',
    icon: HeartPulse,
    description: 'Advanced cardiac care, including ECG, echocardiograms, and heart health management.',
    duration: '45 min',
    price: '$120',
    benefits: ['State-of-the-art diagnostics', 'Expert cardiologists', 'Preventative care'],
    process: ['Medical history review', 'Physical examination', 'Diagnostic tests', 'Results discussion'],
  },
  {
    id: 'neurology',
    title: 'Neurology',
    icon: Brain,
    description: 'Specialized treatment for neurological disorders and brain health management.',
    duration: '60 min',
    price: '$150',
    benefits: ['Comprehensive neurological exam', 'Advanced imaging analysis', 'Targeted therapy'],
    process: ['Cognitive assessment', 'Motor skills test', 'Reflex evaluation', 'Treatment planning'],
  },
  {
    id: 'pediatrics',
    title: 'Pediatric Care',
    icon: Baby,
    description: 'Compassionate medical care for infants, children, and adolescents.',
    duration: '40 min',
    price: '$80',
    benefits: ['Child-friendly environment', 'Vaccination tracking', 'Growth monitoring'],
    process: ['Vitals check', 'Growth measurement', 'Doctor consultation', 'Parental guidance'],
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    icon: Bone,
    description: 'Treatment of bone, joint, and muscle conditions with modern therapeutic approaches.',
    duration: '45 min',
    price: '$110',
    benefits: ['Pain management', 'Mobility improvement', 'Post-surgery rehabilitation'],
    process: ['Joint mobility test', 'X-ray evaluation', 'Physical therapy plan', 'Progress tracking'],
  },
  {
    id: 'diagnostic-tests',
    title: 'Diagnostic Lab',
    icon: Activity,
    description: 'Accurate and timely laboratory testing and diagnostics services.',
    duration: '20 min',
    price: 'Varies',
    benefits: ['Quick results', 'Wide range of tests', 'Hygienic environment'],
    process: ['Sample collection', 'Lab analysis', 'Quality control check', 'Report delivery'],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Dr. Hastings is incredibly attentive and caring. The clinic staff made me feel welcome, and my treatment was explained clearly. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=44',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'I have been bringing my family here for years. The level of professionalism and modern facilities give us peace of mind every time we visit.',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 4,
    text: 'Booking an appointment was seamless, and I barely had to wait to see the doctor. The cardiology team is top-notch.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can easily book an appointment by clicking the "Book Appointment" button on our website, or by calling our clinic directly at +1 (555) 123-4567.',
  },
  {
    question: 'Do you accept health insurance?',
    answer: 'Yes, we accept most major health insurance plans. Please contact our billing department or check with your provider to verify coverage.',
  },
  {
    question: 'What should I bring to my first visit?',
    answer: 'Please bring your valid ID, insurance card, a list of current medications, and any past medical records that may be relevant to your consultation.',
  },
  {
    question: 'Are walk-ins welcome?',
    answer: 'While we highly recommend booking an appointment to avoid long wait times, we do accommodate walk-ins for urgent general consultations based on availability.',
  },
];
