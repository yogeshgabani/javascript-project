let num = [1, 2, 3, 4, 5];
for (let i=0; i<num.length; i++) {
    console.log(num[i]);
}

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);   
}

for (let i = 1; i < 10; i++) {
    console.log('outer loop');
    for (let j = 1; j < 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
        
    }
    
}

let arr = ["java", "react", "php", "node", "css"];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    
}
for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`value of i is ${index}`);
    
}

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index +2;
}


let ar = 0;
while (ar < arr.length) {
    console.log(`value is ${arr[ar]}`)
    ar = ar+1;

}

let h = 1;
do {
    console.log(`score is ${h}`);
    h++;
} while (h <= 10);


// for of

for (const num of arr) {
    console.log(num)
    
}

// maps

const map = new Map()
map.set('IN' , 'india')
map.set('USA' , 'united state')
map.set('FR' , 'france')
console.log(map)


for (const [key, value] of map) {
    console.log(key, ":-", value)
}

const myobj = {
    js : 'java',
    cpp: 'c++',
    rb: 'rubby',
    swift: "swift by apple"
}

for (const key in myobj) {
    // console.log(myobj[key])
    console.log(`${key} short is ${myobj[key]}`)
    
}

for (const key in arr) {
    console.log(arr[key])
}


// for each loop

const coding = ['js', 'css', 'html', 'react', 'python', 'cpp', 'node'];

// coding.forEach( function (item) {
//     console.log(item)
// } )

// coding.forEach( (e) => {
//     console.log(e)
// })

// function print(e) {
//     console.log(e);
// }
// coding.forEach(print)

coding.forEach( (e, index, coding)=> {
    console.log(e, index, coding);
})


const mycoding = [
    {
        language : "javascript",
        file: "js"
    },
    {
        language : "python",
        file: "py"
    },
    {
        language : "java",
        file: "java"
    }
]

mycoding.forEach( (e) => {

    console.log(e.language);

})



