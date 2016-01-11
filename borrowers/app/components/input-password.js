import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		showKey:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
			$("#"+this_id).find("input").attr("type","text");
		},
		hideKey:function(){
			var $=Ember.$;
			var this_id=this.get('elementId');
			//console.log( this_id );

			$("#"+this_id).find(".hide").removeClass("hide").siblings("i").addClass("hide");
			$("#"+this_id).find("input").attr("type","password");
		}
	}
});
