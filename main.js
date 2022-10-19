import './dist/style.css'
import './dist/header.css'
import './dist/main.css'
import './dist/benefits.css'
import './dist/stages.css'



var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
      details[i].removeAttribute("open");
    }
}
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

