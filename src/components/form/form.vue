<template>
   <div id="form">
        <h2 class="form-title">form  相关的</h2>
        <div>
            <label>
                <span>title:</span>
                <input type="text" required v-model.lazy="form.title" />
                <p>title:{{form.title}}</p>
            </label>
        </div>
        <div>
            <label>
                <span>content:</span>
                <textarea v-model="form.content"></textarea>
                <p>content:{{form.content}}</p>
            </label>
        </div>
        <div>
            <label>
                <span>张三:</span>
                <input type="checkbox" value="张三"  v-model.lazy="form.checkboxs" />
            </label>
            <label>
                <span>李四:</span>
                <input type="checkbox" value="李四"  v-model.lazy="form.checkboxs" />
            </label>
            <label>
                <span>王五:</span>
                <input type="checkbox" value="王五"  v-model.lazy="form.checkboxs" />
            </label>
            <p>checkbox:</p>
            <ul>
                <li v-for="(checkbox,index) in form.checkboxs" :key="index">{{checkbox}}</li>
            </ul>
        </div>
        <div>
           <label>
                <span>直辖市：</span>

            </label>
            <select v-model="form.city">
                    <option v-for="(city,index) in cities" :key="index">{{city}}</option>
            </select>
            <p>{{form.city}}</p>

        </div>
        <hr>
        <form-helper></form-helper>
   </div>
</template>
<script>
import formHelper from './formHelper'
export default {
  components: {
    'form-helper': formHelper
  },

  data () {
    return {
      form: {
        title: '',
        content: '',
        checkboxs: [],
        city: '上海'
      },
      cities: ['北京', '上海', '重庆', '天津', '深圳']
    }
  }
}
</script>
<style scoped>
#form {
  margin: 10px 10px;
  border: 2px solid saddlebrown;
  text-align: center;
  padding: 10px 0;
}
.form-title{
    font-size: 20px;
}
#form>div{
    margin: 5px 10px;
    border: 1px solid seagreen;
    padding: 10px 0;
}
</style>
