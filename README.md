# CloudKitchen

## Overview

This is a full-stack food ordering platform that includes both **client** and **admin** functionalities. The application allows users to browse and search food items, add items to their cart, place orders, and track their order history. Admins can manage food items, track orders, update order statuses, and manage stock. The platform is responsive and ensures secure login and sign-up using bcrypt.

## Features

### Client Side:
- **Secure Login/Signup:** Authentication is handled with bcrypt for secure login and registration.
- **Browse and Search:** Users can browse through the list of available food items and search for specific items.
- **Filter Food Items:** Apply filters to narrow down food choices.
- **Add/Remove from Cart:** Users can add items to the cart and remove them as needed.
- **Place Orders:** Users can place orders directly from their cart.
- **Order History:** Users can view their previously placed orders.

### Admin Side:
- **Add New Food Items:** Admins can add new food items to the platform.
- **Edit/Delete Food Items:** Admins can edit or remove existing items from the list.
- **Order Management:** Admins can accept orders and update their statuses (e.g., pending, accepted, completed).
- **Stock Management:** Admins can manage stock levels for each food item.
- **Responsive Design:** The platform is fully responsive and optimized for mobile, tablet, and desktop views.

## Technology Stack

### Frontend:
- **React.js:** Used for building the user interface and handling client-side interactions.
  
### Backend:
- **Node.js & Express.js:** Used for building the RESTful API and handling server-side logic.
- **MongoDB:** Database for storing user data, food items, orders, and more.
- **Bcrypt:** For hashing and securely storing user passwords.
## Middleware

### Authentication Middleware:
- **JWT Authentication:** Middleware is used to ensure that users and admins are properly authenticated before accessing certain routes.
- **Protecting Routes:** For example, routes for placing orders and managing carts are protected and can only be accessed by authenticated users.

### Prerequisites:
- Node.js and npm installed.
- MongoDB installed and running locally or use a cloud database.

## Installation & Setup

### Steps to Install:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-food-ordering-platform.git
2. **Navigate To backend**

   ```
   cd backend
3. **Install dependencies for the backend:**

   ```bash
     npm install
    ```
4. **Set up your environment variables:**
Create a `.env` file in the `backend` directory with the following variables:

    PORT=4000
    
    MONGO_URI=your-mongo-db-connection-string
    
    JWT_SECRET=your-jwt-secret

5. **Start the backend server:**
   ```bash
     npm start
    ```
6. **Navigate to the frontend directory:**
   ```
   cd ../frontend
   ```
7. **Install frontend dependencies:**
   ```
   npm install
    ```
8. **Start the frontend server:**

     ```
    npm run dev
    ```
9. **Navigate to the frontend directory:**
   ```
   cd ../dashboard
   ```
10. **Install frontend dependencies:**
     ```
     npm install
    ```
11. **Start the frontend server:**

     ```
    npm run dev
    ```
## API Endpoints

### User Authentication:
- `POST /api/user/signup`: Register a new user.
- `POST /api/user/login`: Login for users.

### Food Items:
- `GET /api/food/listfoods`: Fetch all available food items.
- `POST /api/food/add`: Admin can add new food items.
- `PUT /api/food/edit/:id`: Admin can edit food items.
- `DELETE /api/food/delete/:id`: Admin can delete food items.

### Cart Management:
- `POST /api/cart/add`: Add items to the user's cart.
- `POST /api/cart/remove`: Remove items from the user's cart.

### Order Management:
- `POST /api/order/place`: Place an order.
- `GET /api/order/list`: View all user orders.
- `PUT /api/order/updateStatus`: Admin can update order status.

## Usage

1. **Client Side:**
- Register/Login to access the platform.
- Browse through the food items, search, and filter to find your desired food items.
- Add items to the cart and place an order.
- Track your order history.

2. **Admin Side:**
- Add, edit, or delete food items.
- View all orders and update their statuses.
- Manage stock levels of food items.


