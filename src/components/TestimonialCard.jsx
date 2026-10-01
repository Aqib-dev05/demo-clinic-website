import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex text-amber-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">Verified Patient</p>
        </div>
      </div>
    </motion.div>
  );
}
