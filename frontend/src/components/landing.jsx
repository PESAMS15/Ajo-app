import React, { useState } from 'react';
import logo from '../Assets/pgi-white.png';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import securityImage from '../Assets/security.jpeg';
import interfaceImage from '../Assets/interface.jpeg';
import investmentsImage from '../Assets/investment.jpeg';
import pricingImage from '../Assets/pricing.jpeg';
import guidanceImage from '../Assets/guidance.jpeg';
import supportImage from '../Assets/support.jpeg';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

//   const themeClass = darkMode ? 'dark' : '';
  const themeClass = darkMode ? 'dark' : '';

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className={`bg-gray-100   ${themeClass}`}>
      <animated.header style={fadeIn} className={`bg-white py-8 px-4 ${themeClass}`}>
        <img src={logo} alt="PGI Logo" className="mx-auto" />
        <h1 className={`text-4xl text-center font-semibold mb-2 ${themeClass}`}>
          Welcome to Persy Grow Investment Limited (PGI)!
        </h1>
        <p className={`text-gray-600 text-center ${themeClass}`}>Your Trusted Partner for Thrift Management</p>
      </animated.header>
      <animated.section style={fadeIn} className={`py-12 px-4 ${themeClass}`}>
        <h2 className={`text-2xl font-semibold mb-8 text-center ${themeClass}`}>Why Choose PGI?</h2>
        <div className="flex flex-wrap justify-center">
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={securityImage} alt="Security" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>High Security</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                We prioritize the security of your investments and personal information.
              </p>
            </div>
          </animated.div>
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={interfaceImage} alt="Interface" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>User-Friendly Interface</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                Our intuitive platform makes it easy for you to manage your investments effortlessly.
              </p>
            </div>
          </animated.div>
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={investmentsImage} alt="Investments" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>Thrift Creations</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                Create your own thrift and add people you know to take your financial status to the next level.
              </p>
            </div>
          </animated.div>
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={pricingImage} alt="Pricing" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>Custom Pricing</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                Add your own prices to the thrift you've created for your thrift members and edit it anytime .
              </p>
            </div>
          </animated.div>
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={guidanceImage} alt="Guidance" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>Expert Guidance</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                Our team of financial experts is ready to assist you in making informed investment decisions.
              </p>
            </div>
          </animated.div>
          <animated.div style={fadeIn} className={`max-w-sm rounded-lg overflow-hidden shadow-lg mx-4 mb-6 ${themeClass}`}>
            <img src={supportImage} alt="Support" className="w-full h-60" />
            <div className="px-6 py-4">
              <h3 className={`text-xl font-semibold mb-2 ${themeClass}`}>24/7 Customer Support</h3>
              <p className={`text-gray-700 ${themeClass}`}>
                We are available round the clock to address any queries or concerns you may have.
              </p>
            </div>
          </animated.div>
        </div>
      </animated.section>
      <animated.section style={fadeIn} className={`bg-gray-800 text-white py-12 px-4 `}>
        <h2 className={`text-2xl font-semibold mb-8 text-center `}>
          Start Your Financial Journey Today
        </h2>
        <p className={`text-center text-gray-400 mb-6 `}>
          Join Persy Grow Investment Limited and take control of your financial future.
        </p>
        <div className="flex justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ${themeClass}`}
          >
            Get Started
          </button>
        </div>
      </animated.section>
      <animated.footer style={fadeIn} className={`bg-gray-900 text-white py-8 px-4 `}>
        <div className="container mx-auto md:flex md:justify-between">
          <div className="mb-6 md:mr-10">
            <h3 className={`text-lg font-semibold mb-4 $`}>About PGI</h3>
            <p className={`text-gray-400  w-2/3`}>
              Persy Grow Investment Limited is a trusted financial thrift institution dedicated to helping individuals and businesses
              achieve their financial goals through sound investment strategies.
            </p>
          </div>
          <div className="mb-6 md:mr-10">
            <h3 className={`text-lg font-semibold mb-4 $`}>Contact Us</h3>
            <p className={`text-gray-400 $`}>
              Phone: +2349045098857<br />
              Email: info@pgi.com<br />
              Address: 123 Main Street, City, Country
            </p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-4 md:w-24 $`}>Follow Us</h3>
            <div>
  <a href="#" className="text-gray-400 text-xl hover:text-white mr-2">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="text-gray-400 text-xl hover:text-white mr-2">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="#" className="text-gray-400 text-xl hover:text-white mr-2">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
</div>
          </div>
        </div>
        <div className={`bg-gray-800 py-4 text-center m-2 $`}>
          <p className={`text-gray-400 $`}>&copy; 2023 Persy Grow Investment Limited. All rights reserved.</p>
        </div>
      </animated.footer>
    </div>
  );
};

export default LandingPage;
