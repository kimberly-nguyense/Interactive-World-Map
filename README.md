# InteractiveWorldMap

# Summary
This project uses Angular and the World Bank API to create an interactive world map. Clicking a country on the map or searching a country code in the search bar will emit the country code value to the root app component. The root app component will use a combination of property and data binding to update the country code value and then request the country details using the worldbank service. Finally, the info component will display the country details.

# Screenshots
## Initial app
![image](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/8ccc2ad9-74bc-4ece-a4c8-aacdea248a6b)
## Clicking a Country on the Map Component
![image](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/ed6ae6cf-bf87-48d6-b501-5c62e64f0d45)
## Searching a Country Code on the Search Bar Component
![image](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/ac1b4057-026d-4f27-84be-705114f979a8)
## Hovering over a Country on the Map Component
![image](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/25f68e38-242f-4a18-9826-a5a82f31c2ed)

# How to Use
1. Download the ZIP file
2. CD into the angular app directory (ex: C:\Users\Kim\Downloads\project-interactive-world-map-main`
3. Enter `npm install` in the command line to install the '@angular-devkit/build-angular:dev-server' builder's node package.
4. Enter `ng serve -o` in the command line to build, deploy, and serve the app locally.
5. The local app should open in your browser. If not, go to `http://localhost:4200/interactive-world-map/` in your browser.

# Resources
[Free World SVG Map](https://mapsvg.com/maps/world)
[The World Bank Country API](https://api.worldbank.org/v2/country/?format=json)
[The World Bank Country API Queries - docs](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries)
