export interface MissingList {
    name: string;
    image: string;
    province: string;
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
                province: 'bangkok'
            },
            {
                name: 'กนิษฐกาญ ใจดี',
                image: 'person',
                province: 'Chonburi'
            },
            {
                name: 'ทินกร จรุงกลิ่น',
                image: 'person',
                province: 'Chonburi'
            },
            {
                name: 'วุฒิชัย จันทร์สุวัฒน์',
                image: 'person',
                province: 'Bangkok'
            },
            {
                name: 'พันธราภรณ์ มีสวัสดิ์',
                image: 'person',
                province: 'Bangkok'
            }
        ]
    }
}