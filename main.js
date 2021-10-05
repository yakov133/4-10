//targil 6
//https://jsonplaceholder.typicode.com/posts
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText)
//       for (const iterator of obj) {
//           console.log(iterator.userId);
//           console.log(iterator.title);
//       }
//       document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };

//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhttp.send();
// }

//targil 7
//https://jsonplaceholder.typicode.com/posts
// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         let obj = JSON.parse(this.responseText)
//         for (const iterator of obj) {
//             console.log(iterator.userId);
//             console.log(iterator.title);
//             document.getElementById("list").innerHTML += `<li>${iterator.userId} : ${iterator.title}<li>`;
//         }
//       }
//     };
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
//     xhttp.send();
//   }

//targil 8 
// https://jsonplaceholder.typicode.com/todos
// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       let obj = JSON.parse(this.responseText)
//       for (const iterator of obj) {
//           console.log(iterator.completed);
//           console.log(iterator.id);
//           console.log(iterator.title);
//       }
//       document.getElementById("demo").innerHTML = this.responseText;
//     }
//   };

//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//   xhttp.send();
// }

//targil 9 
// https://jsonplaceholder.typicode.com/todos
// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         let obj = JSON.parse(this.responseText)
//         for (const iterator of obj) {
//             console.log(iterator.completed);
//             console.log(iterator.id);
//             console.log(iterator.title);
//             document.getElementById("list").innerHTML += `<li>id = ${iterator.userId}, completed = ${iterator.completed}, title = ${iterator.title}<li>`;
//         }
//       }
//     };
  
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     xhttp.send();
//   }


//targil 10 
// https://jsonplaceholder.typicode.com/todos
// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         document.getElementById("demo").innerText = "";
//         let obj = JSON.parse(this.responseText)
//         for (const iterator of obj) {
//             console.log(iterator.completed);
//             console.log(iterator.id);
//             console.log(iterator.title);
//             document.getElementById("list").innerHTML += `<li>id = ${iterator.userId}, completed = ${iterator.completed}, title = ${iterator.title}<li>`;
//         }
//       }
//       else{
//         document.getElementById("demo").innerText = "Loading";
//       }
//     };
  
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     xhttp.send();
//   }

//targil 11
// https://jsonplaceholder.typicode.com/todos
const removeItem = (id)=>{
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
    element.classList.add("Dot");
    let num = document.getElementById("demo").innerText;
    num = Number(num.slice(8))-1;
    document.getElementById("demo").innerText = `todos = ${num}`;
}

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById("demo").innerText = "";
        let obj = JSON.parse(this.responseText);
        let longTitl="",shortTitle=`lalalalalal`;
        document.getElementById("demo").innerText = `todos = ${obj.length}`;

        for (let i =0; i<obj.length; i++) {
            console.log(obj[i].completed);
            console.log(obj[i].id);
            console.log(obj[i].title);
            if(longTitl.length < obj[i].title.length){
                longTitl = obj[i].title
            }
            if(shortTitle.length > obj[i].title.length){
                shortTitle = obj[i].title
            }
            document.getElementById("list").innerHTML += `<li id="${i}" onclick="removeItem(${i})">id = ${obj[i].userId}, completed = ${obj[i].completed}, title = ${obj[i].title}<li>`;
        }
        shortTitle = longTitl;
        for (let i =0; i<obj.length; i++) {
            if(shortTitle.length > obj[i].title.length){
                shortTitle = obj[i].title
            }
        }

        document.getElementById("titles").innerText = `longest title = ${longTitl}
        shortest title = ${shortTitle}`;
      }
      else{
        document.getElementById("demo").innerText = "Loading";
      }
    };
  
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhttp.send();
}

function serach(){
    console.log( document.getElementById("serach").value );
    let arrLi = document.getElementsByTagName("li");
    console.log(arrLi);
}


/*
דרוש ליצור ב vs code דף HTML עם כפתור ,לחיצה על הכפתור ניגשת  לhttps://jsonplaceholder.typicode.com/todos ומדפיסה את המאפינים completed,id,title של כל todo לתוך ה console*/