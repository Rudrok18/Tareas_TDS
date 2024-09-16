interface UserAddress {
    street: string;
}

export interface User {
    id?: string;
    name: string;
    email?: string;
    password?: string;
    address?: UserAddress;
    role: string;
}