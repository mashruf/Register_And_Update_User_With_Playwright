import fs from 'fs';
import { UserModel } from '../models/userModel';


export function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function saveJSONData(jsonObject: object, filePath: string) {

    let jsonArray = fs.readFileSync(filePath);

    let userDataArray = JSON.parse(jsonArray);

    userDataArray.push(jsonObject)

    fs.writeFileSync(filePath, JSON.stringify(userDataArray, null, 2));
}

export function updatePassword(
  filePath: string,
  email: string,
  newPassword: string
): boolean {
  const users: UserModel[] = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const user = users.find(u => u.email === email);

  if (!user) {
    return false;
  }

  user.password = newPassword;

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return true;
}



export function updateEmailwithNewGmail(
  filePath: string,
  email: string,
  newEmail: string
): boolean {
  const users: UserModel[] = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const user = users.find(u => u.email === email);

  if (!user) {
    return false;
  }

  user.email = newEmail;

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return true;
}
