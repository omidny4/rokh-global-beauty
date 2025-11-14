-- Create shipping_rates table
CREATE TABLE public.shipping_rates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  province TEXT NOT NULL,
  city TEXT,
  rate DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.shipping_rates ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read shipping rates
CREATE POLICY "Anyone can view shipping rates"
ON public.shipping_rates
FOR SELECT
TO public
USING (true);

-- Insert sample shipping rates for Iranian provinces
INSERT INTO public.shipping_rates (province, city, rate) VALUES
  ('تهران', NULL, 50000),
  ('اصفهان', NULL, 75000),
  ('شیراز', NULL, 80000),
  ('مشهد', NULL, 85000),
  ('تبریز', NULL, 90000),
  ('کرج', NULL, 55000),
  ('اهواز', NULL, 95000),
  ('قم', NULL, 60000),
  ('کرمانشاه', NULL, 85000),
  ('رشت', NULL, 70000),
  ('یزد', NULL, 80000),
  ('کرمان', NULL, 90000),
  ('همدان', NULL, 75000),
  ('اراک', NULL, 70000),
  ('زنجان', NULL, 80000);