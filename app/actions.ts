"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

import { EmailTemplate } from "@/components/email-template";

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
  const resend = new Resend(process.env.RESEND_API_KEY);
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

    const emailData = await resend.emails.send({
      from: "Something <updates@updates.garyvarner.me>",
      to: [data.email],
      subject: "Update on Something",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

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
