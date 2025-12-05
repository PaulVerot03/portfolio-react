# Project Gemini

This document contains all the relevant information about the project.

## Project Overview

This is a portfolio website for Paul, built with React, Vite, and Cloudflare Workers. It's designed to be a showcase of Paul's work and skills, and it includes a number of features to make it a unique and engaging experience.

## Technologies Used

*   **Framework:** React
*   **Build Tool:** Vite
*   **Deployment:** Cloudflare Workers
*   **Styling:** Tailwind CSS
*   **Internationalization:** i18next
*   **Linting:** ESLint
*   **Formatting:** Prettier

## Key Features

*   **Internationalization:** The website supports both English and French, and the language can be switched with a button in the top right corner.
*   **Full-screen background:** The home page features a full-screen background component that creates an engaging and interactive first impression.
*   **Responsive design:** The website is designed to be responsive and work well on all screen sizes.
*   **Consistent code style:** The project is set up with Prettier to ensure a consistent code style.
*   **Dark/Light Mode Toggle:** The website now includes a dark/light mode toggle, ensuring readability across different themes.

## Known Issues and Workarounds

*   **`FaultyTerminal` component:** The `FaultyTerminal` component from `reactbits.dev` is not server-side rendering (SSR) compatible, and it causes a "window is not defined" error when rendered on the server.

*YOU CANNOT FIX THAT ONE, DO NOT DELETE ANYTHING TO FIX THIS, EVER*

    *   **Workaround:** The component is wrapped in a `ClientOnly` component to ensure that it's only rendered on the client.
*   **`npx tailwindcss` error:** The `npx tailwindcss init` and `npx tailwindcss -i app/app.css -o app/tailwind.css` commands are failing with the error "could not determine executable to run".
    *   **Workaround:** The project is already configured with `@tailwindcss/vite`, which handles all the necessary PostCSS and Autoprefixer transformations. There is no need to run these commands.
*   **`hoist-at-import` warning:** The Tailwind CSS IntelliSense extension was reporting a "hoist-at-import" warning because the `@import` rules in `app/app.css` were not at the top of the file.
    *   **Workaround:** The `@import` rules have been moved to the top of the file.