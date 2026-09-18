import { ArrowUpRight, BarChart3, MapPin, TrendingUp } from 'lucide-react'

export function Projects(){return <section id="projetos" className="projects projects-v2 section">
  <div className="section-top"><div><div className="eyebrow">Resultados na prática</div><h2>Trabalho bonito.<br/>Resultado ainda <i>melhor.</i></h2></div><p>Projetos completos, pensados para transformar presença, processos e decisões em crescimento real.</p></div>
  <div className="cases-list">
    <article className="case-feature agafarma-case">
      <div className="case-copy">
        <div className="case-logo">AGA<span>FARMA</span></div>
        <p className="case-location"><MapPin size={14}/> Assis Brasil · Porto Alegre</p>
        <h3>Uma farmácia de bairro com presença digital de gente grande.</h3>
        <p className="case-description">Criamos o site, estruturamos as campanhas no Google e fortalecemos a presença local para transformar buscas em visitas e vendas.</p>
        <div className="case-services"><span>Site</span><span>Google Ads</span><span>Google Meu Negócio</span></div>
        <div className="case-result"><TrendingUp/><div><strong>+10%</strong><span>de faturamento após o projeto</span></div></div>
        <a href="https://www.agafarmaassisbrasil.com.br/" target="_blank" rel="noreferrer">Visitar o site <ArrowUpRight size={17}/></a>
      </div>
      <a className="site-showcase" href="https://www.agafarmaassisbrasil.com.br/" target="_blank" rel="noreferrer" aria-label="Abrir site da Agafarma Assis Brasil">
        <div className="browser-bar"><i/><i/><i/><span>agafarmaassisbrasil.com.br</span></div>
        <div className="site-frame"><img src="/images/agafarma-site.png" alt="Página inicial do site da Agafarma Assis Brasil" loading="lazy"/><div className="frame-shine"/></div>
        <span className="showcase-hint">VER PROJETO <ArrowUpRight size={14}/></span>
      </a>
    </article>

    <article className="case-feature formato-case">
      <div className="case-copy">
        <div className="formato-logo">FORMATO <span>CONTÁBIL</span></div>
        <p className="case-location"><MapPin size={14}/> Porto Alegre · RS</p>
        <h3>Contabilidade mais ágil. Gestão muito mais visível.</h3>
        <p className="case-description">  Redesenhamos os processos da operação contábil e criamos indicadores para cada setor, dando ao proprietário uma visão clara do negócio e mais segurança para decidir. Também fortalecemos a presença digital da empresa, aprimorando o site, otimizando o SEO e reformulando todo o layout para proporcionar uma experiência mais moderna, profissional e eficiente.
        </p>
        <div className="case-services"><span>Processos</span><span>Indicadores por setor</span><span>Visão gerencial</span></div>
        <div className="case-result"><BarChart3/><div><strong>~70%</strong><span>dos processos contábeis agilizados</span></div></div>
        <a href="https://www.formatocontabil.com.br/" target="_blank" rel="noreferrer">Visitar o site <ArrowUpRight size={17}/></a>
      </div>
      <a className="site-showcase" href="https://www.formatocontabil.com.br/" target="_blank" rel="noreferrer" aria-label="Abrir site da Formato Contábil">
        <div className="browser-bar"><i/><i/><i/><span>formatocontabil.com.br</span></div>
        <div className="site-frame"><img src="/images/formato-contabil-site.png" alt="Página inicial do site da Formato Contábil" loading="lazy"/><div className="frame-shine"/></div>
        <span className="showcase-hint">VER PROJETO <ArrowUpRight size={14}/></span>
      </a>
    </article>
  </div>
</section>}
