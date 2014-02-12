var myApp = angular.module('myApp', ["ngAnimate"]);

myApp.controller('TalentController', function($scope, rowService) {

	$scope.treeRows = rowService.treeRows;
	$scope.allTalents = rowService.talents;
	$scope.maxPointsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	$scope.whichRow = 0;
	$scope.groups = [];
	rowService.generateRows(5, 5);

	$scope.saveInformation = function(){
		rowService.saveInfo();
	};

	$scope.changeTab = function(row) {
		$scope.whichRow = row.row_num;
	};

	$scope.setSelected = function(talent){
		if ($scope.selectedTalent == talent)
		{
			$scope.selectedTalent = null;
		}
		else
		{
			$scope.selectedTalent = talent;
			$scope.selectedTalent.maxPoints = 1;
		}
	};

	$scope.incrementTalent = function(talent){
		if (talent.maxPoints > talent.pointsIn)
			talent.pointsIn++;
	};

	$scope.decrementTalent = function(talent){
		if (talent.pointsIn > 0)
			talent.pointsIn--;
	};

	$scope.disable = function(talent) {
		talent.disabled = !talent.disabled;

	};

	$scope.displayStuff = function(talent) {
		$scope.hoveredTalent = talent;
	};

	$scope.toggleAdvancedOptions = function() {
		$scope.advancedOptions = !$scope.advancedOptions;
	};

});
