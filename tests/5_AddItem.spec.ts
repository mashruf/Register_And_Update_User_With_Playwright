import { Page, test, expect } from "@playwright/test";

import { LoginPage } from "../pages/Login.page";

import jsonData from '../resources/userData.json';

import { AddItemPage } from "../pages/AddItem.page";

import { AddItemModel, Month } from "../models/addItemModel";

import { faker } from "@faker-js/faker";



test.describe("Add item to cart", () => {
    let page: Page;

    const item1 = "Pen";
    const item2 = "Note Book";

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    })


    test("Login with new password", async () => {
        await page.goto("/");

        const login = new LoginPage(page);

        let email = jsonData[jsonData.length - 1].email;

        let pass = jsonData[jsonData.length - 1].password;

        await login.doLogin(email, pass);

        await page.waitForTimeout(2000);

        await expect(page).toHaveURL('https://dailyfinance.roadtocareer.net/user');
        

    })


    test('Add item with only mandatory fields', async () => {

        const addItem = new AddItemPage(page);

        await addItem.addItemWithMandatoryFields(item1, "10");

    }
    )
    test('Add item with all fields', async () => {
        await page.goto('/user')

        const addItem = new AddItemPage(page);


        const addItemModel: AddItemModel = {
            item: item2,
            amount: "20",
            date: "2026-08-01",
            month: Month.June,
            remarks: faker.lorem.sentence(),
        }

        await addItem.addItemWithAllFields(addItemModel);
    })

    test('Assert items are added', async () => {

        await page.goto("/user");

        await expect(page.locator("tbody tr").first()).toContainText(item2);
        await expect(page.locator("tbody tr").last()).toContainText(item1);

    }
    )
})

