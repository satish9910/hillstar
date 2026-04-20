import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  product_interest: z.string().trim().max(100).optional().or(z.literal("")),
  quantity: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

const PRODUCTS = [
  "Motor Capacitor",
  "Fan Capacitor",
  "Power Capacitor",
  "Lighting Capacitor",
  "Custom / Bulk Order",
];

export function QuoteForm() {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    product_interest: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormData;
        if (key) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("quote_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      company: parsed.data.company || null,
      product_interest: parsed.data.product_interest || null,
      quantity: parsed.data.quantity || null,
      message: parsed.data.message || null,
    });
    setSubmitting(false);
    if (error) {
      setErrors({ message: "Could not submit. Please try again or call us." });
      return;
    }
    setSuccess(true);
    setData({ name: "", email: "", phone: "", company: "", product_interest: "", quantity: "", message: "" });
  };

  if (success) {
    return (
      <div className="rounded-2xl bg-gradient-card border border-border p-8 text-center shadow-card-soft">
        <CheckCircle2 className="h-14 w-14 text-success mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-primary mb-2">
          Quote Request Received!
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you. Our team will get back to you within 24 hours with a detailed quotation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold"
          >
            Call us now
          </a>
          <button
            onClick={() => setSuccess(false)}
            className="px-5 py-3 rounded-md border border-border font-semibold hover:bg-secondary"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm transition";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Full Name *
          </label>
          <input
            value={data.name}
            onChange={(e) => set("name", e.target.value)}
            className={inputCls}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Phone *
          </label>
          <input
            value={data.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={inputCls}
            placeholder="+91 98765 43210"
          />
          {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Email *
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => set("email", e.target.value)}
            className={inputCls}
            placeholder="you@company.com"
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Company
          </label>
          <input
            value={data.company || ""}
            onChange={(e) => set("company", e.target.value)}
            className={inputCls}
            placeholder="Company name (optional)"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Product
          </label>
          <select
            value={data.product_interest || ""}
            onChange={(e) => set("product_interest", e.target.value)}
            className={inputCls}
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
            Quantity
          </label>
          <input
            value={data.quantity || ""}
            onChange={(e) => set("quantity", e.target.value)}
            className={inputCls}
            placeholder="e.g. 500 pcs"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">
          Message
        </label>
        <textarea
          value={data.message || ""}
          onChange={(e) => set("message", e.target.value)}
          rows={4}
          className={inputCls}
          placeholder="Tell us about your specifications..."
        />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-accent text-accent-foreground font-bold py-4 rounded-md shadow-accent-glow hover:scale-[1.01] active:scale-100 transition-transform disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
        ) : (
          <>Get Instant Quote <Send className="h-4 w-4" /></>
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        We typically reply within 24 hours. Your information is kept confidential.
      </p>
    </form>
  );
}
