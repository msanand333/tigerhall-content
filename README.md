# Tigerhall Content Search

This is a small single-page application built using Modern React, TypeScript, and GraphQL. The application allows users to search for Tigerhall content using keywords with a debounce of 300ms.

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
