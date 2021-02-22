This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
##### https://tailwindcss.com/docs/guides/nextjs

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

# tailwind css requirements:
create a folder called "css"
within this folder create a file called "tailwind.css"
# if you're doing this from next.js:
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
# your tailwind.config.js file at the root of your project should have:
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
# your postcss.config.js file should already have:
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

# alternative for linting: 
npm install eslint --save-dev
npx eslint --init
npx eslint yourfile.js
# then...
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
# lastly, within the .eslintrc.{js,yml,json} include:
{
    "extends": "eslint:recommended"
}

# npm init -y
make sure package.json is created!
# npm install:
npx install-peerdeps --global eslint-config-wesbos
npx install-peerdeps --dev eslint-config-wesbos

# create .eslintrc and paste the following:
{
  "extends": ["wesbos"],
  "rules": {
    "no-unused-vars": 1
  }
}
# paste the following in package.json:

"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},

# create .gitignore file:
include node_modules within the .gitignore file in order to upload it to github!


°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°

# snippet generator

ctrl + opt + s = generate snippet!

anonymous arrow function: anfn

# hot keys are as follows

alt = opt

ctrl + cmnd + shift + arrow left or right
 = 
••• selects that entire html tag or where in JavaScript it keeps selecting the parent element or child element depending on direction

alt + arrow up or down
 = 
••• moves the current line up or down depending on direction

alt + shift + arrow up or down
 = 
••• copies and moves the current line up or down depending on direction

opt + cmnd + shift + arrow up or down
 = 
••• highlights the entire row expanding to new ones below or above it depending on direction

alt + cmnd + bracket left or bracket right
 = 
••• folds the selected lines of code








Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# test1
