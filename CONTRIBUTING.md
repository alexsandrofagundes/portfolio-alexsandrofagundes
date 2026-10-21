# Como contribuir

1. Crie uma branch a partir de `main` (`feat/...`, `fix/...`, `chore/...`, `docs/...`).
2. Use [Conventional Commits](https://www.conventionalcommits.org/pt-br/).
3. Abra um PR e aguarde a conclusão dos checks.
4. Registre decisões arquiteturais relevantes em `docs/adr/`.

## Rodando localmente

Pré-requisito: Node.js 22 (ver `.nvmrc`).

```bash
npm ci
npm run dev
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Antes do primeiro `test:e2e`, instale o navegador com `npx playwright install chromium`. Se a máquina já tiver um Chromium compatível, aponte para ele com `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

## Variáveis de ambiente

Nenhuma variável é obrigatória. Na Vercel, o site descobre o próprio endereço pelas variáveis de sistema.

| Variável                                       | Uso                                                                                                                      | Sem ela                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `SITE_URL`                                     | Origem pública HTTPS para URLs canônicas, sitemap e Open Graph. Tem prioridade sobre a detecção automática da Vercel.    | Usa o domínio de produção da Vercel ou `http://localhost:3000`. |
| `VERCEL_ENV` e `VERCEL_PROJECT_PRODUCTION_URL` | Preenchidas pela Vercel. Apenas produção libera indexação; previews apontam canônicas para produção e não são indexados. | O `robots.txt` bloqueia a indexação.                            |

## Deploy

O site pode ser publicado na Vercel por integração com GitHub. Configure o projeto e as proteções de branch no provedor escolhido antes de publicar mudanças em produção. Para usar domínio próprio, configure-o no provedor e informe sua origem em `SITE_URL`.
