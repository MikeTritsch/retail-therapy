# Retail Therapy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![surprised-reaction](https://github.com/MikeTritsch/retail-therapy/assets/122573481/c8581cca-ce02-46f9-aaba-e193bac1efca)

## Description

This e-commerce platform's back-end, built with Express and Sequelize, serves as the backbone for managing crucial operations related to products and their associated categories and tags. With this framework, you can effortlessly perform Create, Read, Update, and Delete (CRUD) actions on products, facilitating seamless inventory management.

## Links

[Application In Action](https://drive.google.com/file/d/1sQ3TL5Tj_4jxP85MvMWIR3seaFaQoEVF/view?usp=sharing)

[GitHub Repo](https://github.com/MikeTritsch/retail-therapy)

## What comes next? and other issues...

This application reinforced many core concepts I wanted to practice, including route creation, database integration, and the power of Sequelize to make data management more efficient. It was a challenge not to use "async" functions, as I wanted to make sure I stayed within the confines of the starter code I was given.

One of the challenges I faced was figuring out a bug caused by not using MySQL locally. I had to refactor the conenction.js file in order to work with MySQL Workbench.

Another challenge I faced was figuring out how to include different models within routes, which took loads of research.

I can feel myself getting better at reading code, and I continue to work on tieing everything together.

## Installation

Requires Node.js.

Requires Express.js.

Uses [mySQL2](https://www.npmjs.com/package/mysql2).

Uses [dotenv](https://www.npmjs.com/package/dotenv).

Uses [Sequelize](https://www.npmjs.com/package/sequelize).

This application will run on both bash and terminal.

## Usage

1. Clone repository from GitHub (See GitHub Repo link at the top of this README)

2. Open your code editor's integrated terminal or use the system terminal/bash

3. In the command line, seed your data (built in) by running `node seeds/index.js`

![seeds](https://github.com/MikeTritsch/retail-therapy/assets/122573481/fd32984d-31f3-42db-be07-d48531d01aaa)

4. After you've seeded the data, run "node server.js"

![connected](https://github.com/MikeTritsch/retail-therapy/assets/122573481/0bdfa837-9728-44f6-9f23-e5ddb6693b31)

5. Using your browser, or other client-based applications (Postman, Thunder Client, or Insomnia), run your routes on the local server.


## Credits

Starter code provided by the University of Texas at Austin.

## License

MIT License

Copyright (c) 2023 Mike Tritsch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---