// Feed post 1080×1350 — recreated from posters-templates/poster.png
function PostTemplate({headline,useCalligraphy,image,background,handle,phones,address}){
  const {Logo,SocialLinks}=window.MagicLookDesignSystem_1440af;
  return <div style={{position:'relative',width:1080,height:1350,overflow:'hidden',background:'var(--ml-ivory)'}}>
    <img src={background} style={{position:'absolute',inset:0,width:'100%',height:1270,objectFit:'cover'}}/>
    <div style={{position:'absolute',top:58,right:42}}><Logo size={78}/></div>
    <img src={image} style={{position:'absolute',left:170,top:330,width:740,height:740,objectFit:'contain',filter:'drop-shadow(0 30px 30px rgba(60,40,10,.25))'}}/>
    <div dir="rtl" style={{position:'absolute',left:0,right:0,top:1030,height:170,display:'flex',alignItems:'center',justifyContent:'center'}}>
      {useCalligraphy?<img src="../../assets/brand/title.png" style={{height:230}}/>:<div style={{fontFamily:'var(--font-arabic)',fontWeight:700,fontSize:92,color:'var(--ml-ink)'}}>{headline}</div>}
    </div>
    <div style={{position:'absolute',left:0,right:0,bottom:0,height:80,background:'var(--ml-ochre)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 40px',boxSizing:'border-box',color:'var(--ml-ivory)'}}>
      <div dir="ltr" style={{display:'flex',flexDirection:'column',gap:4}}>
        <SocialLinks layout="inline" handle={handle} size={22} color="var(--ml-ivory)"/>
        <span style={{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:22,letterSpacing:'.02em'}}>{phones}</span>
      </div>
      <span dir="rtl" style={{fontFamily:'var(--font-arabic)',fontWeight:500,fontSize:22}}>{address}</span>
    </div>
  </div>;
}
window.PostTemplate=PostTemplate;
