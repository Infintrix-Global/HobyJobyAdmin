
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js";
   import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
   import { doc, deleteDoc,setDoc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
 
   var today = new Date();

   var date = (today.getMonth()+1)  +'/'+today.getDate()+'/'+today.getFullYear() + ',';

   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
   var dateTime = date+' '+time;

  const firebaseConfig = {
    apiKey: "AIzaSyCja308Z_aqsX4dI7-PHQowrsAsTptrPUY",
    authDomain: "hobyjoby-6cf7f.firebaseapp.com",
    databaseURL: "https://hobyjoby-6cf7f-default-rtdb.firebaseio.com",
    projectId: "hobyjoby-6cf7f",
    storageBucket: "hobyjoby-6cf7f.appspot.com",
    messagingSenderId: "364840624543",
    appId: "1:364840624543:web:4bffa1591f60fff4ff9daa",
    measurementId: "G-L5Q22RC76Z"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);



var tbody= document.getElementById("tbody1");


    function AddItemToTable(cat,cby,uat,uby,id,name){

      
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let btn=document.createElement("button");
        btn.setAttribute("id", "Div4");
        btn.setAttribute("class", "tru");
        btn.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btn);


        let btn2 = document.createElement("button");
        btn2.setAttribute("id", "Div5");
        btn2.setAttribute("class", "ufgi");
        btn2.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2);

        let btn3 = document.createElement("button");
        btn3.setAttribute("id", "Div6");
        btn3.setAttribute("class", "uopd");
        btn3.innerHTML = '<i class="fa fa-save"></i>';
        td7.appendChild(btn3);

        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        td3.innerHTML= cby ;
        td4.innerHTML=uat ;
        td5.innerHTML=uby;
        td6.innerHTML=name;

        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);
        tbody.appendChild(trow);
     
        $(document).ready(function() {
          $("#Div4").css("background-color", "red");
          $("#Div4").css("color", "white");
          $("#Div4").css("border-color", "white");

          $(".tru").css("background-color", "red");
          $(".tru").css("color", "white");
          $(".tru").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Div5").css("background-color", "red");
          $("#Div5").css("color", "white");
          $("#Div5").css("border-color", "white");

          $(".ufgi").css("background-color", "red");
          $(".ufgi").css("color", "white");
          $(".ufgi").css("border-color", "white");
      });
        $(document).ready(function() {
          $("#Div6").css("background-color", "red");
          $("#Div6").css("color", "white");
          $("#Div6").css("border-color", "white");

          $(".uopd").css("background-color", "red");
          $(".uopd").css("color", "white");
          $(".uopd").css("border-color", "white");
      });

      var num = id.toString();

      btn.onclick = function () {
        var result = confirm("Are you sure you want to Delete Crtificate with Id " + num);
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Certifications",num));
        setTimeout("location.reload(true);",2000);
        }
      };

      btn2.onclick = function () {
        td6.contentEditable = true;
      }; 
      
      btn3.onclick = function () {
        td6.contentEditable = false;
        var tio = id.toString();
        setDoc(doc(db, "JobConfig", "Master", "Certifications", tio), {
          name: td6.innerHTML,
          CreatedAt :  dateTime,
          CreatedBy : "1",
          UpdatedAt :  dateTime,
          UpdatedBy : "1",
          id : id.toString(),
        });
        setTimeout("location.reload(true);",2000);
      }; 
    }

    function AddAllItemsToTable(certification){
        tbody.innerHTML="";

        certification.forEach(element => {
        AddItemToTable(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });

    }
var cert=[];
var querySnapshot = await getDocs(collection(db, "JobConfig", "Master", "Certifications"));
querySnapshot.forEach((doc) => {
    cert.push(doc.data());
  AddAllItemsToTable(cert);

});









//Qualification

var tbody= document.getElementById("tbody2");


    function AddItemToTable1(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");

        let btnq=document.createElement("button");
        btnq.setAttribute("id", "delQ");
        btnq.setAttribute("class", "pooa");
        btnq.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btnq);


        let btn2q = document.createElement("button");
        btn2q.setAttribute("id", "editQ");
        btn2q.setAttribute("class", "csjs");
        btn2q.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2q);

        let btn3q = document.createElement("button");
        btn3q.setAttribute("id", "Saveq");
        btn3q.setAttribute("class", "cwsq");
        btn3q.innerHTML = '<i class="fa fa-save"></i>';
        td7.appendChild(btn3q);
        

        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        td3.innerHTML= cby ;
        td4.innerHTML=uat ;
        td5.innerHTML=uby;
        td6.innerHTML=name;


        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);

        tbody.appendChild(trow);



        $(document).ready(function() {
          $("#delQ").css("background-color", "red");
          $("#delQ").css("color", "white");
          $("#delQ").css("border-color", "white");

          $(".pooa").css("background-color", "red");
          $(".pooa").css("color", "white");
          $(".pooa").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editQ").css("background-color", "red");
          $("#editQ").css("color", "white");
          $("#editQ").css("border-color", "white");

          $(".csjs").css("background-color", "red");
          $(".csjs").css("color", "white");
          $(".csjs").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Saveq").css("background-color", "red");
          $("#Saveq").css("color", "white");
          $("#Saveq").css("border-color", "white");

          $(".cwsq").css("background-color", "red");
          $(".cwsq").css("color", "white");
          $(".cwsq").css("border-color", "white");
      });

      var num = id.toString();

      btnq.onclick = function () {
        var result = confirm("Are you sure you want to Delete Qualification with Id " + num);
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Qualifiactions",num));
        setTimeout("location.reload(true);",2000);
        }
      };

      btn2q.onclick = function () {
        td6.contentEditable = true;
      }; 
      
      btn3q.onclick = function () {
        td6.contentEditable = false;
        var tio = id.toString();
        console.log(td6.innerHTML);
        setDoc(doc(db, "JobConfig", "Master", "Qualifiactions", tio), {
          name: td6.innerHTML,
          CreatedAt :  dateTime,
          CreatedBy : "1",
          UpdatedAt :  dateTime,
          UpdatedBy : "1",
          id : id.toString(),
        });
        setTimeout("location.reload(true);",2000);
      }; 


    }

    function AddAllItemsToTable1(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable1(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });
    }

