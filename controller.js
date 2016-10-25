angular.module('app')
.controller('controller', function($scope, mainService) {
    $scope.quotes = mainService.getData();

    $scope.deleteQuote = function(textToDelete) {
      mainService.removeData(textToDelete);
    };

    $scope.addQuote = function() {
      var newQuote = {
        text: $scope.newQuoteText,
        author: $scope.newQuoteAuthor,
      };
      if (mainService.addData(newQuote)) {
        $scope.newQuoteText = '';
        $scope.newQuoteAuthor = '';
      }
    };
});
