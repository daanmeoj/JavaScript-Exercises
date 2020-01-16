//method->object
//function->global(window, global)

const video={
    title: 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag) {
           console.log(this.title,tag); 
        },this);
    }
};

// video.stop=function () {
//     console.log(this);
// }

// function playVideo() {
//     console.log(this);
// }

// playVideo();

// function Video(title) {
//     this.title=title;
//     console.log(this);
// }

// const v=new Video('b');
video.showTags();