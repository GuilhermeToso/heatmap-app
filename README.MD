# Heatmap Chart Real-Time Application

This project is a full-stack web application that displays a real-time heatmap chart. It leverages the power of ReactJs and NestJs frameworks, utilizing WebSockets for real-time data updates, ApexCharts for rendering the heatmap, and TailwindCSS for styling.

## Technologies Used

- **Frontend**: ReactJs, ApexCharts, TailwindCSS
- **Backend**: NestJs
- **Real-Time Data**: WebSockets
- **Containerization**: Docker, Docker Compose

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18.17.1)
- npm
- Docker (if running with Docker)

### Running the Project

#### Without Docker

1. Clone the repository to your local machine.

    ```sh
    git clone <repository-url>
    ```

2. Navigate to the ReactJs application directory.

    ```sh
    cd heatmap-client
    ```

3. Install the dependencies and start the React application.

    ```sh
    npm install
    npm run start
    ```

    The React application will be available at `http://localhost:3000`.

4. In a new terminal, navigate to the NestJs application directory.

    ```sh
    cd heatmap-server
    ```

5. Install the dependencies and start the Nest application.

    ```sh
    npm install
    npm run start:dev
    ```

    The NestJs application will run on `http://localhost:3333`.

#### With Docker

1. Ensure Docker and Docker Compose are installed and running on your machine.

2. Use Docker Compose to build and run the services.

    ```sh
    docker-compose up -d
    ```

    This command will automatically build the Docker images for both the client and server if they don't exist and start the containers. The React application will be accessible at `http://localhost:3000`, and the NestJs server will be at `http://localhost:3333`.


## Authors

* **gUILHERME m. tOSO** - *Initial work* - [YourGithubProfile](https://github.com/GuilhermeToso)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
