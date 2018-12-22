export interface MissingList {
    name: string;
    image: string;
    province: string;
    imageToken: string;
}

export class MockMissingList {

    getMockData(): MissingList[] {
        return this.setMockData();
    }

    private setMockData(): MissingList[] {
        return [
            {
                name: 'มนัสนันท์ เบญจกิจรุ่งเรือง',
                image: 'person',
                province: 'bangkok',
                imageToken: '',
            },
            {
                name: 'กนิษฐกาญ ใจดี',
                image: 'person',
                province: 'Chonburi',
                imageToken: ''
            },
            {
                name: 'ทินกร จรุงกลิ่น',
                image: 'person',
                province: 'Chonburi',
                imageToken: ''
            },
            {
                name: 'วุฒิชัย จันทร์สุวัฒน์',
                image: 'person',
                province: 'Bangkok',
                imageToken: ''
            },
            {
                name: 'พันธราภรณ์ มีสวัสดิ์',
                image: 'person',
                province: 'Bangkok',
                imageToken: ''
            }
        ]
    }
}