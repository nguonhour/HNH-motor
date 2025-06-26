// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all language buttons
    const langButtons = document.querySelectorAll('.toggle-search');
    
    // Add click event to each language button
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the language code from the button's class
            const langCode = this.classList.contains('lang-us') ? 'en' :
                            this.classList.contains('lang-gm') ? 'de' :
                            this.classList.contains('lang-it') ? 'it' :
                            this.classList.contains('lang-ch') ? 'zh' : 'en';
            
            // Update the dropdown button text to show selected language
            const dropdownButton = document.getElementById('dropdown-button-2');
            const svg = dropdownButton.querySelector('svg');
            const textSpan = dropdownButton.querySelector('span');
            
            // Remove all country-specific classes
            dropdownButton.className = dropdownButton.className.replace(/\blang-\w+/g, '');
            
            // Add the selected language class
            dropdownButton.classList.add(`lang-${langCode}`);
            
            // Change the text
            textSpan.textContent = this.textContent.trim();
            
            // You can now use the langCode to:
            // 1. Store the preference in localStorage
            localStorage.setItem('preferredLanguage', langCode);
            
            // 2. Send to your backend
            // fetch('/api/set-language', { method: 'POST', body: JSON.stringify({ language: langCode }) });
            
            // 3. Reload translations (you would implement this function)
            // loadTranslations(langCode);
            
            console.log(`Language changed to: ${langCode}`);
        });
    });
});
// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('form');
    const searchInput = document.getElementById('location-search');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchQuery = searchInput.value.trim();
            const selectedLanguage = localStorage.getItem('preferredLanguage') || 'en';
            
            if (searchQuery) {
                console.log(`Searching for: ${searchQuery} in language: ${selectedLanguage}`);
                
                // Here you would typically:
                // 1. Send the search query to your backend
                // fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&lang=${selectedLanguage}`)
                //     .then(response => response.json())
                //     .then(data => displayResults(data));
                
                // 2. Or filter local data
                // const results = filterLocalData(searchQuery);
                // displayResults(results);
                
                // For now, just show an alert
                alert(`Searching for: ${searchQuery}`);
            }
        });
    }
});
const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll(".search-item");

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = ""; // show
      } else {
        item.style.display = "none"; // hide
      }
    });
  });
    // Search 
    // Search all text content in the page (not just .search-item)
    const globalSearchInput = document.getElementById("search-input");

    if (globalSearchInput) {
        globalSearchInput.addEventListener("input", () => {
            const filter = globalSearchInput.value.toLowerCase();
            // Get all elements with text nodes (excluding script/style)
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
                acceptNode: function(node) {
                    // Ignore whitespace-only and script/style
                    if (!node.parentElement) return NodeFilter.FILTER_REJECT;
                    const tag = node.parentElement.tagName.toLowerCase();
                    if (tag === "script" || tag === "style" || tag === "noscript") return NodeFilter.FILTER_REJECT;
                    if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                    return NodeFilter.FILTER_ACCEPT;
                }
            });
            let node;
            while ((node = walker.nextNode())) {
                const parent = node.parentElement;
                if (!parent.dataset.originalDisplay) {
                    parent.dataset.originalDisplay = parent.style.display || "";
                }
                if (node.textContent.toLowerCase().includes(filter) || !filter) {
                    parent.style.display = parent.dataset.originalDisplay;
                } else {
                    parent.style.display = "none";
                }
            }
        });
    }
