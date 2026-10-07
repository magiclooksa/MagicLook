import React from 'react';
export function Card({tone='ivory',radius='xl',padding=40,children,style}){
  const bg={ivory:'var(--ml-ivory-deep)',white:'#fff',ink:'var(--ml-ink)',ochre:'var(--ml-ochre)'}[tone];
  return <div style={{background:bg,color:tone==='ink'||tone==='ochre'?'var(--ml-ivory)':'var(--ml-ink)',borderRadius:'var(--radius-'+radius+')',padding,boxSizing:'border-box',...style}}>{children}</div>;
}
