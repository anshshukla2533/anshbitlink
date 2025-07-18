import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto text-center">
        {}
        <Image
          src="/ansh.jpg"
          alt="Ansh Shukla"
          width={250}
          height={250}
          className="mx-auto rounded-full border-4 border-blue-500 mb-6"
        />

        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-lg mb-6 text-gray-600">
          I&apos;d love to hear from you! Whether it&apos;s about feedback, projects, or just a hello.
        </p>
      </div>

      <ContactForm />
    </main>
  );
}
