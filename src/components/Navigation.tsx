
"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { Menu, Check, ChevronDown, X } from "lucide-react";

const Navigation: FC = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpanded((s) => ({ ...s, [key]: !s[key] }));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl font-bold tracking-tight text-charcoal flex items-center gap-2">
            Ijay
            <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full w-5 h-5 ring-2 ring-white/10">
              <Check className="w-3 h-3" />
            </span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {/* How To dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-charcoal/90 hover:text-accent transition font-medium">
                How To <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-3 w-56 bg-[#0A0E17] rounded-xl py-2 shadow-lg transition-opacity ring-1 ring-white/5">
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Approaching girls</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Start conversations</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Flirt</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Make a good first impression</a>
              </div>
            </div>

            {/* Attraction dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-charcoal/90 hover:text-accent transition font-medium">
                Attraction <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-3 w-64 bg-[#0A0E17] rounded-xl py-2 shadow-lg transition-opacity ring-1 ring-white/5">
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Build instant attraction</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Conversation hooks</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Eye contact techniques</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Compliment strategies</a>
              </div>
            </div>

            {/* Sex dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-charcoal/90 hover:text-accent transition font-medium">
                Sex <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-3 w-56 bg-[#0A0E17] rounded-xl py-2 shadow-lg transition-opacity ring-1 ring-white/5">
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Positions</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Tips</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Consent & communication</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Aftercare</a>
              </div>
            </div>

            {/* Relationships dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-charcoal/90 hover:text-accent transition font-medium">
                Relationships <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-3 w-64 bg-[#0A0E17] rounded-xl py-2 shadow-lg transition-opacity ring-1 ring-white/5">
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Communication</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Conflict & repair</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Long-term attraction</a>
                <a href="#jay-tribe" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Boundary-setting</a>
              </div>
            </div>

            {/* Products dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-2 text-charcoal/90 hover:text-accent transition font-medium">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto absolute left-0 mt-3 w-56 bg-[#0A0E17] rounded-xl py-2 shadow-lg transition-opacity ring-1 ring-white/5">
                <a href="#products" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Sex boosters</a>
                <a href="#products" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Jewelry</a>
                <a href="#products" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Men's accessories</a>
                <a href="#products" className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5">Fragrance</a>
              </div>
            </div>
          </nav>

          <Button className="ml-4 px-6 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all">Apply Now</Button>
        </div>
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/30 transition"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="w-6 h-6 text-charcoal" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999]">
          <div className="absolute top-14 left-0 right-0 bottom-0 bg-black/50" onClick={() => setOpen(false)} />
          <div id="mobile-menu" className="absolute top-14 left-0 right-0 bottom-0 flex items-start justify-center pointer-events-none">
            <div className="pointer-events-auto w-full max-w-xl bg-[#0A0E17] text-[#FAEBD7] shadow-2xl overflow-y-auto rounded-b-lg">
              <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="font-serif text-lg font-bold">Ijay</span>
                <span className="inline-flex items-center justify-center bg-sky-500 text-white rounded-full w-5 h-5 ring-2 ring-white/10">
                  <Check className="w-3 h-3" />
                </span>
              </div>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 rounded-md">
                <X className="w-5 h-5 text-[#FAEBD7]" />
              </button>
            </div>

              <div className="p-4 overflow-y-auto max-h-[calc(100vh-56px)]">
              {/* Accordion items */}
              {[
                { key: "howto", title: "How To", items: ["Approaching girls", "Start conversations", "Flirt", "Make a good first impression"] },
                { key: "attraction", title: "Attraction", items: ["Build instant attraction", "Conversation hooks", "Eye contact techniques", "Compliment strategies"] },
                { key: "sex", title: "Sex", items: ["Positions", "Tips", "Consent & communication", "Aftercare"] },
                { key: "relationships", title: "Relationships", items: ["Communication", "Conflict & repair", "Long-term attraction", "Boundary-setting"] },
                { key: "products", title: "Products", items: ["Sex boosters", "Jewelry", "Men's accessories", "Fragrance"] },
              ].map((section) => (
                <div key={section.key} className="mb-3">
                  <button
                    type="button"
                    onClick={() => toggleExpanded(section.key)}
                    className="w-full flex items-center justify-between px-3 py-3 rounded-lg bg-white/5 text-white"
                    aria-expanded={!!expanded[section.key]}
                    aria-controls={`submenu-${section.key}`}
                  >
                    <span className="font-medium">{section.title}</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                  </button>

                  {expanded[section.key] && (
                    <div id={`submenu-${section.key}`} className="mt-2 ml-2 rounded-md overflow-hidden">
                      {section.items.map((it) => (
                        <a
                          key={it}
                          href={section.key === "products" ? "#products" : "#jay-tribe"}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 text-sm text-[#FAEBD7] hover:bg-white/5"
                        >
                          {it}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4">
                <a href="#apply" onClick={() => setOpen(false)} className="inline-block w-full text-center px-6 py-3 rounded-full bg-slate-900 text-white font-semibold">Apply Now</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
