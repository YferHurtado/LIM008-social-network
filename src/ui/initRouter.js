import { registroForm, ingresoForm } from './view.js';


export const initRouter = () => {
  
  const showTemp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('container');
    section.innerHTML = '';
    if (router === 'registro') {
      const elem = registroForm();
      section.appendChild(elem);
    } else if (router === 'ingreso') {
      section.appendChild(ingresoForm());
    }
  };
  
  const switchTemp = (hash) => {
    if (hash === '#/registro' || hash === '#/ingreso') {
      return showTemp(hash);
    }
    return showTemp('#/ingreso');
  };
  
  window.addEventListener('load', switchTemp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => switchTemp(window.location.hash);
};