
import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({ });

class Icons extends React.Component {
    render() {
        const { classes, currentUser, images, width } = this.props;

        let columns = width === 'xs' || width === 'sm'  ? 1 : 2;

        return (
            <div className={classes.root}>
                <GridList cellHeight={180} cols={columns} className={classes.gridList}>
                    Tes
                   
                </GridList>
            </div>
        );
    }
}

Icons.propTypes = {
    currentUser: PropTypes.object,
    images: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        currentUser: state.user.currentUser
    };
}

export default compose(
  withStyles(styles, {
    name: 'Icons',
  }),
  withWidth(),
  connect(mapStateToProps),
)(Icons);
