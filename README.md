# Portfolio

Portfolio de Sérgio Veríssimo, desenvolvido com React, TypeScript e Vite.

## Desenvolvimento

Requer Node.js 22.12 ou superior.

```bash
npm ci
npm start
```

O servidor local mostra o endereço de acesso no terminal.

## Verificações

```bash
npm test
npm run build
npm audit
```

`npm run build` verifica os tipos TypeScript e gera o site em `build/`.

## Publicação no GitHub Pages

Este projeto publica o site compilado no ramo `gh-pages` do repositório `SergioVerissimo1/Portfolio`. O domínio configurado é `www.sergioverissimo.com`. O comando de publicação cria um commit no ramo `gh-pages` e envia-o para o GitHub: **executa-o tu, na tua própria sessão**.

### 1. Preparar o código

Confirma que tens Node.js 22.12 ou superior e Git instalados. Revê as alterações locais, escolhe apenas os ficheiros do site, faz o commit e envia o ramo `main` com o teu cliente Git. O comando de publicação abaixo envia só o site compilado e **não** atualiza o código-fonte em `main`.

Na raiz do projeto, instala e verifica as dependências:

```bash
npm ci
npm test
npm run build
```

Para ver a versão de produção antes de publicar, executa `npm run preview` e abre o endereço mostrado no terminal. Termina essa pré-visualização com `Ctrl+C`.

### 2. Publicar

Executa pessoalmente, na raiz do projeto:

```bash
npm run deploy
```

O script `predeploy` volta a executar `npm run build`. Em seguida, `gh-pages` publica o conteúdo de `build/` na raiz do ramo `gh-pages` do remoto `origin` e adiciona `.nojekyll`. O ficheiro `public/CNAME` é copiado para `build/CNAME` para conservar o domínio personalizado.

### 3. Confirmar a configuração no GitHub

No repositório, abre **Settings → Pages** e confirma:

1. **Build and deployment → Source:** `Deploy from a branch`.
2. **Branch:** `gh-pages`; **Folder:** `/(root)`; guarda a escolha. Se o ramo ainda não aparecer, confirma primeiro que o comando de publicação terminou com sucesso.
3. **Custom domain:** `www.sergioverissimo.com`. Ativa **Enforce HTTPS** quando estiver disponível.

No fornecedor DNS, o registo `CNAME` de `www` deve apontar diretamente para `SergioVerissimo1.github.io`, sem `/Portfolio`. Depois de o GitHub concluir a publicação e de o DNS propagar, abre <https://www.sergioverissimo.com>.

Para futuras atualizações, envia primeiro o código-fonte alterado para `main` e volta a executar `npm run deploy`. Se a página mostrar uma versão antiga, confirma o último deploy em **Settings → Pages** e verifica se `gh-pages` contém `index.html` e `CNAME` na raiz.

Referências: [publicar a partir de um ramo](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [configurar domínio personalizado](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) e [deploy de sites Vite](https://vite.dev/guide/static-deploy).
