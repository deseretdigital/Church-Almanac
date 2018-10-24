interface TempleConfig {
    name: string;
    history?: string;
    announced?: Date;
    status?: {
        construction?: Boolean;
        renovation?: Boolean;
        dedicated?: Boolean;
    };
    groundbreaking?: Array<Date>;
    cornerstones?: Array<Date>;
    location?: {
        description?: string;
        address?: string;
        contact?: string;
        url?: URL;
    };
    architecture?: {
        exterior?: string;
        design?: string;
        rooms?: number;
        area?: number;
        dimensions?: string;
        architect?: string;
        supervisors?: Array<string>;
        advistor?: string;
        contractor?: string;
        committees?: {
            building?: string;
            temple?: string;
        }
        master?: string;
        manager?: string;
        director?: string;
        superintendent: string;
    }
    district?: string;
    country?: string;
    state?: string;
    area?: string;
    stakes?: Array<string>;
    dedication?: {
        date?: Date;
        person?: string;
        prayer?: string;
        rededication?: Array<Date>;
    }
}

export class Temple implements TempleConfig {
    name: string;
    constructor(config: TempleConfig) {
        return config;
    }
}