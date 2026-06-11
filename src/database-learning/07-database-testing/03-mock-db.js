async function getUsers() {

    return [
        {
            id: 1,
            name: 'Vivin'
        },
        {
            id: 2,
            name: 'John'
        }
    ];
}

async function run() {

    const users = await getUsers();

    console.log(users);

}

run();