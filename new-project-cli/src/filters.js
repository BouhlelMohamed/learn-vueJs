import Vue from "vue";


// Make upper case 
Vue.filter('uppercase', function(v) {
    return v.toUpperCase();
});
Vue.filter('reverse', function(v) {
    return v.split("").reverse().join("");
});