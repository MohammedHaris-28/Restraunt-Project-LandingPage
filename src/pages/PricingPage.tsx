import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Zap,
  IndianRupee,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const plans = [
  {
    name: "Basic",
    price: "999",
    desc: "Perfect for small restaurants getting started.",
    features: [
      "QR Menu System",
      "Basic Order Management",
      "Menu Management",
      "1 Restaurant",
      "Email Support",
    ],
    cta: "Start Basic",
  },
  {
    name: "Pro",
    price: "1,499",
    desc: "For growing restaurants that need more power.",
    features: [
      "Everything in Basic",
      "POS Dashboard",
      "Kitchen Display System",
      "Analytics Dashboard",
      "Role-based Access",
      "Priority Support",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Pro+",
    price: "1,999",
    desc: "For serious restaurants & multi-branch setups.",
    features: [
      "Everything in Pro",
      "Multi-branch Support",
      "Custom Branding",
      "Dedicated Manager",
      "Future Add-ons Ready",
      "SLA Guarantee",
    ],
    cta: "Go Premium",
  },
];

const features = [
  { name: "POS Dashboard", price: 1500 },
  { name: "Kitchen Display", price: 1000 },
  { name: "Analytics", price: 1200 },
  { name: "Custom Website", price: 2000 },
  { name: "Multi-Branch", price: 2500 },
];

export default function PricingPage() {
  const [tables, setTables] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [qrType, setQrType] = useState<"standard" | "premium">("standard");

  const BASE = 4000;

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((i) => i !== name)
        : [...prev, name]
    );
  };

  const qrCostPerTable = qrType === "premium" ? 150 : 50;

  const total = useMemo(() => {
    const tableCost = tables * qrCostPerTable;

    const featureCost = features
      .filter((f) => selected.includes(f.name))
      .reduce((sum, f) => sum + f.price, 0);

    return BASE + tableCost + featureCost;
  }, [tables, selected, qrType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center">
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Pricing
        </span>
        <h1 className="text-4xl font-heading font-bold mt-3">
          Simple, Transparent Pricing
        </h1>
        <p className="text-muted-foreground mt-4">
          No hidden charges. Built to maximize your revenue.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "glass glow-primary scale-105 border-primary/30"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {plan.desc}
              </p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  /month
                </span>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button className="mt-6 rounded-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Estimate Your Setup Cost
            </h2>
            <p className="text-muted-foreground mt-2">
              Customize your system and see exact investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="glass rounded-2xl p-6 space-y-6">

              {/* Tables */}
              <div>
                <Label>Number of Tables</Label>
                <Input
                  type="number"
                  value={tables}
                  onChange={(e) => setTables(Number(e.target.value))}
                  className="mt-2"
                />
              </div>

              {/* QR TYPE */}
              <div>
                <Label>QR Type</Label>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setQrType("standard")}
                    className={`px-4 py-2 rounded-lg ${
                      qrType === "standard"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    Standard (₹50)
                  </button>
                  <button
                    onClick={() => setQrType("premium")}
                    className={`px-4 py-2 rounded-lg ${
                      qrType === "premium"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    Premium Stand (₹150)
                  </button>
                </div>
              </div>

              {/* FEATURES */}
              <div>
                <Label>Select Add-ons</Label>
                <div className="space-y-3 mt-2">
                  {features.map((f) => (
                    <div
                      key={f.name}
                      className="flex justify-between items-center bg-background/40 p-2 rounded-lg"
                    >
                      <div className="flex gap-2 items-center">
                        <Checkbox
                          checked={selected.includes(f.name)}
                          onCheckedChange={() => toggle(f.name)}
                        />
                        <span className="text-sm">{f.name}</span>
                      </div>
                      <span className="text-xs">₹{f.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="glass rounded-2xl p-8 flex flex-col justify-between">

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Your Investment
                </h3>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Base Setup: ₹{BASE}</p>
                  <p>
                    Tables ({tables}): ₹{tables * qrCostPerTable}
                  </p>
                  <p>
                    Features: ₹
                    {features
                      .filter((f) => selected.includes(f.name))
                      .reduce((s, f) => s + f.price, 0)}
                  </p>
                </div>

                <div className="mt-4 text-green-600 text-xs flex gap-2 items-center">
                  <Zap size={14} />
                  Recover cost in 2–3 days 🚀
                </div>
              </div>

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    Total Setup Cost
                  </span>
                  <span className="text-3xl font-bold text-primary flex items-center">
                    <IndianRupee size={20} />
                    {total.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground mt-2">
                  One-time setup. Subscription starts ₹999/month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 max-w-4xl text-center">

          <div className="glass p-6 rounded-2xl">
            <IndianRupee className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">Affordable Setup</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Pay only for what you need. No unnecessary hardware.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <Zap className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">Fast ROI</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Recover cost within days through efficiency.
            </p>
          </div>

          <div className="glass p-6 rounded-2xl">
            <ShieldCheck className="mx-auto text-primary mb-3" />
            <h4 className="font-semibold">No Hidden Fees</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Transparent pricing. No commissions.
            </p>
          </div>

        </div>
      </section>

      <FooterSection />
    </div>
  );
}