export interface MissingDateList {
    today: MissingList[];
    yesterday: MissingList[];
    monthago: MissingList[];
}

export interface MissingList {
    name: string;
    image: string;
    province: string;
    imageToken: string;
}

export class MockMissingList {

    getMockData(): MissingDateList {
        return this.setMockData();
    }

    private setMockData(): MissingDateList {
        return {
            today: [
                {
                    name: 'มนัสนันท์ เบญจกิจรุ่งเรือง',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'bangkok',
                    imageToken: '',
                },
                {
                    name: 'กนิษฐกาญ ใจดี',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'ทินกร จรุงกลิ่น',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'วุฒิชัย จันทร์สุวัฒน์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                },
                {
                    name: 'พันธราภรณ์ มีสวัสดิ์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                }
            ],
            yesterday: [
                {
                    name: 'มนัสนันท์ เบญจกิจรุ่งเรือง',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'bangkok',
                    imageToken: '',
                },
                {
                    name: 'กนิษฐกาญ ใจดี',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'ทินกร จรุงกลิ่น',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'วุฒิชัย จันทร์สุวัฒน์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                },
                {
                    name: 'พันธราภรณ์ มีสวัสดิ์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                }
            ],
            monthago: [
                {
                    name: 'มนัสนันท์ เบญจกิจรุ่งเรือง',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'bangkok',
                    imageToken: '',
                },
                {
                    name: 'กนิษฐกาญ ใจดี',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'ทินกร จรุงกลิ่น',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Chonburi',
                    imageToken: ''
                },
                {
                    name: 'วุฒิชัย จันทร์สุวัฒน์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                },
                {
                    name: 'พันธราภรณ์ มีสวัสดิ์',
                    image: 'assets/imgs/image-empty.jpg',
                    province: 'Bangkok',
                    imageToken: ''
                }]
        }
    }
}