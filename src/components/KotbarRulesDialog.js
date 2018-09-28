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
        <DialogTitle id="kotbarrules-dialog-title">Kotbar Rules</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2">Belangrijk:</DialogContentText>
          <ul>
            <li>
              <Typography>
                Houd ramen en deuren gesloten tijdens feestjes met luide muziek om geluidsoverlast te beperken.
                Houd er rekening mee dat er paters wonen boven de kotbar en in kamers die uitkijken op de kotbar, dus overdrijf niet met het volume.
              </Typography>
            </li>
            <li>
              <Typography>
                Niet-praesidium activiteiten met luide muziek moeten stiller worden vanaf 1u ‘s nachts.
                De activiteit hoeft niet te stoppen, achtergrond- muziek mag nog wel, maar geen feestjes-muziekniveau meer.
              </Typography>
            </li>
            <li>
              <Typography>
                Cantussen zijn niet toegelaten.
              </Typography>
            </li>
            <li>
              <Typography>
                Plaats meubilair terug na een activiteit.
              </Typography>
            </li>
            <li>
              <Typography>
                Laat de kotbar en TV-zaal proper achter na een activiteit. Indien het niet goed is opgekuist, word je achteraf gecontacteerd.
              </Typography>
            </li>
          </ul>
          <DialogContentText variant="body2">Opkuis:</DialogContentText>
          <ul>
            <li>
              <Typography>
                Trek de stekkers van de ijskasten en muziekinstallatie uit.
              </Typography>
            </li>
            <li>
              <Typography>
                Zorg dat de ijskasten leeg zijn en laat de deuren open (anders beginnen ze te stinken).
              </Typography>
            </li>
            <li>
              <Typography>
                Zorg dat alle glazen uitgewassen zijn en dat de toog proper is.
              </Typography>
            </li>
            <li>
              <Typography>
                Kuis de vloer indien nodig: kuisgerief vind je in het was-sorteerkot op Noord:
              </Typography>
              <ul>
                <li><Typography>Loop via de gang van de kotbar naar de Noord.</Typography></li>
                <li><Typography>Ga de deur links naast de lift binnen.</Typography></li>
                <li><Typography>De kamer recht voor je is het sorteerkot.</Typography></li>
                <li><Typography>Achter de deur ligt het kuisgerief.</Typography></li>
              </ul>
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
