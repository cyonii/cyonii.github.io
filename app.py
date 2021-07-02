from pathlib import Path
from shutil import rmtree, copytree
import jinja2


BASE_DIR = Path.cwd()
OUTPUT_PATH = BASE_DIR / 'dist'
FILE_PATH = OUTPUT_PATH / 'index.html'
STATIC_DIR = BASE_DIR / 'assets' / 'static'
STATIC_OUTPUT = BASE_DIR / 'assets' / 'static'


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
        file.write(sample.render())

    copytree(STATIC_DIR, OUTPUT_PATH / 'static')
    print('\n===========\nOperation completed successfully.\n')


compile()
