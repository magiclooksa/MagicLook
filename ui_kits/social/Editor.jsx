function Frame({w,h,scale,children,label}){return <div style={{display:'flex',flexDirection:'column',gap:10,alignItems:'center'}}><div style={{width:w*scale,height:h*scale,borderRadius:10,overflow:'hidden',boxShadow:'var(--shadow-product)'}}><div style={{width:w,height:h,transform:'scale('+scale+')',transformOrigin:'0 0'}}>{children}</div></div><span style={{fontFamily:'var(--font-latin)',fontSize:12,letterSpacing:'.08em',color:'var(--ml-ink-70)'}}>{label}</span></div>;}
const PRODUCTS=[{id:'chair',name:'كرسي مخملي أزرق',image:'../../assets/products/blue-chair-view-000.png',features:['ملمس مخملي','ظهر بتصميم منحني','خشب زان متين'],headline:'جماله في تفاصيله'}];
function Editor(){
  const {Tabs,Input,Checkbox,Button,Dialog,Logo,Divider}=window.MagicLookDesignSystem_1440af;
  const [fmt,setFmt]=React.useState(localStorage.getItem('ml-kit-fmt')||'both');
  const [headline,setHeadline]=React.useState(PRODUCTS[0].headline);
  const [cal,setCal]=React.useState(true);
  const [f,setF]=React.useState(PRODUCTS[0].features);
  const [open,setOpen]=React.useState(false);
  React.useEffect(()=>localStorage.setItem('ml-kit-fmt',fmt),[fmt]);
  const p=PRODUCTS[0];
  const shared={headline,useCalligraphy:cal,image:p.image,handle:'@MAGICLOOK'};
  return <div style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 320px',minHeight:'100vh',background:'var(--ml-ivory)'}}>
    <main style={{padding:'28px 32px',display:'flex',flexDirection:'column',gap:24,minWidth:0}}>
      <Tabs tabs={[{value:'both',label:'الكل'},{value:'story',label:'ستوري ١٠٨٠×١٩٢٠'},{value:'post',label:'منشور ١٠٨٠×١٣٥٠'}]} value={fmt} onChange={setFmt}/>
      <div style={{display:'flex',gap:40,justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap'}}>
        {fmt!=='post'&&<Frame w={1080} h={1920} scale={fmt==='both'?0.28:0.36} label="STORY · 1080 × 1920"><StoryTemplate {...shared} features={f}/></Frame>}
        {fmt!=='story'&&<Frame w={1080} h={1350} scale={fmt==='both'?0.4:0.5} label="POST · 1080 × 1350"><PostTemplate {...shared} background="../../assets/backgrounds/background.png" phones="05 10 65 73 89 - 05 35 34 65 55" address="الدمام - حي المنار - شارع ابوبكر الصديق - امام بنك الراجحي"/></Frame>}
      </div>
    </main>
    <aside dir="rtl" style={{background:'#fff',borderInlineEnd:'1px solid var(--ml-ink-20)',padding:24,display:'flex',flexDirection:'column',gap:16}}>
      <Logo size={44}/>
      <Divider tone="accent" spacing={4}/>
      <Input label="العنوان" value={headline} onChange={setHeadline}/>
      <Checkbox label="الخط الذهبي (صورة العنوان)" checked={cal} onChange={setCal}/>
      {f.map((v,i)=><Input key={i} label={'ميزة '+(i+1)} value={v} onChange={nv=>setF(f.map((x,j)=>j===i?nv:x))}/>)}
      <div style={{marginTop:'auto'}}><Button fullWidth onClick={()=>setOpen(true)}>تصدير التصميم</Button></div>
    </aside>
    <Dialog open={open} title="جاهز للتصدير" onClose={()=>setOpen(false)} actions={<Button size="sm" onClick={()=>setOpen(false)}>حسناً</Button>}>هذه نسخة توضيحية — التصدير غير متاح في هذا النموذج.</Dialog>
  </div>;
}
window.Editor=Editor;
