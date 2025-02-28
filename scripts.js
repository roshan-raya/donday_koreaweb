// Menu Items
const menuItems = [
    { name: "Beef Bulgogi", price: "$14.99", image: "images/beef-bulgogi.jpg" },
    { name: "Bibimbap", price: "$12.99", image: "images/bibimbap.jpg" },
    { name: "Chicken Bulgogi", price: "$13.99", image: "images/chicken-bulgogi.jpg" },
];

// Load Menu with Animation
document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.getElementById("menu-list");
    menuItems.forEach((item, index) => {
        menuList.innerHTML += `
            <div class="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="card product-card">
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

    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});

// Smooth Scrolling
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});