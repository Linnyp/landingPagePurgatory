import { services } from "../../data/services";
import { SectionLabel } from "../shared/SectionLabel";
import { IconArrowRight } from "../shared/icons";
import { ServiceCard } from "./ServiceCard";
import "./ServicesSection.css";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-section relative z-10 border-y-4 border-sand-950 bg-sand-100 bg-diag-pattern py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex justify-end">
            <SectionLabel text="Services" />
          </div>
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[4fr_8fr]">
            <div id="services-heading" className="text-right lg:order-2">
              <div className="services-headline font-brand font-black uppercase text-sand-950">
                Every Service Feeds
                <br />
                The Same Outcome:
              </div>
              <div className="services-headline-accent font-brand font-black uppercase text-clay-500">
                More Qualified Leads.
              </div>
            </div>
            <p className="m-0 pb-2 font-brand text-[15px] leading-[1.65] text-sand-600 lg:order-1">
              We handle the full stack — from your Google presence to the AI
              workflows running in the background — so you can stay focused on
              the work.
            </p>
          </div>
        </div>

        {/* Service grid (negative margins overlap borders into a single grid) */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`h-full ${i >= 3 ? "-mt-0.5" : ""} ${
                i % 3 !== 0 ? "-ml-0.5" : ""
              }`}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center gap-2 border-2 border-clay-500 bg-clay-500 px-10 py-4 font-brand text-[12px] font-bold uppercase tracking-[0.08em] text-sand-50 no-underline transition-colors duration-150 hover:border-clay-700 hover:bg-clay-700"
          >
            See All Services <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
