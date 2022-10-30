import {shallowMount} from "@vue/test-utils";
import Toggler from "@/components/Toggler";

it("Toggler",async ()=>{

    const $emit = jest.fn()
    const wrapper = shallowMount(Toggler,{mocks: {$emit}})
    expect(wrapper.find('div').find('span').text()).toBe('Show issues')
    await wrapper.find('.issue-button').trigger('click')
    expect(wrapper.find('div').find('span').text()).toBe('Hide issues')
})
