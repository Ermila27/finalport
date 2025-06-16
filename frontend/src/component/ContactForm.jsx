import axios from "axios";
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { PacmanLoader } from 'react-spinners';
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Nav from "./nav/Nav";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [sucss, setsucss] = useState(null);

  const handleChange = (e) => {
    setError("");
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    const { name, email, message } = formData;

    emailjs.send('service_hpq6w56', 'template_raxuxgs', {
      name: name,
      email: email,
      message: message
    }, 'uil1F4mhPg9r7JoDx')
    .then(() => {
      setsucss("Thank you for your contact.");
      setIsSubmitting(false);
      setTimeout(() => {
        setsucss("");
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      if (err.message && err.message.includes('status code 500')) {
        setError("Oops! Something went wrong.");
      } else {
        setError(err.message || "An unknown error occurred.");
      }
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div className="w-full min-h-scren max-h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4 py-12">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-xl p-6 border border-white/20 text-white grid md:grid-cols-2 gap-10">
        <h2 className="text-3xl font-bold text-center md:col-span-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Let's Talk
        </h2>

        {error && (
          <div className="bg-red-400/20 text-red-300 text-sm p-3 mb-4 rounded-md">
            {error}
          </div>
        )}

        {sucss && (
          <div className="bg-green-400/20 text-green-300 text-sm p-3 mb-4 rounded-md">
            {sucss}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 order-2 md:order-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="3"
            className="w-full px-4 py-3 rounded-md bg-black/30 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-3 px-6 font-semibold rounded-md transition-all duration-300 ${
              isSubmitting || !isFormValid
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
            }`}
          >
            {isSubmitting ? <PacmanLoader size={12} color="white" /> : "Send Message"}
          </button>
        </form>

        <div className="order-1 md:order-2 flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Open to Collaborations
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            I’m always excited to hear about new ideas, freelance opportunities, and product visions. Let’s build something impactful together.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:ermiasgetnet677@gmail.com"
              className="px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition text-white text-sm"
            >
              Email Me
            </a>
            <NavLink to="/projects"
              
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-sm hover:scale-105 transition"
            >
              View Work
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
