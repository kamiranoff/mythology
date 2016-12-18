import React, { Component, PropTypes } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchAllGreeks } from '../../actions/api';

import { MSearchInput } from '../../commonComponents';
import HeroesListItem from '../HeroesListItem/HeroesListItem';

import { styles } from './styles';

class HeroesList extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2),
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.greeks),
      searchTerm: '',
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onRowPress = this.onRowPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.ds.cloneWithRows(nextProps.greeks) });
  }

  onSearchChange(value) {
    this.props.fetchAllGreeks(value);
    this.setState({ searchTerm: value });
  }

  onRowPress(id) {
    console.log(id);
  }

  renderHeader() {
    return (
      <MSearchInput
        placeholder="Search"
        value={this.state.searchTerm}
        onSearchChange={this.onSearchChange}
      />
    );
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <HeroesListItem
        rowData={rowData}
        rowId={rowID}
        onPress={() => this.onRowPress(rowID)}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}
        style={styles.listContainer}
        enableEmptySections
      />
    );
  }
}


HeroesList.propTypes = {
  greeks: PropTypes.array.isRequired,
  fetchAllGreeks: PropTypes.func.isRequired,
};

HeroesList.defaultProps = {
  greeks: [],
};

const mapStateToProps = ({
  api: { greeks },
}) => ({
  greeks,
});

export default connect(mapStateToProps, { fetchAllGreeks })(HeroesList);
