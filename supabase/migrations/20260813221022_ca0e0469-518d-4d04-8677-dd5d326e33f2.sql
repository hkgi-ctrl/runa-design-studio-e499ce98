CREATE TABLE public.contact_leads (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome text NOT NULL,
  empresa text,
  email text NOT NULL,
  telefone text,
  servico text,
  mensagem text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_leads TO anon;
GRANT INSERT ON public.contact_leads TO authenticated;
GRANT ALL ON public.contact_leads TO service_role;

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact lead"
ON public.contact_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);