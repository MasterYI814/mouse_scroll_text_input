

//declare all the variable and buttons
var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','backspace'];
var counter=0;
var tmp;
var a =document.getElementById("a");
var b =document.getElementById("b");
var c =document.getElementById("c");
var d =document.getElementById("d");
var e =document.getElementById("e");
var f =document.getElementById("f");
var g =document.getElementById("g");
var h =document.getElementById("h");
var i =document.getElementById("i");
var j =document.getElementById("j");
var k =document.getElementById("k");
var l =document.getElementById("l");
var m =document.getElementById("m");
var n =document.getElementById("n");
var o =document.getElementById("o");
var p =document.getElementById("p");
var q =document.getElementById("q");
var r =document.getElementById("r");
var s =document.getElementById("s");
var t =document.getElementById("t");
var u =document.getElementById("u");
var v =document.getElementById("v");
var w =document.getElementById("w");
var x =document.getElementById("x");
var y =document.getElementById("y");
var z =document.getElementById("z");
var backspace =document.getElementById("backspace");

a.style.background="#AAEFF1"; //initial color shown on the buttons

        var scrollableElement = document.getElementById('whale');
        scrollableElement.addEventListener('wheel', findScrollDirectionOtherBrowsers);

// record a mouse scrolling event
    	function findScrollDirectionOtherBrowsers(event){
        	var delta;
        	if (event.wheelDelta){
            	delta = event.wheelDelta;
            }else{
            	delta = -1 *event.deltaY;
            }
        	if (delta < 0){
              //console.log(alphabet[counter--]);
              counter++;
              if(counter>26)
              {
                counter=0;
              }
              this.value=alphabet[counter];
              //var tmp=alphabet[counter];


            }else {
              //console.log(alphabet[counter++]);
              counter--;
              if(counter<0)
              {
                counter=26;
              }

              this.value=alphabet[counter];

            }
            if(alphabet[counter]=="a")  // start to change state when user is scrolling
            {
              a.style.background="#AAEFF1";
              b.style.background="#FFFFFF";
              backspace.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="b")
            {
              b.style.background="#AAEFF1";
              a.style.background="#FFFFFF";
              c.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="c")
            {
              c.style.background="#AAEFF1";
              b.style.background="#FFFFFF";
              d.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="d")
            {
              d.style.background="#AAEFF1";
              c.style.background="#FFFFFF";
              e.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="e")
            {
              e.style.background="#AAEFF1";
              f.style.background="#FFFFFF";
              d.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="f")
            {
              f.style.background="#AAEFF1";
              e.style.background="#FFFFFF";
              g.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="g")
            {
              g.style.background="#AAEFF1";
              f.style.background="#FFFFFF";
              h.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="h")
            {
              h.style.background="#AAEFF1";
              i.style.background="#FFFFFF";
              g.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="i")//
            {
              i.style.background="#AAEFF1";
              h.style.background="#FFFFFF";
              j.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="j")
            {
              j.style.background="#AAEFF1";
              i.style.background="#FFFFFF";
              k.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="k")
            {
              k.style.background="#AAEFF1";
              j.style.background="#FFFFFF";
              l.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="l")
            {
              l.style.background="#AAEFF1";
              k.style.background="#FFFFFF";
              m.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="m")
            {
              m.style.background="#AAEFF1";
              l.style.background="#FFFFFF";
              n.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="n")
            {
              n.style.background="#AAEFF1";
              m.style.background="#FFFFFF";
              o.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="o")
            {
              o.style.background="#AAEFF1";
              n.style.background="#FFFFFF";
              p.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="p")
            {
              p.style.background="#AAEFF1";
              o.style.background="#FFFFFF";
              q.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="q")
            {
              q.style.background="#AAEFF1";
              p.style.background="#FFFFFF";
              r.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="r")
            {
              r.style.background="#AAEFF1";
              q.style.background="#FFFFFF";
              s.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="s")
            {
              s.style.background="#AAEFF1";
              r.style.background="#FFFFFF";
              t.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="t")
            {
              t.style.background="#AAEFF1";
              s.style.background="#FFFFFF";
              u.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="u")
            {
              u.style.background="#AAEFF1";
              t.style.background="#FFFFFF";
              v.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="v")
            {
              v.style.background="#AAEFF1";
              u.style.background="#FFFFFF";
              w.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="w")
            {
              w.style.background="#AAEFF1";
              v.style.background="#FFFFFF";
              x.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="x")
            {
              x.style.background="#AAEFF1";
              w.style.background="#FFFFFF";
              y.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="y")
            {
              y.style.background="#AAEFF1";
              x.style.background="#FFFFFF";
              z.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="z")
            {
              z.style.background="#AAEFF1";
              y.style.background="#FFFFFF";
              backspace.style.background="#FFFFFF";
            }
            else if(alphabet[counter]=="backspace")
            {
              backspace.style.background="#AAEFF1";
              z.style.background="#FFFFFF";
              a.style.background="#FFFFFF";
            }
        }

      //when hear a mouse click, input the character or space or backspace
        document.getElementById('whale').addEventListener('click',function(){
          console.log('single click');
          if(alphabet[counter]=='backspace')
          {
            document.getElementById('frame').value=document.getElementById('frame').value.slice(0,-1);
          }
          else{
          document.getElementById('frame').value += alphabet[counter];
        }
        });
        document.getElementById('whale').addEventListener('keydown',function(){
          console.log('space!!');
          document.getElementById('frame').value += ' ';
        });
