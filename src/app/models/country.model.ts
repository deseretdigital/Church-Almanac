interface CountryConfig {
    name: string;
    history?: string;
    years?: Array<{
        year: number;
        population?: number;
        membership?: number;
        branches?: {
            wards?: number;
            missions?: number;
        },
        missions?: number;
        stake?: Date;
    }>;
}

export class Country implements CountryConfig {
    name: string;
    constructor(config: CountryConfig) {
        return config;
    }
}