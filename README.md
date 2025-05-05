# Interactive World Map

## Project Summary
This project uses Angular and the World Bank API to create an interactive world map. Clicking a country on the map or searching a country code will emit the country code value to the root app component. The root app component will use a combination of property and data binding to update the country code value and then request the country details using the World Bank service. Finally, the info component will display the country details.

![Interactive World Map Screenshot](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/8ccc2ad9-74bc-4ece-a4c8-aacdea248a6b)

## Features
- Interactive SVG world map with hover and click functionality
- Search functionality for country codes
- Integration with World Bank API
- Responsive design
- Country information display panel

## Technical Implementation
The application architecture follows Angular best practices:
- Components are modular and have single responsibilities
- Services handle API integration with the World Bank
- Event binding enables interaction between components
- Bootstrap provides styling and responsive design

## Technology Stack
- Angular 16
- TypeScript
- Bootstrap 5
- World Bank REST API
- SVG for vector map representation

## Live Demo
View the live application: [Interactive World Map](https://kimberly-nguyense.github.io/project-interactive-world-map/)

## Development Setup
To run the application locally:
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `ng serve -o`
4. Navigate to `http://localhost:4200/`

## Screenshots

### Initial App
![Interactive World Map](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/8ccc2ad9-74bc-4ece-a4c8-aacdea248a6b)

### Country Selection
![Clicking a Country](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/ed6ae6cf-bf87-48d6-b501-5c62e64f0d45)

### Search Functionality
![Searching a Country](https://github.com/kimberly-nguyense/project-interactive-world-map/assets/128512024/ac1b4057-026d-4f27-84be-705114f979a8)

## Resources
- [MapSVG World Map](https://mapsvg.com/maps/world)
- [World Bank Country API](https://api.worldbank.org/v2/country/?format=json)
- [World Bank API Documentation](https://datahelpdesk.worldbank.org/knowledgebase/articles/898590-country-api-queries)

---

This project demonstrates Angular component architecture, REST API integration, event handling, and responsive design principles.
