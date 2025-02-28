const menuItems = [
    { name: "Beef Bulgogi", price: "$14.99", image: "images/beef-bulgogi.jpg" },     // Update this
    { name: "Bibimbap", price: "$12.99", image: "images/bibimbap.jpg" },            // Update this
    { name: "Chicken Bulgogi", price: "$13.99", image: "images/chicken-bulgogi.jpg" } // Update this
];

// Load Menu with Animation
document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    menuItems.forEach((item, index) => {
        menuList.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card product-card animate__fadeInUp" style="animation-delay: ${index * 0.2}s;">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price}</p>
                        <a href="#" class="btn btn-accent">Order Now</a>
                    </div>
                </div>
            </div>
        `;
    });
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});