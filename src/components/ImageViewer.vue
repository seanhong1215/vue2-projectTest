<template>
    <div class="wrap">
      <div class="content">
        <el-button @click="showImgViewer">打開圖片</el-button>
      </div>
      <el-image-viewer
        v-if="imgViewerVisible"
        :on-close="closeImgViewer"
        :url-list="imgList" />
    </div>
  </template>
  
  <script>
  import elImageViewer from "element-ui/packages/image/src/image-viewer"
  export default {
    name: "ImageViewer",
    components:{
      elImageViewer
    },
    data() {
      return {
        imgViewerVisible:false,
        imgList:[
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
      };
    },
    methods: {
      showImgViewer(){
        this.imgViewerVisible = true;
        const m = (e) => { e.preventDefault() };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", m, false); // 禁止页面滑动
  
      },
      closeImgViewer(){
        this.imgViewerVisible = false;
        const m = (e) => { e.preventDefault() };
        document.body.style.overflow = 'auto';
        document.removeEventListener("touchmove", m, true);
      },
    },

  };
  </script>
  
  <style scoped>
  .content{
    width: 100%;
    height: 100vh;
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  