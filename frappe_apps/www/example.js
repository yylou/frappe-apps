/**
 *	@Author : Yuan-Yao Lou (Mike) <lou45@purdue.edu | yuanyao.lou@gmail.com>
 *	@Title  : PhD in ECE at Purdue University
 *	@Date   : 2021/06/09
 */


 document.getElementById('cat-dashboard').className += ' active';
 document.getElementById('dashboard').className += ' active';
 
 $('#chart-1 a').on('click', function (e) {
     e.preventDefault()
     $(this).tab('show')
 })
 
 $('#chart-2 a').on('click', function (e) {
     e.preventDefault()
     $(this).tab('show')
 })
 
 $('#chart-3 a').on('click', function (e) {
     e.preventDefault()
     $(this).tab('show')
 })
 
 var pieLabel = ['Event 1', 'Event 2', 'Event 3']
 var pieColor = ['#00a65a', '#f39c12', '#f56954']
 
 var pieData1 = {
     labels: pieLabel,
     datasets: [
     {
         data: [700,200,300],
         backgroundColor : pieColor,
     }
     ]
 }
 
 var pieData2 = {
     labels: pieLabel,
     datasets: [
     {
         data: [600,300,200],
         backgroundColor : pieColor,
     }
     ]
 }
 
 var pieData3 = {
     labels: pieLabel,
     datasets: [
     {
         data: [400,500,200],
         backgroundColor : pieColor,
     }
     ]
 }

 
 //-------------
 //- PIE CHART -
 //-------------
 // Get context with jQuery - using jQuery's .get() method.
 var pieChartCanvas1 = $('#pieChart1').get(0).getContext('2d')
 var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d')
 var pieChartCanvas3 = $('#pieChart3').get(0).getContext('2d')
 var pieChartCanvas4 = $('#pieChart4').get(0).getContext('2d')
 var pieChartCanvas5 = $('#pieChart5').get(0).getContext('2d')
 var pieChartCanvas6 = $('#pieChart6').get(0).getContext('2d')
 var pieChartCanvas7 = $('#pieChart7').get(0).getContext('2d')
 var pieChartCanvas8 = $('#pieChart8').get(0).getContext('2d')
 var pieChartCanvas9 = $('#pieChart9').get(0).getContext('2d')
 
 var pieOptions = {
     responsive : true,
     maintainAspectRatio : false,
 }
 
 new Chart(pieChartCanvas1, {
     type: 'pie',
     data: pieData1,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas2, {
     type: 'pie',
     data: pieData2,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas3, {
     type: 'pie',
     data: pieData3,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas4, {
     type: 'pie',
     data: pieData1,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas5, {
     type: 'pie',
     data: pieData2,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas6, {
     type: 'pie',
     data: pieData3,
     options: pieOptions
 })
 new Chart(pieChartCanvas7, {
     type: 'pie',
     data: pieData1,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas8, {
     type: 'pie',
     data: pieData2,
     options: pieOptions
 })
 
 new Chart(pieChartCanvas9, {
     type: 'pie',
     data: pieData3,
     options: pieOptions
 })