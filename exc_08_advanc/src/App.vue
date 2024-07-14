


<template>
    <header>
      <h1>Where in the Word?</h1>
      <button> Dark Mode</button>
    </header>
    <hr/>
    
    <div class="search-fields">
      <div class="search-field">
        <input type="url" placeholder="Search for a cauntry"/>
        <ul class="search-result">
            <li><img class='result-ico' src='https://flagcdn.com/th.svg' alt=''/><span class='result-lb'></span>brasil</li>
            <li><img class='result-ico' src='https://flagcdn.com/th.svg' alt=''/><span class='result-lb'></span>argentina</li>
            <li><img class='result-ico' src='https://flagcdn.com/th.svg' alt=''/><span class='result-lb'></span>polonia</li>
        </ul>
      </div>
      <select class="select-field" @change="update_region($event.target.value)">
        <option disabled selected hidden>Filter By Region</option>
        <option value='all'>All</option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Ásia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
      
    <component :is="current_compt" :data="current_props"/>
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
  import { ref } from 'vue';
  import { Trie } from '@/libs/tree_trie.js';

  import appResults from './cps/app_results.vue'

  const current_compt = ref(appResults)
  const current_props = ref({name:'roberto',idade:27})
  const current_regio = ref(false)

  window.onload = function() {
    // to test trie libs
    const data = [
        { name: 'aa', etc: '...' },
        { name: 'ab', etc: '...' },
        { name: 'ac', etc: '...' },
        { name: 'ba', etc: '...' },
    ];
    
   const trie = new Trie();
   data.forEach((item,index)=>{
        trie.insert(item.name,index)
   })

   const results = trie.search('b')
   console.log(results)

  }

  const update_region = (new_value)=>{ current_regio.value = new_value }
</script>