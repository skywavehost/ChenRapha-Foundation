
import React from 'react';
import { MISSION, VISION, CONTACT_INFO } from '../constants.ts';
import { Shield, Users, Heart, Anchor, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            ChenRapha Foundation is a U.S.-based nonprofit dedicated to transforming the lives of individuals living with sickle cell disease in Nigeria.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why We Exist</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Millions of Nigerians live with sickle cell disease, and many face preventable crises due to poverty, lack of medication, and limited genotype awareness. We believe no child or young adult should suffer simply because they lack knowledge or resources.
              </p>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="text-gray-700 italic font-medium">
                  "Our work focuses on two core areas: Sickle Cell Support & Crisis Prevention, and Genotype Education for Students. Through partnerships with Nigerian healthcare professionals, teachers, and community volunteers, we provide a lifeline to those who need it most."
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By fundraising in the United States and deploying resources through our network of volunteer doctors, nurses, and teachers in Nigeria, we bridge the gap between those who want to help and those in desperate need of healing grace.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/11/800/600" 
                alt="Nigerian Medical Outreach" 
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-gold -z-10 rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Pillars of ChenRapha</h2>
            <p className="text-gray-600">The values that guide every decision we make.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-50 text-vivid-red flex items-center justify-center rounded-xl mb-6">
                <Heart size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Grace (Chen)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We provide help unconditionally, treating every patient with the dignity and grace they deserve regardless of their circumstances.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 text-nature-green flex items-center justify-center rounded-xl mb-6">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Healing (Rapha)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our ultimate goal is physical, emotional, and systemic healing for Nigerian communities affected by sickle cell.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-50 text-gold flex items-center justify-center rounded-xl mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-xl mb-3">Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We believe in the power of partnership. Local Nigerian doctors and teachers are the heart of our operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Double */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <Anchor className="absolute top-10 right-10 text-white opacity-10 group-hover:scale-125 transition-transform" size={120} />
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="mr-3 text-gold" size={32} />
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {MISSION}
              </p>
            </div>
            <div className="bg-vivid-red text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <Users className="absolute top-10 right-10 text-white opacity-10 group-hover:scale-125 transition-transform" size={120} />
              <h3 className="text-3xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-gold" size={32} />
                Our Vision
              </h3>
              <p className="text-red-50 leading-relaxed text-lg">
                {VISION}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
