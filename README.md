# QuickNotes

QuickNotes is an online diary or personal journal built with Vue.js and Firebase. It allows each user to securely store and manage their notes privately.

## Features

- **Sign Up and Login:** User authentication using email and password.
- **Private Notes:** Each user can only see their own notes.
- **Privacy and Security:** User data is securely stored in Firebase Firestore.

## Technologies Used

- **Vue.js 3** - For building the user interface.
- **Vite** - For fast development and building.
- **Tailwind CSS** - For styling.
- **Firebase Firestore** - For data storage.
- **Firebase Authentication** - For user authentication.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Firebase Account](https://firebase.google.com/) and a new project set up

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/username/quicknotes.git
    cd quicknotes
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Firebase Setup:**
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable **Firestore Database** and **Authentication (Email/Password)**.
    - Create a new web app in your Firebase project to get your config keys.

4. **Environment Variables:**
    - Create a `.env` file in the root of your project.
    - Add your Firebase configuration details:
      ```env
      VITE_API_KEY=your_api_key
      VITE_AUTH_DOMAIN=your_auth_domain
      VITE_PROJECT_ID=your_project_id
      VITE_STORAGE_BUCKET=your_storage_bucket
      VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
      VITE_APP_ID=your_app_id
      ```

### Running the Project

```bash
npm run dev
