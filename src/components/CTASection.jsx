import React from 'react';
import { Button } from './Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Prioritize Your Health?
        </h2>
        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
          Book your appointment today and experience personalized medical care from our expert professionals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button as="link" to="/appointment" variant="white" size="lg">
            Book an Appointment
          </Button>
          <Button as="link" to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
