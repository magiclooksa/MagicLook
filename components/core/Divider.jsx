import React from 'react';
export function Divider({tone='hairline',spacing=16}){return <hr style={{border:'none',height:tone==='accent'?2:1,background:tone==='accent'?'var(--ml-ochre)':'var(--ml-ink-20)',margin:spacing+'px 0'}}/>;}
