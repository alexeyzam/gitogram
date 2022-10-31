import {createStore} from "vuex";
import Vuex from 'vuex'
import {getReposData} from "@/helpers/storeFunctions";

export const store = ()=>new Vuex.Store({
        state() {
            return {
                recommendedRepoData: [
                    {
                        id: 1,
                        username: 'aaaaaaaa',
                        issues: [],
                        issues_url: 'http://a.ru',
                        login: 'asasads',
                        owner:{
                            id:1,
                            username:'aaaaaaaa',
                            issues:[],
                            issues_url:'http://a.ru',
                            login:'asasads'
                        }
                    }
                ],
                repoData: [
                    {
                        id: 1,
                        username: 'aaaaaaaa',
                        issues: [],
                        issues_url: 'http://a.ru',
                        login: 'asasads',
                        owner:{
                            id:1,
                            username:'aaaaaaaa',
                            issues:[],
                            issues_url:'http://a.ru',
                            login:'asasads'
                        }
                    }
                ],
                likedRepos: [
                    {
                        id: 1,
                    }
                ],
                repoReadmeData: [
                    {
                        id: 1,
                        response: "<div>Readme sfdsdfsdf<div>"
                    }
                ]

            }
        },
        getters:{

                getRecommendedReposData(state, {fromRepo}) {
                    return getReposData(state, {fromRepo: 'recommended'})
                },
                getRepoReadme(state) {
                    return (data) => {
                        const value = state.repoReadmeData.find(v => v.id === data.id)
                        return value?.response
                    }
                },

        }
    })

