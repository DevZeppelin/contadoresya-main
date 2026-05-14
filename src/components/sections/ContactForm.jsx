"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

const PHONE = "542615740182";

export default function ContactForm({
  title = "Hacé tu consulta",
  subtitle = "Respondemos en menos de 24 hs",
  buttonText = "Consultar ahora",
  service = "Consulta general",
}) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    mensaje: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `
Hola, quiero hacer una consulta en ContadoresYa.

Servicio: ${service}

Nombre: ${form.nombre}
Email: ${form.email}
WhatsApp: ${form.whatsapp}

Mensaje:
${form.mensaje}
`;

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <section
      id="contacto"
      className="section-padding bg-gradient-to-b from-[var(--primary)]/65  to-[var(--primary-dark)] text-white"
    >
      <div className="container-page grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionTitle
            className="text-white"
            eyebrow="Contacto"
            title={title}
            subtitle="Respondemos en menos de 24 hs. Consulta confidencial, sin compromiso y con atención directa."
          />
          <div className="mt-8 space-y-3 text-slate-300">
            <p>✔ Analizamos tu situación</p>
            <p>✔ Te explicamos qué está pasando</p>
            <p>✔ Te proponemos una solución concreta</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input
            className="input"
            name="nombre"
            placeholder="Nombre y apellido"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="input"
            name="whatsapp"
            placeholder="WhatsApp"
            value={form.whatsapp}
            onChange={handleChange}
            required
          />

          <textarea
            className="input textarea"
            name="mensaje"
            placeholder="Contanos brevemente tu situación"
            value={form.mensaje}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-primary w-full">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
