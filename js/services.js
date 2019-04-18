let app = new Vue({
    el: '#app',
    data: {
        image: './img/services-car-goup-all.png',
        description: ' white mercedes , jeep grand cherokee srt white & Black Range Rover Piano',
        isActive: false,
        selectedVariant: 0,
        polishingClass: 'service-one',
        variants: [{
                variantId: 01,
                variantTitle: 'Ⅰ категорія',
                variantDescription: 'середній бізнес спорт купе',
                variantImage: './img/services-car-goup-var-1.png'

            },
            {
                variantId: 02,
                variantTitle: 'ⅠⅠ категорія',
                variantDescription: 'середній кросовер позашляховик',
                variantImage: './img/services-car-goup-var-2.png'
            },
            {
                variantId: 03,
                variantTitle: 'ⅠⅠⅠ категорія',
                variantDescription: 'повнорозмірний кросовер позашляховик',
                variantImage: './img/services-car-goup-var-3.png'
            }
        ],
        polishing: [{
                polishingId: 01,
                polishingTitle: 'Полірування автомобіля',
                polishingCost: 5999,
                polishingClass: 'service-one'

            },
            {
                polishingId: 02,
                polishingTitle: 'Полірування фар',
                polishingCost: 600,
                polishingClass: 'service-two'
            },
            {
                polishingId: 03,
                polishingTitle: 'Полірування вставок салону',
                polishingCost: 500,
                polishingClass: 'service-three'
            }, {
                polishingId: 04,
                polishingTitle: 'Полірування центральних стійок',
                polishingCost: 800,
                polishingClass: 'service-four'
            }
        ],
        cart: 0
    },
    methods: {
        changeCars(variantImage) {
            this.image = variantImage;
            this.isActive = !this.isActive;
            setTimeout(() => this.selectedVariant = false, 500);
        }
    }
})