/**
 * @fileoverview Generating JavaScript for Marty blocks.
 * @author alexander@robotical.io (Sandy Enoch)
 */
'use strict';

goog.provide('Blockly.JavaScript.marty');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['marty_hello'] = function(block) {
  // Say hello to Marty.
  //var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
  //    Blockly.Variables.NAME_TYPE);
  //return [code, Blockly.JavaScript.ORDER_ATOMIC];
  return 'console.log(\'Hello from Marty!\');';
};

Blockly.JavaScript['marty_walk_forward'] = function(block){
  if (block.getField('STEPS')) {
    // Internal number.
    var steps = String(Number(block.getFieldValue('STEPS')));
  } else {
  	return 'console.log(\'Number of steps not found\');';
  }
  return 'console.log(\'marty.walk(' + steps + ');\');';
}