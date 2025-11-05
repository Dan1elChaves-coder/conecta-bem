// scripts.js
document.addEventListener('input',e=>{
 const m=(v,p)=>v.replace(/\D/g,'').replace(p.find,a=>p.repl(a));
 if(e.target.name==='cpf')e.target.value=m(e.target.value,{find:(v)=>v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4'),repl:x=>x});
 if(e.target.name==='tel')e.target.value=m(e.target.value,{find:(v)=>v.replace(/(\d{2})(\d{5})(\d{4})/,'($1) $2-$3'),repl:x=>x});
 if(e.target.name==='cep')e.target.value=m(e.target.value,{find:(v)=>v.replace(/(\d{5})(\d{3})/,'$1-$2'),repl:x=>x});
});
