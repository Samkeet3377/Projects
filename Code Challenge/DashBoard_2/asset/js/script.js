const list = [
    {
        item: 'Skippy Peanut Butter',
        date: '7 Nov',
        type: 'Discard',
        cost: '4027',
        last: '18 Aug',
        list: 'Grocery',
        auto: 'none',
        buy_now: 'amazon'
    },
    {
        item: 'Skippy Peanut Butter',
        date: '8 Nov',
        type: 'want',
        cost: '4000',
        last: '19 Aug',
        list: 'Grocery',
        auto: 'none',
        buy_now: 'flipkart'
    },
    {
        item: 'Skippy Peanut Butter',
        date: '9 Nov',
        type: 'waiting',
        cost: '5000',
        last: '20 Aug',
        list: 'Grocery',
        auto: 'none',
        buy_now: 'flipkart'
    },
    {
        item: 'Skippy Peanut Butter',
        date: '10 Nov',
        type: 'Cancelled',
        cost: '5000',
        last: '21 Aug',
        list: 'Grocery',
        auto: 'none',
        buy_now: 'amazon'
    }
]

// fetchJSON();
// function fetchJSON (){
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {return response.json()})
//   .then((data) => createTable(data));
// };

//Create Table 
createTable(list);
function createTable(data) {
    var tblbody = document.querySelector('.tbl-body');
    var dataitem = data.map(item => {
        return {
            item: item.item,
            date: item.date,
            type: item.type,
            cost: item.cost,
            last: item.last,
            list: item.list,
            auto: item.auto,
            buynow: item.buy_now
        }
    });
    dataitem.forEach(emp => {
        var tblrow = document.createElement('tr');
        for (const key in emp) {
            if (Object.hasOwnProperty.call(emp, key)) {
                if (['item','date','type','cost','last','list','auto','buynow'].includes(key)) {
                    var datakey = emp[key];
                    var tblcol = document.createElement('td');
                    tblcol.textContent = datakey;
                    tblrow.appendChild(tblcol);
                }
            }
        }
        tblbody.appendChild(tblrow);
    });
}

// Search Data / Give Error
function mySearch() {
    let tblbody = document.querySelector('.tbl-body');
    var searchbox = document.querySelector('#input');
    var table = document.querySelector('.table');
    var not_found = document.querySelector('#err-msg');

    tblbody.textContent = "";
    let filterdata = [];

    if (searchbox.value !== "") {
        filterdata = data.filter((item) => {
            return item.type.toUpperCase().includes(searchbox.value.toUpperCase());
            // return item.name.toLowerCase() === searchbox.value.toLowerCase();
        });
    } else {
        filterdata = data;
    }
    if (!filterdata.lenght) {
        not_found.classList.remove('d-none');
        table.classList.add('d-none');
    } else {
        not_found.classList.add('d-none');
        table.classList.remove('d-none');
    }
    createTable(filterdata);
}
// list.forEach(item => {
//     const tr = document.createElement('tr');
//     const trContent = `
//                         <td> ${list.item} </td>
//                         <td> ${list.date} </td>
                            
//                         <td> ${list.cost} </td>
//                         <td> ${list.last} </td>
//                         <td> ${list.list} </td>
//                         <td> ${list.auto} </td>
//                         <td> ${list.buy_now} </td>
//                         ` ;
//     tr.innerHTML = trContent;
//     document.querySelector('table tbl-body').appendChild(tr);                    
// })
//  <td class="${list.type === 'Discard' ? 'discard':
//               list.type === 'Want' ? 'want':
//               list.type === 'Waiting' ? 'waiting':
//               list.type === 'Cancelled' ? 'cancel'}"> $[list.type} </td> 
