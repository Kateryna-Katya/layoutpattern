/* empty css                      */import{S as w,A as m}from"./assets/vendor-B_FypTfd.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let f=null;function p(){window.innerWidth<1440?f||(f=new w(".how-swiper",{modules:[m],slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}})):f&&(f.destroy(!0,!0),f=null)}p();window.addEventListener("resize",p);document.querySelectorAll(".faq-acc-el-trigger").forEach(r=>{r.addEventListener("click",()=>{const n=r.closest(".faq-acc-el"),d=n.querySelector(".faq-acc-el-descr-frame"),a=r.querySelector("svg"),e=n.classList.contains("open"),t=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 11.9998H19.0016M12.0008 4.99902V19.0006" stroke="#FF4E4E" stroke-width="2" stroke-linecap="round" />
</svg>`,c=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_48_174)">
    <path d="M5 12H19" stroke="#FF4E4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_48_174">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`;e?(n.classList.remove("open"),d.style.maxHeight="0",a.outerHTML=t):(n.classList.add("open"),d.style.maxHeight=d.scrollHeight+"px",a.outerHTML=c)})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".menu-button"),n=r.querySelector(".icon"),d=document.querySelector(".modal"),a=document.querySelectorAll(".menu-list-item"),e=document.querySelector(".header");let t=!1;const c=`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2_875)">
    <path d="M5.33398 8H26.6673" stroke="#BD00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33398 16H26.6673" stroke="#BD00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.33398 24H26.6673" stroke="#BD00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_2_875">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `,o=`
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2_859)">
    <path d="M24 8L8 24" stroke="#BD00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 8L24 24" stroke="#BD00FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_2_859">
      <rect width="32" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>
    `;r.addEventListener("click",()=>{t=!t,n.innerHTML=t?o:c,t?i():s()}),a.forEach(u=>u.addEventListener("click",()=>{s(),n.innerHTML=c,t=!1})),window.addEventListener("scroll",l);function i(){d.style.display="block"}function s(){d.style.display="none"}function l(){e&&(window.scrollY>60?e.classList.add("header-scroll"):e.classList.remove("header-scroll"))}});document.addEventListener("DOMContentLoaded",()=>{function r(){const o=document.getElementById("site-header");return o?o.offsetHeight:0}function n(o){const i=document.getElementById(o);if(!i)return;const s=r(),l=i.getBoundingClientRect().top+window.pageYOffset-s;window.scrollTo({top:l,behavior:"smooth"})}document.querySelectorAll(".navigation-item a").forEach(o=>{o.addEventListener("click",function(i){const s=this.getAttribute("href");if(!s)return;const[l,u]=s.split("#");if(!u)return;const h=window.location.pathname.split("/").pop();!(l===""||l==="./"||l===h||l==="./"+h)||!document.getElementById(u)||(i.preventDefault(),n(u),t(u))})});const a=document.querySelectorAll("section[id]"),e=document.querySelectorAll(".navigation-item");function t(o){e.forEach(s=>s.classList.remove("active"));const i=document.querySelector(`.navigation-item a[href*="#${o}"]`);i&&i.closest(".navigation-item").classList.add("active")}function c(){const o=window.pageYOffset+r()+100;a.forEach(i=>{const s=i.offsetTop,l=s+i.offsetHeight;o>=s&&o<l&&t(i.id)})}if(window.addEventListener("scroll",c),window.location.hash){const o=window.location.hash.substring(1);setTimeout(()=>{n(o),t(o)},300)}});
//# sourceMappingURL=index.js.map
