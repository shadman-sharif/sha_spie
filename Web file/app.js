const frames = [
  { src: "assets/harbor-sun.jpg", title: "Harbor, almost dark", place: "Sunset", cat: "harbor", text: "Sun was almost gone. Big boats already black, water still bright. A small one crossed the bright part." },
  { src: "assets/maersk.jpg", title: "Maersk in the fog", place: "Harbor", cat: "harbor", text: "Fog was thick. I could still read the name." },
  { src: "assets/breakwater.jpg", title: "Rocks first", place: "Breakwater", cat: "harbor", text: "I pointed at the stones. The ship is just back there." },
  { src: "assets/bridge.jpg", title: "Bridge, early", place: "River", cat: "river", text: "Early. Kites over the bridge, a boat waiting under it." },
  { src: "assets/framed-boat.jpg", title: "Boat through leaves", place: "Riverbank", cat: "river", text: "Didn’t move the leaves. They did the framing." },
  { src: "assets/haze.jpg", title: "Soft day", place: "River", cat: "river", text: "Grey day. The small boat was still going." },
  { src: "assets/bank-birds.jpg", title: "Birds on the bank", place: "Morning", cat: "river", text: "They were still there. Light was low." },
  { src: "assets/leaf-sunset.jpg", title: "Leaves, last light", place: "Sunset", cat: "green", text: "Didn’t need the whole sun. The leaves were doing enough." },
  { src: "assets/green-corridor.jpg", title: "Green edge", place: "Riverbank", cat: "green", text: "Sun coming through the plants on the bank." },
  { src: "assets/canopy.jpg", title: "Under the palms", place: "Evening", cat: "green", text: "Stood under the palms for a bit. Light was low through the fronds." },
  { src: "assets/bird-dark.jpg", title: "Bird in the dark", place: "Shade", cat: "green", text: "Mostly a shape. Leaves behind it were brighter." },
  { src: "assets/culvert.jpg", title: "Drain under the plants", place: "Ashuganj · 24 Sept 2026", cat: "green", text: "Concrete is almost gone under the green." },
  { src: "assets/moon-glow.jpg", title: "Just the moon", place: "Night", cat: "night", text: "Nothing else in the frame. Left it like that." },
  { src: "assets/half-moon.jpg", title: "Half covered", place: "Night", cat: "night", text: "Half of it was in shadow. The edge looked warm." },
  { src: "assets/moon-trees.jpg", title: "Moon in the trees", place: "Blue hour", cat: "night", text: "Small, kind of lost in the branches." },
  { src: "assets/palm-slit.jpg", title: "Palm and a slit of sun", place: "Evening", cat: "night", text: "Rest of the frame is black. That’s fine." },
  { src: "assets/palm-moon.jpg", title: "Palm over the moon", place: "Night", cat: "night", text: "Leaves in the way on purpose." },
  { src: "assets/leaf-glow.jpg", title: "Leaf against the glow", place: "Backlight", cat: "night", text: "Pointed at the light and let the leaf go dark." },
  { src: "assets/bird-wire.jpg", title: "Bird on a wire", place: "Shade", cat: "green", text: "It stayed. Background went soft." },
  { src: "assets/parked-cars.jpg", title: "Cars packed in", place: "Street", cat: "street", text: "White hood in front. I liked how tight it was." },
  { src: "assets/grille-leaves.jpg", title: "Grille through leaves", place: "Street", cat: "street", text: "Didn’t clear the leaves. They were the picture." },
  { src: "assets/mirror-camera.jpg", title: "Elevator mirror", place: "Indoors", cat: "street", text: "Quick one in the mirror before the doors opened." },
  { src: "assets/kit-canon.jpg", title: "Cap on", place: "Rooftop", cat: "street", text: "Cap still on. Radio next to it." }
];

let active = "all";
let index = 0;
const gallery = document.querySelector("#gallery");

function render() {
  const list = frames.filter((f) => active === "all" || f.cat === active);
  gallery.innerHTML = list.map((f) => `
    <button class="card" type="button" data-i="${frames.indexOf(f)}">
      <span class="frame"><img src="${f.src}" alt="${f.title}" loading="lazy" decoding="async"></span>
      <div><span>${f.place}</span><strong>${f.title}</strong><p>${f.text}</p></div>
    </button>
  `).join("");
  gallery.querySelectorAll(".card").forEach((el) => {
    el.addEventListener("click", () => openLightbox(Number(el.dataset.i)));
  });
}

function openLightbox(i) {
  index = i;
  const f = frames[index];
  const img = document.querySelector("#lbImg");
  img.src = f.src;
  img.alt = f.title;
  document.querySelector("#lbCap").textContent = `${f.title} — ${f.text}`;
  document.querySelector("#lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() {
  document.querySelector("#lightbox").classList.remove("open");
  document.body.style.overflow = "";
}
function step(n) {
  openLightbox((index + n + frames.length) % frames.length);
}

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    active = btn.dataset.filter;
    render();
  });
});

const openLatest = document.querySelector("#openLatest");
if (openLatest) openLatest.addEventListener("click", () => openLightbox(0));
document.querySelector("#lbClose").addEventListener("click", closeLightbox);
document.querySelector("#lbPrev").addEventListener("click", () => step(-1));
document.querySelector("#lbNext").addEventListener("click", () => step(1));
document.querySelector("#lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!document.querySelector("#lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});

window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector("#progress").style.width = `${h > 0 ? (window.scrollY / h) * 100 : 0}%`;
  document.querySelector("#nav").classList.toggle("scrolled", window.scrollY > 12);
});

render();

const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.textContent = open ? "Close" : "Menu";
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "Menu";
  }));
}
let touchX = 0;
const lb = document.querySelector("#lightbox");
lb.addEventListener("touchstart", (e) => { touchX = e.changedTouches[0].clientX; }, {passive:true});
lb.addEventListener("touchend", (e) => {
  if (!lb.classList.contains("open")) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
}, {passive:true});
