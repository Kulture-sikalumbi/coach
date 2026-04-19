
"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Star, Check } from "lucide-react";
import JayImg from "@/assets/Jay.jpeg";
import AvatarImg from "@/assets/channels4_profile.jpg";

type Slide = {
  id: string;
  heading: string;
  subheading?: string;
  subtext?: string;
  text: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const slides: Slide[] = [
  {
    id: "bio",
    heading: "Ijay",
    subheading: "Verified Relationship Coach & Creator",
      // additional small bio subtext shown under the main bio
      subtext: "Dating, Sex, Relationships, Coach, Fitness, Filmmaking",
    text: "Expert coaching, proven frameworks, and a supportive community helping you build confidence and connection.",
    primaryLabel: "Apply Now",
    primaryHref: "#apply",
    secondaryLabel: "Learn More",
    secondaryHref: "#jay-tribe",
  },
  {
    id: "confidence",
    heading: "Improve Your Confidence",
    subtext: "Presence, Posture, Voice",
    text: "Tiny, practical shifts to own rooms, conversations and dates — without trying too hard.",
    primaryLabel: "Read Article",
    primaryHref: "#jay-tribe",
    secondaryLabel: "Learn More",
    secondaryHref: "#jay-tribe",
  },
  {
    id: "attraction",
    heading: "Master Instant Attraction",
    subtext: "Signals, Hooks, Eye Contact",
    text: "Subtle signals and conversational hooks that increase connection instantly.",
    primaryLabel: "Read Tips",
    primaryHref: "#jay-tribe",
    secondaryLabel: "Learn More",
    secondaryHref: "#jay-tribe",
  },
];

const Hero: FC = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="w-full min-h-[72vh] px-4 md:px-12 py-12 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
        {/* Left Column - slideshow */}
        <div className="pl-2 md:pl-16 z-20">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200/50 shadow-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <div className="w-6 h-6 relative rounded-full overflow-hidden">
                <Image src={AvatarImg} alt="avatar" fill className="object-cover" />
              </div>
              <span className="text-sm font-semibold text-charcoal">50k+ Jay Tribes</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="overflow-hidden">
              {slides.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: i === index ? 1 : 0, x: i === index ? 0 : 8 }}
                  transition={{ duration: 0.45 }}
                  className={`${i === index ? "block" : "hidden"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl md:text-6xl font-bold text-charcoal leading-[1.08]">
                      {s.heading}
                    </h1>
                    {/* verified tick only on the bio slide */}
                    {s.id === "bio" && (
                      <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full w-6 h-6">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  {s.subheading && <div className="text-sm text-charcoal/70 mb-2">{s.subheading}</div>}
                  <p className="text-charcoal/90 text-lg max-w-lg mb-4">{s.text}</p>

                  {/* subtext chips above the action buttons */}
                  {(s as any).subtext && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(s as any).subtext.split(",").map((t: string) => (
                        <span key={t} className="text-xs bg-white px-2 py-1 rounded-full text-charcoal border border-slate-200/40">{t.trim()}</span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    <a href={s.primaryHref ?? "#"} className="px-6 py-3 rounded-full bg-sky-600 text-white font-semibold shadow-md">
                      {s.primaryLabel}
                    </a>
                    {s.secondaryLabel && (
                      <a href={s.secondaryHref ?? "#"} className="text-charcoal/80 underline-offset-4 hover:underline text-lg font-medium">
                        {s.secondaryLabel}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* indicators */}
            <div className="mt-6 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full ${i === index ? "bg-amber-300" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
            <div className="w-full max-w-lg rounded-[40px] aspect-[4/5] shadow-2xl border border-slate-200/50 relative overflow-visible">
              {/* badge moved to left column */}

              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                <Image src={JayImg} alt="Hero" fill className="object-cover" />
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
