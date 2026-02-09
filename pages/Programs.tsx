
import React from 'react';
import { Truck, Pill, School, Microscope, Users, HeartHandshake } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Medication Assistance",
      description: "Access to hydroxyurea, folic acid, and essential pain management drugs for patients in low-income communities.",
      color: "bg-vivid-red"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Clinic Transportation",
      description: "Emergency and routine transportation support for patients traveling to specialist sickle cell clinics.",
      color: "bg-nature-green"
    },
    {
      icon: <School className="w-8 h-8" />,
      title: "Student Education",
      description: "Curriculum-integrated awareness programs in secondary schools to teach genotype awareness and health advocacy.",
      color: "bg-gold"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Genotype Testing",
      description: "Providing free, reliable genotype testing to help individuals and couples make informed future family decisions.",
      color: "bg-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Volunteer Network",
      description: "Coordinating local doctors and nurses who donate their time to provide screening and consultation.",
      color: "bg-purple-600"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Family Support",
      description: "Mental health and nutrition counseling for families living with the chronic challenges of sickle cell disease.",
      color: "bg-pink-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Impact Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency medical support to generational education, our programs are designed to provide holistic care for the Nigerian sickle cell community.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className={`${p.color} text-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Call */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Are you a healthcare professional or teacher?</h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              We are always looking for volunteers in Nigeria to help drive our mission. Join our network of nurses, doctors, and educators to touch lives with grace.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="mailto:contact@chenraphafoundation.org" className="bg-vivid-red px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all text-center">
                Volunteer Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
