/**
 * @file script.js
 * Tệp JavaScript chính cho trang web, quản lý tất cả các chức năng và hiệu ứng UI.
 */
console.log('Script.js loaded');
import getProductData, { productDescriptions } from './menu.js';

// Hero Section Carousel với Slide Effect và Zoom khi Hover
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const slidesContainer = document.querySelector('.hero-slides');
    const dotsContainer = document.querySelector('.hero-dots');
    const prevBtn = document.querySelector('.hero-arrow.prev');
    const nextBtn = document.querySelector('.hero-arrow.next');
    
    if (!heroSection || !slidesContainer) return;
    
    // Danh sách ảnh background 
    const images = [
        '../asset/img/contact_blog/salad.jpg',
        '../asset/img/contact_blog/pexels-foodie-factor-162291-566566.jpg',
        '../asset/img/contact_blog/pexels-amar-27938733.jpg',
        '../asset/img/contact_blog/pexels-shkrabaanthony-6823320.jpg',
        '../asset/img/contact_blog/pexels-catscoming-406152.jpg',
    ];
    
    let currentIndex = 0;
    let slideInterval;
    let isPaused = false;
    
    // slide elements
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.classList.add('hero-slide');
        slide.style.backgroundImage = `url('${image}')`;
        slidesContainer.appendChild(slide);
    });
    
    // dots navigation
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('hero-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.hero-dot');
    
    // Hàm cập nhật vị trí slide
    function updateSlidePosition() {
        const offset = -currentIndex * 100; // Mỗi slide = 100vw
        slidesContainer.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Hàm chuyển slide tiếp theo
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlidePosition();
    }
    
    // Hàm chuyển slide trước
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlidePosition();
    }
    
    // Hàm chuyển đến slide cụ thể
    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        resetInterval();
    }
    
    // Hàm bắt đầu slideshow
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Chuyển ảnh mỗi 5 giây
    }
    
    // Hàm dừng slideshow
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // Hàm reset interval
    function resetInterval() {
        stopSlideshow();
        if (!isPaused) {
            startSlideshow();
        }
    }
    
    // Set slide đầu tiên
    updateSlidePosition();
    
    // Bắt đầu slideshow
    startSlideshow();
    
    // Event listeners cho arrows (nếu có)
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });
    }
    
    // Pause khi hover
    heroSection.addEventListener('mouseenter', () => {
        isPaused = true;
        stopSlideshow();
    });
    
    // Resume khi rời chuột
    heroSection.addEventListener('mouseleave', () => {
        isPaused = false;
        startSlideshow();
    });
    
    // Pause khi tab không active
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            stopSlideshow();
        } else if (!isPaused) {
            startSlideshow();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        }
    });
    
    // Touch/Swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    heroSection.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    heroSection.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            nextSlide();
            resetInterval();
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right - prev slide
            prevSlide();
            resetInterval();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. KHAI BÁO BIẾN VÀ DOM ELEMENTS
    // =========================================================================
    const productData = getProductData();
    const header = document.querySelector('.header');
    const headerSearchInput = document.querySelector('.site-search input');
    const suggestionsContainer = document.querySelector('.search-suggestions');
    const mainContent = document.querySelector('.main-content');
    const productGrid = document.querySelector('.product-grid');
    const filterSelect = document.getElementById('filter-select');
    const searchInput = document.querySelector('.filter-search input');
    const pageSubtitle = document.querySelector('.page-title p');
    const pageTitle = document.querySelector('.page-title h1');
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const cartCountElement = document.querySelector('.cart-count');
    const toastContainer = document.getElementById('toast-container');
    const productDetailModal = document.getElementById('product-detail-modal');
    const productDetailBody = document.querySelector('.product-detail-body');
    const cartModal = document.getElementById('cart-modal');
    const cartLink = document.querySelector('.cart-link');
    const cartModalBody = document.querySelector('.cart-modal-body');
    const cartTotalPrice = document.querySelector('.cart-total-price');

    let allProducts = []; // Mảng chứa sản phẩm đã lọc để hiển thị
    let productsShownCount = 0;
    const ITEMS_PER_LOAD = 8;
    let currentMainCategory = 'menukhachle';
    let allProductsForSuggestions = []; // Mảng chứa TẤT CẢ sản phẩm để tìm kiếm
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    let currentDetailProduct = null;
    let detailQuantity = 1;

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // =========================================================================
    // 2. LOGIC GIỎ HÀNG VÀ THÔNG BÁO (PHẦN MỚI)
    // =========================================================================

     /** Cập nhật số lượng trên icon giỏ hàng */
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
            cartCountElement.classList.toggle('visible', totalItems > 0);
        }
    }

    /** Cập nhật số lượng trên icon yêu thích */
    function updateFavCount() {
        const favCountElement = document.querySelector('.icon-love');
        if (favCountElement) {
            favCountElement.textContent = favorites.length;
            favCountElement.classList.toggle('visible', favorites.length > 0);
        }
    }

    /** Hiển thị thông báo */
    function showToast(message) {
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.className = 'toast toast--info';
        toast.innerHTML = `
            <div class="toast__icon"><i class="fa-solid fa-circle-info"></i></div>
            <div class="toast__message">${message}</div>
            <button class="toast__close">&times;</button>
        `;
        toastContainer.appendChild(toast);

        const closeBtn = toast.querySelector('.toast__close');
        closeBtn.addEventListener('click', () => toast.remove());

        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 3500);
    }

    /** Thêm sản phẩm vào giỏ hàng */
    function addToCart(productIdString) { // Đổi tên biến để rõ ràng hơn
        // SỬA LỖI 1: Chuyển đổi ID từ chuỗi (string) sang số (number)
        const productId = parseInt(productIdString, 10);

        const productToAdd = allProductsForSuggestions.find(p => p.id === productId);
        if (!productToAdd) {
            console.error("Không tìm thấy sản phẩm với ID:", productId);
            return;
        }

        const existingItem = cart.find(item => item.id === productToAdd.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productToAdd.id,
            name: productToAdd.name,
            price: typeof productToAdd.price === 'string' ? 
                   parseInt(productToAdd.price.replace(/[^0-9]/g, '')) : 
                   productToAdd.price,
            img: productToAdd.img || productToAdd.image,
            kcal: productToAdd.kcal || 'N/A',
            quantity: 1
        });
    }
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    showToast(`Đã thêm "<strong>${productToAdd.name}</strong>" vào giỏ hàng!`);
    
    if (cartModal && cartModal.classList.contains('active')) {
        renderCart();
    }
}

    // =========================================================================
    // 2A. CHỨC NĂNG HIỂN THỊ VÀ QUẢN LÝ GIỎ HÀNG
    // =========================================================================

    /** Mở modal giỏ hàng */
    function openCart() {
        if (cartModal) {
            cartModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCart();
        }
    }

    /** Đóng modal giỏ hàng */
    function closeCart() {
        if (cartModal) {
            cartModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    /** Xóa sản phẩm khỏi giỏ hàng với xác nhận */
    function removeFromCart(productId) {
        // Tìm box sản phẩm trong giỏ hàng
        const cartItemBox = document.querySelector(`.cart-item[data-id='${productId}']`);
        if (!cartItemBox) return;

        // Nếu đã có confirmBar thì không tạo thêm
        if (cartItemBox.querySelector('.cart-confirm-bar')) return;

        // Tạo thanh xác nhận với style giống toast
        const confirmBar = document.createElement('div');
        confirmBar.className = 'cart-confirm-bar toast toast--info';
        confirmBar.style.marginBottom = '10px';
        confirmBar.innerHTML = `
            <div class="toast__icon"><i class="fa-solid fa-circle-question"></i></div>
            <div class="toast__message">Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</div>
            <div class="toast__actions">
                <button class="btn-confirm-remove" style="background:#d32f2f;color:#fff;border:none;padding:6px 18px;border-radius:6px;margin-right:8px;cursor:pointer;font-weight:500;">Xóa</button>
                <button class="btn-cancel-remove" style="background:#e3f2fd;color:#1976d2;border:none;padding:6px 18px;border-radius:6px;cursor:pointer;font-weight:500;">Hủy</button>
            </div>
        `;
        cartItemBox.prepend(confirmBar);

        // Sự kiện xác nhận xóa
        confirmBar.querySelector('.btn-confirm-remove').addEventListener('click', () => {
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('shoppingCart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
            showToast('Đã xóa sản phẩm khỏi giỏ hàng!');
        });
        // Sự kiện hủy xóa
        confirmBar.querySelector('.btn-cancel-remove').addEventListener('click', () => {
            confirmBar.remove();
        });
    }

    /** Cập nhật số lượng sản phẩm */
    function updateQuantity(productId, newQuantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                localStorage.setItem('shoppingCart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
            }
        }
    }

    /** Tính tổng tiền */
    function calculateTotal() {
        return cart.reduce((sum, item) => {
        const price = typeof item.price === 'string' ? 
                     parseInt(item.price.replace(/[^0-9]/g, '')) : 
                     item.price;
        return sum + (price * item.quantity);
    }, 0);
}

    /** Hiển thị giỏ hàng */
    function renderCart() {
        if (!cartModalBody || !cartTotalPrice) return;

        if (cart.length === 0) {
            // Giỏ hàng trống
            cartModalBody.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty-icon">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                    <h3>Giỏ hàng trống</h3>
                    <p>Chưa có sản phẩm nào trong giỏ hàng của bạn</p>
                    <button class="btn-continue-shopping">
                        <i class="fa-solid fa-arrow-left"></i>
                        Tiếp tục mua sắm
                    </button>
                </div>
            `;

            // Gắn sự kiện cho nút tiếp tục mua sắm
            const continueBtn = cartModalBody.querySelector('.btn-continue-shopping');
            if (continueBtn) {
                continueBtn.addEventListener('click', closeCart);
            }

            cartTotalPrice.textContent = '0đ';
        } else {
            // Có sản phẩm trong giỏ
            const itemsHTML = cart.map(item => {
        const price = typeof item.price === 'string' ? 
                     parseInt(item.price.replace(/[^0-9]/g, '')) : 
                     item.price;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.img || item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${new Intl.NumberFormat('vi-VN').format(price)}₫</div>
                    <div class="cart-item-quantity">
                        <div class="quantity-controls">
                            <button class="quantity-btn btn-decrease" data-id="${item.id}">
                                <i class="fa-solid fa-minus"></i>
                            </button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn btn-increase" data-id="${item.id}">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="cart-item-actions">
    <button class="btn-cart-action btn-fav" data-id="${item.id}">
        <i class="fa-solid fa-heart"></i>
        Yêu thích
    </button>
    <button class="btn-cart-action btn-remove" data-id="${item.id}">
        <i class="fa-solid fa-trash"></i>
        Xóa
    </button>
</div>
                </div>
            </div>
        `;
    }).join('');
            
            cartModalBody.innerHTML = `<div class="cart-items-list">${itemsHTML}</div>`;
            
            // Cập nhật tổng tiền
            cartTotalPrice.textContent = new Intl.NumberFormat('vi-VN').format(calculateTotal()) + '₫';
            
            // Gắn sự kiện cho các nút trong giỏ hàng
            bindCartEvents();
        }
    }

    /** Gắn sự kiện cho các nút trong giỏ hàng */
    function bindCartEvents() {
        // Nút xóa
        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                removeFromCart(id);
            });
        });

        // Nút yêu thích
        document.querySelectorAll('.btn-fav').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                addToFavorites(id);
            });
        });

        // Nút giảm số lượng
        document.querySelectorAll('.btn-decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                const item = cart.find(item => item.id === id);
                if (item) {
                    updateQuantity(id, item.quantity - 1);
                }
            });
        });

        // Nút tăng số lượng
        document.querySelectorAll('.btn-increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                const item = cart.find(item => item.id === id);
                if (item) {
                    updateQuantity(id, item.quantity + 1);
                }
            });
        });
    }

    // =========================================================================
    // 2B. CHỨC NĂNG THÊM/XOÁ SẢN PHẨM YÊU THÍCH
    // =========================================================================

    function addToFavorites(productId) {
    const product = cart.find(item => item.id === productId);
    if (!product) return;
    
    if (!favorites.some(fav => fav.id === productId)) {
        favorites.push(product);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        updateFavCount(); // THÊM DÒNG NÀY
        showToast('Đã thêm vào yêu thích!');
    } else {
        showToast('Sản phẩm đã có trong danh sách yêu thích!');
    }
}

