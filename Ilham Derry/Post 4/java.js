// Nomor 1

let arr = [7, "mommy", " ", false, 9]
function falsy(arr) {
var falsy;
var trueArr = [];

   for (i = 0; i < arr.length; i++) {
      falsy =  Boolean(arr[i]);
      if (falsy === true) {
         trueArr.push(arr[i]);
      }
   }

return trueArr;
}
console.log(falsy(arr));


// Nomor 2

function findLongestWord(str) {
   var t = 0;
   var ts = str.split(' ');
   for(var i=0; i<ts.length;i++){
      if(ts[i].length>t){
         str = ts[i];
         t = ts[i].length;
      }
   }
   return str;
}
var str = findLongestWord('Nama saya Ilham Derry Nugroho');
console.log('jumlah huruf terpanjang dari ' + '"Nama saya Ilham Derry Nugroho"' +' adalah '+str+' dengan jumlah huruf '+str.length);

// Nomor 3//

// Notasi Big O notation dari nomor 2 merupakan notasi O(n)
// O(n) atau Linear Time adalah ketika runtime dari fungsi kita berbanding lurus dengan jumlah input yang diberikan.
// Artinya dalam hal nomor 2 semakin banyak kata yang diinput maka waktu yang diperlukan untuk menemukan hasilnya lebih lama



// Nomor 4//

let hobby = ["Renang", "Jogging", "Sepeda", "Nonton Anime"];
let pushHobby = [...hobby]
pushHobby.push("Main Game")
let loveHobby = [...hobby].pop()
let hateHobby = [...hobby].slice(0,2)

class student {
   constructor(name, age, birth, gender, id) {
      this.name = name;
      this.age = age;
      this.birth = birth;
      this.gender = gender;
      this.id = id;
   }

   introduce() {
      console.log(`Hi, my name is ${this.name}. My age is ${this.age}, i was born ${this.birth}. I am a ${this.gender ? "Men" : "Women"}. My ID is ${this.id}, My hobby is` + " " + loveHobby, " and I hate"+ " " + hateHobby);
   }
}
let derry = new student("Derry", 23, "14 Maret 1998", true, 666);
derry.introduce()