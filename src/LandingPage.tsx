import React, { useState } from "react";
import { LAND_IMAGES1, LAND_IMAGES2 } from "./images";

const LandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ width: "100vw" }} className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">TAPP!</div>
        <nav className="hidden lg:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Our Products
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </nav>
        <div className="hidden lg:flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Get Started Free
          </button>
        </div>
        <button onClick={toggleMenu} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Our Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Resources
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Blog
            </a>
            <button className="text-gray-600 hover:text-gray-900">Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-full">
              Get Started Free
            </button>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="bg-gray-100 rounded-3xl p-6 md:p-12 text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="flex -space-x-2">
              {LAND_IMAGES1.map((value, index) => (
                <img
                  key={index + value}
                  src={value}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">100+ with us today</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Simplify Your B2B
            <br />
            Sales Process
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Modern Leads Management for SMBs
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold">
            Get Started Free
          </button>
        </div>

        <div className="text-center mb-16">
          <p className="text-gray-600 mb-6">
            Powering Southeast Asia's B2B Startups and SMBs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {LAND_IMAGES2.map((company, index) => (
              <img
                key={index + company}
                src={company}
                width={100}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Leads Management
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Automatically qualify and book meetings for your sales team
            <br />
            with generative AI-powered sales agents.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <img
                  src={new URL("@/assets/avatar10.png", import.meta.url).href}
                  alt="Lead management screenshot"
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Chan Wei Feng</h3>
                <p className="text-gray-600 mb-4">
                  Stage: Discovery & Needs Analysis
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    Hi Chan! Ryan here from TAPP, we met in the conference
                    earlier. Would love to continue our conversation regarding
                    our solutions...
                  </p>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Relevant Insights
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Make your sales pitch sound relevant to your leads
            <br />
            Saving hours of manual research.
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Finext</h3>
            <p className="text-gray-600 mb-4">
              Personal Financial Management App
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Company Description</h4>
              <p className="text-sm text-gray-700 mb-4">
                Finext is a technology-driven company offering a platform that
                allows users to save, store, and submit receipts for tax
                purposes. The service is designed to help individuals and
                businesses manage their finances more effectively...
              </p>
              <h4 className="font-semibold mb-2">Key Services</h4>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>Digital receipt storage</li>
                <li>Automated tax relief calculations</li>
                <li>Financial insights and reports</li>
                <li>Tax audit prevention tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Find Warm Introducer
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Search through your contacts
            <br />
            and find potential warm introducer to your leads
          </p>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={new URL("@/assets/avatar10.png", import.meta.url).href}
                alt="Chan Wei Feng"
                width={64}
                height={64}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Chan Wei Feng</h3>
                <p className="text-gray-600">Cofounder & CEO</p>
                <p className="text-gray-600">Key Buying Decision Maker</p>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full mb-4">
              Add Task
            </button>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                Jayden Lin is an ex-colleague of Chan at Company ABC in 2021
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                Jim Lee is an existing client of Chan at EZ Malaysia Sdn. Bhd.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to close more sales?
          </h2>
          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold">
            Book a Demo
          </button>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-600">
                &copy; 2023 All Rights Reserved
              </p>
              <p className="text-sm text-gray-600">
                TAPP Global Technologies Sdn. Bhd.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Refund/Refund Policy
              </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
