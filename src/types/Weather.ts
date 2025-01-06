export interface Weather {
    location: {
        name: string;
        region: string;
        country: string;
        localtime: string;
    };
    current: {
        condition: {
            text: string;
            icon: string;
        };
        temp_c: number;
        feelslike_c: number;
    };
}