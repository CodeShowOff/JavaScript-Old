const randomColor = function () {
    // a color hexValue has total 6 character
    const hexCode = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)]; // <- to pick from random positions in hexCode
    }
    return color;
};

let intervalId; // Store interval ID to stop it later

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 1000); // Change every second
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
