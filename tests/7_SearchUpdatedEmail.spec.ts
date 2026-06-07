import { Page, test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login.page';
import { AdminSearchUserEmailPage } from '../pages/SearchUserAsAdmin.page';
import jsonData from '../resources/userData.json';

import * as dotenv from "dotenv"
dotenv.config()


test.describe("Admin search user by updated email", () => {
    let page: Page;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    })

    test("Updated user email is shown in Admin dashboard", async () => {
        await page.goto("/");

        const login = new LoginPage(page);
        await login.doLogin(process.env.email, process.env.password);
    })

    test("Search user by updated email", async () => {
        const searchUser = new AdminSearchUserEmailPage(page);
        let email = jsonData[jsonData.length-1].email;

        searchUser.searchUserEmail(email);
        await expect(page.locator("tr").locator("td").nth(2)).toContainText(email);
    })

})
