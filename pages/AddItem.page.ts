import { Page } from "@playwright/test";

import { AddItemModel } from "../models/addItemModel";


export class AddItemPage{

    constructor(private page: Page){}


    async clickAddCostBtn(){
        await this.page.getByRole("button", { name: "Add Cost" }).click();
    }

    async fillItem(item: string){
        await this.page.getByRole("textbox", {name: "Item Name"}).fill(item);
    }

    async addQuantity(){
        await this.page.getByRole("button", {name: "+"}).click();
    }

    async fillAmount(amount: string){
        await this.page.getByRole("spinbutton", {name: "Amount"}).fill(amount);
    }
    
    async fillPurchaseDate(date: string){
        await this.page.locator("#purchaseDate").fill(date);
    }

    async selectMonth(value: string){
        await this.page.getByRole("combobox", {name: "Month"}).selectOption({value: `${value}`});
    }

    async fillRemarks(remarks: string){
        await this.page.getByRole("textbox", {name: "Remarks"}).fill(remarks);
    }

    async clickSubmitBtn(){
        await this.page.getByRole("button", {name:"Submit"}).click();
    }

     async addItemWithMandatoryFields(item: string, amount: string){
        await this.clickAddCostBtn();
        await this.fillItem(item);
        await this.fillAmount(amount);
        await this.clickSubmitBtn();
    }

    async addItemWithAllFields(addItemModel: AddItemModel){
        await this.clickAddCostBtn();
        await this.fillItem(addItemModel.item);
        await this.addQuantity();
        await this.fillAmount(addItemModel.amount);
        await this.fillPurchaseDate(addItemModel.date);
        await this.selectMonth(addItemModel.month);
        await this.fillRemarks(addItemModel.remarks);
        await this.clickSubmitBtn();
    }


}

