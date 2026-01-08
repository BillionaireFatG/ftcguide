# 🚀 FTC Drivetrain Mastery Web Application

A comprehensive, production-ready web application focused on robot drivetrain optimization for FIRST competitions (FTC/FRC/FLL).

## 🎯 Features

- **Comprehensive Drivetrain Guides**: Tank, Mecanum, Swerve, and Omni drives with detailed explanations
- **Interactive Calculators**: Speed, torque, acceleration, and gear ratio optimization
- **Control Theory Section**: PID, feedforward, state feedback, Kalman filters
- **3D Simulator**: Virtual testing environment (to be implemented)
- **Motor Selection Guide**: Database of FTC/FRC motors
- **Modern UI**: Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Charts**: Recharts
- **3D Graphics**: Three.js + React Three Fiber
- **Math Rendering**: KaTeX
- **State Management**: Zustand

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Navigate to the project directory:
```bash
cd "C:\New folder\ftc-drivetrain-guide"
```

2. Install dependencies:
```bash
npm install
```

3. Install additional UI components:
```bash
npm install @radix-ui/react-slot tailwindcss-animate next-themes
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
ftc-drivetrain-guide/
├── app/                        # Next.js app directory
│   ├── drivetrains/           # Drivetrain guides
│   ├── calculators/           # Interactive calculators
│   ├── control-theory/        # Control theory content
│   ├── simulator/             # 3D simulator
│   └── ...
├── components/                 # React components
│   ├── layout/                # Layout components (Navbar, Footer)
│   ├── ui/                    # shadcn/ui components
│   └── ...
├── lib/                       # Utilities and business logic
│   ├── calculations/          # Calculation functions
│   ├── constants/             # Data constants
│   ├── types/                 # TypeScript types
│   └── utils.ts               # Helper functions
└── public/                    # Static assets
```

## 🎨 Custom Theme

The application uses a custom theme based on your provided CSS variables:

- **Primary Color**: Purple/Blue (#5550FF)
- **Font**: Plus Jakarta Sans
- **Dark Mode**: Full dark mode support with custom colors
- **Shadows**: Sophisticated shadow system

## 🚧 Implementation Status

### ✅ Completed
- [x] Project setup with Next.js, TypeScript, Tailwind
- [x] Custom theme configuration
- [x] Layout components (Navbar, Footer, ThemeProvider)
- [x] Landing page with hero and feature sections
- [x] Drivetrain overview page
- [x] Tank drive detailed page
- [x] Calculator hub page
- [x] Speed calculator with real-time results
- [x] Calculation engine for speed/torque/acceleration

### 🔄 To Be Completed

#### Drivetrain Pages
- [ ] Mecanum drive page
- [ ] Swerve drive page
- [ ] Omni drive page

#### Calculators
- [ ] Torque calculator page
- [ ] Acceleration calculator page
- [ ] Gear ratio optimizer page
- [ ] Complete drivetrain designer wizard

#### Control Theory
- [ ] Control theory overview page
- [ ] PID controller guide with interactive tuner
- [ ] Feedforward control page
- [ ] State feedback page
- [ ] Kalman filter page
- [ ] Motion profiling page

#### Additional Features
- [ ] 3D simulator with React Three Fiber
- [ ] Motor selection guide with database
- [ ] Gear ratios guide
- [ ] Testing & calibration procedures
- [ ] Resources and credits page
- [ ] Search functionality
- [ ] User progress tracking
- [ ] PDF export functionality

## 📝 Next Steps to Complete

### 1. Create Remaining Drivetrain Pages
Copy the structure from `tank/page.tsx` and adapt for:
- `/app/drivetrains/mecanum/page.tsx`
- `/app/drivetrains/swerve/page.tsx`
- `/app/drivetrains/omni/page.tsx`

### 2. Complete Calculator Suite
Create pages for remaining calculators in `/app/calculators/`:
- `torque/page.tsx`
- `acceleration/page.tsx`
- `gear-ratio/page.tsx`
- `complete/page.tsx`

### 3. Build Control Theory Section
Create directory `/app/control-theory/` with pages:
- `page.tsx` (overview)
- `pid/page.tsx`
- `feedforward/page.tsx`
- `state-feedback/page.tsx`
- `kalman-filter/page.tsx`
- `motion-profiling/page.tsx`

### 4. Implement 3D Simulator
Create `/app/simulator/page.tsx` using React Three Fiber

### 5. Add Motor Database
Create `/app/motor-selection/page.tsx` with searchable motor database

### 6. Additional Pages
- `/app/gear-ratios/page.tsx`
- `/app/testing/page.tsx`
- `/app/resources/page.tsx`

### 7. Add Missing UI Components
Install additional shadcn components as needed:
```bash
npx shadcn-ui@latest add tabs accordion select slider dialog tooltip
```

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

## 📄 License

Educational resource for FIRST competitions. See project for full attribution to:
- Practical Guide to Robotics (Entradox Robotics)
- CTRL ALT FTC
- FIRST Official Documentation

## 🤝 Contributing

Contributions welcome! Please feel free to submit issues or pull requests.

---

Built with ❤️ for the FIRST community
