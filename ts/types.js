"use strict";
var username = "john";
var age = 23;
var isWorking = true;
var friends;
friends = ["Jim", "Pim"];
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 1000] = "MALE";
    Gender[Gender["FEMALE"] = 2000] = "FEMALE";
    Gender[Gender["UNKNOWN"] = 9999] = "UNKNOWN";
})(Gender || (Gender = {}));
var g = Gender.MALE;
var status1;
status1 = 200;
