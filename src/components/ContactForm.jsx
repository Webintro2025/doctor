"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const res = await fetch("/api/sitemap/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Your enquiry has been sent successfully!");
        setForm({ fullName: "", phoneNumber: "", email: "", message: "" });
      } else {
        setError(data.error || "Failed to send enquiry. Try again later.");
      }
    } catch (err) {
      setError("Failed to send enquiry. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        placeholder="Name"
        value={form.fullName}
        onChange={handleChange}
  className="w-full rounded-full border border-gray-400 px-3 py-2 sm:px-4 sm:py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-xs xs:text-sm sm:text-base"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone"
        value={form.phoneNumber}
        onChange={handleChange}
  className="w-full rounded-full border border-gray-400 px-3 py-2 sm:px-4 sm:py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-xs xs:text-sm sm:text-base"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
  className="w-full rounded-full border border-gray-400 px-3 py-2 sm:px-4 sm:py-2 bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 text-xs xs:text-sm sm:text-base"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        value={form.message}
        onChange={handleChange}
  className="w-full rounded-xl border border-gray-400 px-3 py-2 sm:px-4 sm:py-2 bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 text-xs xs:text-sm sm:text-base"
        required
      ></textarea>
      <button
        type="submit"
  className="w-full bg-[#79C1BE] text-black font-bold rounded-full py-2 sm:py-3 text-xs xs:text-sm sm:text-base tracking-wide hover:bg-[#76B260] transition"
        disabled={loading}
      >
        {loading ? "Sending..." : "ENQUIRY NOW ↑"}
      </button>
      {success && <div className="text-green-600 text-sm mt-2">{success}</div>}
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
    </form>
  );
};

export default ContactForm;
