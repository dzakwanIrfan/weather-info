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
    forecast: {
        forecastday: [
            {
                date: string;
                day: {
                    maxtemp_c: number;
                    mintemp_c: number;
                    condition: {
                        text: string;
                        icon: string;
                    };
                };
                hour: [
                    {
                        time: string;
                        temp_c: number;
                        condition: {
                            text: string;
                            icon: string;
                        };
                    }
                ]
            }
        ]
    }
}