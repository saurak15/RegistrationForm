let btn=document.querySelector(".btn");
    btn.addEventListener("click",function(event){
      console.log(event)
      event.preventDefault();
      let firstName=document.getElementById("first").value;
      console.log(firstName)
      let lastName =document.getElementById("last").value;
      console.log(lastName);
      let email=document.getElementById("email").value;
      console.log(email)
      let mobile= document.getElementById("mobile").value;
      console.log(mobile)
      let wp = document.getElementById("wp").value;
      let add =document.getElementById("add").value;
      let aadhar =document.getElementById("aadhar").value;
      
      let msg=document.querySelector(".msg"); 
      let msg1 =document.querySelector(".msg1")
      let msg3 = document.querySelector(".msg3")
      let msg4 = document.querySelector(".msg4")
      let msg5 = document.querySelector(".msg5")
      let msg6 =document.querySelector(".msg6")
      let msg7 = document.querySelector(".msg7")
      if(firstName.length <0 || firstName.length>20 || firstName.length==0){

      msg.innerHTML="Please fill your first name"
      msg.style.color="red";
      }
      else if (lastName.length<0 || lastName.length>10 || lastName.length==0){
      msg1.innerHTML="Please fill your last name "
      msg1.style.color="red";
      }
      else if (email.length<0 || email.length>40 || email.length ==0){
        msg3.innerHTML="Please fill a valid email "
        msg3.style.color="red"
      }
      else if (mobile.length<0 || mobile.length>10 || mobile.length==0){
        msg4.innerHTML="Please fill a valid Mobile number "
        msg4.style.color="red";
      }
      else if (wp.length<0 || wp.length>10 || wp.length==0){
        msg5.innerHTML="Please fill a valid WhatsApp number "
        msg5.style.color="red";
      }
      else if (add.length<0 || add.length>100 || wp.length==0){
        msg6.innerHTML="Please fill your address  "
        msg6.style.color="red";
      }
      else if (aadhar.length<0 || aadhar.length>12 || aadhar.length==0){
        msg7.innerHTML="Please fill a valid aadhar  number "
        msg7.style.color="red";
      }

     else{
          
          
      }
      
    })