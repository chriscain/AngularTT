var myApp = angular.module('myApp', ["ngAnimate"]);

myApp.controller('TalentController', function($scope, rowService) {

	$scope.treeRows = rowService.treeRows;
	$scope.allTalents = rowService.talents;
	$scope.maxPointsOptions = [1, 2, 3, 4, 5];
	$scope.prereqOpts = ['None'];
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

			//update dropdown menu
			talent.prereqs[1] = talent.aboveTalent.talentName;
			$scope.prereqOpts = talent.prereqs;

			//update row selected in talent
			$scope.whichRow = talent.row_id-1;
			

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

		//if you're disabled you can't have a prereq talent
		talent.prereq = 'None';

	};

	$scope.displayStuff = function(talent) {
		$scope.hoveredTalent = talent;
	};

	$scope.toggleAdvancedOptions = function() {
		$scope.advancedOptions = !$scope.advancedOptions;
	};

	$scope.showJSON = function() {
		console.log($scope.selectedTalent);
	}

});
