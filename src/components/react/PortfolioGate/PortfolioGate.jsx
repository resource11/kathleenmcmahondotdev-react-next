/** @jsxImportSource react */
import { useActionState } from "react"
import Button from "../Button/Button"
import Input from "../Input/Input"
import css from "./PortfolioGate.module.css"

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

const initialState = {
  errors: {},
  status: null,
}

const submitGate = async (_prev, formData) => {
  const password = formData.get("password") || ""

  if (!password) {
    return { errors: { password: "Password is required" }, status: null }
  }

  const params = new URLSearchParams(window.location.search)
  const returnUrl = params.get("return") || ""

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ password, return: returnUrl }),
    })

    if (response.status === 200) {
      const { redirect } = await response.json()
      window.location.assign(redirect || "/private/")
      return { errors: {}, status: null }
    }

    if (response.status === 401) {
      return { errors: {}, status: { error: "Incorrect password" } }
    }

    if (response.status === 429) {
      return {
        errors: {},
        status: { error: "Too many attempts, try again in a minute." },
      }
    }

    return {
      errors: {},
      status: { error: "Something went wrong, please try again." },
    }
  } catch {
    return {
      errors: {},
      status: { error: "Network error, please try again." },
    }
  }
}

export const PortfolioGate = () => {
  const [state, formAction, isPending] = useActionState(
    submitGate,
    initialState
  )

  return (
    <div className={css.root}>
      <form
        action={formAction}
        className={css.stackForm}
        aria-labelledby="portfolio-gate-heading"
        noValidate
      >
        <h2 id="portfolio-gate-heading" className={css.heading}>
          Have a password? Enter it to view a private case study.
        </h2>
        {state.status?.error && (
          <div className={css.serverError} role="alert">
            {state.status.error}
          </div>
        )}
        <Input
          label="Portfolio password"
          name="password"
          type="password"
          autoComplete="current-password"
          error={state.errors?.password}
          required
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Checking…" : "Unlock portfolio"}
        </Button>
      </form>
    </div>
  )
}

export default PortfolioGate
