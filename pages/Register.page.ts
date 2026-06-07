import {Page} from '@playwright/test';


import { Gender, UserModel } from '../models/userModel';

export class RegisterPage{

    constructor(private page: Page){}

    async clickOnRegisterLink(){
        await this.page.getByRole("link", {name: "Register"}).click();
    }

    async fillFirstName(firstName: string){
        await this.page.getByRole("textbox", {name: "First Name"}).fill(firstName);
    }

    async fillLastName(lastName: string){
        await this.page.getByRole("textbox", {name: "Last Name"}).fill(lastName);
    }

    async fillEmail(email: string){
        await this.page.getByRole("textbox", {name: "Email"}).fill(email);
    }

    async fillPassword(password: string){
        await this.page.getByRole("textbox", {name: "Password"}).fill(password);
    }

    async fillPhoneNumber(phoneNumber: string){
        await this.page.getByRole("textbox", {name: "Phone Number"}).fill(phoneNumber);
    }

    async fillAddress(address: string){
        await this.page.getByRole("textbox", {name: "Address"}).fill(address);
    }

    
    async selectGender(gender?: Gender){
        await this.page.locator(`input[value='${gender}']`).click();
    }

    async acceptTermAndCondition(){

        await this.page.getByRole("checkbox").click();
    }

    async clickRegisterBtn(){
        await this.page.getByRole("button", { name: "REGISTER"}).click();
    }

    
    async registerUser( userModel: UserModel){
        await this.clickOnRegisterLink();
        await this.fillFirstName(userModel.firstName);
        await this.fillLastName(userModel.lastName);
        await this.fillEmail(userModel.email);
        await this.fillPassword(userModel.password);
        await this.fillPhoneNumber(userModel.phoneNumber);
        await this.fillAddress(userModel.address);
        await this.selectGender(userModel.gender);
        await this.acceptTermAndCondition();
        await this.clickRegisterBtn();
    }

}