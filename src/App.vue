<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<style lang="scss" >
:root {
    --orbiton-font: 'Orbitron';
    --normal-font: 'Rajdhani';
    --orangeD: #F38B43;
    --orangeL: #FFB285FF;
    --blue: rgb(102, 250, 211);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-size: 14px;
}

a{
  text-decoration: none;
}

.details li{
    font-family: var(--orbiton-font);
    color: #ffff;
    font-size: .7rem;
    letter-spacing: .1rem;
    padding: 5px;
}

    /* DISPLAY HOME, PERSEVERANCE */
.index {
    position: absolute;
    height: 100vh;
    width: 100vw;
}

.index .header {
    display: flex;
    align-items: center;
    padding-left: 5%;
    width: 70vw;
}

.index h1 {
    position: relative;
    padding: 10px;
    font-family: var(--orbiton-font);
    opacity: .8;
}

.index .right-column {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100vh;
    right: 5%;
    bottom: 0%;
    padding: 10px;
}

.index .size {
    position: absolute;
    width: 500px;
    bottom: 10px;
    left: 5%;
}

/* linkedin link*/
.linkedLink a{
    position: relative;
    display: block;
    color: #fff;
    z-index: 6000;
    cursor: pointer;
    transition: all .3s ease;
}

.linkedLink a:hover {
  color: var(--orangeL);
  text-decoration: none;
  transform: scale(.9);
}


</style>
