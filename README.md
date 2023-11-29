# Tigerhall Content Search

This is a small single-page application built using Modern React, TypeScript, and GraphQL. The application allows users to search for Tigerhall content using keywords with a debounce of 300ms.

<img width="300" alt="Screenshot 2023-11-29 at 9 57 47 AM" src="https://github.com/msanand333/tigerhall-content/assets/38753743/10614cb5-7daf-4aa0-b919-c18151849410">
<img width="303" alt="Screenshot 2023-11-29 at 2 51 49 AM" src="https://github.com/msanand333/tigerhall-content/assets/38753743/3a2608ea-da9d-47f7-b63f-3ac7af2c27e7">
<img width="300" alt="Screenshot 2023-11-29 at 9 59 58 AM" src="https://github.com/msanand333/tigerhall-content/assets/38753743/8d7a33b4-5c2d-40b9-9c37-8883704aa635">



## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)

## Getting Started

### Prerequisites

- Node.js (v20 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/msanand333/tigerhall-content.git
   ```

2. Change into the project directory:

   ```bash
   cd tigerhall-content
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project is structured as follows:

```plaintext
 tigerhall-content-search/
|-- app/
|   |-- assets/
|   |-- components/
|   |-- graphql/
|       |-- queries.ts
|   |-- services/
|       |-- api.ts
|   |-- utils/
|   |-- layout.tsx
|   |-- page.tsx
|-- public
|-- package.json

```

- assets/: Contains assets like fonts
- components/: Contains React components used in the application.
- services/: Contains services, such as API calls.
- graphql/: Holds GraphQL queries.

## Usage

To run the application locally:

```bash
npm run dev
```

This will start the development server, and you can view the app at http://localhost:3000 in your browser.
