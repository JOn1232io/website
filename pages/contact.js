import Head from "next/head"
import yaml from "js-yaml"
import fs from "fs"
import path from "path"
import axios from "axios"
import { useState } from "react"

import Markdown from "react-markdown"
import { Formik, Form, Field, ErrorMessage } from "formik"
import SEO from "../components/seo"

const FormField = ({ title, type }) => (
	<div className="mb-4">
		<label className="text-lg block mb-2">{title}</label>
		<Field
			type={type}
			as={type === "textarea" ? "textarea" : "input"}
			rows="6"
			name={title.toLowerCase()}
			className="text-lg w-full border-2 border-gray-500 focus:border-accent rounded p-4 mb-2"
		/>
		<ErrorMessage name={title.toLowerCase()} component="div" className="text-accent mb-6" />
	</div>
)

const ContactPage = ({ data }) => {
	const [formResult, setFormResult] = useState(null)

	return (
		<>
			<SEO title="Contact" />
			<main className="container mx-auto mt-16">
				<article style={{ margin: "calc(3rem + 5rem) 0 5rem 0" }}>
					<h1
						style={{
							padding: "0.5rem 2rem",
							color: "#304352",
							textAlign: "center",
							textTransform: "uppercase",
							fontSize: "200%",
							fontWeight: "bold",
						}}>
						{data.title}
					</h1>
					<section>
						<p
							style={{
								margin: "auto 10% 5rem 10%",
								lineHeight: "250%",
								textAlign: "center",
								fontSize: "115%",
							}}>
							<Markdown>{data.subtitle}</Markdown>
							{formResult === null || (
								<p className={`text-xl ${formResult.success ? "text-green-600" : "text-red-700"}`}>
									{formResult.message}
								</p>
							)}
						</p>
					</section>
				</article>

				<section className="pb-8 px-8">
					<Formik
						initialValues={{ name: "", email: "", message: "" }}
						validate={values => {
							const errors = {}

							if (!values.name) {
								errors.name = "A name is required"
							}

							if (!values.email) {
								errors.email = "An email is required"
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = "Invalid email address"
							}

							if (!values.message) {
								errors.message = "A message is required"
							}

							return errors
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								axios
									.post("/api/contact", values)
									.then(function (response) {
										setFormResult({
											success: true,
											message: response.data.message,
										})
									})
									.catch(function (error) {
										setFormResult({
											success: false,
											message: error.message,
										})
									})
								setSubmitting(false)
							}, 400)
						}}>
						{({ isSubmitting }) => {
							return (
								<Form className="md:w-1/2 mx-auto">
									<FormField title="Name" type="text" />
									<FormField title="Email" type="email" />
									<FormField title="Message" type="textarea" />
									<button
										type="submit"
										disabled={isSubmitting}
										className="block cursor-pointer border-2 bg-accent text-light p-4 mt-6 mx-auto rounded shadow text-lg font-bold">
										Submit
									</button>
								</Form>
							)
						}}
					</Formik>
				</section>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const dataPath = path.join(process.cwd(), "data/contact.yml")
	const data = yaml.safeLoad(fs.readFileSync(dataPath))
	return { props: { data } }
}

export default ContactPage
