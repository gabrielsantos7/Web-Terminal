# 🐧 Linux Interactive Web Terminal

## 🎬 Video Demo

[Click here](https://google.com) to watch the video

## 📃 Description

O Linux Interactive Web Terminal é um de meus projetos mais criativos e sofisticados. Não poderia entregar menos como projeto final para um curso de excelência tão notória como o CS50x. Em resumo, trata-se de uma aplicação que busca simular um terminal Linux na web, com a paleta de cores inspirada nos terminais da distribuição Ubuntu.

O usuário consegue interagir com o terminal através de dois modos diferentes: O primeiro, que vem por padrão, é o modo command, onde ele deve informar comandos reais que usaria em um terminal comum. A aplicação então analisará se o comando é válido, e caso seja, retornará uma breve descrição do que aquele comando faz. No segundo modo (action), o usuário informa a ação que deseja executar, explicando o que ele gostaria que fosse feito, e o terminal exibirá um comando correspondente ao que foi solicitado pelo usuário.

Tudo isso é possível graças ao uso da API do Google Gemini, que permite integrar o serviço de inteligência artificial à nossa aplicação. Para isso, foi construído um backend com Node e Express, que recebe um prompt, encaminha-o para essa API e retorna a resposta gerada pela IA. A infraestrutura é relativamente simples, pois seu objetivo é simplesmente intermerdiar a comunicação entre o serviço de IA e a interface de usuário, limitando o tamanho do prompt e o número de requisições que o servidor aceita por usuário em um intervalo de tempo.

No desenvolvimento do frontend, foi utilizada uma das bibliotecas mais populares e modernas do mercado, o **React**. Essa biblioteca facilita a construção de interfaces de usuário interativas e dinâmicas. Para potencializar a produtividade e a segurança do código, o projeto foi implementado em **TypeScript**, uma linguagem que expande as funcionalidades do JavaScript, fornecendo tipagem estática e outras funcionalidades avançadas. Na parte de estilização, optei pelo uso do **Tailwind CSS**, uma biblioteca de classes utilitárias que permite construir interfaces visualmente agradáveis de forma rápida e eficiente. 

Para a estruturação de pastas e arquivos do projeto, optei pelo padrão mais usado pela comunidade, em que todo o código fonte é armazenado dentro da pasta src. Ela é subdivida entre duas outras pastas: components, que armazena os componentes React da aplicação, e services, que é responsável pela camada de requisições HTTP para o servidor, enviando o prompt do usuário e retornando a resposta gerada. Optei pelo uso da biblioteca Axios, que torna mais fácil o processo de envio de requisições e tratamento de erros e respostas.

Dentro da pasta src, existem outros arquivos importantes. app.tsx e main.tsx são arquivos definidos pelo próprio React. Podemos dizer que o componente App é o componente principal da aplicação, que gerencia toda a lógica de funcionamento do terminal e seus respectivos estados que o fazem funcionar. Ele é renderizado no arquivo main.tsx, que o define sendo o componente raíz da aplicação. Os arquivos helpers.ts e models.ts representam, respectivamente, funções utilitárias que auxiliarão no funcionamento geral da aplicação, e definição de interfaces, que descrevem as propriedades de elementos da aplicação.
