import {mount } from "@vue/test-utils";
import { createStore } from 'vuex'
import Content from "@/components/Content";
import axios from "axios";



jest.mock('axios')

const response = [
    {
        user: {login: 'user1'},
        body: 'aaaaaaaaa',
    },
    {
        user: {login: 'user2'},
        body: 'bbbbbbbbb',
    },
    {
        user: {login: 'user3'},
        body: 'bbbbbbbbb',
    }
]

const mockedAxios=axios.mockImplementation(() => Promise.resolve({
    data:response
}))

const getStore=()=>{
    return createStore({
        state(){
            return{
                likedRepos:[
                    {
                        id:1,
                    }
                ],
                repoData:[],
            }
        },
    })
}

const getWrapper = ()=>{
    return mount(Content,{
        props:{
            repo:{
                id:1,
                username:'aaaaaaaa',
                issues:[],
                issues_url:'http://a.ru',
                login:'asasads'
            }
        },
        global:{
            plugins:[getStore()]
        }
    })
}
describe('Content',()=>{
    beforeEach(()=>jest.clearAllMocks())
    it("On click show issue executed axios request",async ()=>{
        const wrapper = getWrapper()
        await wrapper.find('.issue-button').trigger('click')
        expect(mockedAxios.mock.calls.length).toBe(1)
    })
    it("All issues showed",async ()=>{
        const wrapper = getWrapper()
        await wrapper.find('.issue-button').trigger('click')
        expect(wrapper.findAll('.issue-comment').length).toBe(3)
    })

    it("Only one request",async ()=>{
        const wrapper = getWrapper()
        await wrapper.find('.issue-button').trigger('click')
        expect(mockedAxios.mock.calls.length).toBe(1)
        await wrapper.find('.issue-button').trigger('click')
        expect(mockedAxios.mock.calls.length).toBe(1)
        await wrapper.find('.issue-button').trigger('click')
        expect(mockedAxios.mock.calls.length).toBe(1)
    })
})

