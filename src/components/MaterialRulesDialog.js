import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,
    DialogTitle, withMobileDialog, Typography
} from '@material-ui/core';

const styles = theme => ({
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

class KotbarRulesDialog extends React.Component {

  render() {
    const { classes, fullScreen, open, onAccept, onClose } = this.props;

    return (
      <Dialog
        fullWidth
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        aria-labelledby="kotbarrules-dialog-title"
        aria-describedby="kotbarrules-dialog-description"
      >
        <DialogTitle id="kotbarrules-dialog-title">Materiaal Rules</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2">Materiaalkot:</DialogContentText>
          <ul>
            <li>
              <Typography>
                Geef de <span className={classes.bold}>sleutel</span> af aan de materiaalverantwoordelijke (= niet onderling doorgeven).
              </Typography>
            </li>
            <li>
              <Typography>
                Zet de spullen terug op de <span className={classes.bold}>voorziene plaats</span>.
              </Typography>
            </li>
            <li>
              <Typography>
                Meld aan de verantwoordelijke indien iets <span className={classes.bold}>kapot of aan vervanging toe</span> is.
              </Typography>
            </li>
            <li>
              <Typography>
                Alles wat je in het materiaalkot plaatst is <span className={classes.bold}>gemeenschappelijk</span>. Zet dus geen persoonlijke spullen hier.
              </Typography>
            </li>
          </ul>
          <DialogContentText variant="body2">Beamer:</DialogContentText>
          <ul>
            <li>
              <Typography>
                De materiaalverantwoordelijken houden de beamer bij op hun kamer. Haal de beamer op bij één van hen en geef hem na gebruik weer af. Het is dus <span className={classes.bold}>niet de bedoeling dat de beamer onderling wordt doorgegeven.</span>
              </Typography>
            </li>
            <li>
              <Typography>
                Bewaar tijdens de reservatie steeds op een <span className={classes.bold}>veilige plaats</span>.
              </Typography>
            </li>
            <li>
              <Typography>
                Zorg dat alle <span className={classes.bold}>kabels in het zakje</span> zitten bij teruggave.
              </Typography>
            </li>
          </ul>
          <DialogContentText variant="body2">BBQ:</DialogContentText>
          <ul>
            <li>
              <Typography>
                Geef een <span className={classes.bold}>waarborg van 5 euro</span> aan de materiaalmeesters. Je krijgt tot de volgende dag (23u59) om de BBQ in orde te maken.
              </Typography>
            </li>
            <li>
              <Typography>
                Kuis de <span className={classes.bold}>roosters</span> af na gebruik.
              </Typography>
            </li>
            <li>
              <Typography>
                Plaats de BBQ <span className={classes.bold}>proper in het materiaalkot</span> na gebruik.
              </Typography>
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={onAccept} color="primary" autoFocus>
            Accept
          </Button>
          <Button onClick={onClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

KotbarRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMobileDialog()(withStyles(styles)(KotbarRulesDialog));
