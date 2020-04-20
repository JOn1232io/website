import yaml from "js-yaml"
import fs from "fs"
import path from "path"

import Markdown from "react-markdown"
import SEO from "../components/seo"
import styles from "./about.module.css"

const Team = ({ title, description, members }) => {
	return (
		<>
			{console.log(members.length)}
			<h2 style={{ marginTop: title === "Founder & Coordinator" ? "0" : "3rem" }} className={styles.header2}>
				<b>{title}</b>
			</h2>
			<p style={{ marginBottom: "1rem" }}>
				<Markdown>{description}</Markdown>
			</p>
			<section className={styles.members} style={{ ["--count"]: members.length }}>
				{members.map(member => (
					<a
						href={member.link}
						className={styles.member}
						key={member.name.replace(" ", "-").toLowerCase()}>
						<span>{member.name}</span>
					</a>
				))}
			</section>
		</>
	)
}

const AboutPage = ({ data }) => {
	return (
		<>
			<SEO title="About" />
			<main className={styles.content}>
				<article className={styles.article} style={{ margin: "calc(3rem + 5rem) 0 5rem 0" }}>
					<h1
						style={{
							padding: "0.5rem 2rem",
							color: "#304352",
							textAlign: "center",
							textTransform: "uppercase",
							fontSize: "200%",
							fontWeight: "bold",
						}}>
						Our Mission
					</h1>
					<section className={styles.container}>
						<p style={{ margin: "auto 10% 5rem 10%", lineHeight: "250%", textAlign: "center" }}>
							<Markdown
								style={{ margin: "auto 10% 5rem 10%", lineHeight: "250%", textAlign: "center" }}>
								{data.mission}
							</Markdown>
						</p>
					</section>
				</article>
				<section className={styles.team}>
					<h1 className={styles.header1}>Our Team</h1>
					<section className={styles.container}>
						{data.teams.map(team => (
							<Team
								title={team.title}
								description={team.description}
								members={team.members}
								key={team.title.replace(" ", "-").toLowerCase()}
							/>
						))}
					</section>
				</section>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const dataPath = path.join(process.cwd(), "data/about.yml")
	const data = yaml.safeLoad(fs.readFileSync(dataPath))
	return { props: { data } }
}

export default AboutPage
