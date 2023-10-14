// let txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, possimus excepturi beatae nobis reiciendis ea optio ab sapiente aut maiores modi deserunt adipisci at recusandae vero impedit laudantium dolores commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate placeat sunt quisquam, maxime vero commodi! Esse voluptatibus rerum nisi exercitationem, quod, eum repellat, dolores recusandae inventore fuga modi itaque voluptates!"
// console.log(txt);

// let t = txt.toLowerCase().split('')

// let s = []
// let a = []
// let l = []
// let o = []
// let m = []


// for(let i = 0; i < t.length; i++) {
//     if (t[i] === 's') {
//         s.push(t[i])
//     }
//     if (t[i] === 'a') {
//         a.push(t[i])
//     }
//     if (t[i] === 'l') {
//         l.push(t[i])
//     }
//     if (t[i] === 'o') {
//         o.push(t[i])
//     }
//     if (t[i] === 'm') {
//         m.push(t[i])
//     }
// }

// console.log(s);
// console.log(a);
// console.log(l);
// console.log(o);
// console.log(m);


// let b = Math.min(s.length, a.length, l.length, o.length, m.length)

// console.log(b);


let users = [
    {
        name: "Alex",
        age: 18
    },
    {
        name: "Alex",
        age: 34
    },
    {
        name: "Alex",
        age: 12
    },
    {
        name: "Alex",
        age: 15
    },
    {
        name: "Alex",
        age: 67
    },
    {
        name: "Alex",
        age: 11
    },
    {
        name: "Alex",
        age: 8
    },
    {
        name: "Alex",
        age: 45
    },
    {
        name: "Alex",
        age: 38
    },
    {
        name: "Alex",
        age: 66
    }
]

let katta = []
let kichik = []
 
console.log(users[0].age);
console.log(users[1].age);
console.log(users[2].age);
console.log(users[3].age);
console.log(users[4].age);
console.log(users[5].age);
console.log(users[6].age);
console.log(users[7].age);
console.log(users[8].age);
console.log(users[9].age);

for(let i = 0; i < users.length; i++)  {
    if (users[i].age < 18) {
        kichik.push(users[i])
    } else {
        katta.push(users[i])
    }

}

console.log(users);
console.log(katta);
console.log(kichik);