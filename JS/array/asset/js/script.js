const a1 = ["A","B","C","D","E","F","G","H"];
const s1 = [1,2,3,10,20,30,100,200,300];
// // Poping last element form Array
// var a = a1.pop();
// console.log(a);
// console.log(a1);
// // Splice Remove Targeted Array element
// var b = a1.splice(3,2);
// console.log(b);
// console.log(a1);
// Splice form Array-2
// console.log(a1);
// var c = a1.splice(2,2,"Z","Y");
// console.log(c);
// console.log(a1);
// // Push add element in last of Array
// var d = a1.push("C","D","E","F");
// console.log(d);
// console.log(a1);
// // Merge Two Array
// const a2 = ["H","I","J","K"];
// var e = a1.concat(a2);
// console.log(a1);
// console.log(a2);
// console.log(e);
// // Search Element in Array
// var f = a1.includes("y");
// console.log(f);
// console.log(a1);
// // Return Index of Array
// var g = a1.indexOf("Z");
// console.log(g);
// console.log(a1);
// // Return Part Of Array
// console.log(a1);
// var h = a1.slice(2,5);
// console.log(h);
// console.log(a1);
// // Filter From Array
// console.log(s1);
// var i = s1.filter((x)=>(x,x>=10)); 
// console.log(i);
// console.log(s1);
// // Find Specifice elemennt form Array & Return First Element it Finds
// console.log(s1);
// var j = s1.find((x)=>(x,x>10));
// console.log(j);
// console.log(s1);
// //Removes First Element from Array
// var k = a1.shift();
// var k2 = s1.shift();
// console.log(k);
// console.log(a1);
// console.log(k2);
// console.log(s1);
// //Add Element in Array From First
// var l = a1.unshift("A","X","Y");
// var l2 = s1.unshift(1,10,100);
// console.log(l);
// console.log(a1);
// console.log(l2);
// console.log(s1);
// // use of Entries
// console.log(a1);
// var en = a1.entries();
// for (let [i,e] of en) {
//     console.log(i,e);
//   }
// console.log(a1);

// const dt = new Date();
// const day = dt.getDate();
// const month = dt.getMonth();
// const year = dt.getFullYear();
// document.getElementById("output").innerHTML = day + " / " + month + " / " + year;
// document.getElementById("output").innerHTML = dt;
// const america_chicago = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
// const japan = new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' });
// console.log(america_chicago);
// console.log(japan);
// const ind = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
// const aus = new Date().toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
// const can = new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' });
// const usa = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });

// setInterval( 
    function update() {
    var country = document.getElementById('country');
    var option = country.options[country.selectedIndex];

    let t = new Date();
    // let formate ={ weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric",second:"numeric"};
    const ind = t.toLocaleString('en-US', 
        { weekday:"long", year:"numeric", month:"short", day:"numeric", 
          hour:"numeric", minute:"numeric",second:"numeric", timeZone: 'Asia/Kolkata' });
    const aus = t.toLocaleString('en-US', 
    { weekday:"long", year:"numeric", month:"short", day:"numeric", 
    hour:"numeric", minute:"numeric",second:"numeric", timeZone: 'Australia/Sydney' });
    const can = t.toLocaleString('en-US', 
    { weekday:"long", year:"numeric", month:"short", day:"numeric", 
    hour:"numeric", minute:"numeric",second:"numeric", timeZone: 'America/Toronto' });
    const usa = t.toLocaleString('en-US', 
    { weekday:"long", year:"numeric", month:"short", day:"numeric", 
    hour:"numeric", minute:"numeric",second:"numeric", timeZone: 'America/Chicago' });

    // document.getElementById('output').innerHTML = option.value;
    var cnt = option.value;
    if (cnt == 'ind') {
        document.getElementById('output').innerHTML = ind;
    }else if (cnt == 'aus') {
        document.getElementById('output').innerHTML = aus;
    }else if (cnt == 'can') {
        document.getElementById('output').innerHTML = can;
    }else if (cnt == 'usa') {
        document.getElementById('output').innerHTML = usa;
    }else {
        document.getElementById('output').innerHTML = "Please Select Country";
    }
    
    }
    // ,1000);
    setInterval(update,1000);
    
    // let contain;
    // switch (cnt) {
    //     case 0:
    //         contain = 'ind'
    //         document.getElementById('output').innerHTML = ind;
    //         break; 
    //     case 1:
    //         contain = 'aus'
    //         document.getElementById('output').innerHTML = aus;
    //         break; 
    //     case 2:
    //         contain = 'can'
    //         document.getElementById('output').innerHTML = can;
    //         break; 
    //     case 3:
    //         contain = 'usa'
    //         document.getElementById('output').innerHTML = usa;
    //         break;   
    // }
    // document.getElementById('output').innerHTML = "this is success";
    // const myTimeout = setTimeout(update, 1000);


// function change() {
//     const myTimeout = setTimeout(change, 1000);
// }
// update();