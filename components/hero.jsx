"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-40 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-semibold text-sky-700 bg-sky-100 px-4 py-2 rounded-full">
            ✨ Smart Financial Management
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pb-6 leading-tight">
          <span className="bg-gradient-to-r from-sky-700 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
            Your Financial Intelligence
          </span>
          <br />
          <span className="text-slate-900">Starts Here</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Harness the power of AI to manage, analyze, and optimize your finances. 
          Track expenses, predict trends, and make smarter financial decisions with FinFlow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-gradient-to-r from-sky-700 to-emerald-600 hover:from-sky-800 hover:to-emerald-700 text-white font-semibold">
              Get Started Free
            </Button>
          </Link>
          {/* <Link href="https://www.youtube.com/roadsidecoder">
            <Button size="lg" variant="outline" className="px-8 border-slate-300 hover:border-sky-700 font-semibold">
              Watch Demo
            </Button>
          </Link> */}
        </div>
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/hero-image.svg"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-2xl shadow-2xl border border-slate-200 mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
