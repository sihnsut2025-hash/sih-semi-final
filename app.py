from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/ai_recommendation_dashboard')
def ai_recommendation_dashboard():
    return render_template('ai_recommendation_dashboard.html')

@app.route('/company_profiles')
def company_profiles():
    return render_template('company_profiles.html')

@app.route('/opportunity_explorer')
def opportunity_explorer():
    return render_template('opportunity_explorer.html')

@app.route('/profile_builder')
def profile_builder():
    return render_template('profile_builder.html')

@app.route('/upload_resume')
def upload_resume():
    return render_template('upload_resume.html')

if __name__ == "__main__":
    app.run(debug=True) 