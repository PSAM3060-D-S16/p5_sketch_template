# Sketch Projects Template

A template for sketching using the [p5.js](http://p5js.org/) library, including the optional p5 sound and dom libraries.

## Notes
- Created for PSAM3060 Comp Form.
- Set up for many small sketches in one repo.
- Library files are not minified, this can help with debugging.


## Included Files/Folders
- `README.md`  
  This file. Displayed in Github when you browse this repo.

- `p5/p5.js`  
  The main p5 javascript library.

- `p5/p5.dom.js`  
  Optional p5 library for manipulating html elements.

- `p5/p5.sound.js`  
  Optional p5 library for working with sounds.

- `.gitignore`  
  This file tells git not to track certain files.

## Sketch Files/Folders
- `[sketch_name]/index.html`  
  The html page displayed by the browser, loads the libraries and your program.

- `[sketch_name]/sketch.js`  
  Your program. This is where you will do most/all of your coding.

- `[sketch_name]/assets/`  
  Keep your images and other assets in this folder.


## Using This Template
- **Download ZIP, Don't Clone**  
  You want the files to start your own, separate project, so downloading makes sense in this case. You would clone the project if you wanted to contribute changes to the template itself.

- **Unzip, Put it in a Good Place**  
  Store the folder where you keep your projects.

- **Open the Folder in Atom**  
  Open the folder, rather than a specific file in Atom. Atom will display a file browser for your project.

- **Activate Live Server**  
  Make sure you have the [Live Server](https://atom.io/packages/atom-live-server) package installed. Then activate it via the menu: `Packages->Live Server->Start on port 3000`. This should start a local server and open `http://127.0.0.1:3000/` in your browser.

- **Pick the Sketch to View**  
  Hopefully, your browser is listing the folders in the project. Click on the `sketch_basic` folder to open and show it.

- **You now see the template sketch!**  
  If everything is working right, at least.

- **Get Coding**  
  Make some changes to `sketch.js` and save them. The local server should send the changes to your browser as soon as you save.

- **Make a New Sketch**  
  Duplicate the `sketch` folder and give the new folder a name. In Chrome, go to `http://127.0.0.1:3000/` and pick your new sketch from the list to see it. Start hacking.

- **Use Chrome**
  If you normally use another browser, I suggest doing your p5 coding in Chrome to match what is shown in class.

- **Open the JavaScript Console**  
  `Command-Option-J` or `View->Developer-JavaScript Console`. When your program has an error, or you use `console.log()`, Chrome will show you here.

- **Open the p5 Reference**  
  You want some [docs](http://p5js.org/reference/), right?
