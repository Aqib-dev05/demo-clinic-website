import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, DollarSign, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { services, faqs } from '../data/mockData';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary-600 shrink-0">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-gray-900 mb-2"
              >
                {service.title}
              </motion.h1>
              <p className="text-lg text-gray-600 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  Our {service.title.toLowerCase()} is designed to provide you with the most accurate diagnosis and effective treatment plans. We utilize state-of-the-art technology combined with years of clinical expertise to ensure the best possible outcomes for our patients.
                </p>
                <p>
                  Whether you are seeking preventative care or treatment for a specific condition, our team is dedicated to supporting your health journey every step of the way.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment Process</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-100 text-primary-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {idx + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <h4 className="font-bold text-gray-900">{step}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Duration</p>
                    <p className="text-lg font-bold text-gray-900">{service.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Starting Price</p>
                    <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-600 mb-6 text-sm">
                  Ready to schedule your {service.title.toLowerCase()}? Book an appointment online now.
                </p>
                <Button as="link" to="/appointment" variant="primary" className="w-full">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Common Questions" title="Frequently Asked Questions" />
          <div className="mt-12">
            <FAQ faqs={faqs.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
