import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Users, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import { services, testimonials, faqs } from '../data/mockData';

export default function Home() {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '5,000+' },
    { icon: Clock, label: 'Years Experience', value: '10+' },
    { icon: Activity, label: 'Medical Services', value: '20+' },
    { icon: ShieldCheck, label: 'Satisfaction Rate', value: '98%' },
  ];

  const features = [
    'Experienced & Compassionate Doctor',
    'Modern Medical Facilities',
    'Personalized Treatment Plans',
    'Patient-Centered Care',
    'Minimal Wait Times',
    'Comprehensive Diagnostics',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-primary-50 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                Accepting New Patients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your Health Is Our <span className="text-primary-600">Top Priority</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience world-class medical care with a personal touch. Dr. Hastings provides comprehensive, compassionate healthcare for you and your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as="link" to="/appointment" variant="primary" size="lg">
                  Book an Appointment
                </Button>
                <Button as="link" to="/services" variant="outline" size="lg">
                  View Our Services
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-teal-100 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt="Doctor with patient" 
                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 glass">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Certified</p>
                  <p className="text-sm text-gray-500">Medical Professional</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-600 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Our Services" 
            title="Comprehensive Medical Care" 
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button as="link" to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Hastings" 
                className="rounded-3xl shadow-xl object-cover h-[600px] w-full"
              />
              <div className="absolute top-10 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-2xl font-bold text-primary-600 mb-1">10+</p>
                <p className="text-gray-600 font-medium">Years of experience in changing lives through better health.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="About Dr. Hastings" title="Dedicated to Your Well-being" centered={false} />
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over a decade of clinical experience, Dr. Hastings is committed to providing compassionate, evidence-based care. We believe in treating the whole person, not just the symptoms, ensuring that you receive personalized attention for your unique health needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button as="link" to="/about" variant="primary">
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Testimonials" title="What Our Patients Say" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
