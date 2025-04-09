This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

I focused on building out a frontend table that includes a search and filter component. I also built out an Upload popup for uploading CSV files. Performance-wise, I focused on taking advantage of Next's startic rendering capabilities and leveraging React's useMemo for the filtered data in the table. One limitation is that only one filter can be used at a time and if I had more time I'd build out the ability to stack filters along with search. Scalability-wise I tried to seperate out my core data manipulation logic into a seperate re-usable custom hook called useLeadsData. If I had more time to work on the rest of the stack, I'd love create a Leads db table using Prisma and connect to it via Next's API route handlers.

## Deployed Link:
https://glimpse-app-tau.vercel.app/

## Creating the UI

1. Use ChatGPT to create an efficient text prompt for Galileo.ai. Galileo.ai is an ai tool that has a text to UI feature.
![Screenshot 2025-04-09 at 1 14 28 PM](https://github.com/user-attachments/assets/c24110a0-e1de-4659-9c96-3c49b6928867)


2. Generate UI mock-ups with Galileo.ai. These mock-ups include the underling HTML + tailwind CSS as well as a figma file.
![Screenshot 2025-04-09 at 1 17 45 PM](https://github.com/user-attachments/assets/1e43feae-b022-4ce9-8731-bbd74603f0a6)

3. Build out my skeleton UI based on Galileo's mocks.
![Screenshot 2025-04-09 at 6 57 12 PM](https://github.com/user-attachments/assets/d0fc59a3-9858-49e8-b994-11e33d0b76ab)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
