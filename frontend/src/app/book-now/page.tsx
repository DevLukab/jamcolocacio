import Link from "next/link";
import { BookingInquiryForm } from "@/components/forms/booking-inquiry-form";

export default function BookNowPage() {
  return (
    <div className="pb-20 pt-32 sm:pt-36">
      <section className="luxury-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-5">
          <p className="eyebrow">Reserva ahora</p>
          <h1 className="font-display text-6xl leading-[0.95] text-[var(--color-ivory)] sm:text-7xl">
            Asegura tu cita de consulta.
          </h1>
          <p className="text-base leading-8 text-[var(--color-mist)] sm:text-lg">
            Elige una hora para hablar de tu proyecto, prioridades de distribucion, acabados deseados y posibles limitaciones del espacio. Las consultas estan planteadas para dejarte con pasos claros a seguir.
          </p>
          <div className="panel rounded-[2rem] p-7 text-sm leading-7 text-[var(--color-mist)]">
            <p className="eyebrow">Informacion necesaria</p>
            <p>
              Ya no necesitas usar un calendario externo. En el formulario de esta pagina puedes dejarnos el presupuesto, las dimensiones, las referencias de estilo, la fecha ideal y cualquier condicionante de obra para que preparemos la consulta correctamente.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <BookingInquiryForm
            title="Solicita tu consulta personalizada."
            description="Completa los datos esenciales del proyecto y el equipo de JAMCOLOCACIO te contactara para concretar la siguiente fase."
            buttonLabel="Enviar solicitud"
          />
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-[var(--color-mist)]">
            <Link href="/contact" className="rounded-full border border-white/10 px-5 py-3 hover:border-[var(--color-border)] hover:text-[var(--color-ivory)]">
              Ir a contacto
            </Link>
            <a href="tel:+442055550148" className="rounded-full border border-[var(--color-border)] px-5 py-3 text-[var(--color-gold)] hover:text-[var(--color-ivory)]">
              Llamar a JAMCOLOCACIO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
