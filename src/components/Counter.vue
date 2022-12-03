<template>
  <h1> Counter - Vuex</h1>

  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computer: {{ countComputed }}</h2>
  <button @click="increment"> +1 </button>
  <button @click="incrementByFive"> +5 </button>
  <button @click="incrementByRandomNumber" :disabled="isLoading"> + Ramdon number </button>
  <p>{{ store.getters['counter/squareCount'] }}</p>
</template>

<script setup>
import { computed, ref } from 'vue';
import { mapState, useStore, mapActions, mapGetters } from 'vuex';
const store = useStore();

//const isLoading = ref(store.state.isLoading);

const countComputed = computed(() => {
  console.log(mapState(['count']));
  return store.state.counter.count
})

const isLoading = computed(() => {
  return store.state.counter.isLoading;
});
const increment = () => {
  store.commit('counter/increment')
}

const incrementByFive = () => {
  store.commit("counter/incrementBy", 5)
}

const incrementByRandomNumber = () => {
  store.dispatch("counter/incrementRandomInt")
}

const getSquareCount = mapGetters(["squareCount"]);

// it's is more utils in vue 2
// mapActions('counter', ["incrementByRandomNumber"])
//...mapActions({ randoInt: incrementRandomInt})

</script>

<style lang="scss" scoped>

</style>