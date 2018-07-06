<template>
  <div id="app" class="container">
    <wiki-header />
    <router-view/>
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import WikiHeader from '@/components/Header';

export default {
  name: 'App',
  components: {
    WikiHeader,
  },
};
</script>
