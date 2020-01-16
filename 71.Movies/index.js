const movies=[
    {tittle:'a',year:2018,rating:4.5},
    {tittle:'b',year:2018,rating:4.7},
    {tittle:'c',year:2018,rating:3},
    {tittle:'d',year:2017,rating:4.5}
];

movies2=movies
        .filter(m=>m.year===2018)
        .filter(m=>m.rating>4)
        .sort((a,b)=>{
            if(a.rating>b.rating)return -1;
            if(a.rating<b.rating)return 1;
            return 0;
        });

movies2.forEach((movie)=>console.log(movie.tittle));
