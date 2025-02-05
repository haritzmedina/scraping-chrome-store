# scraping-chrome-store
Scraps from chrome store data between `<noscript>` tag, where extension metadata is presented. 
Then it is possible to parse it using Google Sheet or similar using REGEX (for example). You can use 
[this sheet as a template](https://docs.google.com/spreadsheets/d/1X8eHl9A0TWogHM8PEIo8Qs7x3mIs-XuIPSwi1A-kVTI/edit?usp=sharing)

How to use:
* Install [nodejs](https://nodejs.org/en/).
* Install dependencies: `npm install`
* Adapt and run the following command and wait (it can take for long):

`node index.js input_file_rel_path > output_file_rel_path`

For example:
`node index.js ./input/input_test.csv > output/output_test.csv`

The input file must be a list of chrome webstore URL list and the output will be a csv with the URL and the metadata. See examples in input folder.

## Input CSV with extensions URL
You can create easily your own input from chrome web store searches [here](https://gist.github.com/haritzmedina/9be5664117c6df6d78b030526a9393cd)
