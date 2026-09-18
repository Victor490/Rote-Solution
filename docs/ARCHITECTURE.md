# Arquitetura e decisões técnicas

## Objetivo

O site apresenta a Rote Solution a gestores e proprietários de negócios. A interface evita jargões e traduz tecnologia em resultados compreensíveis: presença, oportunidades, eficiência e visibilidade.

## Organização

`App.tsx` compõe as seções e inicializa animações globais. Cada seção relevante vive em um componente próprio. Comportamentos compartilhados, como rolagem suave e detecção de movimento reduzido, ficam em hooks dedicados.

## Estilos

O projeto utiliza Tailwind CSS 4 integrado ao Vite. O sistema visual autoral está em `src/styles/globals.css`, incluindo layouts, estados interativos, animações, composições dos cases e responsividade.

## Movimento

GSAP e ScrollTrigger controlam as entradas ligadas à rolagem. Lenis suaviza a navegação. `useReducedMotion` interrompe movimentos não essenciais quando solicitado pelo sistema do visitante.

Princípios:

1. Movimento explica hierarquia ou mudança de estado.
2. Conteúdo permanece acessível sem animação.
3. Controles oferecem resposta visual imediata.
4. Animações não bloqueiam navegação ou leitura.

## Seletor de soluções

`Services` mantém a seleção no estado local. Cada escolha altera cor, título, descrição, ícone, resultado esperado e animação do cenário, sem redirecionar o visitante.

## Cases

Os cases usam imagens locais em `public/images/`, evitando indisponibilidade de serviços externos. Cada case contém contexto, entregas, resultado mensurável, link público e captura visual.

Para adicionar um case, atualize `src/components/Projects.tsx`, inclua a imagem em `public/images/` e adicione somente os estilos específicos necessários.

## Responsividade

Os principais pontos de adaptação são 900 px e 700 px. Em telas menores, composições em duas colunas tornam-se verticais, o menu ocupa a tela, painéis reorganizam controles e elementos decorativos são simplificados.

## Validação

```bash
npm run lint
npm run build
```

Antes de publicar, verifique menu mobile, âncoras, seletor de soluções, links, movimento reduzido, imagens locais e diferentes larguras de tela.
