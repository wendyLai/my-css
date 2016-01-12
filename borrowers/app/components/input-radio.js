import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		isCheck:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );
			var this_checked=$("#"+this_id).find("input").attr("checked");
			//console.log( this_checked )
			var this_box=$("#"+this_id).parents(".input-radio-box");
			//console.log( this_radio_length );
			var this_radio_length=$("#"+this_id).parents(".input-radio-box").find("input[type='radio']").length;
			//console.log( this_radio_length );
			var this_arr_checked=this_box.find("input[type='radio']").eq(i).attr("checked");
			//console.log( this_arr_checked );

			if(!this_checked){
				//每次点击清空checked以及样式
				for( var i=0;i<this_radio_length;i++ ){
					this_box.find("input[type='radio']").eq(i).attr("checked",false).siblings("span").css("background","transparent");
				};
				//当前添加checked以及样式
				$("#"+this_id).find("input[type='radio']").attr("checked",true).siblings("span").css("background","#999");
			}
		},
		overCss:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );
			$("#"+this_id).find("input").css("border-color","#666");
		},
		outCss:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );
			$("#"+this_id).find("input").css("border-color","#ccc");
		}
	}
});
