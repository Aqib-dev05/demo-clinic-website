import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {subtitle && (
        <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h2>
    </motion.div>
  );
}
