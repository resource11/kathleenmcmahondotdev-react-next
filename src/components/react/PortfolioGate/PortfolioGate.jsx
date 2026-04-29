/** @jsxImportSource react */
import { useEffect, useState } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Button from "../Button/Button"
import Input from "../Input/Input"
import css from "./PortfolioGate.module.css"

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")

export const PortfolioGate = () => {
  const [returnUrl, setReturnUrl] = useState("")

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setReturnUrl(params.get("return") || "")
  }, [])

  return (
    <div className={css.root}>
      <Formik
        initialValues={{ password: "" }}
        validationSchema={Yup.object({
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={async (values, actions) => {
          actions.setStatus(null)
          try {
            const response = await fetch("/api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ password: values.password, return: returnUrl }),
            })

            if (response.status === 200) {
              const { redirect } = await response.json()
              window.location.assign(redirect || "/private/")
              return
            }

            if (response.status === 401) {
              actions.setStatus({ error: "Incorrect password" })
              return
            }

            if (response.status === 429) {
              actions.setStatus({
                error: "Too many attempts, try again in a minute.",
              })
              return
            }

            actions.setStatus({ error: "Something went wrong, please try again." })
          } catch {
            actions.setStatus({ error: "Network error, please try again." })
          } finally {
            actions.setSubmitting(false)
          }
        }}
      >
        {(formik) => (
          <Form className={css.stackForm} aria-labelledby="portfolio-gate-heading">
            <h2 id="portfolio-gate-heading" className={css.heading}>
              Have a password? Enter it to view a private case study.
            </h2>
            {formik.status?.error && (
              <div className={css.serverError} role="alert">
                {formik.status.error}
              </div>
            )}
            <Input
              label="Portfolio password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
            <Button type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "Checking…" : "Unlock portfolio"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PortfolioGate
