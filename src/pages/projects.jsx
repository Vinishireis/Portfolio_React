import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projetos = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projetos-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
					<div className="title projetos-title">
    Projetos que marcaram minha jornada na programação.
</div>

<div className="subtitle projects-subtitle">
    Trabalhei em vários projetos ao longo dos anos e estou orgulhoso do meu progresso. Muitos deles são open-source e você pode explorar e contribuir. Se interessar, fique à vontade para revisar o código e sugerir melhorias. Acredito que a colaboração é uma ótima forma de aprender e crescer, e estou sempre aberto a novas ideias e feedbacks.
</div>


						<div className="projects-lista">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projetos;
