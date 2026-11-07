import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { SocialLinks } from "@/data/links";

const Logo = "/logo2.png";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false, follow: true },
};

const steps = [
  {
    title: "We review your details",
    desc: "Our team looks at your business, industry and goals.",
  },
  {
    title: "An expert reaches out",
    desc: "One of our representatives will speak to you as soon as possible.",
  },
  {
    title: "Get your free strategy",
    desc: "Receive a tailored plan and a free quote to grow your brand.",
  },
];

const contacts = [
  {
    label: "Call us",
    value: "+1 (438) 855-4446",
    href: "tel:+14388554446",
    icon: <IoCall size={20} />,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/+14388554446?text=Hello%2C+I+would+like+to+know+more+about+oneshot+marketing.",
    icon: <FaWhatsapp size={20} />,
    external: true,
  },
  {
    label: "Email",
    value: "info@oneshotmarketing.ca",
    href: "mailto:info@oneshotmarketing.ca",
    icon: <IoMail size={20} />,
  },
];

const page = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary flex items-center justify-center px-4 py-10 md:py-16">
      {/* decorative background */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[28rem] aspect-square rounded-full bg-secondary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 -left-40 w-[32rem] aspect-square rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative w-full max-w-4xl flex flex-col items-center gap-8">
        <Link href="/" aria-label="One Shot Marketing home">
          <Image src={Logo} alt="One Shot Marketing" width={140} height={73} preload />
        </Link>

        <section className="w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="flex flex-col items-center text-center gap-4 px-6 pt-10 pb-8 md:px-14 md:pt-14">
            <div className="thank-you-check relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500 text-white shadow-lg">
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-green-500/40 animate-ping"
              />
              <svg
                viewBox="0 0 52 52"
                className="relative w-10 h-10 md:w-12 md:h-12"
                aria-hidden="true"
              >
                <path
                  className="thank-you-check-path"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 27l8 8 16-18"
                />
              </svg>
            </div>

            <p className="text-secondary md:text-lg font-semibold tracking-wide">
              THANK YOU FOR SUBMITTING
            </p>
            <h1 className="mediumHeading font-bold text-dark">
              We will get back to you shortly!
            </h1>
            <p className="heading4 text-light max-w-xl">
              One Shot Marketing delivers results-driven digital marketing solutions to
              elevate your brand.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
              <Link
                href="/"
                className="raleway bg-secondary text-dark rounded-lg py-3 px-6 font-semibold text-center hover:box-shadow transition-all duration-300"
              >
                Go to Home Page
              </Link>
              <Link
                href="/services"
                className="raleway border border-primary text-primary rounded-lg py-3 px-6 font-semibold text-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* What happens next */}
          <div className="bg-bg2 px-6 py-8 md:px-14 md:py-10">
            <h2 className="heading2 font-semibold text-primary text-center mb-6">
              What happens next?
            </h2>
            <ol className="grid md:grid-cols-3 gap-4">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex md:flex-col gap-4 md:gap-3 md:items-center md:text-center bg-white rounded-2xl p-5 border border-primary/10"
                >
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="heading4 font-semibold text-dark">{step.title}</h3>
                    <p className="description1 text-light">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Quick contact */}
          <div className="px-6 py-8 md:px-14 md:py-10 flex flex-col gap-5">
            <p className="heading4 text-dark text-center font-medium">
              Can&apos;t wait? Reach us directly.
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center gap-3 rounded-xl border border-primary/20 p-4 hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">
                      {c.icon}
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="text-xs uppercase font-semibold text-light">
                        {c.label}
                      </span>
                      <span className="description1 font-semibold text-dark break-all">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className="flex items-center gap-4">
          {SocialLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary bg-white w-10 rounded aspect-square hover:bg-secondary hover:text-white transition-all duration-300 flex justify-center items-center"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default page;
