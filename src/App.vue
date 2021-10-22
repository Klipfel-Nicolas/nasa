<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<style>
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
/* PERSEVERANCE PAGE */

.perserveranceElement{
  display: flex;
  z-index: 100;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.perserveranceElement.display{
  opacity: 1;
}

.perserveranceElement:hover .elementName{
  opacity: 1;
}

.elementNumber{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(246, 141, 67, .5);
  background: rgba(0, 0, 0, .8);
  color: rgb(246, 141, 67);
  width:20px;
  height: 20px;
  border-radius: 100%;
  cursor: pointer;
}

.elementName{
  opacity: 0;
  color: rgb(246, 141, 67);
}

</style>
