import { FC, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RefundPolicy: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      style={{ width: "100vw" }}
      className="min-h-screen flex flex-col bg-white"
    >
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
            onClick={() => navigate("/", { state: { scroll: "leads" } })}
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
        <button onClick={toggleMenu} className="lg:hidden bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 fill-slate-600"
            viewBox="0 0 24 24"
            stroke="black"
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
              onClick={() => navigate("/", { state: { scroll: "leads" } })}
              className="text-gray-00 hover:text-gray-900 bg-gray-100"
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

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl text-black  font-bold mb-6  flex items-center text-center justify-center">
          TAPP! Global Return/Refund Policy
        </h1>
        <p className="mb-4 font-semibold text-black flex items-center text-center justify-center">
          Last Updated: 15 August 2024
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-black text-2xl font-semibold mb-4  flex items-center text-center justify-center">
              PHYSICAL PRODUCT REFUNDS
            </h2>
            <p className="flex items-center text-center justify-center">
              This Refund Policy describes how we manage refunds.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              1. RETURNS
            </h2>
            <p className="text-black">
              We do not take returns. To be eligible for a refund, we require a
              receipt or proof of purchase in the form of an order number and
              your order must have not been fulfilled, shipped or delivered per
              carrier tracking info.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              2. REFUNDS (IF APPLICABLE)
            </h2>
            <p className="text-black">
              If your TAPP! product is scratched or damaged, you may be eligible
              for a replacement. We offer replacements for damaged TAPP! product
              with photo proof within 48 hours of delivery. In the case that a
              TAPP! product does not adhere well to a case or phone, you may be
              eligible for a replacement TAPP! product, not a refund.
            </p>
            <p className="text-black mt-2">
              If you are having trouble activating your TAPP! product or tapping
              to compatible phones and you would like to request a refund or
              replacement, please contact our team at support@tappglobal.app.
              Typically, all issues can be resolved with some helpful tips from
              the team!
            </p>
            <p className="text-black mt-2">
              If you have successfully activated your TAPP! product and are
              experiencing issues tapping to a compatible device after you've
              contacted support@tappglobal.app, you may be eligible for a
              refund. Once approved for a refund, we will send you an email
              notifying you that we have refunded your purchase. Your refund
              will then be processed, and a credit will automatically be applied
              to your credit card or original method of payment, within 2-4
              days.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              3. WARRANTY
            </h2>
            <p className="text-black">
              If your TAPP! product loses its adhesive within the first 30 days
              of your order being marked as delivered, you are eligible for a
              free placement.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              4. PRO MEMBER SPECIAL WARRANTY
            </h2>
            <p className="text-black">
              Beyond 30 days after your TAPP! product is marked as delivered,
              you are eligible for a free replacement TAPP! product should your
              TAPP! product become damaged or lost. Please contact
              support@tappglobal.app for assistance with this.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              5. LATE OR MISSING REFUNDS (IF APPLICABLE)
            </h2>
            <p className="text-black">
              If you haven't received a refund yet, first check your bank
              account again.
            </p>
            <p className="text-black mt-2">
              Then contact your payment method service provider or credit card
              company, it may take some time before your refund is officially
              posted.
            </p>
            <p className="text-black mt-2">
              Next contact your bank. There is often some processing time before
              a refund is posted.
            </p>
            <p className="text-black mt-2">
              If you've done all of this and you still have not received your
              refund yet, please contact us at support@tappglobal.app.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              6. SALE ITEMS
            </h2>
            <p className="text-black">
              Only regular priced items may be refunded (if applicable),
              unfortunately sale items cannot be refunded.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              7. EXCHANGES
            </h2>
            <p className="text-black">We do not accept exchanges.</p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              8. SHIPPING
            </h2>
            <p className="text-black">
              We do not accept returns, so no shipping info is required.
            </p>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              9. CONTACT US
            </h2>
            <p className="text-black">
              For more information about our return/refund practices, if you
              have questions, or if you would like to make a complaint, please
              contact us by email at support@tappglobal.app.
            </p>
          </section>

          <section>
            <h2 className="text-black text-2xl font-semibold mb-4  flex items-center text-center justify-center">
              SOFTWARE PRODUCT REFUNDS
            </h2>
          </section>

          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              10. TAPP! SUBSCRIPTION REFUND POLICY
            </h2>
            <p className="text-black">
              This document explains TAPP! Global's refund policy for its
              subscriptions paid via Apple App Store, Google Play Store, or
              other payment methods.
            </p>

            <h3 className="text-lg text-black font-semibold mt-4 mb-2">
              Apple App Store:
            </h3>
            <p className="text-black">
              If you subscribed via the Apple App Store please request a refund
              by following the steps in this link. Learn more about Apple's
              refund policies via this link.
            </p>
            <p className="text-black mt-2">
              Please note, we are not permitted to issue refunds on Apple
              subscriptions.
            </p>
            <p className="text-black mt-2">
              For this reason, you are eligible for an Apple App Store credit
              within 7 days of your first subscription charge. Please see
              details below.
            </p>
            <p className="text-black mt-2">
              If Apple denies your request, you may contact us at
              support@tappglobal.app within 7 days of your subscription start
              date and request a refund. You are eligible for a store credit
              equal to 70% of your subscription cost within 7 days of your first
              subscription charge, or 7 days after your 14 day free trial has
              ended. You are not eligible for a refund after the 7 day grace
              period.
            </p>

            <h3 className="text-lg text-black font-semibold mt-4 mb-2">
              Google Play Store:
            </h3>
            <p className="text-black">
              If you subscribed through the Google Play Store you may request a
              refund via this link. Learn more about Google Play's refund
              policies via this link.
            </p>
            <p className="text-black mt-2">
              If Google denies your request, you may contact us at
              support@tappglobal.app within 7 days of your subscription start
              date and request a refund. You are eligible for a full refund
              within 7 days of your first subscription charge, or 7 days after
              your 14 day free trial has ended. You are not eligible for a
              refund after the 7 day grace period.
            </p>

            <h3 className="text-lg text-black font-semibold mt-4 mb-2">
              Other Payment Methods:
            </h3>
            <p className="text-black">
              If you subscribed on a desktop computer (i.e. dash.tappglobal.app,
              ai.tappglobal.app) or via a payment link, you may contact us at
              support@tappglobal.app within 7 days of your subscription start
              date and request a refund. You are eligible for a full refund
              within 7 days of your first subscription charge, or 7 days after
              your 14 day free trial has ended.
            </p>
          </section>
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

export default RefundPolicy;
