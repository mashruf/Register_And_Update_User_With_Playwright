import { Page } from "@playwright/test";

export class LoginPage{
    constructor(private page: Page){}

    async fillEmail(email: string){
        await this.page.getByRole("textbox", {name: "Email"}).fill(email);
    }

    async fillPassword(password: string){
        await this.page.getByRole("textbox", {name: "Password"}).fill(password);
    }

    async clickLoginBtn(){
        await this.page.getByRole("button", {name: "LOGIN"}).click();
    }

    async doLogin(email:string, password:string){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginBtn();
    }


}