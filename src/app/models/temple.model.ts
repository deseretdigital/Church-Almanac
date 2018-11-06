export interface TempleConfig {
    name: string;
    status?: number;
    description?: string;
    location?: string;
    street1?: string;
    street2?: string;
    state?: string;
    country?: string;
    phone?: number;
    email?: string;
    dedicator?: string;
    prayer?: string;
    dates?: Array<{
        event?: string;
        date?: Date;
    }>;
    architecture?: {
        exterior?: string;
        design?: string;
        rooms?: number;
        area?: number;
        dimensions?: string;
        architect?: string;
        supervisor?: string;
        contractor?: string;
        advisor?: string;
        buildingCommittee?: string;
        builder?: string;
        templeCommittee?: string;
        project?: {
            manager?: string;
            director?: string;
            superintendent?: string;
        };
    };
}

export class Temple implements TempleConfig {
    name: string;
    constructor(config: TempleConfig) {
        return config;
    }
}