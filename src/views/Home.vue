<template>
    <div class="layouts">
    <validLogin></validLogin>
    </div>
  </template>
  
  <script>
  import validLogin from "@/components/validLogin.vue";
  export default {
    name: "Home",
    components:{
      validLogin
    },
    data() {
      return {
      
      };
    },
    methods: {
     
    },
    watch: {
   
  }
  };
  </script>
  
  <style scoped>
    .layouts {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 600px;
    }
  </style>
  