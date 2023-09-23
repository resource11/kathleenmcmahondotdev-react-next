/** @jsxImportSource solid-js */
import { type Component } from "solid-js";
import { render } from "solid-js/web";
import { useField, Form } from "solid-js-form";
import * as Yup from 'yup';
import Button from "../Button/Button"
import Input from "../Input/Input"
import TextArea from "../TextArea/TextArea"
import css from "./ContactForm.module.css"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

/* Formik component is a React Context-powered Component. It connects the state/methods from the Formik component to the Form and other components
 */

// export const ContactForm = () => {
//   return (
//     <>
//         <Form
//             initialValues={{
//                 name: "",
//                 email: "",
//                 message: "",
//               }}
//               validationSchema={Yup.object({
//                 name: Yup.string().required("Name is required"),
//                 email: Yup.string()
//                   .email("Invalid email addresss")
//                   .required("Email is required"),
//                 message: Yup.string().required("Message is required"),
//               })}
//               onSubmit={(values, actions) => {
//                 fetch("/", {
//                   method: "POST",
//                   headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                   body: encode({ "form-name": "contact-kathleen", ...values }),
//                 })
//                   .then(() => {
//                     setTimeout(() => {
//                       // alert(JSON.stringify(values, null, 2))
//                       alert("Your message has been sent.")
//                       actions.setSubmitting(false)
//                       actions.resetForm()
//                     }, 400)
//                   })
//                   .catch(() => {
//                     alert("Whoops! Something went wrong. Please try again.")
//                   })
//                   .finally(() => actions.setSubmitting(false))
//               }}
//           name="contact-kathleen"
//           data-netlify="true"
//           netlify-honeypot="bot-field"
//           className={css.stackForm}
//         >
//           <Input
//             label="bot-catcher"
//             name="bot-field"
//             type="hidden"
//             isHidden={true}
//           />
//           <Input label="Name" name="name" type="text" placeholder="Jane" />
//           <Input
//             label="Email Address"
//             name="email"
//             type="email"
//             placeholder="jane@solid-form.com"
//           />
//           <TextArea
//             label="Message"
//             name="message"
//             placeholder="type a message"
//           />
//           <Button type="submit">Send message</Button>
//         </Form>
//     </>
//   )
// }

export const ContactForm: Component = () => {
  return (
    <Form
      initialValues={{ username: "", password: "" }}
      validation={{
        username: Yup.string().required(),
        password: Yup.string().required(),
      }}
      onSubmit={async (form) => {
        console.log(form.values);
      }}
    >
      {(form) => {
        const formHandler = form.formHandler;
        const usernameError = createMemo(() =>
          form.errors.username && form.touched.username
            ? form.errors.username
            : ""
        );
        const passwordError = createMemo(() =>
          form.errors.password && form.touched.password
            ? form.errors.password
            : ""
        );
        return (
          <>
            <label>Username</label>
            <input 
                value={form.values.username}
                //@ts-ignore
                use:formHandler
            />
            <span>{usernameError()}</span>
            <br />
            <label>Passowrd</label>
            <input 
                value={form.values.password}
                //@ts-ignore
                use:formHandler 
            />
            <span>{passwordError()}</span>
            <br />
            <button type="submit">Submit</button>
          <Input
            label="bot-catcher"
            name="bot-field"
            type="hidden"
            isHidden={true}
          />
          <Input label="Name" name="name" type="text" placeholder="Jane" />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@solid-form.com"
          />
          <TextArea
            label="Message"
            name="message"
            placeholder="type a message"
          />
          <Button type="submit">Send message</Button>
          </>
        );
      }}
    </Form>
  );
};

export default ContactForm
