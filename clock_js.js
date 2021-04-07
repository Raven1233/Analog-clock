setInterval(() =>{
    d=new Date();
    hours = d.getHours();
    minutes = d.getMinutes();
    seconds = d.getSeconds();
    rotate_h = 30*hours + minutes/2;
    rotate_m = 6*minutes;
    rotate_s = 6*seconds;
    hour.style.transform = `rotate(${rotate_h}deg)`;
    minute.style.transform = `rotate(${rotate_m}deg)`;
    second.style.transform = `rotate(${rotate_s}deg)`;
}, 1000);
