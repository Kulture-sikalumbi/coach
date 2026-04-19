"use client";
import { FC, useState } from "react";

const Masterclass: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <section id="masterclass" className="w-full py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-charcoal mb-6">Free Masterclass</h2>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="w-full bg-black/5 rounded-2xl aspect-video md:aspect-[16/9] flex items-center justify-center">
            {/* Custom-styled YouTube embed container (replace src id) */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="w-full md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-0 md:transform md:translate-y-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1">
                <div className="text-sm text-charcoal/80 mb-1">Get access to the full masterclass</div>
                <div className="font-semibold text-charcoal">Enter your email to receive the recording</div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="px-4 py-2 border rounded-md w-full md:w-64"
                />
                <button className="px-5 py-2 rounded-full bg-charcoal text-white">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterclass;
