declare var require: any;
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import Product from '../../Product';
import { ProductsService } from '../../products.service';
import { stringify } from 'querystring';
import{Chart} from 'chart.js';
// import { appendFile } from 'fs';
var stringSimilarity=require('string-similarity');

@Component({
  selector: 'app-testsequence',
  templateUrl: './testsequence.component.html',
  styleUrls: ['./testsequence.component.css']
})
export class TestsequenceComponent implements OnInit {
  // one way data binding user sequence come from view
  buttonvalue='';
  good=1;
  errors='';
  lineChart=[];
  barChart=[];
  usersequence = '';
  news='';
  sequence='';
  buttoncheck=0;
  success=0;
  loss=0;
  resultstring='';
  orignalstring='';
// load original sequences from the data base by transfering
originalsequence = [];
orignalarray=[];
userarray=[];
resultarray=[];
// load deases name by transfering
deasesName = [];
// Store result of comparing the user and orignial sequences  in percentage
comparingResultOfSequences = [];
// variable use for store each comparing and push value in comparingResultOfSequences array
  similarity;
  // mearge deaseame array or comparingsequencearray
  merged = [] ;
  temp = [] ;
  // populate array with the database values
  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {



    this.ps
      .getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;

    });

  }
  comparesequneces(id:any){
    this.resultarray=[];
    console.log(this.originalsequence[id]);
    console.log(this.usersequence);
    var sequence=this.originalsequence[id];
    var orignal_lengths=this.originalsequence[id].length;
    console.log(orignal_lengths);
    var user_lengths=this.usersequence.length;
    console.log(user_lengths);
    this.orignalarray= Array.from(this.originalsequence[id]);
    console.log(this.orignalarray);
    this.userarray= Array.from(this.usersequence);
    console.log(this.userarray);
    var result_length
    var trailer=0;
    if(user_lengths<=orignal_lengths){
      result_length=user_lengths;
      trailer=orignal_lengths-user_lengths;
    }else{
      result_length=orignal_lengths;
    }
    this.success=0;
    this.loss=0;
    for(var i=0;i<result_length;i++){

if(this.orignalarray[i]==this.userarray[i])
{
  this.resultarray.push(this.orignalarray[i])
  this.success=this.success+1;
}
else{
  this.resultarray.push("-");
  this.loss=this.loss+1;
}
    }
    if(user_lengths<=orignal_lengths){
      for(var i=0;i<trailer;i++){
        this.resultarray.push("-");
      }
      this.loss=this.loss+trailer;
    }
    this.orignalstring=sequence;
    
    this.resultstring=this.resultarray.join('');
    console.log(this.orignalstring);
    console.log(this.resultstring);
    this.sequenceChecking();
    }
    //Stop function from enterring from flase sequence

    omit_special_char(event)
{   
   var k;  
   k = event.charCode;
   this.buttoncheck=0;  //         k = event.keyCode;  (Both can be used)
   return((k ==65) || (k == 67) || k == 71 || k == 84
    ); 
}

  // sequencing checking method click event when press proceed button
sequenceChecking() {
  this.comparingResultOfSequences = [];
  // transfering sequence column from Product[] which populated from database
  const seq = this.products.map(t => t.ProductDescription);
// puch database sequence into originalsequence array
  for (let i = 0 ; i <= this.products.length ; i++) {
   this.originalsequence.push(seq[i]);

}
// transfering deases column from Product[] which populated from database
  const deases = this.products.map(t => t.ProductName);
// puch database sequence into deasesName array
  for (let i = 0 ; i <= this.products.length ; i++) {

}
// check similarity of database sequences with user input sequences and push result into comparingResultOfSequences
  for (let i = 0 ; i <= this.products.length - 1 ; i++) {
     this.similarity = stringSimilarity.compareTwoStrings(this.originalsequence[i], this.usersequence);
    
     this.comparingResultOfSequences.push(this.similarity);
     console.log(this.similarity);

}

  console.log('result calculated in percentage formate of both string');
  // var newArray = $.merge(this.deasesName, this.comparingResultOfSequences);
//   let merger = this.deasesName.map((item, i) => Object.assign({}, item, this.comparingResultOfSequences));
//  console.log(this.comparingResultOfSequences );
 



//   for ( let i = 0; i <= this.products.length - 1; i++) {
//     for ( let j = 0 ; j < 2 ; j++) {
//       this.merged .push(2, 3);
//     }

// }
//   console.log(this.merged);
for(let i=0;i<this.products.length;i++){
this.deasesName[i]=this.products[i].ProductName
}
this.lineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: this.deasesName,
 datasets: [{
     label: 'Mutation Result',
     data: this.comparingResultOfSequences,
     fill:false,
     lineTension:0.2,
     borderColor:"skyblue",
     borderWidth: 3,
 }]
}, 
options: {
 title:{
     text:"",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

this.barChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Hit","Miss"],
 datasets: [{
     label: 'Hit and Miss Ratio',
     data: [this.success,this.loss],
     fill:true,
     backgroundColor:["pink","skyblue"],
     borderColor:"skyblue",
     borderWidth: 1,
 }]
}, 
options: {
 title:{
     text:"",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

}
// appendArrays(  ) {

//   for (let i = 0; i < 3 ; i++) {
//     this.temp.push(arguments[i]);
//   }
//   return this.temp;
// }

saveTextAsFile (data, filename){

  if(!data) {
      console.error('Console.save: No data')
      return;
  }

  if(!filename) filename = 'console.json'

  var blob = new Blob([data], {type: 'text/plain'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a')
// FOR IE:

if (window.navigator && window.navigator.msSaveOrOpenBlob) {
window.navigator.msSaveOrOpenBlob(blob, filename);
}
else{
 var e = document.createEvent('MouseEvents'),
    a = document.createElement('a');

a.download = filename;
a.href = window.URL.createObjectURL(blob);
a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
e.initEvent('click', true, true);
a.dispatchEvent(e);
}
}

expFile() {
  var fileText = "Mutation Results:"+this.resultstring+'\n'+"Hit:"+this.success+'\n'+"Miss:"+this.loss;
  var fileName = "newfile001.txt"
  this.saveTextAsFile(fileText, fileName);
  }
  


  file:any;
fileChanged(e) {
    this.file = e.target.files[0];
   var filepart=this.file.name.split('.')[1];
   if(filepart=="txt"){
    console.log(filepart);
    this.buttoncheck=0;
this.errors='';
    this.uploadDocument(this.file);

   }else{
this.errors='Wrong File Format or Input Data inside File';
this.buttoncheck=1;
   }
  
}

uploadDocument(file) {
  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    
    const txt: string = fileReader.result as string;
    console.log(txt);
    var datas=txt;
    var txtarray=datas.split('');
    console.log(txtarray);
    for(let i=0;i<txtarray.length;i++){
      if(txtarray[i]=='A'||txtarray[i]!=='G'||txtarray[i]!=='C'||txtarray[i]!=='T'){
       
      }else{
        if(this.good==0){
          this.good=0;
            }else{
            this.good=0;
            }
      }
      
    }
    if(this.good==1){
    this.usersequence=txt;
    this.good=0;
    this.buttoncheck=0;
  
    }else{
      this.usersequence="";
      this.errors="Wrong Data";
      this.good=1;
      this.buttoncheck=1;
      
    }
    console.log(this.usersequence);
  }
  fileReader.readAsText(this.file);
}

resetbutton(){

}


}










