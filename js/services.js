var app = new Vue({
    el: '#app',
    data: {
        image: './img/services-car-goup-all.png',
        description: ' white mercedes , jeep grand cherokee srt white & Black Range Rover Piano',
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
        cart: 0
    },
    methods: {
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})