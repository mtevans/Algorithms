// Your company built an in-house calendar tool called HiCal. You want to add a
// feature to see the times in a day when everyone is available.
// To do this, you’ll need to know when any team is having a meeting. In HiCal,
// a meeting is stored as objects ↴ with attributes startTime and endTime. These
// integers represent the number of 30-minute blocks past 9:00am.
//
// For example:
//
//   {startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm
//
// Write a function condenseMeetingTimes() that takes an array of meeting time
// ranges and returns an array of condensed ranges.
//
// For example, given:
//
//   [
//     {startTime: 0,  endTime: 1},
//     {startTime: 3,  endTime: 5},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ]
//
// your function would return:
//
//   [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]
//
// Do not assume the meetings are in order. The meeting times are coming from
// multiple teams



function hiCal(times){

  var sortedTimes = times.sort(function(a,b){
    return a.startTime > b.startTime ? 1: -1;
  })

  var timeStack = [sortedTimes[0]];
  for(var i = 1; i < sortedTimes.length; i++ ){
    if(sortedTimes[i].startTime <= timeStack[timeStack.length -1].endTime){
       timeStack[timeStack.length -1].endTime = Math.max(timeStack[timeStack.length -1].endTime, sortedTimes[i].endTime )
    } else {
      timeStack.push(sortedTimes[i])
    }
  }

  return timeStack
}


console.log(hiCal(  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 11, endTime: 12},
    {startTime: 1,  endTime: 10},
]))







console.log(hiCal(  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
]))
