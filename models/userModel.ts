export enum Gender{
    Male= "Male",
    Female= "Female",
}

export interface UserModel{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    gender ?: Gender; // ? means it optional. providing gender is not mandatory

}