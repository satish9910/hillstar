-- Quote/contact submissions table for lead generation
CREATE TABLE public.quote_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT,
  product_interest TEXT,
  quantity TEXT,
  message TEXT,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quote_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone (including unauthenticated visitors) can submit a quote request
CREATE POLICY "Anyone can submit a quote request"
  ON public.quote_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users (admins) can read submissions; no public read.
-- Admin viewing UI can be added later. For now, deny SELECT to anon.
CREATE POLICY "Authenticated users can view submissions"
  ON public.quote_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX idx_quote_submissions_created_at ON public.quote_submissions(created_at DESC);