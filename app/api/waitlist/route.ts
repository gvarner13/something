import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  return Response.json({ count });
}
