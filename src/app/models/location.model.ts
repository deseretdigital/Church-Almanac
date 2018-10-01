export interface LocationConfig {
    street: string;
    country: string;
    state: string;
    zip: number;
}

export function Location(): LocationConfig {
    return {
        street: '',
        country: '',
        state: '',
        zip: null
    }
}