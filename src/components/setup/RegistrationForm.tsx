import { SetupProps } from '@/types';
import { useState } from 'react';

export const RegistrationForm: React.FC<SetupProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationSent, setVerificationSent] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1000);
  };

  const handleSendCode = async () => {
    setIsSendingCode(true);
    // Simulate sending verification code
    setTimeout(() => {
      setVerificationSent(true);
      setIsSendingCode(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Create Your Account</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Verification Code</label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
              disabled={isLoading || isSendingCode}
            />
            <button
              type="button"
              onClick={handleSendCode}
              className="py-2 px-4 bg-blue-600 text-white rounded-md"
              disabled={isLoading || isSendingCode}
            >
              {isSendingCode ? 'Sending...' : 'Send Code'}
            </button>
          </div>
          {verificationSent && (
            <div className="mt-2 text-green-600">
              Verification code sent!
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
};