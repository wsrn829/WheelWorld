# WheelWorld - Full-Stack Car Dealership Management Web Application

WheelWorld is a comprehensive full-stack car dealership management web application designed to streamline the management of car inventory, sales, and services. It also features a robust user authentication system to ensure secure access. The application is powered by Django for the backend and React for the frontend, delivering a seamless and fully optimized experience across all devices, including mobile.

## Distinctiveness and Complexity

1. **Distinctiveness:**
   - My final project, WheelWorld, is distinct from other projects in this course (being neither a social network nor an e-commerce app). The project presents a unique challenge by combining various features of a car dealership management system.
   - This project also offers an excellent opportunity to rewrite and improve my ongoing personal project, making substantial improvements to design, functionality, and code quality.
2. **Complexity:**
   - As required, I designed and implemented a dynamic website of my own, using Django for the backend, SQLite for the database, and JavaScript for the frontend.
   - **Design:**
     - The project (WheelWorld) is structured into four distinct apps: Accounts, Inventory, Sales, and Services.
     - The Django backend features a robust schema with nine interconnected models, utilizing foreign keys where necessary to create a complex and well-structured database.
     - The React frontend consists of 26 component JS files that interact with the Django backend via REST APIs. The application leverages React Router for navigation and Context API for state management.
   - **Backend:**
     - Used Django ORM with models and migrations.
     - Used Django REST API, which returns JSON instead of "traditional" HTML template rendering as in all other projects in this course.
     - Used Django’s model_to_dict function for JSON serialization of model instances.
   - **Frontend:**
     - The frontend is a Single-Page Application (SPA) built with React, utilizing functional components and React hooks (useState, useEffect, useContext, useCallback) for efficient state management and better user experience.
     - Mobile responsiveness is ensured using Bootstrap and custom CSS across all pages.
     - Features like a dynamic Navbar, digital clock, greeting message, and login/logout/register buttons provide a user-friendly experience.
   - **Authentication:**
       - The backend authentication is handled using Django REST API's built-in login, logout, and registration functions.
       - On the frontend, a custom-built authentication system is implemented using React’s useContext hook for global state management.
   - **Styling:**
     - The application uses Bootstrap for consistent styling and layout, and custom CSS is used for personalized page styling.
     - Mobile responsive design is implemented for every single page.

## File Structure

### WheelWorld (Django Project):
   - Accounts App (API): Models.py, Views.py, Urls.py
   - Inventory App (API): Models.py, Views.py, Urls.py
   - Service App (API): Models.py, Views.py, Urls.py
   - Sales App (API): Models.py, Views.py, Urls.py
   - WheelWorld: settings.py, urls.py
### Frontend (React) 
      - App.css
      - App.js
      - AppointmentForm.js
      - AppointmentList.js
      - AuthContext.js
      - AutomobileForm.js
      - AutomobileList.js
      - CustomerForm.js
      - CustomerList.js
      - HomePage.css
      - HomePage.js
      - index.css
      - index.js
      - Login.js
      - Logout.js
      - ManufacturerForm.js
      - ManufacturerList.js
      - ModelForm.js
      - ModelList.js
      - Navbar.css
      - Navbar.js
      - Register.js
      - SaleForm.js
      - SalesHistory.js
      - SalesList.js
      - SalespeopleList.js
      - SalespersonForm.js
      - ServiceHistory.js
      - TechnicianForm.js
      - TechnicianList.js
      - package.json
   ### Other:
   - manage.py
   - requirements.txt

## How to Run the Application
   1. Clone the repository: `git clone <repository_url>`
   2. Navigate to the project directory with `cd <project_directory>`
   3. Install the Python dependencies with `pip install -r requirements.txt`
   4. Apply the Django migrations with `python manage.py migrate`
   5. Start the Django server with `python manage.py runserver`
   6. In a new terminal, navigate to the frontend directory: `cd ghi`
   7. Install the Node.js dependencies with `npm install`
   8. Start the React development server with `npm start`

- Now, your Django backend should be running at http://localhost:8000/ and your React frontend should be running at http://localhost:3000/.

- Please replace <repository_url> and <project_directory> with the actual URL of your GitHub repository and the name of your project directory, respectively.

## Additional Information

 ### Changes from Previous Version

- **Architecture Change**:  
  Converted the application from a microservices architecture to a monolithic architecture, reducing deployment costs.

- **Database Optimization**:  
  Merged three databases into one, further reducing costs.

- **Efficient Data Synchronization**:  
  Replaced polling between microservices with HTTP requests for real-time data synchronization.

- **New Authentication System**:  
  Implemented a comprehensive authentication system using Django REST API for the backend and React hooks for frontend state management.

- **Enhanced UI/UX**:  
  Redesigned the homepage, implemented a dynamic Navbar, and added a digital clock and greeting message.

- **Mobile Responsiveness**:  
  Ensured all pages are fully mobile-responsive, improving the overall user experience on mobile devices.

- **Code Optimization**:  
  Rewrote and optimized every line of code to enhance performance, functionality, and maintainability.
