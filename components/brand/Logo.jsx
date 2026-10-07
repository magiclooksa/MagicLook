import React from 'react';
const MARK=["M177.32,107.86h5.29a1.68,1.68,0,0,1,1.64,1.82V137a4.45,4.45,0,0,0,4.74,4.74h13.5c3.65,0,6.2,2.56,6.2,6.39a.48.48,0,0,1-.55.54H184.07c-4.65,0-8.39-3.1-8.39-7.66V109.68A1.74,1.74,0,0,1,177.32,107.86Z","M188.36,112.15l17.32,16.59c.73.7,1.37,1,2.1.37l19.88-16.05c1.28-1,3.1-1.64,3.1.27V148a.67.67,0,0,1-.73.73h-7a.74.74,0,0,1-.73-.82V128.1c0-.72-.55-1-1.1-.54L208.6,137.68c-1.55,1.25-3.37,1.59-4.92.09l-14.32-13.86a3.29,3.29,0,0,1-1.1-2.55v-8.94C188.26,112.24,188.26,112.15,188.36,112.15Z"];
const NAME_AR='النظرة الساحرة';
const C={ochre:'var(--ml-ochre)',ink:'var(--ml-ink)',ivory:'var(--ml-ivory)',white:'#fff'};
export function LogoMark({size=48,color='ochre',style}){return <svg viewBox="175.2 107.4 55.9 41.8" height={size} style={{display:'block',fill:C[color]||color,...style}} aria-label="Magic Look">{MARK.map((d,i)=><path key={i} d={d}/>)}</svg>;}
export function ArabicWordmark({size=24,color='ink',style}){return <span dir="rtl" lang="ar" style={{display:'block',fontFamily:'var(--font-arabic)',fontWeight:500,fontSize:size,lineHeight:1,whiteSpace:'nowrap',color:C[color]||color,...style}}>{NAME_AR}</span>;}
/** Bilingual signature. layout: horizontal | stacked | mark */
export function Logo({layout='horizontal',size=56,tone='light',markPosition='end',style}){
  const text=tone==='dark'?'ivory':'ink';const markC=tone==='dark'?'ivory':tone==='mono'?'ink':'ochre';
  const latin={fontFamily:'var(--font-latin)',fontWeight:700,color:C[text],lineHeight:1,whiteSpace:'nowrap'};
  if(layout==='mark')return <LogoMark size={size} color={markC} style={style}/>;
  if(layout==='stacked')return <div style={{display:'inline-flex',flexDirection:'column',alignItems:'center',gap:size*0.16,...style}}><LogoMark size={size} color={markC}/><ArabicWordmark size={size*0.34} color={text}/><span style={{...latin,fontSize:size*0.24,letterSpacing:'.42em',marginInlineEnd:'-.42em'}}>MAGIC LOOK</span></div>;
  const words=<div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:size*0.12}}><ArabicWordmark size={size*0.38} color={text}/><span style={{...latin,fontSize:size*0.3,letterSpacing:'.04em'}}>MAGIC LOOK</span></div>;
  return <div dir="ltr" style={{display:'inline-flex',alignItems:'center',gap:size*0.28,flexDirection:markPosition==='end'?'row':'row-reverse',...style}}>{words}<LogoMark size={size} color={markC}/></div>;
}
