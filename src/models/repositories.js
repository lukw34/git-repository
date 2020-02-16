export const createRepositories = (
    {
        id, full_name: name, description, owner: {login, avatar_url: avatar}
    }) => ({
    id: String(id),
    name,
    description: description || '',
    owner: {
        avatar,
        login
    }
});