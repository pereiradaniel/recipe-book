// Publish collections
Meteor.publish('recipes', function(){
	// Publish the recipes authored by logged in user
	return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id){
	// Check if the id is a string
	check('id', String);
	// Publish the recipe for a single recipe view template
	return Recipes.find({_id: id});
});