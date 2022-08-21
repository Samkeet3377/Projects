var sideMenu = document.querySelector('aside');
var menuBtn = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#close-btn');
// Show Sidebar
menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'block';
})
// Hide Sidebar
closeBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'none';
})

// Change Theme
var themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
})

// Fill Orders in Table
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.ProductNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Declined' ? 'danger' : 
                                     order.shipping === 'Pending' ? 'warning' : 'primary' }">${order.shipping}</td>
                        <td class="primary">Details</td>
                        ` ;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);                    
})