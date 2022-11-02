// TODO:
// 1. доработать функцию выбора цвета, добавить новые цвета
// 2. поработать над стилистикой

class Lamp{
    light = true;
    color;

    setGreenColor(){
        self.color = document.getElementById("lamp").style.backgroundColor = "green";
    }

    setYellowColor(){
        self.color = document.getElementById("lamp").style.backgroundColor = "yellow";
    }

    // контроль яркости
    setBrightness(){
        let rng = document.getElementById('rng');
        let lamp = document.getElementById('lamp');
        let bright = String(rng.value * 0.01);
        lamp.style.opacity = bright;
    }

    turnOn_Off(){    
        if(this.light){
            document.getElementById("lamp").style.backgroundColor = "rgb(23, 23, 23)";
            this.light = false;
        } else{
            self.color = document.getElementById("lamp").style.backgroundColor = "yellow";
            this.light = true;
        }
    }
}

let lamp = new Lamp();
