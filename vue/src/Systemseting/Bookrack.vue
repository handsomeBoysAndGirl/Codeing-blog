<template>
	<div>
              <!--书架管理部分开始-->
          <el-table
                :data="tableData"
                stripe
                style="width: 100%" >
                <el-table-column
                  prop="bookname"
                  label="书名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="author"
                  label="作者"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="pubname"
                  label="出版社"
                  width="200" >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="bcase"
                  label="书架号"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="storage"
                  label="库存"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="borrownum"
                  label="借阅次数"
                  width="80">
                </el-table-column>	
          </el-table>
              <!-- 暑假管理部分结束 -->
              <!-- 分页部分开始 -->
              <div class="block">
                  <span class="demonstration"></span>
                    <el-pagination
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
              </div>
              <!-- 分页部分结束 -->
	</div>

</template>
<script>
	export default{
		name:'Bookrack',
		data(){
			return{
				  tableData: [],
        			arr:[]
			}
		},
		 created(){
    		this.$axios.get("/bookrack",{params:{
    		}})
    		.then(res =>{
    			 this.arr=res.data;
    			 this.tableData=this.arr;
    			 //this.tableData[0].date=arr1[0]['bookname']

    		});

    	},
    	mouted(){

    	}
    }


</script>

<style scoped>
	
</style>