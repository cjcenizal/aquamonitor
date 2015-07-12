'use strict';

var SamplesTable = require('./SamplesTable');
var SamplesTablePageButton = require('./SamplesTablePageButton');
var SampleActions = require('../../domain/Sample/SampleActions');

var React = require('react');
var ReactPropTypes = React.PropTypes;
var classNames = require('classnames');

module.exports = React.createClass({

  propTypes: {
    samples: ReactPropTypes.array,
    hasPreviousPage: ReactPropTypes.bool,
    hasNextPage: ReactPropTypes.bool
  },

  render: function() {
    return (
      <div>
        <SamplesTablePageButton
          label="view earlier samples"
          isActive={this.props.hasPreviousPage}
          onClick={this.onClickPreviousPage}
        />
        <SamplesTable
          samples={this.props.samples}
        />
        <SamplesTablePageButton
          label="view later samples"
          isActive={this.props.hasNextPage}
          onClick={this.onClickNextPage}
          isPointedDown={true}
        />
      </div>
    );
  },

  onClickNextPage: function() {
    SampleActions.nextPage();
  },

  onClickPreviousPage: function() {
    SampleActions.previousPage();
  }

});