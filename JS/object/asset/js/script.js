// const a = { "name":"samkeet", "surname":"kevat" };
// const b = { "id":1, }
// const c = { "name": "ravi" }
// console.table(a);
// console.log(a);
//              Assign Method       
// assign Method: to Copies all Properties to targeted Object
// let a1 = Object.assign(b,a);
// console.log(a1);
// assign Method: override Property if  KeyValue is Same
// let a2 = Object.assign(a,c);
// console.log(a2);
//              Create Method
// create method: Inherite all KeyValues of Parent object
// let b2 = Object.create(a);
// console.log(a);
// console.log(b2);
// // create method: can assign property to Targeted keyValue
// b2.surname = "singh";
// console.log(a);
// console.log(b2);
//              Define Property Method
// define property to Only one KeyValue 
// const d = {};
// Object.defineProperty(d, 'name', {
//     value: 'raj'
// });
// console.log(d);
//              Define Properties Method
// define propertis to Only Multiple KeyValue 
// const d = {};
// Object.defineProperties(d, {
//     name: {
//     value: 'raj'
//     },
//     surname: {
//     value: 'patel'
//     }
// });
// console.log(d);
//              Entries Method
// entries method Return KeyValue & Property 
// for whole Object Data EntrieMethod uses in loop
// const a = { "name":"samkeet", "surname":"kevat" };
// for (const [k, v] of Object.entries(a)) {
//     console.log(k, ':', v);
//     // console.log(`${key}: ${value}`);
//   }
//              Freeze Method
// freeze method freeze exiting property unwritable
// const b = { "id":1, }
// Object.freeze(b);
// b.id = 2; 
// console.log(b); //it's return id property 1 not 2
//              Keys Method
// return Objecat KeyValues in ordered
// const a = { "name":"samkeet", "surname":"kevat" };
// console.log(Object.keys(a));

// Filter Via Data

let sampleDate =  new Date().getFullYear();
console.log(sampleDate);

function showTableData() { 
    document.getElementById('info').innerHTML = ""; 
    var myTab = document.getElementById('empTable'); 
    var date = document.getElementById("opt").value; 
    var index = document.getElementById(date).cellIndex; 
    
    for (i = 1; i < myTab.rows.length; i++) { 
        var objCells = myTab.rows.item(i).cells; 
        
        for (var j = index; j <= index; j++) { 
            info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML; 
        }      
        info.innerHTML = info.innerHTML + '<br />'; 
    } 
}

let dates = ["01.22.2020", "01.18.2020", "02.02.2020","01.01.2019"];
let datesFormatted = [];

dates.forEach(i => {datesFormatted.push(new Date(i).getFullYear())});

datesFormatted.sort(function(a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.info(datesFormatted);