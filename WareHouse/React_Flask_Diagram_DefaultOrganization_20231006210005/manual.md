# ChatDev User Manual

## Introduction

Welcome to ChatDev, a software company that specializes in developing intelligent agents and creating innovative software solutions. This user manual will guide you through the installation and usage of our Python Flask and React application, which gathers a process description from a user, sends it to GPT-3 for generating a mermaid diagram, and displays the diagram to the user. The application utilizes a PostgreSQL database to store the process descriptions and generated diagrams.

## Installation

To install and run the Flask and React application, please follow these steps:

### Prerequisites

- Docker
- Docker Compose

### Steps

1. Clone the repository from [GitHub](https://github.com/your-repo-link).
2. Open a terminal and navigate to the cloned repository's directory.
3. Run the following command to build and start the application:

   ```
   docker-compose up
   ```

   This command will build the Docker images and start the Flask application on port 5000.

4. Once the application is running, open a web browser and access `http://localhost:5000` to use the application.

## Usage

The Flask and React application provides a user interface for submitting process descriptions and retrieving the generated mermaid diagrams. Here's how to use the application:

1. Open the application in a web browser by accessing `http://localhost:5000`.
2. On the homepage, you will see an input field where you can enter a process description. Type in the description and click the "Submit" button.
3. The application will send the process description to GPT-3 for generating a mermaid diagram. Once the diagram is generated, it will be saved in the PostgreSQL database.
4. After submitting the process description, you will see a "Process ID" displayed on the screen. Take note of this ID as it will be used to retrieve the generated diagram.
5. To retrieve the generated diagram, click the "Get Diagram" button. The application will fetch the diagram from the database based on the process ID.
6. If a diagram is found for the given process ID, it will be displayed on the screen.

## Database Schema

The application uses a PostgreSQL database to store the process descriptions and generated diagrams. The required database schema is created automatically when running the application. Here is the schema definition:

```sql
CREATE TABLE process (
    id SERIAL PRIMARY KEY,
    description TEXT,
    diagram TEXT
);
```

The `process` table has three columns: `id`, `description`, and `diagram`. The `id` column is an auto-incrementing primary key, the `description` column stores the process description, and the `diagram` column stores the generated mermaid diagram.

## Conclusion

Congratulations! You have successfully installed and used our Python Flask and React application for generating mermaid diagrams from process descriptions. If you have any further questions or need assistance, please don't hesitate to contact our support team.

Thank you for choosing ChatDev! We hope you enjoy using our software.