'use strict';
//INDEX PAGE
function onLogIn() {
    var userName = document.querySelector('.name-input').value;
    var password = document.querySelector('.pass-input').value;
    var user = doLogIn(userName, password);
    if (user) window.location.assign('secret.html');
}

//SECRET PAGE
function onLoadSecretPage() {
    // var userName = String(Object.keys(localStorage));
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    var userName = user.userName;
    var nameCap = userName.charAt(0).toUpperCase() + userName.slice(1)
    var elSpan = document.querySelector('.user-name');
    elSpan.innerHTML = nameCap;
    ifAdminShowBtn(user)
}

function ifAdminShowBtn(user) {
    if (user.isAdmin) {
        var elAdminBtn = document.querySelector('.admin-btn');
        elAdminBtn.style.display = 'block';
    }
}



//Admin Page
function isAdmin() {
    var user = localStorage.getItem('user');
    user = JSON.parse(user);
    return user.isAdmin;
}

function onLoadAdminPage() {
    if (isAdmin()) {
        renderUsersTbl();
    } else window.location.assign('index.html');
}

function renderUsersTbl() {
    var users = getUsers();
    var strHTML = `<table>
    <tbody class="g-users"><tr style="background-color:#ab8cb1d0"><td>User Name</td><td>Password</td>
    <td>Last Log-In</td><td>Is Admin</td>`;
    for (var i in users) {
        strHTML += "<tr>";
        for (var j in users[i])
            strHTML += "<td>" + users[i][j] + "</td>";
        strHTML += "</tr>";
    }
    strHTML += '</tbody></table>'
    var elTable = document.querySelector(".users-tbl");
    elTable.innerHTML = strHTML;
    console.log(elTable);
}

function renderUsersCards() {
    var users = getUsers();
    var strHTML = "";
    for (var i in users) {
        strHTML += `<div class="card" onmouseover="this.innerHTML=${gUsers[i].password}\n${gUsers[i].lastLoginTime}" onmouseout="this.innerHTML='${gUsers[i].userName}'">${gUsers[i].userName}</div>`
    }
    var elTable = document.querySelector(".users-tbl");
    elTable.innerHTML = strHTML;
    console.log(elTable);
}

function onSetSort(sortBy) {
    setSort(sortBy);
    console.log(gAdminSortBy);
    gUsers.sort(compare);
    renderUsersTbl();
}