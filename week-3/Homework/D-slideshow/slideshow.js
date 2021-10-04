let images = ["https://wanderlust.com.ar/wp-content/uploads/2018/10/salta-northwest.jpg",
    "https://estaticos-cdn.prensaiberica.es/clip/01458193-d804-4b0b-9ec2-808de808f38d_16-9-discover-aspect-ratio_default_0.jpg",
    "https://media.istockphoto.com/videos/old-man-of-storr-in-scotland-time-lapse-video-id1126960855?b=1&k=6&m=1126960855&s=640x640&h=R0z9o8TpNvweKJmdX4rbmenIN7A1FWTGa35mnYx8D20=",
    "https://cdn.cienradios.com/wp-content/uploads/sites/23/2019/04/malvinas.jpg", 
    "https://rccl-h.assetsadobe.com/is/image/content/dam/royal/data/ports/wellington-new-zealand/overview/wellington-new-zealand-hillside-homes.jpg?$750x320$"
]
let counter = 0;
let image = document.createElement("img");
image.src = images[counter];
let backInterval;
console.log("backInterval", backInterval);
let forwardInterval;

let mainContainer = document.querySelector(".main-container");
let buttonsGroup = document.createElement("div");
let buttonManualBack = document.createElement("button");
buttonManualBack.id = "manual-back"
let buttonManualForward = document.createElement("button");
buttonManualForward.id = "manual-forward"
let buttonAutoBack = document.createElement("button");
buttonAutoBack.id = "manual-auto-back"
let buttonStop = document.createElement("button");
buttonStop.id = "stop"
let buttonAutoForward = document.createElement("button");
buttonAutoForward.id = ""

buttonsGroup.classList.add("buttons-group");
buttonManualForward.innerHTML = " > ";
buttonManualBack.innerHTML = " < ";
buttonStop.innerHTML = "Stop";
buttonAutoBack.innerHTML = " << ";
buttonAutoForward.innerHTML = " >> ";

mainContainer.appendChild(image);
buttonsGroup.appendChild(buttonManualBack);
buttonsGroup.appendChild(buttonAutoBack);
buttonsGroup.appendChild(buttonStop);
buttonsGroup.appendChild(buttonAutoForward);
buttonsGroup.appendChild(buttonManualForward);
mainContainer.appendChild(buttonsGroup);

buttonManualBack.addEventListener("click", moveBack);
buttonManualForward.addEventListener("click", moveForward);


function moveBack() {
    if (counter === 0) {
        console.log("counter: ", counter);
        console.log('images: ', images);

        console.log('images.length: ', images.length);
    
        counter = images.length - 1;
        console.log('images.length -1: ', counter);
    } else {
        counter = counter - 1
        console.log('counter -1: ', counter);

    }
    console.log('image.src', image.src);
    return image.src = images[counter];
}

function moveForward() {
    if (counter === images.length - 1) {
        console.log("counter in moveForward: ",counter);
        console.log("images.length in moveForward", images.length);
        counter = 0
        console.log("counter = 0 in moveForward: ",counter);

    } else {
        counter = counter + 1
        console.log("counter + 1 in moveForward: ",counter);

    }
    return image.src = images[counter];
}

buttonAutoForward.addEventListener("click", () => {
    clearInterval(backInterval);
    forwardInterval = setInterval(moveForward, 1500)
})

buttonAutoBack.addEventListener("click", () => {
    clearInterval(forwardInterval);
    backInterval = setInterval(moveBack, 1500)
})

buttonStop.addEventListener("click", () => {
    for (i = 0; i < 3; i++) {
        console.log("i: ", i);
        window.clearInterval(i);
        
    }
})