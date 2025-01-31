import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

export const IntegrationSetup = () => {
  const [integrationSuccess, setIntegrationSuccess] = useState(false);

  const handleTestChatbot = () => {
    // Simulate opening the client's website with a dummy chatbot integration
    window.open("https://example.com?chatbot=true", "_blank");
  };

  const handleIntegrate = () => {
    // Simulate showing integration instructions
    alert(
      'Copy the following code into the <head> of your website:\n\n<script src="https://example.com/chatbot.js"></script>'
    );
  };

  const handleMailInstructions = () => {
    // Simulate mailing instructions to the client's developer
    alert("Instructions have been mailed to your developer.");
  };

  const handleTestIntegration = () => {
    // Simulate testing integration
    alert("Integration successfully tested.");
    setIntegrationSuccess(true);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Chatbot Integration</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={handleTestChatbot}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Test Chatbot
        </button>
        <button
          onClick={handleIntegrate}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Integrate on Your Website
        </button>
        <button
          onClick={handleMailInstructions}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Mail Instructions to Developer
        </button>
        <button
          onClick={handleTestIntegration}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Test Integration
        </button>
      </div>

      {integrationSuccess && (
        <div className="bg-white p-6 rounded-lg border mt-8">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Integration Successful!</h2>
            <div className="mt-4">
              <button
                onClick={() =>
                  window.open("https://example.com/admin", "_blank")
                }
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md mb-4"
              >
                Explore Admin Panel
              </button>
              <button
                onClick={() =>
                  window.open("https://example.com/chatbot", "_blank")
                }
                className="w-full py-2 px-4 bg-green-600 text-white rounded-md mb-4"
              >
                Start Talking to Your Chatbot
              </button>
              <div className="flex justify-center space-x-4">
                <button className="py-2 px-4 bg-blue-600 text-white rounded-md">
                  Share on Facebook
                </button>
                <button className="py-2 px-4 bg-blue-600 text-white rounded-md">
                  Share on Twitter
                </button>
                <button className="py-2 px-4 bg-blue-600 text-white rounded-md">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!integrationSuccess && (
        <div className="bg-white p-6 rounded-lg border mt-8">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Integration Not Detected</h2>
            <p>
              Please ensure the integration code is correctly added to your
              website.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
