/** @jsxImportSource react */
import { useActionState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import css from './ContactForm.module.css';

const encode = (data) =>
	Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values) => {
	const errors = {};
	if (!values.name.trim()) errors.name = 'Name is required';
	if (!values.email.trim()) errors.email = 'Email is required';
	else if (!EMAIL_RE.test(values.email)) errors.email = 'Invalid email address';
	if (!values.message.trim()) errors.message = 'Message is required';
	return errors;
};

const initialState = {
	errors: {},
	values: { name: '', email: '', message: '' },
	status: null,
};

const submitContact = async (_prev, formData) => {
	const values = {
		name: formData.get('name') || '',
		email: formData.get('email') || '',
		message: formData.get('message') || '',
	};
	const botField = formData.get('bot-field') || '';

	const errors = validate(values);
	if (Object.keys(errors).length > 0) {
		return { errors, values, status: null };
	}

	try {
		const response = await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({
				'form-name': 'contact-kathleen',
				'bot-field': botField,
				...values,
			}),
		});
		if (!response.ok) {
			return { errors: {}, values, status: 'error' };
		}
		return { errors: {}, values: initialState.values, status: 'success' };
	} catch {
		return { errors: {}, values, status: 'error' };
	}
};

export const ContactForm = () => {
	const [state, formAction, isPending] = useActionState(
		submitContact,
		initialState,
	);

	const formKey = state.status === 'success' ? 'sent' : 'editing';

	return (
		<form
			key={formKey}
			action={formAction}
			name="contact-kathleen"
			data-netlify="true"
			netlify-honeypot="bot-field"
			className={css.stackForm}
			noValidate
		>
			<input
				type="hidden"
				name="form-name"
				value="contact-kathleen"
			/>
			<Input
				label="bot-catcher"
				name="bot-field"
				type="text"
				isHidden={true}
				defaultValue=""
				tabIndex={-1}
				autoComplete="off"
			/>
			<Input
				label="Name"
				name="name"
				type="text"
				placeholder="Jane"
				defaultValue={state.values.name}
				error={state.errors?.name}
				required
			/>
			<Input
				label="Email Address"
				name="email"
				type="email"
				placeholder="jane@example.com"
				defaultValue={state.values.email}
				error={state.errors?.email}
				required
			/>
			<TextArea
				label="Message"
				name="message"
				placeholder="type a message"
				defaultValue={state.values.message}
				error={state.errors?.message}
				required
			/>
			{state.status === 'success' && (
				<div
					role="status"
					className={css.successMessage}
				>
					Your message has been sent.
				</div>
			)}
			{state.status === 'error' && (
				<div
					role="alert"
					className={css.errorMessage}
				>
					Something went wrong. Please try again.
				</div>
			)}
			<Button
				type="submit"
				disabled={isPending}
			>
				{isPending ? 'Sending…' : 'Send message'}
			</Button>
		</form>
	);
};

export default ContactForm;
