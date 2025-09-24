import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Phone, MapPin, MessageCircle, CheckCircle, XCircle, Loader2 } from "lucide-react";
import banner from "../assets/banner.jpg";

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xovngnol", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("zahemenmoughkaa@gmail.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-16 text-white"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-green-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let’s Build Something <span className="text-white">Exceptional</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-200 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Whether it’s <span className="text-green-400 font-semibold">tech</span>,{" "}
          <span className="text-green-400 font-semibold">ministry</span>, or{" "}
          <span className="text-green-400 font-semibold">collaboration</span> —
          let’s connect and create lasting impact.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-400 mr-3" />
                <p>
                  <span className="font-semibold">Email:</span> zahemenmoughkaa@gmail.com
                </p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="ml-3 px-3 py-1 bg-green-600/80 hover:bg-green-600 rounded-lg flex items-center text-sm text-white transition"
              >
                {copySuccess ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="flex items-start">
              <Phone className="w-6 h-6 text-green-400 mr-3" />
              <p>
                <span className="font-semibold">Phone:</span> +234 707 656 0169
              </p>
            </div>

            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-400 mr-3" />
              <p>
                <span className="font-semibold">Location:</span> Dutse, Jigawa, Nigeria (Open to global collaborations)
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2347076560169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 p-8 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block font-semibold text-white">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-semibold text-white">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-semibold text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full mt-2 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </button>

            {status === "success" && (
              <p className="mt-4 flex items-center text-green-400 font-semibold">
                <CheckCircle className="w-5 h-5 mr-2" />
                Message sent successfully! I’ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center text-red-400 font-semibold">
                <XCircle className="w-5 h-5 mr-2" />
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
