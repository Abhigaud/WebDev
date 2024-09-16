const post = {
    username : "@abhishekgaud",
    content : "This is my #firstPost",
    likes : 140,
    reposts : 5,
    tags : ["@shiva", "@utsav"]
};

// there are 2 ways -----
console.log(post["likes"]);
console.log(post.content);
console.log(post.tags[1]);

let prop = "reposts";
console.log(post[prop]);

console.log("---------------conversion in get Values--------");
const obj = {
    1 : 'a',
    2 : 'b',
    true : 'c',
    null : 'd',
    undefined : 'e' 
};
