<template>
	<div>
		<el-card class="box-card">
  			<input type="" name="" placeholder="根据需求检索书籍信息">
  			<span class="pull-right">上架</span>
		</el-card>
              <!--书架管理部分开始-->
          <el-table
                :data="tablepre"
                stripe
                style="width: 100%" >
                <el-table-column上架
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
                  prop="page"
                  label="总页数"
                  width="150">
                </el-table-column>	
                <el-table-column
                  prop="price"
                  label="价格"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="bcase"
                  label="书架号"
                  width="150">
                </el-table-column>
                <el-table-column
                  prop="storage"
                  label="库存"
                  width="180">
                </el-table-column>
                <el-table-column
      				fixed="right"
      				label="操作"
      				width="100" 
      				prop="bookcode" 

      				>
      				<template slot-scope="scope">
      				  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      				  <el-button type="text" size="small" @click='deletee(bookcode)'>下架</el-button>
      				</template>
    			</el-table-column>	
          </el-table>
              <!-- 暑假管理部分结束 -->
              <!-- 分页部分开始 -->
                <nav>
  					<ul class="pagination">
    					<li>
    					  <a href="#" aria-label="Previous">
    					    <span aria-hidden="true" @click="pre(),pageshow">上一页</span>
    					  </a>
    					</li>
    					<li><a href="#">第{{cur}}页</a></li>
    					<li><a href="#">共{{totalpage}}页</a></li>
    					<li>
    					  <a href="#" aria-label="Next">
    					    <span aria-hidden="true" @click="nex(),pageshow">下一页</span>
    					  </a>
    					</li>
  					</ul>
				</nav>
              <!-- 分页部分结束 -->
	</div>

</template>
<script>
	export default{
		name:'Bookrack',
		data(){
			return{
				  tableData: [],
        			arr:[],
        			tablepre:[],
        			total:0,
        			cur:1,//当前默认页码
					onlypage:4,//定义每页显示条数	
					totalpage:2,
					bookcode:5

			}
		},
		 created(){
    		this.$axios.get("/bookrack",{params:{
    		}})
    		.then(res =>{
    			 this.arr=res.data;
    			 this.tableData=this.arr;
				 this.tablepre=this.tableData.slice(0,4)
				 this.totalpage=Math.ceil(this.arr.length/this.onlypage);
    		});

    	},
    	methods:{
    		pre:function(){
    			if(this.cur>1){
    			return this.cur--;
    		}
    		},
	    	nex:function(){
	    		if(this.cur<this.totalpage){
	    		return this.cur++;	
	    		}
	    		},
	    	handleClick:function(e){
	    		console.log(e.bookcode)
	    	}
    	},
    	mounted:{

    	},
    	computed:{
    		pageshow:function(){
    			return this.tablepre=this.arr.slice((this.cur*4)-4,this.cur*4);	//每页条数条数展示	
    		}
    	}

    }


</script>

<style scoped>
	nav{
		
	}
</style>