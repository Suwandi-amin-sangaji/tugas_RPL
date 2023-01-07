// let nama = null;
// nama = "suwandi amin sangaji"
// console.log(nama)

// let angka = [1,3,5,4,3,8]
// angka[1] = 100
// console.log(angka)

// const mahasiwa = {
//     nama : 'suwandi amin sangaji',
//     nim : 201855202075
// }

// // // normal function
// // function capitalize(word) {
// //     return word.toUpperCase();
// //    }
// // var hasil = capitalize("Selamat Datang");
// // console.log(hasil)

// /*
//  menyimpan name dari array users ke array usernames
//  menggunakan for
// */
// // const users = [
// //     { name: "Bob", id: 1 },
// //     { name: "Jane", id: 2 },
// //     { name: "Fred", id: 3 },
// //    ];
// //    const usernames = [];
// //    for (let i = 0; i < users.length; i++) {
// //     usernames[i] = users[i].name;
// //    }
// //    console.log(usernames);


//    const users = [
//     { name: "Bob", id: 1 },
//     { name: "Jane", id: 2 },
//     { name: "Fred", id: 3 },
//    ];
//    const usernames = users.map(user => user.name);
//    console.log(usernames);

// const sayHi = (nama = 'suwandi Amin Sangaji') => `Hai ${nama}`
// sayHi('hai')

// const test1 = {
//     nama : "",
//     email : "",
//     phone : ""
// }

// const test2 = {
//     nama : "suwandi amin sangaji",
//     email : "suwandiaminsangaji@gmail.com",
//     phone : 092273672323
// } 

// let hasil = {...test1, ...test2}
// console.log(hasil)

// const nama1 = 'wandy'
// let umur = 20
// let ucapan;

// ucapan = umur < 18 ? `Hai ${nama1}` : `masih di bawah umur minimal Umur =  ${umur} Tahun`

// console.log(ucapan)

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)
      );
    }
  };
  
group.showList();