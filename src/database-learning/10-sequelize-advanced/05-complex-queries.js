const User = require('./models/User');
const {Op} = require('sequelize');

async function run(){
    try{
        const users = await User.findAll(
            {
                where:{
                    age:{
                        [Op.gt]: 25
                    },
                    city: 'Tuticorin',
                    email:{
                        [Op.like]: '%@gmail.com'
                    }
                },
                order:[['age', 'DESC']],
                limit: 2
            }
        );
        console.log(JSON.stringify(users, null, 2));
    }catch(error){
        console.error(error.message);
    }
}

run();