var ascensor = $('#ascensorBuilding').ascensor({ascensorFloorName:["Home", "Implementation", "HTML" , "Jquery" , "CSS", "Smartphone", "End", "Yaaay"], direction: [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1]]});
			var ascensorInstance = $('#ascensorBuilding').data('ascensor');
			var floorAdded = false;
			$(".add-floor").click(function(){
				if(!floorAdded){
				$('#ascensorBuilding').append('<div class="floor floor-8"><span class="text">This floor has been dynamically appended!</span></div>');
				ascensorInstance.refresh();
				$(this).text("Floor Added!");
				floorAdded = true;
				}
			});

			$(".links-to-floor li").click(function(event, index) {
				ascensorInstance.scrollToFloor($(this).index());
			});

			$(".links-to-floor li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

			ascensor.on("scrollStart", function(event, floor){
				$(".links-to-floor li").removeClass("selected");
				$(".links-to-floor li:eq("+floor.to+")").addClass("selected");
			});

			$(".prev").click(function() {
				ascensorInstance.prev();
			});

			$(".next").click(function() {
				ascensorInstance.next();
			});

			$(".direction").click(function() {
				ascensorInstance.scrollToDirection($(this).data("direction"));
			});