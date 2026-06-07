export enum Month {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}


export interface AddItemModel{
    item: string;
    amount: string;
    date : string;
    month : string;
    remarks : string;
}