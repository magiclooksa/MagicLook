import React from 'react';
export function Checkbox({label,checked,onChange,disabled}){
  const [c,setC]=React.useState(!!checked);const on=checked??c;
  return <label dir="rtl" style={{display:'inline-flex',alignItems:'center',gap:10,whiteSpace:'nowrap',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,fontFamily:'var(--font-arabic)',fontSize:15,color:'var(--ml-ink)'}}>
    <input type="checkbox" checked={on} disabled={disabled} onChange={e=>{setC(e.target.checked);onChange&&onChange(e.target.checked)}} style={{position:'absolute',opacity:0,width:0,height:0}}/>
    <span style={{width:20,height:20,borderRadius:6,border:'1.5px solid '+(on?'var(--ml-ochre)':'var(--ml-ink-50)'),background:on?'var(--ml-ochre)':'#fff',display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'all var(--dur-fast)'}}>{on&&<span style={{width:9,height:5,borderLeft:'2px solid #fff',borderBottom:'2px solid #fff',transform:'rotate(-45deg) translate(1px,-1px)'}}/>}</span>{label}</label>;
}
