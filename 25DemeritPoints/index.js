function CheckSpeed(speed){
    const speedLimit=70;
    const pointsLimit=12;
    const kmPerPoint=5;
    if(speed<speedLimit+kmPerPoint){
        return 'Ok';
    }
        const Points=Math.floor((speed-speedLimit)/kmPerPoint);
        return (Points=>pointsLimit)?'License suspended':'Points: '+Points;
    
}


console.log(CheckSpeed(130));
