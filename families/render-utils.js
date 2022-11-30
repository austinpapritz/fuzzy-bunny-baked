export function renderFamilies(family) {
    const divEl = document.createElement('div');
    divEl.classList.add('family');

    const famH3 = document.createElement('h3');
    famH3.textContent = family.name;

    divEl.append(famH3);

    return divEl;
}
