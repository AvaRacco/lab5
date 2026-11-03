function greeter(person: string) {
    return "Hello, " + person;
}

let userName = "Ava";
let greeting = document.querySelector('.greeting');

if (greeting) {
greeting.textContent = greeter(userName);
}