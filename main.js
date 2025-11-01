// ===== MENU SHOW =====
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// ===== ACTIVE AND REMOVE MENU =====
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // use a slightly smaller offset so active link switches reliably
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})

// keep nav menu closing on link click (safe null checks)
const navMenu = document.getElementById("nav-menu");
navLinks.forEach((n) => n.addEventListener("click", () => { if (navMenu) navMenu.classList.remove("show") }));

// /===== COPY Email =====/
// guard against missing element
const copy = document.getElementById("copy");
if (copy) {
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText("beherashubhranshu000@gmail.com").then(() => {
      copy.innerHTML = "copied";
      setTimeout(() => { copy.innerHTML = null; }, 1000);
    }).catch(() => {
      // fallback: select text if clipboard fails
      copy.innerHTML = "copy failed";
      setTimeout(() => { copy.innerHTML = null; }, 1200);
    });
  });
}

// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

//  HOME
sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".home-social-icon", { interval: 200 });

//  ABOUT
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 400 });

//  SKILLS
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 100 });

//  projects
sr.reveal(".project-img", { interval: 200 });

//  CONTACT
// sr.reveal(".contact-input", { interval: 200 });

function myFunction(){
  var element = document.body;
  element.classList.toggle("dark-mode")
}

// Typewriter: handle HTML tags (so <br> doesn't get printed as text)
var message = "𝕁𝔸𝕍𝔸 𝔽𝕌𝕃𝕃𝕊𝕋𝔸ℂ𝕜<br> 𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ";
var speed = 80; // adjust typing speed (ms)
function typewriter() {
  const target = document.querySelector("#jobTitle");
  if (!target) return;
  target.innerHTML = ""; // clear before typing

  let i = 0;
  function step() {
    if (i >= message.length) return;
    if (message[i] === '<') {
      // append full tag at once
      const tagEnd = message.indexOf('>', i);
      if (tagEnd === -1) {
        // malformed tag: append remaining and finish
        target.innerHTML += message.slice(i);
        i = message.length;
      } else {
        target.innerHTML += message.slice(i, tagEnd + 1);
        i = tagEnd + 1;
      }
      // short pause after tag
      setTimeout(step, speed);
    } else {
      target.innerHTML += message[i];
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

window.addEventListener("load", typewriter);

//for video background
document.addEventListener('DOMContentLoaded', function () {
  // compute human readable duration from data-start & data-end attributes
  function parseDateAttr(val) {
    if (!val) return null;
    if (String(val).toLowerCase() === 'present') return new Date();
    const parts = String(val).split('-');
    const y = parseInt(parts[0], 10) || 0;
    const m = parts[1] ? (parseInt(parts[1], 10) - 1) : 0;
    return new Date(y, m, 1);
  }

  function humanDuration(startAttr, endAttr) {
    const start = parseDateAttr(startAttr);
    const end = parseDateAttr(endAttr || 'present');
    if (!start || !end) return '';
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months < 0) months = 0;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    const ys = years ? (years + (years === 1 ? ' yr' : ' yrs')) : '';
    const ms = rem ? (rem + (rem === 1 ? ' mo' : ' mos')) : '';
    return (ys && ms) ? `${ys} ${ms}` : (ys || ms || '0 mos');
  }

  // fill all elements that carry data-start attribute
  document.querySelectorAll('[data-start]').forEach(el => {
    const start = el.getAttribute('data-start');
    const end = el.getAttribute('data-end') || 'present';
    el.textContent = humanDuration(start, end);
  });

  // you can also update any additional UI if needed here
});

