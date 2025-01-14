import React, { useState } from 'react';
import { X, Calculator } from 'lucide-react';

interface TaxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaxCalculatorModal = ({ isOpen, onClose }: TaxCalculatorModalProps) => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateTax = () => {
    const baseAmount = parseFloat(amount);
    if (!isNaN(baseAmount)) {
      // Calculate tax (assuming 6.35% CT sales tax)
      const tax = baseAmount * 0.0635;
      const total = baseAmount + tax;
      setResult(total);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary-600" />
            <h3 className="text-2xl font-bold text-gray-800">Medical Tax Calculator</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Calculate the total cost including Connecticut sales tax (6.35%)
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Amount ($)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>
            
            <button
              onClick={calculateTax}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
              disabled={!amount}
            >
              Calculate
            </button>
            
            {result !== null && (
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Base Amount:</span>
                    <span className="font-medium">${parseFloat(amount).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (6.35%):</span>
                    <span className="font-medium">${(parseFloat(amount) * 0.0635).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                    <span>Total:</span>
                    <span>${result.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCalculatorModal;