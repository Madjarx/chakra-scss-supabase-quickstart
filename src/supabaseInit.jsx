import { createClient } from "@supabase/supabase-js";

// Better put your these secret keys in .env file
export const supabase = createClient(
  process.env,,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwenVobmFwb2tud2RudXN1dXBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MDI1ODAsImV4cCI6MTk5MTI3ODU4MH0.rBbX5SS_h14EWHWOOzcZQMQ4td2sl5L6EaI1HDT95KU"
);
