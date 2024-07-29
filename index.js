document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector("#closeBtn");
    const sideMenu = document.querySelector("#sideMenu");
    const overlay = document.querySelector("#overlay");
    const faqItems = document.querySelectorAll(".faq-item");
    const searchIcon = document.querySelectorAll(".search-icon");
    const searchBar = document.querySelector("#searchBar");
    const closeSearch = document.querySelector("#closeSearch");

    menuIcon.addEventListener("click", function() {
        sideMenu.style.left = "0";
        overlay.classList.add("active");
    });

    closeBtn.addEventListener("click", function() {
        sideMenu.style.left = "-250px";
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function() {
        sideMenu.style.left = "-250px";
        searchBar.style.top = "-100%";
        overlay.classList.remove("active");
    });

    searchIcon.forEach(icon => {
        icon.addEventListener("click", function() {
            searchBar.style.top = "0";
            overlay.classList.add("active");
        });
    });

    closeSearch.addEventListener("click", function() {
        searchBar.style.top = "-100%";
        overlay.classList.remove("active");
    });

    faqItems.forEach(item => {
        item.querySelector(".faq-question").addEventListener("click", () => {
            const answer = item.querySelector(".faq-answer");
            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
        });
    });

    // Implementazione dello scorrimento fluido e dell'evidenziazione
    const productCards = document.querySelectorAll('.product-card a');

    productCards.forEach(card => {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            const productId = this.parentElement.id;
            const productElement = document.getElementById(productId);

            if (productElement) {
                productElement.scrollIntoView({ behavior: 'smooth' });

                productElement.classList.add('highlight');
                setTimeout(() => {
                    productElement.classList.remove('highlight');
                }, 2000);
            }

            window.location.href = this.href;
        });
    });
});

// index.js
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const suggestionsBox = document.getElementById('suggestions');
    const searchIcon = document.querySelectorAll(".search-icon");
    const searchBarContainer = document.querySelector("#searchBar");
    const closeSearch = document.querySelector("#closeSearch");
    const overlay = document.querySelector("#overlay");

    const products = [
        {
            name: 'Samsung Smart TV 43"',
            price: '€343.00',
            image: 'prodotti/tv.png',
            url: 'https://amzn.to/3yNZOhj',
            keywords: ['tv', 'televisore', 'televisione', 'samsung']
        },
        {
            name: 'Huawei FreeBuds SE 2',
            price: '€39.00',
            image: 'prodotti/cuffie.png',
            url: 'https://amzn.to/4bHNdei',
            keywords: ['cuffie', 'auricolari', 'huawei', 'freebuds', 'cuffiette' ]
        },
        {
            name: 'Zanzariera Magnetica finestra',
            price: '€29.99',
            image: 'prodotti/zanzariera.png',
            url: 'https://amzn.to/4bMDm6W',
            keywords: ['zanzariera', 'finestra', 'zanzariera magnetica', 'zanzare']
        },
        {
            name: 'Dash Pods 116 Lavaggi',
            price: '€54.83',
            image: 'prodotti/Dash.png',
            url: 'https://amzn.to/4bSgpiT',
            keywords: ['Detersivo', 'Dash', 'Lavatrice' ]
        },
       
    ];

    searchIcon.forEach(icon => {
        icon.addEventListener("click", function() {
            searchBarContainer.style.top = "0";
            overlay.classList.add("active");
        });
    });

    closeSearch.addEventListener("click", function() {
        searchBarContainer.style.top = "-100%";
        overlay.classList.remove("active");
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase().trim();
        suggestionsBox.innerHTML = '';
        if (query.length > 0) {
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(query) || 
                product.keywords.some(keyword => keyword.toLowerCase().includes(query))
            );
            
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item');
                    suggestionItem.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-info">
                            <span class="product-name">${product.name}</span>
                            <span class="product-price">${product.price}</span>
                        </div>
                    `;
                    suggestionItem.addEventListener('click', () => {
                        window.location.href = product.url;
                    });
                    suggestionsBox.appendChild(suggestionItem);
                });
            } else {
                const noResults = document.createElement('div');
                noResults.classList.add('no-results');
                noResults.textContent = `Nessun risultato per "${query}"`;
                suggestionsBox.appendChild(noResults);
            }
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    searchButton.addEventListener('click', () => {
        // Implementa la logica di ricerca qui
    });
    
    document.addEventListener('click', (event) => {
        if (!searchBarContainer.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = 'none';
        }
    }); 
  
}); 




