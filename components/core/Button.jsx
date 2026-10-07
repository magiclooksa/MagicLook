import React from 'react';
const V={primary:{background:'var(--ml-ochre)',color:'#fff',border:'1px solid var(--ml-ochre)'},secondary:{background:'transparent',color:'var(--ml-ink)',border:'1px solid var(--ml-ink)'},ghost:{background:'transparent',color:'var(--ml-ochre)',border:'1px solid transparent'},inverse:{background:'var(--ml-ivory)',color:'var(--ml-ink)',border:'1px solid var(--ml-ivory)'}};
const HOV={primary:{background:'var(--ml-ochre-700)',borderColor:'var(--ml-ochre-700)'},secondary:{background:'var(--ml-ink)',color:'var(--ml-ivory)'},ghost:{background:'var(--ml-ochre-100)'},inverse:{background:'#fff'}};
const S={sm:{height:36,padding:'0 16px',fontSize:14},md:{height:44,padding:'0 24px',fontSize:16},lg:{height:56,padding:'0 32px',fontSize:18}};
export function Button({variant='primary',size='md',disabled,icon,children,onClick,type='button',fullWidth,style}){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  return <button type={type} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,whiteSpace:'nowrap',lineHeight:1,borderRadius:'var(--radius-pill)',fontFamily:'var(--font-arabic)',fontWeight:500,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,transition:'background var(--dur-fast) var(--ease-calm),color var(--dur-fast),transform var(--dur-fast)',transform:p&&!disabled?'scale(.98)':'none',width:fullWidth?'100%':undefined,...S[size],...V[variant],...(h&&!disabled?HOV[variant]:{}),...style}}>
    {icon}{children}</button>;
}
