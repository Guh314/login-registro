# Prerequisitos do projeto.
- Nodejs
- npm
- git
- tmux (opcional)

# Baixar o projeto.
Para baixar o projeto utilize o comando: `git clone https://github.com/Guh314/<project_name>`

# Como rodar o projeto.
Por uma questão de divisão entre frontend e backend temos que rodar ambas separadamente em terminais distintos.

## Se estiver usando tmux.
Acesse a tela do projeto pelo terminal.
Use o comando `tmux split-window` para separar a janela em duas telas e siga cada instrução em uma tela separada.
Use o comando `c-b <arrow_key>` para alternar entre as telas. (`c-b` nesse caso significa segure Ctrl e aperte a tecla b)

- frontend, acesse a página do frontend e entre com o comando: `npm start`.
- backend, acesse a página do backend e entre com o comando: `npm start`.

## Caso não esteja usando tmux.
Abra duas instâncias de terminal, ou caso seu terminal possua abas, abra duas.
Acesse o projecto em ambas.

- frontend, acesse a página do frontend e entre com o comando: `npm start`.
- backend, acesse a página do backend e entre com o comando: `npm start`.