import Ember from 'ember';

export default Ember.Component.extend({
	items:Ember.computed("this.label",function(){
		//console.log( item.length );
		return this.label.split(",");
	}),
	actions:{
		isCheck:function(param){
			//能不能得到当前actions的元素
			var $=Ember.$;
			var this_id=this.get('elementId');
			console.log( this_id );
			console.log( $(this) );
			console.log( $(param) );
		}
	}
});
