// const list = [
//     {
//         item: 'Skippy Peanut Butter',
//         date: '7 Nov',
//         type: 'Discard',
//         cost: '4027',
//         last: '18 Aug',
//         list: 'Grocery',
//         auto: 'none',
//         buy_now: 'amazon'
//     },
//     {
//         item: 'Skippy Peanut Butter',
//         date: '8 Nov',
//         type: 'want',
//         cost: '4000',
//         last: '19 Aug',
//         list: 'Grocery',
//         auto: 'none',
//         buy_now: 'flipkart'
//     },
//     {
//         item: 'Skippy Peanut Butter',
//         date: '9 Nov',
//         type: 'waiting',
//         cost: '5000',
//         last: '20 Aug',
//         list: 'Grocery',
//         auto: 'none',
//         buy_now: 'flipkart'
//     },
//     {
//         item: 'Skippy Peanut Butter',
//         date: '10 Nov',
//         type: 'Cancelled',
//         cost: '5000',
//         last: '21 Aug',
//         list: 'Grocery',
//         auto: 'none',
//         buy_now: 'amazon'
//     }
// ]

// fetchJSON();
// function fetchJSON (){
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {return response.json()})
//   .then((data) => createTable(data));
// };

//Create Table 
// createTable(list);
// function createTable(data) {
//     var tblbody = document.querySelector('.tbl-body');
//     var dataitem = data.map(item => {
//         return {
//             item: item.item,
//             date: item.date,
//             type: item.type,
//             cost: item.cost,
//             last: item.last,
//             list: item.list,
//             auto: item.auto,
//             buynow: item.buy_now
//         }
//     });
//     dataitem.forEach(emp => {
//         var tblrow = document.createElement('tr');
//         for (const key in emp) {
//             if (Object.hasOwnProperty.call(emp, key)) {
//                 if (['item','date','type','cost','last','list','auto','buynow'].includes(key)) {
//                     var datakey = emp[key];
//                     var tblcol = document.createElement('td');
//                     tblcol.textContent = datakey;
//                     tblrow.appendChild(tblcol);
//                 }
//             }
//         }
//         tblbody.appendChild(tblrow);
//     });
// }


List.forEach(list => {
    const tr = document.createElement('tr');
    //console.log(tr);
    const trContent = `
                    <td> ${list.item} </td>
                    <td> ${list.date} </td>
                    <td class="${list.type === 'Discard' ? 'discard' :
            list.type === 'Want' ? 'want' :
                list.type === 'Waiting' ? 'waiting' :
                    list.type === 'Cancelled' ? 'cancle' : ''}"> ${list.type} </td>    
                    <td> ${list.cost} </td>
                    <td> ${list.last} </td>
                    <td> ${list.list} </td>
                    <td> ${list.auto} </td>
                    <td> ${list.buy_now} </td>
                    ` ;
    //console.log(trContent);
    tr.innerHTML = trContent;
    //console.log(tr);
    // document.querySelector('tbl-body').appendChild(tr);
    const tbody = document.querySelector('.tbl-body');
    tbody.appendChild(tr);
    // console.log(tbody);
})

// Search Data / Give Error
// function mySearch() {
//     let tblbody = document.querySelector('.tbl-body');
//     var searchbox = document.querySelector('#input');
//     var table = document.querySelector('.table');
//     var not_found = document.querySelector('#err-msg');

//     tblbody.textContent = "";
//     let filterdata = [];

// if (searchbox.value !== "") {
//     filterdata = data.filter((item) => {
//         return item.type.toUpperCase().includes(searchbox.value.toUpperCase());
//         // return item.name.toLowerCase() === searchbox.value.toLowerCase();
//     });
// } else {
//     filterdata = data;
// }
// if (!filterdata.lenght) {
//     not_found.classList.remove('d-none');
//     table.classList.add('d-none');
// } else {
//     not_found.classList.add('d-none');
//     table.classList.remove('d-none');
// }
// createTable(filterdata);
// }

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var not_found = document.getElementById('err-msg');
    var flag = false;
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                flag = true;
            } else {

                tr[i].style.display = "none";
                //   flag = false;
            }
        }
    }
    if (flag) {
        not_found.classList.add('d-none');
        table.classList.remove('d-none');
    } else {
        not_found.classList.remove('d-none');
        // table.classList.add('d-none');
    }
    // createTable(filterdata);
}

var themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
})