function removeFromFavorites(productId) {
    favorites = favorites.filter(item => item.id !== productId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavCount(); // THÊM DÒNG NÀY
    showToast('Đã xóa khỏi yêu thích!');
    renderFavorites();
}
    
    // =========================================================================
    // 3. CÁC HÀM CHÍNH (LỌC, HIỂN THỊ...)
    // =========================================================================

    // =========================================================================
// CHỨC NĂNG CHI TIẾT SẢN PHẨM
// =========================================================================

// Hàm lấy mô tả sản phẩm hoặc mô tả mặc định
function getProductDescription(productId) {
    return productDescriptions[productId] || {
        description: "Món ăn healthy được chế biến từ nguyên liệu tươi ngon, đảm bảo vệ sinh an toàn thực phẩm. Phù hợp cho người quan tâm đến sức khỏe và dinh dưỡng cân đối.",
        ingredients: ["Nguyên liệu tươi", "Gia vị tự nhiên", "Rau củ organic"],
        nutrition: { carbs: "45g", protein: "25g", fat: "10g", fiber: "5g" },
        suitableFor: ["Healthy", "Dinh dưỡng", "An toàn"]
    };
}

// Hàm hiển thị chi tiết sản phẩm
function showProductDetail(productId) {
    const product = allProductsForSuggestions.find(p => p.id === productId);
    if (!product || !productDetailModal || !productDetailBody) return;

    currentDetailProduct = product;
    detailQuantity = 1;

    const details = getProductDescription(productId);
    const price = typeof product.price === 'string' ? 
                 parseInt(product.price.replace(/[^0-9]/g, '')) : 
                 product.price;

    productDetailBody.innerHTML = `
        <div class="product-detail-main">
            <div class="product-detail-image">
                <span class="product-kcal-badge">${product.kcal || 'N/A'} KCAL</span>
                <img src="${product.img}" alt="${product.name}">
            </div>
            
            <div class="product-detail-info">
                <h1 class="product-detail-title">${product.name}</h1>
                <div class="product-detail-price">${new Intl.NumberFormat('vi-VN').format(price)}₫</div>
                
                <div class="product-detail-description">
                    <h3><i class="fa-solid fa-info-circle"></i> Mô tả</h3>
                    <p>${details.description}</p>
                </div>
                
                <div class="nutrition-info">
                    <h3><i class="fa-solid fa-chart-pie"></i> Thông tin dinh dưỡng</h3>
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <span class="nutrition-label">Calories</span>
                            <span class="nutrition-value">${product.kcal || 'N/A'} kcal</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Carbs</span>
                            <span class="nutrition-value">${details.nutrition.carbs}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Protein</span>
                            <span class="nutrition-value">${details.nutrition.protein}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Fat</span>
                            <span class="nutrition-value">${details.nutrition.fat}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">Fiber</span>
                            <span class="nutrition-value">${details.nutrition.fiber}</span>
                        </div>
                    </div>
                </div>
                
                <div class="ingredients-section">
                    <h3><i class="fa-solid fa-leaf"></i> Thành phần</h3>
                    <div class="ingredients-list">
                        ${details.ingredients.map(ing => 
                            `<span class="ingredient-tag">${ing}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="suitable-for">
                    <h3><i class="fa-solid fa-users"></i> Phù hợp cho</h3>
                    <div class="suitable-tags">
                        ${details.suitableFor.map(tag => 
                            `<span class="suitable-tag">
                                <i class="fa-solid fa-check"></i> ${tag}
                            </span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Cập nhật số lượng
    const qtyValue = document.querySelector('.qty-value');
    if (qtyValue) qtyValue.textContent = detailQuantity;

    // Hiển thị modal
    productDetailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hàm đóng modal chi tiết
function closeProductDetail() {
    if (productDetailModal) {
        productDetailModal.classList.remove('active');
        document.body.style.overflow = '';
        currentDetailProduct = null;
        detailQuantity = 1;
    }
}

// Tìm dòng này trong script.js:
function closeProductDetail() {
    if (productDetailModal) {
        productDetailModal.classList.remove('active');
        document.body.style.overflow = '';
        currentDetailProduct = null;
        detailQuantity = 1;
    }
}

// THÊM NGAY SAU NÓ:
function renderMealItem(mealType, meal) {
    const mealLabel = mealType === 'Bữa sáng' ? 'SÁNG' : 
                      mealType === 'Bữa trưa' ? 'TRƯA' : 'TỐI';
    
    return `
        <div class="meal-item">
            <div class="meal-header">
                <div class="meal-type-badge">${mealLabel}</div>
                <div class="meal-name-section">
                    <div class="meal-name-vi">${meal.name}</div>
                    <div class="meal-name-en">${meal.nameEn || ''}</div>
                </div>
            </div>
            <div class="meal-nutrition-table">
                <div class="nutrition-col">
                    <div class="nutrition-label">Energy<br/>(Calorie)</div>
                    <div class="nutrition-value">${meal.energy || meal.kcal}</div>
                </div>
                <div class="nutrition-col">
                    <div class="nutrition-label">Carb<br/>(g)</div>
                    <div class="nutrition-value">${meal.carb || '-'}</div>
                </div>
                <div class="nutrition-col">
                    <div class="nutrition-label">Fat<br/>(g)</div>
                    <div class="nutrition-value">${meal.fat || '-'}</div>
                </div>
                <div class="nutrition-col">
                    <div class="nutrition-label">Protein<br/>(g)</div>
                    <div class="nutrition-value">${meal.protein || '-'}</div>
                </div>
                <div class="nutrition-col">
                    <div class="nutrition-label">Fiber<br/>(g)</div>
                    <div class="nutrition-value">${meal.fiber || '-'}</div>
                </div>
            </div>
        </div>
    `;
}

function showWeeklyDetail(productId) {
    const product = allProductsForSuggestions.find(p => p.id === productId);
    if (!product || !product.meals) return;

    // Tạo modal động nếu chưa có
    let weeklyModal = document.getElementById('weekly-detail-modal');
    if (!weeklyModal) {
        weeklyModal = document.createElement('div');
        weeklyModal.id = 'weekly-detail-modal';
        weeklyModal.className = 'cart-modal';
        weeklyModal.innerHTML = `
            <div class="cart-modal-overlay"></div>
            <div class="cart-modal-content weekly-detail-content">
                <div class="cart-modal-header">
                    <h2><i class="fa-solid fa-calendar-days"></i> <span id="modal-week-title"></span></h2>
                    <button class="cart-modal-close weekly-close" aria-label="Đóng">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="weekly-detail-body"></div>
                <div class="cart-modal-footer">
                    <button class="btn-add-to-cart-weekly">
                        <i class="fa-solid fa-cart-plus"></i> Thêm giỏ hàng
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(weeklyModal);

        // Gắn sự kiện đóng
        const closeBtn = weeklyModal.querySelector('.weekly-close');
        const overlay = weeklyModal.querySelector('.cart-modal-overlay');
        
        const closeHandler = () => {
            weeklyModal.classList.remove('active');
            document.body.style.overflow = '';
        };
        
        closeBtn.addEventListener('click', closeHandler);
        overlay.addEventListener('click', closeHandler);

        // Gắn sự kiện thêm giỏ hàng
        const addBtn = weeklyModal.querySelector('.btn-add-to-cart-weekly');
        addBtn.addEventListener('click', () => {
            addToCart(product.id);
            closeHandler();
        });
    }

    const modalTitle = weeklyModal.querySelector('#modal-week-title');
    const modalBody = weeklyModal.querySelector('.weekly-detail-body');

    if (modalTitle) modalTitle.textContent = product.name;

    // Render nội dung chi tiết
    modalBody.innerHTML = `
        <div class="nutrition-circle">
            <div class="balance-text">CÂN BẰNG</div>
            <div class="nutrition-title">GIỮA CHẤT BÉO TỐT, PROTEIN CHẤT LƯỢNG CAO, TINH BỘT VÀ CHẤT XƠ</div>
            <div class="nutrition-title" style="margin-top: 12px;">GIÁ TRỊ DINH DƯỠNG TRUNG BÌNH HẰNG NGÀY</div>
            <div class="nutrition-values">
                <div class="nutrition-row">
                    <span>Calories</span>
                    <span>${product.nutrition.calories}</span>
                </div>
                <div class="nutrition-row">
                    <span>Carb (g)</span>
                    <span>${product.nutrition.carbs}</span>
                </div>
                <div class="nutrition-row">
                    <span>Fat (g)</span>
                    <span>${product.nutrition.fat}</span>
                </div>
                <div class="nutrition-row">
                    <span>Protein (g)</span>
                    <span>${product.nutrition.protein}</span>
                </div>
                <div class="nutrition-row">
                    <span>Fiber (g)</span>
                    <span>${product.nutrition.fiber}</span>
                </div>
            </div>
        </div>

        <div class="daily-value-info">
            <div class="daily-value-title">Giá trị dinh dưỡng trung bình mỗi ngày</div>
            <div class="daily-value-calories">${product.nutrition.calories} KCAL</div>
        </div>

        <div class="meals-grid">
            ${product.meals.map(dayMeal => `
                <div class="meal-day-section">
                    <div class="meal-day-header">
                        <span class="day-name">${dayMeal.day.toUpperCase()} | ${dayMeal.dayName || ''}</span>
                        <span class="day-number">${dayMeal.dayNumber || ''}</span>
                    </div>
                    <div class="meal-items">
                        ${renderMealItem('Bữa sáng', dayMeal.breakfast)}
                        ${renderMealItem('Bữa trưa', dayMeal.lunch)}
                        ${renderMealItem('Bữa tối', dayMeal.dinner)}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    weeklyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Sự kiện click vào card sản phẩm
document.addEventListener('click', function(e) {
    const card = e.target.closest('.product-card, .weekly-product-card');
    if (card && !e.target.closest('.add-pill, .btn-view-detail')) {
        const productId = parseInt(card.dataset.productId);
        if (productId) {
            const product = allProductsForSuggestions.find(p => p.id === productId);
            
            // Kiểm tra xem có phải gói ăn tuần không
            if (product && product.meals) {
                showWeeklyDetail(productId);
            } else {
                showProductDetail(productId);
            }
        }
    }
});

// Sự kiện đóng modal chi tiết
const detailCloseBtn = productDetailModal?.querySelector('.product-detail-close');
const detailOverlay = productDetailModal?.querySelector('.product-detail-overlay');

if (detailCloseBtn) {
    detailCloseBtn.addEventListener('click', closeProductDetail);
}

if (detailOverlay) {
    detailOverlay.addEventListener('click', closeProductDetail);
}

// Đóng khi nhấn ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (productDetailModal && productDetailModal.classList.contains('active')) {
            closeProductDetail();
        }
        const weeklyModal = document.getElementById('weekly-detail-modal');
        if (weeklyModal && weeklyModal.classList.contains('active')) {
            weeklyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});

// Sự kiện tăng/giảm số lượng trong modal chi tiết
document.addEventListener('click', function(e) {
    // Nút giảm số lượng
    if (e.target.closest('.qty-minus')) {
        if (detailQuantity > 1) {
            detailQuantity--;
            const qtyValue = document.querySelector('.qty-value');
            if (qtyValue) qtyValue.textContent = detailQuantity;
        }
    }
    
    // Nút tăng số lượng
    if (e.target.closest('.qty-plus')) {
        detailQuantity++;
        const qtyValue = document.querySelector('.qty-value');
        if (qtyValue) qtyValue.textContent = detailQuantity;
    }
});

// Sự kiện thêm vào giỏ hàng từ modal chi tiết
const btnAddToCartDetail = document.querySelector('.btn-add-to-cart-detail');
if (btnAddToCartDetail) {
    btnAddToCartDetail.addEventListener('click', () => {
        if (currentDetailProduct) {
            // Thêm sản phẩm với số lượng đã chọn
            for (let i = 0; i < detailQuantity; i++) {
                addToCart(currentDetailProduct.id);
            }
            // Đóng modal sau khi thêm
            closeProductDetail();
        }
    });
}
    /** Lấy tất cả sản phẩm từ tất cả các danh mục để làm gợi ý */
    function populateAllProductsForSuggestions() {
        allProductsForSuggestions = [];
        for (const mainCategory in productData) {
            if (productData[mainCategory].products) {
                allProductsForSuggestions.push(...productData[mainCategory].products);
            }
        }
    }

    /** Hiển thị các gợi ý tìm kiếm */
    function showSuggestions(searchTerm) {
        if (!suggestionsContainer) return;
        suggestionsContainer.innerHTML = '';
        if (!searchTerm) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        const matchedProducts = allProductsForSuggestions
            .filter(p => p.name.toLowerCase().includes(searchTerm))
            .slice(0, 10);

        if (matchedProducts.length > 0) {
            matchedProducts.forEach(product => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.textContent = product.name;
                item.addEventListener('click', () => {
                    headerSearchInput.value = product.name;
                    suggestionsContainer.style.display = 'none';
                    updatePageContent();
                });
                suggestionsContainer.appendChild(item);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    }

    /** Vẽ thêm sản phẩm vào lưới */
    function renderMoreProducts() {
    if (!productGrid) return;
    const productsToRender = allProducts.slice(productsShownCount, productsShownCount + ITEMS_PER_LOAD);
    if (productsToRender.length === 0 && productsShownCount > 0) {
        if (viewMoreBtn) {
            viewMoreBtn.disabled = true;
            viewMoreBtn.textContent = 'Đã hiển thị tất cả sản phẩm';
        }
        return;
    }
    productsToRender.forEach((item, index) => {
        const card = document.createElement('div');
        
        // Kiểm tra xem có phải gói ăn tuần không
        if (item.meals) {
            card.className = 'weekly-product-card is-revealing';
            card.dataset.productId = item.id;
            
            card.innerHTML = `
                <div class="weekly-card-image">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="weekly-badge">${item.badge || ''}</div>
                </div>
                <div class="weekly-card-info">
                    <div class="weekly-card-price">
                        <div class="price">${new Intl.NumberFormat('vi-VN').format(item.price)}₫</div>
                        <button class="btn-view-detail">Thêm giỏ hàng</button>
                    </div>
                </div>
            `;
        } else {
            card.className = 'product-card is-revealing';
            card.dataset.productId = item.id;
            
            card.innerHTML = `<div class="card-box"><div class="card-media"><span class="calorie-tag">${item.kcal || 'N/A'} KCAL</span><img src="${item.img}" alt="${item.name}"></div><div class="card-title">${item.name}</div></div><div class="card-footer"><div class="price">${new Intl.NumberFormat('vi-VN').format(item.price)}₫</div><button class="add-pill">Thêm giỏ hàng</button></div>`;
        }
        
        setTimeout(() => { 
            productGrid.appendChild(card); 
            setTimeout(() => card.classList.remove('is-revealing'), 20); 
        }, index * 100);
    });
        productsShownCount += productsToRender.length;

        if (viewMoreBtn) {
            const hasMoreProducts = productsShownCount < allProducts.length;
            viewMoreBtn.style.display = 'block';
            viewMoreBtn.disabled = !hasMoreProducts;
            viewMoreBtn.textContent = hasMoreProducts ? 'Xem thêm sản phẩm' : 'Đã hiển thị tất cả sản phẩm';
        }
    }

    /** Cập nhật bộ lọc dropdown */
    function createFilters(mainCategoryKey) {
        const categoryData = productData[mainCategoryKey];
        if (!filterSelect || !categoryData) return;
        filterSelect.innerHTML = '<option value="all">Tất cả</option>';
        const subCategories = categoryData.subCategories || {};
        for (const key in subCategories) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = subCategories[key].name;
            filterSelect.appendChild(option);
        }
        filterSelect.style.display = Object.keys(subCategories).length > 0 ? 'block' : 'none';
    }

    /** Cập nhật toàn bộ nội dung trang (hàm chính) */
    function updatePageContent() {
    const mainCategoryKey = currentMainCategory;
    const subCategoryKey = filterSelect ? filterSelect.value : 'all';
    const categoryData = productData[mainCategoryKey];
    if (!categoryData || !productGrid) return;

    const mainSearchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const headerSearchTerm = headerSearchInput ? headerSearchInput.value.toLowerCase().trim() : '';

    let currentHero = (subCategoryKey === 'all' || !categoryData.subCategories[subCategoryKey]) 
        ? categoryData.hero 
        : categoryData.subCategories[subCategoryKey].hero;
    
    // CẬP NHẬT TITLE VÀ SUBTITLE Ở PAGE-HEADER (PHẦN TRÊN CÙNG)
    if (currentHero) {
        if (pageTitle) pageTitle.textContent = currentHero.label;
        if (pageSubtitle) pageSubtitle.textContent = currentHero.subtitle;
    }
    
    // XÓA GRID VÀ VẼ LẠI
    productGrid.innerHTML = '';
    
    // CHỈ HIỂN THỊ HERO CARD KHI KHÔNG TÌM KIẾM TỪ HEADER
    if (currentHero && !headerSearchTerm) {
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        heroCard.innerHTML = `
            <img src="${currentHero.img}" alt="${currentHero.label}" />
            <div class="hero-text">${currentHero.label}</div>
        `;
        productGrid.appendChild(heroCard);
    }
            
        // SỬA LẠI LOGIC LỌC: Nếu có tìm kiếm từ header, sẽ tìm trên TOÀN BỘ sản phẩm
        let sourceProducts = headerSearchTerm ? allProductsForSuggestions : categoryData.products;
        let filteredProducts = sourceProducts;

        // Áp dụng các bộ lọc
        if (!headerSearchTerm) { // Chỉ lọc category nếu không tìm kiếm từ header
            if (subCategoryKey !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === subCategoryKey);
            }
        }
        if (mainSearchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(mainSearchTerm));
        }
        if (headerSearchTerm) {
            filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(headerSearchTerm));
        }

        allProducts = filteredProducts;
        productsShownCount = 0;
        renderMoreProducts();
    }

    /** Hiệu ứng gợn sóng cho nút */
    function createRipple(e, button) {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    }

    /** Xử lý layout để header không bị che khuất */
    function handleDynamicContentOffset() {
        if (!header || !mainContent) return;
        function applyOffset() {
            const height = header.offsetHeight;
            mainContent.style.paddingTop = `${height}px`;
        }
        applyOffset();
        window.addEventListener('resize', applyOffset, { passive: true });
        const mo = new MutationObserver(applyOffset);
        mo.observe(header, { attributes: true, attributeFilter: ['class'], childList: true, subtree: true });
    }

    function renderFavorites() {
    const favModalBody = document.querySelector('.fav-modal-body');
    if (!favModalBody) return;
    if (favorites.length === 0) {
        favModalBody.innerHTML = '<div class="cart-empty"><h3>Chưa có sản phẩm yêu thích</h3></div>';
    } else {
        favModalBody.innerHTML = favorites.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">${new Intl.NumberFormat('vi-VN').format(item.price)}₫</div>
                    <div class="cart-item-actions">
                        <button class="btn-cart-action btn-remove-fav" data-id="${item.id}">
                            <i class="fa-solid fa-trash"></i>
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        // Gắn sự kiện xóa yêu thích
        document.querySelectorAll('.btn-remove-fav').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.currentTarget.dataset.id);
                removeFromFavorites(id);
            });
        });
    }
}

    const favLink = document.querySelector('.fav-link');
