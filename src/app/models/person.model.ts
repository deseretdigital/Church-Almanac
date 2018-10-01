import { Location, LocationConfig } from './location.model';

export interface CallingConfig {
    uid?: string;
    stateDate?: Date | '';
    endDate?: Date | '';
    emeritus?: boolean
}

export interface PersonConfig {
    name: {
        first: string,
        last: string
    }
    death: {
        date: Date | '';
        location: LocationConfig;
    }
    birth: {
        date: Date | '';
        location: LocationConfig;
    }
    photo: string;
    bio: string;
    callings: Array<CallingConfig>;
}

export function Calling(): CallingConfig {
    return {
        uid: '',
        stateDate: '',
        endDate: '',
        emeritus: false
    }
}

export function Person(): PersonConfig {
    return {
        name: {
            first: '',
            last: ''
        },
        death: {
            date: '',
            location: Location()
        },
        birth: {
            date: '',
            location: Location()
        },
        photo: '',
        bio: '',
        callings: []
    }
}