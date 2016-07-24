/*
	var path = cordova.file.applicationDirectory + 
				"www/media/video/materi
				/beginner/book1/lesson1/1.mp4";
	if (cordova.platformId == 'android'){
		var options = {
			successCallback: function (){
				console.log("video was closed without error.");
			},
			errorCallback: function (errMsg){
				console.log("Error! +errMsg");
			},
			orientation: 'landscape'

		};
		window.plugins.videoPlayer.play
		("file:///www/media/video/materi
			/beginner/book1/lesson1/1.mp4");
	}
*/

/*
	<script >
		var myMedia;

		myMedia = document.getElementById('vid');
		<span style="font-size: 13px;">
			myMedia = document.getElementById('vid');
		</span>

		function playVideo()
		{
			myMedia.play();
		}
		function pauseVideo()
		{
			myMedia.pause();
		}
		function stopVideo()
		{
			myMedia.pause();
			myMedia.currentTime = 0;
		}


	</script> 
*/


/*
	<script >
			window.onload = function()
			{
				//document.addEventListener("deviceready", init, false);
				init();
			}
			function init()
			{
				document.getElementById("btnPlay").addEventListener('click', playVideo, false);
				document.getElementById("btnPause").addEventListener('click', pauseVideo, false);
				document.getElementById("btnStop").addEventListener('click',stopVideo, false);
			}
	</script>
*/



			function playMP4() {

				VideoPlayer.play(
					"file:///www/media/video/materi/beginner/book1/lesson1/1.mp4",
					{
					volume: 1.0,
					scalingMode: VideoPlayer.SCALING_MODE.SCALE_TO_FIT_WITH_CROPPING	
					},
					function(){
						console.log("video completed");
					},
					function (err){
						console.log(err);
					}

					);
			}

	


/*
	var video = document.getElementById('video');
	video.addEventListener('click',function(){
		video.play();
	},false);
*/	