const favModal = document.getElementById('fav-modal');
if (favLink) {
    favLink.addEventListener('click', (e) => {
        e.preventDefault();
        favModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        renderFavorites();
    });
}
const favCloseBtn = favModal ? favModal.querySelector('.cart-modal-close') : null;
if (favCloseBtn) {
    favCloseBtn.addEventListener('click', () => {
        favModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// THÊM ĐOẠN NÀY - Sự kiện cho nút "Thêm tất cả vào giỏ hàng"
const btnAddAllFav = favModal ? favModal.querySelector('.btn-checkout') : null;
if (btnAddAllFav) {
    btnAddAllFav.addEventListener('click', () => {
        if (favorites.length === 0) {
            showToast('Chưa có sản phẩm yêu thích!');
            return;
        }
        
        favorites.forEach(item => {
            const existingItem = cart.find(c => c.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
        });
        
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount();
        showToast(`Đã thêm ${favorites.length} sản phẩm vào giỏ hàng!`);
        favModal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

    // =========================================================================
    // 4. GẮN KẾT SỰ KIỆN (EVENT LISTENERS)
    //=========================================================================
    
     // Sự kiện mở giỏ hàng
    if (cartLink) {
        cartLink.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }

     // Sự kiện đóng giỏ hàng
    const closeBtn = document.querySelector('.cart-modal-close');
    const overlay = document.querySelector('.cart-modal-overlay');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCart);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeCart);
    }

     // Đóng khi nhấn ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModal && cartModal.classList.contains('active')) {
            closeCart();
        }
    });
    
    if (filterSelect) filterSelect.addEventListener('change', updatePageContent);
    if (searchInput) searchInput.addEventListener('input', updatePageContent);

    if (headerSearchInput) {
        headerSearchInput.addEventListener('input', () => {
            const searchTerm = headerSearchInput.value.toLowerCase().trim();
            showSuggestions(searchTerm);
        });
        headerSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                if (suggestionsContainer) suggestionsContainer.style.display = 'none';
                updatePageContent();
            }
        });
    }

    document.addEventListener('click', function(e) {
    if (e.target && (e.target.classList.contains('add-pill') || e.target.classList.contains('btn-view-detail'))) {
        const card = e.target.closest('.product-card, .weekly-product-card');
        if (card) {
            const productId = card.dataset.productId;
            if (productId) {
                addToCart(productId);
            }
        }
    }
});

    if (viewMoreBtn) viewMoreBtn.addEventListener('click', renderMoreProducts);

    mainNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href) return;

            // Danh sách các trang menu động
            const dynamicPages = ['menu_khach_le.html', 'goi_an_tuan.html', 'goi_an_thiet_ke.html'];
            const isDynamicLink = dynamicPages.some(page => href.includes(page));

            // KIỂM TRA: Chỉ chạy logic SPA nếu link là dynamic VÀ chúng ta đã ở trên một trang có lưới sản phẩm
            if (isDynamicLink && productGrid) {
                // Ngăn trình duyệt chuyển trang
                e.preventDefault();

                // Lấy tên category từ href (ví dụ: 'goi_an_tuan' từ 'goi_an_tuan.html')
            const fileName = href.split('/').pop().split('.')[0]; // 'goi_an_tuan' hoặc 'menu_khach_le'
            let newCategoryKey = fileName.replace(/_/g, ''); // 'goiantuan' hoặc 'menukhachle'

            console.log('Switching to category:', newCategoryKey);

            // Chỉ cập nhật nếu chuyển sang một danh mục chính khác
            if (newCategoryKey !== currentMainCategory) {
                currentMainCategory = newCategoryKey;
                
                // Cập nhật active state cho menu
                mainNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Cập nhật filters và hiển thị sản phẩm
                createFilters(currentMainCategory);
                updatePageContent();
            }
        }
        // Nếu không phải dynamic link, để trình duyệt xử lý bình thường (chuyển trang)
    });
    });

    document.body.addEventListener('mousedown', function(e) {
    const button = e.target.closest('.add-pill, .view-more-btn, .btn-view-detail, .btn-add-to-cart-weekly');
    if (button) {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => createRipple(e, button), i * 120);
        }
    }
});

    // --- Logic ẩn/hiện header khi cuộn trang ---
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        if (!header) return;

        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        // 1. Thêm bóng đổ khi cuộn xuống khỏi top
        if (scrollTop > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // 2. Ẩn header khi cuộn XUỐNG và hiện ra khi cuộn LÊN
        // Chỉ ẩn khi đã cuộn qua chiều cao của chính header
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Cuộn xuống -> Ẩn header
            header.classList.add('is-hidden');
        } else {
            // Cuộn lên -> Hiện header
            header.classList.remove('is-hidden');
        }

        // Cập nhật vị trí cuộn cuối cùng
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // --- Logic cho nút menu trên di động ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            header.classList.toggle('mobile-menu-active');
            document.body.classList.toggle('no-scroll');
        });
    }

    // =========================================================================
    // 5. KHỞI TẠO TRANG
    // =========================================================================
    function initializePage() {
        handleDynamicContentOffset();
        populateAllProductsForSuggestions();
        updateCartCount();
        updateFavCount(); 
        const activeLink = document.querySelector('.main-nav a.active');
        if (activeLink) {
            const text = activeLink.textContent.toLowerCase();
            if (text.includes('gói ăn tuần')) currentMainCategory = 'goiantuan';
            if (text.includes('thiết kế riêng')) currentMainCategory = 'goianthietke';
        }
        createFilters(currentMainCategory);
        updatePageContent();
    }

    initializePage();
});


