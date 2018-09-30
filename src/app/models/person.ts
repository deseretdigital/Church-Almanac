interface PersonConfig {
    name: {
        first: string,
        last: string
    }
    death?: {
        date?: Date;
        location?: string;
    }
    birth?: {
        date?: Date;
        location?: string;
    }
    photo?: string;
    bio?: string;
    callings?: Array<{
        uid: string;
        stateDate?: Date;
        endDate?: Date;
        emeritus?: boolean
    }>;
}

export class Person implements PersonConfig {
    name: {
        first: string,
        last: string;
    } 
    constructor(config: PersonConfig) {
        return config;
    }
}