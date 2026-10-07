import React from 'react';
const T={ochre:{background:'var(--ml-ochre)',color:'#fff'},soft:{background:'var(--ml-ochre-100)',color:'var(--ml-ochre-700)'},ink:{background:'var(--ml-ink)',color:'var(--ml-ivory)'},outline:{background:'transparent',color:'var(--ml-ink)',boxShadow:'inset 0 0 0 1px var(--ml-ink-20)'}};
export function Badge({tone='soft',children}){return <span style={{display:'inline-flex',alignItems:'center',height:26,padding:'0 12px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-arabic)',fontSize:13,fontWeight:500,lineHeight:1,...T[tone]}}>{children}</span>;}
