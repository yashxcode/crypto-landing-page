import React from "react"
import Logo from "../assets/img/logo.svg"
import VisaImg from "../assets/img/visa.png"
import MastercardImg from "../assets/img/mastercard.png"
import BitcoinImg from "../assets/img/bitcoin.png"
import { IoLogoYoutube, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#">
              <img src={Logo} alt="Company Logo" />
            </a>
          </div>
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Quick Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a href="#" className="hover:text-blue transition">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Products</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Contact</a>
                </li>
              </ul>
            </div>
            <div className="text-center w-full lg:text-left">
              <div className="text-xl font-medium mb-6">Resources Links</div>
              <ul className="space-y-4 text-gray">
                <li>
                  <a href="#" className="hover:text-blue transition">Download Whitepaper</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Smart Token</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Blockchain Explore</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Crypto API</a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue transition">Interest</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">We accept following payment methods</h3>
              <div className="flex justify-center items-center gap-6">
                <img src={VisaImg} />
                <img src={MastercardImg} />
                <img src={BitcoinImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <div>&copy; 2023 CRAPPO. All rights reserved.</div>
          <div className="flex text-2xl gap-x-8">
            <a href="#" className="hover:text-blue transition">
              <IoLogoYoutube />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoTwitter />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer