// require('./greet.js')
// greet();

// var quill = new Quill('#editor-container', {
//   theme: 'snow'
// });

// quill.on('text-change', update);
// var container = document.querySelector('#delta-container');
// update();

// function update(delta) {
//   var contents = quill.getContents();
//   console.log('contents', contents);
//   var html = "contents = " + JSON.stringify(contents, null, 2);
//   if (delta) {
//     console.log('change', delta)
//     html = "change = " + JSON.stringify(delta, null, 2) + "\n\n" + html;
//   }
//   container.innerHTML = html;
// }

// function myfn(){
//   var contents = quill.getContents();
//   var html = JSON.stringify(contents, null, 2);
//   console.log(html);
// }; 
//---------------------------------------------------
//++++
var http=require('http');
//++++
var x=function(req,res){
  console.log("eeee");
  res.writeHead(200);
  res.end("dalut");
}
var server=new http.Server();

server.on("request",x);
// server.emit("request");
server.listen(8080);
console.log("rr");
console.log("ar");
console.log("zrg");
//---------------------------------------------------
//++++
// var EventEmitter=require('events');
// var util=require('util');
// function Greetr(){
//   this.greeting='hello';
//   this.jj=undefined;
// }
// util.inherits(Greetr, EventEmitter);
// //++++
// var x= function(jj){
//   console.log("valeur de jj : "+this.jj)
// };
// var greeter1=new Greetr();

// greeter1.on('greet',x);
// greeter1.emit('greet');
//---------------------------------------------------