import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import fs from "fs";

let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({ 
        headless: true
    });
});
 
Before(async function () {
    context = await browser.newContext(
    //     {recordVideo: {
    //     dir: 'reports/videos/', 
    //     size: { width: 1280, height: 720 },
    //   }}
    );
    //  await context.tracing.start({ screenshots: true, snapshots: true });
    page = await context.newPage();
});

After(async function (scenario) {
    const video = page.video();
    if (scenario.result?.status === Status.FAILED) {
        const image = await page.screenshot({ 
            path: `./reports/screenshots/${scenario.pickle.name}.png`, 
            type: 'png' 
        });
        await this.attach(image, "image/png");
    }
    await page.close();
   // await context.tracing.stop({ path: `reports/tracing/${scenario.pickle.name}.zip` });
    await context.close();
    if (video) {
        const videoPath = await video.path();
        const newName = `reports/videos/${scenario.pickle.name.replace(/\s+/g, '_')}.webm`;
        
        // Rename the randomly named file to the Scenario Name
        if (fs.existsSync(videoPath)) {
            fs.renameSync(videoPath, newName);
        }
    }
});

AfterAll(async function () {
    await browser.close();
});

export { page, browser };