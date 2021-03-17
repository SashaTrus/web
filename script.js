function up() {
    var a = parseInt(document.getElementById("a").innerHTML);
    a +=1;
    document.getElementById("a").innerHTML = a;
}
function down() {
    var a = parseInt(document.getElementById("a").innerHTML);
    a -=1;
    document.getElementById("a").innerHTML = a;
}