'use strict';

function compare(a, b) {
    if (gAdminSortBy === 'Name') {
        var userA = a.userName;
        var userB = b.userName;
    } else if (gAdminSortBy === 'Last Log-In') {
        var userA = a.lastLoginTime;
        var userB = b.lastLoginTime;
    } else {
        var userA = b.isAdmin;
        var userB = a.isAdmin;
    }
    var comparison = 0;
    if (userA > userB) {
        comparison = 1;
    } else if (userA < userB) {
        comparison = -1;
    }
    return comparison;
}