![](https://img.shields.io/static/v1?label=BY&message=Leonardo&color=purple)

# Notion Prototype

>Simple application that creates blocks of text that can be converted into headers. The app was made to use the keyboard so it may not be intuitive to use, please refer to the usage section for more details.


# Requirements

In order to work on this proyect the following dependencies must be installed;

- [Ruby](https://www.ruby-lang.org/en/) 
- [Postgresql](https://www.postgresql.org/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Rails](https://rubyonrails.org/)


## Built With

- Languages: _**Ruby 3.1.2**_
- Frameworks: _**Ruby On Rails**_, _**Tailwind**_

## Database creation

Run 
```bash
$ bundle install 
```

To get all the gems required for the project


Once you have the project correctly set up, run 
```bash
$ bin/rails db:setup
```


## Usage

When first load, clicking on the editor creates a block if it is empty. Also, pressing enter when the dropdown is hidden will create a new block
, pressing the key backslash '/' will open a dropdown menu which is filterable and will update the current block. In order to delete a block press the backspace key when there is no text.

## How to run the test suite

Run

```bash
$ rspec spec/
```
in order to see the test cases.

## Author

👤 **ALeonardoAlbornozA**


 Platform | Badge |
 --- | --- |
 **GitHub**:   | [@Leboroz](https://github.com/leboroz)
 **Twitter**:  | [@Leboroz](https://twitter.com/leboroz)
 **LinkedIn**: | [Leonardo Albornoz](https://linkedin.com/in/linkedinhandle)

* ...
