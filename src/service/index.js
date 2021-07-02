const baseURL = (route) => {
    return `https://reqres.in/api${route.trim()}`;
}

export const getUsers = async (page = 1) => {
    return await new Promise((resolve, reject) => {
        fetch(baseURL(`/users?page=${page}`))
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    });
}

export const addUser = async (userData) => {
    if (!userData) throw new Error("you hava to pass user credential to addUser()");
    if (typeof userData !== typeof {}) throw new Error("you have to pass user credential as object to addUser()");

    return await new Promise((resolve, reject) => {
        const conf = {
            method: "POST",
            body: JSON.stringify(userData)
        }
        fetch(baseURL('/users'), conf)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
    })
}

export const deleteUser = async id => {
    if (!id) throw new Error("you have to pass user id to deleteUser()");

    return await new Promise((resolve, reject) => {
        const conf = {
            method: 'DELETE'
        }
        fetch(baseURL(`/users/${id}`), conf)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}