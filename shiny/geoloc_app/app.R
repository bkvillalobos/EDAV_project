library(shiny)
library(shinythemes)
library(leaflet)
library(ggmap)
library(maps)
library(wordcloud)
library(dplyr)

r_colors <- rgb(t(col2rgb(colors()) / 255))
names(r_colors) <- colors()

ui <- navbarPage(theme = shinytheme("superhero"),
                 title = "CNN Townhall Tweets By States",
                 tabPanel("Map", 
                          leafletOutput("mymap"),
                          sliderInput("time_slot", "Minutes into Debate",
                                               min = 0, max = 120,
                                               value = 10),
                          h3("Wordcloud Visualization for Selected State"),
                          textOutput("selected_state"),
                          plotOutput("cloud"),
                          tags$style(type="text/css",
                                     ".shiny-output-error { visibility: hidden; }",
                                     ".shiny-output-error:before { visibility: hidden; }"
                          )
                          )
                 )

server <- function(input, output, session) {
  df_raw <- read.csv("word_frequency_per_state_per_minute.csv", stringsAsFactors = FALSE)
  df_raw$long <- as.numeric(df_raw$long)
  df_raw$lat <- as.numeric(df_raw$lat)
  df <- reactive({
    subset(df_raw, df_raw$minute_debate < input$time_slot)
  })
  
  state_click <- reactive({
    loc_data <- input$mymap_click
    state_info <- revgeocode(c(loc_data$lng, loc_data$lat), output = "more")
    as.character(state_info$administrative_area_level_1)
  })
  
  state_data <- reactive({
    word_freq <- subset(df(), df()[, "state"] == state_click())
    total_words <- data.frame()
    for(i in 1:14){
      vars <- c(paste("word_", i, sep = ""), paste("freq_", i, sep = ""))
      temp <- word_freq[, vars]
      names(temp) <- c("word", "freq")
      total_words <- rbind(total_words, temp)
    }
    
    total_words <- group_by(total_words, word) %>% summarise(freq_total = sum(freq))
    total_words
  })
  
  output$cloud <- renderPlot({
    plot_data <- state_data()
    wordcloud(plot_data$word, plot_data$freq_total)
  })
  
  output$mymap <- renderLeaflet({
    leaflet(data = df()) %>%
      setView(-96, 37.8, 4) %>%
      addProviderTiles(providers$Stamen.TonerLite,
                       options = providerTileOptions(noWrap = TRUE)) %>%
      addCircleMarkers(lng = ~long, lat = ~lat, radius = 2, color = "green")
  })
  
  output$selected_state <- renderText({
    ifelse(nrow(df() == 0), 
           paste("You selected the state ", state_click(), ". Here is a wordcloud of what people talked about upto ", input$time_slot, " minutes into the debate!"),
           "NoData Found"
           )
    
  })
}
# Run the application 
shinyApp(ui = ui, server = server)