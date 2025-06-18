

// window.addEventListener('load', function () {
//     const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'npm-install-copy-button');
//     const tooltip = FlowbiteInstances.getInstance('Tooltip', 'tooltip-copy-npm-install-copy-button');

//     const $defaultIcon = document.getElementById('default-icon');
//     const $successIcon = document.getElementById('success-icon');

//     const $defaultTooltipMessage = document.getElementById('default-tooltip-message');
//     const $successTooltipMessage = document.getElementById('success-tooltip-message');

//     clipboard.updateOnCopyCallback((clipboard) => {
//         showSuccess();

//         // reset to default state
//         setTimeout(() => {
//             resetToDefault();
//         }, 2000);
//     })

//     const showSuccess = () => {
//         $defaultIcon.classList.add('hidden');
//         $successIcon.classList.remove('hidden');
//         $defaultTooltipMessage.classList.add('hidden');
//         $successTooltipMessage.classList.remove('hidden');    
//         tooltip.show();
//     }

//     const resetToDefault = () => {
//         $defaultIcon.classList.remove('hidden');
//         $successIcon.classList.add('hidden');
//         $defaultTooltipMessage.classList.remove('hidden');
//         $successTooltipMessage.classList.add('hidden');
//         tooltip.hide();
//     }
// })

// // switch language
// function switchLanguage(langCode) {
//   // Implement language switching logic here
//   Array.from(document.querySelectorAll('.lang-btn')).forEach(button =>{
//     if (button.classList.contains('lang-' + langCode)) {
//       const svgContent = button.querySelector('svg').outerHTML;
//       const countryName = button.textContent.trim();
//       document.getElementById('dropdown-button-2').innerHTML = `
//         ${svgContent}
//         ${countryName} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//         </svg>
//       `;
//     }
//     if (button.getAttribute('data-lang') === startLang) {
//       button.classList.add('active'); // or your highlight class
//     } else {
//       button.classList.remove('active');
//     }
//   })
//    // Here you would implement actual content translation
//   // For example, hide/show elements with language classes:
//   document.querySelectorAll('[class*="lang-"]').forEach(el => {
//     if (el.classList.contains('lang-' + langCode)) {
//       el.style.display = '';
//     } else {
//       el.style.display = 'none';
//     }
//   });
  
//   // Store language preference
//   localStorage.setItem('preferredLanguage', langCode);
// }
// // Initialize language dropdown
// document.addEventListener('DOMContentLoaded', function() {
//   // Set up click handlers for language buttons
//   document.querySelectorAll('#dropdown-search-city button[type="button"]').forEach(button => {
//     button.addEventListener('click', function() {
//       const langClass = Array.from(this.classList).find(cls => cls.startsWith('lang-'));
//       if (langClass) {
//         const langCode = langClass.split('-')[1];
//         switchLanguage(langCode);
//       }
//     });
//   });
  
//   // Detect initial language
//   const storedLang = localStorage.getItem('preferredLanguage');
//   const browserLang = navigator.language || navigator.userLanguage;
//   let defaultLang = 'us'; // fallback
  
//   // Map browser language to available options
//   if (storedLang) {
//     defaultLang = storedLang;
//   } else if (browserLang.includes('de')) {
//     defaultLang = 'gm';
//   } else if (browserLang.includes('it')) {
//     defaultLang = 'it';
//   } else if (browserLang.includes('zh')) {
//     defaultLang = 'ch';
//   }
  
//   // Set initial language
//   switchLanguage(defaultLang);
// });
// // Initialize the dropdown functionality (assuming you're using Flowbite)
// document.addEventListener('DOMContentLoaded', function() {
//   const dropdownButton = document.getElementById('dropdown-button-2');
//   const dropdownMenu = document.getElementById('dropdown-search-city');
  
//   dropdownButton.addEventListener('click', function() {
//     dropdownMenu.classList.toggle('hidden');
//   });
  
//   // Close dropdown when clicking outside
//   document.addEventListener('click', function(event) {
//     if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
//       dropdownMenu.classList.add('hidden');
//     }
//   });
// });

