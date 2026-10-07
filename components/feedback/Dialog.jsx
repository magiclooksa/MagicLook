import React from 'react';
export function Dialog({open=true,title,children,actions,onClose,inline}){
  if(!open)return null;
  const box=<div dir="rtl" role="dialog" style={{width:'min(440px,100%)',background:'var(--ml-ivory)',borderRadius:'var(--radius-lg)',padding:32,boxSizing:'border-box',boxShadow:'var(--shadow-soft)',fontFamily:'var(--font-arabic)',color:'var(--ml-ink)',display:'flex',flexDirection:'column',gap:16}}>
    {title&&<div style={{fontSize:22,fontWeight:500,lineHeight:1.3}}>{title}</div>}
    <div style={{fontSize:15,lineHeight:1.7,color:'var(--ml-ink-70)'}}>{children}</div>
    {actions&&<div style={{display:'flex',gap:12,marginTop:8}}>{actions}</div>}</div>;
  if(inline)return box;
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(23,25,27,.45)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,zIndex:100}}><div onClick={e=>e.stopPropagation()}>{box}</div></div>;
}
