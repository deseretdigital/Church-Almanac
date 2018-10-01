export interface CountryConfig {
    history?: string;
    years?: Object;
}

export interface YearConfig {
    year: number;
    population?: number;
    membership?: number;
    branches?: {
        wards?: number;
        missions?: number;
    },
    missions?: number;
    stake?: Date | '';
}

export function Year(): YearConfig {
    return {
        year: null,
        population: null,
        membership: null,
        branches: {
            wards: null,
            missions: null
        },
        missions: null,
        stake: ''
    }
}

export function Country(): CountryConfig {
    return {
        history: '',
        years: {}
    }
}