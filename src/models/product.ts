export type Product = {
    _id?: string | undefined;
    UPC: string;
    name: string;
    brand: {
        _id?: string | undefined;
        name: string;
        code: string;
    };
    price: {
        current: {
            value: number;
        };
        currency: string;
    };
    availability: {
        stock: number;
    };
    variants: {
        UPC: string;
        name: string;
        brand: {
            _id?: string | undefined;
            name: string;
            code: string;
        };
        price: {
            current: {
                value: number;
            };
            currency: string;
        };
        availability: {
            stock: number;
        };
    }[];
}