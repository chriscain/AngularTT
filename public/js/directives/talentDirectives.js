myApp.directive('ngRightClick', function($parse) {
	return function(scope, element, attrs) {
		var fn = $parse(attrs.ngRightClick);
		element.bind('contextmenu', function(event) {
			scope.$apply(function() {
				event.preventDefault();
				fn(scope, {$event:event});
			});
		});
	};
});

myApp.directive('resize', function ($window) {
	return function (scope, element, attrs) {
		var theWindow = angular.element($window);
		scope.getWindowDimensions = function () {
			return { 'height': theWindow.height(), 'width': theWindow.width() };
		};

		scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {

			scope.style = function () {

				if (newValue.width > 1185)
				{
					return {
						'height': (newValue.height) + 'px',
					};
				}
			};

		}, true);

		theWindow.bind('resize', function () {
			scope.$apply();
		});
	};
});

myApp.directive('activateMe', function () {
	return function (scope, element, attrs) {

		//generate groups
		if (scope.groups[attrs.activeGroup]) {
			scope.groups[attrs.activeGroup].push(element);
		} else {
			scope.groups[attrs.activeGroup] = [];
			scope.groups[attrs.activeGroup].push(element);
		}

		if (attrs.firstActive) {
			scope.groups[attrs.activeGroup][attrs.firstActive].addClass("active");
		}

		//remove active classes from all and add to clicked item
		element.bind('click', function() {
			_.each(scope.groups[attrs.activeGroup], function(item) {
				item.removeClass("active");
			});
			element.addClass("active");
		});
	};
});