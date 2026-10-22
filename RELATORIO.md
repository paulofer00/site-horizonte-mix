# Relatório de Auditoria e Correções — SEO Técnico & Segurança Web
**Projeto:** Horizonte Mix Engenharia Ltda (`https://horizontemix.com.br`)  
**Stack:** HTML5, CSS3 e JavaScript Vanilla (Estático)  
**Hospedagem:** Hostinger (`public_html` com deploy contínuo via GitHub `paulofer00/site-horizonte-mix`)

---

## ETAPA 0: RECONHECIMENTO

- **Páginas existentes:** Single-page institucional (`index.html`), acompanhada agora de `robots.txt`, `sitemap.xml` e `.htaccess`.
- **Estrutura de pastas:**
  - `/index.html` — Página principal com catálogo interativo, calculadora de obra, formulário de orçamento, mapa e modal de privacidade/LGPD
  - `/.htaccess` — Regras de servidor Apache/LiteSpeed (Hostinger) para HTTPS, Security Headers, bloqueio de arquivos ocultos e cache
  - `/robots.txt` & `/sitemap.xml` — Diretivas de rastreamento e mapa de URLs/imagens
  - `/assets/css/style.css` — Folha de estilos principal
  - `/assets/js/main.js` — Controlador de slider, catálogo, modal, calculadora, envio para WhatsApp, LGPD e animações
  - `/assets/images/` — 10 imagens originais (`.jpg`/`.png`) otimizadas + 9 versões `.webp` + imagem social `og-horizonte-mix.jpg` (`1200x630`)
- **Bibliotecas e CDNs externos usados:**
  - **Google Fonts:** `Montserrat` (600, 700, 800, 900) e `Plus Jakarta Sans` (400, 500, 600, 700) via `fonts.googleapis.com` / `fonts.gstatic.com`
  - **Cloudflare CDNJS:** `gsap.min.js` (`3.12.5`) e `ScrollTrigger.min.js` (`3.12.5`)
  - **Google Maps Embed:** `<iframe>` apontando para `Estrada da Maria José, Santarém - PA`
- **Formulários e Chamadas a APIs:**
  - **Calculadora (`#calculadora`)** e **Formulário de Orçamento (`#quoteForm`)**: processamento 100% local no navegador com redirecionamento seguro para a API web oficial do WhatsApp (`https://wa.me/5593991981830`). Nenhuma chave privada ou banco de dados externo exposto.

---

## ETAPA 1: AUDITORIA INICIAL (Status Antes das Correções)

### SEO Técnico
| # | Item Avaliado | Status Inicial | Arquivos Afetados | Diagnóstico |
|---|---|---|---|---|
| 1 | `noindex` indevido | **OK** | `index.html` | Meta robots estava `index, follow`, foi expandido com diretivas avançadas de snippet. |
| 2 | Title único (50–60 chars) | **Com problema** | `index.html` | Tinha 63 caracteres. Ajustado para **56 caracteres**: `Horizonte Mix Engenharia \| Blocos e Pavers Santarém - PA`. |
| 3 | Meta description (140–160 chars) | **Com problema** | `index.html` | Tinha 161 caracteres. Ajustada para **153 caracteres** com CTA comercial. |
| 4 | Alt text nas imagens | **OK** | `index.html`, `main.js` | Presente em todas as imagens e enriquecido com medidas e localização (`Santarém - PA`). |
| 5 | Core Web Vitals | **Com problema** | `index.html`, `style.css`, `main.js` | Imagens sem `width`/`height`, `@import` de fonte bloqueando renderização no CSS, scripts sem `defer` e falta de `preload` na imagem LCP. |
| 6 | `sitemap.xml` | **Ausente** | `/sitemap.xml` | Arquivo criado com suporte a `sitemap-image` para os produtos. |
| 7 | Open Graph e Twitter Cards | **Com problema** | `index.html`, `assets/images/og-horizonte-mix.jpg` | Usava caminho relativo da logo e não tinha Twitter Cards nem imagem `1200x630`. |
| 8 | Links quebrados | **Com problema** | `index.html` | O botão `#paverWhatsAppBtn` tinha `href="#"` antes do JS carregar. Corrigido para URL válida do WhatsApp. |
| 9 | Hierarquia de Headings e 1 `H1` | **Com problema** | `index.html`, `style.css` | Possuía apenas 1 `H1`, mas pulava de `H2` para `H4` em `.trust-item`, `.calc-result-box`, `.loc-details` e `.footer-heading`. Corrigido para `H3`. |
| 10 | Nomes de arquivos/URLs limpos | **OK** | Todos os arquivos | Todos em minúsculas, sem espaços e sem acentos. |
| 11 | Links internos e páginas órfãs | **OK** | `index.html` | Todas as âncoras internas (`#inicio`, `#quem-somos`, `#produtos`, `#calculadora`, `#orcamento`, `#localizacao`) funcionais. |
| 12 | Tag Canônica (`rel="canonical"`) | **Ausente** | `index.html` | Adicionada `<link rel="canonical" href="https://horizontemix.com.br/" />`. |
| 13 | Imagens (WebP, peso e dimensões) | **Com problema** | `assets/images/*` | As 9 fotos somavam **6,9 MB**. Comprimidas e convertidas para `.webp` + `.jpg` otimizado (**redução de ~81%**, caindo para ~1,3 MB no total). |
| 14 | Schema JSON-LD | **Com problema** | `index.html` | Tinha apenas `LocalBusiness` básico. Expandido para `@graph` completo (`LocalBusiness`, `HomeAndConstructionBusiness`, `Organization`, `WebSite`, `BreadcrumbList` e `OfferCatalog` dos 6 produtos). |
| 15 | `robots.txt` | **Ausente** | `/robots.txt` | Criado apontando para `https://horizontemix.com.br/sitemap.xml`. |
| 16 | Responsividade Mobile | **OK / Melhorado** | `style.css` | Área de toque dos indicadores do slider (`.indicator-dot`) expandida com pseudo-elemento para facilitar o toque no celular. |

