import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Formação"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2022/10/centro-paula-souza-logo.svg"
								alt="curso técnico"
								className="work-image"
							/>
							<div className="work-title">Curso Técnico</div>
							<div className="work-subtitle">
								Técnico em Informática para Internet
							</div>
							<div className="work-duration">Concluído</div>
						</div>

						<div className="work">
							<img
								src="https://www.fecap.br/files/icon/svg/logo-fecap-verde.svg"
								alt="FECAP"
								className="work-image"
							/>
							<div className="work-title">FECAP</div>
							<div className="work-subtitle">
								Graduação em Ciências da Computação
							</div>
							<br/>
							<div className="work-duration"> Cursando</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
