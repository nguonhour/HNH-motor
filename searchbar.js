  const searchInput = document.getElementById('location-search');
  const resultsBox = document.getElementById('search-results');
  const searchableEls = Array.from(document.querySelectorAll('.searchable'));

  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    resultsBox.innerHTML = '';
    if (!query) {
      resultsBox.classList.add('hidden');
      return;
    }
    const matches = searchableEls.filter(el => el.textContent.toLowerCase().includes(query));
    if (matches.length === 0) {
      resultsBox.classList.remove('hidden');
      resultsBox.innerHTML = '<li class="px-3 py-2 text-gray-500">No results found</li>';
      return;
    }
    matches.forEach(el => {
      if (!el.id) el.id = 'search-' + Math.random().toString(36).substr(2, 9);
      const li = document.createElement('li');
      li.className = 'px-3 py-2 hover:bg-blue-100 cursor-pointer';
      li.textContent = el.textContent;
      li.onclick = () => {
        location.hash = '#' + el.id;
        resultsBox.classList.add('hidden');
      };
      resultsBox.appendChild(li);
    });
    resultsBox.classList.remove('hidden');
  });

  // Hide results when clicking outside
  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.classList.add('hidden');
    }
  });
