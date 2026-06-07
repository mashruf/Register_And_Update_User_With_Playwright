import { Page } from "@playwright/test";

export class AdminSearchUserEmailPage{
    constructor(private page: Page){}

    async searchUserEmail(email: string){
        await this.page.getByRole("textbox", {name: "Search by any field or date..."})
        .fill(email);
    }
 
}