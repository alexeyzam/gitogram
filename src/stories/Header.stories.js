import Header from "@/components/Header";
import AppBar from "@/components/AppBar";
import Stories from "@/components/Stories";
export default {
    title: 'Top/Header',
    component: Header,
    subcomponents:[AppBar,Stories]
}

export const TemplateWithComponents = () => ({
    components: {Header,AppBar,Stories},
    template: `
      <div class="container">
      <Header>
    <template v-slot:top>

      <AppBar></AppBar>

    </template>

    <template v-slot:middle>
      <div class="stories">
        <Stories/>
      </div>
    </template>
    </Header>
      </div>
    `,
});
TemplateWithComponents.story={
    name:'Header'
}





