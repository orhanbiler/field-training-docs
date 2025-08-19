# 📚 Field Training Documentation

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue)](https://docusaurus.io/)
[![Deploy to GitHub Pages](https://github.com/orhanbiler/field-training-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/orhanbiler/field-training-docs/actions/workflows/deploy.yml)

Professional documentation for the **Field Training Management System** used by Cheverly Police Department. This comprehensive guide provides technical insights into the police training platform's architecture, authentication system, and report management features.

## 🎨 Theme: Black Grey Teal Dark Space

This documentation features a custom-designed theme using a carefully curated color palette:

- **#222831** (Dark Space) - Primary dark backgrounds
- **#393E46** (Grey) - Secondary elements and cards
- **#00ADB5** (Teal) - Accent color for highlights and interactions
- **#EEEEEE** (Light Grey) - Light backgrounds and text

## 🚀 Features

- **🌓 Perfect Light/Dark Themes** - Seamless switching with consistent branding
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🔍 AI-Generated Content** - Documentation created using advanced AI analysis of the actual codebase
- **📊 Mermaid Diagrams** - Interactive architectural and flow diagrams
- **🎯 Professional Design** - Glass effects, smooth transitions, and modern UI
- **⚡ Fast Performance** - Optimized Docusaurus build with efficient loading

## 📖 Documentation Sections

### 🔐 Authentication & User Management
Learn how the system handles user authentication, authorization, and secure access control.

### 📋 Training Report System  
Comprehensive guide to the report management features including Daily Observation Reports, End of Week Reports, and Officer Safety Reports.

### 🏗️ System Architecture
Technical deep-dive into the codebase structure, database design, and API architecture.

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Installation

```bash
git clone https://github.com/orhanbiler/field-training-docs.git
cd field-training-docs
pnpm install
```

### Start Development Server

```bash
pnpm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server.

### Build for Production

```bash
pnpm run build
```

This command generates static content into the `build` directory that can be served using any static content hosting service.

## 🚀 Deployment

This site is automatically deployed to Vercel. Every push to the `main` branch triggers a new deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/orhanbiler/field-training-docs)

**Live Site:** [https://field-training-docs.vercel.app](https://field-training-docs.vercel.app)

## 🏢 About the Project

The Field Training Management System is a comprehensive platform designed for police departments to manage and track trainee officer progress through field training programs. Key features include:

- **Secure Authentication** with automatic idle logout
- **Role-based Permissions** for different user types
- **Multiple Report Types** (DOR, EOWR, OSR)
- **PDF Export Functionality** for official documentation
- **Real-time Collaboration** features
- **Performance Tracking** and analytics

## 🔗 Related Links

- **Live Application:** [fieldtraining.cheverlypd.com](https://fieldtraining.cheverlypd.com)
- **Source Code:** [github.com/orhanbiler/field-training-next](https://github.com/orhanbiler/field-training-next)
- **Cheverly PD:** [cheverlypd.com](https://cheverlypd.com)

## 🤝 Contributing

This documentation is generated from AI analysis of the Field Training codebase. For updates or corrections:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/documentation-update`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add documentation update'`)
5. Push to the branch (`git push origin feature/documentation-update`)
6. Create a Pull Request

## 📄 License

This documentation is provided for educational and reference purposes. The underlying Field Training Management System is proprietary software of Cheverly Police Department.

## 👨‍💻 Author

**Orhan Biler**
- GitHub: [@orhanbiler](https://github.com/orhanbiler)
- Email: bilergunes@gmail.com

---

**Built with ❤️ using [Docusaurus](https://docusaurus.io/) and powered by AI analysis**

🤖 *Documentation generated with [Claude Code](https://claude.ai/code)*