var cert=[];
var querySnapshot1 =  await getDocs(collection(db, "JobConfig", "Master", "Qualifiactions"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable1(cert);

});






//skills

var tbody= document.getElementById("tbody3");


    function AddItemToTable2(cat,cby,uat,uby,id,name){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");

        let btns=document.createElement("button");
        btns.setAttribute("id", "dels");
        btns.setAttribute("class", "gt");
        btns.innerHTML = '<i class="fa fa-trash-o"></i>';
        td7.appendChild(btns);


        let btn2s = document.createElement("button");
        btn2s.setAttribute("id", "edits");
        btn2s.setAttribute("class", "tyr");
        btn2s.innerHTML = '<i class="fas fa-edit"></i>';
        td7.appendChild(btn2s);

        let btn3s = document.createElement("button");
        btn3s.setAttribute("id", "Saves");
        btn3s.setAttribute("class", "iu7k7");
        btn3s.innerHTML = '<i class="fa fa-save"></i>';
        td7.appendChild(btn3s);





        td1.innerHTML= id ;
        td2.innerHTML=cat ;
        td3.innerHTML= cby ;
        td4.innerHTML=uat ;
        td5.innerHTML=uby;
        td6.innerHTML=name;


        
        $(document).ready(function() {
          $("#dels").css("background-color", "red");
          $("#dels").css("color", "white");
          $("#dels").css("border-color", "white");

          $(".gt").css("background-color", "red");
          $(".gt").css("color", "white");
          $(".gt").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#edits").css("background-color", "red");
          $("#edits").css("color", "white");
          $("#edits").css("border-color", "white");

          $(".tyr").css("background-color", "red");
          $(".tyr").css("color", "white");
          $(".tyr").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Saves").css("background-color", "red");
          $("#Saves").css("color", "white");
          $("#Saves").css("border-color", "white");

          $(".iu7k7").css("background-color", "red");
          $(".iu7k7").css("color", "white");
          $(".iu7k7").css("border-color", "white");
      });




        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);
        trow.appendChild(td6);
        trow.appendChild(td7);

        tbody.appendChild(trow);


        var num = id.toString();

      btns.onclick = function () {
        var result = confirm("Are you sure you want to Delete Skill with Id " + num);
        if (result) {
        deleteDoc(doc(db, "JobConfig", "Master","Skills",num));
        setTimeout("location.reload(true);",2000);
        }
      };

      btn2s.onclick = function () {
        td6.contentEditable = true;
      }; 
      
      btn3s.onclick = function () {
        td6.contentEditable = false;
        var tio = id.toString();
        console.log(td6.innerHTML);
        setDoc(doc(db, "JobConfig", "Master", "Skills", tio), {
          name: td6.innerHTML,
          CreatedAt :  dateTime,
          CreatedBy : "1",
          UpdatedAt :  dateTime,
          UpdatedBy : "1",
          id : id.toString(),
        });
        setTimeout("location.reload(true);",2000);
      }; 
    }

    function AddAllItemsToTable2(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable2(element.CreatedAt,element.CreatedBy,element.UpdatedAt,element.UpdatedBy,element.id,element.name);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Skills"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable2(cert);

});






