"use client";
import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import attractionImg from "@/assets/attraction (2).jpg";
import badboy from "@/assets/badboy.jpg";
import confidence from "@/assets/confidence.jpg";
import conversation from "@/assets/conversation.jpg";
import fitness from "@/assets/fitness.jpg";
import happycople from "@/assets/happycople.jpg";

const categories = [
  "All",
  "Approaching",
  "Attraction",
  "Conversation",
  "Dating",
  "Female Mind",
  "History / Misc.",
  "Lifestyle",
  "Mate Choice",
  "Mindsets",
  "Online Dating",
  "Relationships",
  "Seduction",
  "Social Life",
];

const articles = [
  {
    id: "a1",
    title: "Why Confidence Beats Chasing",
    category: "Mindsets",
    excerpt: "Small mindset shifts that make you irresistible without trying.",
    time: "4 min read",
    image: confidence,
    featured: true,
  },
  {
    id: "a2",
    title: "The Gentle Art of Attraction",
    category: "Attraction",
    excerpt: "How to architect subtle attraction moments in conversation.",
    time: "3 min read",
    image: attractionImg,
  },
  {
    id: "a3",
    title: "Dates That Feel Effortless",
    category: "Dating",
    excerpt: "A simple framework to plan memorable dates without stress.",
    time: "5 min read",
    image: happycople,
  },
  {
    id: "a4",
    title: "Social Life: Quality Over Quantity",
    category: "Social Life",
    excerpt: "Curate your circle: the secret sauce to magnetic energy.",
    time: "3 min read",
    image: conversation,
  },
];

const JayTribe: FC = () => {
  const [active, setActive] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const paused = useRef(false);

  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let timer: number | null = null;

    const shouldAuto = () => window.matchMedia("(max-width: 640px)").matches && el.scrollWidth > el.clientWidth;

    const start = () => {
      if (!shouldAuto() || timer) return;
      timer = window.setInterval(() => {
        if (paused.current) return;
        if (!el) return;
        const next = el.scrollLeft + 1;
        if (next >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollTo({ left: 0 });
        } else {
          el.scrollTo({ left: next });
        }
      }, 16);
    };

    const stop = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    start();

    const onResize = () => {
      stop();
      start();
    };

    window.addEventListener("resize", onResize);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="jay-tribe" className="bg-[#0A0E17] text-[#FAEBD7] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold !text-white">Jay Tribe Essential Guides</h2>
          <p className="text-sm !text-white/70">A curated library of top tips and deep dives</p>
        </div>

        {/* Filter bar */}
        <div
          ref={scrollRef}
          onPointerEnter={() => (paused.current = true)}
          onPointerLeave={() => (paused.current = false)}
          className="mt-6 overflow-x-auto no-scrollbar py-2"
        >
          <div className="flex gap-3">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className="relative focus:outline-none"
                >
                  <span
                    className={`rounded-full p-[2px] ${
                      isActive ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-sky-500 shadow-[0_0_18px_rgba(201,160,111,0.12)]" : "bg-transparent"
                    }`}
                  >
                    <span className="block bg-[#0A0E17] px-4 py-2 rounded-full text-sm font-medium text-white">
                      {c}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Bento Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((a) => (
            <article
              key={a.id}
              className={`group relative overflow-hidden rounded-2xl transform transition-all bg-[#06101b] ${a.featured ? "md:col-span-2" : ""} hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(201,160,111,0.12)]`}
            >
              <div className={`relative w-full ${a.featured ? "h-80 md:h-96" : "h-56 md:h-64"}`}>
                <Image src={a.image} alt={a.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute top-3 right-3">
                  <span className="bg-black/50 text-[#FAEBD7] text-xs px-2 py-1 rounded-full backdrop-blur-sm">{a.time}</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold !text-white opacity-100">{a.title}</h3>
                <p className="mt-2 text-sm !text-white">{a.excerpt}</p>

                  <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs !text-white/90">{a.category}</div>
                  <button className="flex items-center gap-2 text-sm text-white hover:text-amber-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JayTribe;
