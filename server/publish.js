// Publish collections
Meteor.publish('recipes', function(){
	// Publish the recipes authored by logged in user
	return Recipes.find({author: this.userId});
});