$(function() {

            var num = 36; // the total number of images 

            // Preload all the images into hidden div
            for (var i=1 ; i<=num ; i++) {
                var img = document.createElement('img');
                img.src = '../assets/images/yinan/360/i_('+i+').jpg';
                document.getElementById('preload-imgs').appendChild(img);
            }

            // Control swipes using jquery.touchSwipe.min.js
            // http://labs.rampinteractive.co.uk/touchSwipe/
            var swipeOptions=
            {
                triggerOnTouchEnd : true,   
                swipeStatus : swipeStatus,
                allowPageScroll:"vertical",
                threshold:75            
            }

            $(function()
            {               
                imgs = $(".img-container"); // the element that will be swipeable
                imgs.swipe( swipeOptions );
            });

            function swipeStatus(event, phase, direction, distance) {
                var duration = 0;
                if(direction == "left") {
                    changeImg(distance);
                }
                else if (direction == "right") {
                    changeImgR(-distance);
                }
            }

            function changeImg (imgNum) {

                // spread it out so it doesn't load new img every single px of swipe distance
                imgNum = Math.floor(imgNum/8); 
                
                if (imgNum < 1) {
                    imgNum += num;
                }
                if (imgNum > num) {
                    imgNum -= num;
                }

                // change the image src
								if (imgNum > 0 && imgNum < num) {
                	document.getElementById("myImg").src="../assets/images/yinan/360/i_("+imgNum+").jpg";
								}
                
            }

            function changeImgR (imgNum) {

                // spread it out so it doesn't load new img every single px of swipe distance
                imgNum = Math.floor(imgNum/8); 

                var num2 = -Math.abs(num); 
                if (imgNum > num2) {
                    imgNum += num;
                }
                if (imgNum <= num2) {
                    imgNum += num*2;
                }

                // change the image src
								if (imgNum > 0 && imgNum < num) {
                	document.getElementById("myImg").src="../assets/images/yinan/360/i_("+imgNum+").jpg";
								}
                
            }
        })