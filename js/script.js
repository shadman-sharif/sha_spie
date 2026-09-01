const progress=document.getElementById('progress');addEventListener('scroll',()=>{const m=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/m*100)+'%'});const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');o.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>o.observe(e));
const c=document.getElementById('network'),x=c.getContext('2d');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower=(navigator.hardwareConcurrency||4)<=4||innerWidth<600;
const dpr=Math.min(devicePixelRatio||1,lowPower?1.5:2);
let n=[],packets=[],w,h,edgeList=[];
const palette=['#4a4f57','#4a4f57','#4a4f57','#4a4f57','#e3934a','#5fd0c0'];
function buildEdges(){edgeList=[];const k=lowPower?2:3;n.forEach((a,i)=>{const dists=n.map((b,j)=>i===j?[1e9,j]:[Math.hypot(a.x-b.x,a.y-b.y),j]).sort((p,q)=>p[0]-q[0]).slice(0,k);dists.forEach(([d,j])=>{if(d<Math.max(w,h)*.28){const key=i<j?i+'-'+j:j+'-'+i;if(!edgeList.find(e=>e.key===key))edgeList.push({key,a,b:n[j],d})}})})}
function resize(){w=innerWidth;h=innerHeight;c.width=w*dpr;c.height=h*dpr;c.style.width=w+'px';c.style.height=h+'px';x.setTransform(dpr,0,0,dpr,0,0);
const count=Math.max(16,Math.min(lowPower?34:60,Math.floor((w*h)/(lowPower?26000:16000))));
n=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,r:1.1+Math.random()*1.6,c:palette[Math.floor(Math.random()*palette.length)]}));packets=[];buildEdges()}
let frame=0;
function draw(){x.clearRect(0,0,w,h);
if(!reduceMotion){n.forEach(a=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1});frame++;if(frame%50===0)buildEdges()}
edgeList.forEach(e=>{x.strokeStyle='rgba(120,130,150,.16)';x.lineWidth=1;x.beginPath();x.moveTo(e.a.x,e.a.y);x.lineTo(e.b.x,e.b.y);x.stroke()});
n.forEach(a=>{x.fillStyle=a.c;x.beginPath();x.arc(a.x,a.y,a.r,0,7);x.fill()});
if(!reduceMotion){if(edgeList.length&&Math.random()<.02&&packets.length<5){const e=edgeList[Math.floor(Math.random()*edgeList.length)];packets.push({a:e.a,b:e.b,t:0})}
packets.forEach(p=>p.t+=.02);packets=packets.filter(p=>p.t<1);
packets.forEach(p=>{const px=p.a.x+(p.b.x-p.a.x)*p.t,py=p.a.y+(p.b.y-p.a.y)*p.t;x.fillStyle='#5fd0c0';x.shadowColor='#5fd0c0';x.shadowBlur=7;x.beginPath();x.arc(px,py,2,0,7);x.fill();x.shadowBlur=0});
requestAnimationFrame(draw)}}
resize();addEventListener('resize',resize);draw();if(reduceMotion)setInterval(draw,4000);
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));