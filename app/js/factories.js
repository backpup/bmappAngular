'use strict';


bmApp.factory('bookmarkData', ['$resource', '$http', '$q', function($resource, $http, $q){
	
 //return{

 	//bookmarks:[{"id":"1","title":"Reddit","link":"http:\/\/reddit.com","description":"","user_id":"1","group_id":"1","stars":"5","created_at":"2014-02-11 05:57:16","updated_at":"2014-02-14 01:27:28"},{"id":"12","title":"Youtube shayari","link":"http:\/\/www.youtube.com\/watch?v=Kk-rEmZvBQI","description":"","user_id":"1","group_id":"1","stars":"4","created_at":"2014-02-13 01:04:35","updated_at":"2014-02-14 01:28:23"},{"id":"13","title":"Layout vertical rhythm","link":"http:\/\/webdesign.tutsplus.com\/articles\/improving-layout-with-vertical-rhythm--webdesign-14070","description":"","user_id":"1","group_id":"1","stars":"3","created_at":"2014-02-13 01:05:13","updated_at":"2014-02-14 01:29:57"},{"id":"33","title":"dss","link":"ddd","description":"","user_id":"1","group_id":"1","stars":"4","created_at":"2014-02-13 19:52:48","updated_at":"2014-02-14 00:43:05"},{"id":"34","title":"cc","link":"cccc","description":"","user_id":"1","group_id":"1","stars":"5","created_at":"2014-02-13 19:53:17","updated_at":"2014-02-14 00:10:54"},{"id":"41","title":"laravelDocs","link":"http:\/\/laravel.com\/docs\/errors","description":"","user_id":"1","group_id":"1","stars":"4","created_at":"2014-02-14 00:17:43","updated_at":"2014-02-14 00:17:43"},{"id":"42","title":"laravel","link":"http:\/\/laravel.com","description":"","user_id":"1","group_id":"1","stars":"4","created_at":"2014-02-14 00:43:19","updated_at":"2014-02-14 01:25:24"},{"id":"46","title":"Guard","link":"https:\/\/github.com\/guard\/guard","description":"","user_id":"1","group_id":"1","stars":"5","created_at":"2014-02-15 18:43:11","updated_at":"2014-02-18 04:59:19"},{"id":"47","title":"Responsive Images","link":"http:\/\/mobile.smashingmagazine.com\/2014\/02\/03\/one-solution-to-responsive-images\/","description":"","user_id":"1","group_id":"1","stars":"3","created_at":"2014-02-15 18:44:09","updated_at":"2014-02-15 18:47:26"},{"id":"49","title":"Miniclip Motherload","link":"http:\/\/www.miniclip.com\/games\/motherload\/en\/","description":"","user_id":"1","group_id":"1","stars":"4","created_at":"2014-02-15 18:45:46","updated_at":"2014-02-15 18:47:22"}],
 	// getBookmarks:function(){
 	// 	var deferred = $q.defer();

 	// 	//$http({ method:'PUT', url:'bookmarks/34' , data:{title:"hello", stars:4} })
 	// 	$http({ method:'GET', url:'/bookmarks'})
 	// 		.success(function(data, status, headers, config){
 	// 			deferred.resolve(data);
 	// 		})
 	// 		.error(function(data, status, headers, config){
 	// 			deferred.reject(status);
 	// 		});
 	// 	return deferred.promise;
 	// },

 	// saveBookmark:function(bookmark){
 	// 	var deferred = $q.defer();

 	// 	$http({ method:'POST', url:'bookmarks' , data:bookmark})
 	// 		.success(function(data, status, headers, config){
 	// 			deferred.resolve(data);
 	// 		})
 	// 		.error(function(data, status, headers, config){
 	// 			deferred.reject(status);
 	// 		});
 	// 	return deferred.promise;
 	// }


 	//}

 	var bookmarks = $resource('/bookmarks/:id', {id:'@id'}, {update:{method:'PUT'} });

 	return bookmarks;
 

 
}]);
	