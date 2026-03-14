import { BookingInquiryForm } from "@/components/forms/booking-inquiry-form";
import { contactDetails } from "@/content/site-data";

export default function ContactPage() {
  return (
    <div className="pb-20 pt-32 sm:pt-36">
      <section className="luxury-shell max-w-3xl space-y-4">
        <p className="eyebrow">Contacto</p>
        <h1 className="font-display text-6xl leading-[0.95] text-[var(--color-ivory)] sm:text-7xl">
          Hablemos de tu nueva cocina.
        </h1>
        <p className="text-base leading-8 text-[var(--color-mist)] sm:text-lg">
          Comparte tu plazo, tus ideas de distribucion y el nivel de acabado deseado. Te recomendaremos el siguiente paso y el formato de consulta adecuado.
        </p>
        <div className="flex flex-col gap-4 pt-3 sm:flex-row">
          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[linear-gradient(135deg,_rgba(197,140,72,0.95),_rgba(159,90,49,0.95))] px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-black"
          >
            Llamar ahora
          </a>
          <a
            href={`mailto:${contactDetails.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-ivory)] hover:border-[var(--color-border)] hover:bg-white/5"
          >
            Escribir por email
          </a>
        </div>
      </section>

      <section className="luxury-shell mt-16 grid items-start gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-6 self-start">
          <div className="panel rounded-[2rem] p-7 sm:p-8">
            <p className="eyebrow">Datos de contacto</p>
            <div className="mt-6 grid gap-5 text-sm leading-7 text-[var(--color-mist)]">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]">Telefono</p>
                <p className="mt-2 text-base text-[var(--color-ivory)]">{contactDetails.phone}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]">Email</p>
                <p className="mt-2 text-base text-[var(--color-ivory)]">{contactDetails.email}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]">Direccion</p>
                <p className="mt-2 text-base text-[var(--color-ivory)]">{contactDetails.address}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-gold)]">Horario</p>
                <p className="mt-2 text-base text-[var(--color-ivory)]">{contactDetails.hours}</p>
              </div>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-7 sm:p-8">
            <p className="eyebrow">Antes de enviarlo</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-mist)]">
              <p>
                Cuanto mas contexto nos dejes, mejor podremos orientarte desde el primer contacto.
              </p>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <p className="text-[var(--color-ivory)]">Incluye si puedes:</p>
                <p className="mt-2">presupuesto aproximado, dimensiones, estilo deseado, fecha prevista y cualquier condicionante de obra.</p>
              </div>
            </div>
          </div>
        </div>

        <BookingInquiryForm
          title="Cuentanos tu proyecto y te llamamos."
          description="Hemos sustituido la reserva externa por un formulario completo para recoger presupuesto, medidas, referencias y condicionantes antes de la consulta."
          buttonLabel="Solicitar consulta"
        />
      </section>
    </div>
  );
}
