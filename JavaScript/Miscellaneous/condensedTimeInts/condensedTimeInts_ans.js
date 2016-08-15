// using javascript sorting

function mergeRanges(meetings) {

  // sort by start times
  var sortedMeetings = meetings.slice().sort(function(a, b) {
      return a.startTime > b.startTime ? 1 : -1;
  });

  // initialize mergedMeetings with the earliest meeting
  var mergedMeetings = [sortedMeetings[0]];

  for (var i = 1; i < sortedMeetings.length; i++) {

      var currentMeeting    = sortedMeetings[i];
      var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

      // if the current and last meetings overlap, use the latest end time
      if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
          lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

      // add the current meeting since it doesn't overlap
      } else {
          mergedMeetings.push(currentMeeting);
      }
  }

  return mergedMeetings;
}




// using your own sorting

function quicksortForHash(arr){
	if (arr.length == 0) return [];

	var pivot = arr[Math.floor(arr.length/2)];
	var right = [];
	var left = [];
	for(var i = 0; i< arr.length; i++){
		if (i === Math.floor(arr.length/2)){
			continue
		}
		if (arr[i].startTime <= pivot.startTime){
			left.push(arr[i])
		} else{
			right.push(arr[i])
		}
	}
	 return quicksortForHash(left).concat(pivot, quicksortForHash(right))
}

function hiCal(arr){

	var sortedCalandar = quicksortForHash(arr);
	var answer = [sortedCalandar[0]]
	for(var i= 1; i < sortedCalandar.length; i++){
		var currentMeeting = sortedCalandar[i];
		var lastMergedMeeting = answer[answer.length - 1];

		if (currentMeeting.startTime <= lastMergedMeeting.endTime){
			lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
		} else {
			answer.push(currentMeeting)
		}
	}
	return answer
}


console.log(hiCal(  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]))
