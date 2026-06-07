import {Page} from '@playwright/test';


export class ResetPassword{

    constructor(private page: Page){}

    async fillNewPassword(password:string){
        await this.page.getByRole("textbox", {name: "New Password"}).fill(password);
    }

    async fillConfirmPassword(password:string){
        await this.page.getByRole("textbox", {name: "Confirm Password"}).fill(password);
    }

    async clickResetPasswordBtn(){
        await this.page.getByRole("button", {name: "RESET PASSWORD"}).click();
    }



    async doResetPassword(password:string){
        await this.fillNewPassword(password);
        await this.fillConfirmPassword(password);
        await this.clickResetPasswordBtn();
    }

}