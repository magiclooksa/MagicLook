import React from 'react';
export function ProductCard({image,name,subtitle,badge,price,onClick}){
  const [h,setH]=React.useState(false);
  return <div dir="rtl" onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'flex',flexDirection:'column',gap:12,cursor:onClick?'pointer':'default',fontFamily:'var(--font-arabic)'}}>
    <div style={{position:'relative',aspectRatio:'4/5',borderRadius:'var(--radius-lg)',overflow:'hidden',background:'#fff'}}>
      {image&&<img src={image} alt={name} style={{width:'100%',height:'100%',objectFit:'cover',transform:h?'scale(1.03)':'none',transition:'transform var(--dur-slow) var(--ease-calm)'}}/>}
      {badge&&<span style={{position:'absolute',top:14,insetInlineStart:14,height:26,padding:'0 12px',display:'inline-flex',alignItems:'center',borderRadius:999,background:'var(--ml-ochre)',color:'#fff',fontSize:13,fontWeight:500}}>{badge}</span>}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:12}}>
      <div style={{display:'flex',flexDirection:'column',gap:2}}><span style={{fontSize:18,fontWeight:500,color:'var(--ml-ink)'}}>{name}</span>{subtitle&&<span style={{fontSize:14,color:'var(--ml-ink-70)'}}>{subtitle}</span>}</div>
      {price&&<span style={{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:16,color:'var(--ml-ochre)',whiteSpace:'nowrap'}}>{price}</span>}
    </div></div>;
}
