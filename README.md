# Fight for Toros - Intervención Ciudadana

A web application that enables Colombian citizens to submit citizen interventions to the Constitutional Court in support of Law 2385 of 2024 (animal protection law).

## About

Law 2385 of 2024 protects animals from practices that cause deliberate suffering. This tool helps citizens exercise their constitutional right (Article 242) to submit interventions supporting the law's constitutionality.

**Expedientes**: D-0016158, D-0016172, D-0016193

## Features

- Step-by-step form wizard for collecting user information
- Digital signature capture
- Automatic PDF generation with the legal document
- Pre-written email template with copy-to-clipboard functionality
- Mobile-responsive design
- Privacy-focused: no data sent to servers

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@react-pdf/renderer](https://react-pdf.org/) - PDF generation
- [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas) - Signature capture
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/) - Testing

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/RaymondRJones/fight-for-toros.git
cd fight-for-toros

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
```

### Building for Production

```bash
npm run build
npm run start
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). Simply connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing page
│   ├── formulario/        # Form wizard
│   └── resultado/         # Results & download
├── components/
│   ├── ui/                # Reusable UI components
│   ├── form/              # Form step components
│   └── pdf/               # PDF template
├── lib/                   # Utilities and constants
├── context/               # React context for form state
└── __tests__/             # Unit tests
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built to support animal protection in Colombia
- Thanks to all citizens who participate in democratic processes
