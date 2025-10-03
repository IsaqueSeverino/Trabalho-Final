# Usamos uma imagem oficial do Node.js como base. A tag 'alpine' é para uma versão bem pequena.
FROM node:22.20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o resto do código-fonte do projeto para o container
COPY . .

# Executa o comando de build, que gera os arquivos estáticos na pasta /app/dist
RUN npm run build


# Usamos uma imagem oficial do Nginx, um servidor web leve e de alta performance.
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio 'builder' para a pasta padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração customizado do Nginx para dentro do container
# (Vamos criar este arquivo no próximo passo)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80, que é a porta padrão do Nginx
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado
CMD ["nginx", "-g", "daemon off;"]