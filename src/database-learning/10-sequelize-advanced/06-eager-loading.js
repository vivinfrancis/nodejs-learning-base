const sequelize = require('./config/database');

const User = require('./models/User');
const Post = require('./models/Post');

User.hasMany(Post);
Post.belongsTo(User);

async function run() {

    try {

        const users = await User.findAll({

            include: Post

        });

        console.log(
            JSON.stringify(users, null, 2)
        );

    } catch (error) {

        console.log(error.message);

    }

}

run();