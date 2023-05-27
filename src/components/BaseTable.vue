<template>
  <div>
    <el-table-draggable animate="300">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column class="handle" prop="date" label="Date" width="180">
        </el-table-column>
        <el-table-column prop="name" label="Name" width="180">
        </el-table-column>
        <el-table-column prop="address" label="Address"> </el-table-column>
        <el-table-column label="Test">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.i">Option</el-checkbox>
          </template>
        </el-table-column>
        <el-table-column fixed="right">
          <template slot-scope="scope">
            <div class="handle">handle</div>
          </template>
        </el-table-column>
      </el-table>
    </el-table-draggable>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          i: true,
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          i: false,
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          i: false,
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
          i: false,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
