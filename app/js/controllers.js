'use strict';

/* Controllers */
bmApp.controller('mainCtrl', ['$scope', 'bookmarkData', function($scope, bookmarkData){
	$scope.hello = 'world';
	
	bookmarkData.query(function(bookmarks){
		$scope.bookmarks = bookmarks;
	});

	$scope.delRow = function(bookmark, index){
		//bookmark.$delete();

		bookmarkData.delete({id:bookmark.id})
			.$promise.then(function(){
				$scope.bookmarks.splice(index, 1);
			}, function(errResponse){

			});
	};
	$scope.addBookmark = function(){
		$scope.bookmarks.unshift({id:'', title:'', link:'', description:'', user_id:'', group_id:'', stars:'', created_at:'', updated_at:''});
	};
	/* saves or updates depending on whether or not id exists */
	/* id does not exist on create since it's returned from server after a bookmark is created */
	$scope.saveRow = function(bookmark)
	{
		if(bookmark.id === "")
		{
			bookmarkData.save(bookmark).$promise.then(function(data){
				
				//so that the other fields like created/updated etc will be updated with
				//the data returned from the server

				$scope.bookmarks.shift();
				$scope.bookmarks.unshift(data);
			});
		}else{
			bookmark.$update();
		}
	};


}]);