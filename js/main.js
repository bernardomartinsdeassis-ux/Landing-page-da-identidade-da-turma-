import { renderHeader } from './components/Header.js';
import { renderIdentity, initIdentity } from './components/Identity.js';
import { renderMembers } from './components/Members.js';
import { renderMural } from './components/Mural.js';
import { renderTimeline } from './components/Timeline.js';
import { renderWhoWeAre } from './components/WhoWeAre.js';
import { renderFooter } from './components/Footer.js';
import { initScrollReveal } from './components/ScrollReveal.js';

const app = document.querySelector('#app');

app.innerHTML = `
    ${renderHeader()}
    <main>
        ${renderIdentity()}
        ${renderWhoWeAre()}
        ${renderMembers()}
        ${renderMural()}
        ${renderTimeline()}
    </main>
    ${renderFooter()}
`;

initIdentity();
initScrollReveal();
