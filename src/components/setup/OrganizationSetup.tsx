import React, { useState, useEffect } from 'react';
import { WebsitePage, ScrapingProgress, SetupProps } from '@/types';




export const OrganizationSetup: React.FC<SetupProps> = ({ onComplete }) => {
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [scrapingProgress, setScrapingProgress] = useState<ScrapingProgress>({
    total: 8,
    scraped: 3,
    pending: 5
  });
  const [selectedPage, setSelectedPage] = useState<WebsitePage | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock website data
  const websitePages: WebsitePage[] = [
    { url: '/home', status: 'scraped', chunks: ['About Us content...', 'Product features...'] },
    { url: '/pricing', status: 'scraped', chunks: ['Pricing plans...', 'Enterprise solutions...'] },
    { url: '/contact', status: 'pending', chunks: [] },
    { url: '/blog', status: 'pending', chunks: [] }
  ];

  useEffect(() => {
    if (companyUrl) {
      // Simulate fetching meta-description from the company URL
      setIsLoading(true);
      fetch('https://run.mocky.io/v3/c9fe929a-aa40-4fa3-ae5e-407d49ca2d29')
        .then(response => response.json())
        .then(data => {
          setCompanyDescription(data.description || 'No description available.');
          setIsLoading(false);
        })
        .catch(() => {
          setCompanyDescription('Failed to fetch description.');
          setIsLoading(false);
        });
    }
  }, [companyUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate waiting for chatbot training to finish
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 3000); // Simulate a 3-second delay for training
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Setup Organization</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Website URL</label>
          <input
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Description</label>
          <textarea
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Continue'}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Scraping Progress</h2>
        <div className="mt-2">
          <p>Total Pages: {scrapingProgress.total}</p>
          <p>Scraped: {scrapingProgress.scraped}</p>
          <p>Pending: {scrapingProgress.pending}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Website Pages</h2>
        <ul className="mt-2 space-y-2">
          {websitePages.map((page) => (
            <li
              key={page.url}
              className={`p-2 border rounded-md ${page.status === 'scraped' ? 'bg-green-100' : 'bg-yellow-100'}`}
              onClick={() => setSelectedPage(page)}
            >
              {page.url} - {page.status}
            </li>
          ))}
        </ul>
      </div>

      {selectedPage && (
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Data Chunks for {selectedPage.url}</h2>
          <ul className="mt-2 space-y-2">
            {selectedPage.chunks.map((chunk, index) => (
              <li key={index} className="p-2 border rounded-md bg-gray-50">
                {chunk}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};