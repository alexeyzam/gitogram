import {makeRequest} from "@/api/request";
import {urlPaths} from "@/api/urls";

export const getTrendigs = (
    {
        lang :lang='javascript',
        order :order = 'desc',
        sort :sort= 'stars',
        per_page :per_page= 10,
        days_ago:days_ago = 7
    }
) => {
    const params = new URLSearchParams()
    const dataSearch = new Date(Date.now() - days_ago * 24 * 60 * 60 * 1000).toISOString()
    params.set('order', order)
    params.set('sort', sort)
    params.set('per_page', per_page.toString())
    params.set('q', `language:${lang} created:>${dataSearch}`)
    return makeRequest({
        url: `${urlPaths.searchRepositories}?${params}`
    })
}

export const apiGet=({basUrl,params:params={}})=>{
    const queryParams=new URLSearchParams()
    Object.entries(params).forEach(([key,value])=>{
        if (value!=='' && value!==null && value!==undefined){
            queryParams.set(key,String(value))
        }
    })
    const url = queryParams.toString()?`${basUrl}?${params}`:basUrl
    return makeRequest({url,method:'get'})
}
export const getRepoReadme=({owner,repo})=>{
    const headers={'accept': 'application/vnd.github.v3.html+json'}
    const url=`/repos/${owner}/${repo}/readme`
    return makeRequest({url,method:'get',data:{},headers})
}
