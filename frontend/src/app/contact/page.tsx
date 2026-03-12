import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { contactDetails } from "@/lib/site-data";

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
      </section>

      <section className="luxury-shell mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel rounded-[2rem] p-7 sm:p-8">
          <p className="eyebrow">Datos de contacto</p>
          <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--color-mist)]">
            <p><span className="text-[var(--color-ivory)]">Telefono:</span> {contactDetails.phone}</p>
            <p><span className="text-[var(--color-ivory)]">Email:</span> {contactDetails.email}</p>
            <p><span className="text-[var(--color-ivory)]">Direccion:</span> {contactDetails.address}</p>
            <p><span className="text-[var(--color-ivory)]">Horario:</span> {contactDetails.hours}</p>
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
