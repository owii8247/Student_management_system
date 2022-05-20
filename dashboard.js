let studentData = JSON.parse(localStorage.getItem("data"))
let length = studentData.length

counter = document.getElementById("counter")
counter.innerText=`Batch : ${length}`

studentData.map(function(el,index){
    let div = document.createElement("div")

    let img = document.createElement("img")
    img.src= el.image;

    let name = document.createElement("h3")
    name.innerText = `Student Name : ${el.name}`;

    let course = document.createElement("h3")
    course.innerText = `Course : ${el.course}`;

    let unit = document.createElement("h3")
    unit.innerText = `Unit : ${el.unit}`;

    let batch = document.createElement("h3")
    batch.innerText = `Batch : ${el.batch}`;

    let remove = document.createElement("button")
    remove.innerText= "Remove"
    remove.addEventListener("click",function(){
        removeStudent(el,index)
    })
    div.append(img,name,course,unit,batch,remove)
    document.getElementById("container").append(div)

})
function removeStudent(el,index){
    studentData.splice(index,1)
    localStorage.setItem("data",JSON.stringify(studentData))
    window.location.reload()
    
}