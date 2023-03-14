let heroHeight = document.getElementsByClassName('js-hero')[0],
    header = document.getElementsByClassName('js-header')[0];

  

      //handles header collapse. 
      (function(){
        var doc = document.documentElement;
        var w = window;
        
        
        var prevScroll = w.scrollY || doc.scrollTop;
        
        var curScroll;
        var direction = 0;
        var prevDirection = 0;
      
        var checkScroll = function() {
          
          /*
          ** Find the direction of scroll
          ** 0 - initial, 1 - up, 2 - down
          */
      
          curScroll = w.scrollY || doc.scrollTop;
          if (curScroll > prevScroll) { 
            
            //scrolled up
            direction = 2;
          }
          else if (curScroll < prevScroll) { 
            //scrolled down
            direction = 1;
          }
      
          if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
          }
          
          prevScroll = curScroll;
        };
        let tailwindHeight = header.offsetHeight;
        var toggleHeader = function(direction, curScroll) {
          if (direction === 2 && curScroll > tailwindHeight) { 
            
            //replace 52 with the height of your header in px
            header.classList.replace(`duration-700`, `duration-1000`);
            header.classList.add(`-translate-y-96`);
            prevDirection = direction;
            
            
          } 
          else if (direction === 1) {
            header.classList.replace(`duration-1000`, `duration-700`);
            header.classList.remove(`-translate-y-96`);
            prevDirection = direction;
          }
        };
      
        window.addEventListener('scroll', checkScroll);
      
      })();