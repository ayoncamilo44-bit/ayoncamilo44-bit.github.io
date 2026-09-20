const searchInput = document.querySelector('#searchInput');
const searchForm = document.querySelector('#searchForm');
const results = document.querySelector('#results');
const categories = {
  Baseball: ['Baseball players', 'Coaches & managers', 'Baseball legends'],
  Actors: ['Film & television actors', 'Stage performers', 'Directors'],
  Musicians: ['Singers & songwriters', 'Bands & instrumentalists', 'Music legends'],
  Artists: ['Visual artists', 'Authors & illustrators', 'Creators']
};
function showResults(term) {
  const cleanTerm = term.trim() || 'all signers';
  const key = Object.keys(categories).find(item => item.toLowerCase() === cleanTerm.toLowerCase());
  const matches = key ? categories[key] : ['People from every profession', 'Verified collector reports', 'Helpful request guides'];
  results.hidden = false;
  results.innerHTML = `<strong>Explore ${cleanTerm}</strong><ul>${matches.map(match => `<li>${match}</li>`).join('')}</ul><p>This directory is being built for the TTM World community. More signer profiles are coming soon.</p>`;
  results.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
searchForm.addEventListener('submit', event => { event.preventDefault(); showResults(searchInput.value); });
document.querySelectorAll('[data-search]').forEach(button => button.addEventListener('click', () => { searchInput.value = button.dataset.search; showResults(button.dataset.search); }));
