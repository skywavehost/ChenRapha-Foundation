
import React from 'react';
import { ShieldCheck, Heart, Globe, TrendingUp, HandCoins } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-vivid-red font-bold uppercase tracking-widest text-xs">501(c)(3) Nonprofit</span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">Your Kindness <br/><span className="text-vivid-red">Saves Lives.</span></h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Every dollar raised in the United States goes directly to funding medications, education, and clinical transportation for sickle cell patients in Nigeria.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <TrendingUp className="text-nature-green" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Direct Impact</h4>
                    <p className="text-gray-600 text-sm">$50 provides essential medications for one child for an entire month.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Globe className="text-vivid-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Tax Deductible</h4>
                    <p className="text-gray-600 text-sm">Donations made to our US-based HQ are tax-deductible to the extent allowed by law.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-center">Select Donation Amount</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['$25', '$50', '$100', '$250', '$500', 'Custom'].map((amt) => (
                  <button key={amt} className="py-4 border-2 border-gray-100 rounded-2xl font-bold hover:border-vivid-red hover:text-vivid-red transition-all">
                    {amt}
                  </button>
                ))}
              </div>
              <button className="w-full bg-vivid-red text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-opacity-90 transition-all flex items-center justify-center space-x-3">
                <HandCoins size={24} />
                <span>Complete Donation</span>
              </button>
              <div className="mt-6 flex items-center justify-center space-x-4 text-xs text-gray-400">
                <span className="flex items-center"><ShieldCheck size={14} className="mr-1" /> Secure SSL Encryption</span>
                <span>•</span>
                <span>Powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Where does your money go?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-vivid-red text-4xl font-bold mb-2">60%</div>
              <p className="text-sm font-bold text-gray-800 uppercase mb-2">Medication</p>
              <p className="text-xs text-gray-500">Procuring life-saving drugs for impoverished patients.</p>
            </div>
            <div className="p-6">
              <div className="text-gold text-4xl font-bold mb-2">20%</div>
              <p className="text-sm font-bold text-gray-800 uppercase mb-2">Education</p>
              <p className="text-xs text-gray-500">School programs and genotype awareness events.</p>
            </div>
            <div className="p-6">
              <div className="text-nature-green text-4xl font-bold mb-2">15%</div>
              <p className="text-sm font-bold text-gray-800 uppercase mb-2">Logistics</p>
              <p className="text-xs text-gray-500">Transportation for clinical appointments and emergencies.</p>
            </div>
            <div className="p-6">
              <div className="text-gray-400 text-4xl font-bold mb-2">5%</div>
              <p className="text-sm font-bold text-gray-800 uppercase mb-2">Admin</p>
              <p className="text-xs text-gray-500">Essential operational costs to maintain the foundation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
