# Contributing to GitHunt

First off, thank you for considering contributing to GitHunt! It's people like you that make GitHunt such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**
- **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Follow the TypeScript/JavaScript style guides
- End all files with a newline
- Avoid platform-dependent code
- Include appropriate test cases

## Development Setup

### Prerequisites

- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Git

### Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/GitHunt.git`
3. Navigate to the project: `cd GitHunt`
4. Install dependencies: `npm install`
5. Copy `.env.example` to `.env.local`: `cp .env.example .env.local`
6. Update `.env.local` with your GitHub OAuth credentials
7. Start the development server: `npm run dev`

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Building the Project

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Linting and Formatting

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` - Improve structure/format of the code
  - ⚡ `:zap:` - Improve performance
  - 🔥 `:fire:` - Remove code or files
  - 🐛 `:bug:` - Fix bug
  - ✨ `:sparkles:` - Introduce new features
  - 📝 `:memo:` - Add or update documentation
  - 🚀 `:rocket:` - Deploy stuff
  - 💄 `:lipstick:` - Update UI and style files
  - ✅ `:white_check_mark:` - Add tests
  - 🔒 `:lock:` - Fix security issues
  - ⬆️ `:arrow_up:` - Upgrade dependencies
  - ⬇️ `:arrow_down:` - Downgrade dependencies

### TypeScript/JavaScript Style Guide

- Use TypeScript for type safety
- Use 2 spaces for indentation
- Use `const` by default, `let` if needed, avoid `var`
- Use meaningful variable names
- Write comments for complex logic
- Use arrow functions when appropriate
- Follow Next.js conventions and best practices

### React Component Guidelines

- Use functional components with hooks
- Use TypeScript interfaces for props
- Memoize components when appropriate
- Use semantic HTML
- Write meaningful component names
- Extract reusable logic into custom hooks

## Project Structure

```
GitHunt/
├── app/                 # Next.js app directory
│   ├── api/            # API routes
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/ui/      # Reusable UI components
├── lib/                # Utility functions
├── public/             # Static assets
├── .env.example        # Environment variables template
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

### Recognition

Contributors will be recognized in the README.md and commit history.

## Questions?

Feel free to open an issue with your question or contact the maintainers directly.

Thank you for contributing to GitHunt! 🚀
