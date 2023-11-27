
// 設定公用變數 (重要的資料)
let ary = [
    {title:'(1)駭客任務', 
     year:1993,
     poster:'https://www.themoviedb.org/t/p/w1280/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg' 
    },
    {title:'(2)駭客任務：重裝上陣',
     year:2003,
     poster:'https://www.themoviedb.org/t/p/w1280/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg' 
    },
    {title:'(3)駭客任務完結篇：最後戰役',
     year:2003,
     poster:'https://www.themoviedb.org/t/p/w1280/iUtIcqD8ULa7ogi0e51tDBjMqWZ.jpg' 
    },
    {title:'(4)駭客任務：復活',
     year:2021,
     poster:'https://www.themoviedb.org/t/p/w1280/8c4a8kE7PizaGQQnditMmI1xbRp.jpg' 
    },
    {title:'Google',
    year:9999,
    poster:'./img/google_logo.svg' 
   },
  ];
  let pic = '';  // 選擇的圖
  
  // 定義各函式
  function change(idx) {
    // 依傳入參數設定變數資料
    let s_title  = ary[idx].title;
    let s_year   = ary[idx].year;
    let s_poster = ary[idx].poster;
    
    pic = s_poster;
    // console.log(idx);
    // console.log(pic);
    
    render();
  }
  
  function render() {
    // 更新畫面
    document.getElementById('pic').src = pic;  
  }
  
  function init() {
    // 初始設定及功能執行
    // (1) 依陣列產生按鈕
    let str = '';
    let thumb = '';
    for(let i=0; i<ary.length; i++) {
      let s_title  = ary[i].title;
      let s_year   = ary[i].year;
      let s_poster = ary[i].poster;
      str += '<button id="btn' + i + '">' + s_title + '</button>';
      thumb += '<img src="' + s_poster + '" class="thumb" id="pic' + i + '">';
    }
    document.getElementById('content').innerHTML = str;
    document.getElementById('thumb').innerHTML = thumb;
    
    // (2) 定義按鈕的事件
    for(let i=1; i<ary.length; i++) {
      let btn_id = 'btn' + i;
      let pic_id = 'pic' + i;
      document.getElementById(btn_id).onclick = function(){ change(i); }; 
      document.getElementById(pic_id).onclick = function(){ change(i); }; 
    }
      
    // (3) 第一次執行
    change(0);
  }
  
  // 立即執行
  init();
  