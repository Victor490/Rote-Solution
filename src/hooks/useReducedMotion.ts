import { useEffect, useState } from 'react'
export function useReducedMotion() { const [reduced, setReduced] = useState(false); useEffect(() => { const q = window.matchMedia('(prefers-reduced-motion: reduce)'); const sync = () => setReduced(q.matches); sync(); q.addEventListener('change', sync); return () => q.removeEventListener('change', sync) }, []); return reduced }
