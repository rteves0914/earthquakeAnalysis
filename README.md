# leaflet-challenge

Have you ever wondered where NOT to live?? Some locations are more prone to earthquakes, and some places are prone to having very large earthquakes.

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it.

In this project, I use a javascript package called Leaflet, along with an API call to USGS, to pull in data that shows all earthquakes in the past week, and display them on a map of the world. Each marker for an earthquake is given as a circle, with the color of the circle depending on the depth of the earthquake and the radius of the circle on the magnitude of the earthquake. The map and corresponding markers for the earthquakes is rendered in a web page that is served using CSS and HTML. Each marker is clickable and will show the location of the earthquake along with its magnitude.