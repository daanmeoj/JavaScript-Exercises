function stopWatch() {
    let startTime, endTime,running,duration=0;

    Object.defineProperty(this, 'duration',{
        get: function() {
            return duration;
        },
        set:function(value) {
            duration=value;
        }
    });

    Object.defineProperty(this, 'startTime',{
        get: function() {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime',{
        get: function() {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running',{
        get: function() {
            return running;
        }
    });
    

}


stopWatch.prototype.start=function() {
    if(this.running)throw  new Error('stopwatch has already started');
    this.running=true;
    this.startTime=new Date();
};

stopWatch.prototype.stop=function() {
    if(!this.running)throw  new Error('stopwatch is not started');
    this.running=false;
    this.endTime=new Date();
    const seconds=(this.endTime.getTime()-this.startTime.getTime())/1000;
    this.duration+=seconds;
}

stopWatch.prototype.reset=function() {
    this.startTime=0;
    this.endTime=0;
    this.running=false;
    this.duration=0;
}