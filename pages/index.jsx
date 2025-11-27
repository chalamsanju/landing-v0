import Head from "next/head";
import { useState } from "react";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";

export default function Home() {
  // Contact form state
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "" });
  }

  return (
    <>
      <Head>
        <title>HEXA WAVE — Future UI Experience</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <main className="min-h-screen flex flex-col">
        {/* NAV */}
        <header className="w-full bg-white/60 backdrop-blur-md sticky top-0 z-40 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              HEXA WAVE
            </div>

            <nav className="space-x-8 hidden md:flex items-center font-medium">
              <a href="#features" className="text-slate-600 hover:text-indigo-600">Features</a>
              <a href="#testimonials" className="text-slate-600 hover:text-indigo-600">Testimonials</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600">Contact</a>
              <a
                href="#contact"
                className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow hover:bg-indigo-700"
              >
                Get Started
              </a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="hero-bg container mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Empower Your Digital Future
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                HEXA WAVE transforms the way teams build, validate and ship beautiful web experiences.
                Designed for speed. Crafted for brilliance.
              </p>

              <div className="mt-10 flex gap-4 items-center">
                <a
                  href="#contact"
                  className="inline-block px-7 py-3 bg-indigo-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-indigo-700 transition"
                >
                  Start Free Trial
                </a>
                <a
                  href="#features"
                  className="inline-block px-7 py-3 border border-indigo-400 rounded-xl text-indigo-600 font-semibold hover:bg-indigo-50 transition"
                >
                  Explore Features
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-6 border shadow-xl">
                <img
                  alt="Product"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                  className="rounded-2xl w-full object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section-anchor container mx-auto px-6 py-16">
          <h3 className="text-center text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Powerful Features
          </h3>
          <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
            High-performance tools crafted for developers, designers and creators.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-hover"><FeatureCard icon="⚡" title="Ultra Fast" desc="Optimized for blazing fast performance." /></div>
            <div className="card-hover"><FeatureCard icon="✨" title="Stunning UI" desc="Modern, eye-catching interface components." /></div>
            <div className="card-hover"><FeatureCard icon="📱" title="Responsive" desc="Perfect on every device and screen." /></div>
            <div className="card-hover"><FeatureCard icon="🛡️" title="Secure" desc="Built with top security best practices." /></div>
            <div className="card-hover"><FeatureCard icon="🧩" title="Modular" desc="Ready-to-use and highly adaptable." /></div>
            <div className="card-hover"><FeatureCard icon="🚀" title="Deploy Easy" desc="One-click deployment on Vercel." /></div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="section-anchor container mx-auto px-6 py-16 bg-slate-50">
          <h3 className="text-center text-3xl font-bold text-indigo-600">What Users Say</h3>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <Testimonial quote="The best UI experience we ever used!" name="Aarav K." title="Product Lead" />
            <Testimonial quote="Clean, modern and super fast. Loved it!" name="Maya D." title="UI Designer" />
            <Testimonial quote="Makes development 5x faster." name="Rishi P." title="Full Stack Dev" />
          </div>
        </section>

        {/* CONTACT + PRICING */}
        <section id="contact" className="section-anchor container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold text-indigo-600">Contact Us</h3>
              <p className="text-slate-600 mt-2">Have questions? Want a demo? We’re here to help.</p>

              <form className="mt-6 space-y-4 max-w-md" onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm"
                  placeholder="Your Name"
                  required
                />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm"
                  placeholder="Your Email"
                  type="email"
                  required
                />

                <button
                  type="submit"
                  className="w-full p-3 bg-indigo-600 text-white rounded-lg text-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Submit
                </button>

                {submitted && (
                  <div className="mt-3 p-3 rounded-md bg-green-50 border border-green-200 text-green-700 shadow">
                    ✔ Your request has been submitted! We’ll reach out soon.
                  </div>
                )}
              </form>
            </div>

            {/* Pricing */}
            <div>
              <div className="bg-white p-8 rounded-3xl border shadow-xl">
                <h4 className="font-bold text-2xl text-indigo-600">Simple Pricing</h4>
                <p className="mt-2 text-slate-600">Choose what works for you.</p>

                <div className="mt-6 flex items-end gap-10">
                  <div>
                    <div className="text-sm text-slate-500">Starter</div>
                    <div className="text-4xl font-extrabold">Free</div>
                  </div>

                  <div>
                    <div className="text-sm text-slate-500">Pro</div>
                    <div className="text-4xl font-extrabold">₹799 / mo</div>
                  </div>
                </div>

                <ul className="mt-6 text-slate-600 space-y-2">
                  <li>• Unlimited Projects</li>
                  <li>• Collaboration Tools</li>
                  <li>• Priority Support</li>
                </ul>

                <a
                  className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
                  href="#contact"
                >
                  Start Free
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10 mt-10 shadow-inner">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-lg font-semibold">© {new Date().getFullYear()} HEXA WAVE — All Rights Reserved</div>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="hover:text-gray-200">Privacy</a>
              <a href="#" className="hover:text-gray-200">Terms</a>
              <a href="#" className="hover:text-gray-200">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
