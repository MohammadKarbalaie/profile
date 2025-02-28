"use client";

import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const res = await axios.post("/api/contact", form);
      console.log(res);
      setSuccess("Message sent successfully!");
    } catch (err) {
      console.log(err);
      setError("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div id="contact" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
      <h1 className="text-center text-6xl font-light text-[#5662f6]">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="rounded-lg border-2 border-[#5662f6] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-[#5662f6]"
          />
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Your Username"
            className="rounded-lg border-2 border-[#5662f6] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-[#5662f6]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="rounded-lg border-2 border-[#5662f6] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-[#5662f6]"
          />
        </div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="h-32 w-full resize-none rounded-lg border-2 border-[#5662f6] px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-[#5662f6]"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg border-2 border-[#5662f6] bg-[#5662f6] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#5662f6] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default Contact;