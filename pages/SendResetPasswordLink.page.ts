import {Page} from '@playwright/test';

export class SendResetPasswordLink{

    constructor(private page: Page){}

    async clickResetItHere(){
        await this.page.getByRole("link", {name: "Reset it here"}).click();
    }

    async fillEmail(email:string){
        await this.page.getByRole("textbox", {name: "Email"}).fill(email);
    }

    async clickSendResetLinkBtn(){
        await this.page.getByRole("button", {name: "SEND RESET LINK"}).click();
    }

    async doResetPassword(email: string){
        await this.clickResetItHere();
        await this.fillEmail(email);
        await this.clickSendResetLinkBtn();
    }

}