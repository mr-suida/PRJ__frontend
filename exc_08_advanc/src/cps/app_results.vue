
<template>
    <ul class='list-flags'>
        <li class='flags-box' v-for='(country,index) in data_props' :key='index' @click="$emit('flag_click',index)">
            <img :src='country.flags.png' alt='' class='flag-img'/>
            <h1 class='countrie-name'>{{country.name.common}}</h1>
            <span class='labels'>Population: <i class='values'>{{country.population.toLocaleString()}}</i></span>
            <span class='labels'>Region: <i class='values'>{{country.region}}</i></span>
            <span class='labels'>Capital: <i class='values'>{{country.capital}}</i></span>
        </li>
    </ul>
</template>


<style scoped>
    .list-flags {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: min(1200px,95%);
        height: 540px;
        overflow: auto;
        gap: 22px;
        margin: 2% auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: 0 8px;
    }
    .list-flags::-webkit-scrollbar {display: none;}
        .flags-box {
            display: grid;
            overflow: hidden;
            display: block;
            width: 260px;
            height: 310px;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 0 10px var(--swcolor);
        }
            .flag-img {
                display: block;
                width: 100%;
                height: 150px;
            }
            .countrie-name {
                display: block;
                font: 800 1rem/1 "Nunito Sans";
                padding: 9%;
            }
            .labels {
                display: block;
                font: 600 .9rem/1 "Nunito Sans";
                padding: 2% 9%;
            }
            .values {
                font-style: normal;
                font: 200 .9rem/1 "Nunito Sans";
                color: #313131;
            }
</style>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ data_props: Array});
</script>