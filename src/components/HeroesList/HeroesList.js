import React, { Component, PropTypes } from 'react';
import { ListView, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { fetchAllGreeks } from '../../actions/api';

import { MSearchInput } from '../../commonComponents';
import HeroesListItem from '../HeroesListItem/HeroesListItem';

import styles from './styles';

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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.ds.cloneWithRows(nextProps.greeks) });
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onSearchChange(value) {
    this.props.fetchAllGreeks(value);
    this.setState({ searchTerm: value });
  }

  // eslint-disable-next-line class-methods-use-this
  onRowPress(hero) {
    Actions.singleHeroPage({ hero, title: hero.name });
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

  // eslint-disable-next-line no-unused-vars
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <HeroesListItem
        rowData={rowData}
        rowID={rowData._id}
        onPress={() => this.onRowPress(rowData)}
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
