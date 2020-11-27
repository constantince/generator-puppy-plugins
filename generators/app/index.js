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
        default: 'puppy-plugins-mine'
      }
    ];

    this.answer = await this.prompt(prompts);
  }

  writing() {
      this.fs.copyTpl(
        this.templatePath(),
        this.destinationPath(this.answer.name),
        {project: this.answer.name},
        null,
        {
          globOptions: { dot: true }
        }
      )
  }

  install() {
    process.chdir(this.answer.name);
    this.npmInstall();
  }

  end() {

  }
};
