
<template>
    <main>
    <button> &larr; back</button>
    <div class='details-box'>
        <img :src='data_props.flag' alt='' class='flags-img'/>
        
        <div class='details-data-box'>
            <h1>{{data_props.name}}</h1>
            <div class='country-details'>
                <div>
                <span class='labels'>Native Name: <i class='values'>{{data_props.name}}</i></span>
                <span class='labels'>Population: <i class='values'>{{data_props.popu}}</i></span>
                <span class='labels'>Region: <i class='values'>{{data_props.regn}}</i></span>
                <span class='labels'>Sub Region: <i class='values'>{{data_props.sreg}}</i></span>
                <span class='labels'>Capital: <i class='values'>{{data_props.capt}}</i></span>
                </div><div>
                <span class='labels'>Top Level Domain: <i class='values'>{{data_props.tdnm}}</i></span>
                <span class='labels'>Curriencies: <i class='values'>{{}}</i></span>
                <span class='labels'>Languages: <i class='values'>{{data_props.lang}}</i></span>
                </div>
            </div>
            <h2>
                Border Countries
                <span class='border-countries'> {{data_props.bord}} </span>
            </h2>
        </div>
    </div>
    </main>
</template>

<style scoped>
    main {
        width: min(var(--srwidth),95%);
        border: 1px solid red;
        margin: 3% auto;
    }
    button {
        width: 130px;
        padding: 8px;
        background-color: #fff;
        border: 4px solid #f0f0f0;
/*        box-shadow: 0 0 4px #f6f6f6;*/
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 3%;
    }
    .details-box {
        display: grid;
        overflow: hidden;
        grid-template-columns: 40% 60%;
        border: 1px solid blue;
    }
        .flags-img { width: 100%;}
        .details-data-box {
            padding: 6% 10%;
            display: block;
/*            background: gray;*/
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
                    font: 600 .9rem/1.3 "Nunito Sans";
                    display: block;
                }
                .country-details span i {
                    font: 500 .9rem/1.3 "Nunito Sans";
                    font-style: normal;
                    color: #717171;
                }
</style>

<script setup>
     import { defineProps, onMounted } from 'vue';
     const props = defineProps({ data_props: Object});
</script>