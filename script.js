

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
  const modalDescriptionUser = document.getElementById('modal-descriptionUser');
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

  // Generate 79 car products if not enough
  if (products.length < 79) {
    const baseProducts = [...products];
    let id = products.length + 1;
    while (products.length < 79) {
      const base = baseProducts[(id - 1) % baseProducts.length];
      products.push({
        ...base,
        id,
        name: `${base.name} #${id}`,
        image: base.image,
      });
      id++;
    }
  }

  // Dynamically generate page buttons based on total pages
  function renderPageButtons() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination-pages');
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `page-btn px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white${i === currentPage ? ' bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-white' : ''}`;
      btn.textContent = i;
      btn.addEventListener('click', () => {
        currentPage = i;
        renderProducts();
      });
      paginationContainer.appendChild(btn);
    }
  }
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
  function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Prepare product info to store in cart (including quantity)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Check if product already in cart
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty = (existing.qty || 1) + qty;
    } else {
      cart.push({
        ...product,
        qty
      });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  }

  // Update cart count on page load
  window.onload = updateCartCount;

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

    // Remove product from cart and localStorage using close/remove button in product card
    document.getElementById('product-grid').addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.remove-cart-item');
      if (removeBtn) {
        const productId = parseInt(removeBtn.dataset.id);
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== productId);
        if (cart.length === 0) {
          localStorage.removeItem('cart');
        } else {
          localStorage.setItem('cart', JSON.stringify(cart));
        }
        updateCartCount();
        // Optionally, remove the product card from the grid
        removeBtn.closest('div.bg-white').remove();
      }
    });

    // Show only products stored in localStorage in #default-modal when a button is clicked
    document.querySelectorAll('[data-modal-toggle="default-modal"]').forEach(btn => {
      btn.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const modal = document.getElementById('default-modal');
        const modalTitle = modal.querySelector('h3');
        const modalBody = modal.querySelector('.space-y-4');
        if (!cart.length) {
          modalTitle.textContent = "Your Cart Products";
          modalBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
          return;
        }
        modalTitle.textContent = "Your Cart Products";
        modalBody.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          ${cart.map(product => `
            <div class="bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col items-center dark:bg-gray-800 dark:border-gray-700 relative">
              <button class="absolute top-2 right-2 text-red-500 hover:text-red-700 delete-cart-item" data-id="${product.id}" title="Remove">
                &times;
              </button>
              <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-contain mb-2" />
              <div class="text-center w-full">
                <h5 class="text-md font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2" title="${product.name}">${product.name}</h5>
                <div class="flex items-center justify-center mb-1">
                  ${renderStars(product.rating)}
                  <span class="ml-2 text-xs text-gray-500">${product.rating ? product.rating.toFixed(1) : ''}</span>
                </div>
                <div class="mb-1 text-lg font-bold text-gray-900 dark:text-white">$${product.price}</div>
                <div class="mb-1 text-xs text-gray-500 line-clamp-2">${product.description || ''}</div>
                <ul class="text-left list-disc list-inside text-gray-700 dark:text-gray-300 text-xs mb-2">
                  ${(product.highlights || []).slice(0,2).map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>
            </div>
          `).join('')}
          </div>
        `;

        // Add event listeners for delete buttons
        modalBody.querySelectorAll('.delete-cart-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            // Remove from in-memory cart array
            cart = cart.filter(item => item.id !== id);
            // Update localStorage (removes product forever)
            if (cart.length === 0) {
              localStorage.removeItem('cart');
            } else {
              localStorage.setItem('cart', JSON.stringify(cart));
            }
            updateCartCount();
            // Remove the product card from the modal
            btn.closest('div.bg-white').remove();
            // Optionally, show empty message if cart is now empty
            if (cart.length === 0) {
              modalBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
            }
          });
        });
      });
    });

    const showCartBtn = document.getElementById('show-cart-btn');
    if (showCartBtn) {
      showCartBtn.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartModal = document.getElementById('cart-modal');
        const cartBody = cartModal ? cartModal.querySelector('.cart-modal-body') : null;
        if (!cartBody) return;
        if (cart.length === 0) {
          cartBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
        } else {
          cartBody.innerHTML = cart.map(item => `
            <div class="flex items-center gap-4 border-b py-2">
              <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded" />
              <div class="flex-1">
                <div class="font-semibold">${item.name}</div>
                <div class="text-sm text-gray-500">$${item.price}</div>
              </div>
              <button class="delete-cart-item text-red-500 hover:text-red-700" data-id="${item.id}" title="Remove">&times;</button>
            </div>
          `).join('');
        }
        cartModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Add event listeners for delete buttons in cart modal
        cartBody.querySelectorAll('.delete-cart-item').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const id = parseInt(btn.dataset.id);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== id);
            if (cart.length === 0) {
              localStorage.removeItem('cart');
            } else {
              localStorage.setItem('cart', JSON.stringify(cart));
            }
            updateCartCount();
            // Remove the product row from the modal
            btn.closest('div.flex').remove();
            // Optionally, show empty message if cart is now empty
            if (cart.length === 0) {
              cartBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
            }
          });
        });
      });
    }
    // Close cart modal
    const closeCartModalBtn = document.getElementById('close-cart-modal');
    const cartModal = document.getElementById('cart-modal');
    if (closeCartModalBtn && cartModal) {
      closeCartModalBtn.addEventListener('click', () => {
        cartModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      });
      // Optional: close when clicking outside modal content
      cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
          cartModal.classList.add('hidden');
          document.body.style.overflow = 'auto';
        }
      });
    }
    // Show all products in cart (localStorage) in #cart-modal when a button is clicked
    // const showCartBtn = document.getElementById('show-cart-btn');
    // if (showCartBtn) {
    //   showCartBtn.addEventListener('click', () => {
    //     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //     const cartModal = document.getElementById('cart-modal');
    //     const cartBody = cartModal ? cartModal.querySelector('.cart-modal-body') : null;
    //     if (!cartBody) return;
    //     if (cart.length === 0) {
    //       cartBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
    //     } else {
    //       cartBody.innerHTML = cart.map(item => `
    //         <div class="flex items-center gap-4 border-b py-2">
    //           <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded" />
    //           <div class="flex-1">
    //             <div class="font-semibold">${item.name}</div>
    //             <div class="text-sm text-gray-500">$${item.price}</div>
    //           </div>
    //         </div>
    //       `).join('');
    //     }
    //     cartModal.classList.remove('hidden');
    //     document.body.style.overflow = 'hidden';
    //   });
    // }
    

    

    // // Show multiple products in #default-modal when a button is clicked
    // document.querySelectorAll('[data-modal-toggle="default-modal"]').forEach(btn => {
    //   btn.addEventListener('click', () => {
    //   // Example: show first 8 products (customize as needed)
    //   const likedProducts = products.slice(0, 8); // Show 8 products
    //   if (!likedProducts.length) return;

    //   const modal = document.getElementById('default-modal');
    //   const modalTitle = modal.querySelector('h3');
    //   const modalBody = modal.querySelector('.space-y-4');
    //   modalTitle.textContent = "Recommended Products";
    //   modalBody.innerHTML = `
    //     <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    //     ${likedProducts.map(product => `
    //       <div class="bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col items-center dark:bg-gray-800 dark:border-gray-700">
    //       <img src="${product.image}" alt="${product.name}" class="w-24 h-24 object-contain mb-2" />
    //       <div class="text-center w-full">
    //         <h5 class="text-md font-semibold text-gray-900 dark:text-white mb-1 line-clamp-2" title="${product.name}">${product.name}</h5>
    //         <div class="flex items-center justify-center mb-1">
    //         ${renderStars(product.rating)}
    //         <span class="ml-2 text-xs text-gray-500">${product.rating.toFixed(1)}</span>
    //         </div>
    //         <div class="mb-1 text-lg font-bold text-gray-900 dark:text-white">$${product.price}</div>
    //         <div class="mb-1 text-xs text-gray-500 line-clamp-2">${product.description}</div>
    //         <ul class="text-left list-disc list-inside text-gray-700 dark:text-gray-300 text-xs mb-2">
    //         ${product.highlights.slice(0,2).map(h => `<li>${h}</li>`).join('')}
    //         </ul>
    //         <button class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs mt-1" data-id="${product.id}">Add to Cart</button>
    //       </div>
    //       </div>
    //     `).join('')}
    //     </div>
    //   `;
    //   });
    // });

    // // Show all products in cart (localStorage) in #cart-modal when a button is clicked
    // const showCartBtn = document.getElementById('show-cart-btn');
    // if (showCartBtn) {
    //   showCartBtn.addEventListener('click', () => {
    //   const cart = JSON.parse(localStorage.getItem('cart')) || [];
    //   const cartModal = document.getElementById('cart-modal');
    //   const cartBody = cartModal ? cartModal.querySelector('.cart-modal-body') : null;
    //   if (!cartBody) return;
    //   if (cart.length === 0) {
    //     cartBody.innerHTML = '<div class="text-center text-gray-500">Your cart is empty.</div>';
    //   } else {
    //     cartBody.innerHTML = cart.map(item => `
    //     <div class="flex items-center gap-4 border-b py-2">
    //       <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-contain rounded" />
    //       <div class="flex-1">
    //       <div class="font-semibold">${item.name}</div>
    //       <div class="text-sm text-gray-500">$${item.price}</div>
    //       </div>
    //     </div>
    //     `).join('');
    //   }
    //   cartModal.classList.remove('hidden');
    //   document.body.style.overflow = 'hidden';
    //   });
    // }

    // // Close cart modal
    // const closeCartModalBtn = document.getElementById('close-cart-modal');
    // const cartModal = document.getElementById('cart-modal');
    // if (closeCartModalBtn && cartModal) {
    //   closeCartModalBtn.addEventListener('click', () => {
    //   cartModal.classList.add('hidden');
    //   document.body.style.overflow = 'auto';
    //   });
    //   // Optional: close when clicking outside modal content
    //   cartModal.addEventListener('click', (e) => {
    //   if (e.target === cartModal) {
    //     cartModal.classList.add('hidden');
    //     document.body.style.overflow = 'auto';
    //   }
    //   });
    // }
  }
    document.addEventListener('DOMContentLoaded', () => {
      updateCartCount();
      init();
    });    
// localStorage.removeItem('cart');

  // Initialize the page
  // document.addEventListener('DOMContentLoaded', init);
