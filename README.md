
## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Description](#description)
- [Getting Started](#getting-started)
- [Deployment](#deployment-link)

## Features
- Create new meetings
- Schedule meetings
- Join meetings
- View video recordings
- Personal room

## Technology Stack
- Authentication: Clerk, providing secure and easy-to-use authentication.
- Streaming Data: Stream, ensuring high-quality video and data streaming.
- Frontend: HTML, CSS, TypeScript, and Next.js for a robust and modern user interface.
- Styling: Tailwind CSS for fast and efficient styling.
- Design System: ShadCN for consistent and reusable UI components.

## Description
   SC-Meet is a comprehensive online meeting application designed to facilitate seamless and efficient virtual meetings. It offers a range of features to enhance the user experience, making it easy to create, schedule, and join meetings. With SC-Meet, users can also access video recordings of past meetings and utilize a personal room for private discussions.

## Getting Started
### Prerequisites

- HTMLL,CSS,TYPESCRIPT,NEXT-JS,TAILWIND,SHADCN
- npm
- Clerk Authentication [https://clerk.com/](https://clerk.com/)
- STREAM([https://getstream.io/](https://getstream.io/))

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/swapnilchavan18901/SC-Meet.git
   cd SC-Meet
  

2. Install dependencies:
   ```bash
   npm install

3. Create a `.env` file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=INPUT_DATA_AFTER_CLERK_REGISTER
   CLERK_SECRET_KEY=INPUT_DATA_AFTER_CLERK_REGISTER
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_STREAM_API_KEY=INPUT_DATA_AFTER_STREAM_REGISTER
   STREAM_SECRET_KEY=INPUT_DATA_AFTER_STREAM_REGISTER
   NEXT_PUBLIC_BASE_URL=localhost:3000

4. Start the server:
   ```bash
   npm start

6. The server should be running on http://localhost:3000.

## Deployment Link
This Website is hosted on vercel app
Link -> [https://sc-meet.vercel.app/]

