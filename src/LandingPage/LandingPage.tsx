import React, { useEffect, useRef, useState } from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LAND_IMAGES1, LAND_IMAGES2 } from "../images";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const myRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    myRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (state?.scroll === "leads") {
      executeScroll();
    }
  });
  return (
    <div style={{ width: "100vw" }} className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div
          onClick={() => window.open("https://tappglobal.app", "_self")}
          style={{ cursor: "pointer", color: "black" }}
          className="text-2xl font-bold"
        >
          TAPP!
        </div>
        <nav className="hidden lg:flex space-x-6">
          <div
            style={{ cursor: "pointer" }}
            onClick={executeScroll}
            className="text-gray-600 hover:text-gray-900"
          >
            Products
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.open("https://tappglobal.usetiful.help/", "_self")
            }
            className="text-gray-600 hover:text-gray-900"
          >
            Resources
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="text-gray-600 hover:text-gray-900"
          >
            Blog
          </div>
        </nav>
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => {
              window.open("https://dash.tappglobal.app", "_self");
            }}
            className="text-gray-600 hover:text-gray-900"
          >
            Login
          </button>
          <button
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-G_4ZjV0o05Q36q0Fe3BAufnXyqlrdZWbBc4oRbrjY2Tl2Co6XxajyY7ZNfQWVaKBMs-0ax_8",
                "_self"
              );
            }}
            className="bg-black text-white px-4 py-2 rounded-full"
          >
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
            <div
              onClick={executeScroll}
              className="text-gray-600 hover:text-gray-900"
            >
              Products
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://tappglobal.usetiful.help/", "_self")
              }
              className="text-gray-600 hover:text-gray-900"
            >
              Resources
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="text-gray-600 hover:text-gray-900"
            >
              Blog
            </div>
            <button
              onClick={() => {
                window.open("https://dash.tappglobal.app", "_self");
              }}
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-G_4ZjV0o05Q36q0Fe3BAufnXyqlrdZWbBc4oRbrjY2Tl2Co6XxajyY7ZNfQWVaKBMs-0ax_8",
                  "_self"
                )
              }
              className="bg-black text-white px-4 py-2 rounded-full"
            >
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

          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Simplify Your B2B
            <br />
            Sales Process
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Modern Leads Management for SMBs
          </p>
          <button
            onClick={() =>
              window.open(
                "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-G_4ZjV0o05Q36q0Fe3BAufnXyqlrdZWbBc4oRbrjY2Tl2Co6XxajyY7ZNfQWVaKBMs-0ax_8",
                "_self"
              )
            }
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
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
                className="hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <section className="mb-16">
          <h2
            ref={myRef}
            className="text-black text-3xl font-bold text-center mb-4"
          >
            Leads Management
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Automatically qualify and book meetings for your sales team
            <br />
            with generative AI-powered sales agents.
          </p>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6">
            <img
              src={new URL("@/assets/bg1.webp", import.meta.url).href}
              width={500}
              height={300}
              className="w-[70%] h-auto rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-black text-3xl font-bold text-center mb-4">
            Relevant Insights
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Make your sales pitch sound relevant to your leads
            <br />
            Saving hours of manual research.
          </p>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6">
            <img
              src={new URL("@/assets/bg2.png", import.meta.url).href}
              width={500}
              height={300}
              className="w-[50%] h-auto rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-black text-3xl font-bold text-center mb-4">
            Find Warm Introducer
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Search through your contacts
            <br />
            and find potential warm introducer to your leads
          </p>
          <div className="flex flex-col justify-center items-center md:flex-row gap-6">
            <img
              src={new URL("@/assets/bg3.webp", import.meta.url).href}
              width={500}
              height={300}
              className="w-[60%] h-auto rounded-lg"
            />
          </div>
        </section>

        <div className="text-center mb-16">
          <h2 className="text-black text-3xl font-bold mb-4">
            Ready to close more sales?
          </h2>
          <button
            onClick={() => {
              window.open(
                "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1-G_4ZjV0o05Q36q0Fe3BAufnXyqlrdZWbBc4oRbrjY2Tl2Co6XxajyY7ZNfQWVaKBMs-0ax_8",
                "_self"
              );
            }}
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold"
          >
            Book a Demo
          </button>
        </div>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-row align-center">
              <img
                src={new URL("@/assets/tapp-logo.ico", import.meta.url).href}
                style={{
                  height: 57,
                  width: 57,
                }}
              />

              <div className="mb-4 md:mb-0 ml-5">
                <p className="text-sm text-gray-600">
                  &copy; 2024 All Rights Reserved
                </p>
                <p className="text-sm text-gray-600">
                  TAPP! Global Technologies Pte. Ltd.
                </p>
                <p className="text-sm text-gray-600">
                  TAPP Global Technologies Sdn. Bhd.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div
                onClick={() => navigate("/tnc")}
                style={{ cursor: "pointer" }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Terms & Conditions
              </div>
              <div
                onClick={() => navigate("/policyPrivacy")}
                style={{ cursor: "pointer" }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Privacy Policy
              </div>
              <div
                onClick={() => navigate("/refundPolicy")}
                style={{ cursor: "pointer" }}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Refund/Refund Policy
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <div
                onClick={() =>
                  window.open("https://www.facebook.com/tappglobalapp/")
                }
                style={{ cursor: "pointer" }}
                className="text-gray-600 hover:text-gray-900"
              >
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
              </div>
              <div
                onClick={() =>
                  window.open("https://www.linkedin.com/company/tappglobalapp/")
                }
                style={{ cursor: "pointer" }}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin size={24} />
              </div>
              <div
                onClick={() => window.open("https://x.com/tappglobalapp")}
                style={{ cursor: "pointer" }}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaSquareXTwitter size={24} />
              </div>
              <div
                onClick={() =>
                  window.open("https://www.instagram.com/tappglobalapp/")
                }
                style={{ cursor: "pointer" }}
                className="text-gray-600 hover:text-gray-900"
              >
                <FaInstagramSquare size={24} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
