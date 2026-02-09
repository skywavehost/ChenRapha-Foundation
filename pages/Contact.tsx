
import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you are looking for medical support in Nigeria or wish to partner with us from abroad, our team is here to listen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="font-bold text-xl mb-6">Contact Channels</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-vivid-red text-white flex items-center justify-center rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Email Us</p>
                    <p className="text-sm font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-nature-green text-white flex items-center justify-center rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Nigeria Office</p>
                    <p className="text-sm font-medium">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gold text-white flex items-center justify-center rounded-lg">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">US HQ</p>
                    <p className="text-sm font-medium">{CONTACT_INFO.usPhone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-nature-green text-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <AlertCircle size={24} />
                <h4 className="font-bold">Medical Emergency?</h4>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                If you are in Nigeria and experiencing a severe sickle cell crisis, please visit your nearest hospital immediately. Our support programs provide assistance with medication and transport but are not an emergency dispatch service.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-vivid-red transition-all" 
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-vivid-red transition-all" 
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">How can we help you?</label>
                  <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-vivid-red transition-all">
                    <option>Seeking Medical/Medication Support</option>
                    <option>Seeking Transport Assistance</option>
                    <option>Volunteer Application (Medic/Teacher)</option>
                    <option>Donation Inquiry</option>
                    <option>Genotype Education Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6} 
                    required 
                    className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-vivid-red transition-all" 
                    placeholder="Tell us more about your needs or how you'd like to help..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-vivid-red text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 p-12 rounded-3xl text-center space-y-6 animate-in zoom-in duration-300">
                <div className="flex justify-center">
                  <CheckCircle size={80} className="text-nature-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Message Sent with Grace</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you for reaching out to ChenRapha Foundation. Our team will review your message and get back to you within 48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-nature-green text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