// const lang = navigator.language || navigator.userLanguage || 'en-US';
// const langBtns = document.querySelectorAll('.lang-btn');
// const langCodes = Array.from(langBtns).map(btn => btn.getAttribute('data-lang'));
// const startLang = langCodes.find(val => lang.includes(val)) || 'us';
// switchLanguage(startLang);
// selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang)

//  const img = document.querySelector('#user-menu-button img');
//   if (!img.src || img.src.includes('null')) {
//     img.src = 'default-user.png'; // Your fallback image path
//   }
// Product Data
  const products = [
    {
      id: 1,
      name: "Toyota Camry 2022 Hybrid LE",
      category: "car",
      price: 28500,
      originalPrice: 32000,
      rating: 4.7,
      image: "https://www.buyatoyota.com/sharpr/bat/assets/img/vehicle-info/Camry_Hybrid/2022/hero_image_camryhybrid.png",
      description: "2022 Toyota Camry Hybrid LE, 2.5L 4-cylinder, automatic, 18,000 km, white, full option, excellent condition.",
      highlights: [
        "2.5L Hybrid Engine",
        "Automatic Transmission",
        "18,000 km mileage",
        "Full Option",
        "Excellent Condition"
      ]
    },
    {
      id: 2,
      name: "Lexus RX 350 2021 Luxury",
      category: "car",
      price: 49500,
      originalPrice: 54000,
      rating: 4.9,
      image: "https://pictures.dealer.com/l/lexusofgreenville2660laurensroad/0542/10166bfde8f4aab4879cdc07ac9ea10ax.jpg",
      description: "2021 Lexus RX 350 Luxury, 3.5L V6, automatic, 12,000 km, black, panoramic roof, navigation, leather seats.",
      highlights: [
        "3.5L V6 Engine",
        "Panoramic Roof",
        "Navigation System",
        "Leather Interior",
        "12,000 km mileage"
      ]
    },
    {
      id: 3,
      name: "Honda CR-V 2020 EX-L",
      category: "car",
      price: 26500,
      originalPrice: 29500,
      rating: 4.6,
      image: "https://hips.hearstapps.com/hmg-prod/images/2020-honda-cr-v-hybrid-drive-109-1584417693.jpg",
      description: "2020 Honda CR-V EX-L, 1.5L turbo, automatic, 22,000 km, gray, sunroof, leather, Apple CarPlay.",
      highlights: [
        "1.5L Turbo Engine",
        "Sunroof",
        "Leather Seats",
        "Apple CarPlay",
        "22,000 km mileage"
      ]
    },
    {
      id: 4,
      name: "Mazda CX-5 2019 Grand Touring",
      category: "car",
      price: 23800,
      originalPrice: 26500,
      rating: 4.5,
      image: "https://platform.cstatic-images.com/in/v2/stock_photos/ef504608-4566-411a-aee7-466190e38dd9/4ca2abc7-8c44-40f4-83ca-cbd07d7fff8d.png",
      description: "2019 Mazda CX-5 Grand Touring, 2.5L, automatic, 30,000 km, red, Bose audio, navigation, 360 camera.",
      highlights: [
        "2.5L Engine",
        "Bose Audio",
        "Navigation System",
        "360 Camera",
        "30,000 km mileage"
      ]
    },
    {
      id: 5,
      name: "Hyundai Tucson 2021 GLS",
      category: "car",
      price: 21500,
      originalPrice: 24500,
      rating: 4.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugOFGoAVyrARz2UH5B3N65pKDGUOax6T2Hw&s",
      description: "2021 Hyundai Tucson GLS, 2.0L, automatic, 15,000 km, silver, push start, rear camera, warranty.",
      highlights: [
        "2.0L Engine",
        "Push Start",
        "Rear Camera",
        "Warranty",
        "15,000 km mileage"
      ]
    },
    {
      id: 6,
      name: "Ford Ranger 2020 Wildtrak",
      category: "car",
      price: 33500,
      originalPrice: 37000,
      rating: 4.7,
      image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/uNeryJOFQ8Smls6tpMxA",
      description: "2020 Ford Ranger Wildtrak, 2.0L Bi-Turbo, automatic, 25,000 km, orange, 4x4, leather, full option.",
      highlights: [
        "2.0L Bi-Turbo Engine",
        "4x4 Drive",
        "Leather Interior",
        "Full Option",
        "25,000 km mileage"
      ]
    },
    {
      id: 7,
      name: "BMW X5 2018 xDrive40i",
      category: "car",
      price: 52500,
      originalPrice: 59000,
      rating: 4.8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DYgXtcitH-XMyiN8cAd3oHq_7qCIOZ4IXw&s",
      description: "2018 BMW X5 xDrive40i, 3.0L turbo, automatic, 40,000 km, white, M Sport, panoramic roof, navigation.",
      highlights: [
        "3.0L Turbo Engine",
        "M Sport Package",
        "Panoramic Roof",
        "Navigation System",
        "40,000 km mileage"
      ]
    },
    {
      id: 8,
      name: "Mercedes-Benz C200 2019 AMG",
      category: "car",
      price: 41500,
      originalPrice: 46000,
      rating: 4.7,
      image: "https://angloauto.co.za/wp-content/uploads/2023/02/07-1200x750.jpg",
      description: "2019 Mercedes-Benz C200 AMG, 2.0L turbo, automatic, 28,000 km, black, AMG package, sunroof, leather.",
      highlights: [
        "2.0L Turbo Engine",
        "AMG Package",
        "Sunroof",
        "Leather Interior",
        "28,000 km mileage"
      ]
    }
  ];

  // DOM Elements
  const productGrid = document.getElementById('product-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const sortBy = document.getElementById('sort-by');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  const pageBtns = document.querySelectorAll('.page-btn');
  const quickViewModal = document.getElementById('quick-view-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modalImage = document.getElementById('modal-image');
  const modalName = document.getElementById('modal-name');
  const modalRating = document.getElementById('modal-rating');
  const modalDescription = document.getElementById('modal-description');
  const modalPrice = document.getElementById('modal-price');
  const modalOriginalPrice = document.getElementById('modal-original-price');
  const modalDiscount = document.getElementById('modal-discount');
  const modalHighlights = document.getElementById('modal-highlights');
  const decreaseQty = document.getElementById('decrease-qty');
  const increaseQty = document.getElementById('increase-qty');
  const quantity = document.getElementById('quantity');
  const addToCartModal = document.getElementById('add-to-cart-modal');

  // State variables
  let currentPage = 1;
  const productsPerPage = 8;
  let filteredProducts = [...products];
  let currentProduct = null;

  // Initialize the page
  function init() {
    renderProducts();
    setupEventListeners();
  }

  // Render products based on current filters and pagination
  function renderProducts() {
    productGrid.innerHTML = '';
    
    // Apply search filter
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) &&
      (categoryFilter.value === 'all' || product.category === categoryFilter.value)
    );
    
    // Apply sorting
    const sortValue = sortBy.value;
    if (sortValue === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Render each product
    paginatedProducts.forEach(product => {
      const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
      
      const productCard = document.createElement('div');
      productCard.className = 'w-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-shadow dark:bg-gray-800 dark:border-gray-700';
      productCard.innerHTML = `
        <a href="#" class="block relative h-48 overflow-hidden rounded-t-lg">
          <img class="w-full h-full object-contain p-4" src="${product.image}" alt="${product.name}" />
          ${discount > 0 ? `<span class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">-${discount}%</span>` : ''}
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2" title="${product.name}">${product.name}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-3">
            <div class="flex items-center">
              ${renderStars(product.rating)}
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded ml-2 dark:bg-blue-200 dark:text-blue-800">${product.rating.toFixed(1)}</span>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-2xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
              ${product.originalPrice > product.price ? 
                `<span class="text-sm text-gray-500 line-through ml-1">$${product.originalPrice}</span>` : ''}
            </div>
            <div class="flex gap-2">
              <button class="quick-view-btn text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" 
                data-id="${product.id}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
              <button class="add-to-cart-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                data-id="${product.id}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
      productGrid.appendChild(productCard);
    });
    
    // Update pagination buttons
    updatePagination();
  }

  // Render star ratings
  function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars += `<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars += `<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
      } else {
        stars += `<svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
      }
    }
    return stars;
  }

  // Update pagination buttons
  function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    // Disable prev/next buttons when appropriate
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
    
    // Update page buttons
    pageBtns.forEach((btn, index) => {
      const pageNum = index + 1;
      btn.style.display = pageNum <= totalPages ? 'block' : 'none';
      btn.classList.toggle('bg-blue-50', pageNum === currentPage);
      btn.classList.toggle('text-blue-600', pageNum === currentPage);
      btn.classList.toggle('dark:bg-gray-700', pageNum === currentPage);
      btn.classList.toggle('dark:text-white', pageNum === currentPage);
    });
  }

  // Open quick view modal
  function openQuickView(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    
    modalImage.src = currentProduct.image;
    modalImage.alt = currentProduct.name;
    modalName.textContent = currentProduct.name;
    
    // Update rating stars
    const starsContainer = modalRating.previousElementSibling;
    starsContainer.innerHTML = renderStars(currentProduct.rating);
    
    modalRating.textContent = currentProduct.rating.toFixed(1);
    modalDescription.textContent = currentProduct.description;
    modalPrice.textContent = `$${currentProduct.price}`;
    
    if (currentProduct.originalPrice > currentProduct.price) {
      modalOriginalPrice.textContent = `$${currentProduct.originalPrice}`;
      modalDiscount.textContent = `${discount}% off`;
      modalOriginalPrice.style.display = 'inline';
      modalDiscount.style.display = 'inline';
    } else {
      modalOriginalPrice.style.display = 'none';
      modalDiscount.style.display = 'none';
    }
    
    // Update highlights
    modalHighlights.innerHTML = '';
    currentProduct.highlights.forEach(highlight => {
      const li = document.createElement('li');
      li.textContent = highlight;
      modalHighlights.appendChild(li);
    });
    
    // Reset quantity
    quantity.textContent = '1';
    
    // Show modal
    quickViewModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  // Close quick view modal
  function closeQuickView() {
    quickViewModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  // Add to cart function
  function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // In a real app, you would add to cart storage or send to server
    console.log(`Added ${qty} ${product.name} to cart`);
    
    // Show a notification (in a real app, you might use a toast library)
    alert(`Added ${qty} ${product.name} to cart!`);
  }

  // Setup event listeners
  function setupEventListeners() {
    // Filter and search events
    searchInput.addEventListener('input', () => {
      currentPage = 1;
      renderProducts();
    });
    
    categoryFilter.addEventListener('change', () => {
      currentPage = 1;
      renderProducts();
    });
    
    sortBy.addEventListener('change', renderProducts);
    
    // Pagination events
    prevPageBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderProducts();
      }
    });
    
    nextPageBtn.addEventListener('click', () => {
      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderProducts();
      }
    });
    
    pageBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.textContent);
        renderProducts();
      });
    });
    
    // Product grid events (delegated)
    productGrid.addEventListener('click', (e) => {
      const quickViewBtn = e.target.closest('.quick-view-btn');
      const addToCartBtn = e.target.closest('.add-to-cart-btn');
      
      if (quickViewBtn) {
        e.preventDefault();
        const productId = parseInt(quickViewBtn.dataset.id);
        openQuickView(productId);
      }
      
      if (addToCartBtn) {
        e.preventDefault();
        const productId = parseInt(addToCartBtn.dataset.id);
        addToCart(productId);
      }
    });
    
    // Modal events
    closeModalBtn.addEventListener('click', closeQuickView);
    
    // Close modal when clicking outside
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickView();
      }
    });
    
    // Quantity controls
    decreaseQty.addEventListener('click', () => {
      let qty = parseInt(quantity.textContent);
      if (qty > 1) {
        quantity.textContent = qty - 1;
      }
    });
    
    increaseQty.addEventListener('click', () => {
      let qty = parseInt(quantity.textContent);
      quantity.textContent = qty + 1;
    });
    
    // Add to cart from modal
    addToCartModal.addEventListener('click', () => {
      if (currentProduct) {
        const qty = parseInt(quantity.textContent);
        addToCart(currentProduct.id, qty);
        closeQuickView();
      }
    });
  }

  // Initialize the page
  document.addEventListener('DOMContentLoaded', init);