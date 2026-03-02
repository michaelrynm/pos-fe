"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  loginAction,
  type LoginActionState,
} from "@/features/internal/auth/actions/auth-actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-[#FE9F43] hover:bg-[#e8892d] transition-colors"
    >
      {pending ? "Logging in…" : "Login"}
    </Button>
  );
}

const initialState: LoginActionState = { error: null };

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [state, action] = useActionState(loginAction, initialState);

  return (
    <form
      action={action}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your credentials below to continue
          </p>
        </div>

        {state.error && (
          <div className="rounded-md bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
            {state.error}
          </div>
        )}

        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="your username"
            required
            autoComplete="username"
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </Field>

        <Field>
          <SubmitButton />
        </Field>

        <FieldDescription className="text-center text-sm text-muted-foreground">
          Having trouble?{" "}
          <a href="#" className="underline underline-offset-4">
            Contact support
          </a>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
