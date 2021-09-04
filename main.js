var images = [
    "https://img.freepik.com/free-vector/cartoon-king-holding-golden-scepter_29190-5435.jpg?size=338&ext=jpg",
    "https://img.freepik.com/free-vector/beautiful-queen-cartoon-character-sticker_1308-58920.jpg?size=338&ext=jpg",
    "http://techworm.page/wp-content/uploads/2019/05/download-17.png",
    "https://img.freepik.com/free-vector/cartoon-baby-monkey-hanging-tree-branch_29190-4769.jpg?size=626&ext=jpg"
];
var names = ["Sitaram Pawar", "Kamini Patil", "Ved Pawar", "Kanva Pawar"];

var i = 0;
function update(){
    i++;
    var number_array_members = 4;
    if (i > number_array_members){
        i = 0;
    }
    var updated_img = images[i];
    var update_names = names[i];

    document.getElementById("mainimg").src = updated_img;
    document.getElementById("name").innerHTML = update_names;
}