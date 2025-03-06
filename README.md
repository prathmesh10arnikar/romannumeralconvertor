

Number to Roman Numeral Converter

Description
This is a simple web application that converts numbers into Roman numerals. The application is built using React and Java for 
fast development and performance.

Features
* Convert any positive integer into Roman numerals
* Simple and intuitive user interface
* Fast and lightweight application

Installation
Prerequisites
* Node.js and npm installed for frontend
* Java 17 or higher and Gradle for backend

Steps
1. Clone the repository: git clone https://github.com/prathmesh10arnikar/romannumeralconvertor.git
2. Navigate to the project directory: cd RomanNumeralConvertor

For Frontend 
  1.  Navigate to the project directory: 	cd frontend
2.  Install dependencies: npm install
3. Run the development server: npm run dev
4. Open the application in your browser at http://localhost:5173.

Usage
1. Enter a number in the input field.
2. Click the "Convert" button.
3. The corresponding Roman numeral will be displayed.

Technologies Used
* React-Vite
* JavaScript
* HTML
* CSS

For Backend 
  1.  Navigate to the project directory: 	cd backend
2.  Build the project ./gradlew build
3. Run the Spring boot application locally  ./gradlew bootRun
4. The API will be accessible at http://localhost:8080.

Usage
  1.  Convert numbers from 1 to 3999 to Roman numerals through a RESTful API. 
2. Support for integration with other applications via HTTP requests.
3. Built with Java and Spring Boot for handling API requests.


Technologies Used
* Java 17 - Programming language used to build the backend service. 
       Spring Boot** - Framework used for building the RESTful API. 
* Gradle - Build tool used for dependency management and project setup.
* JUnit & Mockito - Used for testing. 
* Docker (optional) - For containerized deployment.

## Endpoints ### 

`POST /romannumeral` 
Converts a given number to its Roman numeral equivalent. 

- Request Body: JSON object with a number field. 
- Example: ```json 
{ 
	"number": 1987 
} 
``` 

- **Response**: A JSON object containing the Roman numeral equivalent. - Example: 
```json 
{ 
	"romanNumeral": "MCMLXXXVII"
 }
 ``` 

- **Errors**: 
- **400 Bad Request**: Number should be in  range (1 to 3999). 
- **500 Internal Server Error**: For unexpected server issues.


## Engineering and Testing Methodology

For Backend
### Engineering Approach

- **Separation of Concerns (SoC)**: The application is structured into distinct layers—controller, service, and 
utility—ensuring maintainability.
- **RESTful API Design**: Follows REST principles with proper request/response formats and error handling.
- **Efficiency**: The Roman numeral conversion algorithm is optimized for performance.
- **Scalability**: The application can be easily extended for additional features or optimizations.

### Testing Strategy

- **Unit Tests**: Covers the core conversion logic and service layer.
- **Integration Tests**: Ensures that API endpoints work correctly with various inputs.
- **Edge Cases**: Tests include numbers at the boundaries (1, 3999), invalid inputs, and non-numeric values.
- **Mocking**: Mockito is used to mock dependencies in unit tests.

For Frontend
### Engineering Approach

- **Component-Based Architecture**: The application is built with modular UI components for reusability.
- **State Management**: React’s built-in state is used to manage user input and API responses.
- **API Integration**: Uses `fetch` with async and await to interact with the backend 
- **Performance Optimization**: Vite ensures fast build times and hot module replacement (HMR).

### Testing Strategy

- **Unit Tests**: Test individual components using Jest and React Testing Library and Vitest
- **Integration Tests**: Ensure API calls work correctly.
- **UI Tests**: Validate input handling and error messages.

Project structure
For frontend
src/
│── components/      # Reusable UI components
│── tests/           # Tests
│── mocks/           # To mock CSS
│── App.jsx          # Main application component
│── App.css          # Styling
│── main.jsx         # Entry point for the app
public/              # Static assets
index.html           # Main HTML file
package.json
package-lock.json
vite.config.js       # Vite configuration


For backend
 
│── src/  
│   ├── main/  
│   │   ├── java/com/romannumeral/  
│   │   │   ├── controller/       # Handles API requests  
│   │   │   ├── service/          # Business logic for conversion  
│   │   │   ├── dto/              # Response DTO class 
│   │   │   ├── RomanNumeralApplication.java  # Main Spring Boot entry point  
│   │   ├── resources/  
│   │   │   ├── application.properties   # Configuration file  
│   │   │   ├── static/           # Static resources (if needed)  
│   │   │   ├── templates/        # Templates (if using Thymeleaf)  
│── test/  
│   ├── java/com/example/romannumeral/  
│   │   ├── RomanNumeralApplicationTest.java  # Test file
│── build.gradle           # Gradle build configuration  
│── settings.gradle        # Gradle settings file  
│── Dockerfile             # Docker support 
│── scripts/               # Deployment or database scripts  
│── logs/                  # Log files 


Note: The test in frontend is failing to an error Unknown ".css"  file in the adobe-react-spectrum. I tried to fix that by 
trying to mock css but I was not able to yet. 
