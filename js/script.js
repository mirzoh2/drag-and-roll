let doc = document

let zons = doc.querySelectorAll('.zona')
let boxis = doc.querySelectorAll('.box')
let startedElement;

let dragStart = function () {
    setTimeout(() => {
       this.style = 'border: 3px solid rgb(56, 217, 56);'
       console.log('start');
    })
    startedElement = this
}

 let dr_end = function () {
    this.style = 'border: 2px solid red;'
    console.log('end');
 }
 let dr_ov = function (event) {
    event.preventDefault();
 }
let allovDrop = function (event) {
    event.preventDefault()
}
let dragDrop = function () {
    this.append(startedElement)
    console.log(startedElement);
}
let dr_lv = function () {
    this.style = 'none;'
 }


boxis.forEach(element => {
    element.addEventListener('dragover',dr_ov)
    element.addEventListener('dragstart', dragStart)
    element.addEventListener('dragend', dr_end)
    element.addEventListener('dragleave', dr_lv)
    
})

zons.forEach(element => {
    element.addEventListener('dragover', allovDrop)
    element.addEventListener('drop', dragDrop)
});