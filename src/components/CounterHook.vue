<template>
  <h3>CounterHook</h3>
  <button @click="countCounterRef">Ref : {{counterRef}}</button>
  <button @click="countCounterRt">Reactive : {{counterRt.counter}}</button>
</template>

<script>
import useCounter from './../hooks/useCounter'
export default {
  setup(){
    const {counterRef, countCounterRef} = useCounter.useCounterRef(0);
    const {counterRt, countCounterRt} = useCounter.useCounterRt(0);

    return {counterRef, countCounterRef, counterRt, countCounterRt}
  }

}
</script>

<style>

</style>