//functionalarea

var tbody= document.getElementById("tbody4");


    function AddItemToTable3(cat,cby,uat,iut){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5 = document.createElement("td");

        let btnf=document.createElement("button");
        btnf.setAttribute("id", "delf");
        btnf.setAttribute("class", "csq");
        btnf.innerHTML = '<i class="fa fa-trash-o"></i>';
        td5.appendChild(btnf);


        let btn2f = document.createElement("button");
        btn2f.setAttribute("id", "editf");
        btn2f.setAttribute("class", "txssyr");
        btn2f.innerHTML = '<i class="fas fa-edit"></i>';
        td5.appendChild(btn2f);

        let btn3f = document.createElement("button");
        btn3f.setAttribute("id", "Savef");
        btn3f.setAttribute("class", "xsas");
        btn3f.innerHTML = '<i class="fa fa-save"></i>';
        td5.appendChild(btn3f);



        td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=uat;
        td4.innerHTML = iut;


        $(document).ready(function() {
          $("#delf").css("background-color", "red");
          $("#delf").css("color", "white");
          $("#delf").css("border-color", "white");

          $(".csq").css("background-color", "red");
          $(".csq").css("color", "white");
          $(".csq").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editf").css("background-color", "red");
          $("#editf").css("color", "white");
          $("#editf").css("border-color", "white");

          $(".txssyr").css("background-color", "red");
          $(".txssyr").css("color", "white");
          $(".txssyr").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Savef").css("background-color", "red");
          $("#Savef").css("color", "white");
          $("#Savef").css("border-color", "white");

          $(".xsas").css("background-color", "red");
          $(".xsas").css("color", "white");
          $(".xsas").css("border-color", "white");
      });

        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        trow.appendChild(td5);

        var num = iut.toString();

        btnf.onclick = function () {
          var result = confirm("Are you sure you want to Delete Functional Area with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","FunctionalArea",num));
          setTimeout("location.reload(true);",2000);
          }
        };
  
        btn2f.onclick = function () {
          td1.contentEditable = true;
          td2.contentEditable = true;
          td3.contentEditable = true;
        }; 
        
        btn3f.onclick = function () {
          td1.contentEditable = false;
          td2.contentEditable = false;
          td3.contentEditable = false;
          var tio = iut.toString();
          setDoc(doc(db, "JobConfig", "Master", "FunctionalArea", tio), {
            CId: td2.innerHTML,
            Category:td1.innerHTML,
            SCId : iut.toString(),
            SubCategory: td3.innerHTML
          });
          setTimeout("location.reload(true);",2000);
        }; 
        tbody.appendChild(trow);
    }

    function AddAllItemsToTable3(qualification){
      tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable3(element.Category,element.CId,element.SubCategory,element.SCId);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "FunctionalArea"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable3(cert);

});








//cities

