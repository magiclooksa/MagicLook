import React from 'react';
const L="M51.6,1.72h3V22.79A10.75,10.75,0,0,0,65.36,33.54H81.27a3,3,0,0,1,3,3H65.36A13.76,13.76,0,0,1,51.6,22.79Z";
const M="M90.73,0l17.68,17.68a2.37,2.37,0,0,0,3.34,0L129.43,0V4.26L113.88,19.81a5.37,5.37,0,0,1-7.6,0L90.73,4.26Z";
function tile(color){const W=103.2;let p='';for(let i=-2;i<=2;i++)for(let k=-1;k<=1;k++)for(const [x,y] of [[i*W,k*W],[i*W-51.6,k*W+51.6]])p+='<path transform="translate('+x.toFixed(2)+' '+y.toFixed(2)+')" d="'+L+'"/><path transform="translate('+x.toFixed(2)+' '+y.toFixed(2)+')" d="'+M+'"/>';
return 'url("data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.2 103.2"><g fill="'+color+'">'+p+'</g></svg>')+'")';}
const GROUND={ivory:['#F4F0E8','#17191B',.13],ink:['#17191B','#F4F0E8',.10],ochre:['#7B5D08','#F4F0E8',.12],white:['#FFFFFF','#17191B',.10]};
/** Surface with the bespoke L-bend / M-valley repeat. */
export function Pattern({ground='ivory',scale=120,opacity,children,style,radius=0}){
  const [bg,fg,op]=GROUND[ground]||GROUND.ivory;
  return <div style={{position:'relative',background:bg,borderRadius:radius,overflow:'hidden',...style}}>
    <div aria-hidden="true" style={{position:'absolute',inset:0,backgroundImage:tile(fg),backgroundSize:scale+'px '+scale+'px',opacity:opacity??op,pointerEvents:'none'}}/>
    <div style={{position:'relative',height:'100%'}}>{children}</div></div>;
}
