from pathlib import Path
from shutil import rmtree, copytree
import jinja2


BASE_DIR = Path.cwd()
OUTPUT_PATH = BASE_DIR / 'dist'
FILE_PATH = OUTPUT_PATH / 'index.html'
STATIC_DIR = BASE_DIR / 'assets' / 'static'
STATIC_OUTPUT = BASE_DIR / 'assets' / 'static'

context = {
    'languages': [
        ('Python', 'devicon-python-plain'),
        ('Ruby', 'devicon-ruby-plain'),
        ('JavaScript', 'devicon-javascript-plain'),
        ('HTML', 'devicon-html5-plain'),
        ('CSS', 'devicon-css3-plain'),
        ('SASS', 'devicon-sass-original')
    ],
    'frameworks': [
        ('Django', 'devicon-django-plain'),
        ('Rails', 'devicon-rails-plain'),
        ('React', 'devicon-react-original'),
        ('Redux', 'devicon-redux-original'),
        ('Bootstrap', 'devicon-bootstrap-plain')
    ],
    'skills': [
        'Back-end',
        'Front-end',
        'Pair-programming',
        'Remote collaboration'
    ]
}


def compile():
    loader = jinja2.FileSystemLoader('templates')
    environment = jinja2.Environment(loader=loader)
    sample = environment.get_template('index.html')

    try:
        rmtree(OUTPUT_PATH)
    except FileNotFoundError:
        pass
    Path.mkdir(OUTPUT_PATH)
    Path.touch(FILE_PATH)

    with open(FILE_PATH, 'w') as file:
        file.write(sample.render(context))

    copytree(STATIC_DIR, OUTPUT_PATH / 'static')
    print('\n===========\nOperation completed successfully.\n')


compile()
