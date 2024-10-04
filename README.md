# 🐧 Linux Interactive Web Terminal

## 🎬 Demonstração em Vídeo

[Clique aqui](https://youtu.be/LxXPw16eRJk) para assistir o vídeo.

## 📃 Descrição

O **Linux Interactive Web Terminal** é um de meus projetos mais criativos e sofisticados. Não poderia entregar menos como projeto final para um curso de excelência tão notória como o CS50x. Em resumo, trata-se de uma aplicação que busca simular um terminal Linux na web, com a paleta de cores inspirada nos terminais da distribuição Ubuntu.

O usuário consegue interagir com o terminal através de dois modos diferentes: O primeiro, que vem por padrão, é o modo `command`, onde ele deve informar comandos reais que usaria em um terminal comum. A aplicação então analisará se o comando é válido, e caso seja, retornará uma breve descrição do que aquele comando faz. No segundo modo (`action`), o usuário informa a ação que deseja executar, explicando o que ele gostaria que fosse feito, e o terminal exibirá um comando correspondente ao que foi solicitado pelo usuário.

Tudo isso é possível graças ao uso da **API do Google Gemini**, que permite integrar o serviço de inteligência artificial à nossa aplicação. Para isso, foi construído um backend com **Node** e **Express**, que recebe um prompt, encaminha-o para essa API e retorna a resposta gerada pela IA. A infraestrutura é relativamente simples, pois seu objetivo é simplesmente intermerdiar a comunicação entre o serviço de IA e a interface de usuário, limitando o tamanho do prompt e o número de requisições que o servidor aceita por usuário em um intervalo de tempo.

No desenvolvimento do frontend, foi utilizada uma das bibliotecas mais populares e modernas do mercado, o **React**. Essa biblioteca facilita a construção de interfaces de usuário interativas e dinâmicas. Para potencializar a produtividade e a segurança do código, o projeto foi implementado em **TypeScript**, uma linguagem que expande as funcionalidades do JavaScript, fornecendo tipagem estática e outras funcionalidades avançadas. Na parte de estilização, optei pelo uso do **Tailwind CSS**, uma biblioteca de classes utilitárias que permite construir interfaces visualmente agradáveis de forma rápida e eficiente.

Para a estruturação de pastas e arquivos do projeto, optei pelo padrão mais usado pela comunidade, em que todo o código fonte é armazenado dentro da pasta `src`. Ela é subdivida entre duas outras pastas: `components`, que armazena os componentes React da aplicação, e `services`, que é responsável pela camada de requisições HTTP para o servidor, enviando o prompt do usuário e retornando a resposta gerada. Optei pelo uso da biblioteca **Axios**, que torna mais fácil o processo de envio de requisições e tratamento de erros e respostas.

Dentro da pasta `src`, existem outros arquivos importantes: `app.tsx` e `main.tsx` são arquivos definidos pelo próprio React. Podemos dizer que o componente `App` é o componente principal da aplicação, que gerencia toda a lógica de funcionamento do terminal. Ele é renderizado no arquivo `main.tsx`, que o define sendo o componente raíz da aplicação. Os arquivos `helpers.ts` e `models.ts` representam, respectivamente, funções utilitárias que auxiliarão no funcionamento geral da aplicação, e definição de interfaces, que descrevem as propriedades de elementos da aplicação. Em toda a aplicação, utilizamos apenas um arquivo CSS (`index.css`), também localizado dentro dessa pasta. É nesse arquivo que são definidas as diretivas do Tailwind CSS, indispensáveis para seu funcionamento correto, e algumas estilizações gerais que serão aplicadas em toda a aplicação.

Na subpasta `services`, são definidos dois arquivos: `axios.ts` e `get-command-description.ts`. O primeiro arquivo tem como objetivo a criação e exportação de uma única instância do Axios, definindo as configurações necessárias para seu funcionamento, a fim de evitar a criação de múltiplas instâncias. O segundo arquivo utiliza essa instância do Axios para realizar o envio do prompt do usuário para o backend e retornar a resposta gerada. Esse processo é feito através de uma função, que é exportada para ser usada dentro do componente principal.

Na subpasta `components`, temos a definição dos componentes do terminal que representam diferentes partes essenciais da interface e funcionalidade do terminal web. Cada componente desempenha um papel específico na simulação da experiência de linha de comando, como a exibição do banner principal, a estrutura de um comando digitado, o nome de usuário com o horário atual, a listagem dos comandos disponíveis, um elemento que representa o cursor do terminal e outro que exibe as principais informações do projeto, como objetivo e tecnologias usadas.

O resultado final foi uma aplicação web que simula um terminal de linha de comando, onde o usuário pode interagir com diferentes comandos e receber respostas imediatas, sem precisar recarregar a página, proporcionando uma experiência dinâmica, fluida e intuitiva. Usei como inspiração um projeto feito por `FK Codes`, que também simula uma aplicação como essa. Você pode acessá-la [clicando aqui](https://fkcodes.com/). Espero que esse projeto cumpra com o que foi proposto pelo CS50x e que talvez possa ajudar a quem está migrando para o Linux ou deseje aprofundar seu conhecimento em alguma distribuição.
