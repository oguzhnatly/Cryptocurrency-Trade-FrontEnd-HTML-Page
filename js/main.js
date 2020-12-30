/*
|-------------------------------------------------------------
| File: main.js
| Project: CryptoEX
| License: Themeforest Licence
| Themeforest JouveLab: https://themeforest.net/user/jouvelab
| This file is part of CryptoEX.
|-------------------------------------------------------------
*/
'use strict';
jQuery(document).ready(function() {
	jQuery(document).on('click', '.crypt-header i.menu-toggle', function(){
		jQuery('.crypt-mobile-menu').toggleClass('show');
		jQuery(this).toggleClass('open')
	});
	jQuery('[data-toggle="tooltip"]').tooltip();
	jQuery(document).on('click', '.crypt-heading-menu-toggle', function (e) {
		e.preventDefault();
		$(this).closest('.crypt-heading-menu-toggle').children('.crypt-nav-tab').toggleClass('active');
	});
	jQuery(document).on('click', '.crypt-buysell-cc-dropdown .dropdown-menu .crypt-buysell-cc-opt', function () {
		let currency = $(this).attr("data-currency");
		let data = $(this).html();
		$("#crypt-buysell-cc-value").val(currency);
		$(".crypt-buysell-cc-choosen").html(data);
	});
	jQuery(document).on('click', '.navi[role="i-tablist"] .navi-link', function (e) {
		e.preventDefault();
		$(this).closest('.navi').find('.navi-link.active.show').toggleClass('active show');
		$(this).toggleClass('active show');
		$(".tab-content[role='i-tablist']").find('.tab-pane.active.show').toggleClass('active show');
		$(".tab-content[role='i-tablist'] " + $(this).attr("href")).toggleClass('active show');
	});
	jQuery('#crypt-tab a').on('click', function (e) {
	  	e.preventDefault();
		var x = jQuery(this).attr('href');
		if(x !== "tabpanel"){
			jQuery(this).parents().find('.crypt-tab-content .tab-pane').removeClass('active');
		}
		jQuery(this).parents().find('.crypt-tab-content .tab-pane' + x).addClass('active');
	});
	jQuery(document).on( 'click', '.crypt-coin-select a', function(e){
		e.preventDefault();
		var div = jQuery(this).attr('href');
		jQuery('.crypt-dash-withdraw').removeClass('d-block').addClass('d-none');
		jQuery(div).removeClass('d-none').addClass('d-block');
	});
	var path = window.location.href;
 	jQuery('ul.crypt-heading-menu > li > a').each(function() {
  		if (this.href === path) {
   			jQuery(this).parent('li').addClass('active');
  		}else{
   			jQuery(this).parent('li').removeClass('active');
  		}
  		jQuery('.crypt-box-menu').removeClass('active');
 	});
 	if(document.getElementById('crypt-examplechart')){
 		new TradingView.widget(
		 	{
		  		"autosize": true,
			  	"symbol": "NASDAQ:AAPL",
			  	"interval": "D",
			  	"timezone": "Etc/UTC",
			  	"theme": "Dark",
			  	"style": "1",
			  	"locale": "en",
			  	"toolbar_bg": "rgba(0, 0, 0, 1)",
			  	"enable_publishing": false,
			  	"allow_symbol_change": true,
			  	"container_id": "crypt-examplechart"
			}
	  	);
 	}
});
if (document.getElementById('DARK_CHART_BTC')) {
  am4core.ready(function () {
    var chart = am4core.create('DARK_CHART_BTC', am4charts.XYChart);
    chart.data = generateChartData();
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 1,
    };
    dateAxis.tooltip.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.paddingBottom = 15;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'prices';
    series.tooltipText = 'prices: [bold]{valueY}[/]';
    series.fillOpacity = 0.1;
    series.fill = am4core.color('#f74745');
    series.stroke = am4core.color('#f74745');
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#131722');
    series.tooltip.background.stroke = am4core.color('#131722');
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 1;
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    chart.zoomOutButton.background.fill = am4core.color(
        'rgba(255, 255, 255, 0.11)'
    );
    chart.zoomOutButton.icon.stroke = am4core.color('#ebebeb');
    chart.zoomOutButton.background.states.getKey(
        'hover'
    ).properties.fill = am4core.color('#f74745');
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setMinutes(firstDate.getDate() - 500);
      var prices = 500;
      for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setMinutes(newDate.getMinutes() + i);
        prices += Math.round(
            (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        chartData.push({
          date: newDate,
          prices: prices,
        });
      }
      return chartData;
    }
  });
}
if (document.getElementById('DARK_CHART_ETH')) {
  am4core.ready(function () {
    var chart = am4core.create('DARK_CHART_ETH', am4charts.XYChart);
    chart.data = generateChartData();
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 1,
    };
    dateAxis.tooltip.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.paddingBottom = 15;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'prices';
    series.tooltipText = 'prices: [bold]{valueY}[/]';
    series.fillOpacity = 0.1;
    series.fill = am4core.color('#f74745');
    series.stroke = am4core.color('#f74745');
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#131722');
    series.tooltip.background.stroke = am4core.color('#131722');
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 1;
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    chart.zoomOutButton.background.fill = am4core.color(
        'rgba(255, 255, 255, 0.11)'
    );
    chart.zoomOutButton.icon.stroke = am4core.color('#ebebeb');
    chart.zoomOutButton.background.states.getKey(
        'hover'
    ).properties.fill = am4core.color('#f74745');
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setMinutes(firstDate.getDate() - 500);
      var prices = 500;
      for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setMinutes(newDate.getMinutes() + i);
        prices += Math.round(
            (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        chartData.push({
          date: newDate,
          prices: prices,
        });
      }
      return chartData;
    }
  });
}
if (document.getElementById('darkDepthChart')) {
  function am4themes_dark(target) {
    if (target instanceof am4core.InterfaceColorSet) {
      target.setFor('stroke', am4core.color('#000000'));
      target.setFor('fill', am4core.color('#2b2b2b'));
      target.setFor('primaryButton', am4core.color('#6794dc'));
      target.setFor('primaryButtonHover', am4core.color('#6771dc'));
      target.setFor('primaryButtonDown', am4core.color('#68dc75'));
      target.setFor('primaryButtonActive', am4core.color('#68dc75'));
      target.setFor('primaryButtonText', am4core.color('#FFFFFF'));
      target.setFor('primaryButtonStroke', am4core.color('#6794dc'));
      target.setFor('secondaryButton', am4core.color('#3b3b3b'));
      target.setFor('secondaryButtonHover', am4core.color('#3b3b3b'));
      target.setFor('secondaryButtonDown', am4core.color('#3b3b3b'));
      target.setFor('secondaryButtonText', am4core.color('#bbbbbb'));
      target.setFor('secondaryButtonStroke', am4core.color('#3b3b3b'));
      target.setFor('grid', am4core.color('#6DC0D5'));
      target.setFor('background', am4core.color('#000000'));
      target.setFor('alternativeBackground', am4core.color('#ffffff'));
      target.setFor('text', am4core.color('#ffffff'));
      target.setFor('alternativeText', am4core.color('#000000'));
      target.setFor('disabledBackground', am4core.color('#bbbbbb'));
    }
  }
  am4core.useTheme(am4themes_dark);
  var chart = am4core.create('darkDepthChart', am4charts.XYChart);
  chart.zoomOutButton.background.fill = am4core.color(
      'rgba(255, 255, 255, 0.11)'
  );
  chart.zoomOutButton.icon.stroke = am4core.color('#ebebeb');
  chart.zoomOutButton.background.states.getKey(
      'hover'
  ).properties.fill = am4core.color('#00cc93');
  DepthChart();
}
if (document.getElementById('DARK_CHART_XRP')) {
  am4core.ready(function () {
    var chart = am4core.create('DARK_CHART_XRP', am4charts.XYChart);
    chart.data = generateChartData();
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 1,
    };
    dateAxis.tooltip.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.paddingBottom = 15;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'prices';
    series.tooltipText = 'prices: [bold]{valueY}[/]';
    series.fillOpacity = 0.1;
    series.fill = am4core.color('#00cc93');
    series.stroke = am4core.color('#00cc93');
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#131722');
    series.tooltip.background.stroke = am4core.color('#131722');
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 1;
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    chart.zoomOutButton.background.fill = am4core.color(
        'rgba(255, 255, 255, 0.11)'
    );
    chart.zoomOutButton.icon.stroke = am4core.color('#ebebeb');
    chart.zoomOutButton.background.states.getKey(
        'hover'
    ).properties.fill = am4core.color('#00cc93');
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setMinutes(firstDate.getDate() - 500);
      var prices = 500;
      for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setMinutes(newDate.getMinutes() + i);
        prices += Math.round(
            (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        chartData.push({
          date: newDate,
          prices: prices,
        });
      }
      return chartData;
    }
  });
}
if (document.getElementById('DARK_CHART_LTC')) {
  am4core.ready(function () {
    var chart = am4core.create('DARK_CHART_LTC', am4charts.XYChart);
    chart.data = generateChartData();
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      timeUnit: 'minute',
      count: 1,
    };
    dateAxis.tooltip.disabled = true;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = true;
    dateAxis.renderer.paddingBottom = 15;
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'prices';
    series.tooltipText = 'prices: [bold]{valueY}[/]';
    series.fillOpacity = 0.1;
    series.fill = am4core.color('#00cc93');
    series.stroke = am4core.color('#00cc93');
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#131722');
    series.tooltip.background.stroke = am4core.color('#131722');
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 1;
    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    chart.zoomOutButton.background.fill = am4core.color(
        'rgba(255, 255, 255, 0.11)'
    );
    chart.zoomOutButton.icon.stroke = am4core.color('#ebebeb');
    chart.zoomOutButton.background.states.getKey(
        'hover'
    ).properties.fill = am4core.color('#00cc93');
    function generateChartData() {
      var chartData = [];
      var firstDate = new Date();
      firstDate.setMinutes(firstDate.getDate() - 500);
      var prices = 500;
      for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setMinutes(newDate.getMinutes() + i);
        prices += Math.round(
            (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        chartData.push({
          date: newDate,
          prices: prices,
        });
      }
      return chartData;
    }
  });
}
function DepthChart() {
  chart.dataSource.url =
      'https://poloniex.com/public?command=returnOrderBook&currencyPair=BUSD_BTC&depth=50';
  chart.dataSource.reloadFrequency = 25000;
  chart.dataSource.adapter.add('parsedData', function (data) {
    function processData(list, type, desc) {
      for (var i = 0; i < list.length; i++) {
        list[i] = {
          value: Number(list[i][0]),
          volume: Number(list[i][1]),
        };
      }
      list.sort(function (a, b) {
        if (a.value > b.value) {
          return 1;
        } else if (a.value < b.value) {
          return -1;
        } else {
          return 0;
        }
      });
      if (desc) {
        for (var i = list.length - 1; i >= 0; i--) {
          if (i < list.length - 1) {
            list[i].totalvolume = list[i + 1].totalvolume + list[i].volume;
          } else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp['value'] = list[i].value;
          dp[type + 'volume'] = list[i].volume;
          dp[type + 'totalvolume'] = list[i].totalvolume;
          res.unshift(dp);
        }
      } else {
        for (var i = 0; i < list.length; i++) {
          if (i > 0) {
            list[i].totalvolume = list[i - 1].totalvolume + list[i].volume;
          } else {
            list[i].totalvolume = list[i].volume;
          }
          var dp = {};
          dp['value'] = list[i].value;
          dp[type + 'volume'] = list[i].volume;
          dp[type + 'totalvolume'] = list[i].totalvolume;
          res.push(dp);
        }
      }
    }
    var res = [];
    processData(data.bids, 'bids', true);
    processData(data.asks, 'asks', false);
    return res;
  });
  chart.numberFormatter.numberFormat = '#,###.####';
  var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  xAxis.dataFields.category = 'value';
  xAxis.renderer.minGridDistance = 50;
  xAxis.tooltip.disabled = true;
  xAxis.renderer.grid.template.disabled = true;
  xAxis.renderer.paddingBottom = 10;
  var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.tooltip.disabled = true;
  yAxis.renderer.grid.template.disabled = true;
  var series = chart.series.push(new am4charts.StepLineSeries());
  series.dataFields.categoryX = 'value';
  series.dataFields.valueY = 'bidstotalvolume';
  series.strokeWidth = 1;
  series.stroke = am4core.color('#26de81');
  series.fill = series.stroke;
  series.fillOpacity = 0.5;
  series.tooltip.getFillFromObject = false;
  series.tooltip.background.fill = am4core.color('#26de81');
  series.tooltip.background.stroke = am4core.color('#26de81');
  series.tooltipText =
      'Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{bidsvolume}[/]';
  var series2 = chart.series.push(new am4charts.StepLineSeries());
  series2.dataFields.categoryX = 'value';
  series2.dataFields.valueY = 'askstotalvolume';
  series2.strokeWidth = 1;
  series2.stroke = am4core.color('#ff231f');
  series2.fill = series2.stroke;
  series2.fillOpacity = 0.5;
  series2.tooltip.getFillFromObject = false;
  series2.tooltip.background.fill = am4core.color('#ff231f');
  series2.tooltip.background.stroke = am4core.color('#ff231f');
  series2.tooltipText =
      'Ask: [bold]{categoryX}[/]\nTotal volume: [bold]{valueY}[/]\nVolume: [bold]{asksvolume}[/]';
  var series3 = chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.categoryX = 'value';
  series3.dataFields.valueY = 'bidsvolume';
  series3.strokeWidth = 0;
  series3.fill = am4core.color('#2a2e39');
  series3.fillOpacity = 0.1;
  var series4 = chart.series.push(new am4charts.ColumnSeries());
  series4.dataFields.categoryX = 'value';
  series4.dataFields.valueY = 'asksvolume';
  series4.strokeWidth = 0;
  series4.fill = am4core.color('#2a2e39');
  series4.fillOpacity = 0.1;
  chart.cursor = new am4charts.XYCursor();
}