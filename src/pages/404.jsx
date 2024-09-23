import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const NaoEncontrado = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="nao-encontrado page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="naoencontrado-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="naoencontrado-container">
						<div className="naoencontrado-message">
							<div className="naoencontrado-title">
								Ops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="nao-encontrado-mensagem">
								Não conseguimos encontrar a página que você está procurando.
								<br />
								A URL solicitada "{window.location.href}" não foi encontrada neste servidor.
							</div>
							<a href="/" className="nao-encontrado-link">
								Voltar para a página inicial
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NaoEncontrado;
