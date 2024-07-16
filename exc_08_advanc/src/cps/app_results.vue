
<template>
    <ul class='list-flags'>
        <li class='flags-box' v-for='(country,index) in data_props' :key='index'>
            <img :src='country.flags.png' alt='' class='flag-img'/>
            <div class='country-data'>
                <h1 class='countrie-name'></h1>
                <span class='population'><i class='flags-data-value'>{{country.name.common}}</i></span>
                <span class='region'><i class='flags-data-value'></i></span>
                <span class='captial'><i class='flags-data-value'></i></span>
            </div>
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
        gap: 25px;
        margin: 2% auto;
    }
        .flags-box {
            display: grid;
            overflow: hidden;
            border: 1px solid #f4f4f4;
            display: block;
            width: 230px;
            height: 250px;
            border-radius: 4px;
            cursor: pointer;
            box-shadow: 0 0 4px var(--swcolor);
/*            box-shadow: 0 0 4px 2px var(--swcolor), 0 -10px 4px 2px var(--swcolor);*/
        }
            .flag-img {
                display: block;
                width: 100%;
                height: 130px;
            }
</style>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({ data_props: Array});
</script>