import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_KEY
);
