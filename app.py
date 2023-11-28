from flask import Flask, render_template, jsonify, send_from_directory
import json

app = Flask(__name__)

# Load JSON and JS files
with open('static/data/clean_state_house_pricing.json', 'r') as file:
    house_pricing_data = json.load(file)

with open('static/data/California_County_Boundaries.geojson', 'r') as file:
    county_boundaries = json.load(file)

with open('static/data/States.json', 'r') as file:
    states_data = json.load(file)

with open('static/data/trueData.json', 'r') as file:
    true_data = json.load(file)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/house-pricing")
def get_house_pricing_data():
    return jsonify(house_pricing_data)

@app.route("/county-boundaries")
def get_county_boundaries():
    return jsonify(county_boundaries)

@app.route("/states")
def get_states_data():
    return jsonify(states_data)

@app.route("/true-data")
def get_true_data():
    return jsonify(true_data)

@app.route("/inflation-rate")
def get_inflation_rate():
    return send_from_directory('.', 'InflationRate.js')

@app.route("/mortgage-rate")
def get_mortgage_rate():
    return send_from_directory('.', 'MortgageRate.js')

if __name__ == "__main__":
    app.run(debug=True)
