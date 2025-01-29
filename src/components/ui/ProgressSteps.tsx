import { ChevronRight } from 'lucide-react';
  
interface ProgressStepsProps {
  currentStep: number;
  steps: number;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep, steps }) => (
  <div className="w-full bg-white shadow-sm py-4 sticky top-0 z-10">
    <div className="max-w-3xl mx-auto px-4">
      <div className="flex items-center space-x-4">
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {step}
            </div>
            {step < steps && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

