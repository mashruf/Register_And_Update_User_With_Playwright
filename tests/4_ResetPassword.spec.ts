import {test, expect} from "@playwright/test";

import resetLink from '../resources/resetPasswordLink.json';
import jsonData from '../resources/userData.json'
import { ResetPassword } from "../pages/ResetPassword.page";
import { faker } from "@faker-js/faker";
import { updatePassword } from "../utils/utils";

test("Reset password with the reset link", async ({page})=>{

    await page.goto(resetLink[resetLink.length-1].link);

    const resetPass = new ResetPassword(page);

    let newPass = faker.internet.password();

    const email = jsonData[jsonData.length-1].email;

    await resetPass.doResetPassword(newPass);

    await expect(page.getByText("Password reset successfully")).toBeVisible();

    updatePassword("resources/userData.json",email, newPass); 
    await page.waitForTimeout(5000);

      

    
})



