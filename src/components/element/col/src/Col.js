export default {
    name:"ElCol",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        span: {
            type: Number,
            default: 24,
        },
        offset: {
            type: Number,
            default: 0,
        },
        push: {
            type: Number,
            default: 0,
        },
        pull: {
            type: Number,
            default: 0,
        },
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
    },
    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.name !== "ElRow") {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        style() {
            let style = {};
            if (this.gutter) {
                style.paddingLeft = this.gutter / 2 + "px";
                style.paddingRight = style.paddingLeft;
            }
            return style;
        },
        classList() {
            const classList = [];
            ["span", "offset", "push", "pull"].forEach((prop) => {
                if (this[prop]) {
                    classList.push(
                        prop === "span" ?
                        `el-col-${this[prop]}` :
                        `el-col-${prop}-${this[prop]}`
                    );
                }
            });
            ["xs", "sm", "md", "lg", "xl"].forEach((size) => {
                if (typeof this[size] === "number") {
                    classList.push(`el-col-${size}-${this[size]}`);
                } else if (typeof this[size] === "object") {
                    const props = this[size];
                    Object.keys(props).forEach((prop) => {
                        classList.push(
                            prop === "span" ?
                            `el-col-${size}-${props[prop]}` :
                            `el-col-${size}-${prop}-${props[prop]}`
                        );
                    });
                }
            });
            return classList;
        },
    },
    render(h) {
        return h(this.tag,{
            style:this.style,
            class:['el-col',this.classList]
        },this.$slots.default)
    }
};