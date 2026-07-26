import './style.css'
import Header, { setupThemeToggle } from './components/Header';
import Main from './components/Main.ts';
import Footer from './components/Footer.ts';
import { setupModals } from './components/Modal.ts';
import { setupForms } from './components/Forms.ts';


// Quick and dirty - not for production!
const render = (html: string) => {
  const app = document.querySelector('#app');
  app!.innerHTML = html;
  setupThemeToggle();
  setupModals();
  setupForms();
}


render(`
  ${Header}
  ${Main}
  ${Footer}
`);



