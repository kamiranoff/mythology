import React, { Component, PropTypes } from 'react';
import { ListView, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { MSearchInput } from '../../commonComponents';
import BookListItem from '../BookListItem/BookListItem';

import styles from './styles';

class BookList extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2),
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.books),
      searchTerm: '',
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.ds.cloneWithRows(nextProps.books) });
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  // eslint-disable-next-line class-methods-use-this
  onRowPress(book) {
    Actions.singleBookPage({ book, title: book.title });
  }

  renderHeader() {
    return (
      <MSearchInput
        placeholder="Search by title or author"
        value={this.state.searchTerm}
        onSearchChange={this.onSearchChange}
      />
    );
  }

  // eslint-disable-next-line no-unused-vars
  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <BookListItem
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


BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

BookList.defaultProps = {
  greeks: [],
};

const mapStateToProps = ({
  books: { books },
}) => ({
  books,
});

export default connect(mapStateToProps, null)(BookList);
