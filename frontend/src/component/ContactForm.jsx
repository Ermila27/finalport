import axios from "axios";
import React, { useState } from "react";
import emailjs from 'emailjs-com';

import { PacmanLoader } from 'react-spinners';
import { FcHome } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import Nav from "./nav/Nav";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
const [sucss,setsucss]=useState(null)
  // Handle form input changes
  const handleChange = (e) => {
    setError("")
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };   

     

  // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
       setIsSubmitting(true);
        setError("")
        const {name,email,message}=formData;
        emailjs.send('service_hpq6w56','template_raxuxgs',{
          name:name,
          email:email,
          message:message
        },
        'uil1F4mhPg9r7JoDx')
        .then((res)=>{
          setsucss("thank you for your contact ")
          setIsSubmitting(false);
          setTimeout(() => {
            setsucss("");
            setFormData({ name: "", email: "", message: "" }); // Reset form fields
    
          }, 2000);
    
        }).catch((err)=>{
            console.log(err);
    if (err.message && err.message.includes('status code 500')) {
      setError("Oops! Something went wrong.");
  } else {
      setError(err.message || "An unknown error occurred.");
  }

setFormData({ name: "", email: "", message: "" }); // Reset form fields
setIsSubmitting(false)
          
        })
  };

  // Validation for empty fields
  const isFormValid = formData.name && formData.email && formData.message;

  return (



           <div className=" dark:bg-black w-full flex justify-center items-center">
           <div  className=" py-8 bg-slate-200  dark:bg-black w-full  justify-center items-center">

           <div id="ans" className="w-full    max-w-lg p-6 mx-auto   bg-black text-white shadow-lg rounded-xl border-2 border-gray-700">
      <h2 className="text-2xl font-bold text-center text-white mb-4">Contact Me</h2>
      {error && (
        <div className="bg-red-200 text-red-600 p-2 mb-2 rounded">
          <p>{error}</p>
        </div>
      )}
       {sucss && (
        <div className="bg-green-200 text-green-700 text-opacity-45 p-3 mb-4 rounded">
          <p>{sucss}</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-md border-gray-600 bg-gray-800 text-white focus:outline-none  focus:border-red-400 transition duration-200"
            placeholder="Write your message here"
            rows="5"
          />
        </div>


        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full py-2 px-4 text-white flex justify-center items-center font-semibold rounded-md transition duration-300 ${
              isSubmitting || !isFormValid
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            }`}
          >
          {isSubmitting ? <PacmanLoader size={12} color={"white"}/>  : <div className="h-8  flex justify-center items-center w-fit ">send</div>}
          </button>
        </div>
      </form>
    </div>

</div>

           </div>
     );
};

export default ContactForm;
