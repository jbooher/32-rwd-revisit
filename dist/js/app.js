(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var lat = 0;
var lon = 0;

navigator.geolocation.getCurrentPosition(function (position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  var map = new google.maps.Map(document.querySelector('.mapDiv'), {
    center: { lat: lat, lng: lon },
    zoom: 12,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({ position: { lat: 34.747874, lng: -92.264993 }, map: map, title: 'The Iron Yard' });

  var infoWindow = new google.maps.InfoWindow({ content: '<h1>The Iron Yard</h1>' });

  marker.addListener('click', function () {
    if (infoWindow.getMap()) {
      infoWindow.close();
    } else {
      infoWindow.open(map, marker);
    }
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLE1BQU0sQ0FBVjtBQUNBLElBQUksTUFBTSxDQUFWOztBQUVBLFVBQVUsV0FBVixDQUFzQixrQkFBdEIsQ0FBeUMsVUFBUyxRQUFULEVBQW1CO0FBQzFELFFBQU0sU0FBUyxNQUFULENBQWdCLFFBQXRCO0FBQ0EsUUFBTSxTQUFTLE1BQVQsQ0FBZ0IsU0FBdEI7O0FBRUEsTUFBTSxNQUFNLElBQUksT0FBTyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQXBCLEVBQXVEO0FBQ2pFLFlBQVEsRUFBRSxLQUFLLEdBQVAsRUFBWSxLQUFLLEdBQWpCLEVBRHlEO0FBRWpFLFVBQU0sRUFGMkQ7QUFHakUsc0JBQWtCO0FBSCtDLEdBQXZELENBQVo7O0FBTUEsTUFBSSxTQUFTLElBQUksT0FBTyxJQUFQLENBQVksTUFBaEIsQ0FBdUIsRUFBRSxVQUFVLEVBQUUsS0FBSyxTQUFQLEVBQWtCLEtBQUssQ0FBQyxTQUF4QixFQUFaLEVBQWdELEtBQUssR0FBckQsRUFBMEQsT0FBTyxlQUFqRSxFQUF2QixDQUFiOztBQUVBLE1BQUksYUFBYSxJQUFJLE9BQU8sSUFBUCxDQUFZLFVBQWhCLENBQTJCLEVBQUUsaUNBQUYsRUFBM0IsQ0FBakI7O0FBRUEsU0FBTyxXQUFQLENBQW1CLE9BQW5CLEVBQ0UsWUFBVztBQUNULFFBQUksV0FBVyxNQUFYLEVBQUosRUFBeUI7QUFDdkIsaUJBQVcsS0FBWDtBQUNELEtBRkQsTUFHSztBQUNILGlCQUFXLElBQVgsQ0FBZ0IsR0FBaEIsRUFBcUIsTUFBckI7QUFDRDtBQUNGLEdBUkg7QUFTRCxDQXZCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgbGF0ID0gMDtcbmxldCBsb24gPSAwO1xuXG5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gIGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcbiAgbG9uID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcblxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXBEaXYnKSwge1xuICAgIGNlbnRlcjogeyBsYXQ6IGxhdCwgbG5nOiBsb259LFxuICAgIHpvb206IDEyLFxuICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWVcbiAgICB9KTtcblxuICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiB7IGxhdDogMzQuNzQ3ODc0LCBsbmc6IC05Mi4yNjQ5OTN9LCBtYXA6IG1hcCwgdGl0bGU6ICdUaGUgSXJvbiBZYXJkJyB9KTtcblxuICBsZXQgaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHsgY29udGVudDogYDxoMT5UaGUgSXJvbiBZYXJkPC9oMT5gIH0pO1xuXG4gIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLFxuICAgIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGluZm9XaW5kb3cuZ2V0TWFwKCkpIHtcbiAgICAgICAgaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGluZm9XaW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gICAgICB9XG4gICAgfSk7XG59KTtcbiJdfQ==
