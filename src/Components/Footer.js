import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
// import logo from '../Assets/logo.png'

import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-[#404040] py-16 px-8 mt-[100px]">
      <div className="grid lg:grid-cols-4 gap-[0px]">
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-5">
            <img src='/icon.png' className="h-16 w-16" alt="Craftopia Logo" />
            <span className="self-center text-red-200 text-2xl md:text-4xl font-bold mb-2 font-[Lemon] border-b-4 border-red-600 p-1">
              Craftopia
            </span>
          </a>
          <p className="py-4 sm:text-xl text-justify text-white w-[80%]">
            Join us on the path to appretiate the local art and craft, where
            each piece of work is a step toward unlocking full potential in the
            ever-evolving world of Local Talent
          </p>
          <div className="flex justify-evenly w-[90%] sm:w-[40%] lg:w-[70%] my-6">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare size={50} className="text-gray-300" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={50} className="text-gray-300" />
            </a>
            <a href="https://www.twitter.com/">
              <FaTwitterSquare size={50} className="text-gray-300" />
            </a>
            <a href="https://www.github.com/">
              <FaGithubSquare size={50} className="text-gray-300" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-wrap justify-between gap-4 mt-6">
          <div>
            <h6 className="font-bold text-black md:text-2xl border-b p-1 mb-1">
              Solutions
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Analytics</li>
              <li className="py-2 text-lg text-gray-200">Marketing</li>
              <li className="py-2 text-lg text-gray-200">Commerce</li>
              <li className="py-2 text-lg text-gray-200">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-black md:text-2xl border-b p-1 mb-1">
              Support
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Pricing</li>
              <li className="py-2 text-lg text-gray-200">Documentation</li>
              <li className="py-2 text-lg text-gray-200">Guides</li>
              <li className="py-2 text-lg text-gray-200">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold md:text-2xl border-b p-1 mb-1">
              Company
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">About</li>
              <li className="py-2 text-lg text-gray-200">Blog</li>
              <li className="py-2 text-lg text-gray-200">Jobs</li>
              <li className="py-2 text-lg text-gray-200">Press</li>
              <li className="py-2 text-lg text-gray-200">Team</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-black md:text-2xl border-b p-1 mb-1">
              Legal
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Claim</li>
              <li className="py-2 text-lg text-gray-200">Policy</li>
              <li className="py-2 text-lg text-gray-200">Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center relative top-[35px]">
        <div className="text-white text-center">
          <FaRegCopyright className="inline w-[20px] h-[20px] mx-2" />
          Copyright Craftopia 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer
