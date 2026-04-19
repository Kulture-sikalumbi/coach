"use client";
import { FC, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import JayImg from "@/assets/Jay.jpeg";
import AvatarImg from "@/assets/channels4_profile.jpg";
import ljayVlog from "@/assets/ljayvlog.jpg";
import ljayInstagram from "@/assets/ljay_instagram.jpg";
import ljayX from "@/assets/ljay_X.jpg";
import movieProfile from "@/assets/movie_profile.jpg";
import { X } from "lucide-react";

type Status = {
  id: string;
  label: string;
  handle?: string;
  kind: "tiktok" | "instagram" | "snapchat" | "vlog" | "film" | "other";
  thumbnail?: any;
  online?: boolean;
};

const statuses: Status[] = [
  {
    id: "vlog",
    label: "Vlog",
    handle: "ljay",
    kind: "vlog",
    thumbnail: ljayVlog,
    online: true,
  },
  {
    id: "film",
    label: "Movies",
    handle: "Vibeztudio",
    kind: "film",
    thumbnail: movieProfile,
    online: false,
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@ijayofdubai",
    kind: "tiktok",
    thumbnail: ljayX,
    online: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@thisis_ijay",
    kind: "instagram",
    thumbnail: ljayInstagram,
    online: true,
  },
  {
    id: "snapchat",
    label: "Snapchat",
    handle: "that_slimdiva",
    kind: "snapchat",
    thumbnail: AvatarImg,
    online: true,
  },
];

const LiveStatusRow: FC = () => {
  const [open, setOpen] = useState<Status | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    // Only auto-scroll on small screens
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return;

    const el = scrollRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) return;

    let rafId: number | null = null;
    let start: number | null = null;
    let direction = 1; // 1 = forward, -1 = backward
    const duration = 4500; // ms for one-way

    const step = (ts: number) => {
      if (isPausedRef.current) {
        start = ts; // pause progress
        rafId = requestAnimationFrame(step);
        return;
      }
      if (start === null) start = ts;
      const elapsed = ts - start;
      let t = Math.min(elapsed / duration, 1);
      const pos = direction === 1 ? t * max : (1 - t) * max;
      el.scrollLeft = pos;
      if (t >= 1) {
        // reverse direction
        direction = -direction;
        start = ts;
      }
      rafId = requestAnimationFrame(step);
    };

    // pause on user interaction
    const pause = () => (isPausedRef.current = true);
    const resume = () => (isPausedRef.current = false);

    el.addEventListener("pointerdown", pause, { passive: true });
    window.addEventListener("pointerup", resume, { passive: true });

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("pointerdown", pause);
      window.removeEventListener("pointerup", resume);
    };
  }, []);

  return (
    <div className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={scrollRef} className="py-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 items-end">
            {statuses.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setOpen(s)}
                initial={{ scale: 0.95 }}
                animate={{ scale: [0.96, 1.03, 1.0] }}
                transition={{ delay: i * 0.08, duration: 0.9, repeat: 0 }}
                className="flex flex-col items-center focus:outline-none"
              >
                  <div className="p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-sky-500 relative">
                    <div className="bg-white rounded-full p-1">
                      <div className="w-20 h-20 rounded-full overflow-hidden relative">
                        <Image src={s.thumbnail} alt={s.label} fill className="object-cover" />

                        {/* Online indicator */}
                        {s.online && (
                          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 md:w-3 md:h-3 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs font-sans text-charcoal/80 text-center w-28">
                    <div className="truncate">{s.label}</div>
                    {s.handle && <div className="text-[10px] text-charcoal/60">{s.handle}</div>}
                  </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" onClick={() => setOpen(null)} />

          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-50 max-w-4xl w-full mx-4"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                {/* Close */}
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(201,160,111,1)" }}
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-white" />
                </button>

                {/* Player variants */}
                {open.kind === "vlog" || open.kind === "tiktok" ? (
                  <div className="w-full bg-black aspect-[9/16] md:aspect-[9/16]">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                      title={open.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : open.kind === "film" ? (
                  <div className="w-full bg-black aspect-video">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                      title={open.label}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="w-full p-8">
                    <div className="text-charcoal font-semibold text-lg">{open.label}</div>
                    <p className="text-sm text-charcoal/80 mt-2">Channel preview is not available for this handle.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LiveStatusRow;
