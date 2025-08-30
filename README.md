# Mundo Yatra - Travel Agency Website

A modern, responsive travel agency website built with React and Vite.

## 🚀 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup & Run
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The website will be available at: http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```
   The preview will be available at: http://localhost:4173

## 🌐 Deployment to GitHub Pages

### Automatic Deployment (Recommended)
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. The website will be available at: `https://[your-username].github.io/mundoyatra/`

### Manual Deployment
1. Build the project: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## 📁 Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── data/               # Static data (packages, etc.)
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🛠️ Technologies Used
- React 18
- React Router (HashRouter for GitHub Pages compatibility)
- Vite (Build tool)
- CSS3 (Custom styling)

## 🔧 Configuration
- **Base Path**: Automatically configured for GitHub Pages (`/mundoyatra/`)
- **Port**: Development server runs on port 5173
- **Build Output**: `dist/` directory

## 📱 Features
- Responsive design
- Modern UI/UX
- Travel package showcase
- Contact forms
- Gallery
- Testimonials
- FAQ section

## 🚨 Troubleshooting

### Blank Page Issue
If you see a blank page:
1. Check browser console for errors
2. Ensure all dependencies are installed
3. Verify the build process completes successfully
4. Check GitHub Pages settings in repository

### Local Development Issues
1. Make sure Node.js is installed
2. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Check if ports 5173 or 4173 are available

## 📞 Support
For any issues or questions, please contact the development team.
