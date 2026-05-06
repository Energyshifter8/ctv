"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Mail } from "lucide-react";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus("loading");

    // Replace these with your actual EmailJS IDs
    const serviceId = "YOUR_SERVICE_ID"; 
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus("success");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h3 className="text-2xl font-semibold mb-4">Let&apos;s work together</h3>
            <p className="opacity-80 leading-relaxed mb-8">
              I&apos;m currently available for freelance work and open to discussing new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className="flex items-center gap-4 opacity-90 hover:opacity-100 transition-opacity">
              <div className="p-3 bg-white/10 rounded-full border border-white/20">
                <Mail size={24} />
              </div>
              <a href="mailto:temuulenbold1@gmail.com" className="text-lg font-medium hover:underline">
                temuulenbold1@gmail.com
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-white/5 border border-white/10 rounded-xl text-sm opacity-70">
              <p><strong>Note for Developer:</strong> To make the form work, replace <code className="bg-black/30 px-1 py-0.5 rounded">YOUR_SERVICE_ID</code>, <code className="bg-black/30 px-1 py-0.5 rounded">YOUR_TEMPLATE_ID</code>, and <code className="bg-black/30 px-1 py-0.5 rounded">YOUR_PUBLIC_KEY</code> in <code className="bg-black/30 px-1 py-0.5 rounded">ContactSection.tsx</code> with your actual keys from <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer" className="underline">EmailJS</a>.</p>
            </div>
          </div>

          <div className="bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium mb-2 opacity-90">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium mb-2 opacity-90">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-90">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative flex items-center justify-center gap-2 bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                {status === "loading" && <span>Sending...</span>}
                {status === "success" && (
                  <span className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={18} /> Sent!
                  </span>
                )}
                {status === "error" && (
                  <span className="flex items-center gap-2 text-red-600">
                    <AlertCircle size={18} /> Error
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
