window.onload=function(){

const xValuesJobLocation = ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"];
const yValuesJobLocation = [80000, 75000, 49000, 47000, 42000, 34000];
const barColors = '#48be9a';

new Chart("chartJobLocation", {
  type: "horizontalBar",
  data: {
    labels: xValuesJobLocation,
    datasets: [{
      backgroundColor: barColors ,
      data: yValuesJobLocation
    }]
  },
  options: {
    legend: {display: false,
  position: 'bottom'},
    title: {
      display: true,
      text: "Revenue for November 2019"
    }
  }
});

const xValuesJobType = ["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Work Plumbing", "HWT Replacement", "Maintenance", "Material Sale"];
const yValuesJobType = [182000, 130000, 79000, 77000, 43000, 42000, 2000];

new Chart("chartJobType", {
  type: "horizontalBar",
  data: {
    labels: xValuesJobType,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesJobType
    }]
  },
  options: {
    legend: {display: false,
  position: 'bottom'},
    title: {
      display: true,
      text: "Revenue for November 2019"
    }
  }
});
}