var tbody= document.getElementById("tbody5");


    function AddItemToTable4(cat,cby,uat){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");

        let btnc=document.createElement("button");
        btnc.setAttribute("id", "delc");
        btnc.setAttribute("class", "dg");
        btnc.innerHTML = '<i class="fa fa-trash-o"></i>';
        td4.appendChild(btnc);


        let btn2c = document.createElement("button");
        btn2c.setAttribute("id", "editc");
        btn2c.setAttribute("class", "bgr");
        btn2c.innerHTML = '<i class="fas fa-edit"></i>';
        td4.appendChild(btn2c);

        let btn3c = document.createElement("button");
        btn3c.setAttribute("id", "Savec");
        btn3c.setAttribute("class", "bgds");
        btn3c.innerHTML = '<i class="fa fa-save"></i>';
        td4.appendChild(btn3c);

        td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=uat;


        $(document).ready(function() {
          $("#delc").css("background-color", "red");
          $("#delc").css("color", "white");
          $("#delc").css("border-color", "white");

          $(".dg").css("background-color", "red");
          $(".dg").css("color", "white");
          $(".dg").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editc").css("background-color", "red");
          $("#editc").css("color", "white");
          $("#editc").css("border-color", "white");

          $(".bgr").css("background-color", "red");
          $(".bgr").css("color", "white");
          $(".bgr").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Savec").css("background-color", "red");
          $("#Savec").css("color", "white");
          $("#Savec").css("border-color", "white");

          $(".bgds").css("background-color", "red");
          $(".bgds").css("color", "white");
          $(".bgds").css("border-color", "white");
      });
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);
        var num = cat.toString();

        btnc.onclick = function () {
          var result = confirm("Are you sure you want to Delete City with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","Cities",num));
          setTimeout("location.reload(true);",2000);
          }
        };
  
        btn2c.onclick = function () {
          td3.contentEditable = true;
          td2.contentEditable = true;
        }; 
        
        btn3c.onclick = function () {
          td3.contentEditable = false;
          td2.contentEditable = false;
          var tio = cat.toString();
          setDoc(doc(db, "JobConfig", "Master", "Cities", tio), {
            City: td2.innerHTML,
            State:td3.innerHTML,
            id : cat.toString(),
          });
          setTimeout("location.reload(true);",2000);
        }; 
        tbody.appendChild(trow);

    }

    function AddAllItemsToTable4(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable4(element.id,element.City,element.State);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Cities"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
  AddAllItemsToTable4(cert);

});










//jobtypes
var tbody= document.getElementById("tbody6");


    function AddItemToTable5(cat,cby){
      console.log(cat + cby);
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");



        let btnj=document.createElement("button");
        btnj.setAttribute("id", "delj");
        btnj.setAttribute("class", "bfds");
        btnj.innerHTML = '<i class="fa fa-trash-o"></i>';
        td3.appendChild(btnj);


        let btn2j = document.createElement("button");
        btn2j.setAttribute("id", "editj");
        btn2j.setAttribute("class", "bsns");
        btn2j.innerHTML = '<i class="fas fa-edit"></i>';
        td3.appendChild(btn2j);

        let btn3j = document.createElement("button");
        btn3j.setAttribute("id", "Savej");
        btn3j.setAttribute("class", "VA");
        btn3j.innerHTML = '<i class="fa fa-save"></i>';
        td3.appendChild(btn3j);


        td1.innerHTML= cat;
        td2.innerHTML=cby;


        $(document).ready(function() {
          $("#delj").css("background-color", "red");
          $("#delj").css("color", "white");
          $("#delj").css("border-color", "white");

          $(".bfds").css("background-color", "red");
          $(".bfds").css("color", "white");
          $(".bfds").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editj").css("background-color", "red");
          $("#editj").css("color", "white");
          $("#editj").css("border-color", "white");

          $(".bsns").css("background-color", "red");
          $(".bsns").css("color", "white");
          $(".bsns").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Savej").css("background-color", "red");
          $("#Savej").css("color", "white");
          $("#Savej").css("border-color", "white");

          $(".VA").css("background-color", "red");
          $(".VA").css("color", "white");
          $(".VA").css("border-color", "white");
      });
        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);

        var num = cat.toString();
        btnj.onclick = function () {
          var result = confirm("Are you sure you want to Delete JobType with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","JobTypes",num));
          setTimeout("location.reload(true);",2000);
          }
        };
  
        btn2j.onclick = function () {
          td2.contentEditable = true;
        }; 
        
        btn3j.onclick = function () {
          td2.contentEditable = false;
          var tio = cat.toString();
          setDoc(doc(db, "JobConfig", "Master", "JobTypes", tio), {
            name: td2.innerHTML,
            id : cat.toString(),
          });
          setTimeout("location.reload(true);",2000);
        }; 
        tbody.appendChild(trow);

    }

    function AddAllItemsToTable5(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable5(element.id,element.name);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "JobTypes"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    console.log('24' + doc.data());
  AddAllItemsToTable5(cert);
});





