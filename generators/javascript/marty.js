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
    return 'marty.hello(1);';
};

Blockly.JavaScript['marty_walk'] = function(block){
    if (block.getField('STEPS')) {
        // Internal number.
        var steps = String(Number(block.getFieldValue('STEPS')));
        var step_length = String(Number(block.getFieldValue('STEP_LENGTH')));
        var step_time = String(Number(block.getFieldValue('STEP_TIME')));
        var turn = String(Number(block.getFieldValue('TURN')));
    } else {
  	return 'console.log(\'Number of steps not found\');';
    }
    return 'marty.walk(' + steps + ', ' + turn + ', ' + step_time*1000 +', ' + step_length + ');';
};

Blockly.JavaScript['marty_simple_walk'] = function(block){
    if (block.getField('STEPS')) {
        // Internal number.
        var steps = String(Number(block.getFieldValue('STEPS')));
    } else {
  	return 'console.log(\'Number of steps not found\');';
    }
    
    var step_length = '40';
    var step_time = '1.8';
    var turn = '0';
    return 'marty.walk(' + steps + ', ' + turn + ', ' + step_time*1000 +', ' + step_length + ');';
};

Blockly.JavaScript['marty_kick'] = function(block){
    if (block.getField('SIDE')) {
        var side = String(block.getFieldValue('SIDE'));
        var twist = String(Number(block.getFieldValue('TWIST')));
        var move_time = String(Number(block.getFieldValue('MOVE_TIME')));
    } else {
  	return 'console.log(\'Kick not found\');';
    }
    return 'marty.kick(\'' + side + '\', ' + twist + ', ' + move_time*1000 + ');';
}
