# TS Fan Central

Projeto Next.js (Pages Router) baseado no conteúdo de `ts-fan-quest.txt`, organizado em arquivos reais.

## Funcionalidades

- Página responsiva com navegação e menu móvel.
- Desafio diário carregado do Contentful quando configurado; sem CMS, a página informa que falta configurar.
- Frase de exemplo fornecida no arquivo de origem. Só havia uma frase, então o botão não tem outras opções até você acrescentar mais em `components/RandomQuote.jsx`.
- Busca de letras com formulário e endpoint de demonstração. **A API de letras continua placeholder** e não consulta nem exibe letras.
- Área da galeria pronta para receber fotos. **As imagens e a fonte da galeria não foram fornecidas**.
- Login e logout com GitHub via NextAuth, ativados quando as credenciais OAuth estão configuradas.
- Tailwind CSS, fonte Great Vibes e selo “Feito por Maria Peres”.

## Requisitos

- Node.js 18 ou superior e npm.
- Para usar desafios, um espaço Contentful com content type `dailyChallenge` e campo de texto `text`.
- Para login, um OAuth App do GitHub com callback `http://localhost:3000/api/auth/callback/github`.

## Iniciar localmente

1. Clone este repositório e entre na pasta:

   ```bash
   git clone https://github.com/Maria-tay/ts.git
   cd ts
   ```

2. Instale as dependências e crie seu arquivo de ambiente local:

   ```bash
   npm install
   cp .env.example .env.local
   ```

3. Edite `.env.local` no seu computador. Preencha apenas as integrações que for usar. O `.env.local` está ignorado pelo Git; nunca cole tokens ou segredos no código nem os envie ao repositório.

4. Inicie o app:

   ```bash
   npm run dev
   ```

   Abra <http://localhost:3000>.

## Variáveis de ambiente

| Variável | Necessária para | Observação |
| --- | --- | --- |
| `CONTENTFUL_SPACE_ID` | Desafio diário | ID do seu espaço Contentful |
| `CONTENTFUL_ACCESS_TOKEN` | Desafio diário | Use um token de entrega de conteúdo; mantenha-o privado |
| `GITHUB_ID` | Login GitHub | Client ID do seu OAuth App |
| `GITHUB_SECRET` | Login GitHub | Client secret; mantenha-o privado |
| `NEXTAUTH_URL` | Login GitHub | Em local: `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Sessão NextAuth | Gere um valor secreto local, por exemplo com `openssl rand -base64 32` |

Sem variáveis do Contentful, a página abre normalmente, mas não mostra desafio. Sem as duas credenciais GitHub, o login fica indisponível. O endpoint `/api/lyrics` responde com HTTP 501 até uma API real ser escolhida e conectada.

## Produção

Configure as mesmas variáveis no provedor de hospedagem. Atualize `NEXTAUTH_URL` e o callback OAuth para o domínio publicado. A revalidação do desafio está configurada para 24 horas; não é uma garantia de atualização exata na virada do dia.
