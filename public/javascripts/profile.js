const path = window.location.pathname.split('/');
const userID = path[path.length - 1];
console.log(userID);


// Load Charts and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Callback function for getting user data and drawing pie charts
async function getdata() {
  try {

    var data = await fetch(`/getdata/${userID}`);
    var res = await data.json();
    console.log(res);

    // Sort moods based on timestamps
    const sortedMoods = res.moods.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    // Get the current date
    const currentDate = new Date();

    // Filter moods for the last month
    const lastMonthMoods = sortedMoods.filter(mood =>
      new Date(mood.timestamp) >= new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate())
    );

    // Filter moods for the last week
    const lastWeekMoods = sortedMoods.filter(mood =>
      new Date(mood.timestamp) >= new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7)
    );

    // Filter moods for today
    const todayMoods = sortedMoods.filter(mood =>
      new Date(mood.timestamp).toDateString() === currentDate.toDateString()
    );

    // Count occurrences of each mood for each period
    const lastMonthCounts = countMoods(lastMonthMoods);
    const lastWeekCounts = countMoods(lastWeekMoods);
    const todayCounts = countMoods(todayMoods);

    // Populate the charts with the mood counts
    drawChart('LastMonth', lastMonthCounts);
    drawChart('LastWeek', lastWeekCounts);
    drawChart('Today', todayCounts);
  } catch (error) {
    console.error(error);
  }
}

// Helper function to count occurrences of each mood
function countMoods(moods) {
  return moods.reduce((acc, mood) => {
    acc[mood.mood] = (acc[mood.mood] || 0) + 1;
    return acc;
  }, {});
}

// Helper function to draw a pie chart
function drawChart(chartId, counts) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Mood');
  data.addColumn('number', 'Times');

  // Convert counts object to array of [mood, count] pairs
  const rows = Object.entries(counts);

  // Add rows to the data table
  data.addRows(rows);

  // Set options for the pie chart
  var options = {
    title: chartId,
    legend: 'bottom',
    width: 400,
    height: 300
  };

  // Instantiate and draw the chart
  var chart = new google.visualization.PieChart(document.getElementById(chartId));
  chart.draw(data, options);
}

// SetOnLoadCallback to call getdata after the Google Charts API is loaded
google.charts.setOnLoadCallback(getdata);




