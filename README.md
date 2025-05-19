# Kassi Marvin - Portfolio

This is my professional portfolio built with Angular.

## Features

- Responsive design
- Downloadable CV
- Navigation menu
- Social media links
- About section
- Project showcase
- Contact information

## Setup Instructions

1. Install Node.js and npm from https://nodejs.org/
2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```
5. Open your browser and navigate to `http://localhost:4200`

## Adding Your CV

1. Place your CV file in the `src/assets/cv` directory
2. Update the CV filename in `app.component.ts` if needed

## Customization

- Update personal information in `home.component.html`
- Modify styling in `app.component.css` and `home.component.css`
- Add your projects in the Projects section
- Update social media links in `app.component.html`

## Technologies Used

- Angular
- TypeScript
- HTML5
- CSS3
- Font Awesome (for icons)

## Deployment

1. Push your code to the main branch of your GitHub repository
2. The GitHub Actions workflow will automatically build and deploy your portfolio to GitHub Pages
3. Access your portfolio at https://marvin.kassi.com

## GitHub Pages Configuration

1. Go to your GitHub repository settings
2. Under "Pages" section:
   - Source: Select "GitHub Actions" as the source
   - Custom domain: Enter "marvin.kassi.com"
   - Click "Save"

Note: It may take a few minutes for the DNS changes to propagate after updating the custom domain.
