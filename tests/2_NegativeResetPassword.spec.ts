import {test, expect } from "@playwright/test";

import {SendResetPasswordLink} from '../pages/SendResetPasswordLink.page'

import {faker} from '@faker-js/faker';

import { generateRandomNumber } from "../utils/utils";



test("Reset password with unregistered gmail email", async ({page})=>{
    
    page.goto("/");
    
    const sendResetLink = new SendResetPasswordLink(page);

    sendResetLink.doResetPassword(`${faker.person.firstName()}${generateRandomNumber(100,999)}@gmail.com`);

    await expect(page.getByRole("paragraph")).toContainText("Your email is not registered");
    
})

test("Reset password with invalid email address", async ({page})=>{
    
    await page.goto("/");

    const sendResetLink = new SendResetPasswordLink(page);
    
    sendResetLink.doResetPassword(`${faker.person.firstName()}${generateRandomNumber(100,999)}@lol.com`);

    await expect(page.getByRole("paragraph")).toContainText("Your email is not registered");

})

