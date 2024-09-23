import React from "react";

function artigo_1() {
	return {
		date: "15 Setembro 2024",
		title: "Os Benefícios da Computação em Nuvem",
		description:
			"A computação em nuvem oferece uma série de benefícios, incluindo economia de custos e maior flexibilidade. Descubra por que mais empresas estão migrando para a nuvem.",
		keywords: [
			"Benefícios da Computação em Nuvem",
			"João Silva",
			"João S.",
			"João Silva Oliveira",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
				body: (
					<React.Fragment>
						<div className="article-content">
							<div className="paragraph">
								A computação em nuvem revolucionou a forma como armazenamos, processamos e acessamos dados. Entre os principais benefícios está a escalabilidade, que permite às empresas ajustarem seus recursos conforme a demanda, sem a necessidade de grandes investimentos em infraestrutura física. Outro ponto importante é a economia de custos, já que os modelos baseados em nuvem são geralmente pagos conforme o uso, eliminando gastos excessivos com hardware e manutenção. Além disso, a computação em nuvem garante maior flexibilidade e mobilidade, pois os usuários podem acessar informações de qualquer lugar, a qualquer momento, desde que tenham uma conexão com a internet.
							</div>
							<div className="paragraph">
								A segurança dos dados também é um fator chave. Os provedores de serviços em nuvem investem massivamente em soluções de segurança, oferecendo backups automáticos, criptografia e protocolos de proteção contra ataques cibernéticos. Isso dá às empresas maior tranquilidade ao lidar com informações confidenciais. Outro benefício significativo é a colaboração facilitada, pois equipes podem trabalhar em tempo real, compartilhando e editando documentos simultaneamente. Assim, a computação em nuvem não só otimiza os processos internos das empresas, mas também melhora a produtividade e a eficiência no ambiente de trabalho.
							</div>
							<br/>
							<img
								src="https://img.freepik.com/fotos-gratis/colagem-do-conceito-saas_23-2149399281.jpg?t=st=1727120761~exp=1727124361~hmac=f4c7a3ae90b25fe8c39510101fcae5b6f2d5da1db5add1510d4066586c64d7a0&w=1060" width={800} height={420}
								alt="aleatório"
								className="randImage"
							/>
						</div>
					</React.Fragment>
				)
	};
}

function artigo_2() {
	return {
		date: "20 Agosto 2024",
		title: "Inteligência Artificial na Saúde",
		description:
			"A IA está transformando a indústria da saúde, melhorando os resultados dos pacientes e otimizando operações. Descubra as últimas aplicações dessa tecnologia revolucionária.",
		style: ``,
		keywords: [
			"Inteligência Artificial na Saúde",
			"Ana Costa",
			"Ana C.",
			"Ana Costa Souza",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						A inteligência artificial (IA) está transformando o setor de saúde, oferecendo soluções inovadoras para diagnósticos, tratamentos e gerenciamento de dados médicos. Com o uso de IA, é possível analisar grandes volumes de informações clínicas em tempo real, detectar padrões e prever doenças com maior precisão. Tecnologias como aprendizado de máquina e redes neurais permitem que sistemas automatizados auxiliem profissionais de saúde na tomada de decisões, melhorando a eficiência e a qualidade do atendimento. Além disso, a IA está sendo usada para o desenvolvimento de medicamentos personalizados e para monitoramento remoto de pacientes, garantindo uma abordagem mais proativa e preventiva para a saúde.
					</div>
					<br/>
					<img
								src="https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg?t=st=1727120619~exp=1727124219~hmac=4b1b2e90182e15fd53d0bf421ff7d7d458cb20e984391a386f910ed395b01820&w=1380" width={800} height={420}
								alt="aleatório"
								className="randImage"
							/>
				</div>
			</React.Fragment>
		),		
	};
}

const meusArtigos = [artigo_1, artigo_2];

export default meusArtigos;
