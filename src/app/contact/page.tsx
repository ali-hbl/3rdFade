"use client";

import { FaqSection } from "@/components/FaqSection";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unknown error while sending the form.");
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          budget: "",
          message: "",
        });
      }, 3000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unexpected error while sending the form.";
      alert("Error while sending the form: " + message);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "thirdfade@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Leuven, Belgium",
    },
  ];

  const projectTypes = [
    "Commercial",
    "Corporate Video",
    "Music Video",
    "Documentary",
    "Other",
  ];

  const budgetRanges = [
    "Under €1,000",
    "€1,000 - €3,000",
    "€3,000 - €5,000",
    "€5,000 - €10,000",
    "Over €10,000",
    "To be discussed",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair text-white mb-6">
              Ready to bring your project to life?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let’s talk about your ideas and create something extraordinary
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-playfair text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg text-gray-300 mb-1">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-gray-800/50 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-red-500" />
                  <h3 className="text-xl font-semibold text-white">
                    Availability
                  </h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p>
                    Available for freelance projects and creative
                    collaborations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-3xl font-bold font-playfair text-white mb-8">
                  Start a Project
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Message sent!
                    </h3>
                    <p className="text-gray-400">
                      I will get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Full name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="project"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Project type *
                        </label>
                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Estimated budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                        >
                          <option value="">Select a budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                        placeholder="Describe your project in detail..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Frequently Asked Questions"
        description="A few answers to questions you may have before starting a project."
      />
    </div>
  );
}
