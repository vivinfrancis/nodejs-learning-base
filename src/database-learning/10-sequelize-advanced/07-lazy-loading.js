const Post = require('./models/Post');
const User = require('./models/User');

User.hasMany(Post);
Post.belongsTo(User);

async function run() {

    try {
        const user = await User.findByPk(1);

        console.log(
            JSON.stringify(user, null, 2)
        );
        const posts = await user.getPosts(); // Lazy loading


        console.log(
            JSON.stringify(posts, null, 2)
        );

    } catch (error) {

        console.log(error.message);

    }

}

run();