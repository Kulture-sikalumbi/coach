"use client";
import { FC, useEffect, useState, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import watchesImg from "@/assets/mens_assets/watches.jpg";
import perfumesImg from "@/assets/mens_assets/perfumes.jpg";
import blazerImg from "@/assets/mens_assets/leather jacket.jpg";
import booksImg from "@/assets/mens_assets/Books.jpg";
import sexImg from "@/assets/mens_assets/sex.jpg";
import groomingImg from "@/assets/mens_assets/smartwear.jpg";
import outfits1 from "@/assets/mens_assets/outfits1.jpg";
import outfits2 from "@/assets/mens_assets/outfits2.jpg";
import outfits3 from "@/assets/mens_assets/outfits3.jpg";
import outfit4_badboy from "@/assets/mens_assets/outfit4_badboy.jpg";
import fashionAcc from "@/assets/mens_assets/mens_fashion_accessories.jpg";
import jewelry from "@/assets/mens_assets/jewelry.webp";

const products = [
  {
    id: "p1",
    title: "Heritage Watch",
    category: "Accessories",
    desc: "Classic automatic watch with leather strap.",
    images: [watchesImg, fashionAcc, jewelry],
  },
  {
    id: "p2",
    title: "Signature Scent",
    category: "Perfume",
    desc: "A bold, warm fragrance for evenings out.",
    images: [perfumesImg, outfits1, outfits2],
  },
  {
    id: "p3",
    title: "Tailored Blazer",
    category: "Fashion",
    desc: "Versatile blazer for dates and stage moments.",
    images: [blazerImg, outfits3, outfit4_badboy],
  },
  {
    id: "p4",
    title: "Essential Reads",
    category: "Books",
    desc: "Curated books on confidence, communication, and style.",
    images: [booksImg],
  },
  {
    id: "p5",
    title: "Performance Essentials",
    category: "Sexual Health",
    desc: "Supplements & care items to boost confidence and performance.",
    images: [sexImg],
  },
  {
    id: "p6",
    title: "Grooming Kit",
    category: "Grooming",
    desc: "Everyday grooming kit: trimmer, cleanser, moisturizer.",
    images: [groomingImg],
  },
];

const ServicesGrid: FC = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const [cardIndex, setCardIndex] = useState<Record<string, number>>({});
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % products.length), 4000);
    return () => clearInterval(id);
  }, []);

  // auto-advance every card's internal slide index
  useEffect(() => {
    const el = document.body; // only to check existence
    if (!el) return;
    const id = window.setInterval(() => {
      if (paused.current) return;
      setCardIndex((prev) => {
        const next: Record<string, number> = { ...prev };
        products.forEach((p) => {
          const cur = next[p.id] ?? 0;
          next[p.id] = (cur + 1) % (p.images.length || 1);
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <section id="services" className="w-full py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-charcoal mb-1">Men's Essentials</h2>
        <p className="text-sm text-charcoal/70 mb-6">Essentials for confidence, style, and performance — curated items you can buy.</p>

        {/* Mobile 'status' strip (WhatsApp-style) */}
        <div className="md:hidden mb-4">
          <div
            className="flex gap-4 overflow-x-auto no-scrollbar py-2"
            onPointerEnter={() => (paused.current = true)}
            onPointerLeave={() => (paused.current = false)}
          >
            {products.map((p) => (
              <button key={p.id} onClick={() => setOpen(p.id)} className="flex-shrink-0 w-24">
                <div className="w-20 h-20 rounded-full ring-2 ring-amber-300 overflow-hidden mx-auto">
                  <Image
                    src={p.images[cardIndex[p.id] ?? 0]}
                    alt={p.title}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="text-xs text-center mt-2 text-charcoal/80">{p.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured carousel */}
          <div className="md:col-span-2 rounded-[28px] bg-gradient-to-br from-white to-white/90 p-6 shadow-lg border border-slate-200/40 overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div className="w-2/3">
                <div className="mb-3 inline-flex items-center gap-3 px-3 py-1 rounded-full bg-amber-50 text-xs font-semibold">
                  {products[index].category}
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-2">{products[index].title}</h3>
                <p className="text-charcoal/80 mb-4 max-w-xl">{products[index].desc}</p>

                <div className="flex items-center gap-3">
                  <button onClick={() => setOpen(products[index].id)} className="px-5 py-2 rounded-full bg-charcoal text-white font-semibold">View</button>
                  <a href="#" className="px-5 py-2 rounded-full border border-charcoal text-charcoal font-medium">Shop</a>
                </div>
              </div>

              <div className="w-1/3 flex items-center justify-center">
                <div className="w-48 h-40 rounded-2xl overflow-hidden bg-slate-100">
                    <Image src={products[index].images[cardIndex[products[index].id] ?? 0]} alt={products[index].title} width={320} height={260} className="object-cover" />
                  </div>
              </div>
            </div>

            {/* indicators */}
            <div className="mt-6 flex items-center gap-2">
              {products.map((p, i) => (
                <button key={p.id} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? "bg-amber-400" : "bg-white/40"}`} />
              ))}
            </div>
          </div>

          {/* Right column cards */}
          <div className="flex flex-col gap-6">
            {products.slice(1, 5).map((p) => (
              <div key={p.id} className="relative rounded-[20px] overflow-hidden h-28 shadow-sm">
                <Image src={p.images[cardIndex[p.id] ?? 0]} alt={p.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10 p-4 flex items-center justify-between h-full">
                  <div>
                    <div className="text-sm text-white/90">{p.category}</div>
                    <div className="font-semibold text-white">{p.title}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex gap-2">
                      <button onClick={() => setOpen(p.id)} className="text-sm px-3 py-1 rounded-full bg-amber-400 text-charcoal font-semibold">View</button>
                      <button className="text-sm px-3 py-1 rounded-full border border-white/40 text-white">Read</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" onClick={() => setOpen(null)} />
            <div className="relative bg-white rounded-2xl w-full max-w-2xl p-6 z-60 shadow-2xl">
              <button onClick={() => setOpen(null)} className="absolute -top-4 -right-4 bg-amber-300 rounded-full w-10 h-10 flex items-center justify-center shadow">
                <X className="w-4 h-4" />
              </button>
              <h4 className="text-xl font-semibold text-charcoal mb-2">{products.find((x) => x.id === open)?.title}</h4>
              <p className="text-charcoal/80 mb-4">{products.find((x) => x.id === open)?.desc}</p>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={products.find((x) => x.id === open)?.images[cardIndex[open ?? ""] ?? 0] as any}
                  alt={products.find((x) => x.id === open)?.title}
                  width={900}
                  height={420}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesGrid;
