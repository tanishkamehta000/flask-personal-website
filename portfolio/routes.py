from portfolio import app
from flask import Flask, render_template, request, redirect, url_for

@app.get("/")
def index():
    return render_template("index.html")