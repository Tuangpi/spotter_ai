import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../assets/Logo";

const Footer = () => {
  return (
    <div className="text-gray-200">
      <div className="bg-[#051830] py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <Logo />
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>spotter App</div>
            <div>extension</div>
            <div>lens</div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="bg-[#218080] p-2 rounded-full">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="bg-[#218080] p-2 rounded-full">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="bg-[#218080] p-2 rounded-full">
              <Instagram className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="m-auto flex justify-between items-center w-fit mt-14 gap-2">
          <div>playstore</div>
          <div>google play</div>
        </div>
      </div>
      <div className="bg-[#0D1E2D] text-gray-400 py-8">
        <p className="text-center text-sm">
          2025 Copyright spotter.ai. All rights reserved. Careers | Terms of
          service | CCPA
        </p>
        <p className="text-center text-sm italic mt-1">
          251 Little Falls Dr. Wilmington DE 19808
        </p>
      </div>
    </div>
  );
};
export default Footer;
