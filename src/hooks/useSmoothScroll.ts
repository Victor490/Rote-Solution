import { useEffect } from 'react'; import Lenis from 'lenis'; import { useReducedMotion } from './useReducedMotion'
export function useSmoothScroll() { const reduced = useReducedMotion(); useEffect(() => {
  const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches
  if (reduced || touchDevice) return
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  let frame = 0
  const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
  frame = requestAnimationFrame(raf)
  return () => { cancelAnimationFrame(frame); lenis.destroy() }
}, [reduced]) }
