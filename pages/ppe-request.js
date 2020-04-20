import SEO from "../components/seo"

const PPERequestPage = ({ data }) => (
	<>
		<SEO title="Request PPE" />
		<main>
			<section style={{ width: "100vw", marginTop: "3rem", height: "calc(100vh - 6rem)" }}>
				<iframe
					style={{ height: "100%" }}
					src="https://docs.google.com/forms/d/e/1FAIpQLSfDdXO8zSeozASqR8GUQDwsmXvUPbx1BGUveNh1Yu8fm7omuQ/viewform?usp=sf_link&embedded=true"
					width="100%"
					height="100%"
					frameBorder="0"
					marginHeight="0"
					marginWidth="0">
					Loading…
				</iframe>
			</section>
		</main>
	</>
)

export default PPERequestPage
