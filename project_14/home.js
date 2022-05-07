/*! places | Version: 1.0.0 */
!function(){"use strict";function e(e){return(JSON.parse(localStorage.getItem("places_faves"))||{})[e]}!function(){let t=document.querySelectorAll("[data-place]"),a=document.createElement("span");a.setAttribute("aria-label","Favourited"),a.textContent=" ♥";for(let l of t){if(!e(l.getAttribute("data-place")))continue;let t=l.querySelector(".place-title");t&&t.append(a.cloneNode(!0))}}()}();
//# sourceMappingURL=home.js.map
