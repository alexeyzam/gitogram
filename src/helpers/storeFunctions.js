export const getReposData = (state,{fromRepo}) => {
    let repo=[]
    if (fromRepo==='liked') repo = state.likedRepos
    if (fromRepo==='recommended') repo=state.recommendedRepoData
    return repo.map(v => {
        return {
            id:v.id,
            username: v.owner.login,
            img: v.owner.avatar_url,
            name: v.name,
            description: v.description,
            issues_url: v.issues_url.replace('{/number}', ''),
            stars: v.stargazers_count,
            forks: v.forks
        }
    })
}
