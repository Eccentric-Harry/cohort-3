type User = {
    id: number;
    name: string;
};

const users = new Map<string, User>();

const addUser = (key: string, user: User): void => {
    users.set(key, user);
};

const getUser = (key: string): User | undefined => {
    return users.get(key);
};

const hasUser = (key: string): boolean => {
    return users.has(key);
};

const removeUser = (key: string): boolean => {
    return users.delete(key);
};

// examples
addUser("u1", { id: 1, name: "Alice" });
addUser("u2", { id: 2, name: "Bob" });

const alice = getUser("u1");
const exists = hasUser("u2");
const removed = removeUser("u2");
