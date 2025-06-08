# Components Library

A modern, accessible, and customizable React components library built with Tailwind CSS and TypeScript.

## 🚀 Features

- 🎨 Modern and accessible UI components
- 🎯 Built with TypeScript for better type safety
- 💅 Styled with Tailwind CSS
- 📦 Monorepo structure using Turborepo
- 🔥 Hot reloading for development
- 📱 Responsive design
- ♿ Accessibility-first approach

## 📦 Project Structure

```
components-library/
├── apps/
│   └── playground/     # Demo application
├── packages/
│   └── ui/            # Shared UI components
├── package.json       # Root package.json
└── turbo.json        # Turborepo configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/components-library.git
cd components-library
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The playground application will be available at `http://localhost:5173`.

## 🧩 Available Components

- Button
- More components coming soon...

## 🏗️ Development

### Adding New Components

1. Create your component in `packages/ui/src/components/`
2. Export it from `packages/ui/src/index.ts`
3. Test it in the playground app

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/components-library/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/components-library](https://github.com/yourusername/components-library) 