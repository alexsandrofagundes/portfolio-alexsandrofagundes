# ADR-0005: Hospedagem na Vercel pela integração com o GitHub

- Status: aceito
- Data: 2026-10-14

## Contexto

O portfólio deve publicar páginas estáticas, imagens Open Graph geradas no build, sitemap e cabeçalhos de segurança ([ADR-0002](0002-cabecalhos-de-seguranca.md) e [ADR-0003](0003-csp-sem-nonce.md)).

Requisitos:

- Nenhum segredo de deploy guardado no GitHub.
- Publicação reproduzível com os mesmos comandos da integração contínua.
- Previews independentes da produção.
- Baixo custo para um portfólio pessoal.

## Decisão

Hospedar na Vercel, conectada ao repositório pelo aplicativo oficial para GitHub.

- **Produção e previews:** cada mudança integrada à branch de produção é publicada; alterações em revisão recebem uma URL de preview.
- **Endereço público:** `src/config/site-url.ts` usa `SITE_URL` quando definida e, sem ela, o domínio de produção informado pela Vercel. Só builds de produção liberam indexação.
- **Build reproduzível:** `vercel.json` fixa `npm ci` e `npm run build`; o `package.json` e `.nvmrc` fixam Node.js 22.
- **Rollback:** promover uma publicação anterior no painel da Vercel.

## Alternativas

- **Azure Static Web Apps ou AWS Amplify:** provedores viáveis, mas exigem validar novamente os recursos específicos do Next.js usados pelo site.
- **Contêiner próprio atrás de CDN:** oferece controle, porém aumenta a manutenção para um site majoritariamente estático.
- **Export estático:** simplifica a hospedagem, mas exige recriar os cabeçalhos de segurança fora da aplicação.

## Consequências

- O acoplamento à Vercel fica restrito à hospedagem; não há SDK ou serviço específico do provedor no código do site.
- Para outro domínio, configure-o no provedor e informe a origem em `SITE_URL`.
- O HSTS usa `includeSubDomains`; todos os subdomínios do domínio de produção precisam servir HTTPS.
