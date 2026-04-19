"use client";
import { FC } from "react";
import Image from "next/image";
import { Check, Clock, Video, CreditCard } from "lucide-react";
import JayImg from "@/assets/Jay.jpeg";

const FeatureChip = ({ icon, children }: { icon: any; children: React.ReactNode }) => {
  const Icon = icon;
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-100 text-charcoal shadow-sm">
      <Icon className="w-5 h-5 text-slate-600" />
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
};

const Coaching: FC = () => {
  return (
    <section id="coaching" className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image with glass card */}
          <div className="relative flex items-center justify-center">
            <div className="rounded-[40px] overflow-hidden w-full max-w-lg border border-slate-100 bg-white">
              <div className="relative aspect-[4/5] w-full">
                <Image src={JayImg} alt="Ijay" fill className="object-cover" />
              </div>
            </div>

            <div className="hidden md:flex absolute -top-6 -left-6 bg-white/60 backdrop-blur-md border border-white/30 rounded-xl px-4 py-2 flex items-center gap-3 shadow-md">
              <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
                <Check className="w-4 h-4 text-slate-900" />
              </div>
              <div className="text-sm font-semibold text-charcoal">Verified Coach</div>
            </div>

            {/* small-screen badge inside image */}
            <div className="md:hidden absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full flex items-center gap-2 border border-slate-100">
              <Check className="w-4 h-4 text-slate-900" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          </div>

          {/* Right: Features, Stepper, CTA */}
          <div className="pl-0 md:pl-8">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Coaching & Consultations</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              <FeatureChip icon={Clock}>60-Minute Deep Dive</FeatureChip>
              <FeatureChip icon={Video}>Private Zoom Session</FeatureChip>
              <FeatureChip icon={CreditCard}>Secure Payment</FeatureChip>
            </div>

            <div className="mb-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">1</div>
                  <div className="w-px h-8 bg-slate-200/50 mt-2" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Book</div>
                  <div className="text-sm text-charcoal/80">Choose a time that suits you</div>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">2</div>
                  <div className="w-px h-8 bg-slate-200/50 mt-2" />
                </div>
                <div>
                  <div className="font-medium text-charcoal">Pay</div>
                  <div className="text-sm text-charcoal/80">Secure checkout, instant confirmation</div>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">3</div>
                </div>
                <div>
                  <div className="font-medium text-charcoal">Transform</div>
                  <div className="text-sm text-charcoal/80">Begin your coaching journey</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="bg-slate-900 text-white rounded-full py-4 px-8 font-bold hover:shadow-[0_0_20px_rgba(201,160,111,0.4)] transition-all">Book a Session</button>
              <div className="text-sm text-charcoal/70 mt-3">No more manual receipt checking. Your slot is secured instantly.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
