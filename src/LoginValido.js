const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require('selenium-webdriver/chrome');

(async function loginTest() {
    const options = new chrome.Options();
    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try {
        // acessa a página de login
        await driver.get("https://www.saucedemo.com/");
        await driver.wait(until.elementLocated(By.id('user-name')), 10000);

        // digita o nome de usuário
        await driver.findElement(By.id("user-name")).sendKeys("standard_user");

        // digita a senha
        await driver.findElement(By.id("password")).sendKeys("secret_sauce");

        // clica no botão de login
        await driver.findElement(By.name("login-button")).click();

        // a página inicial de produtos é exbida
        await driver.wait(until.elementLocated(By.className('title')), 10000);
        const tituloPagina = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(tituloPagina, "Products");
        console.log("Login bem-sucedido.");

    } catch (error) {
        console.log("Aconteceu um erro", error.message);
    }
    
    finally {
        await driver.quit();
    }
})();
