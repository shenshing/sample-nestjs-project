## Bookshop
Simple/small bookshop platform.

## Structure
- Authentication (```/src/authentication```) ✅
  - Login with Google (provide your own credentials) 
  - Simple log with Email & Password
- Authorization (```/src/authorization```) ✅
- Logger (```/src/logger```) ✅
- Handle Global Exception + Custom Http Exception (```/src/exception-handler```) ✅
- Features _module_
  - users ✅
  - books 
  - categories
  - renting
     - blacklist user returns after due date
  - purchase
  - report
     - daily
     - monthly
     - yearly
 



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

