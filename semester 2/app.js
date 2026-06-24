// Database holding 8 premium products with high-resolution images
const PRODUCTS = [
  { 
    id: 1, 
    title: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones", 
    price: 348.00, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", 
    rating: "⭐⭐⭐⭐⭐" 
  },
  { 
    id: 2, 
    title: "Apple Watch Series 9 Smartwatch with Midnight Aluminum Case & Sport Band", 
    price: 399.00, 
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", 
    rating: "⭐⭐⭐⭐" 
  },
  { 
    id: 3, 
    title: "Redragon K552 Mechanical Gaming Keyboard Compact 87 Key RGB Backlit", 
    price: 42.99, 
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", 
    rating: "⭐⭐⭐⭐⭐" 
  },
  { 
    id: 4, 
    title: "Logitech G502 HERO High Performance Adjustable Wired Gaming Mouse", 
    price: 49.95, 
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80", 
    rating: "⭐⭐⭐⭐" 
  },
  { 
    id: 5, 
    title: "Apple iPhone 15 Pro Max (256GB, Natural Titanium) Premium Display", 
    price: 1199.00, 
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80", 
    rating: "⭐⭐⭐⭐⭐" 
  },
  { 
    id: 6, 
    title: "Fujifilm Instax Mini 12 Instant Camera - Pastel Blue Stylish Shell", 
    price: 79.95, 
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80", 
    rating: "⭐⭐⭐⭐" 
  },
  { 
    id: 7, 
    title: "Nintendo Switch OLED Model Console w/ White Joy-Con Handheld System", 
    price: 349.99, 
    image: "https://images.unsplash.com/photo-1566241477600-ac026ad43874?w=500&q=80", 
    rating: "⭐⭐⭐⭐⭐" 
  },
  { 
    id: 8, 
    title: "Hydro Flask Stainless Steel Wide Mouth Vacuum Insulated Water Bottle", 
    price: 44.95, 
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", 
    rating: "⭐⭐⭐⭐" 
  }
];

let cart = [];

// Dynamic creation layout loop engine targeting grid
const productsContainer = document.getElementById('products-container');

PRODUCTS.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="image-container">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-rating">${product.rating}</p>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <p class="prime-delivery"><span>✓ prime</span> Get it tomorrow</p>
            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    productsContainer.appendChild(card);
});

function addToCart(productId) {
    const item = PRODUCTS.find(p => p.id === productId);
    cart.push(item);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('items-count-label').innerText = cart.length;
    
    const cartContainer = document.getElementById('cart-items-container');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-msg">Your Amazon Cart is empty.</p>';
        document.getElementById('cart-total-price').innerText = "$0.00";
        return;
    }
    
    cartContainer.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        itemRow.innerHTML = `
        <img src="${item.image}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.title.substring(0, 22)}...</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Delete</button>
            </div>
        `;
        cartContainer.appendChild(itemRow);
    });
    
    document.getElementById('cart-total-price').innerText = `$${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your Amazon cart is empty! Add some items first.');
        return;
    }
    alert('Processing your Amazon Order! Thank you for testing your clean full screen layout.');
    cart = [];
    updateCartUI();
});