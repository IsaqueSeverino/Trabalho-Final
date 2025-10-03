SUS Digital - Plataforma de Agendamento
Este é o repositório do projeto SUS Digital, uma interface moderna e amigável para o agendamento de consultas e gerenciamento de informações de saúde, desenvolvida com tecnologias web de ponta.

🎯 Sobre o Projeto
O SUS Digital visa modernizar o acesso aos serviços do Sistema Único de Saúde (SUS), oferecendo uma plataforma centralizada onde os cidadãos podem agendar consultas, visualizar seu histórico médico e encontrar farmácias próximas de maneira rápida e intuitiva.

✨ Funcionalidades
Agendamento de Consultas: Interface simplificada para marcar consultas.

Visualização de Histórico: Acesso fácil ao histórico de saúde do paciente.

Localizador de Farmácias: Ferramenta para encontrar farmácias próximas.

Interface Responsiva: Totalmente adaptável para uso em desktops, tablets e celulares.

🛠️ Tecnologias Utilizadas
Este projeto foi construído utilizando as seguintes tecnologias:

Frontend: React.js com TypeScript

Estilização: Tailwind CSS

Build Tool: Vite

Containerização: Docker com Nginx para produção.

🚀 Como Executar o Projeto
Você pode executar este projeto de duas maneiras: utilizando Docker (recomendado para maior simplicidade) ou configurando o ambiente localmente.

✅ Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (versão 18 ou superior)

npm (geralmente instalado com o Node.js)

Docker (necessário apenas para a abordagem com Docker)

clonando o repositório
Bash

git clone https://github.com/IsaqueSeverino/Sus-Digital.git
cd Sus-Digital
Opção 1: Rodando com Docker (Recomendado)
Esta é a forma mais fácil de subir a aplicação, pois todo o ambiente já está configurado.

1. Construa a imagem Docker:
Este comando irá ler o Dockerfile e construir a imagem da sua aplicação.

Bash

docker-compose build
2. Inicie o container:
Este comando irá iniciar a aplicação.

Bash

docker-compose up
Pronto! Agora você pode acessar a aplicação em http://localhost:8080 no seu navegador.

Para parar a aplicação, pressione Ctrl + C no terminal e execute:

Bash

docker-compose down
Opção 2: Rodando Localmente (Sem Docker)
Se preferir rodar o projeto diretamente na sua máquina, siga os passos abaixo.

1. Instale as dependências:
Este comando irá instalar todos os pacotes necessários definidos no package.json.

Bash

npm install
2. Inicie o servidor de desenvolvimento:
Este comando irá iniciar a aplicação em modo de desenvolvimento com Hot-Reload.

Bash

npm run dev
Pronto! O Vite irá informar o endereço local para acessar a aplicação (geralmente http://localhost:5173).

📜 Scripts Disponíveis
No arquivo package.json, você encontrará os seguintes scripts:

npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Gera a versão de produção do projeto na pasta dist/.

npm run lint: Executa o linter para analisar o código em busca de erros.

npm run preview: Inicia um servidor local para visualizar a versão de produção (após rodar npm run build).

🤝 Contribuições
Contribuições são bem-vindas! Se você tiver sugestões para melhorar este projeto, sinta-se à vontade para criar um fork e abrir um Pull Request.

Faça um Fork do projeto

Crie sua Feature Branch (git checkout -b feature/AmazingFeature)

Faça o Commit de suas mudanças (git commit -m 'Add some AmazingFeature')

Faça o Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request

