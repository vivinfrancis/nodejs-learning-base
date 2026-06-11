const sequalize = require('./config/database');
const User = require('./models/User');

async function run(){
    const transaction = await sequalize.transaction();
    const sender = await User.findByPk(10, {transaction});
    const receiver = await User.findByPk(11, {transaction});

    try{
        sender.age -= 5;
        receiver.age += 5;

        await sender.save({transaction});
        await receiver.save({transaction});

        await transaction.commit();
        console.log('Transaction committed successfully');
    }catch(error){
        await transaction.rollback();
        console.error('Transaction rolled back due to error:', error.message);
    }
}

run();