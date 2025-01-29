'use client';

import { useState } from 'react';
import { ProgressSteps } from '@/components/ui/ProgressSteps';
import { RegistrationForm } from '@/components/setup/RegistrationForm';
import { OrganizationSetup } from '@/components/setup/OrganizationSetup';
import { IntegrationSetup } from '@/components/setup/IntegrationSetup';

export default function SetupPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepComplete = () => {
    setCurrentStep((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressSteps currentStep={currentStep} steps={3} />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        {currentStep === 1 && <RegistrationForm onComplete={handleStepComplete} />}
        {currentStep === 2 && <OrganizationSetup onComplete={handleStepComplete} />}
        {currentStep === 3 && <IntegrationSetup />}
      </div>
    </div>
  );
}