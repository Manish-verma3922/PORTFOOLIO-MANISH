import { motion } from "framer-motion";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://portfoolio-manish.onrender.com/api/contact", formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6"
        >
          <div className="flex items-center gap-3 bg-black/40 border border-white/10 p-4 rounded-lg">
            <FaUser className="text-blue-400" />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex items-center gap-3 bg-black/40 border border-white/10 p-4 rounded-lg">
            <FaEnvelope className="text-blue-400" />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-transparent outline-none w-full"
            />
          </div>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-black/40 border border-white/10 p-4 rounded-lg outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
