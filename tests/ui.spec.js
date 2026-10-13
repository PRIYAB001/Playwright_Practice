const{test,expect}=require('@playwright/test');

// // Open Page With browser Fixture
test('First Playwright test',async ({browser})=>
{
   const context= await browser.newContext();
   const page= await context.newPage();
 await
page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName=page.locator("input#username");
   const heading=page.getByText("ProtoCommerce Home");
   const phoneTitle=page.locator(".card-body a").first();
   await userName.type('balasubramanianpriya01@gmail.com');
   const password=page.locator('#password');
   await password.fill('Priya*123');
   const signin=page.locator('#signInBtn');
   await signin.click();
   const errorMessage= page.locator("[style*='block']");
   await errorMessage.textContent();
   console.log(errorMessage);
   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await password.fill("");
   await password.fill("Learning@830$3mK2");
   await signin.click();
   await expect(heading).toContainText("ProtoCommerce Home");
await expect(phoneTitle).toContainText("iphone");
await phoneTitle.allTextContents();
    

}
);

// Open Page With Page fixture
test('Page Playwright test',async({page})=>
{
    await page.goto("https://google.com ");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
}
);