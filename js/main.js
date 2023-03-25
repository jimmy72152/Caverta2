const nav = document.querySelector('nav')
const menuContainer = document.getElementById('menu_container')
const yearContainer = document.getElementById('year')
const scrollUp = document.querySelector('.scroll_up')
const aside = document.getElementById('sidebar')
const mobileSubmenu = document.querySelectorAll('.mobile_submenu')
const owlCarousel = document.querySelector('.owl-carousel')
const menu = {
    starters: [
        {
            title: 'Tomato Bruschetta',
            details: 'Tomatoes, Olive Oil, Cheese',
            price: '$4.00',
        },
        {
            title: 'Marinated Grilled Shrimp',
            details: 'Fresh Shrimp, Oive Oil, Tomato Sauce',
            price: '$7.00',
        },
        {
            title: 'Maitake Mushroom',
            details: 'Whipped Miso, Yaki Sauce, Sesame',
            price: '$10.00',
        },
        {
            title: 'Jambon Iberico',
            details: 'Smoked Tomato Aioli, Idizabal Cheese, Spiced Pine Nuts',
            price: '$10.00',
        },
        {
            title: 'Avocado & Mango Salsa',
            details: 'Avocado, Mango, Tomatoes',
            price: '$5.00',
        },
        {
            title: 'Baked Potato Skins',
            details: 'Potatoes, Oil, Garlic',
            price: '$9.00',
        },
        {
            title: 'Lobster Picante',
            details: 'Grilled Corn Elote, Queso Cotija, Chili',
            price: '$12.00',
        },
        {
            title: 'Garlic Baked Cheese',
            details: 'Finnish Squeaky Cheese, Eggplant Conserva, Black Pepper',
            price: '$12.00',
        },
    ],
    mainCourse: [
        {
            title: 'Braised Pork Chops',
            details: '4 bone-in pork chops, olive oil, garlic, onion',
            price: '$21.00',
        },
        {
            title: 'Chicken with Garlic & Tomatoes',
            details: 'Chicken, cherry tomatoes, olive oil, dry white wine',
            price: '$15.00',
        },
        {
            title: 'Sriracha Beef Skewers',
            details: 'Beef, garlic, sesame oil, vinegar',
            price: '$18.00',
        },
        {
            title: 'Charred Lamb Ribs',
            details: 'Za’atar, Turkish BBQ, Sesame Yoghurt',
            price: '$20.00',
        },
        {
            title: 'Coconut Fried Chicken',
            details: '8 chicken pieces, coconut milk, oil',
            price: '$19.00',
        },
        {
            title: 'Prime Rib',
            details: 'Rib, rosemary, black pepper, red wine',
            price: '$25.00',
        },
        {
            title: 'Crispy Tuna Fregola',
            details: 'Fregola, Baby Arugula Roasted, Green Olives, Pine Nuts',
            price: '$22.00',
        },
    ],
    soups: [
        {
            title: 'Terrific Turkey Chili',
            details: 'Turkey, oregano, tomato paste, peppers',
            price: '$10.00',
        },
        {
            title: 'Creamy Chicken & Wild Rice Soup',
            details: 'Cooked chicken, salt, butter, heavy cream',
            price: '$9.00',
        },
        {
            title: 'Italian Sausage Soup',
            details: 'Italian sausage, garlic, carrots, zucchini',
            price: '$10.00',
        },
        {
            title: 'Cream of Asparagus Soup',
            details: 'Asparagus, potato, celery, onion, pepper',
            price: '$12.00',
        },
        {
            title: 'Italian Sausage Tortellini',
            details: 'Cheese tortellini, sausage, garlic, carrots, zucchini',
            price: '$8.00',
        },
        {
            title: 'Ham and Potato Soup',
            details: 'Potatoes, ham, celery, onion, milk',
            price: '$1.00',
        },
    ],
    deserts: [
        {
            title: 'Summer Berry and Coconut Tart',
            details: 'Raspberries, blackberries, blueberries, graham cracker',
            price: '$10.00',
        },
        {
            title: 'Pumpkin Cookies Cream Cheese',
            details: 'Pumpkin, sugar, butter, eggs',
            price: '$10.00',
        },
        {
            title: 'Double Chocolate Cupcakes',
            details: 'Chocolate, eggs, vanilla, milk',
            price: '$12.00',
        },
    ],
}

const bindData = (type) => {
    let container = ''
    const index = Object.keys(menu).findIndex(a => a === type)
    bindActiveClassFromMenuItems(index)
    const data = menu[type]
    data.map((data) => {
        container += ` 
        <div class="col-md-6">
            <div class="d-flex justify-content-between align-items-start menu_item">
                <div>
                    <h3 class="title">${data?.title}</h3>
                    <p class="details">${data?.details}</p>
                </div>
                <p class="price">${data?.price}</p>
            </div>
        </div>
        `
    })
    menuContainer.classList.add('menu_breath')
    setTimeout(() => menuContainer.classList.remove('menu_breath'), 500)
    menuContainer.innerHTML = container
}

const bindActiveClassFromMenuItems = (index) => {
    for (let i = 0; i < 4; i++) {
        const element = document.querySelector('.menu_item_' + (i + 1))
        if (index === i) {
            element.classList.add('text-primary')
            continue;
        }
        element.classList.remove('text-primary')
    }

}

const bindYearInFooter = () => {
    const year = new Date().getFullYear()
    yearContainer.innerHTML = year;
}

const checkHeightToToggleNavbarClass = () => {
    window.scrollY > 50
        ? nav.classList.add('scrolled')
        : nav.classList.remove('scrolled')

    window.scrollY > 200
        ? (scrollUp.classList.remove('menu_breath'), scrollUp.classList.remove('d-none'))
        : (scrollUp.classList.add('menu_breath'), scrollUp.classList.add('d-none'))
}

const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 })
}

const toggleSidebar = (e = '') => {
    if (e === 'close') {
        aside.classList.remove('present')
        return
    }
    aside.classList.toggle('present')
}

const toggleSubmenu = (index) => {
    const dropdownMenu = mobileSubmenu[index]?.lastElementChild
    mobileSubmenu[index]?.querySelector('.d-flex')?.lastElementChild?.classList?.toggle('toggled')
    dropdownMenu.classList.toggle('d-none')
}
$(document).ready(function() {
    const owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'fadeOut',
    });
    owl.trigger('play.owl.autoplay', [4000])
});

bindData('starters')
bindYearInFooter()
document.addEventListener('scroll', checkHeightToToggleNavbarClass)
scrollUp.addEventListener('click', scrollToTop)
