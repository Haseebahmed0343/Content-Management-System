import Navbar from "@/components/Navbar";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
export default async function HomePage() {
  const supabase = await createClient(); // Initialize your client

  const { data: settings, error } = await supabase
    .from("SiteSettings")
    .select("*")
    .eq("id", 1)
    .single(); // Use .single() because you only expect one row

  if (error) {
    console.error("Error fetching settings:", error);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* --- HERO SECTION --- */}
        <section className="relative h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">
          {/* Background with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={settings.heroImageURL}
              alt="Hero Background"
              fill
              priority
              className="object-cover scale-105" // Slight scale for a "contained" feel
            />
            {/* Dual Gradient Overlay: Darkens for text contrast + adds depth */}
            <div className="absolute inset-0 bg-linear-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center">
            {/* Optional: Small "Eyebrow" text */}
            <span className="inline-block text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">
              {settings.blueheading}
            </span>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
              {settings.heroTitle}
            </h1>

            <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-300 leading-relaxed mb-10">
              {settings.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl shadow-blue-900/20 active:scale-95">
                Get Started
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button className="text-white font-semibold py-4 px-10 rounded-xl border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Decorative bottom fade to blend into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950 to-transparent" />
        </section>

        {/* --- PRICING SECTION --- */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Pricing Plans</h2>
            <p className="text-gray-600 mt-2">
              Flexible options for every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-gray-800">Starter</h3>
              <p className="mt-4 text-4xl font-extrabold text-gray-900">
                ${settings.priceStarter}
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>✅ Basic Access</li>
                <li>✅ 24/7 Support</li>
              </ul>
              <button className="w-full mt-8 py-3 px-6 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Choose Starter
              </button>
            </div>

            {/* Pro */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-xl text-white hover:scale-105 transition">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-3 py-1 uppercase">
                Best Value
              </div>
              <h3 className="text-xl font-bold">Pro</h3>
              <p className="mt-4 text-4xl font-extrabold">
                ${settings.pricepro}
              </p>
              <ul className="mt-6 space-y-3 text-blue-100">
                <li>✅ All Starter Features</li>
                <li>✅ Unlimited Storage</li>
                <li>✅ Custom Domain</li>
              </ul>
              <button className="w-full mt-8 py-3 px-6 rounded-xl bg-white text-blue-600 font-bold hover:bg-gray-100 transition">
                Choose Pro
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
              <p className="mt-4 text-4xl font-extrabold text-gray-900">
                ${settings.priceenterprise}
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>✅ Dedicated Account Manager</li>
                <li>✅ Advanced Security</li>
                <li>✅ Tailored Solutions</li>
              </ul>
              <button className="w-full mt-8 py-3 px-6 rounded-xl border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-100 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
