"use client";

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { products } from "@/data/products";
import { createWhatsAppLink } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "success" | "error";
const contactProvider = process.env.NEXT_PUBLIC_CONTACT_PROVIDER ?? "whatsapp";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("loading");
    const formData = new FormData(form);

    if (contactProvider === "whatsapp") {
      const name = String(formData.get("nombre") ?? "");
      const email = String(formData.get("email") ?? "");
      const phone = String(formData.get("telefono") ?? "");
      const product = String(formData.get("producto") ?? "");
      const message = String(formData.get("mensaje") ?? "");
      const whatsappMessage = [
        "Hola, quiero hacer una consulta desde la web de Pupila.",
        `Nombre: ${name}`,
        `Email: ${email}`,
        phone ? `Teléfono: ${phone}` : "",
        product ? `Producto: ${product}` : "",
        `Mensaje: ${message}`,
      ].filter(Boolean).join("\n");

      window.open(createWhatsAppLink(whatsappMessage), "_blank", "noopener,noreferrer");
      form.reset();
      setStatus("success");
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(Array.from(formData.entries()) as Array<[string, string]>).toString(),
      });
      if (!response.ok) throw new Error("No se pudo enviar el formulario");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = "mt-2 h-13 w-full rounded-xl border border-[var(--line)] bg-white px-4 text-sm outline-none transition placeholder:text-[var(--ink-soft)]/55 focus:border-[var(--plum)] focus:ring-4 focus:ring-[var(--plum)]/5";

  return (
    <form name="contacto" method="POST" action="/gracias" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="rounded-[1.8rem] bg-white p-5 shadow-[0_20px_60px_rgba(49,35,47,.07)] sm:p-8">
      <input type="hidden" name="form-name" value="contacto" />
      <p className="hidden"><label>No completar: <input name="bot-field" /></label></p>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Nombre <span className="text-[var(--plum)]">*</span><input className={fieldClass} type="text" name="nombre" autoComplete="name" required minLength={2} placeholder="Tu nombre" /></label>
        <label className="text-sm font-semibold">Email <span className="text-[var(--plum)]">*</span><input className={fieldClass} type="email" name="email" autoComplete="email" required placeholder="nombre@email.com" /></label>
        <label className="text-sm font-semibold">Teléfono <span className="font-normal text-[var(--ink-soft)]">(opcional)</span><input className={fieldClass} type="tel" name="telefono" autoComplete="tel" placeholder="351 000 0000" /></label>
        <label className="text-sm font-semibold">Producto <span className="font-normal text-[var(--ink-soft)]">(opcional)</span><select className={fieldClass} name="producto" defaultValue=""><option value="">Elegí un modelo</option>{products.map((product) => <option key={product.id} value={`${product.brand} ${product.model}`}>{product.brand} {product.model}</option>)}</select></label>
        <label className="text-sm font-semibold sm:col-span-2">Mensaje <span className="text-[var(--plum)]">*</span><textarea className={`${fieldClass} min-h-36 resize-y py-3`} name="mensaje" required minLength={10} placeholder="Contanos cómo podemos ayudarte…" /></label>
      </div>

      <button type="submit" disabled={status === "loading"} className="mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[var(--plum)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--plum-deep)] disabled:opacity-60 sm:w-auto">
        {status === "loading" ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Enviando…</> : <><Send className="h-4 w-4" /> Enviar consulta</>}
      </button>

      {status === "success" && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#e7f2ec] p-4 text-sm text-[#205b40]" role="status"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" /><p><strong>{contactProvider === "whatsapp" ? "Abrimos tu consulta en WhatsApp." : "¡Recibimos tu consulta!"}</strong><br />{contactProvider === "whatsapp" ? "Revisá el mensaje y tocá enviar para comunicarte con nosotros." : "Te responderemos a la brevedad."}</p></div>}
      {status === "error" && <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f8e8e7] p-4 text-sm text-[#872f29]" role="alert"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0" /><p><strong>No pudimos enviarla.</strong><br />Intentá nuevamente o escribinos por WhatsApp.</p></div>}
    </form>
  );
}
