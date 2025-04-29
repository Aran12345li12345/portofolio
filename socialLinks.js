
// Function to generate social media links
function createSocialLinks(containerId, links) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found.`);
        return;
    }

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';
    ul.style.display = 'flex';
    ul.style.justifyContent = 'center';
    ul.style.padding = '0';

    links.forEach(link => {
        const li = document.createElement('li');
        li.style.margin = '0 10px';

        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.textContent = link.name;
        a.style.textDecoration = 'none';
        a.style.color = '#333';

        li.appendChild(a);
        ul.appendChild(li);
    });

    container.appendChild(ul);
}
