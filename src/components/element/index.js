
import Row from "@element/col";
import Col from "@element/row";
import Container from "@element/container";
import Header from "@element/header";
import Main from "@element/main";
import Aside from "@element/aside";
import Footer from "@element/footer";



const components = [
    Row,
    Col,
    Header,
    Main,
    Aside,
    Container,
    Footer
]
const install = (Vue) =>{
    components.forEach((component)=>{
        Vue.component(component.name,component)
    })
}

export default {
    Row,
    Col,
    Header,
    Main,
    Aside,
    Container,
    Footer,
    install
}
export {
    Header,
    Main,
    Aside,
    Container,
    Footer,
    Row,
    Col
}