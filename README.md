# Pré-requisitos do projeto.
- [NodeJs e NPM](https://nodejs.org/en/download/current)
- [Git](https://git-scm.com/downloads)
- [tmux](https://github.com/tmux/tmux/wiki) (opcional)

# Baixar o projeto.
Para baixar o projeto utilize um dos comandos:
1. `git clone https://github.com/Guh314/login-registro.git` | para Https.
2. `git@github.com:Guh314/login-registro.git` | para SSH

# Como rodar o projeto.
Por uma questão de divisão entre frontend e backend temos que rodar ambas separadamente em terminais distintos.

## Caso não esteja usando tmux.
Abra duas instâncias de terminal, ou caso seu terminal possua abas, abra duas.
Acesse o projecto em ambas.

- Em um primeiro uso tanto para o frontend como para o backend use: `npm install` ou `npm install && npm start` se quiser instalar e iniciar a usar imediatamente, o comando de `npm install` só é necessario em um primeiro uso.

- frontend, acesse a página do frontend e entre com o comando: `npm start`.
- backend, acesse a página do backend e entre com o comando: `npm start`.


## Se estiver usando tmux.
Acesse a tela do projeto pelo terminal.
Use o comando `tmux split-window` para separar a janela em duas telas e siga cada instrução em uma tela separada.
Use o comando `c-b <arrow_key>` para alternar entre as telas. (`c-b` nesse caso significa segure Ctrl e aperte a tecla b).

- Em um primeiro uso tanto para o frontend como para o backend use: `npm install` ou `npm install && npm start` se quiser instalar e iniciar a usar em um comando apenas, o comando de install só é necessario em um primeiro uso.

- frontend, acesse a página do frontend e entre com o comando: `npm start`.
- backend, acesse a página do backend e entre com o comando: `npm start`.
