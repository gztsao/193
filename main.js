
// 這是陣列放網址圖片用使用ary[0]為預設圖片
// 處理過的資料
let ary=[];
// 設定公用變數 (重要的資料)
let aryOld = [
    
    {title:'Google',
    kind:'應用',
    poster:'./img/google_logo.svg',
    url:'https://www.google.com',
    notes: 'none',  },

    {title:'Gmail',
    kind:'應用',
    poster:'./img/gmail_logo.svg',
    url:'https://gmail.google.com',
    notes: 'none',  },

    {title:'Google翻譯',
    kind:'應用',
    poster:'./img/google_translate.svg',
    url:'https://translate.google.com/',
    notes: 'none',  },

    {title:'YouTube',
    kind:'應用',
    poster:'./img/youtube_logo.svg',
    url:'https://www.youtube.com/',
    notes: 'none',  },

    {title:'Google日曆',
    kind:'應用',
    poster:'./img/google_calendar.svg',
    url:'https://www.google.com/calendar/',
    notes: 'none',  },

    {title:'Google時間軸',
    kind:'應用',
    poster:'./img/google_map.svg',
    url:'https://timeline.google.com/',
    notes: 'none',  },

    {title:'Google地圖',
    kind:'應用',
    poster:'./img/google_map.svg',
    url:'https://www.google.com/maps/',
    notes: 'none',  },

    {title:'Google相簿',
    kind:'應用',
    poster:'./img/google_photo.svg',
    url:'https://photos.google.com/',
    notes: 'none',  },

    {title:'Google文件',
    kind:'應用',
    poster:'./img/google_docs.svg',
    url:'https://docs.google.com/',
    notes: 'none',  },

    {title:'Google試算表',
    kind:'應用',
    poster:'./img/google_sheets.svg',
    url:'https://docs.google.com/spreadsheets/',
    notes: 'none',  },

    {title:'Google簡報',
    kind:'應用',
    poster:'./img/google_slides.svg',
    url:'https://docs.google.com/presentation/',
    notes: 'none',  },

    {title:'Google硬碟',
    kind:'應用',
    poster:'./img/google_drive.svg',
    url:'https://drive.google.com/',
    notes: 'none',  },

    {title:'Google新聞(台灣)',
    kind:'應用',
    poster:'./img/googel_news.svg',
    url:'https://news.google.com/',
    notes: 'none',  },

    {title:'Google美國新聞',
    kind:'應用',
    poster:'./img/googel_news.svg',
    url:'http://news.google.com.hk/news?ned=us&hl=en',
    notes: 'none',  },

    {title:'Google中國新聞',
    kind:'應用',
    poster:'./img/googel_news.svg',
    url:'http://news.google.com.tw/nwshp?hl=zh-CN&ned=cn',
    notes: 'none',  },

    {title:'Google字型',
    kind:'應用',
    poster:'./img/google_fonts.svg',
    url:'https://fonts.google.com/',
    notes: 'none',  },

    {title:'Google快訊',
    kind:'應用',
    poster:'./img/google_alerts.svg',
    url:'https://www.google.com/alerts/',
    notes: 'none',  },

    {title:'Google趨勢',
    kind:'應用',
    poster:'./img/google_trends.png',
    url:'https://trends.google.com/',
    notes: 'none',  },

    {title:'Google財經',
    kind:'應用',
    poster:'./img/google_finance.png',
    url:'https://www.google.com/finance/',
    notes: 'none',  },

    {title:'Google帳戶',
    kind:'應用',
    poster:'./img/google_accoutn.svg',
    url:'https://www.google.com/accounts/ManageAccount?hl=zh-TW',
    notes: 'none',  },

    {title:'Google伺服器狀態',
    kind:'應用',
    poster:'./img/google_workspace.svg',
    url:'https://www.google.com/appsstatus/',
    notes: 'none',  },

    {title:'遠雄人壽',
    kind:'應用',
    poster:'./img/farglorylife.jpg',
    url:'https://www.fglife.com.tw/',
    notes: 'none',  },

    {title:'富揚資訊',
    kind:'應用',
    poster:'./img/adcom.jpg',
    url:'https://www.adcom.com.tw/',
    notes: 'none',  },

    {title:'bitwarden密碼庫',
    kind:'應用',
    poster:'./img/bitwarden.png',
    url:'https://vault.bitwarden.com/',
    notes: '網頁版密碼庫',  },

    {title:'Facebook',
    kind:'應用',
    poster:'./img/facebook.svg',
    url:'https://www.facebook.com/',
    notes: 'none',  },

    {title:'Yahoo奇摩',
    kind:'應用',
    poster:'./img/yahoo.svg',
    url:'https://tw.yahoo.com/',
    notes: 'none',  },

    {title:'Yahoo新聞',
    kind:'應用',
    poster:'./img/yahoo_news.svg',
    url:'https://tw.news.yahoo.com/',
    notes: 'none',  },

    {title:'資安月報',
    kind:'應用',
    poster:'./img/ithome_news.png',
    url:'https://www.ithome.com.tw/tags/%E8%B3%87%E5%AE%89%E6%9C%88%E5%A0%B1',
    notes: '資安月報',  },

    {title:'GitHub',
    kind:'教學',
    poster:'./img/github_logo.svg',
    url:'https://github.com/',
    notes: 'none',   },

    {title:'GitHub Desktop',
    kind:'教學',
    poster:'./img/github_desktop.svg',
    url:'https://github.com/',
    notes: 'GitHub視窗桌面同步程式',   },

    {title:'Figma',
    kind:'教學',
    poster:'./img/figma_logo.svg',
    url:'https://www.figma.com/',
    notes: '向量圖形編輯器和原型設計工具，主要基於網頁進行工作',   },

    {title:'Figma老師分享案例',
    kind:'教學',
    poster:'./img/figma_share.png',
    url:'https://www.figma.com/file/AVAQRNYRwrYryCJ71mbniE/%E5%AD%B8%E5%93%A1%E7%B7%B4%E7%BF%92%E3%80%81%E7%AF%84%E4%BE%8B%E5%8D%80?type=design&node-id=76-260&mode=design&t=kvdqn5j1RMEKV4VO-0',
    notes: 'Figma老師分享案例',   },

    {title:'網頁前端技術應用',
    kind:'教學',
    poster:'./img/gg.png',
    url:'http://gg.gg/js202311',
    notes: 'none',   },

    {title:'CodePen',
    kind:'教學',
    poster:'./img/codepen_logo.svg',
    url:'https://codepen.io/',
    notes: 'none',   },

    {title:'w3schools',
    kind:'教學',
    poster:'./img/w3schools_logo.svg',
    url:'https://www.w3schools.com/',
    notes: 'none',   },

    {title:'AI tree 尋找AI工具',
    kind:'教學',
    poster:'./img/aitree.png',
    url:'https://aitree.io/',
    notes: 'AI工具分類與報告',   },

    {title:'gamma AI報告',
    kind:'教學',
    poster:'./img/gamma_logo.png',
    url:'https://gamma.app/',
    notes: 'AI生成pdf或ppt報告',   },

    {title:'Leonardo AI生圖人像漫畫',
    kind:'教學',
    poster:'./img/leonardo_logo.svg',
    url:'https://app.leonardo.ai/',
    notes: 'AI生成圖片人像漫畫類',   },

    {title:'Lexica AI生圖人像漫畫',
    kind:'教學',
    poster:'./img/lexica_logo.png',
    url:'https://lexica.art/',
    notes: 'AI生成圖片人像漫畫類',   },

    {title:'civitai AI生圖漫畫',
    kind:'教學',
    poster:'./img/civitai.png',
    url:'https://civitai.com/',
    notes: 'AI生成圖片人像漫畫類',   },

    {title:'tensor AI生圖漫畫',
    kind:'教學',
    poster:'./img/tensor.png',
    url:'https://tensor.art/',
    notes: 'AI生成圖片人像漫畫類',   },

    {title:'CanIuse',
    kind:'教學',
    poster:'./img/caniuse.png',
    url:'https://caniuse.com/',
    notes: '查詢語法指令在不同瀏覽器是否可用',   },

    {title:'Freepik',
    kind:'教學',
    poster:'./img/freepik_logo.svg',
    url:'https://www.freepik.com',
    notes: 'Freepik免費圖庫',   },

    {title:'picsum.photos假圖產生',
    kind:'教學',
    poster:'./img/picsum.png',
    url:'https://picsum.photos/',
    notes: 'Lorem Picsum方便好用的假圖產生器',   },

    {title:'fakeimg.pl假圖產生',
    kind:'教學',
    poster:'./img/fakeimg.png',
    url:'https://fakeimg.pl/',
    notes: '就是假圖300x300方便好用的假圖產生器',   },

    {title:'CSS搖動',
    kind:'教學',
    poster:'./img/csshake.png',
    url:'https://elrumordelaluz.github.io/csshake/',
    notes: 'CSS搖動',   },

    {title:'ui-buttons按鈕設計',
    kind:'教學',
    poster:'./img/uibuttons.png',
    url:'https://ui-buttons.web.app/',
    notes: '不同的按鈕設計效果與方法',   },

    {title:'html5up下載模板',
    kind:'教學',
    poster:'./img/html5up.svg',
    url:'https://html5up.net/',
    notes: '下載漂亮的 HTML5 網站模板',   },

    {title:'各年度Top30最受歡迎的JS',
    kind:'教學',
    poster:'./img/jqueryscript.png',
    url:'https://www.jqueryscript.net/popular/2023.html',
    notes: '各年度Top30最受歡迎的JS',   },

    {title:'bestjquery最受歡迎的JS',
    kind:'教學',
    poster:'./img/bestjquery.png',
    url:'https://www.bestjquery.com/',
    notes: '最受歡迎的JS',   },

    {title:'壽司CSS選擇器遊戲',
    kind:'教學',
    poster:'./img/flukeout.png',
    url:'https://flukeout.github.io/',
    notes: 'CSS選擇器遊戲',   },

    {title:'色碼表',
    kind:'教學',
    poster:'./img/ifreesite.png',
    url:'https://www.ifreesite.com/color/web-color-code.htm',
    notes: '適合所有人的顏色',   },

    {title:'ColorReview',
    kind:'教學',
    poster:'./img/colorreview.png',
    url:'https://color.review',
    notes: '顏色中不同的對比判斷',   },


    
    {title:'台灣銀行網路銀行',
    kind:'金融',
    poster:'./img/bot_logo.svg',
    url:'https://ebank.bot.com.tw/',
    notes: '台銀活儲 046004675754',   },

    {title:'兆豐信用卡e化繳費平台',
    kind:'金融',
    poster:'./img/megabank.svg',
    url:'https://www.mega-payment.com/',
    notes: '繳款編號 51125120224426 台銀活儲 046004675754',   },

    {title:'永豐信用卡繳費網',
    kind:'金融',
    poster:'./img/sinopac_logo.svg',
    url:'https://paybill.sinopac.com/',
    notes: '台銀活儲 046004675754',   },

    {title:'台新銀行網路銀行',
    kind:'金融',
    poster:'./img/taishin_logo.svg',
    url:'https://my.taishinbank.com.tw/',
    notes: '台新薪資帳戶 2017-10-0030968-7',   },

    {title:'勞保局e化服務系統',
    kind:'金融',
    poster:'./img/bli.png',
    url:'https://edesk.bli.gov.tw/',
    notes: '查詢勞保',   },

    {title:'SpeedTest網路測速',
    kind:'偵錯',
    poster:'./img/speedtest_logo.png',
    url:'https://www.speedtest.net/',
    notes: 'none',   },

    {title:'IP地圖',
    kind:'偵錯',
    poster:'./img/ipaddress.png',
    url:'https://www.ipaddress.com/',
    notes: '顯示你的IP與目前位置',   },

    {title:'showip',
    kind:'偵錯',
    poster:'./img/showip.png',
    url:'https://showip.net/',
    notes: '顯示你的IP與目前位置',   },

    {title:'測試您的 IPv6 連線',
    kind:'偵錯',
    poster:'./img/testipv6.png',
    url:'https://test-ipv6.com/',
    notes: '可以偵測到IPV6',   },   

    {title:'GitHub 192-0955',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/192/0955123221.html',
    notes: '',   },

    {title:'GitHub 192',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/192/',
    notes: '',   },

    {title:'GitHub 193-0955',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/193/0955123221.html',
    notes: '',   },

    {title:'GitHub 193',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/193/',
    notes: '',   },

    {title:'GitHub 194-0955',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/194/0955123221.html',
    notes: '',   },

    {title:'GitHub 194',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/194/',
    notes: '',   },

    {title:'GitHub ch15',
    kind:'偵錯',
    poster:'./img/github_desktop.svg',
    url:'https://gztsao.github.io/ch15/',
    notes: '',   },

    
 ];

 /**
 * aryOld[] 單一資料欄位功能說明。
 *  {title:'Gmail',                  //欄位
 *   kind:'應用類',                  //書籤分類
 *   poster:'./img/gmail_logo.svg',  //logo
 *   url:'https://gmail.google.com', //網站網址
 *   notes: 'none'  }   ,            //註解或說明
 * 
 * 
 * 
 * 新增資料時須有完整的{title...http://aaa.....com}內的資料並且結尾要加上,

 /************************************************************ */


  // 這面這行就是告訴電腦我想要怎麼過濾aryOld[陣列]
  /* 過濾條件 function filter()  */
  /* 過濾條件 "偵錯" '教學' '應用' '金融' 字串完全相同只有一字不行  */
  /* 可以用 != 不等於  == 全等 &&(and) ||(or) 全不是 */
  /* 可用範例 " e.kind == '偵錯' || e.kind =='應用' " 結果會出現偵錯與應用 */
  /* 可用範例 (!='教學')(=="偵錯") 如果不要過濾可以(== 'XXX' || 'YYY任何字串')我也不知道為什麼可以用*/
  /* 可用範例 ( '偵錯' && '應用') 只會出現偵錯 我也不知道為什麼 */
  ary = aryOld.filter(e => e.kind == 'XXX' || 'YYY' ); //一開始先不過濾書籤
  
  //console.log("過濾後的陣列ary " + ary);

  //將所有書籤過濾分類
  function mySelectFunction(){
    let x = document.getElementById('mySelect').value;
    console.log("選到的分類為 " + x); //驗證下拉選單的值是否正確
    if (x == "全選") {
      ary = aryOld.filter(e => e.kind == 'XXX' || 'YYY' );
      init();
    } else if (x == "應用") {
      ary = aryOld.filter(e => e.kind =='應用' );
      init();
    } else if (x == "教學") {
      ary = aryOld.filter(e => e.kind =='教學' );
      init();
    } else if (x == "金融") {
      ary = aryOld.filter(e => e.kind =='金融' );
      init();
    } else if (x == "偵錯") {
      ary = aryOld.filter(e => e.kind =='偵錯' );
      init();
    }
    else { console.log("程式有錯才會出現此訊息");}
  }

    //依關鍵字搜尋aryOld[]內容產生新的ary[]
    function mySearchFunction(){
      let search=document.getElementById("mySearch").value;
      // console.log("我的搜尋關鍵字.. " + search );
      

      // 關鍵字搜尋測試 ".indexOf" "toLowerCase()"
      //filter = search.value.toUpperCase();
      //if (txtValue.toUpperCase().indexOf(filter) > -1)
      //成功>偵錯資料>> ary = aryOld.filter(e => e.kind =='偵錯' );
      //成功>全部資料>> ary = aryOld.filter(e => e.title == 'XXX' || 'YYY' );
      //成功>標題>IP地圖>>  ary = aryOld.filter(e => e.title =='IP地圖' );
      //語法成功>結果失敗>全部出現> ary = aryOld.filter(e => e.title ='IP' );
      
      //filter = search.toUpperCase(); //將小寫字改為大寫
      filter = search.toLowerCase(); //將大寫字改為小寫(預設小寫建議使用)
      //filter = search; //不改變大小寫
      
      // console.log("我的搜尋關鍵字將大寫字改為小寫.. " + filter);

      // console.log(e.title.indexOf(filter)); 
      //語法錯誤 ary = aryOld.filter(e => e.title.indexOf(filter) < -1 );
      //語法成功>結果失敗>全部出現>ary = aryOld.filter(e => e.title.indexOf(filter) >= -1 );
      //語法成功>結果失敗>全部出現>ary = aryOld.filter(e => e.title.indexOf(filter) <= -1 );
      //語法成功>結果失敗>0>ary = aryOld.filter(e => e.title.indexOf(filter) = -1 );
      //有機會成功>出現一個字符合會出現>ary = aryOld.filter(e => e.title.indexOf(filter) != -1 );
      //有機會成功(小寫環境)>大寫字無法搜尋>ary = aryOld.filter(e => e.title.indexOf(filter) != -1 );
      // ary = aryOld.filter(e => e.title.indexOf(filter) != -1 );
      // ary = aryOld.filter(e => e.title.toLowerCase().indexOf(filter) != -1 ); //方法1
      // ary = aryOld.filter(e => e.title.toLowerCase().indexOf(filter) > -1 ); //方法2
      //語法成功可以搜尋抬頭與註解// ary = aryOld.filter(e => e.title.toLowerCase().indexOf(filter) > -1 || e.notes.toLowerCase().indexOf(filter) > -1); //新方法兩個過濾
      ary = aryOld.filter(e => e.title.toLowerCase().indexOf(filter) > -1 || e.notes.toLowerCase().indexOf(filter) > -1 || e.kind.toLowerCase().indexOf(filter) > -1); //新方法三個過濾

      /*****測試要將按鈕恢復為全選（預設值）不然畫面怪怪的可能已經分類為金融*/
      // console.log("目前搜尋下拉選擇鈕值為 " + document.getElementById('mySelect').value);
      document.getElementById('mySelect').value = "全選" ;

      // console.log("我的搜尋關鍵字產生的新陣列.. " + ary );
      init();
    }

  // 選擇的圖片的按鈕id btn_id[1,2,3...] 存入公用變數中將來可用
  let pic = '';  //網站logo圖片路經// 大圖網址
  
  // 定義各函式
  function change(idx) {
    // 依點選畫面i=1 or 2 or x 變化陣列位置[ary,0,1,2...5]傳入參數改變'大圖網址(pic)'與'網站網址(url)'
    let s_title  = ary[idx].title; //標題
    let s_kind   = ary[idx].kind; //網站分類
    let s_poster = ary[idx].poster; //網站logo圖片路經
    let s_url = ary[idx].url; //網站網址
    let s_notes = ary[idx].notes; //註解說明
    
    //陣列內容ary[0,1,..到最後一筆資料]為陣列資料分別存入變數pic與變數url中給程式使用
    pic = s_poster; //網站logo圖片路經//大圖網址
    url = s_url; //網站網址
     console.log('陣列位置 ' + idx); //陣列位置
     console.log('大圖網址 ' + pic); //大圖網址
     console.log('網站網址 ' + url); //網站網址
    
    render(); //進入產生大圖函數
  }
  

  // 依按鈕圖示產生不同的變化預設為arry[0]
  function render() { //傳入變數'pic'與'url'產生1.大圖 與 2.點選後前往的網址
    // 條件為id="pic"的位置更新大圖ary[idx].poster(大圖網址)畫面
    document.getElementById('pic').src = pic;

    // 條件為id="url"的位置更新網站網址
    document.getElementById('url').href = url;

    // 條件為id="url.old"的位置更新網站網址
    document.getElementById('url.old').href = url;

    // 條件為id="qrcode"的位置更新網站網址並產生 QR code "變數rul"
    // let QRcode = "https://www.google.com"; //無效ans."eferenceError: Can't find variable: QRCode"
    document.getElementById('qrcode').innerHTML = ""; //先將qrcode清空下一行產生新qrcode

    console.log("QRCode網址為 >> " +url);
    document.getElementById('qrcode_text').innerHTML = "<p>QRCode網址為 >> " + url + "</p>";        

    //new QRCode(document.getElementById('qrcode'), url ); //方法1
    let qrcode = new QRCode(document.getElementById("qrcode"), { //方法2
      text: url,//將網址放入參數中
      width: 128,
      height: 128,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.Q //容错级别//由低到高 .L M Q H
    });

    

  }
  
  function init() {

  // 初始設定及功能執行
  // (1) 依陣列數量產生相同數量的按鈕(陣列中10筆資料依序產生10個(縮圖)產生10個(書籤))
    let str = '';     //產生全部按鈕html格式使用的字串
    let thumb = '';   //產生縮圖html格式使用的字串
    let bookmark =''; //bookmark書籤html格式產生使用的字串

    for(let i=0; i<ary.length; i++) {
      let s_title  = ary[i].title;
      let s_kind   = ary[i].kind;
      let s_poster = ary[i].poster;
      let s_url = ary[i].url;
      let s_notes = ary[i].notes;

//bookmark 雲端書籤html格式產生的方式

// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button></div>'; 
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<a id="url' + i + '"'+ i +' href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<a id="url' + i + '"'+ i +' href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<button class="kindBtn" id="kind-btn' + i + '">' + s_kind + '</button>' + '<a id="url' + i + '"'+ i +' href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<button class="kindBtn" id="kind-btn' + i + '">' + s_kind + '</button>' + '<a class="urlA" id="url-a' + i + '" href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 
bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<button class="kindBtn" id="kind-btn' + i + '">' + s_kind + '</button>' + '<a class="urlA" id="url-a' + i + '" href="'+ s_url +'" target="_blank" >前往外點</a></div>'; //不可點選kindbtn 

      //依照陣列的ID[0,1,...-到最後一筆]產生生成相對應的縮圖
      // 產生每一個按鈕的html格式
      str += '<button class="contentBtn" id="btn' + i + '">' + s_title + '</button>';
      // console.log(str);
      // 產生每一個縮圖的html格式
      thumb += '<img src="' + s_poster + '" class="thumb-Btn" id="pic' + i + '">';

    }
    document.getElementById('content').innerHTML = str;
    //依照陣列的ID(content)產生生成相對應的按鈕
    document.getElementById('thumb').innerHTML = thumb;
    //在網頁位置ID為thumb的地方依照thumb的字串內容產生生成相對應的縮圖

    //bookmark測試區
    document.getElementById("main").innerHTML = bookmark;
    // console.log(bookmark);
    //依照陣列的ID(main)產生生成相對應html

    // (2) 定義按鈕的事件
    for(let i=0; i<ary.length; i++) {
      let btn_id = 'btn' + i; //bookmark 使用變數(如btn5)定位id='btn5'使用
      let pic_id = 'pic' + i; //bookmark 使用變數(如btn5)定位id='pic5'使用
      let main_btn_id = 'main-btn' + i; //bookmark 使用變數(如main+btn5)定位id='main-btn5'使用
      let main_pic_id = 'main-pic' + i; //bookmark 使用變數(如main+pic5)定位id='main-pic5'使用
    
    //  console.log(btn_id); //查看btn_id內容
    //  console.log(main_btn_id); //查看main-btn_id內容

      document.getElementById(btn_id).onclick = function(){ change(i); }; 
      document.getElementById(pic_id).onclick = function(){ change(i); };
      //點選按鈕(btn_id)到函數change()中去更改圖片
       document.getElementById(main_btn_id).onclick = function(){ change(i); }; 
       document.getElementById(main_pic_id).onclick = function(){ change(i); };  
      //點選按鈕(id=main-btn'x' 例如main-btn5)到函數change()中去更改圖片
      
    }
      
    // (3) 第一次執行
    //使用陣列ary[i]中第i個圖片網址產生預設大圖
    change(0);
  }
  
  // 立即執行
  init();
  