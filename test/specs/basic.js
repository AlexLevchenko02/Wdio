const assert = require('assert')
const menuPage = require('../page/menu.page.js')
const darkModePage = require('../page/darkMode.page.js')
const canselPage = require('../page/cansel.page.js') 
const scrollPage = require('../page/scroll.page.js') 
const testPage = require('../page/test.page.js') 
const versatilePage = require('../page/versatile.page.js') 
const autoWaitPage = require('../page/autoWait.page.js') 
const basedPage = require('../page/based.page.js') 
const nativePage = require('../page/native.page.js')
const committedPage  = require('../page/committed.page.js')  
const searchPage  = require('../page/search.page.js') 
const setWdioPage  = require('../page/setWdio.page.js') 
const clickSearchPage  = require('../page/clickSearch.page.js')
const scrollOptionsPage  = require('../page/scrollOptions.page.js')
const rootdirPage  = require('../page/rootdir.page.js')
const dotenvPage  = require('../page/dotenv.page.js') 
const hostnamePage  = require('../page/hostname.page.js')    
const portPage  = require('../page/port.page.js') 
const scrollportPage  = require('../page/scrollport.page.js')  
const httpsPage  = require('../page/https.page.js')    
const sslCertPage  = require('../page/sslCert.page.js') 
const sslKeyPage  = require('../page/sslKey.page.js')     

describe('webdriver.io v8 page', async () => {
    
    it('should click on menu', async () => {
        await browser.url('https://webdriver.io/');
        menuPage.clickBurgerButton();
        await browser.pause(1000);
        })

     it('switch light Mode', async () => {
        darkModePage.switchModes();
        await browser.pause(1000);
        })

     it('click on cansel button', async () => {
        canselPage.clickCansel();
        await browser.pause(1000);
        })

     it('scroll to functions of Wdio', async () => {
        scrollPage.scrollMethod();
        await browser.pause(1000);
        })  

    it('"Test in Real Environments" is displayed in viewPort', async () => {
        testPage.testViewPort();
        await browser.pause(1000);
        })      

    it('"Versatile and Feature Rich" is displayed in viewPort', async () => {
        versatilePage.versatileViewPort();
        await browser.pause(1000);
        })
    
    it('"Auto Wait" is displayed in viewPort', async () => {
        autoWaitPage.autoWaitViewPort();
        await browser.pause(1000);
        })

    it('"Based on Web Standards" is displayed in viewPort', async () => {
        basedPage.basedViewPort();
        await browser.pause(1000);
        })

    it('"Native Mobile Support" is displayed in viewPort', async () => {
        nativePage.nativeViewPort();
        await browser.pause(1000);
        })   

    it('"Committed Community" is displayed in viewPort', async () => {
        committedPage.committedViewPort();
        await browser.pause(1000);
        })   

    it('Ckick on search button', async () => {
        searchPage.searchClick();
        await browser.pause(1000);
        }) 

    it('Set "Wdio" in search field', async () => {
        setWdioPage.wdioSetVelue('wdio');
        await browser.pause(1000);
        })

    it('Click on search button', async () => {
        clickSearchPage.search();
        await browser.pause(1000);
        }) 
    
    it('Scroll to "Options"', async () => {
        scrollOptionsPage.scroll();
        await browser.pause(1000);
        }) 
    
    it('Show rootdir', async () => {
        rootdirPage.rootdirShow();
        await browser.pause(1000);
        }) 
    
    it('Show dotenv', async () => {
        dotenvPage.dotenvShow();
        await browser.pause(1000);
        })     
    
    it('Show hostname', async () => {
        hostnamePage.hostnameShow();
        await browser.pause(1000);
        })

    it('Show port', async () => {
        portPage.portShow();
        await browser.pause(1000);
        })    
    
    it('Show scrollport', async () => {
        scrollportPage.scrollportShow();
        await browser.pause(1000);
        }) 

    it('Show https', async () => {
        httpsPage.httpsShow();
        await browser.pause(1000);
        })

    it('Show sslCert', async () => {
        sslCertPage.sslCertShow();
        await browser.pause(1000);
        })

    it('Show sslKey', async () => {
        sslKeyPage.sslKeyShow();
        await browser.pause(4000);
        })                                 
    }
)