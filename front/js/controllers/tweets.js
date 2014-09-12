angular.module('synthdemo')
.controller('tweetsController', function ($scope, $http, data) {
  $scope.tweets = data.tweets;

  $scope.publish = function() {
  	$http.post('/api/tweets', { content: $scope.newTweet })
  		.success(function(tweet) {
  			$scope.tweets.unshift(tweet);
  		});
  	$scope.newTweet = '';
  };
})
.controller('tweetController', function($scope, data) {
	angular.extend($scope, data);
});
