<template>
  <div class="form">
    <h2>XX科技有限公司</h2>
    <h3 class="align-center" style="letter-spacing: 5px">服务工单</h3>

    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
      :value.sync="value"
    />
  </div>
</template>

<script>
import Vue from "vue/dist/vue.js";
import formCreate from "@form-create/element-ui";
Vue.use(formCreate);

export default {
  name: "FormBasic",
  componets: {
    formCreate,
  },
  watch: {},
  mounted() {
    this.fApi.setValue({ contacter_name: "xxkjkdkdk" });
  },
  data() {
    return {
      group: "test",
      fApi: {},
      value: {},
      options: {
        form: {
          size: "small",
          labelPosition: "right",
          labelWidth: "100px",
        },
        row: {
          gutter: 60,
        },
        onSubmit: (formData) => {
          const _formData = {
            contacter: {
              name: formData.contacter_name,
              address: formData.contacter_address,
              phone: formData.contacter_phone,
            },
          };

          alert(JSON.stringify(formData));
          alert(JSON.stringify(_formData));
        },
      },
      rule: [
        {
          type: "object",
          field: "contacter",
          title: "联系人",
          value: {},
          props: {
            rule: [
              {
                type: "input",
                field: "name",
                title: "姓名",
                value: "",
                validate: [
                  { type: "string", required: true, message: "联系人不能为空" },
                ],
              },
              {
                type: "input",
                field: "phone",
                title: "电话",
                value: "",
              },
              {
                type: "input",
                field: "address",
                title: "地址",
                value: "",
                props: {
                  placeholder: "联系人地址",
                },
              },
            ],
          },
        },
        {
          type: "input",
          field: "contacter_name",
          title: "联系人",
          value: "",
          validate: [
            { type: "string", required: true, message: "联系人不能为空" },
          ],
          col: {
            span: 12,
          },
        },
        {
          type: "input",
          field: "contacter_phone",
          title: "联系电话",
          value: "",
          col: {
            span: 12,
          },
        },
        {
          type: "input",
          field: "contacter_address",
          title: "地址",
          value: "",
          props: {
            placeholder: "联系人地址",
          },
        },
        {
          type: "input",
          field: "project",
          title: "项目",
          value: "",
        },
        {
          type: "input",
          field: "group",
          title: "设备组",
          value: this.group,
          col: {
            span: 12,
          },
        },
        {
          type: "select",
          field: "worker",
          title: "维护人员",
          value: "",
          col: {
            span: 12,
          },
        },
        {
          type: "input",
          field: "description",
          title: "工作内容",
          value: "",
          props: {
            type: "textarea",
            rows: 3,
          },
        },
        {
          type: "DatePicker",
          field: "created_at",
          title: "派单日期",
          value: new Date(),
          validate: [{ type: "date", required: true, message: "请选择日期" }],
          col: {
            span: 12,
          },
        },
        {
          type: "Upload",
          field: "attachment",
          title: "上传图片",
          value: [],
          props: {
            type: "select",
            //上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
            uploadType: "image",
            //上传文件类型，可选值为 image（图片上传），file（文件上传）
            action: "",
            //上传的地址，必填
            headers: {},
            //设置上传的请求头部
            multiple: true,
            //是否支持多选文件
            data: {},
            //上传时附带的额外参数
            name: "",
            //上传的文件字段名
            withCredentials: true,
            //支持发送 cookie 凭证信息
            accept: "image/*",
            //接受上传的文件类型
            format: [],
            //支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用
            maxSize: 5000,
            //文件大小限制，单位 kb
            maxLength: 5,
            //上传文件最大数
            beforeUpload: () => {},
            //上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
            onProgress: () => {},

            //文件上传成功时的钩子，返回字段为 response, file, fileList, 使用$f.uploadPush(field,filePath) 将上传后的路径添加到value中
            onError: (error, file, fileList) => {},
            //文件上传失败时的钩子，返回字段为 error, file, fileList
            onPreview: () => {},
            //点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
            onRemove: () => {},
            //文件列表移除文件时的钩子，返回字段为 file, fileList
            onExceededSize: () => {},
            //文件超出指定大小限制时的钩子，返回字段为 file, fileList
            //操作按钮的图标 ,设置为false将不显示
            handleIcon: "ios-eye-outline",
            //点击操作按钮事件
            // onHandle:(src)=>{},
            //是否可删除,设置为false是不显示删除按钮
            allowRemove: true,
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.form {
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  overflow: hidden;
}
</style>