import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Red Pill Software</h3>
          <p className="text-gray-400">
            Transforming ideas into digital reality
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <p className="text-gray-400">contact.redpill@gmail.com</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
