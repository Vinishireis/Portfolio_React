# Portfolio React Native

Reactfolio é um template de portfólio pessoal moderno e personalizável, desenvolvido utilizando a popular biblioteca React. Ele oferece uma maneira fácil para desenvolvedores, designers e criativos exibirem seu trabalho, habilidades e conquistas de forma profissional e visualmente atraente. Com seu design responsivo e código limpo, o Reactfolio pode ser facilmente adaptado às necessidades e preferências individuais, tornando-se uma escolha ideal para quem deseja criar um portfólio online impressionante.

<center>
<img src="https://raw.githubusercontent.com/Vinishireis/Portfolio_React/refs/heads/main/image.png" alt="React Native Portfolio Vinishireis" />
</center>

Demonstração ao vivo aqui: <a href="#" target="_blank">React Portfolio Vinishireis</a>  
Leia o Readme aqui: <a href="#" target="_blank">Portfolio Readme Vinishireis</a>

-   [Recursos](#-recursos)
-   [Início Rápido](#-início-rápido)
-   [Instalação e Configuração](#-instalação-e-configuração)
-   [Estrutura de Pastas](#-estrutura-de-pastas)
-   [Configurações](#-configurações)
-   [Google Analytics](#-google-analytics)
-   [Compilando o App React](#-compilando-o-app-react)
-   [FAQ](#-faq)
-   [Contribuição](#-contribuição)

## 📙 Recursos

-   📖 Layout com Múltiplas Páginas
    -   Início
    -   Sobre
    -   Projetos
    -   Artigos
    -   Contato
-   📱 Totalmente Responsivo
-   🛠 Fácil configuração

## 📚 Início Rápido

Clone este repositório. Você precisará ter o `NodeJS` e o `git` instalados globalmente em sua máquina.

## 🛠 Instalação e Configuração

1. Instalação: `npm install`

2. Executar o projeto: `npm start`

Isso executa o app no modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador. A página será recarregada se você fizer edições.

## 📁 Estrutura de Pastas

-   `/public`: conteúdo acessível publicamente (ex: imagens, mídia).
-   `/src`: todos os componentes usados neste projeto.
    -   `/src/components/`: componentes reutilizáveis de cada página.
    -   `/src/data`: configurações do aplicativo web.
    -   `/src/pages`: páginas incluídas no aplicativo web.

## ⚙️ Configurações

Como este é um projeto público e de código aberto, você pode fazer qualquer alteração. Se você for um desenvolvedor ReactJS, pode fazer isso facilmente. Mas se você for iniciante, os dados configuráveis foram extraídos para um único diretório, permitindo que você edite os arquivos neste diretório para configurar todo o aplicativo.

Diretório: `/src/data/`

-   `user.js`

    Aqui você pode alterar o conteúdo de cada página do aplicativo.

-   `articles.js`

    Aqui você pode adicionar seus artigos ao aplicativo.

    Instruções:

    -   Adicionar novo artigo:

        1. Crie uma nova função que comece com `article_`. Por exemplo, você pode criar uma função chamada `article_3`.

        2. Adicione os dados de acordo.

            - Adicione a tag `<React.Fragment>` e suas tags de fechamento no corpo.
            - No React, não existe a palavra-chave `class`, então use `className` para definir classes HTML.

            ```js
            function article_3() {
                return {
                    date: "7 de Maio de 2023",
                    title: "Os Benefícios da Computação em Nuvem",
                    description: "Por que as empresas estão migrando para a nuvem.",
                    style: `
                            .random-image {
                                align-self: center;
                                outline: 2px solid red;
                            }
                            `,
                    body: (
                        <React.Fragment>
                            <div className="article-content">
                                <div className="paragraph">
                                    Conteúdo do artigo 1
                                </div>
                                <img
                                    src="https://picsum.photos/200/300"
                                    alt="aleatório"
                                    className="random-image"
                                />
                            </div>
                        </React.Fragment>
                    ),
                };
            }
            ```

        3. Nas últimas linhas, você verá um array ao qual precisa adicionar sua nova função `articles`.

            ```js
            const myArticles = [article_1, article_2, article_3];
            ```

-   `seo.js`

    O arquivo SEO.js é um módulo que contém um array de objetos, com cada objeto representando os metadados para uma página específica de um site React. O propósito deste arquivo é centralizar e gerenciar as informações de SEO (Otimização para Motores de Busca) para diferentes páginas.

    Cada objeto no array SEO tem as seguintes propriedades:

    `page`: Representa o nome ou identificador da página. Ele ajuda a mapear os dados de SEO para a página apropriada.

    `title`: Especifica o título da página, exibido na barra de título do navegador e sendo um elemento importante para os motores de busca.

    `description`: Fornece uma descrição concisa e informativa do conteúdo da página, muitas vezes exibida nos resultados dos motores de busca, podendo influenciar as taxas de cliques.

    `keywords`: Contém um array de palavras-chave relevantes para o conteúdo da página, ajudando os motores de busca a entender os tópicos abordados e impactando a visibilidade nos resultados de busca.

    Armazenando as informações de SEO no arquivo SEO.js, você pode gerenciar facilmente os metadados para diferentes páginas do seu site React, garantindo consistência e otimização.

    Exemplo:

    ```js
    const SEO = [
        {
            page: "home",
           description:
			"Desenvolvi uma base sólida em desenvolvimento web através da minha especialização em sistemas de internet. Ao longo dos anos, adquiri experiência com diversas linguagens e tecnologias, como MySQL, Java, JavaScript, HTML, CSS e mais. Muitos dos projetos nos quais contribuí estão disponíveis para revisão e colaboração. Acredito no poder do conhecimento compartilhado e estou sempre aberto a feedback e sugestões para melhoria. Se estiver interessado em algum dos meus trabalhos, sinta-se à vontade para explorar o código e oferecer suas ideias. Estou sempre ansioso para colaborar e aprender com outros.",
        },
    ];
    ```

-   `styles.css`

    Aqui você pode alterar as cores e fontes do aplicativo web.

    ```css
    :root {
        /* ------- cores ------- */
        --primary-color: #27272a;
        --secondary-color: #65656d;
        --tertiary-color: #acacb4;
        --quaternary-color: #e4e4e7;
        --link-color: #14b8a6;
        /* ---------------------- */

        /* ------- fontes ------- */
        --primary-font: "Heebo", sans-serif;
        --secondary-font: "Roboto", sans-serif;
        /* --------------------- */
    }
    ```

## 📈 Google Analytics

Adicione seu ID de MEDIÇÃO do Google Analytics 4 em `/src/data/tracking.js`.

Como encontrar o ID de medição do Google Analytics 4?

[https://support.google.com/analytics/answer/9539598?hl=pt](https://support.google.com/analytics/answer/9539598?hl=pt)

## 🚀 Compilando o App React

Para compilar o app React, você pode usar o comando `npm run build`. Isso criará uma build pronta para produção do seu app no diretório `build/`.

Aqui estão os passos a seguir:

1. Abra o terminal e navegue até o diretório raiz do seu app React.
2. Execute o comando `npm run build` para criar uma build de produção. Isso gerará um pacote estático no diretório `build/`.
3. Copie o conteúdo do diretório `build/` para o diretório público do seu servidor. Você pode fazer isso usando um cliente FTP ou executando um comando como `scp` para transferir os arquivos para o servidor. Substitua `example.com` e `/var/www/html` pelo nome de domínio e diretório público do seu servidor, respectivamente:

    ```bash
    scp -r build/* user@example.com:/var/www/html
    ```

4. Seu aplicativo de portfólio React agora estará acessível pelo nome de domínio do seu servidor. Você pode verificar isso abrindo um navegador e navegando para http://example.com (substitua example.com pelo nome de domínio do seu servidor).

Isso é tudo! Seu app de portfólio React agora estará rodando no seu servidor. Note que pode ser necessário configurar o servidor web (por exemplo, Apache ou Nginx) para servir o arquivo index.html no diretório build como a página padrão do seu domínio.

## 🤔 FAQ

**P1. As subpáginas só podem ser acessadas através de links na página inicial ou na barra de navegação, mas essas páginas não estão acessíveis através de links diretos.**

Se você estiver usando o Apache como seu servidor web, pode inserir o seguinte no seu arquivo .htaccess:

```c
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  Rewrite

Cond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

## 🌱 Contribuição

Se você tiver sugestões sobre o que melhorar no Reactfolio e quiser compartilhá-las, sinta-se à vontade para deixar uma issue ou fazer um fork do projeto para implementar suas próprias ideias.