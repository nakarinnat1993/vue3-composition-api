<template>
  <h1>Vue 3 Composition api</h1>
  <hr>
  <h3>Option Style (Vue 2)</h3>
  <button @click="countCounter">{{ counter }}</button>
  <hr>
  <RefAndReactive/>
  <hr>
  <CounterHook/>
  <hr>
</template>

<script>
import RefAndReactive from './components/RefAndReactive';
import CounterHook from './components/CounterHook';

export default {
  name: 'App',
  components: {
    RefAndReactive,CounterHook
  },
  data() {
    return {
      counter:0
    }
  },
  methods: {
    countCounter(){
      this.counter++;
    }
  },
}
</script>

<style>

</style>
