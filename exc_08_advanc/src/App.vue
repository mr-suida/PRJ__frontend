
<template>
    <header>
      <h1>Where in the Word?</h1>
      <button> Dark Mode</button>
    </header>
    <hr/>
    <div class="search-fields" v-if='search_bview'>
      <div class="search-field">
        <input type="url" placeholder="Search for a cauntry" @keyup="filter($event.target.value)"/>
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
    <component
        :is="current_component" 
        :data_props="current_api_props"
        @flag_click="describle"
    />
</template>

<style scoped>
  header {
    background-color: #fff;
    color: var(--fgcolor);
    align-items: center;
    display: flex;
    width: min(1200px,95%);
    height: 70px;
    margin: auto auto;
    padding: 0 8px;
  }
    header > h1 { font: 800 1.2rem/1 "Nunito Sans";}
    header > button {
      text-align: right;
      padding: 10px 0 10px 3%;
      margin-left: auto;
      cursor: pointer;
      font: 600 .9rem/1 "Nunito Sans";
      border: none;
      outline: none;
      width: 115px;
      color: var(--fgcolor);
      background: transparent url('res/moon.svg') 20% 50% / 14% no-repeat;
    }
    hr {
      border: none;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .search-fields {
      display: flex;
      align-items: center;
      width: min(1200px,95%);
      margin: 2% auto auto;
      padding: 0 8px;
    }
      .search-field {
        position: relative;
        display: block;
        width: 440px;
        padding: 2px;
        box-shadow: 0 0 5px var(--swcolor);
        background-color: var(--bgcolor);
        border-radius: 4px;
        background: url('res/lupe.svg') 5% 45% / 6% no-repeat;
      }
        .search-field > input {
          display: block;
          border: none;
          width: 90%;
          padding: 14px;
          background: none;
          outline: none;
          margin-left: auto;
          font: 700 .9rem/1 "Nunito Sans";
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
            font: 500 .8rem/1 "Nunito Sans";
            cursor: pointer;
        }
            .search-field :option {
                color: red;
            }
</style>

<script setup>
    import { ref, onMounted ,markRaw} from 'vue';
    import { Trie } from '@/libs/tree_trie.js';
    import appResults from './cps/app_results.vue'
    import appDetails from './cps/app_details.vue'

    const current_component = ref(markRaw(appResults))
    const current_api_props = ref([])
    const current_region    = ref('All')  
    const search_value      = ref('')
    const search_bview      = ref(true) 
    
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
        }else {
            current_api_props.value = api_array.value.reduce((ret,x)=> {
                if ( current_region.value == x.region || current_region.value == 'All') ret.push(x);
                return ret
            },[]);
        }
        search_value.value = value
    }
    
    const describle = function(index) {
        search_bview.value = false;
        current_component.value = markRaw(appDetails)
        
        const data_props = {
            flag: current_api_props.value[index].flags.png,
            name: current_api_props.value[index].name.common,
            popu: current_api_props.value[index].population.toLocaleString(),
            regn: current_api_props.value[index].region,api_array,
            sreg: current_api_props.value[index].subregion,
            capt: current_api_props.value[index].capital.toString(),
            tdnm: current_api_props.value[index].tld[0], 
            lang: Object.values(current_api_props.value[index].languages).toString(),
            bord: Object.values(current_api_props.value[index].borders),

        }
        current_api_props.value = data_props
    }

    onMounted(() => load_countries())
    const update_region = (new_value)=> { 
        current_region.value = new_value
        filter(search_value.value)
    }
</script>