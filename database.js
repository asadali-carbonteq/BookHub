
const users = [
    { username: "asad", email: "test@gmail.com", password: "test" },
    { username: "user2", email: "test@gmail.com", password: "password2" },
];

function addUser(newUser) {
    users.push(newUser);
}

function checkCredentials(username, password) {
    return users.find((user) => user.username === username && user.password === password);
}

export { addUser, checkCredentials };
