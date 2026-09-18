import { Menu, ArrowUpRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'
const links = [['Soluções','#solucoes'],['Projetos','#projetos'],['Sobre','#sobre']]
export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [open])

  return <header className={`header ${open ? 'is-open' : ''}`}><a className="brand" href="#inicio" onClick={close}><span className="brand-mark"><img src="/images/rote-symbol.svg" alt=""/></span><span>ROTE<br/>SOLUTION</span></a><nav>{links.map(([name, href]) => <a key={href} href={href} onClick={close}>{name}</a>)}</nav><a className="header-cta" href="#contato" onClick={close}>Falar com a gente <ArrowUpRight size={15}/></a><button className="menu" type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu />}</button>{open && <div className="mobile-nav">{links.map(([name,href], index)=><a href={href} key={href} onClick={close}><b>0{index + 1}</b>{name}<ArrowUpRight size={20}/></a>)}<a className="mobile-contact" href="#contato" onClick={close}>Pedir diagnóstico <ArrowUpRight size={18}/></a></div>}</header> }
