# Test Automation Suite Using Playwright with Page Object Model

This repository contains a test automation suite using **Playwright**, written with a **Page Object Model (POM)** automate test scenarios on [Daily Finance Management System](https://dailyfinance.roadtocareer.net/).

---

## Tech Stack

- Node.js
- TypeScript
- Playwright



---

## Features Tested

- User registration
- Reading mail from the gmail account using OAuth 2.0 Playground
- Sending reset password link
- Reset password using the reset password link
- Adding items to the item list
- Update email account
- Search user by the updated email account
---

## Project Structure

<pre>
  
Register_And_Update_User_With_Playwright/
    ├── models/
    │   ├── addItemModel.ts
    │   ├── userModel.ts
    ├── pages/
    │   ├── AddItem.page.ts
    │   ├── Login.page.ts
    │   ├── Logout.page.ts
    │   ├── Register.page.ts
    │   ├── ResetPassword.page.ts
    │   ├── SearchUserAsAdmin.page.ts
    │   ├── SendResetPasswordLink.page.ts
    │   ├── UpdateGmail.page.ts
    ├── resources/
    │   ├── previousGmailAcc.json
    │   ├── resetPasswordLink.json
    │   ├── userData.json
    ├── services/
    │   ├── Gmail_Data_Read.service.ts
    ├── tests/
    │   ├── 1_Registration.spec.ts
    │   ├── 2_NegativeResetPassword.spec.ts
    │   ├── 3_SendResetPasswordLink.spec.ts
    │   ├── 4_ResetPassword.spec.ts
    │   ├── 5_AddItem.spec.ts
    │   ├── 6_UpdateGmail.spec.ts
    │   ├── 7_SearchUpdatedEmail.spec.ts
    ├── utils/
    │   └── utils.ts
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── playwright.config.ts

 </pre>

---

## ⚙️ How to Run

### 1. Clone the repository
```
git clone https://github.com/mashruf/playwright-user-management.git

cd Register_And_Update_User_With_Playwright

```

### 2. Install dependencies
```
npm install

```
### 3. Run tests

```
npx playwright test

```

After the tests finish, a report will be generated and saved in the playwright-report folder.

---

## Test cases
https://docs.google.com/spreadsheets/d/1yvU9N5HteJC8UOrVXkgIVxCY7r05SEzvX0GpR8UEo_4/edit?usp=sharing


## Demo video
https://drive.google.com/file/d/1h8Kwph3nN7uV_n6LTKwhcHlXAbX9KOx0/view?usp=sharing


## Report
<img width="1920" height="1956" alt="screencapture-localhost-9323-2026-06-09-04_06_18" src="https://github.com/user-attachments/assets/8a52451c-c928-4e46-9e9e-db578a284327" />






 

