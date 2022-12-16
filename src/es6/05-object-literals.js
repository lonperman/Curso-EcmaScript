//enhaced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("lonper", 25, "CO", 1))