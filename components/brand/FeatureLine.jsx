import React from 'react';
/** Ochre rule + dot-separated product features (poster sub-headline). */
export function FeatureLine({items=[],size=20,rule=true,color='var(--ml-ink)'}){
  return <div dir="rtl" style={{display:'flex',flexDirection:'column',gap:size*0.7}}>
    {rule&&<div style={{height:2,background:'var(--ml-ochre)'}}/>}
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-between',gap:size*0.8,fontFamily:'var(--font-arabic)',fontSize:size,color,lineHeight:1.4}}>
      {items.map((t,i)=><React.Fragment key={i}>{i>0&&<span aria-hidden="true" style={{width:size*0.4,height:size*0.4,borderRadius:'50%',background:'var(--ml-ochre)'}}/>}<span style={{whiteSpace:'nowrap'}}>{t}</span></React.Fragment>)}
    </div></div>;
}
