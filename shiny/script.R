df_raw <- read.csv("word_frequency_per_state_per_minute.csv", stringsAsFactors = FALSE)
state_codes <- read.csv("codes_state.csv", stringsAsFactors = F)
df <- merge(df, state_codes, by = "state")



leaflet(data = df_raw) %>%
  addProviderTiles(providers$Stamen.TonerLite,
                   options = providerTileOptions(noWrap = TRUE)) %>%
addMarkers(lng = ~long, lat = ~lat)
library(plotly)

g <- list(
  scope = 'usa',
  projection = list(type = 'albers usa'),
  showland = TRUE,
  landcolor = toRGB("gray95"),
  subunitcolor = toRGB("gray85"),
  countrycolor = toRGB("gray85"),
  countrywidth = 0.5,
  subunitwidth = 0.5
)


p <- plot_geo(df, lat = ~lat, lon = ~long) %>%
  add_trace(
    z = 1, text = ~state, locations = ~code
  ) %>%
  add_markers(
    text = ~paste(text, sep = "<br />"),
    symbol = I("square"), size = I(2), hoverinfo = "text"
  ) %>%
  layout(
    title = 'Tweets <br />CNN Townhall', 
    geo = g
  )
p
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="maps-traffic")
chart_link


library(shiny)
library(leaflet)
library(maps)
mapStates <- map("state", fill = TRUE, plot = FALSE)

leaflet(mapStates) %>%
  addTiles() %>%
  addPolygons(color = "#444444",
              weight = 1,
              smoothFactor = 0.5,
              opacity = 1.0,
              fillOpacity = 0.5,
              fillColor = terrain.colors(50, alpha = 1),
              highlightOptions = highlightOptions(color = "black", weight = 2, bringToFront = TRUE))






Sys.setenv('MAPBOX_TOKEN' = 'pk.eyJ1IjoiZ2F1cnNpbiIsImEiOiJjamc5c2plODgxeDgyMnlybmd0eDBnbTB4In0.UWEHxFdszk_SRxhYDKmizg')
dat <- map_data("state") %>% group_by(group)

p <- plot_mapbox(dat, x = ~long, y = ~lat) %>%
  add_paths(size = I(2)) %>%
  add_segments(x = -100, xend = -50, y = 50, 75) %>%
  layout(mapbox = list(zoom = 0,
                       center = list(lat = ~median(lat),
                                     lon = ~median(long))
  ))
p
# Create a shareable link to your chart
# Set up API credentials: https://plot.ly/r/getting-started
chart_link = api_create(p, filename="mapbox-basic")
chart_link









############ leaflet
# From http://leafletjs.com/examples/choropleth/us-states.js

states <- geojsonio::geojson_read("json/us-states.geojson", what = "sp")

bins <- c(0, 10, 20, 50, 100, 200, 500, 1000, Inf)
pal <- colorBin("YlOrRd", domain = states$density, bins = bins)

labels <- sprintf(
  "<strong>%s</strong><br/>%g people / mi<sup>2</sup>",
  states$name, states$density
) %>% lapply(htmltools::HTML)

leaflet(states) %>%
  setView(-96, 37.8, 4) %>%
  addProviderTiles("MapBox", options = providerTileOptions(
    id = "mapbox.light",
    accessToken = Sys.getenv('MAPBOX_ACCESS_TOKEN'))) %>%
  addPolygons(
    fillColor = ~pal(density),
    weight = 2,
    opacity = 1,
    color = "white",
    dashArray = "3",
    fillOpacity = 0.7,
    highlight = highlightOptions(
      weight = 5,
      color = "#666",
      dashArray = "",
      fillOpacity = 0.7,
      bringToFront = TRUE),
    label = labels,
    labelOptions = labelOptions(
      style = list("font-weight" = "normal", padding = "3px 8px"),
      textsize = "15px",
      direction = "auto")) %>%
  addLegend(pal = pal, values = ~density, opacity = 0.7, title = NULL,
            position = "bottomright")


m <- leaflet(states) %>%
  setView(-96, 37.8, 4) %>%
  addProviderTiles("MapBox", options = providerTileOptions(
    id = "mapbox.light",
    accessToken = Sys.getenv('pk.eyJ1IjoiZ2F1cnNpbiIsImEiOiJjamc5c2plODgxeDgyMnlybmd0eDBnbTB4In0.UWEHxFdszk_SRxhYDKmizg')))

bins <- c(0, 10, 20, 50, 100, 200, 500, 1000, Inf)
pal <- colorBin("YlOrRd", domain = states$density, bins = bins)

m %>% addPolygons(
  fillColor = ~pal(density),
  weight = 2,
  opacity = 1,
  color = "white",
  dashArray = "3",
  fillOpacity = 0.7)

m


mapStates = map("state", fill = TRUE, plot = FALSE)
leaflet(data = mapStates) %>% addTiles() %>%
  addPolygons(fillColor = topo.colors(10, alpha = NULL), stroke = FALSE)

library(geojson)
library(geojsonio)
url <- "http://leafletjs.com/examples/choropleth/us-states.js"

# read as text file
doc <- readLines(url)

# remove the javascript assignment at the front 
doc2 <- gsub("var statesData = ", "", doc)

# write out as a temp file and read
write(doc2, file = "geo_states.json")
states <- geojson_read("geo_states.json", what = "sp")