import { FC, useState } from "react";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy: FC = () => {
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
          style={{ cursor: "pointer" }}
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
        <h1 className="text-3xl font-bold mb-6  flex items-center text-center justify-center">
          TAPP! Global Privacy Policy
        </h1>
        <p className="mb-4 font-semibold flex items-center text-center justify-center">
          Last Updated: 15 August 2024
        </p>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              1. INTRODUCTION
            </h2>
            <p>
              TAPP! Global represents TAPP! GLOBAL TECHNOLOGIES PTE. LTD. (UEN:
              202406870G, incorporated in Singapore) & TAPP GLOBAL TECHNOLOGIES
              SDN. BHD. (ROC: 202301005424, incorporated in Kuala Lumpur,
              Malaysia), ("Company", "we", "our", "us")
            </p>
            <p>
              1.1 This privacy notice for personal data ("Personal Data Privacy
              Notice") is issued to all our valued customers and guests of TAPP!
              Global ("us", "we", "our" or "ours") which operates as
              tappglobal.app (hereinafter referred to as "Service"), pursuant to
              the statutory requirements of the Singapore Personal Data
              Protection Act 2012 ("PDPA").
            </p>
            <p>
              1.2 Our Privacy Policy applies to personal information about
              individuals (customers, vendors, distributors, suppliers, service
              providers, joint venture/business partners, job applicants,
              employees) held by us. We will only process your Personal Data in
              accordance with the Singapore Personal Data Protection Act 2012,
              the applicable regulations, guidelines, orders made under the
              Singapore Personal Data Protection Act 2012 and any statutory
              amendments or re-enactments made of the Singapore Personal Data
              Protection Act 2012 from time to time as well as this Policy.
            </p>
            <p>
              1.3 The PDPA requires us to inform you of your rights in respect
              of your Personal Data that is being processed or that is to be
              collected and further processed by us and the purposes for the
              data processing. The PDPA also requires us to obtain your consent
              to the processing of your Personal Data. In light of the PDPA, we
              are committed to protecting and safeguarding your Personal Data.
            </p>
            <p>
              1.4 By providing your Personal Data to us and/or continuing access
              to our website ("Site"), you declare that you have read and
              understood this Policy and agree to us processing your Personal
              Data in accordance with the manner as set out in this Policy.
            </p>
            <p>
              1.5 We reserve the right to modify, update and/or amend this
              Policy from time to time with reasonable prior notice to you. We
              will notify you of any amendments via announcements on the Site or
              other appropriate means. Please check the Site from time to time
              to see if there are amendments to this Policy. Any amendments to
              this Policy will be effective upon notice to you. By continuing to
              use the services and/or access to the Site after being notified of
              any amendments to this Policy, you will be treated as having
              agreed to and accepted those amendments.
            </p>
            <p>
              1.6 If you do not agree to this Policy or any amendments to this
              Policy, we may not be able to render all services to you and you
              may be required to terminate your relevant agreement with us
              and/or stop accessing or using the Site. We use your data to
              provide and improve Service. By using Service, you agree to the
              collection and use of information in accordance with this policy.
              Unless otherwise defined in this Privacy Policy, the terms used in
              this Privacy Policy have the same meanings as in our Terms and
              Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              2. DEFINITIONS
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>SERVICE</strong> means the websites related to the
                domain tappglobal.app operated by TAPP! Global
              </li>
              <li>
                <strong>PERSONAL DATA</strong> means data about a living
                individual who can be identified from those data (or from those
                and other information either in our possession or likely to come
                into our possession).
              </li>
              <li>
                <strong>USAGE DATA</strong> is data collected automatically
                either generated by the use of Service or from Service
                infrastructure itself (for example, the duration of a page
                visit).
              </li>
              <li>
                <strong>COOKIES</strong> are small files stored on your device
                (computer or mobile device).
              </li>
              <li>
                <strong>DATA CONTROLLER</strong> means a natural or legal person
                who (either alone or jointly or in common with other persons)
                determines the purposes for which and the manner in which any
                personal data are, or are to be, processed. For the purpose of
                this Privacy Policy, we are a Data Controller of your data.
              </li>
              <li>
                <strong>DATA PROCESSORS (OR SERVICE PROVIDERS)</strong> means
                any natural or legal person who processes the data on behalf of
                the Data Controller. We may use the services of various Service
                Providers in order to process your data more effectively.
              </li>
              <li>
                <strong>DATA SUBJECT</strong> is any living individual who is
                the subject of Personal Data.
              </li>
              <li>
                <strong>THE USER</strong> is the individual using our Service.
                The User corresponds to the Data Subject, who is the subject of
                Personal Data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              3. INFORMATION COLLECTION AND USE
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              4. TYPES OF DATA COLLECTED
            </h2>
            <h3 className="text-lg font-semibold mt-4 mb-2">Personal Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you ("Personal Data"). Personally identifiable
              information, as defined under the PDPA may include, but is not
              limited to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Country</li>
            </ul>
            <p className="mt-4">
              We may use your Personal Data to contact you with newsletters,
              marketing or promotional materials and other information that may
              be of interest to you. You may opt out of receiving any, or all,
              of these communications from us by following the unsubscribe link.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Collection Of Personal Data
            </h3>
            <p>
              The types of Personal Data collected depend on the purpose of
              collection. We may "process" your Personal Data by way of
              collecting, recording, holding, storing, using and/or disclosing
              it.
            </p>
            <p>
              Your Personal Data may be collected from you during your course of
              dealings with us in any way or manner including pursuant to any
              transactions and/or communications made from/with us. We may also
              collect your Personal Data from a variety of sources, including
              without limitation, at any events, seminars, road shows, customer
              satisfaction surveys organised and/or sponsored by us, as well as
              from publicly available sources. Some examples of how personal
              data can be collected:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>When you register your details on tappglobal.app website;</li>
              <li>
                When you subscribe to TAPP! Global's monthly/annual subscription
                services (by phone, in person, snail mail, or electronically);
              </li>
              <li>
                When you communicate with us directly via our co-workers in
                relation to our products and services (in person, by email,
                telephone, direct mail or any other means);
              </li>
              <li>
                When you conduct certain types of transactions such as refunds;
              </li>
              <li>
                When you enter, and when you interact with us during promotions,
                competitions, contests, lucky draws, special events, or by using
                devices within our stores;
              </li>
              <li>
                Participate in surveys and other types of research; or If you
                are a candidate for employment when you complete forms in
                relation to the recruitment and selection process for the
                purpose of assessment.
              </li>
              <li>
                We may also collect information about you from your nominated
                referees where you have authorised us to do so.
              </li>
            </ol>

            <h3 className="text-lg font-semibold mt-4 mb-2">Usage Data</h3>
            <p>
              We may also collect information that your browser sends whenever
              you visit our Service or when you access Service by or through any
              device ("Usage Data").
            </p>
            <p>
              This Usage Data may include information such as your computer's
              Internet Protocol address (e.g. IP address), browser type, browser
              version, the pages of our Service that you visit, the time and
              date of your visit, the time spent on those pages, unique device
              identifiers and other diagnostic data.
            </p>
            <p>
              When you access Service with a device, this Usage Data may include
              information such as the type of device you use, your device unique
              ID, the IP address of your device, your device operating system,
              the type of Internet browser you use, unique device identifiers
              and other diagnostic data.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Location Data</h3>
            <p>
              We may use and store information about your location if you give
              us permission to do so ("Location Data"). We use this data to
              provide features of our Service, to improve and customise our
              Service.
            </p>
            <p>
              You can enable or disable location services when you use our
              Service at any time by way of your device settings.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">
              Tracking Cookies Data
            </h3>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Service and we hold certain information.
            </p>
            <p>
              Cookies are files with a small amount of data which may include an
              anonymous unique identifier. Cookies are sent to your browser from
              a website and stored on your device. Other tracking technologies
              are also used such as beacons, tags and scripts to collect and
              track information and to improve and analyse our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our Service.
            </p>
            <p>Examples of Cookies we use:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Session Cookies:</strong> We use Session Cookies to
                operate our Service.
              </li>
              <li>
                <strong>Preference Cookies:</strong> We use Preference Cookies
                to remember your preferences and various settings.
              </li>
              <li>
                <strong>Security Cookies:</strong> We use Security Cookies for
                security purposes.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Advertising Cookies are
                used to serve you with advertisements that may be relevant to
                you and your interests.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Other Data</h3>
            <p>
              While using our Service, we may also collect the following
              information: sex, age, date of birth, place of birth, passport
              details, citizenship, registration at place of residence and
              actual address, telephone number (work, mobile), details of
              documents on education, qualification, professional training,
              employment agreements, NDA agreements, information on bonuses and
              compensation, information on marital status, family members,
              social security (or other taxpayer identification) number, office
              location and other data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              5. USE OF DATA
            </h2>
            <p>TAPP! Global uses the collected data for various purposes:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>To provide and maintain our Service;</li>
              <li>To notify you about changes to our Service;</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so;
              </li>
              <li>To provide customer support;</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Service;
              </li>
              <li>To monitor the usage of our Service;</li>
              <li>To detect, prevent and address technical issues;</li>
              <li>To fulfil any other purpose for which you provide it;</li>
              <li>
                To carry out our obligations and enforce our rights arising from
                any contracts entered into between you and us, including for
                billing and collection;
              </li>
              <li>
                To provide you with notices about your account and/or
                subscription, including expiration and renewal notices,
                email-instructions, etc.;
              </li>
              <li>
                To provide you with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless you have opted not to receive such information;
              </li>
              <li>
                In any other way we may describe when you provide the
                information;
              </li>
              <li>For any other purpose with your consent.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              6. RETENTION OF DATA
            </h2>
            <p>
              We will retain your Personal Data only for as long as is necessary
              for the purposes set out in this Privacy Policy. We will retain
              and use your Personal Data to the extent necessary to comply with
              our legal obligations (for example, if we are required to retain
              your data to comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </p>
            <p>
              We will also retain Usage Data for internal analysis purposes.
              Usage Data is generally retained for a shorter period, except when
              this data is used to strengthen the security or to improve the
              functionality of our Service, or we are legally obligated to
              retain this data for longer time periods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              7. TRANSFER OF DATA
            </h2>
            <p>
              Your information, including Personal Data, may be transferred to –
              and maintained on – computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
            </p>
            <p>
              If you are located outside Singapore and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to Singapore and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </p>
            <p>
              TAPP! Global will take all the steps reasonably necessary to
              ensure that your data is treated securely and in accordance with
              this Privacy Policy and no transfer of your Personal Data will
              take place to an organisation or a country unless there are
              adequate controls in place including the security of your data and
              other personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              8. DISCLOSURE OF DATA
            </h2>
            <p>
              We may disclose personal information that we collect, or you
              provide:
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Disclosure for Law Enforcement.
            </h3>
            <p>
              Under certain circumstances, we may be required to disclose your
              Personal Data if required to do so by law or in response to valid
              requests by public authorities.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Business Transaction.
            </h3>
            <p>
              If we or our subsidiaries are involved in a merger, acquisition or
              asset sale, your Personal Data may be transferred.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Other cases. We may disclose your information also:
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>To our subsidiaries and affiliates;</li>
              <li>
                To contractors, service providers, and other third parties we
                use to support our business;
              </li>
              <li>To fulfill the purpose for which you provide it;</li>
              <li>
                For the purpose of including your company's logo on our website;
              </li>
              <li>
                For any other purpose disclosed by us when you provide the
                information;
              </li>
              <li>With your consent in any other cases;</li>
              <li>
                If we believe disclosure is necessary or appropriate to protect
                the rights, property, or safety of the Company, our customers,
                or others.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              9. SECURITY OF DATA
            </h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              10. YOUR DATA PROTECTION RIGHTS UNDER GENERAL DATA PROTECTION
              REGULATION (GDPR)
            </h2>
            <p>
              If you are a resident of the European Union (EU) and European
              Economic Area (EEA), you have certain data protection rights,
              covered by GDPR. We aim to take reasonable steps to allow you to
              correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <p>
              If you wish to be informed what Personal Data we hold about you
              and if you want it to be removed from our systems, please email us
              at support@tappglobal.app.
            </p>
            <p>
              In certain circumstances, you have the following data protection
              rights:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                The right to access, update or to delete the information we have
                on you;
              </li>
              <li>
                The right of rectification. You have the right to have your
                information rectified if that information is inaccurate or
                incomplete;
              </li>
              <li>
                The right to object. You have the right to object to our
                processing of your Personal Data;
              </li>
              <li>
                The right of restriction. You have the right to request that we
                restrict the processing of your personal information;
              </li>
              <li>
                The right to data portability. You have the right to be provided
                with a copy of your Personal Data in a structured,
                machine-readable and commonly used format;
              </li>
              <li>
                The right to withdraw consent. You also have the right to
                withdraw your consent at any time where we rely on your consent
                to process your personal information;
              </li>
            </ol>
            <p>
              Please note that we may ask you to verify your identity before
              responding to such requests. Please note, we may not able to
              provide Service without some necessary data.
            </p>
            <p>
              You have the right to complain to a Data Protection Authority
              about our collection and use of your Personal Data. For more
              information, please contact your local data protection authority
              in the European Economic Area (EEA).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              11. YOUR DATA PROTECTION RIGHTS UNDER THE CALIFORNIA PRIVACY
              PROTECTION ACT (CALOPPA)
            </h2>
            <p>
              CalOPPA is the first state law in the nation to require commercial
              websites and online services to post a privacy policy. The law's
              reach stretches well beyond California to require a person or
              company in the United States (and conceivable the world) that
              operates websites collecting personally identifiable information
              from California consumers to post a conspicuous privacy policy on
              its website stating exactly the information being collected and
              those individuals with whom it is being shared, and to comply with
              this policy.
            </p>
            <p>According to CalOPPA we agree to the following:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Users can visit our site anonymously;</li>
              <li>
                Our Privacy Policy link includes the word "Privacy", and can
                easily be found on the home page of our website;
              </li>
              <li>
                Users will be notified of any privacy policy changes on our
                Privacy Policy Page;
              </li>
              <li>
                Users are able to change their personal information by emailing
                us at support@tappglobal.app.
              </li>
            </ol>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Our Policy on "Do Not Track" Signals:
            </h3>
            <p>
              We honor Do Not Track signals and do not track, plant cookies, or
              use advertising when a Do Not Track browser mechanism is in place.
              Do Not Track is a preference you can set in your web browser to
              inform websites that you do not want to be tracked.
            </p>
            <p>
              You can enable or disable Do Not Track by visiting the Preferences
              or Settings page of your web browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              12. YOUR DATA PROTECTION RIGHTS UNDER THE CALIFORNIA CONSUMER
              PRIVACY ACT (CCPA)
            </h2>
            <p>
              If you are a California resident, you are entitled to learn what
              data we collect about you, ask to delete your data and not to sell
              (share) it. To exercise your data protection rights, you can make
              certain requests and ask us:
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              1. What personal information we have about you. If you make this
              request, we will return to you:
            </h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                The categories of personal information we have collected about
                you.
              </li>
              <li>
                The categories of sources from which we collect your personal
                information.
              </li>
              <li>
                The business or commercial purpose for collecting or selling
                your personal information.
              </li>
              <li>
                The categories of third parties with whom we share personal
                information.
              </li>
              <li>
                The specific pieces of personal information we have collected
                about you.
              </li>
              <li>
                A list of categories of personal information that we have sold,
                along with the category of any other company we sold it to. If
                we have not sold your personal information, we will inform you
                of that fact.
              </li>
              <li>
                A list of categories of personal information that we have
                disclosed for a business purpose, along with the category of any
                other company we shared it with.
              </li>
            </ol>
            <p>
              Please note, you are entitled to ask us to provide you with this
              information up to two times in a rolling twelve-month period. When
              you make this request, the information provided may be limited to
              the personal information we collected about you in the previous 12
              months.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              2. To delete your personal information. If you make this request,
              we will delete the personal information we hold about you as of
              the date of your request from our records and direct any service
              providers to do the same. In some cases, deletion may be
              accomplished through de-identification of the information. If you
              choose to delete your personal information, you may not be able to
              use certain functions that require your personal information to
              operate.
            </h3>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              3. To stop selling your personal information. We don't sell or
              rent your personal information to any third parties for any
              purpose. We do not sell your personal information for monetary
              consideration. However, under some circumstances, a transfer of
              personal information to a third party, or within our family of
              companies, without monetary consideration may be considered a
              "sale" under California law. You are the only owner of your
              Personal Data and can request disclosure or deletion at any time.
            </h3>
            <p>
              If you submit a request to stop selling your personal information,
              we will stop making such transfers.
            </p>
            <p>
              Please note, if you ask us to delete or stop selling your data, it
              may impact your experience with us, and you may not be able to
              participate in certain programs or membership services which
              require the usage of your personal information to function. But in
              no circumstances, we will discriminate against you for exercising
              your rights.
            </p>
            <p>
              To exercise your California data protection rights described
              above, please send your request(s) by email:
              support@tappglobal.app.
            </p>
            <p>
              Your data protection rights, described above, are covered by the
              CCPA, short for the California Consumer Privacy Act. To find out
              more, visit the official California Legislative Information
              website. The CCPA took effect on 01/01/2020.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              13. SERVICE PROVIDERS
            </h2>
            <p>
              We may employ third party companies and individuals to facilitate
              our Service ("Service Providers"), provide Service on our behalf,
              perform Service-related services or assist us in analysing how our
              Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to
              perform these tasks on our behalf and are obligated not to
              disclose or use it for any other purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              14. ANALYTICS
            </h2>
            <p>
              We may use third-party Service Providers to monitor and analyse
              the use of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              15. CI/CD TOOLS
            </h2>
            <p>
              We may use third-party Service Providers to automate the
              development process of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              16. BEHAVIOURAL REMARKETING
            </h2>
            <p>
              We may use remarketing services to advertise on third party
              websites to you after you visited our Service. We and our
              third-party vendors use cookies to inform, optimise and serve ads
              based on your past visits to our Service.
            </p>
            <h3 className="text-lg font-semibold mt-4 mb-2">
              Google Ads (AdWords)
            </h3>
            <p>
              Google Ads (AdWords) remarketing service is provided by Google
              Inc. You can opt-out of Google Analytics for Display Advertising
              and customise the Google Display Network ads by visiting the
              Google Ads Settings page:
              https://myadcenter.google.com/personalizationoff
            </p>
            <p>
              Google also recommends installing the Google Analytics Opt-out
              Browser Add-on: https://tools.google.com/dlpage/gaoptout for your
              web browser. Google Analytics Opt-out Browser Add-on provides
              visitors with the ability to prevent their data from being
              collected and used by Google Analytics.
            </p>
            <p>
              For more information on the privacy practices of Google, please
              visit the Google Privacy Terms web page:
              https://policies.google.com/privacy?hl=en
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              17. PAYMENTS
            </h2>
            <p>
              We may provide paid products and/or services within Service. In
              that case, we use third-party services for payment processing
              (e.g. payment processors).
            </p>
            <p>
              We will not store or collect your payment card details. That
              information is provided directly to our third-party payment
              processors whose use of your personal information is governed by
              their Privacy Policy. These payment processors adhere to the
              standards set by PCI-DSS as managed by the PCI Security Standards
              Council, which is a joint effort of brands like Visa, Mastercard,
              American Express and Discover. PCI-DSS requirements help ensure
              the secure handling of payment information.
            </p>
            <p>The payment processors we work with are:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Xendit: Their Privacy Policy can be viewed at:
                https://www.xendit.co/en/privacy-policy
              </li>
              <li>
                Stripe: Their Privacy Policy can be viewed at:
                https://stripe.com/us/privacy
              </li>
              <li>
                Curlec: Their Privacy Policy can be viewed at:
                https://curlec.com/s/privacy
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              18. LINKS TO OTHER SITES
            </h2>
            <p>
              Our Service may contain links to other sites that are not operated
              by us. If you click a third party link, you will be directed to
              that third party's site. We strongly advise you to review the
              Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              19. CHILDREN'S PRIVACY
            </h2>
            <p>
              Our Services are not intended for use by children under the age of
              18 ("Child" or "Children").
            </p>
            <p>
              We do not knowingly collect personally identifiable information
              from Children under 18. If you become aware that a Child has
              provided us with Personal Data, please contact us. If we become
              aware that we have collected Personal Data from Children without
              verification of parental consent, we take steps to remove that
              information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              20. CONTACT US
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email: support@tappglobal.app.
            </p>
            <p>
              This Privacy Policy was created for TAPP! Global on 15 Aug 2024.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 flex items-center text-center justify-center">
              REGARDING TAPP! GLOBAL'S POLICY UPDATES
            </h2>
            <p>
              We will update this policy as necessary to stay compliant with
              relevant laws. We may update this privacy policy from time to
              time. The updated version will be indicated by an updated
              "Revised" date and the updated version will be effective as soon
              as it is accessible. If we make material changes to this privacy
              policy, we may notify you either by prominently posting a notice
              of such changes or by directly sending you a notification. We
              encourage you to review this privacy policy frequently to be
              informed of how we are protecting your information.
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

export default PrivacyPolicy;
