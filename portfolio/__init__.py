from flask import Flask, render_template, request, redirect, url_for

# Create flask instance
app = Flask(__name__)

from portfolio import routes
