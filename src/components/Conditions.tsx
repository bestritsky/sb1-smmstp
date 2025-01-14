import React, { useState } from 'react';
import { Stethoscope } from 'lucide-react';
import AppointmentModal from './AppointmentModal';
import TaxCalculatorModal from './TaxCalculatorModal';
import ConditionDetailModal from './ConditionDetailModal';

interface ConditionDetail {
  name: string;
  description: string;
  image: string;
}

const Conditions = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isTaxCalculatorOpen, setIsTaxCalculatorOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | undefined>();
  const [selectedCondition, setSelectedCondition] = useState<ConditionDetail | null>(null);
  const [isConditionModalOpen, setIsConditionModalOpen] = useState(false);
  
  const conditions = [
    "Achilles tendonitis",
    "Allergic contact dermatitis",
    "Athlete's foot",
    "Brachymetatarsia",
    "Bunions",
    "Calluses/corns",
    "Diabetic foot care",
    "Flatfoot (fallen arches)",
    "Ganglions",
    "Haglund's deformity",
    "Hallux limitus",
    "Hammertoes",
    "Heel pain/fasciitis",
    "Infections",
    "Injuries",
    "Ingrown toenails",
    "Metatarsalgia",
    "Morton's neuroma",
    "Onychomycosis (nail fungus)",
    "Osteoarthritis",
    "Pediatric foot care",
    "Plantar warts",
    "Plantar fasciitis",
    "Posterior tibial dysfunction",
    "Rheumatoid arthritis",
    "Running injuries",
    "Sesamoiditis",
    "Sprains/strains",
    "Tarsal tunnel syndrome",
    "Taylor's bunion",
    "Tendinitis",
    "Toe deformities",
    "Xerosis"
  ];

  const conditionDetails: { [key: string]: ConditionDetail } = {
    "Achilles tendonitis": {
      name: "Achilles Tendonitis",
      description: "Achilles tendonitis is an overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone. It's common among runners and middle-aged people who play sports only on the weekends. The condition occurs when the tendon is strained over time, causing the fibers to tear or degenerate, leading to inflammation. Most cases can be treated with simple, at-home care under your doctor's supervision.",
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=2000"
    }
  };

  const handleAppointmentClick = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({ x: rect.left, y: rect.bottom });
    setIsAppointmentModalOpen(true);
  };

  const handleConditionClick = (condition: string, event: React.MouseEvent) => {
    if (condition === "Xerosis") {
      setIsTaxCalculatorOpen(true);
      return;
    }

    const details = conditionDetails[condition];
    if (details) {
      const rect = event.currentTarget.getBoundingClientRect();
      setModalPosition({ x: rect.left, y: rect.bottom });
      setSelectedCondition(details);
      setIsConditionModalOpen(true);
    }
  };

  return (
    <section id="conditions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Stethoscope className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Conditions We Treat</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We diagnose and treat a variety of podiatric conditions, providing comprehensive care for all your foot and ankle needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="group relative bg-primary-50/50 rounded-lg p-4 hover:bg-primary-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={(e) => handleConditionClick(condition, e)}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary-600 mr-3"></div>
                  <span className="text-gray-700 group-hover:text-gray-900">{condition}</span>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-200 rounded-lg transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Professional Foot Care?</h3>
              <p className="text-gray-600 mb-6">
                Don't let foot pain affect your quality of life. Schedule an appointment today for expert diagnosis and treatment.
              </p>
              <button 
                onClick={handleAppointmentClick}
                className="bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors"
              >
                Schedule an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isAppointmentModalOpen} 
        onClose={() => {
          setIsAppointmentModalOpen(false);
          setModalPosition(undefined);
        }}
        buttonPosition={modalPosition}
      />
      <TaxCalculatorModal isOpen={isTaxCalculatorOpen} onClose={() => setIsTaxCalculatorOpen(false)} />
      {selectedCondition && (
        <ConditionDetailModal
          isOpen={isConditionModalOpen}
          onClose={() => {
            setIsConditionModalOpen(false);
            setModalPosition(undefined);
          }}
          condition={selectedCondition}
          buttonPosition={modalPosition}
        />
      )}
    </section>
  );
};

export default Conditions;