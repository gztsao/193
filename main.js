
// 這是陣列放網址圖片用使用ary[0]為預設圖片
// 設定公用變數 (重要的資料)
let ary=[];
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

    {title:'Google帳戶',
    kind:'應用',
    poster:'./img/google_accoutn.svg',
    url:'https://www.google.com/accounts/ManageAccount?hl=zh-TW',
    notes: 'none',  },

    {title:'GitHub',
    kind:'教學',
    poster:'./img/github_logo.svg',
    url:'https://github.com/',
    notes: 'none',   },

    {title:'台新銀行網路銀行',
    kind:'金融',
    poster:'./img/taishin_logo.svg',
    url:'https://my.taishinbank.com.tw/',
    notes: 'none',   },

    {title:'SpeedTest網路測速',
    kind:'偵錯',
    poster:'./img/speedtest_logo.png',
    url:'https://www.speedtest.net/',
    notes: 'none',   },

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
  /* 過濾條件 "偵錯" '教學' '應用' '金融' 字串完全相同只有一字不行  */
  /* 可以用 != 不等於  == 全等 &&(and) ||(or) 全不是 */
  /* 可用範例 " e.kind == '偵錯' || e.kind =='應用' " 結果會出現偵錯與應用 */
  /* 可用範例 (!='教學')(=="偵錯") 如果不要過濾可以(== 'XXX' || 'YYY任何字串')我也不知道為什麼可以用*/
  /* 可用範例 ( '偵錯' && '應用') 只會出現偵錯 我也不知道為什麼 */
  ary = aryOld.filter(e => e.kind == 'XXX' || 'YYY' ); //一開始先不過濾書籤
 
  //console.log("過濾後的陣列ary " + ary);

  //測試將所有書籤過濾分類
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


  // 選擇的圖片的按鈕id btn_id[1,2,3...] 存入公用變數中將來可用
  let pic = '';  // 大圖網址
  
  // 定義各函式
  function change(idx) {
    // 依點選畫面i=1 or 2 or x 變化陣列位置[ary,0,1,2...5]傳入參數改變'大圖網址(pic)'與'網站網址(url)'
    let s_title  = ary[idx].title; //標題
    let s_kind   = ary[idx].kind; //發行年度
    let s_poster = ary[idx].poster; //圖片路經
    let s_url = ary[idx].url; //說明網址
    let s_notes = ary[idx].notes; //註解說明
    
    //陣列內容ary[0,1,..到最後一筆資料]為陣列資料分別存入變數pic與變數url中給程式使用
    pic = s_poster; //大圖網址
    url = s_url; //網站網址
     console.log('陣列位置 ' + idx); //陣列位置
     console.log('大圖網址 ' + pic); //大圖網址
     console.log('網站網址 ' + url); //網站網址
    
    render(); //進入產生大圖函數
  }
  
  function render() { //傳入變數'pic'與'url'產生1.大圖 與 2.點選後前往的網址
    // 條件為id="pic"的位置更新大圖ary[idx].poster(大圖網址)畫面
    document.getElementById('pic').src = pic;

    // 條件為id="url"的位置更新網站網址
    document.getElementById('url').href = url;

    // 條件為id="url.old"的位置更新網站網址
    document.getElementById('url.old').href = url;
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
bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<button class="kindBtn" id="kind-btn' + i + '">' + s_kind + '</button>' + '<a class="urlA" id="url-a' + i + '" href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 

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
  