import React from 'react';
export function Tabs({tabs=[],value,onChange}){
  const [v,setV]=React.useState(value??(tabs[0]&&(tabs[0].value||tabs[0])));const cur=value??v;
  return <div dir="rtl" role="tablist" style={{display:'flex',gap:28,borderBottom:'1px solid var(--ml-ink-20)'}}>{tabs.map(t=>{const id=t.value||t,lab=t.label||t,on=id===cur;return <button key={id} role="tab" aria-selected={on} onClick={()=>{setV(id);onChange&&onChange(id)}} style={{background:'none',border:'none',padding:'12px 0',marginBottom:-1,borderBottom:'2px solid '+(on?'var(--ml-ochre)':'transparent'),fontFamily:'var(--font-arabic)',fontSize:16,fontWeight:on?500:400,color:on?'var(--ml-ink)':'var(--ml-ink-70)',cursor:'pointer',transition:'color var(--dur-fast)'}}>{lab}</button>;})}</div>;
}