//Specialization
var tbody= document.getElementById("tbody7");


    function AddItemToTable6(cat,cby,rui){
        let trow=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");



        let btnsp=document.createElement("button");
        btnsp.setAttribute("id", "delsp");
        btnsp.setAttribute("class", "seb");
        btnsp.innerHTML = '<i class="fa fa-trash-o"></i>';
        td4.appendChild(btnsp);


        let btn2sp = document.createElement("button");
        btn2sp.setAttribute("id", "editsp");
        btn2sp.setAttribute("class", "casD");
        btn2sp.innerHTML = '<i class="fas fa-edit"></i>';
        td4.appendChild(btn2sp);

        let btn3sp = document.createElement("button");
        btn3sp.setAttribute("id", "Savesp");
        btn3sp.setAttribute("class", "csaa");
        btn3sp.innerHTML = '<i class="fa fa-save"></i>';
        td4.appendChild(btn3sp);


        td1.innerHTML= cat;
        td2.innerHTML=cby;
        td3.innerHTML=rui;


        $(document).ready(function() {
          $("#delsp").css("background-color", "red");
          $("#delsp").css("color", "white");
          $("#delsp").css("border-color", "white");

          $(".seb").css("background-color", "red");
          $(".seb").css("color", "white");
          $(".seb").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#editsp").css("background-color", "red");
          $("#editsp").css("color", "white");
          $("#editsp").css("border-color", "white");

          $(".casD").css("background-color", "red");
          $(".casD").css("color", "white");
          $(".casD").css("border-color", "white");
        });
        $(document).ready(function() {
          $("#Savesp").css("background-color", "red");
          $("#Savesp").css("color", "white");
          $("#Savesp").css("border-color", "white");

          $(".csaa").css("background-color", "red");
          $(".csaa").css("color", "white");
          $(".csaa").css("border-color", "white");
      });



        trow.appendChild(td1);
        trow.appendChild(td2);
        trow.appendChild(td3);
        trow.appendChild(td4);

        var num = cat.toString();
        btnsp.onclick = function () {
          var result = confirm("Are you sure you want to Delete Specialization with Id " + num);
          if (result) {
          deleteDoc(doc(db, "JobConfig", "Master","Specialization",num));
          setTimeout("location.reload(true);",2000);
          }
        };
  
        btn2sp.onclick = function () {
          td3.contentEditable = true;
        }; 
        
        btn3sp.onclick = function () {
          td3.contentEditable = false;
          var tio = cat.toString();
          setDoc(doc(db, "JobConfig", "Master", "Specialization", tio), {
            Category: "Specialization",
            Id: cat.toString(),
            SubCategory: td3.innerHTML
          });
          setTimeout("location.reload(true);",2000);
        }; 


        tbody.appendChild(trow);

    }

    function AddAllItemsToTable6(qualification){
        tbody.innerHTML="";

        qualification.forEach(element => {
        AddItemToTable6(element.Id,element.Category,element.SubCategory);    
        });
    }

var cert=[];
var querySnapshot1 = await getDocs(collection(db, "JobConfig", "Master", "Specialization"));
querySnapshot1.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
    cert.push(doc.data());
    AddAllItemsToTable6(cert);
});


