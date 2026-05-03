import type { ReactNode } from "react";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function QuoteModalTrigger({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-border p-6 md:p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold text-primary">
            Get Instant Quote
          </DialogTitle>
          <DialogDescription>
            Share your requirement and our team will respond within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <QuoteForm />
      </DialogContent>
    </Dialog>
  );
}
