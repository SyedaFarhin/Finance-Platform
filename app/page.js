import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-sky-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Trusted by Thousands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-3">
                  {stat.value}
                </div>
                <div className="text-sky-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Powerful Features for Modern Finance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to take control of your financial future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <Card className="p-8 border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all duration-300" key={index}>
                <CardContent className="space-y-4 pt-0">
                  <div className="inline-flex p-3 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-lg">
                    {React.cloneElement(feature.icon, { className: "h-8 w-8 text-sky-700" })}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
            <p className="text-lg text-slate-600">Get started in just three simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-sky-700 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  {React.cloneElement(step.icon, { className: "h-10 w-10 text-white" })}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              What Our Users Say
            </h2>
            <p className="text-lg text-slate-600">Join thousands of satisfied customers managing their finances smarter</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-8 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                <p className="text-slate-600 italic">
  &quot;{testimonial.quote}&quot;
</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sky-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Take Control?</h2>
          <p className="text-lg text-sky-100 mb-10 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances smarter with FinFlow.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="px-8 bg-white text-sky-700 hover:bg-sky-50 font-semibold">
              Start Free Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
