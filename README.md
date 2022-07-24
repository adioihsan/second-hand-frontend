# Secondhand

SecondHand is e-commerce to sell second-hand products where buyers can negotiate prices with sellers. The seller can accept or reject buyer offers till met the right price.

## Demo

https://second-hand-lac.vercel.app

## Installation

Install with yarn

```bash
yarn install
```

change file .env-example to .env .
insert lines below to .env file

```bash
REACT_APP_API_URL = "https://secondhand-be-test.herokuapp.com"
REACT_APP_STORAGE_URL = "https://storage.googleapis.com/secondhand-be-test.appspot.com"
REACT_APP_TOKEN_KEY = "f9d869a0a5328189d64c88eda87b8324"
```

start applications with

```bash
yarn start
```

## Tech Stack

**Client:** ReactJs, Redux, TailwindCSS,Jest

**Server:** Node, Express,postgresql,firebase
