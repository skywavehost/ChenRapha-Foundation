
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, BookOpen, Truck, ShieldCheck, ArrowRight, Play, Users } from 'lucide-react';
import { MISSION, VISION } from '../constants.ts';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Community Outreach" 
            className="w-full h-full object-cover opacity-50 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-vivid-red text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 animate-bounce">
              Nigeria Relief Program
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Touching Millions of Lives <span className="text-gold italic">with Grace</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Empowering Nigerians living with sickle cell through education, medication assistance, and compassionate healthcare support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/donate" 
                className="bg-vivid-red hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-xl hover:-translate-y-1"
              >
                <Heart size={20} fill="currentColor" />
                <span>Donate Now</span>
              </Link>
              <Link 
                to="/help" 
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-xl hover:-translate-y-1"
              >
                <span>Get Support</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Using Direct MP4 Link */}
      <section className="relative -mt-16 md:-mt-24 mb-20 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
            >
              <source src="https://skywavehost.com/wp-content/uploads/2024/12/Dannytechnet-Capain.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block p-4 bg-red-50 rounded-2xl">
                <ShieldCheck size={48} className="text-vivid-red" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Dedicated to Breaking the Cycle</h2>
              <p className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-gold pl-6">
                "Inspired by the meaning of Chen (grace) and Rapha (healing), we exist to bring hope and practical support to families affected by sickle cell."
              </p>
              <p className="text-gray-600 leading-relaxed">
                {MISSION}
              </p>
              <Link to="/about" className="inline-flex items-center text-vivid-red font-bold hover:underline group">
                Learn more about us <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full" alt="Health support" />
                <div className="bg-gold p-8 rounded-2xl text-white">
                  <h3 className="text-4xl font-bold mb-2">1M+</h3>
                  <p className="text-sm font-medium uppercase tracking-wider">Lives to Touch</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-nature-green p-8 rounded-2xl text-white">
                  <h3 className="text-3xl font-bold mb-2">FREE</h3>
                  <p className="text-sm font-medium uppercase tracking-wider">Services for All</p>
                </div>
                <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop" className="rounded-2xl shadow-lg w-full" alt="Community gathering" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Areas of Impact</h2>
            <p className="text-gray-600 text-lg">We focus on sustainable health solutions through direct support and widespread education across Nigeria.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Support Program */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border-t-8 border-vivid-red group">
              <div className="w-16 h-16 bg-red-50 text-vivid-red rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Support & Crisis Prevention</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Supporting patients with transportation to clinics, medication assistance, crisis-prevention education, and essential wellness resources.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-vivid-red rounded-full mr-3"></div>
                  Clinic Transportation Assistance
                </li>
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-vivid-red rounded-full mr-3"></div>
                  Essential Medication Support
                </li>
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-vivid-red rounded-full mr-3"></div>
                  Crisis Management Training
                </li>
              </ul>
              <Link to="/programs" className="text-vivid-red font-bold flex items-center hover:underline">
                View Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>

            {/* Education Program */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow border-t-8 border-gold group">
              <div className="w-16 h-16 bg-orange-50 text-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Genotype Education</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Raising awareness across schools so young people understand their genotype (AA, AS, SS) and make informed life decisions.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  School Awareness Programs
                </li>
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Free Genotype Testing Events
                </li>
                <li className="flex items-center text-sm text-gray-700 font-medium">
                  <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                  Community Wellness Seminars
                </li>
              </ul>
              <Link to="/programs" className="text-gold font-bold flex items-center hover:underline">
                View Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-nature-green py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-1">Are you or someone you know in need?</h3>
            <p className="text-green-50">Reach out to our volunteer medical team in Lagos today.</p>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-nature-green px-8 py-4 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-2"
          >
            <Users size={20} />
            <span>Find Support Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
