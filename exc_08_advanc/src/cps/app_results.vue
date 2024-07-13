
<template>
    <ul class='list-flags'>
        <p>{{ data.name }} {{data.idade}}</p>
    </ul>
</template>


<style scoped>
    .list-flags {
        display: flex;
        width: min(1200px,95%);
        height: 540px;
        margin: 2% auto;
        border: 1px solid red;
    }
</style>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        data: Object
    });
</script>