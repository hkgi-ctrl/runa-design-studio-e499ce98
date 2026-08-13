ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon can insert leads" ON contact_leads;
DROP POLICY IF EXISTS "service can read leads" ON contact_leads;
DROP POLICY IF EXISTS "no public read" ON contact_leads;

CREATE POLICY "anon can insert leads" ON contact_leads
FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "service can read leads" ON contact_leads
FOR SELECT TO service_role USING (true);

GRANT INSERT ON public.contact_leads TO anon;
GRANT INSERT ON public.contact_leads TO authenticated;
GRANT SELECT ON public.contact_leads TO service_role;
GRANT ALL ON public.contact_leads TO service_role;