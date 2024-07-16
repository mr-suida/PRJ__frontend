
<template>
    <ul class='list-flags'>
        <li class='flags-box' v-for='(country,index) in data_props' :key='index'>
            <img src='' alt='' class='flag-img'/>
            <h1 class='countrie-name'></h1>
            <span class='population'><i class='flags-data-value'>{{country.name.common}}</i></span>
            <span class='region'><i class='flags-data-value'></i></span>
            <span class='captial'><i class='flags-data-value'></i></span>
        </li>
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
        data_props: Array
    });
    
    // console.log(data_props.value)

</script>