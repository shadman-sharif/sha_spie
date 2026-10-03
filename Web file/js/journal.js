(() => {
'use strict';
/* ===== EDIT YOUR CONTENT HERE ===== */
const A = [ // articles, one object each. Add a new one to publish a new note.
{slug:'ashuganj-riverside-pollution',date:'2026-09-24',tags:['Environment','Ashuganj'],img:'img/pollution/ashuganj-riverside-04.jpg',
 title:{en:'Pollution in Ashuganj, Brahmanbaria',bn:'আশুগঞ্জ নদীর পাড়ের দূষণ'},
 dek:{en:'A field note on visible waste, drainage and the changing condition of the riverside at Ashuganj.',bn:'আশুগঞ্জ নদীর পাড়ে চোখে পড়া আবর্জনা, ড্রেনের পানি এবং পরিবেশের পরিবর্তন নিয়ে একটি মাঠ-নোট।'},
 gallery:['img/pollution/ashuganj-riverside-01.jpg','img/pollution/ashuganj-riverside-02.jpg','img/pollution/ashuganj-riverside-03.jpg','img/pollution/ashuganj-riverside-04.jpg'],
 body:{en:[
 'Ashuganj in Brahmanbaria is a beautiful riverside area. The river is an important part of life for the local people. However, the pictures show that the riverside is facing a serious pollution problem.',
 'In the pictures, we can see waste and plastic materials around the riverbank. Dirty water is also flowing into the river from the nearby area. This waste makes the riverside look unhealthy and can harm fish, plants, and other living things. If this pollution continues, the river may become more dangerous for both people and nature.',
 'The river should be kept clean for the future. People should not throw plastic, household waste, or other harmful materials into the river. Local authorities and the community can work together to clean the riverside and create proper waste-disposal systems.',
 "Ashuganj has a beautiful natural environment, and protecting it is everyone's responsibility. By keeping the river clean, we can make Ashuganj a healthier and more beautiful place for people and future generations."
 ],
 bn:[
 'দূর থেকে আশুগঞ্জের নদীর পাড় শান্ত মনে হতে পারে। নদী, নৌকা আর খোলা আকাশ মিলে পরিচিত একটি দৃশ্য তৈরি করে। কিন্তু একটু কাছে গেলে এলাকার আরেকটি চিত্র দেখা যায়—পাড়ে পড়ে থাকা আবর্জনা, ড্রেনের পানি নদীতে প্রবেশ করা এবং দূষিত অংশের আশপাশে জমে থাকা উদ্ভিদ।',
 'প্লাস্টিক, খাবারের প্যাকেট ও দৈনন্দিন ব্যবহারের অন্যান্য বর্জ্য অনেক সময় সঠিকভাবে সংগ্রহ বা অপসারণ না হয়ে নদীর পাড়ে পড়ে থাকে। বৃষ্টি বা ড্রেনের পানির সঙ্গে এসব বর্জ্য নদীর দিকে গেলে পানির দৃশ্যমান অবস্থা এবং আশপাশের পরিবেশের ওপর প্রভাব পড়তে পারে।',
 'নদীর পাড়ের দূষণ শুধু দেখতে খারাপ লাগার বিষয় নয়। পানি ও তার আশপাশে বর্জ্য জমে গেলে ড্রেনেজ ব্যবস্থা বাধাগ্রস্ত হতে পারে, আশপাশের জীববৈচিত্র্যের আবাসস্থলের মান কমতে পারে এবং নদী ব্যবহারকারী মানুষের জন্য পরিবেশটি কম উপযোগী হয়ে উঠতে পারে। তবে দূষণের সঠিক কারণ ও মাত্রা জানতে মাঠপর্যায়ের পরিমাপ এবং স্থানীয় পরিবেশগত গবেষণা দরকার; শুধু ছবি দেখে নদীর সম্পূর্ণ অবস্থা নির্ধারণ করা যায় না।',
 'তাই এই ছবিগুলো আশুগঞ্জের নদীর পাড়ে একটি নির্দিষ্ট সময়ে চোখে পড়া অবস্থার নথি হিসেবে রাখা হয়েছে। নিয়মিত বর্জ্য সংগ্রহ, পরিষ্কার ড্রেনেজ, জনসচেতনতা এবং দায়িত্বশীলভাবে বর্জ্য ফেলা নদী ও নদীর পাশে বসবাসকারী মানুষের পরিবেশ রক্ষায় গুরুত্বপূর্ণ। সমস্যাটিকে আগে ভালোভাবে দেখা ও বোঝা—উন্নতির জন্য সেটিই একটি গুরুত্বপূর্ণ প্রথম ধাপ।'
 ]}}
];

// Photos: fill in `place` and `date` (e.g. 'Ashuganj', '12 Sep 2026') and they will appear on the frame and in the viewer.
// cat can be Places, Nature, People, Events or Tech: a filter button appears automatically for each category in use.
const P = [
{src:'gallery-01',cat:'Places',place:'',date:'',title:'Bridge at first light',story:'Kites circle above a river bridge while a boat waits below.'},
{src:'gallery-02',cat:'Places',place:'',date:'',title:'Framed by leaves',story:'A cargo boat crosses the river, seen through the greenery on the bank.'},
{src:'gallery-03',cat:'Places',place:'',date:'',title:'Haze over the water',story:'A soft haze blurs the bridge and the small boat moving beneath it.'},
{src:'gallery-04',cat:'Nature',place:'',date:'',title:'Sunset silhouette',story:'Leaves against an orange sky in the last light of the day.'},
{src:'gallery-05',cat:'Places',place:'',date:'',title:'Where the bank meets the current',story:'Birds over the water and a stone bank in early light.'},
{src:'gallery-06',cat:'Nature',place:'',date:'',title:'Green corridor',story:'Sunlight filtering through a dense green edge of the riverbank.'},
{src:'gallery-07',cat:'Nature',place:'',date:'',title:'Under the canopy',story:'Low evening light through palm fronds and branches.'},
{src:'gallery-08',cat:'Nature',place:'',date:'',title:'A bird in the dark',story:'A bird’s silhouette between deep shadow and bright leaves.'},
{src:'gallery-09',cat:'Places',place:'',date:'',title:'Culvert in the overgrowth',story:'A concrete drain almost swallowed by vegetation.'}
].map(p => ({...p, src:`img/gallery/${p.src}.jpeg`}));
const LEARNING = ['Web Development','JavaScript','Firebase','IoT','Robotics','Photography'];
const EMAIL = 'sha.dmanspie@gmail.com';
const I = { // interface text
 intro:{en:'Places, experiments and moments worth keeping. Photographs sit beside the stories as part of the record, not as decoration.',bn:'যে জায়গা, পরীক্ষা ও মুহূর্ত মনে রাখার মতো। ছবিগুলো এখানে সাজসজ্জা নয়, লেখার সঙ্গে নথির অংশ।'},
 read:{en:'Read more',bn:'আরও পড়ুন'}, min:{en:'min read',bn:'মিনিট পড়া'}, all:{en:'All',bn:'সব'},
 latest:{en:'Latest updates',bn:'সাম্প্রতিক আপডেট'}, learning:{en:'Currently learning',bn:'এখন শিখছি'},
 photos:{en:'Photos published',bn:'প্রকাশিত ছবি'}, notes:{en:'Articles written',bn:'লেখা প্রকাশিত'}, projects:{en:'Projects shipped',bn:'শেষ করা প্রজেক্ট'},
 related:{en:'Related',bn:'সম্পর্কিত লেখা'}, next:{en:'Next note',bn:'পরের নোট'}, back:{en:'← All articles',bn:'← সব লেখা'},
 about:{en:'About the author',bn:'লেখক সম্পর্কে'},
 bio:{en:'Sharif Bin Aziz Shadman is a student from Bangladesh who builds websites and small IoT and robotics projects, and photographs the places he learns from.',bn:'শরিফ বিন আজিজ শাদমান বাংলাদেশের একজন শিক্ষার্থী; তিনি ওয়েবসাইট, ছোট IoT ও রোবটিক্স প্রজেক্ট বানান এবং যেসব জায়গা থেকে শেখেন সেগুলোর ছবি তোলেন।'},
 ctaH:{en:'Have a project in mind?',bn:'মাথায় কোনো প্রজেক্ট আছে?'}, ctaP:{en:'A website, a photo story or a small build. Tell me what you need and I will reply.',bn:'ওয়েবসাইট, ফটো স্টোরি বা ছোট কোনো বিল্ড—কী দরকার জানান, আমি উত্তর দেব।'},
 ctaB:{en:'Get in touch about a project ↗',bn:'প্রজেক্ট নিয়ে যোগাযোগ করুন ↗'}, open:{en:'Open',bn:'খুলুন'}
};
/* ===== RENDERING ===== */
let lang = 'en'; try { lang = localStorage.getItem('lang') === 'bn' ? 'bn' : 'en'; } catch (e) {}
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const T = o => o[lang] || o.en;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const num = n => lang === 'bn' ? String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]) : String(n);
const mins = a => Math.max(1, Math.round(a.body.en.join(' ').split(/\s+/).length / 200));
const fd = d => new Date(d + 'T00:00:00').toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-GB', {day:'numeric', month:'short', year:'numeric'});
const sorted = [...A].sort((a, b) => b.date.localeCompare(a.date));
const link = a => `article.html?a=${a.slug}`;
let tag = 'all', cat = 'all', shown = P;

