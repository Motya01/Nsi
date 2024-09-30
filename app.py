from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

# Connect to the database
def connect_db():
    conn = sqlite3.connect('projet_SQL/database.db')
    conn.row_factory = sqlite3.Row  # This allows you to access rows as dictionaries
    return conn

# Serve the HTML file
@app.route('/')
def index():
    return render_template('index.html')

# Route to execute the SQL query
@app.route('/run_sql', methods=['POST'])
def run_sql():
    query = request.json.get('query')
    try:
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute(query)
        rows = cursor.fetchall()
        conn.commit()
        conn.close()

        # Convert rows to a list of dictionaries
        result = [dict(row) for row in rows]
        return jsonify(result=result, success=True)
    except Exception as e:
        return jsonify(success=False, error=str(e))

if __name__ == '__main__':
    app.run(debug=True)
