<template>
    <span>記事コード：{{ aid }}</span>
   
  </template>
  
  <script>
  export default {
    name: 'ArticleComp',
    props: {	
      aid: String
      //aid: Number
    }
  }
  </script>