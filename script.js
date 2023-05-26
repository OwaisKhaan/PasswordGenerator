const characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', '{', ']', '}', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?', '`', '~','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


let firstRandomPassword = document.getElementById("first-el")
let secondRandomPassword = document.getElementById("second-el")

function randomPasswordGenerator(){
    let randomPassword = ""
    for(let i = 0; i < 15; i++){
        let randomNumber = Math.floor(Math.random() * characters.length) + 1 
        randomPassword += characters[randomNumber]
    }

    return randomPassword
}

function generatePassword(){
    firstRandomPassword.textContent = randomPasswordGenerator()
    secondRandomPassword.textContent = randomPasswordGenerator()

    firstRandomPassword.style.visibility = "visible"
    secondRandomPassword.style.visibility = "visible"

}

