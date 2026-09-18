import { ArrowDownRight, ArrowRight, ArrowUpRight, MessageCircle, Search, Sparkles, Store } from 'lucide-react'

export function Hero() {
  return <section id="inicio" className="hero hero-v2 hero-flow">
    <div className="hero-grid" />
    <div className="digital-flow" aria-label="Jornada digital: busca, presença, conversa e venda">
      <div className="flow-line"><i/><i/><i/><i/></div>
      <div className="flow-card flow-search"><Search/><span><b>Alguém procura</b><small>seu produto ou serviço</small></span></div>
      <ArrowRight className="flow-arrow arrow-one"/>
      <div className="flow-card flow-site"><span className="flow-brand">[›</span><span><b>Encontra sua marca</b><small>e entende seu valor</small></span></div>
      <ArrowRight className="flow-arrow arrow-two"/>
      <div className="flow-card flow-chat"><MessageCircle/><span><b>Inicia uma conversa</b><small>de forma simples e rápida</small></span></div>
      <ArrowRight className="flow-arrow arrow-three"/>
      <div className="flow-card flow-sale"><Store/><span><b>Vira oportunidade</b><small>para o seu negócio</small></span></div>
      <div className="flow-status"><span/> Jornada conectada</div>
    </div>
    <div className="eyebrow hero-eyebrow"><Sparkles size={14}/> Estratégia, presença e crescimento</div>
    <h1 className="reveal-title">Fazemos seu<br/>negócio ser <i>visto,</i><br/><span>escolhido e lembrado.</span></h1>
    <div className="hero-bottom">
      <div><p>Transformamos sua presença digital em uma experiência que atrai pessoas e gera oportunidades reais.</p><a href="#contato" className="hero-main-cta">Quero crescer no digital <ArrowUpRight size={17}/></a></div>
      <a href="#solucoes" className="round-link" aria-label="Conhecer soluções"><ArrowDownRight size={25}/></a>
      <span className="hero-index">ROTE — DIGITAL COMPLETO</span>
    </div>
  </section>
}
