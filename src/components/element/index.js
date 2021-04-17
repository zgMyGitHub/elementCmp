
import Row from "@element/col";
import Col from "@element/row";


const components = [
    Row,
    Col,
]
const install = (Vue) =>{
    components.forEach((component)=>{
        Vue.component(component.name,component)
    })
}

export default {
    Row,
    Col,
    install
}
export {
    Row,
    Col
}