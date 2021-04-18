<template>
  
  <div :class="['el-container',{'is-vertical':isVertical}]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"ElContainer",
    props:{
        direction:{
            type:String,
            validator:val => ['horizontal','vertical'].includes(val)
        }
    },
    computed:{
        isVertical(){

            if(this.direction === "vertical"){
                return true;
            }else if(this.direction === "horizontal"){
                console.log(2222)
                return false;
            }

            return  this.$slots && this.$slots.default ?
            this.$slots.default.some((vnode)=>{
                    const tag = vnode.componentOptions && vnode.componentOptions.tag;
                    return tag === "el-header" || tag == "el-footer"
                    
                })
            :false


            // if(this.$slots && this.$slots.default){
            //     return this.$slots.default.some((vnode)=>{
            //         const tag = vnode.componentOptions && vnode.componentOptions.tag;
            //         if(tag === "el-header" || tag == "el-footer"){
            //             return true;
            //         }
            //     })
            // }else{
            //     return false;
            // }
        }
    }
}
</script>

<style>

</style>