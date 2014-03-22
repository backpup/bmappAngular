'use strict'
// bmApp.directive('bookmarkRow', function(){
// 	return{
// 		restrict:'A',
// 		replace:false,
// 		scope:{
// 			bm:'=bookmarkRow',
// 		},
// 		link:function($scope, element, attrs){
// 			console.log($scope.bm);
// 		}
// 	}
// });

bmApp.directive('staticRating', function(){
	var starTemplate ='<span>'+ 
						'<span class="star fa"></span>'+
						'<span class="star fa"></span>'+
						'<span class="star fa"></span>'+
						'<span class="star fa"></span>'+
						'<span class="star fa"></span>'+
						'</span>';				
	return{
		restrict:'EA',
		replace:true,
		template:starTemplate,
		scope:{
			rating:'@staticRating'
		},
		link:function($scope, element, $attrs){
			angular.forEach(element.children(), function(value, key){
				if(key < $scope.rating)
				{
					$(value).addClass('fa-star');
				}else{
					$(value).addClass('fa-star-o');
				}
			});

		}
	}
});

bmApp.directive('editableRating', function(){
	var starTemplate ='<span>'+ 
					'<span class="star fa"></span>'+
					'<span class="star fa"></span>'+
					'<span class="star fa"></span>'+
					'<span class="star fa"></span>'+
					'<span class="star fa"></span>'+
					'</span>';	
	return{
		restrict:'EA',
		replace:true,
		template:starTemplate,
		scope:{
			rating:'=editableRating'
		},
		link:function($scope, element, $attrs){
			var updateRating = function(rating){
				var noOfStars = rating||$scope.rating;
				angular.forEach(element.children(), function(value, key){
					var star = $(value);
					if(key < noOfStars)
					{
						if(star.hasClass('fa-star-o'))
						{
							star.removeClass('fa-star-o');
						}
						else if(star.hasClass('fa-star'))
						{
							return;
						}

						star.addClass('fa-star');
					}else{
						if(star.hasClass('fa-star'))
						{
							star.removeClass('fa-star');
						}
						else if(star.hasClass('fa-star-o'))
						{
							return;
						}
						star.addClass('fa-star-o');
					}
				});
			}

			updateRating();

			element.on('click', '.star', function(e){
				var index = element.children().index(e.currentTarget);
				
				$scope.$apply(function(){
					$scope.rating = index+1;
					updateRating();
				});
		
			});

			element.on('mouseenter', '.star', function(e){
				var index = element.children().index(e.currentTarget);
				updateRating(index+1);
			});

			element.on('mouseleave', '.star', function(e){
				updateRating();
			});
		}

	}
})