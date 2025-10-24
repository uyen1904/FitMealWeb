/**
 * @file goi_an_tuan.js
 * Quản lý trang Gói Ăn Tuần (Standalone - Không phụ thuộc script.js)
 */

import getProductData from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    const productData = getProductData();
    const weeklyProducts = productData.goiantuan.products;
    const weeklyGrid = document.getElementById('weekly-product-grid');
    const modal = document.getElementById('weekly-detail-modal');
    const modalOverlay = modal?.querySelector('.cart-modal-overlay');
    const closeBtn = modal?.querySelector('.cart-modal-close');
    const modalBody = modal?.querySelector('.weekly-detail-body');
    const modalTitle = document.getElementById('modal-week-title');
    const addToCartBtn = modal?.querySelector('.btn-add-to-cart-full');
    const filterSelect = document.getElementById('filter-select');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const cartCountElement = document.querySelector('.cart-count');
    const toastContainer = document.getElementById('toast-container');

    let currentProduct = null;
    let filteredProducts = [...weeklyProducts];
    let productsShownCount = 0;
    const ITEMS_PER_LOAD = 8;
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // ========== CẬP NHẬT SỐ LƯỢNG GIỎ HÀNG ==========
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
            cartCountElement.classList.toggle('visible', totalItems > 0);
        }
    }

    // ========== HIỂN THỊ THÔNG BÁO ==========
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

    // ========== TẠO DROPDOWN FILTER ==========
    function createFilters() {
        if (!filterSelect) return;
        
        const subCategories = productData.goiantuan.subCategories || {};
        filterSelect.innerHTML = '<option value="all">Tất cả</option>';
        
        for (const key in subCategories) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = subCategories[key].name;
            filterSelect.appendChild(option);
        }
    }

    // ========== LỌC SẢN PHẨM THEO CATEGORY ==========
    function filterProducts() {
        const selectedCategory = filterSelect ? filterSelect.value : 'all';
        
        if (selectedCategory === 'all') {
            filteredProducts = [...weeklyProducts];
        } else {
            filteredProducts = weeklyProducts.filter(p => p.category === selectedCategory);
        }
        
        // Reset và render lại
        productsShownCount = 0;
        weeklyGrid.innerHTML = '';
        renderMoreProducts();
    }

    // ========== RENDER THÊM SẢN PHẨM ==========
    function renderMoreProducts() {
        if (!weeklyGrid) return;
        
        const productsToRender = filteredProducts.slice(
            productsShownCount, 
            productsShownCount + ITEMS_PER_LOAD
        );
        
        if (productsToRender.length === 0 && productsShownCount > 0) {
            if (viewMoreBtn) {
                viewMoreBtn.style.display = 'none';
            }
            return;
        }
        
        productsToRender.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'weekly-product-card is-revealing';
            card.dataset.productId = product.id;
            
            card.innerHTML = `
                <div class="weekly-card-image">
                    <img src="${product.img}" alt="${product.name}">
                    <div class="weekly-badge">${product.badge}</div>
                </div>
                <div class="weekly-card-info">
                    <div class="weekly-card-price">
                        <div class="price">${new Intl.NumberFormat('vi-VN').format(product.price)}₫</div>
                        <button class="btn-view-detail">
                            Thêm giỏ hàng
                        </button>
                    </div>
                </div>
            `;
            
            // Click vào card để xem chi tiết
            card.addEventListener('click', () => openDetailModal(product));
            
            // Animation delay
            setTimeout(() => {
                weeklyGrid.appendChild(card);
                setTimeout(() => card.classList.remove('is-revealing'), 20);
            }, index * 100);
        });
        
        productsShownCount += productsToRender.length;

        // Cập nhật nút "Xem thêm"
        if (viewMoreBtn) {
            const hasMoreProducts = productsShownCount < filteredProducts.length;
            viewMoreBtn.style.display = hasMoreProducts ? 'block' : 'none';
            viewMoreBtn.disabled = !hasMoreProducts;
        }
    }

    // ========== MỞ MODAL CHI TIẾT ==========
    function openDetailModal(product) {
        if (!modal || !modalBody) return;
        
        currentProduct = product;
        if (modalTitle) modalTitle.textContent = product.name;
        
        // Render nội dung chi tiết
        modalBody.innerHTML = `
            <!-- Vòng tròn dinh dưỡng -->
            <div class="nutrition-circle">
                <div class="balance-text">balance</div>
                <div class="nutrition-title">OF GOOD FAT, HIGH QUALITY PROTEIN, CARB & FIBER</div>
                <div class="nutrition-title" style="margin-top: 12px;">AVERAGE DAILY VALUE</div>
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

            <!-- Thông tin giá trị hàng ngày -->
            <div class="daily-value-info">
                <div class="daily-value-title">Giá trị dinh dưỡng trung bình mỗi ngày</div>
                <div class="daily-value-calories">${product.nutrition.calories} KCAL</div>
            </div>

            <!-- Danh sách bữa ăn theo ngày -->
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
        
        // Mở modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // ========== RENDER MỖI BỮA ĂN ==========
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

    // ========== ĐÓNG MODAL ==========
    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            currentProduct = null;
        }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('active')) {
            closeModal();
        }
    });

    // ========== THÊM VÀO GIỎ HÀNG ==========
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (currentProduct) {
                const existingItem = cart.find(item => item.id === currentProduct.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: currentProduct.id,
                        name: currentProduct.name,
                        price: currentProduct.price,
                        img: currentProduct.img,
                        kcal: currentProduct.kcal,
                        quantity: 1
                    });
                }
                
                localStorage.setItem('shoppingCart', JSON.stringify(cart));
                updateCartCount();
                showToast(`Đã thêm "${currentProduct.name}" vào giỏ hàng!`);
                closeModal();
            }
        });
    }

    // ========== SỰ KIỆN FILTER ==========
    if (filterSelect) {
        filterSelect.addEventListener('change', filterProducts);
    }

    // ========== SỰ KIỆN XEM THÊM ==========
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', renderMoreProducts);
    }

    // ========== KHỞI TẠO ==========
    updateCartCount();
    createFilters();
    renderMoreProducts();
});