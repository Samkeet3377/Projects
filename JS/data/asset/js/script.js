// const user = [
// {
//     'first_name': 'samkeet',
//     'last_name': 'kevat',
//     'contact': '123456',
//     'e_mail': 'samkeet@gmail.com',
//     'designation': 'front-end',
//     'from': 'bilimora',
// },
// {
//     'first_name': 'ravi',
//     'last_name': 'singh',
//     'contact': '123456',
//     'e_mail': 'ravi@gmail.com',
//     'designation': 'front-end',
//     'from': 'umargaon',
// },
// {
//     'first_name': 'nikunj',
//     'last_name': 'patel',
//     'contact': '123456',
//     'e_mail': 'nikunj@gmail.com',
//     'designation': 'front-end',
//     'from': 'chikhli',
// },
// {
//     'first_name': 'raj',
//     'last_name': 'patel',
//     'contact': '123456',
//     'e_mail': 'raj@gmail.com',
//     'designation': 'front-end',
//     'from': 'bilimora',
// },
// {
//     'first_name': 'kapil',
//     'last_name': 'singh',
//     'contact': '123456',
//     'e_mail': 'kapil@gmail.com',
//     'designation': 'front-end',
//     'from': 'valsad',
// }
// ];

// createtbl(user);

function createtbl(data) {
    const tblbody = document.querySelector('.table-body'); // put table data
    // console.log('tblbody');
    data.forEach((emp) => {
        const tblrow = document.createElement('tr'); // create row
        // console.log(emp);
        for (const key in emp) {
            if (Object.hasOwnProperty.call(emp, key)) {
                // if (['first_name', 'last_name', 'contact', 'e_mail', 'designation', 'from'].includes(key)) {
                if (['id','name', 'username', 'email', 'website'].includes(key)) {
                    const datakey = emp[key];
                    const tblcol = document.createElement('td'); // create column
                    // console.log(tblcol);
                    tblcol.textContent = datakey; // put properties/index value in td
                    tblrow.appendChild(tblcol); // put table row value to column
                }
            }
        }
        // put table column value to body
        tblbody.appendChild(tblrow);
    });
}

// 
function searchdata(){
    const tblbody = document.querySelector('.table-body');
    const inputsearch = document.querySelector('#input');
    tblbody.textContent = '';
    let filter = [];

    if( inputsearch.value !== '' ) {
        filter = user.filter((item) => {
            return item.username.toLowerCase() === inputsearch.value.toLowerCase();
        });
    } else {
        filter = user;
    }
    createtbl(filter);
}

function myPopup() {
    let popUp = document.querySelector("#pop");
    popUp.classList.toggle("d-none");
}

// const user = [];
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((data) => {
//         user = data;
//         createtbl(user);
//     }); 
//  console.log(user);

let user = [];
async function userlist() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    user = await response.json();
    createtbl(user);
}
userlist();