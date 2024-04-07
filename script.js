const button = document.querySelectorAll(".numBtn")
const display = document.querySelector(".displayCalc")

button.forEach((element) => {
    element.addEventListener("click",(()=>{
        console.log(element.value)    
        console.log(typeof display.value)    

        if (element.value === "AC") {
            display.value = ``
        }
        else if(element.value === "DE"){
            let temp = display.value.slice(0,display.value.length-1)
            display.value = temp
        }
        else if(element.value === "="){
            display.value = eval(display.value)
        }
        else{
            display.value += element.value
        }
    }))
});