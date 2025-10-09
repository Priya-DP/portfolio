# Devipriya Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Custom Components**: Modular component architecture for easy customization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── AboutSection.tsx     # About section component
│   ├── ContactSection.tsx   # Contact form and info
│   ├── CursorFollower.tsx  # Custom cursor effect
│   ├── HeroSection.tsx      # Hero/landing section
│   ├── Navigation.tsx       # Navigation menu
│   ├── ProjectsSection.tsx  # Projects showcase
│   ├── SkillsSection.tsx    # Skills and technologies
│   └── ThemeToggle.tsx      # Theme switcher
├── tailwind.config.js       # Tailwind CSS configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **HeroSection.tsx**: Change name, title, and description
- **AboutSection.tsx**: Update bio, experience, and education
- **SkillsSection.tsx**: Modify skills and technologies
- **ProjectsSection.tsx**: Add your own projects
- **ContactSection.tsx**: Update contact details and social links

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font imports in `layout.tsx`
- **Animations**: Adjust animation parameters in component files

### Theme

The portfolio includes a dark/light theme toggle. Theme preferences are saved in localStorage and automatically applied based on system preferences.

## 🎯 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll-based animations

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `out` folder:
```bash
npm run build
npm run export  # If using static export
```

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `package.json` scripts
2. **Build errors**: Check TypeScript errors and component imports
3. **Styling issues**: Verify Tailwind CSS is properly configured

### Performance Tips

- Optimize images using Next.js Image component
- Use dynamic imports for heavy components
- Implement proper loading states

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, feel free to reach out!

---

Built with ❤️ by Devipriya

