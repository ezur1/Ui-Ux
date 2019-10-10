'use strict';

var gUsers = createUsers();
var gAdminSortBy = 'Sort By';
console.log(gUsers);

function createUsers() {
    return [
        createUser('elior', '12345', true),
        createUser('dor', '1111', false),
        createUser('shay', '2222', false),
    ]
}

function createUser(userName, pass, isAdmin) {
    return {
        userName: userName,
        password: pass,
        lastLoginTime: +new Date(),
        isAdmin: isAdmin
    }
}

function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function getUsers() {
    return gUsers;
}

//Log In
function doLogIn(userName, pass) {
    var user = gUsers.find(function (user) {
        return user.userName === userName && user.password === pass;
    });
    if (user) {
        saveUser(user);
        user.lastLoginTime = Date.now();
    }
    return user;
}

function doLogOut() {
    window.location.assign('index.html');
    var user = Object.keys(localStorage);
    localStorage.removeItem(user);

}

function checkIfLoggedIn() {
    var user = Object.keys(localStorage);
    if (user.length > 0) window.location.assign('secret.html');
}

//Admin
function setSort(sortBy) {
    gAdminSortBy = sortBy;
}