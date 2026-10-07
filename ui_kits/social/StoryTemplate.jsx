// Story 1080×1920 — recreated from 0001-blue-chair-poster-01.jpg
function StoryTemplate({headline,useCalligraphy,features,image,handle}){
  const {Pattern,Logo,FeatureLine,SocialLinks}=window.MagicLookDesignSystem_1440af;
  return <Pattern ground="ivory" scale={300} opacity={0.09} style={{width:1080,height:1920}}>
    <div dir="rtl" style={{position:'absolute',left:90,right:90,top:121,bottom:138,background:'var(--ml-ivory-deep)',borderRadius:44,padding:'70px 74px 0',boxSizing:'border-box'}}>
      <div style={{display:'flex',justifyContent:'flex-start'}}><Logo size={124}/></div>
      <div style={{marginTop:96,height:150,display:'flex',alignItems:'center',justifyContent:'flex-start'}}>
        {useCalligraphy?<img src="../../assets/brand/title.png" style={{height:270,marginInlineEnd:-70}}/>:<div style={{fontFamily:'var(--font-arabic)',fontWeight:700,fontSize:104,lineHeight:1.1,color:'var(--ml-ink)'}}>{headline}</div>}
      </div>
      <div style={{marginTop:24,marginInline:-50}}><FeatureLine size={31} items={features}/></div>
      <img src={image} style={{position:'absolute',left:60,right:60,top:690,width:'calc(100% - 120px)',height:900,objectFit:'contain'}}/>
      <div style={{position:'absolute',left:76,bottom:72}}><SocialLinks handle={handle} size={42}/></div>
    </div>
  </Pattern>;
}
window.StoryTemplate=StoryTemplate;
