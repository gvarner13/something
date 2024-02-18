"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "@/app/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="flex-none rounded-md bg-[#FFA8C5] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#FFBCD9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      Sign Up
    </button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);

  return (
    <form action={formAction}>
      <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email-address"
          name="email"
          required
          autoComplete="email"
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FFA8C5] sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <SubmitButton />
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </div>
    </form>
  );
}
