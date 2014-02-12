var myApp = angular.module('myApp', ["ngAnimate"]);

myApp.controller('dirtywerkController', function($scope) {
	$scope.generateHash = function(){
		return Math.random().toString(36).slice(2);
	};
});

myApp.controller('TalentController', function($scope, rowService) {

	$scope.treeRows = rowService.treeRows;
	$scope.allTalents = rowService.talents;
	
	rowService.generateRows(5, 5);

	$scope.generateHash = function(){
		return Math.random().toString(36).slice(2);
	};

	$scope.maxPointsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	$scope.groups = [];

	$scope.addRow = function(){
		rowService.addRow(5);
	};

	$scope.removeRow = function(){
		rowService.removeRow();
	};

	$scope.saveInformation = function(){
		rowService.saveInfo();
	};

	$scope.whichRow = 0;
	$scope.changeTab = function(row) {
		$scope.whichRow = row.row_num;
	};

	$scope.maxPointSelector = {
		"type": "select",
		"name": "service",
		"value": 1,
		"values": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	};

	// $scope.selectedTalent = $scope.allTalents[0];
	$scope.config = false;

	$(function(){
		var $selects = $('select');

		$selects.easyDropDown({
			cutOff: 5,
			wrapperClass: 'my-dropdown-class',
			onChange: function(selected){
				console.log("chesee");
			}
		});
	});
	// $scope.talentName = $scope.selectedTalent.talentName;

	$scope.setSelected = function(talent){
		if ($scope.selectedTalent == talent)
		{
			$scope.selectedTalent = null;
			$scope.config = false;
		}
		else
		{
			$scope.selectedTalent = talent;
			$scope.selectedTalent.maxPoints = 1;
			$scope.config = true;
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
