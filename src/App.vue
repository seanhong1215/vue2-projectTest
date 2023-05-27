<template>
  <div class="wrap">
    <div class="content">
      <el-button @click="showImgViewer">打開圖片</el-button>
    </div>
    <el-image-viewer
      v-if="imgViewerVisible"
      :on-close="closeImgViewer"
      :url-list="imgList" />


    <!-- <el-checkbox v-model="selectAll" @change="handleSelectAll">全選</el-checkbox>
    <el-table :data="items" style="width: 100%">
      <el-table-column type="selection" v-model="selectedItems"></el-table-column>
      <el-table-column prop="name" label="名稱"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
    </el-table> -->
    <BaseTable />
  </div>
</template>

<script>
import elImageViewer from "element-ui/packages/image/src/image-viewer"
import BaseTable from "./components/BaseTable.vue";
export default {
  data() {
    return {
      imgViewerVisible:false,
      imgList:[
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      items: [
       { id: 1, name: '項目 1', description: '這是項目 1', selected: false },
        { id: 2, name: '項目 2', description: '這是項目 2', selected: false },
        { id: 3, name: '項目 3', description: '這是項目 3', selected: false },
      // 其他項目...
    ],
    selectAll: false,
    selectedItems: []
    };
  },
  components:{
    elImageViewer,BaseTable
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
    handleSelectAll() {
      if (this.selectAll) {
        this.selectedItems = this.items.map(item => item.id);
      } else {
        this.selectedItems = [];
      }
    },
  },
  watch: {
  // selectAll(value) {
  //   if (value) {
  //     this.selectedItems = this.items.map(item => item.id);
  //   } else {
  //     this.selectedItems = [];
  //   }
  // },
}
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
