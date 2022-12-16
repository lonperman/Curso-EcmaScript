function newUser(name, age, country){
    var name = name || 'Manuel';
    var age = age || 25;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Alejo',25,'CO');

// Params Default
function newAdmin(name = 'Manuel', age = 25, country = 'CL'){
    console.log(name, age, country);
}

newAdmin();