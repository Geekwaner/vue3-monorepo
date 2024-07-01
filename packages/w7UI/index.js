import W7Button from './components/W7Button.vue';
import W7Input from './components/W7Input.vue';


//组件对象
const allComponent = {
    W7Button,W7Input
};

//对外暴露插件对象
export default {
    install(app) {
        //注册项目全部的全局组件
        Object.keys(allComponent).forEach((key) => {
            //注册为全局组件
            app.component(key, allComponent[key]);
        });
    }
};