### Segurança Web
| # | Item Avaliado | Status Inicial | Arquivos Afetados | Diagnóstico |
|---|---|---|---|---|
| 17 | HTTPS forçado e Mixed Content | **Com problema** | `.htaccess` | Sem mixed content no HTML, mas faltava redirecionamento 301 forçado HTTP → HTTPS e `www` → `não-www` no servidor. |
| 18 | Security Headers HTTP | **Ausente** | `.htaccess` | Criado `.htaccess` com `CSP`, `HSTS`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e `Permissions-Policy`. |
| 19 | Segredos expostos | **OK** | Todo o projeto | Nenhuma chave de API ou credencial exposta. |
| 20 | Proteção contra XSS | **Com problema** | `assets/js/main.js` | Adicionadas funções `escapeHTML()` e `sanitizeInput()` em todas as interpolações de DOM e entradas do usuário. |
| 21 | `target="_blank"` sem `noopener` | **Com problema** | `assets/js/main.js` | No HTML todos estavam corretos, mas o `window.open(url, '_blank')` do formulário foi corrigido para `window.open(url, '_blank', 'noopener,noreferrer')`. |
| 22 | SRI (`integrity`) em CDNs | **Com problema** | `index.html` | Adicionados hashes `integrity="sha512-..."` e `crossorigin="anonymous"` nos scripts do GSAP `3.12.5`. |
| 23 | Segurança de Formulários | **Com problema** | `index.html`, `main.js` | Adicionado campo **Honeypot** oculto (`#quoteWebsite`) contra bots, limites `maxlength`, validação de telefone e sanitização. |
| 24 | Dependências vulneráveis | **OK** | `index.html` | GSAP `3.12.5` estável com integridade criptográfica verificada via SRI. |
| 25 | Arquivos sensíveis expostos (`.git`) | **Com problema** | `.htaccess` | Como o deploy da Hostinger clona o Git em `public_html`, foi adicionado bloqueio `403 Forbidden` no `.htaccess` para `/.git`, arquivos ocultos, `.zip` e `.md`. |
| 26 | Privacidade e LGPD | **Ausente** | `index.html`, `style.css`, `main.js` | Adicionados aviso de consentimento no formulário, banner discreto de LGPD/Cookies e Modal completo de Política de Privacidade (Lei nº 13.709/2018). |

---

## ETAPA 2: RESUMO DO QUE FOI CORRIGIDO E CONFIGURADO NO CSP

### O que foi liberado na Content-Security-Policy (`.htaccess`):
Para garantir máxima segurança sem quebrar nenhuma funcionalidade visual do site, a política CSP em [`.htaccess`](file:///Users/paulofernd/Downloads/site%20horizonte%20mix/.htaccess) libera exclusivamente:
- `default-src 'self'`: Padrão restrito ao próprio domínio `horizontemix.com.br`.
- `script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com`: Permite o `assets/js/main.js`, o bloco JSON-LD estruturado e os scripts GSAP/ScrollTrigger da Cloudflare (protegidos por hash SHA-512 SRI).
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`: Permite o `assets/css/style.css`, estilos inline de animação do GSAP e a folha de fontes do Google Fonts.
- `font-src 'self' https://fonts.gstatic.com data:`: Permite carregar os arquivos `.woff2` das fontes `Montserrat` e `Plus Jakarta Sans`.
- `img-src 'self' data: https:`: Permite carregar as imagens `.webp`, `.jpg` e `.png` do site.
- `frame-src https://www.google.com https://maps.google.com`: Permite exclusivamente o `<iframe>` do mapa interativo do Google Maps na seção de localização.
- `form-action 'self' https://wa.me`: Permite o envio do formulário de orçamento apenas para o próprio site ou para o WhatsApp oficial.
- `object-src 'none'; base-uri 'self'; frame-ancestors 'self'; upgrade-insecure-requests`: Bloqueia plugins legados, injeção de tag `<base>`, clickjacking externo e força upgrade automático para HTTPS.

---

## AÇÕES MANUAIS RECOMENDADAS (Checklist Pós-Deploy)

1. **Google Search Console (`https://search.google.com/search-console`):**
   - Adicione a propriedade **`https://horizontemix.com.br`**.
   - No menu lateral **Sitemaps**, envie o endereço: `https://horizontemix.com.br/sitemap.xml`.
   - Clique em **Inspeção de URL**, digite `https://horizontemix.com.br/` e clique em **Solicitar Indexação**.

2. **Testes de Validação Oficial (após o deploy na Hostinger):**
   - **PageSpeed Insights:** Teste `https://pagespeed.web.dev/` informando `https://horizontemix.com.br/`.
   - **Teste de Pesquisa Aprimorada (Rich Results Test):** Teste `https://search.google.com/test/rich-results` com `https://horizontemix.com.br/` para validar os schemas `LocalBusiness`, `Product` e `BreadcrumbList`.
   - **Security Headers:** Teste `https://securityheaders.com/?q=https://horizontemix.com.br` para conferir a nota **A / A+** dos cabeçalhos configurados no `.htaccess`.
   - **Mozilla Observatory:** Teste `https://developer.mozilla.org/en-US/observatory` informando `horizontemix.com.br`.

3. **Executar o Plano de Backlinks e Google Perfil da Empresa:**
   - Siga o roteiro prático em [`ESTRATEGIA-BACKLINKS.md`](file:///Users/paulofernd/Downloads/site%20horizonte%20mix/ESTRATEGIA-BACKLINKS.md).
