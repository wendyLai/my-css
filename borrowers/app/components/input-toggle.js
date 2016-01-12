import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		doToggle:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );
			var this_checked=$("#"+this_id).find("input").attr("checked");
			//console.log( this_checked );
			if(!this_checked){
				$("#"+this_id).find("input").attr("checked",true);
				$("#"+this_id).find("label:first").hide().fadeIn(150);
				$("#"+this_id).find("label:last").show().fadeOut(150);
			}else{
				$("#"+this_id).find("input").attr("checked",false);
				$("#"+this_id).find("label:last").hide().fadeIn(150);
				$("#"+this_id).find("label:first").show().fadeOut(150);
			}
		}
	}
});
