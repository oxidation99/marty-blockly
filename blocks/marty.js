/**
 * @fileoverview Marty the Robot blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author alexander@robotical.io (Sandy Enoch)
 */
'use strict';

goog.provide('Blockly.Blocks.marty');  // Deprecated
goog.provide('Blockly.Constants.Marty');

goog.require('Blockly.Blocks');
goog.require('Blockly');

/**
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.MARTY_HUE.
 * @readonly
 */
Blockly.Constants.Marty.HUE = 198;
/** @deprecated Use Blockly.Constants.Marty.HUE */
Blockly.Blocks.marty.HUE = Blockly.Constants.Marty.HUE;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for hello.
  {
    "type": "marty_hello",
    "message0": "Hello",
    "previousStatement": null,
  	"nextStatement": null,
    /*
    "args0": [
      {
        "type": "field_variable",
        "name": "VAR",
        "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
      }
    ],
    */
    //"output": null,
    //"colour": "%{BKY_VARIABLES_HUE}",
    "colour": "198",
    "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
    "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
    //"extensions": ["contextMenu_variableSetterGetter"]
  },
  {
  	"type": "marty_walk_forward",
  	"message0": "Walk forward %1 steps. step length: %2, turn: %3, step time: %4",
  	"args0": [{
      "type": "field_number",
      "name": "STEPS",
      "value": 2,
      "min": 0,
      "precision": 1
    },{
      "type": "field_number",
      "name": "STEP_LENGTH",
      "value": 40,
      "min": 0,
      "max": 100,
      "precision": 1
    },{
      "type": "field_number",
      "name": "TURN",
      "value": 0,
      "min": -100,
      "max": 100,
      "precision": 1
    },{
      "type": "field_number",
      "name": "STEP_TIME",
      "value": 1.8,
      "min": 0,
      "precision": 0.1
    }],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_MARTY_HUE}"

  }

]);  // END JSON EXTRACT (Do not delete this comment.)