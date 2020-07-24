function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading user from database ....");
        callback({ id, name: "Bill" });
    }, 2000);
}

function getRepos() {
    //Your code here
    return ["repo1", "repo2", "repo3"];
}

console.log("Begin");
getUser(1, function(user) {
    console.log(user);
    // getRepos here
});
console.log("After");
