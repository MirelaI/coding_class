// This file was auto-generated by the slide downloader - do not manually edit it!
var app = angular.module('SlideApp', ['ui.ace', 'LocalStorageModule']);

app.directive('slideImage', function() {
    return function(scope, element, attrs) {
        attrs.$observe('slideImage', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    }
});

app.controller('SlideController', function($scope, $sce, localStorageService) {
    $scope.slideImages = [
        'slides/js-curriculum/001.png',
        'slides/js-curriculum/002.png',
        'slides/js-curriculum/003.png',
        'slides/js-curriculum/004.png',
        'slides/js-curriculum/005.png',
        'slides/js-curriculum/006.png',
        'slides/js-curriculum/007.png',
        'slides/js-curriculum/008.png',
        'slides/js-curriculum/009.png',
        'slides/js-curriculum/010.png',
        'slides/js-curriculum/011.png',
        'slides/js-curriculum/012.png',
        'slides/js-curriculum/013.png',
        'slides/js-curriculum/014.png',
        'slides/js-curriculum/015.png',
        'slides/js-curriculum/016.png',
        'slides/js-curriculum/017.png',
        'slides/js-curriculum/018.png',
        'slides/js-curriculum/019.png',
        'slides/js-curriculum/020.png',
        'slides/js-curriculum/021.png',
        'slides/js-curriculum/022.png',
        'slides/js-curriculum/023.png',
        'slides/js-curriculum/024.png',
        'slides/js-curriculum/025.png',
        'slides/js-curriculum/026.png',
        'slides/js-curriculum/027.png',
        'slides/js-curriculum/028.png',
        'slides/js-curriculum/029.png',
        'slides/js-curriculum/030.png',
        'slides/js-curriculum/031.png',
        'slides/js-curriculum/032.png',
        'slides/js-curriculum/033.png',
        'slides/js-curriculum/034.png',
        'slides/js-curriculum/035.png',
        'slides/js-curriculum/036.png',
        'slides/js-curriculum/037.png',
        'slides/js-curriculum/038.png',
        'slides/js-curriculum/039.png',
        'slides/js-curriculum/040.png',
        'slides/js-curriculum/041.png',
        'slides/js-curriculum/042.png',
        'slides/js-curriculum/043.png',
        'slides/js-curriculum/044.png',
        'slides/js-curriculum/045.png',
        'slides/js-curriculum/046.png',
        'slides/js-curriculum/047.png',
        'slides/js-curriculum/048.png',
        'slides/js-curriculum/049.png',
        'slides/js-curriculum/050.png',
        'slides/js-curriculum/051.png',
        'slides/js-curriculum/052.png',
        'slides/js-curriculum/053.png',
        'slides/js-curriculum/054.png',
        'slides/js-curriculum/055.png',
        'slides/js-curriculum/056.png',
        'slides/js-curriculum/057.png',
        'slides/js-curriculum/058.png',
        'slides/js-curriculum/059.png',
        'slides/js-curriculum/060.png',
        'slides/js-curriculum/061.png',
        'slides/js-curriculum/062.png',
        'slides/js-curriculum/063.png',
        'slides/js-curriculum/064.png',
        'slides/js-curriculum/065.png',
        'slides/js-curriculum/066.png',
        'slides/js-curriculum/067.png',
        'slides/js-curriculum/068.png',
        'slides/js-curriculum/069.png',
        'slides/js-curriculum/070.png',
        'slides/js-curriculum/071.png',
        'slides/js-curriculum/072.png',
        'slides/js-curriculum/073.png',
        'slides/js-curriculum/074.png',
        'slides/js-curriculum/075.png',
        'slides/js-curriculum/076.png',
        'slides/js-curriculum/077.png',
        'slides/js-curriculum/078.png',
        'slides/js-curriculum/079.png',
        'slides/js-curriculum/080.png',
        'slides/js-curriculum/081.png',
        'slides/js-curriculum/082.png',
        'slides/js-curriculum/083.png',
        'slides/js-curriculum/084.png',
        'slides/js-curriculum/085.png',
        'slides/js-curriculum/086.png',
        'slides/js-curriculum/087.png',
        'slides/js-curriculum/088.png',
        'slides/js-curriculum/089.png',
        'slides/js-curriculum/090.png',
        'slides/js-curriculum/091.png',
        'slides/js-curriculum/092.png',
        'slides/js-curriculum/093.png',
        'slides/js-curriculum/094.png',
        'slides/js-curriculum/095.png',
        'slides/js-curriculum/096.png',
        'slides/js-curriculum/097.png',
        'slides/js-curriculum/098.png',
        'slides/js-curriculum/099.png',
        'slides/js-curriculum/100.png',
        'slides/js-curriculum/101.png',
        'slides/js-curriculum/102.png',
        'slides/js-curriculum/103.png',
        'slides/js-curriculum/104.png',
        'slides/js-curriculum/105.png',
        'slides/js-curriculum/106.png',
        'slides/js-curriculum/107.png',
        'slides/js-curriculum/108.png',
        'slides/js-curriculum/109.png',
        'slides/js-curriculum/110.png',
        'slides/js-curriculum/111.png',
        'slides/js-curriculum/112.png',
        'slides/js-curriculum/113.png',
        'slides/js-curriculum/114.png',
        'slides/js-curriculum/115.png',
        'slides/js-curriculum/116.png',
        'slides/js-curriculum/117.png',
        'slides/js-curriculum/118.png',
        ];
    var html = localStorageService.get('html') || "";
    $scope.data = {htmlString:html, trustedVersion:html}

    var slideNos = localStorageService.get('currentSlideNum') || 0;
    $scope.currentSlideNum = slideNos;
    $scope.$watch('currentSlideNum', function(value){
        localStorageService.add('currentSlideNum', value);
    });




    $scope.nextSlide = function() {
        if($scope.currentSlideNum == $scope.slideImages.length-1) {
            return;
        }
        $scope.currentSlideNum++;
    }

    $scope.prevSlide = function() {
        if($scope.currentSlideNum == 0) {
            return;
        }
        $scope.currentSlideNum--;
    }

    $scope.currentSlide = function() {
        return $scope.slideImages[$scope.currentSlideNum];
    }

    $scope.progress = function() {
        var current = parseInt($scope.currentSlideNum) + 1,
            total = $scope.slideImages.length;
        return current + "/" + total;
    }

    $scope.$watch("data.htmlString", function(newValue) {
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
        localStorageService.add('html', newValue);

    }, true);
});
