import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    "display": 'flex',
    "flexWrap": 'wrap',
    "justifyContent": 'space-around',
  },
  gridList: {
    "width": 1000,
    "height": 1000,
    "overflowY": 'auto',
  },
  indvCell: {
    "borderRadius": 25,
  }
};



  return (
    <div style={styles.root}>
          <GridList
            cellHeight={100}
            style={styles.gridList}
            cols={10}
          >
            Tes
          </GridList>
          </div>
  );
}
