<template>
  <div id="app" class="container">
    <wiki-header />
    <div class="wiki-container">
      <wiki-sidebar />
      <router-view />
    </div>
    <wiki-footer />
  </div>
</template>

<script>
/**
 * Internal dependencies
 */
import WikiHeader from '@/components/Header';
import WikiFooter from '@/components/Footer';
import WikiSidebar from '@/components/Sidebar';

export default {
  name: 'App',
  components: {
    WikiHeader,
    WikiFooter,
    WikiSidebar,
  },
};
</script>
