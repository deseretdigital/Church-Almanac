interface CallingConfig {
    name: string;
}

export class Calling implements CallingConfig {
    name: string;
    constructor(config: CallingConfig) {
        return config;
    }
}