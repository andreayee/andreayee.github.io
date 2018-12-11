// age demographics donut chart

var ageboba = document.getElementById('ageChart');

ageData = {
    datasets: [{
        backgroundColor: 'rgb(255, 174, 155)', 
        borderColor: 'rgb(255, 255, 255)',

        data: [19, 218, 23, 6, 8],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
    'Below 18 years-old',
    '19-25 years-old',
    '26-33 years-old',
    '34-40 years-old',
    '40+ years-old'
    ]
};


// And for a doughnut chart
var myDoughnutChart = new Chart(ageboba, {
    type: 'doughnut',
    data: ageData,
});
















// bar graph
var bobabuy = document.getElementById('bobaBuying');

buyData = {
    datasets: [{
        label: "Number of Respondents",
        backgroundColor: 'rgb(255, 174, 155)',
        borderColor: 'rgb(255, 255, 255)',


        data: [12, 105, 65, 34, 15, 14, 15, 4, 5, 1, 4],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
    '0 cups per week',
    '1 cup per week',
    '2 cups per week',
    '3 cups per week',
    '4 cups per week',
    '5 cups per week',
    '6 cups per week',
    '7 cups per week',
    '8 cups per week',
    '9 cups per week',
    '10+ cups per week',
    ]
    // yAxisID: ['cups'],

};

var myBarChart = new Chart(bobabuy, {
    type: 'bar',
    data: buyData,
    // options: options
});











// toppings bar graph
var toppingspreferred = document.getElementById('toppingsChart');

topData = {
    datasets: [{
        label: "Number of Respondents",
        backgroundColor: 'rgb(255, 174, 155)',
        borderColor: 'rgb(255, 255, 255)',


        data: [26, 205, 25, 22, 12, 17, 6, 20, 6, 49, 8, 7, 7, 19, 50, 6, 29, 5, 5, 8, 20, 20, 1, 1, 1],

    }],


    labels: [
    'No Toppings',
    'Boba',
    'Mini Boba',
    'Agar Boba / White Pearls',
    'Popping Boba',
    'Red Bean',
    'Fresh Taro',
    'Coconut Jelly',
    'Rainbow Jelly',
    'Lychee Jelly',
    'Passionfruit Jelly',
    'Mango Jelly',
    'Coffee Jelly',
    'Aloe Vera',
    'Grass Jelly',
    'Mango Pudding',
    'Egg Pudding',
    'Tofuhua (Tofu Pudding)',
    'Basil Seeds',
    'Ice Cream',
    'Milk Foam',
    'Salted Cheese',
    'Oats',
    'Grape Jelly',
    'Almond Jelly',
    ]
    

};

var myBarChart = new Chart(toppingspreferred, {
    type: 'horizontalBar',
    data: topData,

});















// sugar/ice chart

var popCanvas = document.getElementById("sugariceChart");


var popData = {
  datasets: [{
    label: ['Number of Respondents for each Sugar / Ice Level preference'],
    data: [{
      x: 0,
      y: 0,
      r: 20
    }, {
      x: 0,
      y: .25,
      r: 6
    }, {
      x: 0,
      y: .50,
      r: 14
    }, {
      x: 0,
      y: 1,
      r: 4
    }, {
      x: .25,
      y: 0,
      r: 9
    }, {
      x: .25,
      y: .25,
      r: 26
    }, {
      x: .25,
      y: .50,
      r: 8
    }, {
      x: .25,
      y: 1.00,
      r: 2
    }, {
      x: .50,
      y: 0,
      r: 19
    }, {
      x: .50,
      y: .25,
      r: 29
    }, {
      x: .50,
      y: .50,
      r: 45
    }, {
      x: .50,
      y: .75,
      r: 6
    },{
      x: .50,
      y: 1.00,
      r: 6
    }, {
      x: .75,
      y: 0,
      r: 10
    }, {
      x: .75,
      y: .25,
      r: 16
    }, {
      x: .75,
      y: .5,
      r: 14
    },{
      x: .75,
      y: .75,
      r: 4
    },{
      x: .75,
      y: 1.00,
      r: 4
    }, {
      x: 1.00,
      y: 0,
      r: 7
    }, {
      x: 1.00,
      y: .25,
      r: 16
    }, {
      x: 1.00,
      y: .50,
      r: 9
    },{
      x: 1.00,
      y: .75,
      r: 10
    }, {
      x: 1.00,
      y: 1.00,
      r: 7
    }, {
      x: 1.25,
      y: .25,
      r: 1
    }, {
      x: 1.25,
      y: .50,
      r: 2
    },{
      x: 1.25,
      y: 1.25,
      r: 1
    }],

    backgroundColor: 'rgb(255, 174, 155)',
    borderColor: 'rgb(255, 255, 255)',
    hoverRadius: 5
  }]
};

var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData
});









// tea base preferences donut chart

var teapreferences = document.getElementById('teaChart');

teaData = {
    datasets: [{
        backgroundColor: 'rgb(255, 174, 155)',
        borderColor: 'rgb(255, 255, 255)',

        data: [100, 90, 43, 19, 19, 1, 2],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
    'Black Tea',
    'Green Tea',
    'Oolong Tea',
    'Matcha',
    'Thai Tea',
    'Slush',
    'Earl Grey'

    ]
};


// And for a doughnut chart
var myDoughnutChart = new Chart(teapreferences, {
    type: 'doughnut',
    data: teaData,
});












// milk preferences donut chart

var milkpreferences = document.getElementById('milkChart');

milkData = {
    datasets: [{
        backgroundColor: 'rgb(255, 174, 155)',
        borderColor: 'rgb(255, 255, 255)',

        data: [192, 33, 47, 2],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
    'Milk',
    'Dairy Free Creamer/Nut/Soy/Oat Milks',
    'No Milk',
    'Undecided',

    ]
};


// And for a doughnut chart
var myDoughnutChart = new Chart(milkpreferences, {
    type: 'doughnut',
    data: milkData,
});











// flavor preferences donut chart

var flavorpreferences = document.getElementById('flavorChart');

flavorData = {
    datasets: [{
        label: "Number of Respondents",
        backgroundColor: 'rgb(255, 174, 155)',
        borderColor: 'rgb(255, 255, 255)',

        data: [120, 6, 23, 19, 18, 3, 16, 2, 12, 6, 12, 9, 9, 10, 2, 1, 1, 5 ],

    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
    'Original Flavor',
    'Yakult',
    'Taro',
    'Honey',
    'Brown Sugar',
    'Toffee/Caramel',
    'Mango',
    'Strawberry',
    'Passionfruit',
    'Citrus',
    'Rose',
    'Wintermelon',
    'Lychee',
    'Peach',
    'Honeydew',
    'Hazelnut',
    'Banana',
    'Undecided',

    ]
};



var myBarChart = new Chart(flavorpreferences, {
    type: 'horizontalBar',
    data: flavorData,
});
















































