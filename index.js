/* empty css                      */import{S as a,A as d}from"./assets/vendor-B_FypTfd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();let n=null;function c(){window.innerWidth<1440?n||(n=new a(".how-swiper",{modules:[d],slidesPerView:"auto",spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0}})):n&&(n.destroy(!0,!0),n=null)}c();window.addEventListener("resize",c);document.querySelectorAll(".faq-acc-el-trigger").forEach(l=>{l.addEventListener("click",()=>{const o=l.closest(".faq-acc-el"),r=o.querySelector(".faq-acc-el-descr-frame"),s=l.querySelector("svg"),e=o.classList.contains("open"),t=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5 11.9998H19.0016M12.0008 4.99902V19.0006" stroke="#FF4E4E" stroke-width="2" stroke-linecap="round" />
</svg>`,i=`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_48_174)">
    <path d="M5 12H19" stroke="#FF4E4E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </g>
  <defs>
    <clipPath id="clip0_48_174">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </defs>
</svg>`;e?(o.classList.remove("open"),r.style.maxHeight="0",s.outerHTML=t):(o.classList.add("open"),r.style.maxHeight=r.scrollHeight+"px",s.outerHTML=i)})});
//# sourceMappingURL=index.js.map
