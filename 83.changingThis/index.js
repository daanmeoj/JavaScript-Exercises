//method->object
//function->global(window, global)

const video={
    title: 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(tag=>console.log(this.title,tag));
    }
};

video.showTags();

// function playVideo(a,b){
//     console.log(this);
// }

// playVideo.call({name:'Mosh'},1,2);
// playVideo.apply({name:'Mosh'},[1,2]);
// const fn=playVideo.bind({name:'Mosh'})
// playVideo();
// fn();