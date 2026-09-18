import { ArrowRight, Eye, Heart, MousePointerClick, TrendingUp } from 'lucide-react'
import { useState } from 'react'

const services = [
  {name:'Ser encontrado', short:'Presença', title:'Sua marca aparece para quem já está procurando.', text:'Organizamos sua presença digital para que o cliente encontre, entenda e confie no seu negócio.', metric:'Mais alcance', note:'Google, redes e presença local', Icon:Eye, tone:'sky'},
  {name:'Causar uma boa impressão', short:'Marca', title:'Uma experiência bonita, clara e impossível de esquecer.', text:'Criamos a imagem e o site que traduzem o valor do seu negócio desde o primeiro olhar.', metric:'Mais confiança', note:'Marca, conteúdo e experiência', Icon:Heart, tone:'violet'},
  {name:'Gerar oportunidades', short:'Conversão', title:'Cada visita encontra um próximo passo simples.', text:'Guiamos as pessoas até o contato, orçamento ou compra sem complicação e sem caminhos confusos.', metric:'Mais contatos', note:'Campanhas, páginas e jornadas', Icon:MousePointerClick, tone:'mint'},
  {name:'Crescer com consistência', short:'Crescimento', title:'Sua presença digital trabalhando junto com o negócio.', text:'Acompanhamos resultados e melhoramos continuamente o que mais contribui para o crescimento.', metric:'Mais resultado', note:'Análise, evolução e acompanhamento', Icon:TrendingUp, tone:'amber'}
]

export function Services(){
  const [active,setActive]=useState(0)
  const selected=services[active]
  const Icon=selected.Icon
  return <section id="solucoes" className={`services services-v2 section tone-${selected.tone}`}>
    <div className="section-top"><div><div className="eyebrow">Como ajudamos</div><h2>Uma solução para<br/>cada ponto de <i>atrito.</i></h2></div><p>Escolha o resultado que seu negócio precisa agora. A experiência muda para mostrar o caminho.</p></div>
    <div className="solution-experience">
      <div className="solution-tabs" role="tablist">{services.map((service,i)=><button role="tab" aria-selected={i===active} className={i===active?'active':''} onClick={()=>setActive(i)} key={service.name}><span>0{i+1}</span><b>{service.name}</b><ArrowRight size={17}/></button>)}</div>
      <div className="solution-stage" key={selected.name}>
        <div className="stage-noise"/><span className="stage-number">0{active+1}</span>
        <div className="stage-orbit"><Icon size={38}/><i/><i/></div>
        <div className="stage-copy"><span>{selected.short}</span><h3>{selected.title}</h3><p>{selected.text}</p></div>
        <div className="stage-result"><small>O que muda</small><strong>{selected.metric}</strong><span>{selected.note}</span></div>
      </div>
    </div>
  </section>
}
