# CLAUDE.md - Project Guide for AI Assistants

## Project Overview

This is a Next.js web application that enables Colombian citizens to submit citizen interventions (intervenciones ciudadanas) to the Constitutional Court in support of Law 2385 of 2024 (animal protection law).

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: @react-pdf/renderer
- **Signature Capture**: react-signature-canvas
- **Icons**: lucide-react
- **Testing**: Jest + React Testing Library

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── formulario/        # Form wizard route
│   │   ├── page.tsx
│   │   └── layout.tsx     # FormProvider wrapper
│   └── resultado/         # Results page route
│       ├── page.tsx
│       └── layout.tsx     # FormProvider wrapper
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── ProgressBar.tsx
│   │   └── CopyButton.tsx
│   ├── form/              # Form wizard components
│   │   ├── FormWizard.tsx
│   │   ├── PersonalInfoStep.tsx
│   │   ├── ContactInfoStep.tsx
│   │   └── SignatureStep.tsx
│   └── pdf/               # PDF generation
│       └── DocumentTemplate.tsx
├── context/
│   └── FormContext.tsx    # Form state management
├── lib/
│   ├── types.ts           # TypeScript interfaces
│   ├── constants.ts       # App constants (email config, cities)
│   ├── documentContent.ts # Legal document text
│   └── utils.ts           # Utility functions
├── __tests__/             # Unit tests
└── public/                # Static assets
```

## Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run lint         # Run ESLint
```

## Architecture Decisions

1. **FormProvider Scope**: The FormProvider wraps the entire app in the root layout to ensure form state is shared across all routes (`/formulario` and `/resultado`). This is necessary because users navigate between these routes and need to maintain form data.

2. **Server vs Client Components**: The landing page (`/`) is a server component for better performance. Form pages use client components due to interactivity requirements. The FormProvider is a client component that wraps children in the root layout.

3. **PDF Generation**: Uses @react-pdf/renderer for client-side PDF generation. The signature is embedded as a base64 image.

4. **Form Persistence**: Form data is persisted to localStorage to survive page refreshes during the multi-step form process.

## Form Flow

1. **Landing Page** (`/`) - Explains the cause and provides CTA
2. **Step 1** - Personal info (name, cedula, city)
3. **Step 2** - Contact info (email, phone, date)
4. **Step 3** - Signature capture
5. **Results** (`/resultado`) - PDF download + email instructions

## Email Configuration

- **Destination**: secretaria3@corteconstitucional.gov.co
- **Subject**: Contains reference to Law 2385 and expediente numbers
- **Expedientes**: D-0016158, D-0016172, D-0016193

## Testing

Tests are located in `__tests__/` and cover:
- Utility functions (`lib/utils.ts`)
- Constants validation (`lib/constants.ts`)
- Document content generation (`lib/documentContent.ts`)
- UI components (Button, Input, CopyButton, ProgressBar)

Run tests with `npm test`.

## Common Tasks

### Adding a new form field
1. Update `UserFormData` interface in `lib/types.ts`
2. Update `INITIAL_FORM_DATA` in `lib/types.ts`
3. Add field to appropriate step component in `components/form/`
4. Update validation in `FormContext.tsx` (`isStepValid`)
5. Update PDF template in `components/pdf/DocumentTemplate.tsx`

### Modifying the legal document
1. Edit `lib/documentContent.ts` for text content
2. Edit `components/pdf/DocumentTemplate.tsx` for PDF styling

### Adding a new city
Add to `COLOMBIAN_CITIES` array in `lib/constants.ts`

## Environment

- Node.js 18+
- npm 9+
- Deployed on Vercel

## Notes

- All text is in Spanish (es-CO locale)
- No backend required - all processing is client-side
- User data is never sent to any server (privacy-focused)
- The form uses localStorage for persistence but clears on completion
