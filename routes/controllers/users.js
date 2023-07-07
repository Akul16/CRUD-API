import { v4 as uuidv4 } from "uuid";
let users = []

export const getUser = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();

    const userWithId = { ...user, id: userId };
    users.push(userWithId);
    res.send("post")
}

export const specificUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id)

    res.send(foundUser)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);
    res.send("delete")
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;

    const user = users.find((user) => user.id == id);
    if (name) user.name = name;
    if (age) user.age = age;

    res.send("update")
}
