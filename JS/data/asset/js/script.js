const user = [
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
];

createtbl(user);

function createtbl(data) {
    const tblbody = document.querySelector('.table-body'); // put table data
    // console.log('tblbody');
    data.forEach((emp) => {
        const tblrow = document.createElement('tr'); // create row
        // console.log(emp);
        for (const key in emp) {
            // if (['first_name', 'last_name', 'contact', 'e_mail', 'designation', 'from'].includes(key)) {
                if (['id', 'name', 'username', 'email'].includes(key)) {
                const datakey = emp[key];
                const tblcol = document.createElement('td'); // create column
                // console.log(tblcol);
                tblcol.textContent = datakey; // put properties/index value in td
                tblrow.appendChild(tblcol); // put table row value to column
            }
        }
        // put table column value to body
        tblbody.appendChild(tblrow);
    });
}

let inputdata = document.getElementById('input');
// const search = (e) => 
function search (data){
    var tcol, textvalue, i;
    var find = false;
    // var inputdata = document.getElementById('input');
    var filter = inputdata.value.toUpperCase();
    var tbl = document.getElementById('table');
    var trow = tbl.getElementsByTagName('tr');
    var msg = document.querySelector('#err-msg');
    for (i = 0; i < trow.length; i++) {
        // let dataValue = trow[i].getElementsByTagName("td")[0].value.toUpperCase();

        tcol = trow[i].getElementsByTagName('td')[0];
        //var td = tcol.value.toUpperCase();
        if (tcol) {
            textvalue = tcol.textContent;
            // || tcol.innerText;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                trow[i].style.display = "";
                find = true;
                // err.innerText = '';
            } else {
                trow[i].style.display = "none";
                // err.innerText = "Not found";
            }
        }
        if (find) {
            // msg.style.display = "none";
            msg.classList.add("d-none");
        } else {
            // msg.style.display = "";
            msg.classList.remove("d-none");
        }
    }
}

// inputdata.addEventListener("keyup", function (e) {
//     search(e);
// });

function myPopup() {
    let popUp = document.querySelector("#pop");
    popUp.classList.toggle("d-none");
}


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(e => e = user);
//  console.log(e)