const chips = (list, cur, attr) => [['all', T(I.all)], ...list.map(x => [x, x])]
  .map(([v, l]) => `<button type="button" class="j-chip${v === cur ? ' on' : ''}" ${attr}="${esc(v)}" aria-pressed="${v === cur}">${esc(l)}</button>`).join('');
const meta = a => `<div class="j-meta"><span>${fd(a.date)}</span><span>${num(mins(a))} ${T(I.min)}</span>${a.tags.map(t => `<em>${esc(t)}</em>`).join('')}</div>`;
const card = (a, i) => `<article class="j-card${i === 0 && tag === 'all' && a.img ? ' feat' : ''}${a.img ? '' : ' plain'}">${a.img ? `<a class="j-thumb" href="${link(a)}" tabindex="-1" aria-hidden="true"><img src="${a.img}" alt="" loading="lazy" decoding="async"></a>` : ''}<div class="j-cb">${meta(a)}<h3>${esc(T(a.title))}</h3><p>${esc(T(a.dek))}</p><a class="j-more" href="${link(a)}">${T(I.read)} →</a></div></article>`;
const author = () => `<aside class="j-author"><img src="img/profile.jpg" alt="Sharif Bin Aziz Shadman" loading="lazy"><div><small>${T(I.about)}</small><b>Sharif Bin Aziz Shadman</b><p>${T(I.bio)}</p></div></aside>`;
const cta = () => `<section class="j-cta"><div><h2>${T(I.ctaH)}</h2><p>${T(I.ctaP)}</p></div><a class="btn primary" href="mailto:${EMAIL}?subject=Project%20enquiry">${T(I.ctaB)}</a></section>`;

