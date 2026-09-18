# Rote Solution

Site institucional da **Rote Solution**, uma operação digital que conecta estratégia, presença, aquisição e melhoria de processos para gerar crescimento real.

O projeto foi construído como uma experiência moderna, responsiva e orientada à conversão. A comunicação foi pensada para um público não técnico: em vez de destacar ferramentas ou jargões, o site apresenta benefícios claros, resultados e cases reais.

## Visão geral

- Jornada visual mostrando como uma busca se transforma em oportunidade.
- Apresentação interativa das soluções da Rote.
- Animações com respeito à preferência de movimento reduzido.
- Cases reais com resultados mensuráveis.
- Navegação responsiva com menu mobile.
- Identidade baseada no guia oficial da Rote Solution.

## Cases apresentados

### Agafarma Assis Brasil

- Site institucional e canal de atendimento.
- Google Ads e Google Meu Negócio.
- Resultado comunicado: **10% de aumento no faturamento**.

### Formato Contábil

- Revisão e melhoria de processos internos.
- Indicadores de desempenho para cada setor.
- Maior visibilidade gerencial para o proprietário.
- Resultado comunicado: **aproximadamente 70% dos processos contábeis agilizados**.

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Interface baseada em componentes |
| TypeScript 6 | Tipagem estática e segurança na manutenção |
| Vite 8 | Desenvolvimento e build de produção |
| Tailwind CSS 4 | Integração moderna de estilos com o Vite |
| GSAP e ScrollTrigger | Animações e transições ligadas à rolagem |
| Lenis | Rolagem suave |
| Lucide React | Ícones consistentes e acessíveis |
| Oxlint | Análise estática do código |

## Estrutura

```text
src/
├── components/
│   ├── Dashboard.tsx
│   ├── DigitalJourney.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Manifesto.tsx
│   ├── PathSection.tsx
│   ├── Projects.tsx
│   └── Services.tsx
├── hooks/
│   ├── useReducedMotion.ts
│   └── useSmoothScroll.ts
├── styles/globals.css
├── App.tsx
└── main.tsx

public/
├── favicon.svg
└── images/
    ├── agafarma-site.png
    ├── formato-contabil-site.png
    └── rote-symbol.svg
```

## Componentes principais

- `Header`: navegação desktop e menu mobile expansível.
- `Hero`: proposta de valor e jornada visual do cliente.
- `DigitalJourney`: resumo das frentes de atuação.
- `Services`: seletor interativo de resultados e soluções.
- `PathSection`: método de trabalho.
- `Dashboard`: valor comercial da presença digital.
- `Projects`: cases, serviços realizados e resultados.
- `Manifesto`: posicionamento da marca.
- `FinalCTA`: chamada final para contato.
- `Footer`: contatos e navegação institucional.

## Identidade visual

- Grafite como cor estrutural.
- Azul como cor de ação e destaque.
- Off-white para superfícies claras.
- Tipografia monoespaçada em dados e elementos operacionais.
- Tipografia serifada nas mensagens de maior impacto.
- Símbolo oficial formado pelo colchete e pela seta.

## Acessibilidade e experiência

- Estrutura semântica e controles identificáveis.
- Suporte a `prefers-reduced-motion`.
- Menu mobile com estado acessível.
- Textos alternativos nas imagens.
- Contraste alinhado à identidade da marca.

## Executando localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # ambiente de desenvolvimento
npm run build    # valida TypeScript e gera produção
npm run preview  # visualiza o build localmente
npm run lint     # análise estática com Oxlint
```

Os arquivos de produção são gerados em `dist/`.

## Personalização

- Seções: `src/components/`.
- Estilos e responsividade: `src/styles/globals.css`.
- Animações globais: `src/App.tsx`.
- Imagens e marca: `public/images/`.
- Metadados: `index.html`.

Consulte [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) para decisões técnicas e orientações de manutenção.

## Licença e conteúdo

Código e conteúdo desenvolvidos para a Rote Solution. Marcas, capturas e resultados apresentados pertencem aos respectivos clientes e devem ser utilizados apenas com autorização.
