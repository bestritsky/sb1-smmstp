import React from 'react';
import { FileText } from 'lucide-react';

const PatientForms = () => {
  const forms = [
    {
      name: 'new_patient_information.pdf',
      url: 'https://binaryadvisers.com/wp-content/uploads/2024/11/new_patient_information.pdf'
    },
    {
      name: 'intake_form.pdf',
      url: 'https://binaryadvisers.com/wp-content/uploads/2024/11/intake_form.pdf'
    },
    {
      name: 'privacy_notice.pdf',
      url: 'https://binaryadvisers.com/wp-content/uploads/2024/11/privacy_notice.pdf'
    }
  ];

  return (
    <section id="patient-forms" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-800 mb-4">New Patient Forms</h2>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">NEW PATIENTS NEED TO DOWNLOAD ALL 3 FILES.</h3>
              <p className="text-lg text-gray-600 mb-2">PRINT FILES.</p>
              <p className="text-lg text-gray-600">BRING COMPLETED FORMS TO YOUR VISIT.</p>
            </div>

            <div className="space-y-4">
              {forms.map((form, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-red-500 mr-3" />
                    <span className="text-gray-700">{form.name}</span>
                  </div>
                  <a
                    href={form.url}
                    className="text-red-500 hover:text-red-600 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download File
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary-50 rounded-lg">
              <p className="text-gray-600 text-sm">
                Please complete these forms before your first visit to help us provide you with the best possible care. 
                If you have any questions about the forms, please contact our office at (203) 740-8637.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientForms;