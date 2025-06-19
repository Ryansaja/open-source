"use client";
import React, { useState } from "react";
import SocialLink from "../ui/SocialLink";
import Button from "../ui/Button";
import ScrollAnimated from "./ScrollAnimated";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Contact() {
  const isMobile = useMediaQuery(`(max-width: 768px)`);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    datetime: "",
    people: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo, saya ingin reservasi:%0A%0ANama: ${formData.name}%0ANomor Ponsel: ${formData.phone}%0ATanggal & Waktu: ${formData.datetime}%0AJumlah Orang: ${formData.people}%0ADeskripsi: ${formData.description}`;
    window.open(`https://wa.me/6281283104375?text=${message}`, '_blank');
  };

  return (
    <section id="Contact" className="bg-neutral-900 py-section">
      <ScrollAnimated className="container container--sm">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Contact Info & Map Column */}
          <div>
            <h2 className="text-center lg:text-left text-neutral-100 heading-second mb-8">
              <span className="text-neutral-900 dark:text-neutral-100">Contact us</span> <br /> for
              more info
            </h2>

            <address className="flex flex-col items-center mt-6 space-y-8 lg:items-start">
              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-neutral-900 dark:text-neutral-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <span className="truncate w-72 text-neutral-400">
                    Jl. Pemuda No. 123
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    Semarang, Jawa Tengah 50132
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    Indonesia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-neutral-900 dark:text-neutral-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <span className="truncate w-72 text-neutral-400">
                    +62 812 8310 4375
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden w-6 h-6 lg:block text-neutral-900 dark:text-neutral-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <span className="truncate w-72 text-neutral-400">
                    info@sixteen8.com
                  </span>
                  <span className="truncate w-72 text-neutral-400">
                    reservation@sixteen8.com
                  </span>
                </div>
              </div>
            </address>

            <section className="mt-6">
              <p className="mb-2 text-center lg:text-left text-neutral-300">
                Follow us
              </p>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <SocialLink variant="facebook" url="https://facebook.com/sixteen8semarang" />
                <SocialLink variant="instagram" url="https://instagram.com/sixteen8semarang" />
                <SocialLink variant="twitter" url="https://twitter.com/sixteen8semarang" />
              </div>
            </section>

            {!isMobile && (
              <div className="mt-8">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1234567890123!2d110.42000000000001!3d-6.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4e3f0f0123%3A0x1234567890abcdef!2sSixteen%208%20Restaurant!5e0!3m2!1sid!2sid!4v1234567890!5m2!1sid!2sid"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>

          {/* Reservation Form Column */}
          <div id="reservation" className="mt-12 lg:mt-0">
            <h2 className="text-center lg:text-left text-neutral-100 heading-second mb-8">
              Make a <span className="text-neutral-900 dark:text-neutral-100">Reservation</span>
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-400">
                  Nomor Ponsel
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="datetime" className="block text-sm font-medium text-neutral-400">
                  Tanggal dan Waktu
                </label>
                <input
                  type="datetime-local"
                  id="datetime"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.datetime}
                  onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="people" className="block text-sm font-medium text-neutral-400">
                  Jumlah Orang
                </label>
                <input
                  type="number"
                  id="people"
                  required
                  min="1"
                  className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-neutral-400">
                  Deskripsi (Opsional)
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tambahan informasi (misal: preferensi tempat duduk, alergi, dll)"
                ></textarea>
              </div>

              <Button onClick={handleSubmit} className="w-full" textColor="text-black">
                Reservasi via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </ScrollAnimated>
    </section>
  );
}
