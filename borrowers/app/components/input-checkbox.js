import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		isCheck:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );
			var this_checked=$("#"+this_id).find("input").attr("checked");
			//console.log( this_checked );
			if(!this_checked){
				$("#"+this_id).find("input").attr("checked",true);
				$("#"+this_id).find("span").css("background","#999");
			}else{
				$("#"+this_id).find("input").attr("checked",false);
				$("#"+this_id).find("span").css("background","transparent");
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
