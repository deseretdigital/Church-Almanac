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
        location: string;
    }
    birth: {
        date: Date | '';
        location: string;
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
            location: '',
        },
        birth: {
            date: '',
            location: '',
        },
        photo: '',
        bio: '',
        callings: []
    }
}