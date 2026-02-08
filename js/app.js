function showTab(id,btn){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

document.getElementById("searchInput").addEventListener("keyup",function(){
  const v=this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display=c.innerText.toLowerCase().includes(v)?"block":"none";
  });
});

document.addEventListener("click",e=>{
  const c=e.target.closest(".card");
  if(!c)return;
  c.classList.remove("ripple");
  void c.offsetWidth;
  c.classList.add("ripple");
});
