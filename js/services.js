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
        cleaners: [{
                cleanersId: 05,
                cleanersTitle: 'Хімчистка',
                cleanersCost: 1999,
                cleanersClass: 'service-five'

            },
            {
                cleanersId: 06,
                cleanersTitle: 'Хімчистка колесних арок, підвіски, дисків',
                cleanersCost: 800,
                cleanersClass: 'service-six'
            },
            {
                cleanersId: 07,
                cleanersTitle: 'Хімчистка передніх сидінь',
                cleanersCost: 275,
                cleanersClass: 'service-seven'
            }, {
                cleanersId: 08,
                cleanersTitle: 'Хімчистка задніх сидінь',
                cleanersCost: 495,
                cleanersClass: 'service-eight'
            }
        ],
        WaxCovers: [{
                WaxCoversId: 09,
                WaxCoversTitle: 'Покриття твердим універсальним воском Soft 99',
                WaxCoversCost: 1200,
                WaxCoversClass: 'service-nine'

            },
            {
                WaxCoversId: 10,
                WaxCoversTitle: 'Рідке скло',
                WaxCoversCost: 3000,
                WaxCoversClass: 'service-ten'
            }

        ],
        CeramicCoating: [{
            CeramicCoatingId: 11,
            CeramicCoatingTitle: 'Керамічне покриття',
            CeramicCoatingTitle: 'Покриття твердим універсальним воском Soft 99',
            CeramicCoatingCost: 1200,
            CeramicCoatingClass: 'service-eleven'
        }],

        additional: [{
                additionalId: 13,
                additionalTitle: 'Реставнація подряпин на кузові',
                additionalCost: 130,
                additionalClass: 'service-13'

            },
            {
                additionalId: 14,
                additionalTitle: 'Перешиття шкіряних деталей салону',
                additionalCost: 500,
                additionalClass: 'service-14'
            },
            {
                additionalId: 15,
                additionalTitle: 'Антидощ',
                additionalCost: 600,
                additionalClass: 'service-15'
            },
            {
                additionalId: 16,
                additionalTitle: 'Мийка мотору парою',
                additionalCost: 500,
                additionalClass: 'service-16'
            },
            {
                additionalId: 17,
                additionalTitle: 'Шумоізоляція',
                additionalCost: 330,
                dollar: true,
                additionalClass: 'service-17'
            },
            {
                additionalId: 18,
                additionalTitle: 'Видалення запахів Бактерецидна обробка',
                additionalCost: 500,
                additionalClass: 'service-18'
            },
            {
                additionalId: 19,
                additionalTitle: 'Видалення вмятин без покраски PDR',
                additionalCost: 0,
                additionalClass: 'service-19'
            },
            {
                additionalId: 20,
                additionalTitle: 'Озонація',
                additionalCost: 1000,
                additionalClass: 'service-20'
            },
            {
                additionalId: 21,
                additionalTitle: 'Очистка кондиціонера',
                additionalCost: 1200,
                additionalClass: 'service-21'
            },
            {
                additionalId: 22,
                additionalTitle: 'Чистка дисків',
                additionalCost: 250,
                perItem: true,
                additionalClass: 'service-22'
            },
            {
                additionalId: 23,
                additionalTitle: 'Керамічне покриття сидінь',
                additionalCost: 500,
                perItem: true,
                additionalClass: 'service-23'
            },
            {
                additionalId: 24,
                additionalTitle: 'Озонація',
                additionalCost: 1000,
                additionalClass: 'service-24'
            }
        ]

    },
    methods: {
        changeCars(variantImage) {
            this.image = variantImage;
            this.isActive = !this.isActive;
            setTimeout(() => this.selectedVariant = false, 500);
        }
    }
})