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
Blockly.Constants.Marty.HUE = 40;
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
        "colour": "%{BKY_MARTY_HUE}",
        "helpUrl": "%{BKY_VARIABLES_GET_HELPURL}",
        "tooltip": "%{BKY_VARIABLES_GET_TOOLTIP}",
        //"extensions": ["contextMenu_variableSetterGetter"]
    },{
  	"type": "marty_simple_walk",
  	"message0": "Walk %1 %2 steps",
  	"args0": [
        {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "value": "forward",
            "options": [
                [ "forward", "40" ],
                [ "backward", "-40" ]
            ]
        }, {
            "type": "field_number",
            "name": "STEPS",
            "value": 2,
            "min": 0,
            "precision": 1
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_MARTY_HUE}"

    },{
    "type": "marty_simple_turn",
    "message0": "Turn %1 %2 steps",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "DIRECTION",
            "value": "left",
            "options": [
                [ "left", "100" ],
                [ "right", "-100" ]
            ]
        }, {
            "type": "field_number",
            "name": "STEPS",
            "value": 2,
            "min": 0,
            "precision": 1
        }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_MARTY_HUE}"
    },{
  	"type": "marty_walk",
  	"message0": "Walk %1 steps of length %2, turning %3, step time: %4",
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

    },{
  	"type": "marty_kick",
  	"message0": "Kick on %1 side with %2 twist in step time %3",
  	"args0": [
            {
                "type": "field_dropdown",
                "name": "SIDE",
                "value": "LEFT",
                "options": [
                    [ "left", "left" ],
                    [ "right", "right" ]
                ]
            },{
                "type": "field_number",
                "name": "TWIST",
                "value": 0,
                "min": -100,
                "max": 100,
                "precision": 1
            },{
                "type": "field_number",
                "name": "MOVE_TIME",
                "value": 1.8,
                "min": 0,
                "precision": 0.1
            }],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_MARTY_HUE}"
    },{
        "type": "marty_disable_motors",
        "message0": "Disable motors",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_MARTY_HUE}",
    },{
        "type": "marty_enable_motors",
        "message0": "Enable motors",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "%{BKY_MARTY_HUE}",
    }

]);  // END JSON EXTRACT (Do not delete this comment.)
