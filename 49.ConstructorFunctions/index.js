
let post={
  tittle: 'don quijote',
  body: 'en un lugar de la mancha',
  author:'Cervantes',
  views:10,
  comments:[
    {author:'a',body:'b'},
    {author:'c',body:'d'},
    {author:'e',body:'f'}
  ],
  isLive:true
};

function Post(tittle,body,author){
  this.tittle=tittle;
  this.body=body;
  this.author=author;
  this.views=0;
  this.comments=[];
  this.isLive=false;
}

let post2=new Post('a','b','c');

console.log(post2);
