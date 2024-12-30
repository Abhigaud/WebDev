const post = {
    username : "@Abhi",
    content : "This iis my first post",
    likes : 150,
    repost : 5,
    tags : ['@shiva', '@hritik', '@sagar']

}
console.log(post);
console.log(post['username']);
console.log(post.tags);
console.log(post.tags[1]);
console.log(post.likes);

let Obj = {
    1:"a",
    2:"b",
    null:"c",
    true:"d",
}

console.log(Obj[1]);
console.log(Obj.null);
console.log(Obj[2]);

Obj.null = "kuch nahi";
console.log(Obj);

const classInfo = {
    aman: {
        grade: "a",
        city: "gwalior"
    },
    Radha : {
        grade: "a+",
        city : "lucknow"
    },
    shiva:{
        grade : "b",
        city : "Lahar"
    }
}

console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.aman.city);

const ClassInfo = [
    {
        name: "aman",
        grade: "a",
        city: "gwalior"
    },
    {
        name: "Shradha",
        grade: "a+",
        city : "lucknow"
    },
    {
        name: "shiva",
        grade : "b",
        city : "Lahar"
    }
];

console.log(ClassInfo);
console.log(ClassInfo[1].city);
console.log(ClassInfo[1]);

