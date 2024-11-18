export type UserRegister = {
    name: string,
    email: string,
    password: string,
    height: number,
    weight: number,
    age: string
};

export type UserLogin = {
    email: string,
    password: string
};