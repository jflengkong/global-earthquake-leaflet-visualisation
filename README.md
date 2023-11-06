
<div align="center">
    <img src="https://th.bing.com/th/id/OIP.xSYwk70WeIiavGvr7N2bpwHaB_?pid=ImgDet&rs=1" width="1000" height ="200"/>

  <h1 align="center">  :earth_asia: #leaflet-challenge :earth_asia: </h1>

  <p align="center">
    UWA Week 15 Challenge
    <br />
    <a href="https://jflengkong.github.io/leafleft-challenge/"><strong>Leaflet Result»</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<h2> Table of Contents </h2>
  <li> 
    <a href="#background-about-the-project">About The Project</a> 
   <li>
   <a href="#documents">Documents</a>
   </li> 
   <li> 
      <a href="#resources-and-instructions">Resources and Instructions</a> 
   </li>
   <li>
      <a href="#earthquake-visualisation">Earthquake Visualisation</a> 
    </li>
      <li>
      <a href="#references">References</a> 
    </li>
    </li> 
  
<!-- ABOUT THE PROJECT -->
## Background About the Project 
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualise USGS data that will allow them to better educate the public and other government organisations (and hopefully secure more funding) on issues facing our planet.


## Documents 
Description of documents included in this repository:

1. `static folder` : includes the completed [`style.css`]([https://github.com/jflengkong/belly-button-challenge/blob/main/static/js/app.js](https://github.com/jflengkong/leafleft-challenge/blob/main/Leaflet-part-1/static/css/style.css) and  [`logic.js`](https://github.com/jflengkong/leafleft-challenge/blob/main/Leaflet-part-1/static/js/logic.js). 
2. `images folder` : Screenshots of completed Earthquake Visualisation.  
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Resources and Instructions
UWA provided us with the [GeoJSON website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) - The USGS provides earthquake data in a number of different formats, updated every 5 minutes. We were required to visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualise. The following image is an example screenshot of what appears when you visit this link: <br> 

![geojson](https://github.com/jflengkong/leafleft-challenge/blob/main/images/Geodata-image.jpg)  

With the information we were able to obtain a dataset (the Past 7 Days) and place the information given into an earthquake visualisation. 
The following image is a sampling of earthquake data in JSON format: 
![image](https://github.com/jflengkong/leafleft-challenge/assets/131760750/3a06a836-deff-437d-8a71-46a88bc7a624)

<p align="right">(<a href="#readme-top">back to top</a>)</p> 

<b> Included information in Visualisation </b><br>
- Plot earthquakes by their longitude and latitude.
- Markers reflecting the magnitude of the earthquake by their <b> size </b> 
- Marksers reflecting <b> depth </b> of the earthquake by colour.
- Popups that provide additional information about the earthquake will be included to show more information.
- A legend to provide context

<p align="right">(<a href="#readme-top">back to top</a>)</p>  

## Earthquake Visualisation
Data from USGS was used to visualise the last 7 days earthquake and visualise as below: 
![interactive](https://github.com/jflengkong/leafleft-challenge/blob/main/images/interactive-map.gif ) 

<p align="right">(<a href="#readme-top">back to top</a>)</p> 


## References<br> 
[1] Earthquake Image: [Earthquake Image](https://www.bing.com/images/search?view=detailV2&ccid=xSYwk70W&id=A1C08A624F53A85EEAACE95584AEB774408BEBDF&thid=OIP.xSYwk70WeIiavGvr7N2bpwHaB_&mediaurl=https%3a%2f%2fs3.amazonaws.com%2fhoth.bizango%2fimages%2f626579%2fSS-headers-links_feature.jpg%3fv%3ddsf26&exph=376&expw=1400&q=earthquake+header&simid=608033572901837500&FORM=IRPRST&ck=02B57A6867ACDF431A88833817089478&selectedIndex=52&ajaxhist=0&ajaxserp=0)<br> 
[2] USGS GeoJSON  - [USGS Website](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)<br> 
[3] Leaflet Legend - [IGISMAP](https://www.igismap.com/legend-in-leafletjs-map-with-topojson/)<br>
[4] Colour Gradient Generator - [colordesigneer](https://colordesigner.io/gradient-generator)
