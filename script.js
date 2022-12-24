//Checking who won
var p1=prompt("Enter player 1 name");
var p2=prompt("Enter player 2 name");
var cnt=0;
var p1_cnt=0;
var p2_cnt=0;
function reset()
{
  // location.reload();
  cnt=0;
  document.getElementById('result').innerHTML='';
  document.getElementById('box1').value="";
  document.getElementById('box2').value="";
  document.getElementById('box3').value="";
  document.getElementById('box4').value="";
  document.getElementById('box5').value="";
  document.getElementById('box6').value="";
  document.getElementById('box7').value="";
  document.getElementById('box8').value="";
  document.getElementById('box9').value="";
  enable(); 
}
function disable()
{
  document.getElementById("p1_stat").innerHTML = p1_cnt;
  document.getElementById("p2_stat").innerHTML = p2_cnt;
  document.getElementById("box1").disabled = true;
  document.getElementById("box2").disabled = true;
  document.getElementById("box3").disabled = true;
  document.getElementById("box4").disabled = true;
  document.getElementById("box5").disabled = true;
  document.getElementById("box6").disabled = true;
  document.getElementById("box7").disabled = true;
  document.getElementById("box8").disabled = true;
  document.getElementById("box9").disabled = true;
}
function enable()
{
  document.getElementById("box1").disabled = false;
  document.getElementById("box2").disabled = false;
  document.getElementById("box3").disabled = false;
  document.getElementById("box4").disabled = false;
  document.getElementById("box5").disabled = false;
  document.getElementById("box6").disabled = false;
  document.getElementById("box7").disabled = false;
  document.getElementById("box8").disabled = false;
  document.getElementById("box9").disabled = false;
}
function myFunc() {
  var b1,b2,b3,b4,b5,b6,b7,b8,b9;
  cnt++;
  b1=document.getElementById('box1').value;
  b2=document.getElementById('box2').value;
  b3=document.getElementById('box3').value;
  b4=document.getElementById('box4').value;
  b5=document.getElementById('box5').value;
  b6=document.getElementById('box6').value;
  b7=document.getElementById('box7').value;
  b8=document.getElementById('box8').value;
  b9=document.getElementById('box9').value;
  if(cnt==9)
  document.getElementById('result').innerHTML=`Draw`
  if(b1 && b1==b2 && b2==b3)
  {
      if(b1=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b4 && b4==b5 && b5==b6)
  {
      if(b4=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b7 && b7==b8 && b8==b9)
  {
      if(b7=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b1 && b1==b4 && b4==b7)
  {
      if(b1=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b2 && b2==b5 && b5==b8)
  {
      if(b2=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b3 && b3==b6 && b6==b9)
  {
      if(b3=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b1 && b1==b5 && b5==b9)
  {
      if(b1=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
  else if(b3 && b3==b5 && b5==b7)
  {
      if(b3=='X')
      {
        document.getElementById('result').innerHTML=`${p1} won`
        p1_cnt++;
      }
      else
      {
        document.getElementById('result').innerHTML=`${p2} won`
        p2_cnt++;
      }
      disable();
  }
}
//Setting X and 0 to the boxes
var flag = 1;
function func1() {
  if (flag == 1) document.getElementById("box1").value = "X";
  else document.getElementById("box1").value = "0";
  document.getElementById("box1").disabled = true;
  flag=!flag;
}
function func2() {
  if (flag == 0) {
    document.getElementById("box2").value = "0";
  } else{
    document.getElementById("box2").value = "X";
  } 
  document.getElementById("box2").disabled = true;
  flag=!flag;
}
function func3() {
  if (flag == 1) document.getElementById("box3").value = "X";
  else document.getElementById("box3").value = "0";
  document.getElementById("box3").disabled = true;
  flag=!flag;
}
function func4() {
  if (flag == 0) document.getElementById("box4").value = "0";
  else document.getElementById("box4").value = "X";
  document.getElementById("box4").disabled = true;
  flag=!flag;
}
function func5() {
  if (flag == 1) document.getElementById("box5").value = "X";
  else document.getElementById("box5").value = "0";
  document.getElementById("box5").disabled = true;
  flag=!flag;
}
function func6() {
  if (flag == 0) document.getElementById("box6").value = "0";
  else document.getElementById("box6").value = "X";
  document.getElementById("box6").disabled = true;
  flag=!flag;
}
function func7() {
  if (flag == 1) document.getElementById("box7").value = "X";
  else document.getElementById("box7").value = "0";
  document.getElementById("box7").disabled = true;
  flag=!flag;
}
function func8() {
  if (flag == 0) document.getElementById("box8").value = "0";
  else document.getElementById("box8").value = "X";
  document.getElementById("box8").disabled = true;
  flag=!flag;
}
function func9() {
  if (flag == 1) document.getElementById("box9").value = "X";
  else document.getElementById("box9").value = "0";
  document.getElementById("box9").disabled = true;
  flag=!flag;
}