function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return 'Not Found';
    }
}
// Only change code above this line

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");
checkObj({city: "Seattle"}, "city");
checkObj({city: "Seattle"}, "district");
checkObj({pet: "kitten", bed: "sleigh"}, "gift");