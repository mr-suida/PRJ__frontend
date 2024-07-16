
<template>
    <main>
    <button> back</button>
    <div class='details-box'>
        <img :src='data_props.flags.svg' alt='' class='flags-img'/>
        
        <div class='details-data-box'>
            <h1>{{data_props.name.common}}</h1>
            <div class='country-details'>
                <div>
                <span class='labels'>Native Name: <i class='values'>{{}}</i></span>
                <span class='labels'>Population: <i class='values'>{{data_props.population.toLocaleString()}}</i></span>
                <span class='labels'>Region: <i class='values'>{{data_props.region}}</i></span>
                <span class='labels'>Sub Region: <i class='values'>{{data_props.subregion}}</i></span>
                <span class='labels'>Capital: <i class='values'>{{data_props.capital[0]}}</i></span>
                </div><div>
                <span class='labels'>Top Level Domain: <i class='values'>{{data_props.tld[0]}}</i></span>
                <span class='labels'>Curriencies: <i class='values'>{{data_props.currencies}}</i></span>
                <span class='labels'>Languages: <i class='values'>{{}}</i></span>
                </div>
            </div>
            <h2>
                Border Countries
                <span class='border-countries'> teste1 </span>
                <span class='border-countries'> teste2 </span>
                <span class='border-countries'> teste3 </span>
            </h2>
        </div>
    </div>
    </main>
</template>

<style scoped>
    main {
        width: min(var(--srwidth),95%);
        border: 1px solid red;
        margin: auto auto;
    }
    button {
        width: 130px;
        padding: 8px;
        background-color: #fff;
        border: 1px solid #c3c3c3;
        border-radius: 5px;
        cursor: pointer;
    }
    .details-box {
        display: grid;
        overflow: hidden;
        grid-template-columns: 40% 60%;
        border: 1px solid blue;
    }
        .flags-img { width: 90%; padding: 2%;}
        .details-data-box {
            padding: 30px;
            display: block;
        }
            .details-data-box h1 {
                display: block;
                font: 800 1.7rem/1 "Nunito Sans";
            }
            .country-details {
                margin: 4% 0;
                display: grid;
                grid-template-columns: 50% 50%;
            }
                .country-details span {
                    font: 800 .9rem/1.3 "Nunito Sans";
                    display: block;
                }
</style>

<script setup>
     import { defineProps, onMounted } from 'vue';
     const props = defineProps({ data_props: Object});
</script>