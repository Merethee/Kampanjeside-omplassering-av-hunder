
// process bar top on scroll
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Custom cursor 

class Cursor {
  constructor() {
   this._dom = {};
   this._cursors = ["cursor_1", "cursor_2"];
   this.initHtml();
   this.initCss();
   this.initEvent();
}

initHtml() {
   let _cursor;
   const _this = this;
   this._dom["body"] = document.getElementsByTagName('body')[0];
   this._cursors.forEach(function (value) {
       _cursor = document.createElement('div');
       _cursor.className = value;
       _cursor.id = value;
       _this._dom.body.appendChild(_cursor)
       _this._dom[value] = _cursor
   });
}

initCss() {
   const style_cursor = { 
       position: 'fixed', borderRadius: '50%', transform: 'translateX(-50%) translateY(-50%)', pointerEvents: 'none', left: '100px', top: '50%' }
   const style_cursor_1 = { 
       backgroundColor: '#885151', height: '15px', width: '15px', zIndex: 99999  }
   const style_cursor_2 =  { 
       border: '3px solid #885151', height: ' 35px', width: '35px', zIndex: 99999, webkitTransition: 'all 0.3s ease-out', mozTransition: 'all 0.3s ease-out', oTransition: 'all 0.3s ease-out', msTransition: 'all 0.3s ease-out', transition: 'all 0.3s ease-out'  }

   this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_1), this._dom.cursor_1)
   this.setStylesOnElement(Object.assign({}, style_cursor, style_cursor_2), this._dom.cursor_2)
}

initEvent() {
   const _this = this;
   this._dom.body.addEventListener("mousemove", function (e) {
       let _clientX = e.clientX;
       let _clientY = e.clientY;
       let _position = { top: _clientY + "px", left: _clientX + "px" };
       _this.setStylesOnElement(_position, _this._dom.cursor_1)
       _this.setStylesOnElement(_position, _this._dom.cursor_2)
   })
}

    setStylesOnElement(styles, element) {
        Object.assign(element.style, styles);
    }
}


const _cursor = new Cursor()


// Animasjon når man er på seksjonen 

    ScrollReveal().reveal('.text-animate', { delay: 500 , duration: 1500 , distance: '20px' , origin: "bottom"});

    ScrollReveal().reveal('.paw-animate', { delay: 1000 , duration: 1500});


    // Fill bar seksjon 2

const seksjon = document.getElementById("jump_one");
const energi = document.getElementById("fill-en"); 
const stell = document.getElementById("fill-to"); 
const vennlighet = document.getElementById("fill-tre"); 
const stimuli = document.getElementById("fill-fire");


const keyframesE = [
    { width: "0" }, 
    { width: "80px" }
];
const keyframesS = [
    { width: "0" }, 
    { width: "50px" }
];

const keyframesV = [
    { width: "0" }, 
    { width: "80px" }
];

const keyframesST = [
    { width: "0" }, 
    { width: "60px" }
];
const settings = {
    duration: 3000, 
    iterations: 1,  
    fill: 'forwards'
};

let harBlittAnimert = false;

const animasjonE = energi.animate(keyframesE, settings);
const animasjonS = stell.animate(keyframesS, settings);
const animasjonV = vennlighet.animate(keyframesV, settings);
const animasjonST = stimuli.animate(keyframesST, settings);

document.onscroll = function() {


    var rect = seksjon.getBoundingClientRect();

    if(rect.top < 350 && !harBlittAnimert) { 
        animasjonE.play(); 
        animasjonS.play(); 
        animasjonV.play(); 
        animasjonST.play();

        harBlittAnimert = true;

    } 
  
}

// Alert boks for "å bli livredder"

jQuery(document).ready(function($){
    $("#dialog").hide();
    setTimeout(function(){
        $("#dialog").dialog({
            autoOpen: true
        });
    }, 95000);
});

// Video 

// window.document.onkeydown = function(e) {
//     if (!e) {
//       e = event;
//     }
//     if (e.keyCode == 27) {
//       videobox_close();
//     }
//   }
  
  function videobox_open() {
    var videoBoxVideo = document.getElementById("dog-video");
    // window.scrollTo(0, 0);
    document.getElementById('box').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    videoBoxVideo.play();
  }
  
  function videobox_close() {
    var videoBoxVideo = document.getElementById("dog-video");
    document.getElementById('box').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    videoBoxVideo.pause();
  }


  // Hover button - image change (seksjon 4)

  const hoverOnButton = document.getElementById("hover-btn");
  const imageChange = document.getElementById("bilde-endres");

  hoverOnButton.addEventListener("mouseover", function() {
     imageChange.style.filter = "grayscale(0) blur(0)";
  });

  hoverOnButton.addEventListener("mouseout", function(){
    imageChange.style.filter = "grayscale(100%) blur(3px)";
  });
