# Plataforma do Divino Alimento - versão Mercados

A plataforma do Divino Alimento facilita o fluxo de informação de vendas alimentos produzido por diversos agricultores e agricultoras, para diversos compradores e compradoras, por meio do ciclos de entrega de alimentos.

Atualizado em 2025 para atender três tipos de mercados:

1. Venda de cestas
2. Venda em lote como acontece por exemplo no Programa Nacional da Alimentação Escolar
3. Venda direta

Uma plataforma criada em 2021 a luz iniciativa do Divino Alimento, que é contada com mais detalhes no site da [Akarui](https://www.akarui.org.br/divinoalimento) que acontece em São Luiz do Paraitinga, SP, em diálogo entre consumidores e agricultores e agricultoras ligados à Associação Minhoca.

Para conhecer um pouco mais da plataforma connheça o [site](https://site.multifarm.top/docs/proj/divino/apresentacao) de documentação.

---

## Passo a passo para instalar a plataforma em seu computador

1. Clonar o repositório em um lugar do computador de seu conhecimento. 

2. No terminal, utilizar o código abaixo:

`git clone https://github.com/AssociacaoAkarui/DivinoAlimento_Mercados.git`

*obs:*  a versão mais atualizada está na [rama](https://github.com/AssociacaoAkarui/DivinoAlimento/tree/feature/graphql-client-cors)

3. Na pasta que foi criada, utilizando o comando cd 

`cd DivinoAlimento`

4. Copiar o arquivo com nome "env.example" para a pasta oculta com nome .env. Nesse documento "env.example" tem as configuração das portas e dos acessos incluíndo login e senha.

`cp env.example .env`

5. Nesse arquivo, a porta padrão é 13000 

6. Vamos ao *rake*, para poder ligar ou desligar o docker que contém o programa do Divino Alimento. Para conhecer os comandos, utilize:

`rake --tasks`

Para construir:

`rake vivo:constroi`

Para subir o docker

`rake vivo:liga`

*Obs: nesse momento precisa colocar o usuário que foi criado, como usuário administrativo para que possa ter acesso a todo o programa. 

Assim precisamos popular o banco de dados. Para tanto:

`rake vivo:popular`

Para acessar o programa usamos a porta 13000 (ou a porta que deixamos configurada no arquivo .env).

Para tanto no buscador de internet colocar:

`localhost:13000`

Para parar o docker

`rake vivo:para`

## Dependências ou programas necessários em seu computador para utilizar o programa:

1. **docker-compose-v2**
2. **rake**
3. **git**
