
// 這是陣列放網址圖片用使用ary[0]為預設圖片
// 設定公用變數 (重要的資料)
let ary = [
    {title:'(1)駭客任務', 
     year:1993,
     poster:'https://www.themoviedb.org/t/p/w1280/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg',
     url:'https://zh.wikipedia.org/zh-tw/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD', 
    },
    {title:'(2)駭客任務：重裝上陣',
     year:2003,
     poster:'https://www.themoviedb.org/t/p/w1280/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg',
     url:'https://zh.wikipedia.org/zh-tw/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD2%EF%BC%9A%E9%87%8D%E8%A3%85%E4%B8%8A%E9%98%B5', 
    },
    {title:'(3)駭客任務完結篇：最後戰役',
     year:2003,
     poster:'https://www.themoviedb.org/t/p/w1280/iUtIcqD8ULa7ogi0e51tDBjMqWZ.jpg',
     url:'https://zh.wikipedia.org/wiki/%E9%BB%91%E5%AE%A2%E5%B8%9D%E5%9B%BD3%EF%BC%9A%E7%9F%A9%E9%98%B5%E9%9D%A9%E5%91%BD', 
    },
    {title:'(4)駭客任務：復活',
     year:2021,
     poster:'https://www.themoviedb.org/t/p/w1280/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
     url:'https://zh.wikipedia.org/wiki/%E9%A7%AD%E5%AE%A2%E4%BB%BB%E5%8B%99%EF%BC%9A%E5%BE%A9%E6%B4%BB', 
    },
    {title:'Google',
    year:9999,
    poster:'./img/google_logo.svg',
    url:'https://www.google.com', 
    },
    {title:'Gmail',
    year:9999,
    poster:'./img/gmail_logo.svg',
    url:'https://gmail.google.com', 
    },
    {title:'YouTube',
    year:9999,
    poster:'./img/youtube_logo.svg',
    url:'https://www.youtube.com/', 
    },    
/**
 * ary[] 單一資料欄位功能說明。
 *  {title:'Gmail', //欄位
 *   year:9999,     //登記年度
 *   poster:'./img/gmail_logo.svg',  //logo
 *   url:'https://gmail.google.com', //網站網址
 *  },
 * 
 * 新增資料時須有完整的{}內的資料並且結尾要加上,
 *
 */

  ];

  // 選擇的圖片的按鈕id btn_id[1,2,3...] 存入公用變數中將來可用
  let pic = '';  // 選擇的圖
  
  // 定義各函式
  function change(idx) {
    // 依點選畫面i=0變化陣列位置[ary,0,1,2...5]傳入參數變數資料
    let s_title  = ary[idx].title; //標題
    let s_year   = ary[idx].year; //發行年度
    let s_poster = ary[idx].poster; //圖片路經
    let s_url = ary[idx].url; //說明網址
    
    //陣列內容ary[0,1,..5]為網址將網址存入變數pic中將來使用
    pic = s_poster; //大圖網址
    url = s_url; //網站網址
    console.log('陣列位置 ' + idx); //陣列位置
    console.log('大圖網址 ' + pic); //大圖網址
    console.log('網站網址 ' + url); //網站網址
    
    render(); //進入產生大圖函數
  }
  
  function render() { //產生大圖函數
    // 條件為id="pic"的位置更新大圖ary[idx].poster(大圖網址)畫面
    document.getElementById('pic').src = pic;

    // 條件為id="url"的位置更新網站網址
    document.getElementById('url').href = url;

    // 條件為id="url.old"的位置更新網站網址
    document.getElementById('url.old').href = url;
  }
  
  function init() {

  // 初始設定及功能執行
  // (1) 依陣列數量產生相同數量的按鈕(陣列中10個圖(網址)產生10個按鈕)
    let str = '';
    let thumb = '';
    let ccc=''; //測試用

    for(let i=0; i<ary.length; i++) {
      let s_title  = ary[i].title;
      let s_year   = ary[i].year;
      let s_poster = ary[i].poster;
      let s_url = ary[i].url;
//test測試區
ccc = ccc + '<img src="' + s_poster + '" class="thumb-Btn" id="zzz-pic' + i + '">' + '<button class="contentBtn" id="zzz-btn' + i + '">' + s_title + '</button>' + '<br></br>'; 

//test測試區

      //依照陣列的ID產生生成相對應的縮圖

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

    //test測試區
    document.getElementById("zzz").innerHTML = ccc;
    // console.log(ccc);
    //依照陣列的ID(zzz)產生生成相對應html

    // (2) 定義按鈕的事件
    for(let i=0; i<ary.length; i++) {
      let btn_id = 'btn' + i;
      let pic_id = 'pic' + i;
      // let zzz-btn_id = 'btn' + i;
      // let zzz-pic_id = 'pic' + i;
      document.getElementById(btn_id).onclick = function(){ change(i); }; 
      document.getElementById(pic_id).onclick = function(){ change(i); };
      //點選按鈕(btn_id)到函數change()中去更改圖片
      // document.getElementById(zzz-btn_id).onclick = function(){ change(i); }; 
      // document.getElementById(zzz-pic_id).onclick = function(){ change(i); };  
      
    }
      
    // (3) 第一次執行
    //使用陣列ary[i]中第i個圖片網址產生預設大圖
    change(0);
  }
  
  // 立即執行
  init();
  