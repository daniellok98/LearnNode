## Objetivo

Repositorio destinado a estudar a aprender programação inicialmente utilizando node.js

### Como executar o projeto

Se você não tiver, baixe o NVM do repositorio oficial [NVM](https://github.com/coreybutler/nvm-windows/releases). Baixe o nvm-setup.exe mais atual e instale no Windows. Se estiver a usar linux, instale o nvm com o comando:  
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```
Após a instalação, abra o terminal e execute o comando:
```bash
nvm install 22
```
Feche quaisquer terminais e aplicações que usem o terminal como o VSCode. E por fim execute o comando:
```bash
nvm use 22
npm install
```
O NPM é o gerenciador de pacotes do Node.js, ele é responsável por instalar as dependências do projeto.

### Como executar arquivos do projeto
Para uma melhor organização, a base dos exercícios está esta na pasta `exercises` localizada na raiz do projeto e dentro dela outra pasta com o intuito de categorizar cada exercício. Se você ainda não tem uma pasta com o seu nome, crie uma e coloque os arquivos de exercícios lá da mesma forma com que se encontram na pasta original de exercícios.
Os arquivos de exercícios dentro da sua pasta pessoal, podem ser modificados, são neles que os problemas serão de fato resolvidos. Não modifique os arquivos da pasta `exercises` original, pois eles são compartilhados com todos os membros do grupo.

Após ter a sua pasta e resolver um exercício, você pode executar o arquivo do exercício com o comando:
```bash
cd ./nome-da-sua-pasta/pasta-de-categoria
node nome-do-arquivo.js
```
O primeiro comando serve apenas para entrar dentro da pasta onde se encontra o arquivo do exercício, o segundo comando executa o arquivo do exercício.

### Como contribuir
Para contribuir com o projeto, usaremos o git flow. Para isso, você deve criar uma branch com o seu nome e a categoria do exercício que você está a resolver. Por exemplo, se você está a resolver um exercício de `arithmetic`, você deve criar uma branch com o nome `seu-nome/arithmetic/exercise-name`. Para criar a branch, execute o comando:
```bash
git checkout -b seu-nome/arithmetic/exercise-name
```
Após resolver o exercício, adicione o arquivo do exercício com o comando:
```bash
git add .
```
E faça o commit com o comando:
```bash
git commit -m "Resolução do exercício exercise-name da categoria arithmetic"
```
Por fim, envie a branch para o repositório remoto com o comando:
```bash
git push origin seu-nome/arithmetic/exercise-name
```
E crie um pull request no repositório do projeto. O pull request será revisado e, se estiver tudo certo, será aceito.

Antes de começar a fazer qualquer coisa, atualize o repositório local com o comando:
```bash
git pull origin main
```
E crie a sua branch a partir da branch main com o comando:
```bash
git checkout -b seu-nome/arithmetic/exercise-name
```

### Como atualizar o repositório local
Para atualizar o repositório local, execute o comando:
```bash
git pull origin main
```

### Lembre-se sempre dos comandos basicos do git
 - git status: Verifica o estado dos arquivos no repositório
 - git add .: Adiciona todos os arquivos modificados ao stage
 - git commit -m "Mensagem": Faz o commit dos arquivos adicionados ao stage
 - git push origin branch-name: Envia a branch para o repositório remoto
 - git pull origin branch-name: Atualiza o repositório local com a branch do repositório remoto
 - git checkout -b branch-name: Cria uma branch com o nome especificado (o -b serve para criar a branch, sem ele, você apenas muda de branch)
 - git checkout branch-name: Muda para a branch especificada
 - git branch: Lista todas as branches do repositório
 - git stash: Guarda as modificações atuais em um stash
 - git stash apply: Aplica as modificações guardadas em um stash

Com os comandos básicos do git, você consegue fazer praticamente tudo o que precisa no repositório.