'use strict';

var expect = require('expect.js');
var Grid = require('../lib/grid');
var Position = require('../lib/position');

describe('Grid', function() {
    describe('setItemPosition', function () {
        var grid = new Grid(new Position({x:5,y:5}, 'N'));
        it('should add a position to occupation object', function () {
            var position = new Position({x:1,y:1}, 'N');
            grid.setItemPosition(0, position);
            expect(grid.occupation[0]).to.equal(position);
        });
        it('should update an item’s position in occupation object', function () {
            var position = new Position({x:2,y:2}, 'S');
            grid.setItemPosition(0, position);
            expect(grid.occupation[0]).to.equal(position);
        });

    });
    describe('getCellOccupation', function () {
        var grid = new Grid(new Position({x:5,y:5}, 'N'));
        var itemPosition = new Position({x:4,y:4}, 'N');
        grid.setItemPosition(0, itemPosition); // set a test item
        it('should return ’id’ of item who match an occupied cell', function () {
            var position = new Position({x:4,y:4}, 'N');
            expect(grid.getCellOccupation(position)).to.equal(0);
        });
        it('should return ’null’ if no item has been found for the given cell', function () {
            var position = new Position({x:3,y:3}, 'N');
            expect(grid.getCellOccupation(position)).to.equal(null);
        });

    });
});