# Open Data Initiative Website

## About

The Open Data Initiative website is a Next.js-powered platform dedicated to reviewing government transparency and policies with a focus on Northern California and SF Bay Area business competitiveness. 

The Federal DOGE seems like a good model to start with. Follow where money is spent and likely we will find business impact. We can follow DOGE's progress and adopt their methods and approach where appropriate. There are a few boards, commissions and areas that are interesting to research such as California Air Resources Board (CARB), California Coastal Commission (CCC), energy, water, transportation, and prisons. NGOs  related to DOGE's research could be interesting to highlight their activities in California. We can discover more where these intesect Northern California and the SF Bay Area. 

Following Chamath Palihapitiya’s analogy of government spending as a three layer onion:

 1. people: review headcounts and their job titles. what is theit purpose and fuunction.
1.  Infrastructure: building leases. many are on 1 year leases and remain largely unused and empty. 
1.  Service and IT: this area might be an interesting place find spending as it is generally overlooked. these contracts can be large and long lasting. 

This project will be posting to X as @cali_doge.

## Technical Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest with React Testing Library
- **Content**: Markdown-based blog posts and documentation

## Features

- California Regulations
- Government Transparency
- X Posts

## Development Workflow

### Code Quality, Coverage

- **Linting**: ESLint with TypeScript support and Next.js core web vitals rules
- **Type Checking**: Strict TypeScript configuration
- **Pre-commit Hooks**: Husky enforces linting and testing on the master branch
- **Code Style**: Follows Next.js best practices and React patterns
- **Coverage**: tracking available via `npm run test:coverage`

### CI/CD Pipeline

- **Branch Strategy**:
  - `master`: Production-ready code
  - `develop`: Integration branch for feature development
  - branches should branch from and merge back to `develop`

- **Steps**
   - Dev: local code creation, packaging and unit tests as pre-commit before commiting  to `develop`
   - Stage: on 'develop' PR creation, runs integration and security tests
   - Once 'develop' code is considered ready for release, then commit changes to 'master'
   - Preview: on 'master' PR creation, runs e2e tests
   - Production: on 'master' PR merge, triggers deployment to production

- **Environments**
   - localhost (dev)
   - Github runners (stage)
   - Vercel (preview, production)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   nohup npm run dev > dev.log 2>&1 &
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

5. To stop the server, run:
   ```bash
   lsof -ti :3000 | xargs kill -9
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Run linting

## Contributing

We welcome contributions to improve the Open Data Initiative website. Please feel free to submit issues and pull requests.

## License

This project is maintained by the Open Data Initiative under the Creative Commons Attribution 4.0 International License.
