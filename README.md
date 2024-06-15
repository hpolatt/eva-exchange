# Eva Exchange

Eva Exchange is a platform for trading shares. It allows users to buy and sell shares from their portfolio.

## Installation

Clone the repository:

```bash
git clone https://github.com/hpolatt/eva-exchange.git
```
Navigate to the project directory:
```bash
cd eva-exchange
```

Install the dependencies:
```bash
npm install
```

## Configuration

This application uses environment variables for configuration. These are stored in `env/.env.dev` for development and `env/.env.prod` for production.

To set up your environment variables:

1. Create a new file named `env/.env.dev` for development or `env/.env.prod` for production.
2. Open the file with a text editor.
3. Replace the `KEY=value` placeholders with your actual values.

Here's an example of what the `env/.env.dev` file might look like:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
DB_NAME=your_db_name
```

## Running the Project

After installing the dependencies and setting up your environment variables, you can run the project.

For development:

```bash
npm run startDev
```

For production:
```bash
npm run startProd
```
The application will be available at http://localhost:3000.


## Postman Collection

This project includes a Postman collection that you can use to test the API endpoints. The collection file is named `eva-exchange.postman_collection.json` and is located in the root directory of the project.

To use the collection:

1. Download the `eva-exchange.postman_collection.json` file.
2. Open Postman.
3. Click on the "Import" button.
4. Select the `eva-exchange.postman_collection.json` file that you downloaded.

After importing the collection, you can select an API endpoint to test. The request method, URL, and required parameters are already set up for you.

## Features;
- User registration and Show All users
- Buying and selling shares
- Createing Shares
- Createing Portfolios


## License
MIT