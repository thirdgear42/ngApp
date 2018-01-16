var app = angular.module('sample', []);
app.controller('emp', function(){
this.nameArray = ['Sudhir','Sagar','Sarita'];

this.added = false;
this.removed = false;

this.addName = function(name){
  this.nameArray.push(name);
  this.removed = false;
  this.added = true;
}
this.remove = function(value){
  for( var i = this.nameArray.length; i--;){
if ( this.nameArray[i] === value){
  this.nameArray.splice(i, 1);
  this.added = false;
  this.removed = true;

}
}
}

});
