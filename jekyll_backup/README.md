## Project Overview
The [Open Data Initiative](https://opendatainitiative.github.io/) website holds the published works of the [Open Data Legislation project](https://github.com/opendatainitiative/opendatalegislation) and [Transparency project](https://github.com/opendatainitiative/transparency). We work on government financial transparency. [Read the ODI about for more overview](https://opendatainitiative.github.io/about/).

Submit [issues](https://github.com/opendatainitiative/opendatainitiative.github.io/issues/new) and [pull requests](https://github.com/opendatainitiative/opendatainitiative.github.io/compare) for updates, ideas, bug fixes, and new content.

This site is made with Jekyll, an open source static site generator. This means the Jekyll program takes the content we want to be on the site and turns them into HTML files ready to be hosted somewhere. Giving props where they are due, GitHub provides free web hosting for repositories, called GitHub Pages, and that's how this site is hosted. 

## Contributing
#### Fix/Edit Content
If you see an error or a place where content should be updated or improved, just fork this repository to your account, make the change you'd like and then submit a pull request. If you're not able to make the change, file an [issues](https://github.com/opendatainitiative/opendatainitiative.github.io/issues/new).

## To Set up Locally
You can take all the files of this site and run them just on your computer as if it were live online, only it's just on your machine. This is the best way to test your changes before creating a pull request.

#### Requirements
- Ruby v2.3.3 (installed default with macOS)
- [Bundler](http://bundler.io/) (binaries available with macOS)
- [Jekyll](https://jekyllrb.com/docs/installation/) (binaries available with macOS)
- Git (binaries available with macOS)

#### Installation
```
sudo gem install bundler
sudo gem install jekyll
git clone https://github.com/opendatainitiative/opendatainitiative.github.io.git
cd opendatainitiative.github.io
bundle install (do not bundle install as root)
```

## Serving
```
bundle exec jekyll serve
``` 
Open http://localhost:4000 in your browser

Don't see what you're looking for? Create an [issue](https://github.com/opendatainitiative/opendatainitiative.github.io/issues/new), we'll do our best to help you out.

## License
The underlying Jekyll source code that used to format and display content is licensed under the [MIT license](http://opensource.org/licenses/mit-license.php), the non-code text content displayed by Jekyll is licensed under the [Creative Commons Attribution 4.0 license](http://creativecommons.org/licenses/by/4.0/), and code created by the project contributors is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html).
