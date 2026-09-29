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

## Publicação

O script `npm run deploy` publica a pasta `build/` no GitHub Pages. Executa-o apenas na tua própria sessão, depois de rever as alterações locais. O ficheiro `public/CNAME` mantém o domínio personalizado na publicação.
