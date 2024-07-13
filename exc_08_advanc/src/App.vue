


<template>
    <header>
      <h1>Where in the Word?</h1>
      <button> Dark Mode</button>
    </header>
    <hr/>
    <div class="search-fields">
      <div class="search-field">
        <input type="url" placeholder="Search for a cauntry" />
      </div>
      <select class="select-field">
        <option disabled selected hidden>Filter By Region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Ásia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
    <app-results/>
    <app-details/>
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
        display: block;
        width: 300px;
        padding: 2px;
        background-color: var(--bgcolor);
        box-shadow: 0 0 4px var(--swcolor);
        border-radius: 3px;
        background: url('res/lupe.svg') 5% 45% / 9% no-repeat;
      }
        .search-field > input {
          display: block;
          border: none;
          width: 85%;
          padding: 14px;
          background: none;
          outline: none;
          margin-left: auto;
/*          background: red;*/
          font: 700 .8rem/1 monospace;
        }
         .select-field {
            border: none;
            background: none;
            padding: 10px;
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
// import HelloWorld from './cps/HelloWorld.vue'
// import TheWelcome from './cps/TheWelcome.vue'
</script>