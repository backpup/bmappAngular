'use strict';


bmApp.directive('bookmarkEdit', function(){
	return{
		restrict: 'A',
		replace:true,
		templateUrl:'angular/app/templates/bookmarkRow.html',
		//require:'ngModel',
		scope:{
			bookmark:'=bookmarkEdit',
			num:'=',
			deleteRow:'&',
			saveBookmark:'&'
		},
		link:function($scope, element, $attrs){
			$scope.inEditMode = false;

			if($scope.bookmark['title']=="" && $scope.bookmark['link']==""){
				$scope.inEditMode = true;
			}

			/* can't set this to null here actually. If you do 
			it bookmark.title and bookmark.link cannot be read 
			in cancelEdit and deleting empty rows won't function*/
			var copy = angular.copy($scope.bookmark);
		
			$scope.hello = '420';
			$scope.toggleEditMode = function(){
				copy = angular.copy($scope.bookmark);
				$scope.inEditMode = !$scope.inEditMode;
			}

			$scope.saveEdit = function(){
				$scope.inEditMode = !$scope.inEditMode;
				$scope.saveBookmark();
			}

			$scope.cancelEdit = function(){
				$scope.bookmark['title']=copy['title'];
				$scope.bookmark['link']=copy['link'];
				$scope.bookmark['group']=copy['group'];
				$scope.bookmark['stars']=copy['stars'];

			//feels a little hacky but does the job
			if($scope.bookmark['title']=="" && $scope.bookmark['link']==""){
				$scope.deleteRow();
			}
	
				this.toggleEditMode();
			}

		}
	}
});

bmApp.directive('blur', function(){
	return{
		restrict:'A',
		replace:false,
		link:function(scope, element, attrs){
			element.on('click', function(){
				angular.element(this).parent().blur();
			});
		}
	}
});