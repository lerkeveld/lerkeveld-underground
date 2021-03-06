import { makeStyles } from '@material-ui/core/styles';

const useMaterialTableStyles = makeStyles(theme => ({
  removeCell: {
    width: '44px',
    minWidth: '44px',
    paddingLeft: '0px',
    paddingRight: '8px'
  },
  dateCell: {
    width: '110px',
    minWidth: '110px',
    paddingLeft: '0px',
    paddingRight: '24px'
  },
  nameCell: {
    width: '170px',
    minWidth: '170px',
    paddingLeft: '0px',
    paddingRight: '24px'
  },
  materialCell: {
    minWidth: '200px',
    paddingLeft: '0px',
    paddingRight: '0px'
  }
}));

export default useMaterialTableStyles;
