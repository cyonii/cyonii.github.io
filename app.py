import jinja2
import os

loader = jinja2.FileSystemLoader('templates')
environment = jinja2.Environment(loader=loader)
sample = environment.get_template('index.html')

print(sample.render())
