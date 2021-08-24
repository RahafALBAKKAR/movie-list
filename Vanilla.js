'use strict';

let sectionForm=document.getElementById('form')

let all =[];

let ImgArray=[
    'action.png',
    'adventure.png',
    'animation.png',
    'comedy.png',
    'detective.png',
    'fantasy.png',
    'history.png',
    'horror.png',
    'musical.png',
    'pirate.png',
    'romantic.png',
    'sCI-FI.png',
    'war.png',
    'western.png'
]
 function Moveie(name,imgSrc,releas){
     this.name=name;
     this.imgSrc=imgSrc;
     this.releas=releas
     Moveie.all.push(this);
 }
 Moveie.all();
 console.log(Moveie.all)
 getData();
//  Person.prototype.name = function() {
//     return this.firstName + " " + this.lastName;
//   };

for (let i=0; i<Moveie.all.length;i++){
    Moveie.all.imgSrc = new Moveie.all[i].split('.')[0].name,imgSrc;
}

 Moveie.prototype.MoveieSelectde=function(){
this.name =new Moveie.all.name;
 this.imgSrc=new Moveie.all.imgSrc;
this.releas=new Moveie.all.releas;
 }
let provide =function(){
    for (let i=0;i<Moveie.all.length;i++){
      imgSrc='./img/'+Moveie.all[i].imgSrc;  
    }
}
let tabelElement=document.getElementById('tabel');
sectionForm.appendChild(tabelElement);

 form.addEventListener('submit',handlerFunction)
 function handlerFunction(e){
    e.preventDefault();
     let nameNew=e.target.nameNew.value;
     let imgSrcNew=e.target.imgSrcNew.vlaue;
     let newreleas=e.target.newreleas.value;
console.log(e);
     localStorage.data=JSON.stringify(Moveie.prototype.MoveieSelected);
     moveieSelectde.nameNew;
moveieSelectde.imgSrc;
moveieSelectde.newreleas;
     render();
     
 }


 function render(){

     let tabel=document.createElement('tabel');
     tabelElement.appendChild(tabel);

     for(let i=0 ;i<Moveie.all.length;i++){
         let row=document.createElement('tr');
         tabel.appendChild(row);
        let td1=document.createElement('td1');
        td1.textContent=Moveie.all[i].nameNew;
        tr.appendChild(td1); 

        let td2=document.createElement('td2');
        td2.textContent=Moveie.all[i].imgSrcNew;
        tr.appendChild(td2);

        let td3=document.createElement('td3');
        td3.textContent=Moveie.all[i].newreleas;
        tr.appendChild(td3)

     }
 }

 function getData(){
     if(localStorage){
         localStorage.data=JSON.parse(Moveie.all)
         for(let i=0;i<Moveie.all.length;i++){
             data.name[i];
             data.imgSrc[i];
             data.releas[i];

         }
     }else
     {
         for (let i=0;i<Moveie.all.length;i++){
             let Moveie=new Moveie.all[i].split('.')[0].imgSrc;
         }
     }

 }