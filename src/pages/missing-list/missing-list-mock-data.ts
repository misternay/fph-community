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
                name: 'supeman',
                image: 'person',
                province: 'bangkok'
            },
            {
                name: 'ironman',
                image: 'person',
                province: 'Chonburi'
            }
        ]
    }
}