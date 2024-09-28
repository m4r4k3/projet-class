import {useScroll , motion} from "framer-motion"
export default function Privacy() {
    const {scrollY} =useScroll()

  return (
    <>
      <div className="bg-[url('../image/pattern.png')] min-h-screen w-full py-[70px]">
      <div className="w-full fixed"><motion.div style={{
        width:scrollY
      }} className=" rounded  bg-gray-500 h-[5px]"></motion.div></div>
        <div className="w-[80%] sm:w-1/2 mx-auto mt-10">
          <h1 className="text-3xl text-white font-black mb-10 w-full text-center">Privacy Policy</h1>
          <p className="text-lg text-white">
            <p className="font-bold">Last Updated : 2024/09 </p>
            At EliteCareers, we are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and disclose
            information about you when you visit our website <span className="text-blue-500">EliteCareers.com </span>
            and use our services.
          </p>
          <h2 className="text-2xl font-bold text-white font-semibold my-5">
            Information We Collect
          </h2>
          <p className="text-lg text-white">
            We may collect and process the following types of information:
          </p>
          <ul className="text-lg text-white list-disc ml-5">
            <li>
              <strong>Personal Information:</strong> Information that can
              identify you as an individual, such as your name, email address,
              phone number, and mailing address, when you provide it to us
              through forms or other interactions on the Site.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use the
              Site, including your IP address, browser type, device information,
              pages visited, and the time and date of your visit.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              and similar tracking technologies to monitor activity on our Site
              and store certain information. You can instruct your browser to
              refuse all cookies or to indicate when a cookie is being sent.
            </li>
          </ul>
          <h2 className="text-2xl text-white font-bold my-5">
            How We Use Your Information
          </h2>
          <p className="text-lg text-white mb-3">
            We may use the information we collect for various purposes,
            including:
          </p>
          <ul className="text-lg text-white list-disc ml-5">
            <li>To provide, maintain, and improve our services.</li>
            <li>
              To communicate with you, including sending updates, newsletters,
              or promotional materials.
            </li>
            <li>To respond to your comments, questions, and requests.</li>
            <li>To analyze usage and trends to improve user experience.</li>
            <li>
              To detect, prevent, and address technical issues and security
              risks.
            </li>
          </ul>
          <h2 className="text-2xl text-white font-bold my-5">
            Sharing Your Information
          </h2>
          <p className="text-lg text-white mb-3">
            We do not sell or rent your personal information to third parties.
            We may share your information in the following circumstances:
          </p>
          <ul className="text-lg text-white list-disc ml-5">
            <li>
              <strong>With Service Providers:</strong> We may employ third-party
              companies and individuals to facilitate our services ("Service
              Providers"), provide the services on our behalf, perform
              service-related services, or assist us in analyzing how our
              services are used.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your personal
              information if required to do so by law or in response to valid
              requests by public authorities (e.g., a court or government
              agency).
            </li>
          </ul>
          <h2 className="text-2xl text-white font-bold my-5">
            Security of Your Information
          </h2>
          <p className="text-lg text-white">
            The security of your personal information is important to us, and we
            strive to use commercially acceptable means to protect it. However,
            please remember that no method of transmission over the Internet or
            method of electronic storage is 100% secure, and we cannot guarantee
            its absolute security.
          </p>
          <h2 className="text-2xl text-white font-bold my-5">
            Your Rights
          </h2>
          <p className="text-lg text-white mb-3">
            Depending on your location, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="text-lg text-white list-disc ml-5 mb-3">
            <li>
              The right to access, update, or delete the information we have on
              you.
            </li>
            <li>
              The right to have your information rectified if it is inaccurate
              or incomplete.
            </li>
            <li>
              The right to object to or restrict our processing of your personal
              information.
            </li>
            <li>The right to data portability.</li>
          </ul>
          <p className="text-lg text-white">
            To exercise these rights, please contact us at <span className="text-blue-500">Service@elitecareers.com</span>.
          </p>
          <h2 className="text-2xl text-white font-bold my-5">
            Changes to This Privacy Policy
          </h2>
          <p className="text-lg text-white">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            with a new "Last Updated" date. You are advised to review this
            Privacy Policy periodically for any changes.
          </p>
          <h2 className="text-2xl text-white font-bold my-5">Contact Us</h2>
          <p className="text-lg text-white mb-3">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul className="text-lg text-white list-disc ml-5">
            <li><b>By email:</b> Service@elitecareers.com</li>
            <li>
            <b>By visiting this page on our website:</b> elitecareers.com
            </li>
            <li><b>By phone:</b> (202) 456-1111</li>
          </ul>
        </div>
      </div>
    </>
  );
}
