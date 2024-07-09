import {firefox, webkit, chromium} from 'playwright-firefox' 

(async () => {
    const browser = await firefox.launch({
      headless: false
    });  
  
    // cabeçalho inserido para contornar bloqueio da bet365
    const page = await browser.newPage({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36 Edg/104.0.1293.63',
    extraHTTPHeaders: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
            'Connection': 'keep-alive',
            'Cookie': 'rmbs=3; aps03=cf=N&cg=1&cst=0&ct=28&hd=N&lng=33&oty=2&tzi=16; cc=1; qBvrxRyB=A45IeaqEAQAAWy947jhK5mBXhZKpg0wmrWpF8YvPIs8kAW3F66ISs9f9JVHIAbtW4TWucm46wH8AAEB3AAAAAA|1|1|95c2dbb2f3558a5131fcb4a3ed6ce2c4fa54a062; _ga=GA1.1.734257009.1669307460; _ga_45M1DQFW2B=GS1.1.1669307459.1.1.1669309006.0.0.0; __cf_bm=.1bioOUncIlhLl66vFpebwEu64aQgKMpmaHf4CurRZc-1673977339-0-AeuOKVMdXQmfrz6vbkvSBxvqGq1Y/U+XQPRpDpMcBbhyYIM5vIcWgPiYlDsMT2yL3zCRMpCQQuJFfcUloPxbuRU=; pstk=689A9290987C448FB07976BB33B1B4DF000003; swt=AbtPT2kmQ9ifaI6zOZfiKAovxtDVn+ZH4oIEsrB7xXPDdRLIEdT9jdKP0EdzUs4Vna7rxfCNaqjLULJ3Q8YFrcFtrBlulVQA3lWAH3REt51Mck3v',
        }
    }) 
  
    await page.goto('https://www.bet365.com/#/HO/');

    await page.getByText('Esportes Virtuais').click();
    
    // antigo caminho await page.locator('div:nth-child(3) > .vs-VirtualSplashPod_Image').click();
    await page.locator('.vs-VirtualSplashPod.vs-VirtualSplashPod-24').click();


    await page.waitForTimeout(2000)
    await page.locator('text=Resultados').first().click();
    await page.waitForTimeout(2000)
  
    const ultimo_horaRace = await page.locator('.vrr-MarketGroupOutrightRaceDescription_RaceName >> nth=0').allInnerTexts();
    const ultimo_pilotoRunner = await page.locator('.vrr-ParticipantInfo_Runner >> nth=0').allInnerTexts();
    const ultimo_pilotoRunnerOdd = await page.locator('.vrr-Price >> nth=0').allInnerTexts();

    const resultados = await page.locator('.vrr-ResultParticipant.gl-Market_General-cn1 ').allTextContents();
    const dividendos = await page.locator('.vrr-DividendParticipant.gl-Market_General-cn1').allTextContents();
  
    console.log(ultimo_horaRace[0])
    console.log(ultimo_pilotoRunner[0])
    console.log(ultimo_pilotoRunnerOdd[0])

    console.log('Resultado previsão '+resultados[0])
    console.log('Dividendo previsão '+dividendos[0])

    console.log('Resultado tricast '+resultados[1])
    console.log('Dividendo tricast '+dividendos[1])

    // sugiro como desafio pegar a imagem do capacete
    await browser.close();
  })();


