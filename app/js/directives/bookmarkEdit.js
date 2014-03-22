'use strict';


bmApp.directive('bookmarkEdit', function(){
	return{
		restrict: 'A',
		replace:true,
		templateUrl:'angular/app/templates/bookmarkRow.html',
		//require:'ngModel',
		scope:{
			bookmark:'=bookmarkEdit',
			num:'='
		},
		link:function($scope, element, $attrs){

			var copy = angular.copy($scope.bookmark);
			$scope.inEditMode = false;
			$scope.hello = '420';
			$scope.toggleEditMode = function(){
				copy = angular.copy($scope.bookmark);
				$scope.inEditMode = !$scope.inEditMode;
			}

			$scope.cancelEdit = function(){
				$scope.bookmark['title']=copy['title'];
				$scope.bookmark['link']=copy['link'];
				$scope.bookmark['group']=copy['group'];
				$scope.bookmark['stars']=copy['stars'];
	
				this.toggleEditMode();
			}

		}
	}
});