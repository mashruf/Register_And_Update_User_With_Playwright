import { Page } from "@playwright/test";

export class LogoutPage{
    constructor(private page: Page){}

    async clickProfileIcon(){
        await this.page.locator("svg").click();
    }
        

    async clickLogout(){
        await this.page.locator("li").nth(1).click();
    }


    async doLogout(){
        await this.clickProfileIcon();
        await this.clickLogout();
    }
 
}