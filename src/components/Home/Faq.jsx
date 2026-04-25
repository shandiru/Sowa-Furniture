import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What types of furniture do you refurbish?",
    a: "We specialise in commercial hospitality furniture - pub tables, bar stools, restaurant chairs, booth seating and wooden bar tops. We also take on residential pieces including kitchen tables and dining chairs, and can build bespoke items to order.",
  },
  {
    q: "Do you collect and deliver furniture?",
    a: "Yes - we offer collection and delivery across Greater Manchester and surrounding areas. Get in touch with your location and we'll confirm availability.",
  },
  {
    q: "How much does furniture refurbishment cost?",
    a: "Every job is different depending on the condition, size and finish required. We provide free, no-obligation quotes - just send us a photo on WhatsApp or fill in our quote form and we'll get back to you quickly.",
  },
  {
    q: "Can you refurbish a large batch of pub or restaurant furniture?",
    a: "Absolutely - bulk venue refurbs are our bread and butter. Whether it's 10 stools or a full pub refit, we can handle the volume. Contact us to discuss your requirements.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="mb-5 text-sm font-bold uppercase tracking-wide text-[#b18857]">
            FAQ
          </p>

          <h2 className="max-w-xl text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black sm:text-[42px] lg:text-[48px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-[#f7f8fa] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-7"
                >
                  <span className="text-[16px] font-bold leading-snug tracking-[-0.01em] text-black md:text-[18px]">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#b18857] text-[#b18857]"
                        : "border-[#cbd5e1] text-[#64748b]"
                    }`}
                  >
                    <Plus size={19} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-[#5f6368] md:px-7 md:text-[15px]">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}