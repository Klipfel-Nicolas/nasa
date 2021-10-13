<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
/* PERSEVERANCE PAGE */
.button {
  z-index: 100;
  position: absolute;
  cursor: pointer;
  color: #f1f1f1;
}

.perserveranceElement{
  display: flex;
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
