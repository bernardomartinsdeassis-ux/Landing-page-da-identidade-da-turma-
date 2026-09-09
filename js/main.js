import { initHeader, renderHeader } from './components/Header.js';
import { renderIdentity } from './components/Identity.js';
import { renderMembers } from './components/Members.js';
import { renderMural } from './components/Mural.js';
import { renderTimeline } from './components/Timeline.js';
import { renderWhoWeAre } from './components/WhoWeAre.js';
import { renderFooter } from './components/Footer.js';

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

initHeader();

const ano = document.getElementById('ano');
if (ano) {
    ano.textContent = new Date().getFullYear();
}
