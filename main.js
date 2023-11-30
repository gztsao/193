
// 這是陣列放網址圖片用使用ary[0]為預設圖片
// 設定公用變數 (重要的資料)
let ary = [
    
    {title:'Google',
    kind:'應用類',
    poster:'./img/google_logo.svg',
    url:'https://www.google.com', 
    },
    {title:'Gmail',
    kind:'應用類',
    poster:'./img/gmail_logo.svg',
    url:'https://gmail.google.com', 
    },
    {title:'YouTube',
    kind:'應用類',
    poster:'./img/youtube_logo.svg',
    url:'https://www.youtube.com/', 
    },    
/**
 * ary[] 單一資料欄位功能說明。
 *  {title:'Gmail', //欄位
 *   kind:'應用類',     //登記年度
 *   poster:'./img/gmail_logo.svg',  //logo
 *   url:'https://gmail.google.com', //網站網址
 *  },
 * 
 * 新增資料時須有完整的{title...http://aaa.....com}內的資料並且結尾要加上,
 *
 */

  ];

  // 選擇的圖片的按鈕id btn_id[1,2,3...] 存入公用變數中將來可用
  let pic = '';  // 大圖網址
  
  // 定義各函式
  function change(idx) {
    // 依點選畫面i=1 or 2 or x 變化陣列位置[ary,0,1,2...5]傳入參數改變'大圖網址(pic)'與'網站網址(url)'
    let s_title  = ary[idx].title; //標題
    let s_kind   = ary[idx].kind; //發行年度
    let s_poster = ary[idx].poster; //圖片路經
    let s_url = ary[idx].url; //說明網址
    
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

//bookmark 雲端書籤html格式產生的方式
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button></div>' + '<br></br>'; 
// bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button></div>'; 
bookmark = bookmark + '<div class="bookmark-item"><img src="' + s_poster + '" class="thumb-Btn" id="main-pic' + i + '">' + '<button class="contentBtn" id="main-btn' + i + '">' + s_title + '</button>' + '<a id="url"'+ i +' href="'+ s_url +'" target="_blank" >前往外點</a></div>'; 


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
    console.log(bookmark);
    //依照陣列的ID(main)產生生成相對應html

    // (2) 定義按鈕的事件
    for(let i=0; i<ary.length; i++) {
      let btn_id = 'btn' + i; //bookmark 使用變數(如btn5)定位id='btn5'使用
      let pic_id = 'pic' + i; //bookmark 使用變數(如btn5)定位id='pic5'使用
      let main_btn_id = 'main-btn' + i; //bookmark 使用變數(如main+btn5)定位id='main-btn5'使用
      let main_pic_id = 'main-pic' + i; //bookmark 使用變數(如main+pic5)定位id='main-pic5'使用
    
      console.log(btn_id); //查看btn_id內容
      console.log(main_btn_id); //查看main-btn_id內容

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
  