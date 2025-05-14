

// setTimeout(function() {
//     document.getElementById('loader').style.display = 'none';
//     document.getElementById("loader").className="Re"
//   }, 2500); 
    // =========================== AGE CODE START ===============================
  var age=document.getElementById("age")
  age.innerHTML=new Date().getFullYear()-2006 ;

  // =========================== AGE CODE END ===============================

  // ============================= collpase_one start ====================
  document.addEventListener("DOMContentLoaded", () => {
    const collapseElement = document.getElementById("collapseExample");

  if(collapseElement){
    collapseElement.addEventListener("shown.bs.collapse", () => {
     document.querySelector(".btn_inquire").classList.add("btn_color");
         document.querySelector(".btn_inquire").innerHTML=` <i class=" fa-solid fa-caret-up fa_caret_up  "></i>`
    })
    

    collapseElement.addEventListener("hidden.bs.collapse", () => {
     document.querySelector(".btn_inquire").classList.remove("btn_color");

     document.querySelector(".btn_inquire").innerHTML=`<i class="fa-solid fa-caret-down fa_caret_down "></i>`
    });
  }
  });

  // ============================= collpase_one end ============================= 
var all=[
    
    // {name:"Erp Training Pakistan",cat:"React",href:"https://erptrainingpakistan.com/",img:"img/image.png"},
    {name:"Games Trade ",cat:"React",href:"https://fasihnasir-game.netlify.app/",img:"img/55.png"},
  
    {name:"WIHR",cat:"react",href:"https://wihrconsultant.vercel.app/",img:"img/52.png"},
 
    
    
    
    {name:"Weather-App",cat:"react",href:"https://fasih-nasirweather-app.vercel.app/",img:"img/50.png"},
    
    {name:"Indeed",cat:"react",href:"https://fasih-nasir-indeed.vercel.app/",img:"img/49.png"},
  
    
    {name:"OLX",cat:"react",href:"https://fasih-nasirolx.vercel.app/",img:"img/48.png"},
    
    {name:"Portfolio",cat:"website",href:"https://ubaid-portfolio1.vercel.app/",img:"img/47.png"},
  
    {name:"Chat Stream",cat:"website",href:"https://fasih-nasirpostappp.netlify.app/",img:"img/43.png"},
  
    {name:"React Ecommerce",cat:"react",href:"https://fasih-nasir-ecommerce.vercel.app/",img:"img/46.png"},
  
      {name:"React Projects",cat:"react",href:"https://react-all-projects.vercel.app/",img:"img/45.png"},
    
    {name:"Brio Website",cat:"website",href:"https://fasih-nasirbrio.netlify.app/",img:"img/44.png"},
    
      {name:"Loan calculator",cat:"calulator",href:"https://fasih-nasirloan-calculator.netlify.app/",img:"img/36.png"},
          {name:"Firesbase Login",cat:"website",href:"https://firesbaselogin.netlify.app/",img:"img/42.png"},
   {name:"Case Converter",cat:"website",href:"https://fasih-nasircaseconverter.netlify.app/",img:"img/39.png"},
      {name:"Admin Pannel",cat:"website",href:"https://fasih-nasirjsproject27.netlify.app/",img:"img/32.png"},
      {name:"Keypress Game",cat:"game",href:"https://fasih-nasirkeypress.netlify.app/",img:"img/38.png"},
      {name:"tic-tac-toe",cat:"game",href:"https://fasih-nasirtictoe.netlify.app/",img:"img/281.png"},
      
          {name:"website",cat:"website",href:"https://fasihnasirdemo2.netlify.app/",img:"img/40.png"},
        {name:"website",cat:"website",href:"https://fasihnasirwi.netlify.app/",img:"img/41.png"},
      
      {name:"Budget calculator",cat:"calulator",href:"https://fasih-nasirbudgetcalculator.netlify.app/",img:"img/37.png"},
      {name:"Quiz App",cat:"website",href:"https://fasih-nasirjsproject24.netlify.app/",img:"img/24.png"},
      {name:"calculator",cat:"calulator",href:"https://fasih-nasirjsproject17.netlify.app/cal.html",img:"img/16.jpg"},
      {name:"Text Editor",cat:"website",href:"https://fasih-nasirjsproject20.netlify.app/",img:"img/19.jpg"},
      {name:"Dynamic Product",cat:"website",href:"https://fasih-nasirjsproject25.netlify.app/",img:"img/30.png"},
      {name:"Logistic",cat:"website",href:"https://wilogistic.netlify.app/",img:"img/29.png"},
      {name:"Password Checker",cat:"website",href:"https://fasih-nasirpasswordcheck.netlify.app/",img:"img/35.png"},
      {name:"Ballon Game",cat:"game",href:"https://fasih-nasirballongame.netlify.app/",img:"img/33.png"},
      {name:"Qr Code",cat:"calulator",href:"https://fasih-nasirqrcode.netlify.app/",img:"img/26.jpg"},
      {name:"Ecommerce Web",cat:"website",href:"https://fasih-nasirjsproject231.netlify.app/",img:"img/23.jpg"},
      {name:"Spot Finder",cat:"website",href:"https://fasih-nasirproject14.netlify.app/",img:"img/14.jpg"},
      {name:"W3 School",cat:"website",href:"https://fasih-nasirproject8.netlify.app/",img:"img/25.jpg"},
      {name:"Login/LogOut",cat:"website",href:"https://fasih-nasirjsproject23.netlify.app/",img:"img/22.jpg"}
  
  ]
  // document.getElementById("len").innerHTML=`(${all.length+2})`
   fn(all)
  
   function fn(all){
      
      // console.log(all);
      // fn()
      var main=document.getElementById("main")
      if(main)
      {
      main.innerHTML=``
      for(let i=0;i<all.length;i++){
          main.innerHTML+=`
                   <a  class="d-flex align-items-center justify-content-center flex-row" href="${all[i].href}" target="_blank">
                <div class="col-xl-3 col-6 tr">
                <img src="${all[i].img}" class="img-fluid col-11" alt="">
              
                <div class="col-lg-11 d-flex flex-xl-row flex-column justify-content-around flex-row align-items-center">
           <h6 class="pt-2"><strong>${all[i].name}</strong></h6>

                
                <a  class="d-flex align-items-center justify-content-center flex-row" href="${all[i].href}" target="_blank"><i class="fa-solid fa-play"></i></a>
                
                </div>
                <div class="col-lg-11 d-flex flex-xl-row flex-column justify-content-around flex-row align-items-center">
                    <p class="bgs">${all[i].cat}</p>
                    
                    
                    </div>
            
                            </div>
                            </a>
                      `
                      
                  }
              }
            }
  
  
  
  
  
  

  
  
