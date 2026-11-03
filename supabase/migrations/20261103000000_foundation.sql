create schema if not exists extensions;
create extension if not exists postgis with schema extensions;

create schema if not exists app;
comment on schema app is
  'Private application schema. Keep it out of the Supabase Data API exposure list.';
