'use strict';

var React = require('react');
var classNames = require('classnames');
var ReactPropTypes = React.PropTypes;

module.exports = React.createClass({

  propTypes: {
    sample: ReactPropTypes.object
  },

  render: function() {
    var WARNING_THRESHOLD = 0.04;
    var ALERT_THRESHOLD = 0.08;
    var total = this.props.sample.total;
    var classes = {
      'wq-samples-table-cell': true,
      'is-samples-table-cell-warning': total > WARNING_THRESHOLD && total <= ALERT_THRESHOLD,
      'is-samples-table-cell-danger': total > ALERT_THRESHOLD
    };
    var headerClasses = classNames('wq-samples-table-cell--primary', classes);
    var cellClasses = classNames(classes);
    return (
      <tr>
        <th className={headerClasses}>{this.props.sample.clockTime}</th>
        <td className={cellClasses}>{this.props.sample.getReadingFor('chloroform')}</td>
        <td className={cellClasses}>{this.props.sample.getReadingFor('bromoform')}</td>
        <td className={cellClasses}>{this.props.sample.getReadingFor('bromodichloromethane')}</td>
        <td className={cellClasses}>{this.props.sample.getReadingFor('dibromochloromethane')}</td>
        <td className={cellClasses}></td>
      </tr>
    );
  }

});