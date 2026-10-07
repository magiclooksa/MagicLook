import React from 'react';
export function IconButton({children,label,variant='outline',size=44,onClick,disabled}){
  const [h,setH]=React.useState(false);
  const base=variant==='solid'?{background:h?'var(--ml-ochre-700)':'var(--ml-ochre)',color:'#fff',border:'none'}:variant==='ghost'?{background:h?'var(--ml-ochre-100)':'transparent',color:'var(--ml-ink)',border:'none'}:{background:h?'var(--ml-ink)':'transparent',color:h?'var(--ml-ivory)':'var(--ml-ink)',border:'1px solid var(--ml-ink)'};
  return <button aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{width:size,height:size,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',cursor:'pointer',padding:0,opacity:disabled?.4:1,transition:'all var(--dur-fast) var(--ease-calm)',...base}}>{children}</button>;
}
