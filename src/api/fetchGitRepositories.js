import {createRepositories} from "../models/repositories";

export default async () => {
    const response = await fetch('https://api.github.com/repositories');
    const data = await response.json();
    return data.map(createRepositories)
}