import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import boldStyle from '../../assets/jss/boldStyle';


function KotbarRulesDialog(props) {
  const { classes, fullScreen, open, onAccept, onClose } = props;

  return (
    <Dialog
      fullWidth
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="kotbarrules-dialog-title"
      aria-describedby="kotbarrules-dialog-description"
    >
      <DialogTitle id="kotbarrules-dialog-title">Kotbar Rules</DialogTitle>
      <DialogContent>
        <DialogContentText variant="subtitle2">Belangrijk:</DialogContentText>
        <ul>
          <li>
            <Typography variant="body2">
              Houd <span className={classes.bold}>ramen en deuren gesloten</span> tijdens feestjes met luide muziek om geluidsoverlast te beperken.
              Houd er rekening mee dat er paters wonen boven de kotbar en in kamers die uitkijken op de kotbar, dus overdrijf niet met het volume.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Niet-praesidium activiteiten met luide muziek moeten <span className={classes.bold}>stiller worden vanaf 1u ‘s nachts</span>.
              De activiteit hoeft niet te stoppen, achtergrond- muziek mag nog wel, maar geen feestjes-muziekniveau meer.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <span className={classes.bold}>Cantussen zijn niet toegelaten.</span>
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <span className={classes.bold}>Plaats meubilair terug</span> na een activiteit.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <span className={classes.bold}>Laat de kotbar en TV-zaal proper achter na een activiteit.</span> Indien het niet goed is opgekuist, word je achteraf gecontacteerd.
            </Typography>
          </li>
        </ul>
        <DialogContentText variant="subtitle2">Opkuis:</DialogContentText>
        <ul>
          <li>
            <Typography variant="body2">
              Trek de <span className={classes.bold}>stekkers</span> van de ijskasten en muziekinstallatie uit.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Zorg dat de <span className={classes.bold}>ijskasten</span> leeg zijn en laat de deuren open (anders beginnen ze te stinken).
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Zorg dat alle <span className={classes.bold}>glazen uitgewassen</span> zijn en dat de <span className={classes.bold}>toog proper</span> is.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              <span className={classes.bold}>Kuis de vloer</span> indien nodig: kuisgerief vind je in het was-sorteerkot op Noord:
            </Typography>
            <ul>
              <li><Typography variant="body2">Loop via de gang van de kotbar naar de Noord.</Typography></li>
              <li><Typography variant="body2">Ga de deur links naast de lift binnen.</Typography></li>
              <li><Typography variant="body2">De kamer recht voor je is het sorteerkot.</Typography></li>
              <li><Typography variant="body2">Achter de deur ligt het kuisgerief.</Typography></li>
            </ul>
          </li>
        </ul>
      </DialogContent>
      <DialogActions>
        <Button onClick={onAccept} color="primary">
          Accept
        </Button>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

KotbarRulesDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withMobileDialog()(withStyles(boldStyle)(KotbarRulesDialog));
