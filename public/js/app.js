var myApp = angular.module('myApp', ["ngAnimate"]);

myApp.controller('TalentController', function($scope, treeService) {

	$scope.treeRows = treeService.treeRows;
	$scope.allTalents = treeService.talents;
	$scope.maxPointsOptions = [1, 2, 3, 4, 5];
	$scope.prereqOpts = ['None'];
	$scope.whichRow = 0;
	$scope.settings = 'help';
	$scope.groups = [];

	$scope.tree = {
		treeName: "My Tree",
		numRows: 5,
		numCols: 5
	};

	treeService.createTree($scope.tree.numRows, $scope.tree.numCols);

	$scope.saveInformation = function(){
		treeService.saveInfo();
	};

	$scope.changeTab = function(row) {
		$scope.whichRow = row.row_num;
		$scope.selectedTalent = null;
	};

	$scope.setSelected = function(talent){
		if ($scope.selectedTalent == talent)
		{
			$scope.selectedTalent = null;
			$scope.advancedOptions = false;
		}
		else
		{
			$scope.selectedTalent = talent;
			$scope.settings = 'talents';
			//update dropdown menu
			if (talent.row_id > 1)
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
});
