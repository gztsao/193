
// 這是陣列放網址圖片用使用[0]為預設圖片
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
  ];

  // 選擇的圖片的按鈕id btn_id[1,2,3...] 存入公用變數中將來可用
  let pic = '';  // 選擇的圖
  
  // 定義各函式
  function change(idx) {
    // 依傳入參數設定變數資料
    let s_title  = ary[idx].title;
    let s_year   = ary[idx].year;
    let s_poster = ary[idx].poster;
    let s_url = ary[idx].url;
    
    //陣列內容ary[1,2,3]為網址將網址存入變數pic中將來使用
    pic = s_poster;
    // console.log(idx);
    // console.log(pic);
    
    render();
  }
  
  function render() {
    // 更新畫面
    document.getElementById('pic').src = pic;//依照陣列中位置不同存放的不同的網址產生不同的圖片
    //網頁上id="pic"的位置依照網址產生大圖  
  }
  
  function init() {

  // 初始設定及功能執行
  // (1) 依陣列數量產生相同數量的按鈕(陣列中10個圖(網址)產生10個按鈕)
    let str = '';
    let thumb = '';
    for(let i=0; i<ary.length; i++) {
      let s_title  = ary[i].title;
      let s_year   = ary[i].year;
      let s_poster = ary[i].poster;
      let s_url = ary[i].url;
      str += '<button id="btn' + i + '">' + s_title + '</button>';
      thumb += '<img src="' + s_poster + '" class="thumb" id="pic' + i + '">';
      //按鈕的數量依照陣列的長度產生想同數量的按鈕
    }
    document.getElementById('content').innerHTML = str;
    //依照陣列的ID產生生成相對應的按鈕
    document.getElementById('thumb').innerHTML = thumb;
    
    // (2) 定義按鈕的事件
    for(let i=1; i<ary.length; i++) {
      let btn_id = 'btn' + i;
      let pic_id = 'pic' + i;
      document.getElementById(btn_id).onclick = function(){ change(i); }; 
      document.getElementById(pic_id).onclick = function(){ change(i); };
      //點選按鈕(btn_id)到函數change()中去更改圖片 
    }
      
    // (3) 第一次執行
    //使用陣列中第0個網址產生預設圖
    change(0);
  }
  
  // 立即執行
  init();
  