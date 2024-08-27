const users =[
    {
        id:1,
        name:'juan'
    },
    {
        id:2,
        name:'pepe'
    }
];

function getUserById(id,callback){
    const user = users.find((user)=>{
        return user.id == id;
    });
    if(!user){
        return callback(`Usuario no encontrado ${id}`);
    }
    return callback(null,user);
}

module.exports={
    getUserById,
}