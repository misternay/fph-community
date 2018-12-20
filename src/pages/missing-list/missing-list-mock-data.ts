export interface MissingList {
    name: string;
    image: string;
    province: string;
}

export class MockMissingList {
    static data: MissingList[] = [
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