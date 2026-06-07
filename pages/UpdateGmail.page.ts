import {Page} from '@playwright/test';

export class UpdateGmailPage{
    constructor(private page: Page){}


    async clickProfileIcon(){
        await this.page.locator("svg").click();
    }
    
    async clickProfile(){
        await this.page.getByRole("menuitem", {name: "Profile"}).click();
    }

    async clickEditBtn(){
        await this.page.getByRole("button", {name: "EDIT"}).click();
    }

    async fillNewEmail(newEmail: string){
        await this.page.getByRole("textbox", {name: "Email"}).fill(newEmail);
    }

    async clickUpdateBtn(){
        await this.page.getByRole("button", {name: "UPDATE"}).click();
    }

    async doUpdateGmail(newEmail: string){
        this.clickProfileIcon();
        this.clickProfile();
        this.clickEditBtn();
        this.fillNewEmail(newEmail);
        this.clickUpdateBtn();
    }

}