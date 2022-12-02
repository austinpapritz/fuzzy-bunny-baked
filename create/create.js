import { createBunny, getFamilies, checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

const familySelect = document.getElementById('family-select');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);
    const name = data.get('bunny-name');
    const family = data.get('family-id');
    // use createBunny to create a bunny with this name and family id
    await createBunny(name, family);
    form.reset();
    window.location.href = '../families';
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    const families = await getFamilies();
    // grab the select HTML element from the DOM

    // go get the families from supabase
    // for each family
    // create an option tag
    // set the option's value and text content
    // and append the option to the select
    for (let family of families) {
        const familyOption = document.createElement('option');
        familyOption.textContent = family.name;
        familyOption.value = family.id;
        familySelect.append(familyOption);
    }
});

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
