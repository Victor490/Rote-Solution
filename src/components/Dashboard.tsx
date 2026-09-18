import { ArrowUpRight, Clock3, Route, SearchCheck } from 'lucide-react'

export function Dashboard(){return <section className="dashboard dashboard-v2 section">
  <div className="dashboard-copy"><div className="eyebrow">Presença que trabalha</div><h2>Seu próximo cliente<br/>já está <i>procurando.</i><br/>Ele encontra você?</h2><p>Estar no digital não é apenas aparecer. É conduzir cada pessoa, com clareza, da primeira busca até o contato.</p><a className="text-link" href="#projetos">Veja isso na prática <ArrowUpRight size={17}/></a></div>
  <div className="impact-stage">
    <div className="impact-main"><span>UMA PRESENÇA DIGITAL QUE</span><strong>não fecha<br/>as portas.</strong><p>Sua marca disponível, clara e preparada para receber oportunidades todos os dias.</p></div>
    <div className="impact-card impact-24"><Clock3/><strong>24h</strong><span>para ser encontrado</span></div>
    <div className="impact-card impact-route"><Route/><strong>1 caminho</strong><span>da busca ao contato</span></div>
    <div className="impact-card impact-find"><SearchCheck/><strong>Presença</strong><span>onde o cliente procura</span></div>
  </div>
</section>}
