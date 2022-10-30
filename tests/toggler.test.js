import {shallowMount} from "@vue/test-utils";
import Toggler from "@/components/Toggler";

it("Toggler",async ()=>{
    const wrapper = shallowMount(Toggler)
    expect(wrapper.find('div').find('span').text()).toBe('Show issues')
    await wrapper.find('.issue-button').trigger('click')
    expect(wrapper.find('div').find('span').text()).toBe('Show issues')
})
