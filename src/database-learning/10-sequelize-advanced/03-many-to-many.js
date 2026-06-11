const sequalize = require('./config/database');
const Student = require('./models/Student');
const Course = require('./models/Course');

Student.belongsToMany(Course, {
    through: 'StudentCourses'
});

Course.belongsToMany(Student, {
    through: 'StudentCourses'
});

async function createData(){
    await sequalize.sync({ force: true });

    const student1 = await Student.create({
        name: 'Vivin',
        email: 'vivinnow@gmail.com',
        age: 28,
    });

    const student2 = await Student.create({
        name: 'John',
        email: 'john@gmail.com',
        age: 22,
    });

    const course1 = await Course.create({
        title: 'NodeJS Learning',
        description: 'Learning Sequelize ORM with NodeJS'
    });

    const course2 = await Course.create({
        title: 'Express JS Learning',
        description: 'Middleware, Routing, Templating with Express JS'
    });

    await student1.addCourse(course1);
    await student1.addCourse(course2);
    await student2.addCourse(course1);
    await student2.addCourse(course2);

    console.log("Data created successfully");

    const result = await Student.findAll({
        include: Course
    });

    console.log(JSON.stringify(result, null, 2));
}

createData();