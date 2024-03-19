let first = prompt('Ismingizni kiriting')

let second = prompt('Bironta harf yozing')

let result = first.includes(second)

if (result == true) {
   alert(`${first} isimning ichida ${second} harifi mavjud`)
}

else {
    alert(`${first} isimning ichida ${second} harifi mavjud emas`)
}