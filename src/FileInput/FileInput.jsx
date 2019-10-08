import React, { Component } from 'react';
// import SpellChecker from 'spellchecker';
// import * as spell from 'spell-checker-js';
// const spell = require('spell-checker-js');
// spell.load('en');

class FileInput extends Component {
    constructor(props){
        super(props);
        let fileReader;
    }

    handleFileRead = (file) => {
        let content = this.fileReader.result;
        // checker.isMisspelled('content');
        // console.log(spell.check('Some text to check, blahblahblah, olololo'));
    }

    handleFileChosen = (file) => {
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileRead;
        this.fileReader.readAsText(file);
    }

    render() {
        return (
            <div>
                <input type = "file"
                    id = "file"
                    onChange = {e => this.handleFileChosen(e.target.files[0])}
                />
            </div>
        );
    }
}

export default FileInput;