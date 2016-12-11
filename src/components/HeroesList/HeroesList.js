import React, { Component, PropTypes } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { MCardSection } from '../../commonComponents';
import { styles } from './styles';

class HeroesList extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => (r1 !== r2),
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.greeks),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.ds.cloneWithRows(nextProps.greeks) });
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <MCardSection
        key={rowData.name + rowID}
      >
        <Text style={styles.listElementName}>{rowData.name}</Text>
        <View style={styles.listElementTypeContainer}>
          <Text style={styles.listElementType}>{rowData.type}</Text>
        </View>
      </MCardSection>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        style={styles.listContainer}
      />
    );
  }
}


HeroesList.propTypes = {
  greeks: PropTypes.array.isRequired,
};

HeroesList.defaultProps = {
  greeks: [],
};

const mapStateToProps = ({
  api: { greeks },
}) => ({
  greeks,
});

export default connect(mapStateToProps, null)(HeroesList);
