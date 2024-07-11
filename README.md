## Features

- **Search for GraphQL services:** Explore available GraphQL services.
- **Filter the search results:** Narrow down results based on specific criteria.
- **Add comments to each character:** Provide feedback or notes for individual characters.
- **Soft delete characters:** Perform a soft delete operation on characters, maintaining the option to restore them later.

## Tech Stack

**Client:** 
- React (TypeScript), 
- Zustand (State management), 
- TailwindCSS (Style)
- GraphQl (Http requests)
- Jest + testing-library (unit testing)

## Requirements

List of tools required to run the project:

- [Node](https://nodejs.org/en/download/package-manager/current)
- [Docker](https://docs.docker.com/get-docker/)

## Installation

Steps to set up the development environment.

### 1. Clone the repository

```bash
git clone https://github.com/cristom-co/React-18-typescript-character-finder.git
cd React-18-typescript-character-finder
```

### Build and run with (Docker + hot reload)
```bash
sudo docker compose up -d
```

### Run without Docker
```bash
npm install
npm run dev
```

## Testing


### Run unit test
```bash
npm run test:ui
```

### Run coverage
```bash
npm run coverage
```

## Screenshots

![alt text](./public/screenshot.png)
