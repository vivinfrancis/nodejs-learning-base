const sequalize = require('./config/database');
const User = require('./models/User');
const Post = require('./models/Post');

User.hasMany(Post);
Post.belongsTo(User);

async function createUserWithPosts() {
    try {
        await sequalize.sync({ force: true });

        const users = await User.create({
            name: 'Vivin',
            email: 'vivin@gmail.com',
            age: 28,
            city: 'Tuticorin'});

        await Post.create({
            title: "NodeJS Learning",
            content: "Learning Sequelize ORM with NodeJS",
            UserId: users.id
        });

        await Post.create({
            title: "Express JS Learning",
            content: "Middleware, Routing, Templating with Express JS",
            UserId: users.id
        });

        console.log("Created");
        
        const result = await User.findAll({
            include: Post
        });

        console.log(JSON.stringify(result, null, 2));
    }
    catch (error) {
        console.error('Error creating user with posts:', error.message);
    }
}

createUserWithPosts();
