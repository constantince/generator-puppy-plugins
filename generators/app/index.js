'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  async prompting () {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Entre your plugins name',
        default: 'dog-is-cat'
      }
    ];

    const projectName = this.prompt(prompts);
    this.dest = this.destinationPath(projectName);
  }

  writing() {
      
  }

  end() {

  }
};
