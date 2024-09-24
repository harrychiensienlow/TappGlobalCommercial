import { FC, useState } from "react";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TermsAndConditions: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
          TAPP! Global Terms and Conditions
        </h1>
        <p className="mb-4 font-semibold text-black flex items-center text-center justify-center">
          Last Updated: 15 August 2024
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-black text-xl font-semibold mb-2 flex items-center text-center justify-center">
              1. INTRODUCTION
            </h2>
            <p className="text-black">
              TAPP! Global represents TAPP! GLOBAL TECHNOLOGIES PTE. LTD. (UEN:
              202406870G, incorporated in Singapore) & TAPP GLOBAL TECHNOLOGIES
              SDN. BHD. (ROC: 202301005424, incorporated in Kuala Lumpur,
              Malaysia), ("Company", "we", "our", "us")
            </p>
            <p className="text-black">
              These Terms of Service ("Terms", "Terms of Service") govern your
              use of our websites operating under the domain tappglobal.app
              (together or individually "Service") operated by TAPP! Global.
            </p>
            <p className="text-black">
              Our Privacy Policy also governs your use of our Service and
              explains how we collect, safeguard and disclose information that
              results from your use of our web pages.
            </p>
            <p className="text-black">
              Your agreement with us includes these Terms and our Privacy Policy
              ("Agreements"). You acknowledge that you have read and understood
              Agreements, and agree to be bound by them.
            </p>
            <p className="text-black">
              If you do not agree with (or cannot comply with) Agreements, then
              you may not use the Service, but please let us know by emailing at
              support@tappglobal.app so we can try to find a solution. These
              Terms apply to all visitors, users and others who wish to access
              or use Service.
            </p>
            <p className="text-black">
              IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE
              USE IMMEDIATELY.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              2. COMMUNICATIONS
            </h2>
            <p className="text-black">
              By using our Service, you agree to subscribe to newsletters,
              marketing or promotional materials and other information we may
              send. However, you may opt out of receiving any, or all, of these
              communications from us by following the unsubscribe link or by
              emailing at support@tappglobal.app
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              3. PURCHASES
            </h2>
            <p className="text-black">
              If you wish to purchase any product or service made available
              through Service ("Purchase"), you may be asked to supply certain
              information relevant to your Purchase including but not limited
              to, your credit or debit card number, the expiration date of your
              card, your billing address, and your shipping information.
            </p>
            <p className="text-black">
              You represent and warrant that: (i) you have the legal right to
              use any card(s) or other payment method(s) in connection with any
              Purchase; and that (ii) the information you supply to us is true,
              correct and complete.
            </p>
            <p className="text-black">
              We may employ the use of third party services for the purpose of
              facilitating payment and the completion of Purchases. By
              submitting your information, you grant us the right to provide the
              information to these third parties subject to our Privacy Policy.
            </p>
            <p className="text-black">
              We reserve the right to refuse or cancel your order at any time
              for reasons including but not limited to: product or service
              availability, errors in the description or price of the product or
              service, error in your order or other reasons.
            </p>
            <p className="text-black">
              We reserve the right to refuse or cancel your order if fraud or an
              unauthorised or illegal transaction is suspected.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              4. CONTESTS, SWEEPSTAKES AND PROMOTIONS
            </h2>
            <p className="text-black">
              Any contests, sweepstakes or other promotions (collectively,
              "Promotions") made available through Service may be governed by
              rules that are separate from these Terms of Service. If you
              participate in any Promotions, please review the applicable rules
              as well as our Privacy Policy. If the rules for a Promotion
              conflict with these Terms of Service, Promotion rules will apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              5. SUBSCRIPTIONS
            </h2>
            <p className="text-black">
              Some parts of Service are billed on a subscription basis
              ("Subscription(s)"). You will be billed in advance on a recurring
              and periodic basis ("Billing Cycle"). Billing cycles will be set
              depending on the type of subscription plan you select when
              purchasing a Subscription.
            </p>
            <p className="text-black">
              At the end of each Billing Cycle, your Subscription will
              automatically renew under the exact same conditions unless you
              cancel it or TAPP! Global cancels it. You may cancel your
              Subscription renewal either through your online account management
              page or by contacting support@tappglobal.app customer support
              team.
            </p>
            <p className="text-black">
              A valid payment method is required to process the payment for your
              subscription. You shall provide TAPP! Global with accurate and
              complete billing information that may include but not limited to
              full name, address, state, postal or zip code, telephone number,
              and a valid payment method information. By submitting such payment
              information, you automatically authorise TAPP! Global to charge
              all Subscription fees incurred through your account to any such
              payment instruments.
            </p>
            <p className="text-black">
              Should automatic billing fail to occur for any reason, TAPP!
              Global reserves the right to terminate your access to the Service
              with immediate effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              6. FREE TRIAL
            </h2>
            <p className="text-black">
              TAPP! Global may, at its sole discretion, offer a Subscription
              with a free trial for a limited period of time ("Free Trial").
            </p>
            <p className="text-black">
              You may be required to enter your billing information in order to
              sign up for Free Trial.
            </p>
            <p className="text-black">
              If you do enter your billing information when signing up for Free
              Trial, you will not be charged by TAPP! Global until the Free
              Trial has expired. On the last day of Free Trial period, unless
              you cancelled your Subscription, you will be automatically charged
              the applicable Subscription fees for the type of Subscription you
              have selected.
            </p>
            <p className="text-black">
              At any time and without notice, TAPP! Global reserves the right to
              (i) modify Terms of Service of Free Trial offer, or (ii) cancel
              such Free Trial offer.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              7. FEE CHANGES
            </h2>
            <p className="text-black">
              TAPP! Global, in its sole discretion and at any time, may modify
              Subscription fees for the Subscriptions. Any Subscription fee
              change will become effective at the end of the then-current
              Billing Cycle.
            </p>
            <p className="text-black">
              TAPP! Global will provide you with a reasonable prior notice of
              any change in Subscription fees to give you an opportunity to
              terminate your Subscription before such change becomes effective.
            </p>
            <p className="text-black">
              Your continued use of Service after Subscription fee change comes
              into effect constitutes your agreement to pay the modified
              Subscription fee amount.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              8. CANCELLATION
            </h2>
            <p className="text-black">
              All purchases are non-refundable. You can cancel your subscription
              at any time by sending us an email at support@tappglobal.app. Your
              cancellation will take effect at the end of the current paid term.
            </p>
            <p className="text-black">
              If you are unsatisfied with our services, please email us at
              support@tappglobal.app.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              9. CONTENT
            </h2>
            <p className="text-black">
              Our Service allows you to post, link, store, share and otherwise
              make available certain information, text, graphics, videos, or
              other material ("Content"). You are responsible for Content that
              you post on or through Service, including its legality,
              reliability, and appropriateness.
            </p>
            <p className="text-black">
              By posting Content on or through Service, You represent and
              warrant that: (i) Content is yours (you own it) and/or you have
              the right to use it and the right to grant us the rights and
              licence as provided in these Terms, and (ii) that the posting of
              your Content on or through Service does not violate the privacy
              rights, publicity rights, copyrights, contract rights or any other
              rights of any person or entity. We reserve the right to terminate
              the account of anyone found to be infringing on a copyright.
            </p>
            <p className="text-black">
              You retain any and all of your rights to any Content you submit,
              post or display on or through Service and you are responsible for
              protecting those rights. We take no responsibility and assume no
              liability for Content you or any third party posts on or through
              Service. However, by posting Content using Service you grant us
              the right and licence to use, modify, publicly perform, publicly
              display, reproduce, and distribute such Content on and through
              Service. You agree that this licence includes the right for us to
              make your Content available to other users of Service, who may
              also use your Content subject to these Terms.
            </p>
            <p className="text-black">
              TAPP! Global has the right but not the obligation to monitor and
              edit all Content provided by users.
            </p>
            <p className="text-black">
              In addition, Content found on or through this Service are the
              property of TAPP! Global or used with permission. You may not
              distribute, modify, transmit, reuse, download, repost, copy, or
              use said Content, whether in whole or in part, for commercial
              purposes or for personal gain, without express advance written
              permission from us.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              10. PROHIBITED USES
            </h2>
            <p className="text-black">
              You may use Service only for lawful purposes and in accordance
              with Terms. You agree not to use Service:
            </p>
            <ol className="list-decimal list-inside pl-4">
              <li className="text-black">
                In any way that violates any applicable national or
                international law or regulation.
              </li>
              <li className="text-black">
                For the purpose of exploiting, harming, or attempting to exploit
                or harm minors in any way by exposing them to inappropriate
                content or otherwise.
              </li>
              <li className="text-black">
                To transmit, or procure the sending of, any advertising or
                promotional material, including any "junk mail", "chain letter,"
                "spam," or any other similar solicitation.
              </li>
              <li className="text-black">
                To impersonate or attempt to impersonate a Company, a Company
                employee, another user, or any other person or entity.
              </li>
              <li className="text-black">
                In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful, or in
                connection with any unlawful, illegal, fraudulent, or harmful
                purpose or activity.
              </li>
              <li className="text-black">
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of Service, or which, as determined by
                us, may harm or offend Company or users of Service or expose
                them to liability.
              </li>
            </ol>
            <p className="text-black">Additionally, you agree not to:</p>
            <ol className="list-decimal list-inside pl-4">
              <li className="text-black">
                Use Service in any manner that could disable, overburden,
                damage, or impair Service or interfere with any other party's
                use of Service, including their ability to engage in real time
                activities through Service.
              </li>
              <li className="text-black">
                Use any robot, spider, or other automatic device, process, or
                means to access Service for any purpose, including monitoring or
                copying any of the material on Service.
              </li>
              <li className="text-black">
                Use any manual process to monitor or copy any of the material on
                Service or for any other unauthorised purpose without our prior
                written consent.
              </li>
              <li className="text-black">
                Use any device, software, or routine that interferes with the
                proper working of Service.
              </li>
              <li className="text-black">
                Introduce any viruses, trojan horses, worms, logic bombs, or
                other material which is malicious or technologically harmful.
              </li>
              <li className="text-black">
                Attempt to gain unauthorised access to, interfere with, damage,
                or disrupt any parts of Service, the server on which Service is
                stored, or any server, computer, or database connected to
                Service.
              </li>
              <li className="text-black">
                Attack Service via a denial-of-service attack or a distributed
                denial-of-service attack.
              </li>
              <li className="text-black">
                Take any action that may damage or falsify Company ratings.
              </li>
              <li className="text-black">
                Otherwise attempt to interfere with the proper working of
                Service.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              11. ANALYTICS
            </h2>
            <p className="text-black">
              We may use third-party Service Providers to monitor and analyse
              the use of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              12. NO USE BY MINORS
            </h2>
            <p className="text-black">
              Service is intended only for access and use by individuals at
              least eighteen (18) years old. By accessing or using Service, you
              warrant and represent that you are at least eighteen (18) years of
              age and with the full authority, right, and capacity to enter into
              this agreement and abide by all of the terms and conditions of
              Terms. If you are not at least eighteen (18) years old, you are
              prohibited from both the access and usage of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              13. ACCOUNTS
            </h2>
            <p className="text-black">
              When you create an account with us, you guarantee that you are
              above the age of 18, and that the information you provide us is
              accurate, complete, and current at all times. Inaccurate,
              incomplete, or obsolete information may result in the immediate
              termination of your account on Service.
            </p>
            <p className="text-black">
              You are responsible for maintaining the confidentiality of your
              account and password, including but not limited to the restriction
              of access to your computer and/or account. You agree to accept
              responsibility for any and all activities or actions that occur
              under your account and/or password, whether your password is with
              our Service or a third-party service. You must notify us
              immediately upon becoming aware of any breach of security or
              unauthorised use of your account.
            </p>
            <p className="text-black">
              You may not use as a username the name of another person or entity
              or that is not lawfully available for use, a name or trademark
              that is subject to any rights of another person or entity other
              than you, without appropriate authorisation. You may not use as a
              username any name that is offensive, vulgar or obscene.
            </p>
            <p className="text-black">
              We reserve the right to refuse service, terminate accounts, remove
              or edit content, or cancel orders at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              14. INTELLECTUAL PROPERTY
            </h2>
            <p className="text-black">
              Service and its original content (excluding Content provided by
              users), features and functionality are and will remain the
              exclusive property of TAPP! Global and its licensors. Service is
              protected by copyright, trademark, and other laws of and foreign
              countries. Our trademarks may not be used in connection with any
              product or service without the prior written consent of TAPP!
              Global.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              15. COPYRIGHT POLICY
            </h2>
            <p className="text-black">
              We respect the intellectual property rights of others. It is our
              policy to respond to any claim that Content posted on Service
              infringes on the copyright or other intellectual property rights
              ("Infringement") of any person or entity.
            </p>
            <p className="text-black">
              If you are a copyright owner, or authorised on behalf of one, and
              you believe that the copyrighted work has been copied in a way
              that constitutes copyright infringement, please submit your claim
              via email to support@tappglobal.app, with the subject line:
              "Copyright Infringement" and include in your claim a detailed
              description of the alleged Infringement as detailed below, under
              "DMCA Notice and Procedure for Copyright Infringement Claims"
            </p>
            <p className="text-black">
              You may be held accountable for damages (including costs and
              attorneys' fees) for misrepresentation or bad-faith claims on the
              infringement of any Content found on and/or through Service on
              your copyright.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              16. DMCA NOTICE AND PROCEDURE FOR COPYRIGHT INFRINGEMENT CLAIMS
            </h2>
            <p className="text-black">
              You may submit a notification pursuant to the Digital Millennium
              Copyright Act (DMCA) by providing our Copyright Agent with the
              following information in writing (see 17 U.S.C 512(c)(3) for
              further detail):
            </p>
            <ol className="list-decimal list-inside pl-4">
              <li className="text-black">
                An electronic or physical signature of the person authorised to
                act on behalf of the owner of the copyright's interest;
              </li>
              <li className="text-black">
                A description of the copyrighted work that you claim has been
                infringed, including the URL (i.e., web page address) of the
                location where the copyrighted work exists or a copy of the
                copyrighted work;
              </li>
              <li className="text-black">
                Identification of the URL or other specific location on Service
                where the material that you claim is infringing is located;
              </li>
              <li className="text-black">
                Your address, telephone number, and email address;
              </li>
              <li className="text-black">
                A statement by you that you have a good faith belief that the
                disputed use is not authorised by the copyright owner, its
                agent, or the law;
              </li>
              <li className="text-black">
                A statement by you, made under penalty of perjury, that the
                above information in your notice is accurate and that you are
                the copyright owner or authorised to act on the copyright
                owner's behalf.
              </li>
            </ol>
            <p className="text-black">
              You can contact our Copyright Agent via email at
              support@tappglobal.app.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              17. ERROR REPORTING AND FEEDBACK
            </h2>
            <p className="text-black">
              You may provide us either directly at support@tappglobal.app or
              via third party sites and tools with information and feedback
              concerning errors, suggestions for improvements, ideas, problems,
              complaints, and other matters related to our Service ("Feedback").
            </p>
            <p className="text-black">
              You acknowledge and agree that: (i) you shall not retain, acquire
              or assert any intellectual property right or other right, title or
              interest in or to the Feedback; (ii) Company may have development
              ideas similar to the Feedback; (iii) Feedback does not contain
              confidential information or proprietary information from you or
              any third party; and (iv) Company is not under any obligation of
              confidentiality with respect to the Feedback. In the event the
              transfer of the ownership to the Feedback is not possible due to
              applicable mandatory laws, you grant Company and its affiliates an
              exclusive, transferable, irrevocable, free-of-charge,
              sub-licensable, unlimited and perpetual right to use (including
              copy, modify, create derivative works, publish, distribute and
              commercialise) Feedback in any manner and for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              18. LINKS TO OTHER SITES
            </h2>
            <p className="text-black">
              Our Service may contain links to third party web sites or services
              that are not owned or controlled by TAPP! Global.
            </p>
            <p className="text-black">
              TAPP! Global has no control over, and assumes no responsibility
              for the content, privacy policies, or practices of any third party
              web sites or services. We do not warrant the offerings of any of
              these entities/individuals or their websites.
            </p>
            <p className="text-black">
              YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR
              LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR
              ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE
              ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY
              SUCH THIRD PARTY WEB SITES OR SERVICES.
            </p>
            <p className="text-black">
              WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY
              POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              19. DISCLAIMER OF WARRANTY
            </h2>
            <p className="text-black">
              THESE SERVICES ARE PROVIDED BY COMPANY ON AN "AS IS" AND "AS
              AVAILABLE" BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR
              SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED
              THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES,
              THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT
              YOUR SOLE RISK.
            </p>
            <p className="text-black">
              NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY
              WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS,
              SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
              SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR
              ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE
              SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH
              THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR
              UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES
              OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER
              HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS
              OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR
              EXPECTATIONS.
            </p>
            <p className="text-black">
              COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT
              LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT,
              AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p className="text-black">
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE
              EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              20. LIMITATION OF LIABILITY
            </h2>
            <p className="text-black">
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT,
              PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT
              ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND
              EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL,
              IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED),
              WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS
              ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT,
              INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR
              PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY
              YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR
              REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE
              IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO
              THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO
              CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES.
              SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE,
              INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR
              EXCLUSION MAY NOT APPLY TO YOU.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              21. TERMINATION
            </h2>
            <p className="text-black">
              We may terminate or suspend your account and bar access to Service
              immediately, without prior notice or liability, under our sole
              discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of Terms.
            </p>
            <p className="text-black">
              If you wish to terminate your account, you may simply discontinue
              using Service.
            </p>
            <p className="text-black">
              All provisions of Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              22. GOVERNING LAW
            </h2>
            <p className="text-black">
              These Terms shall be governed and construed in accordance with the
              laws of Singapore, which governing law applies to agreement
              without regard to its conflict of law provisions.
            </p>
            <p className="text-black">
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect. These
              Terms constitute the entire agreement between us regarding our
              Service and supersede and replace any prior agreements we might
              have had between us regarding Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              23. CHANGES TO SERVICE
            </h2>
            <p className="text-black">
              We reserve the right to withdraw or amend our Service, and any
              service or material we provide via Service, in our sole discretion
              without notice. We will not be liable if for any reason all or any
              part of Service is unavailable at any time or for any period. From
              time to time, we may restrict access to some parts of Service, or
              the entire Service, to users, including registered users.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              24. AMENDMENTS TO TERMS
            </h2>
            <p className="text-black">
              We may amend Terms at any time by posting the amended terms on
              this site. It is your responsibility to review these Terms
              periodically.
            </p>
            <p className="text-black">
              Your continued use of the Platform following the posting of
              revised Terms means that you accept and agree to the changes. You
              are expected to check this page frequently so you are aware of any
              changes, as they are binding on you.
            </p>
            <p className="text-black">
              By continuing to access or use our Service after any revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, you are no longer authorised to
              use Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              25. WAIVER AND SEVERABILITY
            </h2>
            <p className="text-black">
              No waiver by Company of any term or condition set forth in Terms
              shall be deemed a further or continuing waiver of such term or
              condition or a waiver of any other term or condition, and any
              failure of Company to assert a right or provision under Terms
              shall not constitute a waiver of such right or provision.
            </p>
            <p className="text-black">
              If any provision of Terms is held by a court or other tribunal of
              competent jurisdiction to be invalid, illegal or unenforceable for
              any reason, such provision shall be eliminated or limited to the
              minimum extent such that the remaining provisions of Terms will
              continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              26. ACKNOWLEDGEMENT
            </h2>
            <p className="text-black">
              BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE
              THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY
              THEM.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              27. CONTACT US
            </h2>
            <p className="text-black">
              Please send your feedback, comments, requests for technical
              support by email: support@tappglobal.app.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-black font-semibold mb-2 flex items-center text-center justify-center">
              REGARDING TAPP! GLOBAL'S POLICY UPDATES
            </h2>
            <p className="text-black">
              We will update this terms as necessary to stay compliant with
              relevant laws. We may update this terms and conditions from time
              to time. The updated version will be indicated by an updated
              "Revised" date and the updated version will be effective as soon
              as it is accessible. If we make material changes to this terms and
              conditions, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this terms and conditions frequently to
              be informed of how we are providing this service to you.
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
export default TermsAndConditions;
