(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function _(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=_(e);fetch(e.href,t)}})();const v=`
    <main class="main">
        <div class="slider__hide">
            <section class="slider">

                <!-- 1 -->
                <div class="slider__slide">
                <div
                    class="slider__img-box img-1"
                    role="img"
                    aria-label="Happy Woman"
                ></div>
                <div class="slider__content-box">
                    <p class="slider__content-box__text">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde
                    suscipit quo sunt hic illo fugit."
                    </p>
                    <p class="slider__content-box__name">Maria João Esmeralda</p>
                    <p class="slider__content-box__details">
                    Senior Web Developer at Google and NASA
                    </p>
                </div>
                </div>

                <!-- 2 -->
                <div class="slider__slide">
                <div class="slider__img-box img-2" role="img" aria-label=""></div>
                <div class="slider__content-box">
                    <p class="slider__content-box__text">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde
                    suscipit quo sunt hic illo fugit."
                    </p>
                    <p class="slider__content-box__name">Rufino Fernando</p>
                    <p class="slider__content-box__details">
                    Frontend Freelaner, User Interface Designer
                    </p>
                </div>
                </div>

                <!-- 3 -->
                <div class="slider__slide">
                <div class="slider__img-box img-3" role="img" aria-label=""></div>
                <div class="slider__content-box">
                    <p class="slider__content-box__text">
                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Officia nesciunt aliquid ex atque quibusdam. Rerum officia unde
                    suscipit quo sunt hic illo fugit."
                    </p>
                    <p class="slider__content-box__name">Orsolya Amanda</p>
                    <p class="slider__content-box__details">
                    Writer at The New York Times Newspaper
                    </p>
                </div>
                </div>

                <button class="slider__btn slider__btn--left"><ion-icon class="slider__btn__icon" name="arrow-back-outline" ></ion-icon></button>
                <button class="slider__btn slider__btn--right"><ion-icon class="slider__btn__icon" name="arrow-forward-outline"></ion-icon></button>

                <div class="slider__dots">
                <!-- <button class="slider__dot"></button> -->
                <!-- <button class="slider__dot"></button> -->
                <!-- <button class="slider__dot"></button> -->
                </div>
            </section>
        </div>
    </main>
`;document.querySelector("body").insertAdjacentHTML("afterbegin",v);const i=document.documentElement,x="#a5d8ff",q="#1c7ed6",h="#1864ab",f=[x,q,h],L="#ffd8a8",S="#e8590c",w="#d9480f",m=[L,S,w],P="#ffc9c9",A="#e03131",E="#c92a2a",p=[P,A,E],u=function(s){if(s===0){i.style.setProperty("--color-1",f[0]),i.style.setProperty("--color-2",f[1]),i.style.setProperty("--color-text",f[2]);return}if(s===1){i.style.setProperty("--color-1",m[0]),i.style.setProperty("--color-2",m[1]),i.style.setProperty("--color-text",m[2]);return}if(s===2){i.style.setProperty("--color-1",p[0]),i.style.setProperty("--color-2",p[1]),i.style.setProperty("--color-text",p[2]);return}},O=function(){document.querySelector(".slider");const s=document.querySelectorAll(".slider__slide"),n=document.querySelector(".slider__btn--left"),_=document.querySelector(".slider__btn--right"),r=document.querySelector(".slider__dots");let e=0;const t=s.length,c=function(){r.innerHTML="",s.forEach((o,l)=>{r.insertAdjacentHTML("beforeend",`<button class="slider__dot" data-slide="${l}"></button>`)})},d=function(o){document.querySelectorAll(".slider__dot").forEach(l=>l.classList.remove("slider__dot--active")),document.querySelector(`.slider__dot[data-slide="${o}"]`).classList.add("slider__dot--active")},a=function(o){s.forEach((l,g)=>{l.style.transform=`translateX(${90*(g-o)}rem)`})},b=function(){e===t-1?e=0:e++,a(e),d(e),u(e)},y=function(){e===0?e=t-1:e--,a(e),d(e),u(e)};(function(){c(),d(e),a(e),u(e)})(),n.addEventListener("click",y),_.addEventListener("click",b),document.addEventListener("keydown",function(o){o.key==="ArrowLeft"&&y(),o.key==="ArrowRight"&&b()}),r.addEventListener("click",function(o){o.target.classList.contains("slider__dot")&&(e=+o.target.dataset.slide,a(e),d(e),u(e))})};O();
