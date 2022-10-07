import Progress from "@/components/Progress";

export default {
    title:'MainPage/App/Content/Progress',
    component: Progress,
    argTypes:{
        progressFinished:{
            action: 'progressFinished',
            description:'progress ended'
        }
    }
}

const Template = (args) => ({
    components:{Progress},
    setup(){
        return {args}
    },
    template:`
      <Progress v-bind="args" @progress-finished="args.progressFinished"></Progress>`
})
export const TemplateBinded = Template.bind({})
TemplateBinded.args={
    timeProgress:5,
    height:10,
    progressIncrement: 0.2,
    color: 'Green',
}

TemplateBinded.story={
    name:'Progress'
}
