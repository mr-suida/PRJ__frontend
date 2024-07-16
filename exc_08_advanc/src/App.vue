
<template>
    <header>
      <h1>Where in the Word?</h1>
      <button> Dark Mode</button>
    </header>
    <hr/>
    
    <div class="search-fields">
      <div class="search-field">
        <input type="url" placeholder="Search for a cauntry" @keyup="filter($event.target.value)"/>
        <ul class="search-result">
            <li><img class='result-ico' src='' alt=''/><span class='result-lb'></span>brasil</li>
            <li><img class='result-ico' src='' alt=''/><span class='result-lb'></span>argentina</li>
            <li><img class='result-ico' src='' alt=''/><span class='result-lb'></span>polonia</li>
        </ul>
      </div>
      <select class="select-field" @change="update_region($event.target.value)">
        <option disabled selected hidden>Filter By Region</option>
        <option value='All'>All</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>America</option>
        <option value='Asia'>Ásia</option>
        <option value='Europe'>Europe</option>
        <option value='Oceania'>Oceania</option>
      </select>
    </div>
      
    <component  v-if="current_api_props.length" :is="current_component" :data_props="current_api_props"/>
</template>

<style scoped>
  header {
    background-color: var(--bgcolor);
    color: var(--fgcolor);
    align-items: center;
    display: flex;
    width: min(1200px,95%);
    height: 70px;
    margin: auto auto;
  }
    header > h1 { font: bolder 1.1rem/1 monospace;}
    header > button {
      text-align: right;
      padding: 10px 0 10px 3%;
      margin-left: auto;
      cursor: pointer;
      font: bolder .9rem/1 monospace;
      border: none;
      outline: none;
      color: var(--fgcolor);
      background: var(--bgcolor) url('res/moon.svg') 10px 50% / 15% no-repeat;
    }
    hr {
      border: none;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .search-fields {
      display: flex;
      width: min(1200px,95%);
      margin: 2% auto auto;
    }
      .search-field {
        position: relative;
        display: block;
        width: 300px;
        padding: 2px;
        background-color: var(--bgcolor);
        border-radius: 3px;
        background: url('res/lupe.svg') 5% 45% / 9% no-repeat;
      }
        .search-field > input {
          display: block;
          border: none;
          width: 100%;
          padding: 14px;
          text-align: center;
          background: none;
          box-shadow: 0 0 4px var(--swcolor);
          outline: none;
          margin-left: auto;
          font: 500 .8rem/1 monospace;
        }
      .search-result {
          position: absolute;
          width: 99%;
          height: 0;
          overflow: hidden;
          list-style: none;
          margin-top: 2%;
          background: #fff;
          box-shadow: 0 0 4px var(--swcolor);
          font: 400 .8rem/1 monospace;
      }
          .search-result li {
            display: flex;
            align-items: center;
            margin: 0;
            width: 100%;
            padding: 5%;
            cursor: pointer;
          }
          .search-result li:hover {
            background-color: #c4c4c4;
          }
              .result-ico {
                display: block;
                width: 9%;
              }
              .result-lb {
                margin-left: 5%;
              }
        .select-field {
            border: none;
            background: none;
            padding: 14px;
            padding-right: 20px;
            display: block;
            margin-left: auto;
            border-radius: 4px;
            box-shadow: 0 0 4px var(--swcolor);
            font: 700 .8rem/1 monospace;
            cursor: pointer;
            margin-bottom: 10px;
        }
</style>

<script setup>
    import { ref, onMounted ,markRaw} from 'vue';
    import { Trie } from '@/libs/tree_trie.js';
    import appResults from './cps/app_results.vue'

    const current_component = ref(markRaw(appResults))
    const current_api_props = ref([])
    const current_region    = ref('All')  
    
    const api_array = ref([])
    const trie = new Trie();

    async function load_countries(){
        let buffer_data = localStorage.getItem('contries_api_data');

        if (buffer_data == null ) {
            await fetch('https://restcountries.com/v3.1/all').then((res)=> res.text()).then((text)=>{
                localStorage.setItem('contries_api_data',text);
            })
        }

        buffer_data = localStorage.getItem('contries_api_data');
        api_array.value = JSON.parse(buffer_data)
      
        api_array.value.forEach((item,index)=>{
            trie.insert(item.name.common.toLowerCase().replaceAll(' ',''),index)
        })
        current_api_props.value = api_array.value
    }

    const filter = function(value) {
        if (value.length > 0 ) {
            const results = trie.search(value)
            const countries = results.reduce( (ret,x) => {
                if ( current_region.value == 'All' ) ret.push(api_array.value[x]);
                if ( current_region.value == api_array.value[x].region ) ret.push(api_array.value[x]);
                return ret
            },[]);
            current_api_props.value = countries;
        }else 
            current_api_props.value = api_array.value;
    }

    onMounted(() => load_countries())
    const update_region = (new_value)=>{ current_region.value = new_value }
</script>