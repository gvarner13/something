"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { createClient } from "@supabase/supabase-js";

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
  const schema = z.object({
    email: z.string().email(),
  });
  const parse = schema.safeParse({
    email: formData.get("email"),
  });

  if (!parse.success) {
    return { message: "Failed to add to supa" };
  }

  const data = parse.data;

  try {
    const { error } = await supabase
      .from("waitlist")
      .insert({ email: data.email });
    //do supabase stuff here
    // setTimeout(() => {
    //   console.log({ data });
    // }, 2000);
    revalidatePath("/");
    return { message: `Added email ${data.email}` };
  } catch (e) {
    return { message: "Failed to create waitlist" };
  }
}

export async function deleteTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    todo: formData.get("todo"),
  });

  try {
    //do supabase stuff here
    revalidatePath("/");
    return { message: `Deleted todo ${data.todo}` };
  } catch (e) {
    return { message: "Failed to delete todo" };
  }
}
