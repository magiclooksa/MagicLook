import React from 'react';
function Field({label,hint,error,children}){return <label dir="rtl" style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-arabic)'}}>{label&&<span style={{fontSize:14,fontWeight:500,color:'var(--ml-ink)'}}>{label}</span>}{children}{(error||hint)&&<span style={{fontSize:12,color:error?'var(--danger)':'var(--ml-ink-70)'}}>{error||hint}</span>}</label>;}
export function Input({label,hint,error,placeholder,value,onChange,type='text',disabled,dir='rtl'}){
  const [f,setF]=React.useState(false);
  return <Field label={label} hint={hint} error={error}><input dir={dir} type={type} value={value} placeholder={placeholder} disabled={disabled} onChange={e=>onChange&&onChange(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
    style={{height:48,padding:'0 16px',borderRadius:'var(--radius-md)',border:'1px solid '+(error?'var(--danger)':f?'var(--ml-ochre)':'var(--ml-ink-20)'),boxShadow:f?'0 0 0 3px var(--ml-ochre-100)':'none',background:disabled?'var(--ml-ivory-shade)':'#fff',fontFamily:'var(--font-arabic)',fontSize:16,color:'var(--ml-ink)',outline:'none',transition:'border-color var(--dur-fast),box-shadow var(--dur-fast)'}}/></Field>;
}
