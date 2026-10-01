import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { services } from '../data/mockData';
import SectionHeading from '../components/SectionHeading';
import { Button } from '../components/Button';

export default function Appointment() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Book Online" 
          title="Schedule an Appointment" 
          centered={true}
        />
        
        <div className="max-w-5xl mx-auto mt-12 grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Thank you, {formData.fullName}. Your appointment request has been received. Our team will contact you shortly to confirm the exact time.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Book Another Appointment
                  </Button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Service */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gray-400" /> Select Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Choose a service...</option>
                    {services.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" /> Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Select time...</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-gray-400" /> Additional Notes (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your symptoms or reason for visit..."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                  Confirm Appointment Request
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-primary-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold mb-6 relative z-10">Clinic Information</h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary-200 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Opening Hours</h4>
                    <p className="text-primary-100 text-sm mt-1">Mon - Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-primary-100 text-sm">Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary-200 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Emergency Contact</h4>
                    <p className="text-primary-100 text-sm mt-1">+1 (555) 911-0000</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to expect?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  No long waiting times
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  Professional and caring staff
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  State-of-the-art facilities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
