import {test, expect} from '@playwright/test';

import { RegisterPage } from '../pages/Register.page';
import { Gender, UserModel } from '../models/userModel';
import { generateRandomNumber, saveJSONData } from '../utils/utils';

import {faker} from '@faker-js/faker';

import { fetchEmail } from '../services/Gmail_Data_Read.service';



test('User registration', async ( {page} )=>{

    await page.goto("https://dailyfinance.roadtocareer.net/login");

    
    const registrationPage = new RegisterPage(page);

    
    const userModel: UserModel = {
        
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),

        email: `mashrufmahabub+${generateRandomNumber(1000,9999)}@gmail.com`,

        password: faker.internet.password(),

        phoneNumber: `015${generateRandomNumber(10000000,99999999)}`,

        address: faker.location.city(),

        gender: Gender.Male,

    }

    await registrationPage.registerUser(userModel);

    await expect(page.getByRole("alert")).toContainText("registered successfully!");

    await page.waitForTimeout(5000);
    
    let latestEmail = await fetchEmail();

    console.log(latestEmail);

    expect( latestEmail ).toContain("Welcome to our platform");
    
    saveJSONData(userModel, "./resources/userData.json")
    
})

