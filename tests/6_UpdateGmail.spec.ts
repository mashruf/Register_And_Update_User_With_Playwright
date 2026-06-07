import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/Login.page';
import jsonData from '../resources/userData.json';
import previousEmail from '../resources/previousGmailAcc.json'
import { saveJSONData, updateEmailwithNewGmail } from '../utils/utils';
import { UpdateGmailPage } from '../pages/UpdateGmail.page';
import { generateRandomNumber } from '../utils/utils';

test("Change email account", async ({ page }) => {

    await page.goto("/");

    const login = new LoginPage(page);
    const updateGmail = new UpdateGmailPage(page);

    let email = jsonData[jsonData.length - 1].email;
    let pass = jsonData[jsonData.length - 1].password;

    await login.doLogin(email, pass);

    const data = {
        previousGmailId: email
    };

    saveJSONData(data, "resources/previousGmailAcc.json");

    let newEmail = `mashrufmahabub+${generateRandomNumber(111, 999)}@gmail.com`;

    await updateGmail.doUpdateGmail(newEmail);
    
    await page.waitForTimeout(7000);

    updateEmailwithNewGmail("resources/userData.json", email, newEmail);
})

test("Login with previous email", async ({ page }) => {

    await page.goto("/");

    const login = new LoginPage(page);

    let email = previousEmail[previousEmail.length - 1].previousGmailId;
    let pass = jsonData[jsonData.length - 1].password;

    await login.doLogin(email, pass);

    await expect(page.getByText("Invalid email or password")).toBeVisible();

})

test("Login with updated email", async ({ page }) => {

    await page.goto("/");

    const login = new LoginPage(page);

    let email = jsonData[jsonData.length - 1].email;
    let pass = jsonData[jsonData.length - 1].password;

    await login.doLogin(email, pass);

    expect(page.url()).toContain('/user');

})