function renderIndex() {
  const tags = [...new Set(A.flatMap(a => a.tags))], cats = [...new Set(P.map(p => p.cat))];
  const list = sorted.filter(a => tag === 'all' || a.tags.includes(tag));
  shown = P.filter(p => cat === 'all' || p.cat === cat);
  $('#j-kpis').innerHTML = [[P.length + A.reduce((n, a) => n + (a.gallery ? a.gallery.length : 0), 0), I.photos], [A.length, I.notes], [3, I.projects]].map(([n, l]) => `<div><b>${num(n)}</b><span>${T(l)}</span></div>`).join('');
  $('#j-updates').innerHTML = `<div class="j-up"><small>${T(I.latest)}</small>${sorted.slice(0, 3).map(a => `<a href="${link(a)}"><span>${fd(a.date)}</span>${esc(T(a.title))}</a>`).join('')}</div><div class="j-up"><small>${T(I.learning)}</small><p>${LEARNING.map(x => `<em>${x}</em>`).join('')}</p></div>`;
  $('#j-tagchips').innerHTML = chips(tags, tag, 'data-tag');
  $('#j-list').innerHTML = list.map(card).join('');
  $('#j-catchips').innerHTML = chips(cats, cat, 'data-cat');
  $('#j-gal').innerHTML = shown.map((p, i) => `<figure class="j-shot" tabindex="0" data-n="${i}"><img src="${p.src}" alt="${esc(p.title)}: ${esc(p.story)}" loading="lazy" decoding="async"><figcaption><span>${esc([p.cat, p.place, p.date].filter(Boolean).join(' · '))}</span><b>${esc(p.title)}</b><p>${esc(p.story)}</p></figcaption></figure>`).join('');
  $('#j-count').textContent = `${num(shown.length)} / ${num(P.length)}`;
}
function renderArticle() {
  const a = A.find(x => x.slug === new URLSearchParams(location.search).get('a')) || sorted[0];
  const i = sorted.indexOf(a), nx = sorted[(i + 1) % sorted.length], rel = (a.related || []).map(s => A.find(x => x.slug === s)).filter(Boolean);
  document.title = `${T(a.title)} · Sharif Bin Aziz Shadman`;
  /* SEO: give every article its own canonical URL, description and social tags (article.html?a=slug) */
  const artUrl = `https://sharifbinaziz.web.app/article.html?a=${a.slug}`;
  const setMeta = (sel, attr, val) => { const e = document.querySelector(sel); if (e) e.setAttribute(attr, val); };
  setMeta('link[rel="canonical"]', 'href', artUrl);
  setMeta('meta[name="description"]', 'content', T(a.dek));
  setMeta('meta[property="og:url"]', 'content', artUrl);
  setMeta('meta[property="og:title"]', 'content', document.title);
  setMeta('meta[property="og:description"]', 'content', T(a.dek));
  $('#j-article').innerHTML = `<a class="j-back" href="journey.html#articles">${T(I.back)}</a>${meta(a)}<h1>${esc(T(a.title))}</h1><p class="j-dek">${esc(T(a.dek))}</p>${a.img ? `<div class="j-hero"><img src="${a.img}" alt=""></div>` : ''}<div class="j-prose">${a.body[lang].map(p => `<p>${esc(p)}</p>`).join('')}</div>${a.gallery ? `<div class="j-strip">${a.gallery.map(s => `<img src="${s}" alt="${esc(T(a.title))}" loading="lazy">`).join('')}</div>` : ''}${author()}<div class="j-next"><a href="${link(nx)}"><small>${T(I.next)}</small><b>${esc(T(nx.title))} →</b></a>${rel.map(r => `<a href="${link(r)}"><small>${T(I.related)}</small><b>${esc(T(r.title))}</b></a>`).join('')}</div>`;
}
function render() {
  document.documentElement.lang = lang; document.documentElement.dataset.lang = lang;
  $$('[data-i]').forEach(el => el.textContent = T(I[el.dataset.i]));
  $$('.j-lang button').forEach(b => { const on = b.dataset.l === lang; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  if ($('#j-list')) renderIndex();
  if ($('#j-article')) renderArticle();
  $$('.j-ctaslot').forEach(el => el.innerHTML = cta());
}
document.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.l) { lang = b.dataset.l; try { localStorage.setItem('lang', lang); } catch (x) {} render(); }
  else if (b.dataset.tag) { tag = b.dataset.tag; render(); }
  else if (b.dataset.cat) { cat = b.dataset.cat; render(); }
});
render();
/* ===== LIGHTBOX ===== */
const box = $('#lightbox'); if (!box || !$('#j-gal')) return;
const img = $('#lightbox-image'), cap = $('#lightbox-caption'); let idx = 0, last = null;
const show = i => { idx = (i + shown.length) % shown.length; const p = shown[idx]; img.src = p.src; img.alt = p.title; cap.innerHTML = `<b>${esc(p.title)}</b><br>${esc([p.place, p.date].filter(Boolean).join(' · '))}${p.place || p.date ? '<br>' : ''}${esc(p.story)}<br><small>${idx + 1} / ${shown.length}</small>`; };
const open = i => { last = document.activeElement; show(i); box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('.lightbox-close').focus(); };
const shut = () => { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; img.removeAttribute('src'); last && last.focus && last.focus(); };
$('#j-gal').addEventListener('click', e => { const f = e.target.closest('.j-shot'); if (f) open(+f.dataset.n); });
$('#j-gal').addEventListener('keydown', e => { const f = e.target.closest('.j-shot'); if (f && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(+f.dataset.n); } });
$('.lightbox-close').onclick = shut; $('.lightbox-prev').onclick = () => show(idx - 1); $('.lightbox-next').onclick = () => show(idx + 1);
box.addEventListener('click', e => { if (e.target === box) shut(); });
document.addEventListener('keydown', e => { if (!box.classList.contains('open')) return; if (e.key === 'Escape') shut(); if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
})();
