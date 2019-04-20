let app = new Vue({
    el: '#app',
    data: {
        image: './img/services-car-goup-all.png',
        description: ' white mercedes , jeep grand cherokee srt white & Black Range Rover Piano',
        isActive: false,
        selectedVariant: 0,
        polishingClass: 'service-one',
        selected: undefined,
        variants: [{
                variantId: 1,
                variantTitle: 'Ⅰ категорія',
                variantDescription: 'середній бізнес спорт купе',
                variantImage: './img/services-car-goup-var-1.png'

            },
            {
                variantId: 2,
                variantTitle: 'ⅠⅠ категорія',
                variantDescription: 'середній кросовер позашляховик',
                variantImage: './img/services-car-goup-var-2.png'
            },
            {
                variantId: 3,
                variantTitle: 'ⅠⅠⅠ категорія',
                variantDescription: 'повнорозмірний кросовер позашляховик',
                variantImage: './img/services-car-goup-var-3.png'
            }
        ],
        polishing: [{
                polishingId: 01,
                polishingTitle: 'Полірування автомобіля',
                polishingCost: 5999,
                polishingCostVar1: 6999,
                polishingCostVar2: 8499,
                polishingClass: 'service-one'

            },
            {
                polishingId: 02,
                polishingTitle: 'Полірування фар',
                polishingCost: 600,
                polishingCostVar1: 700,
                polishingCostVar2: 800,
                polishingClass: 'service-two'
            },
            {
                polishingId: 03,
                polishingTitle: 'Полірування вставок салону',
                polishingCost: 500,
                polishingCostVar1: 600,
                polishingCostVar2: 700,
                polishingClass: 'service-three'
            }, {
                polishingId: 04,
                polishingTitle: 'Полірування центральних стійок',
                polishingCost: 800,
                polishingCostVar1: 900,
                polishingCostVar2: 1000,
                polishingClass: 'service-four'
            }
        ],
        cleaners: [{
                cleanersId: 05,
                cleanersTitle: 'Хімчистка',
                cleanersCost: 1999,
                cleanersCostVar1: 2499,
                cleanersCostVar2: 3199,
                cleanersClass: 'service-five'

            },
            {
                cleanersId: 06,
                cleanersTitle: 'Хімчистка колесних арок, підвіски, дисків',
                cleanersCost: 800,
                cleanersCostVar1: 700,
                cleanersCostVar2: 800,
                cleanersClass: 'service-six'
            },
            {
                cleanersId: 07,
                cleanersTitle: 'Хімчистка передніх сидінь',
                cleanersCost: 275,
                cleanersCostVar1: 330,
                cleanersCostVar2: 385,
                cleanersClass: 'service-seven'
            }, {
                cleanersId: 08,
                cleanersTitle: 'Хімчистка задніх сидінь',
                cleanersCost: 495,
                cleanersCostVar1: 605,
                cleanersCostVar2: 660,
                cleanersClass: 'service-eight'
            }
        ],
        WaxCovers: [{
                WaxCoversId: 09,
                WaxCoversTitle: 'Покриття твердим універсальним воском Soft 99',
                WaxCoversCost: 1200,
                WaxCoversCostVar1: 1300,
                WaxCoversCostVar2: 1400,
                WaxCoversClass: 'service-nine'

            },
            {
                WaxCoversId: 10,
                WaxCoversTitle: 'Рідке скло',
                WaxCoversCost: 3000,
                WaxCoversCostVar1: 0,
                WaxCoversCostVar2: 0,
                WaxCoversClass: 'service-ten'
            }

        ],
        ceramicCoating: [{
            ceramicCoatingId: 11,
            ceramicCoatingCost: 12999,
            ceramicCoatingCostVar1: 14499,
            ceramicCoatingCostVar2: 15999
        }],
        PreSalePreparations: [{
            PreSalePreparationsId: 12,
            PreSalePreparationsCost: 1100,
            PreSalePreparationsCostVar1: 1200,
            PreSalePreparationsCostVar2: 1300
        }],

        additional: [{
                additionalId: 13,
                additionalTitle: 'Реставнація подряпин на кузові',
                additionalCost: 130,
                additionalCostHigh: 250,
                fixedRange: true,
                additionalClass: 'service-13'

            },
            {
                additionalId: 14,
                additionalTitle: 'Перешиття шкіряних деталей салону',
                additionalCost: 500,
                additionalCostHigh: 3000,
                fixedRange: true,
                additionalClass: 'service-14'
            },
            {
                additionalId: 15,
                additionalTitle: 'Антидощ',
                additionalCost: 600,
                additionalCostHigh: 1200,
                fixedRange: true,
                additionalClass: 'service-15'
            },
            {
                additionalId: 16,
                additionalTitle: 'Мийка мотору парою',
                additionalCost: 500,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-16'
            },
            {
                additionalId: 17,
                additionalTitle: 'Шумоізоляція',
                additionalCost: 330,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                dollar: true,
                additionalClass: 'service-17'
            },
            {
                additionalId: 18,
                additionalTitle: 'Видалення запахів Бактерецидна обробка',
                additionalCost: 500,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-18'
            },
            {
                additionalId: 19,
                additionalTitle: 'Видалення вмятин без покраски PDR',
                additionalCost: 0,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-19'
            },
            {
                additionalId: 20,
                additionalTitle: 'Озонація',
                additionalCost: 1000,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-20'
            },
            {
                additionalId: 21,
                additionalTitle: 'Очистка кондиціонера',
                additionalCost: 1200,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-21'
            },
            {
                additionalId: 22,
                additionalTitle: 'Чистка дисків',
                additionalCost: 250,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                perItem: true,
                additionalClass: 'service-22'
            },
            {
                additionalId: 23,
                additionalTitle: 'Керамічне покриття сидінь',
                additionalCost: 500,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                perItem: true,
                additionalClass: 'service-23'
            },
            {
                additionalId: 24,
                additionalTitle: 'Озонація',
                additionalCost: 1000,
                additionalCostVar1: 0,
                additionalCostVar2: 0,
                additionalClass: 'service-24'
            }
        ]

    },
    methods: {
        changeCars(variantImage) {
            this.image = variantImage;
            // this.isActive = !this.isActive;
            // setTimeout(() => this.selectedVariant = false, 500);
        }
    }
})