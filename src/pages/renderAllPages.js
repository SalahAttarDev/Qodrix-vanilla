import renderNavigation from '../components/navigation.js';
import renderGlobalCursor from '../utils/GlobalCursor.js';
import renderAbout from './About.js';
import renderCapabilities from './Capabilities.js';
import renderContact from './Contact.js';
import renderHome from './Home.js';
import renderProjects from './Proejcts.js';
export default function renderAllPages() {
    return [
        renderGlobalCursor,
        renderNavigation,
        renderHome,
        renderAbout,
        renderCapabilities,
        renderProjects,
        renderContact
    ];
}
