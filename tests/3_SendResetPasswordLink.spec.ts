import { expect, Page, test } from '@playwright/test';


import { SendResetPasswordLink } from '../pages/SendResetPasswordLink.page';
import jsonData from '../resources/userData.json';
import { fetchEmail } from '../services/Gmail_Data_Read.service';
import { saveJSONData } from '../utils/utils';


test('Send reset password link', async ({ page }) => {

    await page.goto("/");

    const resetPass = new SendResetPasswordLink(page);

    const latestUser = jsonData[jsonData.length - 1];

    await resetPass.doResetPassword(latestUser.email);

    await page.waitForTimeout(5000);

    let latestEmail = await fetchEmail();

    const resetToken = latestEmail.split(": ")[1];


    const data = {
        link: resetToken
    };

    
    await expect(page.getByText("Password reset link sent to your email")).toBeVisible();

    saveJSONData(data, "resources/resetPasswordLink.json");

})






