import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, Briefcase } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function About() {
  const milestones = [
    { year: '2012', title: 'Medical Degree', description: 'Graduated with honors from Johns Hopkins University School of Medicine.' },
    { year: '2015', title: 'Residency Completed', description: 'Completed residency at Massachusetts General Hospital with a focus on internal medicine.' },
    { year: '2018', title: 'Specialized Fellowship', description: 'Completed advanced fellowship in Cardiovascular Disease.' },
    { year: '2020', title: 'Clinic Foundation', description: 'Established Dr. Hastings Clinic to provide accessible, high-quality healthcare.' },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-primary-600">Our Clinic</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Dedicated to providing excellence in healthcare with compassion, integrity, and innovation.
          </motion.p>
        </div>
      </div>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary-100 rounded-[2rem] transform -rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1594824436998-ef227521746c?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Hastings Professional Portrait" 
                className="rounded-[2rem] shadow-xl object-cover h-[600px] w-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr. William Hastings, MD</h2>
              <p className="text-primary-600 font-semibold text-lg mb-6">Chief Medical Officer</p>
              
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  Dr. Hastings is a board-certified physician with over a decade of experience in internal medicine and cardiovascular health. Known for a patient-first approach, Dr. Hastings believes in building long-lasting relationships with patients to understand their unique health needs fully.
                </p>
                <p>
                  "My philosophy is simple: treat every patient as if they were a member of my own family. I strive to combine the latest medical advancements with old-fashioned compassion to deliver the best possible care."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Board Certified</h4>
                    <p className="text-sm text-gray-500">Internal Medicine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Awards</h4>
                    <p className="text-sm text-gray-500">Top Doctor 2022</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Our Mission" title="Why We Do What We Do" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: Heart, title: 'Compassion', desc: 'We treat every patient with empathy, dignity, and respect, ensuring a comfortable healing environment.' },
              { icon: BookOpen, title: 'Excellence', desc: 'We are committed to continuous learning and applying the latest medical practices for optimal outcomes.' },
              { icon: Briefcase, title: 'Integrity', desc: 'We uphold the highest ethical standards in all our medical and business practices.' }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Journey" title="Professional Timeline" />
          <div className="mt-12 relative border-l-2 border-primary-100 ml-3 md:ml-1/2">
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative pl-8"
              >
                <div className="absolute w-4 h-4 bg-primary-600 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
                <span className="text-primary-600 font-bold text-lg">{milestone.year}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
