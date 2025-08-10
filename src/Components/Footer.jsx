import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Logo } from "../Assets";

const Footer = () => {
  return (
    <footer className="bg-[#00462F] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="Dha"
            className="mb-2 w-24"
          />
          <p className="text-[#C58D53] italic text-lg mb-4">
            Florida’s Friendliest Hometown®
          </p>

          <div className="flex gap-3 text-2xl mb-4">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

        </div>

     

        {/* Right Newsletter */}
        <div>
          <h2 className="text-2xl font-serif mb-1">Stay in the Know!</h2>
          <p className="text-sm mb-4">
            Sign up for Vmail, our weekly email newsletter.
          </p>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 bg-white placeholder-[#b9b9b9] text-base text-black rounded-lg px-4 py-3 outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 bg-white placeholder-[#b9b9b9] text-base text-black rounded-lg px-4 py-3 outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white placeholder-[#b9b9b9] text-base text-black rounded-lg px-4 py-3 outline-none mb-3"
          />




          <button className="bg-[#C58D53] hover:bg-[#a8743e] text-white px-6 py-2 rounded-md font-semibold">
            Subscribe to Vmail
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <h3 className="text-xl font-serif">
          May All Your <span className="text-[#C58D53] italic font-script text-2xl">Dreams</span> Come True
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-xs mt-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Brand & Trademark</a>
          <a href="#">Commercial Leasing</a>
        </div>
        <p className="text-xs mt-4">
          ©2025 Holding Company of DHA Rahbar, Inc. All Rights Reserved. DHA Rahbar is a registered trademark of Holding Company of DHA Rahbar, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer