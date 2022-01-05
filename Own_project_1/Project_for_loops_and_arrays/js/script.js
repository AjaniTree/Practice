/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

// let grid = [34, `A`, 29, `GOAL!!!`];
let grid = [];

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(500, 500);

}


/**
Description of draw()
*/
function draw() {
  background(0);
  // console.log(grid[3], grid[0]);

  for (let i = 0; i < 10; i++) {
    ellipse(i * 10 + 1, 200, grid[i], grid[i]);
  }
}
