import { GET } from '../utils/axios'

export const login = async userName => GET(`/user/${userName}`)
export const getUserRepos = async userName => GET(`/user/${userName}/repos`)
export const getUserGist = async userName => GET(`/user/${userName}/gists`)
export const getUserOrgs = async userName => GET(`/user/${userName}/orgs`)