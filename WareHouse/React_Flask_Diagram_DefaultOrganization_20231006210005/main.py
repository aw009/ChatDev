from flask import Flask, request, jsonify
import requests
import psycopg2
import openai
app = Flask(__name__)
# Route to handle the submission of process description
@app.route('/process', methods=['POST'])
def process():
    description = request.json['description']
    # Generate the mermaid diagram using GPT-3
    generated_diagram = generate_diagram(description)
    # Save the process description and generated diagram to the database
    conn = psycopg2.connect(
        host="db",
        port="5432",
        database="process_db",
        user="postgres",
        password="postgres"
    )
    cur = conn.cursor()
    cur.execute("INSERT INTO process (description, diagram) VALUES (%s, %s)", (description, generated_diagram))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'message': 'Process description submitted successfully'})
# Route to retrieve the generated mermaid diagram
@app.route('/diagram/<int:process_id>', methods=['GET'])
def diagram(process_id):
    # Retrieve the process description and generated diagram from the database based on the process_id
    conn = psycopg2.connect(
        host="db",
        port="5432",
        database="process_db",
        user="postgres",
        password="postgres"
    )
    cur = conn.cursor()
    cur.execute("SELECT diagram FROM process WHERE id = %s", (process_id,))
    diagram = cur.fetchone()
    cur.close()
    conn.close()
    if diagram:
        return jsonify({'diagram': diagram[0]})
    else:
        return jsonify({'message': 'Diagram not found'})
def generate_diagram(description):
    # Generate the mermaid diagram using GPT-3
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=description,
        max_tokens=100
    )
    generated_diagram = response.choices[0].text
    return generated_diagram
if __name__ == '__main__':
    app.run()