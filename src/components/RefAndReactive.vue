<template>
  <h3>RefAndReactive</h3>
  <button @click="countCounterRef">Ref : {{counterRef}}</button>
  <button @click="countCounterRt">Reactive : {{counterRt.counter}}</button>
</template>

<script>
import {ref, reactive} from "vue"

export default {
    setup(){
        // ref composition api
        const counterRef = ref(0);
        function countCounterRef(){
            counterRef.value++;
        }
        
        // reactive composition api
        const counterRt = reactive({counter:0})
        function countCounterRt(){
            counterRt.counter++;
        }


        return {counterRef, countCounterRef, counterRt, countCounterRt}
    }
}
</script>

<style>

</style>