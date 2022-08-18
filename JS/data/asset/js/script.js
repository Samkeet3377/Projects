// const user = [
//     {
//         'first_name': 'samkeet',
//         'last_name': 'kevat',
//         'contact': '123456',
//         'e_mail': 'samkeet@gmail.com',
//         'designation': 'front-end',
//         'from': 'bilimora',
//     },
//     {
//         'first_name': 'ravi',
//         'last_name': 'singh',
//         'contact': '123456',
//         'e_mail': 'ravi@gmail.com',
//         'designation': 'front-end',
//         'from': 'umargaon',
//     },
//     {
//         'first_name': 'nikunj',
//         'last_name': 'patel',
//         'contact': '123456',
//         'e_mail': 'nikunj@gmail.com',
//         'designation': 'front-end',
//         'from': 'chikhli',
//     },
//     {
//         'first_name': 'raj',
//         'last_name': 'patel',
//         'contact': '123456',
//         'e_mail': 'raj@gmail.com',
//         'designation': 'front-end',
//         'from': 'bilimora',
//     },
//     {
//         'first_name': 'kapil',
//         'last_name': 'singh',
//         'contact': '123456',
//         'e_mail': 'kapil@gmail.com',
//         'designation': 'front-end',
//         'from': 'valsad',
//     }
// ];

// Fetch Fake API with Await
// let data;
// async function fetchJSON() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(response);
//     data = await response.json();
//     if (data.length) {
//     createtbl(data);  
//     }  
// }
// Fetch Fake API with .then
fetchJSON();
function fetchJSON (){
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {return response.json()})
  .then((data) => createtbl(data));
};
// createtbl(user);
function createtbl(data) {
    const tblbody = document.querySelector('.table-body'); // put table data

    const dataitem = data.map(item => {
        return {
            id: item.id,
            name: item.name,
            address: item.address.city,
            company: item.company.name,
            website: item.website
        }
    });


    // console.log('tblbody');
    dataitem.forEach((emp) => {
        var tblrow = document.createElement('tr'); // create row
        // console.log(emp);
        for (const key in emp) {
            //if (['first_name', 'last_name', 'contact', 'e_mail', 'designation', 'from'].includes(key)) {
              //  if (['id', 'name', 'username', 'email'].includes(key)) {
                const datakey = emp[key];
                const tblcol = document.createElement('td'); // create column
                // console.log(tblcol);
                tblcol.textContent = datakey; // put properties/index value in td
                tblrow.appendChild(tblcol); // put table row value to column
            //}
        }
        // put table column value to body
        tblbody.appendChild(tblrow);
        // console.log(tblbody);
    });
}

// let inputdata = document.getElementById('input');

function mySearch() {
    // debugger
    const tableBody = document.querySelector(".table-body");
    const searchBox = document.getElementById("input");
    const table = document.getElementById("table");
    const not_found = document.querySelector("#err-msg");
    tableBody.textContent = "";

    let filterData = [];
    console.log(data);
    if (searchBox.value !== "") {
        filterData = data.filter((item) => {
            return item.name.toUpperCase().includes(searchBox.value.toUpperCase());
        });

    } else {
        filterData = data;
    }

// not found error msg  

if(!filterData.length){
    not_found.classList.remove("d-none");
    table.classList.add("d-none");
}
else{
    not_found.classList.add("d-none");
    table.classList.remove("d-none");
}

    createtbl(filterData);
}

// function mySearch() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue, find, msg;
//     input = document.getElementById("input");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table");
//     tr = table.getElementsByTagName("tr");
//     msg = document.querySelector('#err-msg');
//     find = false;
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//                 find = true;
//             } else {
//                 tr[i].style.display = "none";
//             }
        
//         if (find) {
//             // msg.style.display = "none";
//             msg.classList.add("d-none");
//         } else {
//             // msg.style.display = "";
//             msg.classList.remove("d-none");
//         } }
//     }
// }


function myPopup() {
    let popUp = document.querySelector("#pop");
    popUp.classList.toggle("d-none");
}
