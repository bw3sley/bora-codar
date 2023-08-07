function increaseCounter() {
    const counter = document.getElementById("counter");

    let value = Number(counter.textContent);
    value++;
    
    counter.textContent = value.toString().padStart(2, "0");
}

function decreaseCounter() {
    const counter = document.getElementById("counter");
    
    let value = Number(counter.textContent);
    
    if (value > 1) {
        value--;
        counter.textContent = value.toString().padStart(2, "0");
    }
}