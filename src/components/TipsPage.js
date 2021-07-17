import React from "react";
import AppMenu from "./AppMenu";
import "./TipsPage.css";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const websites = require('./websites.json');

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function CheckboxesGroup(props) {
  const classes = useStyles();
  const checked = {}
  console.log('website', props);
  const tips = websites[props.website];
  tips.forEach((tip) => {
      checked[tip] = false;
  })
  const [state, setState] = React.useState(checked);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Tips</FormLabel>
        <FormGroup>
            {tips.map((tip, index) => (
                <FormControlLabel
                control={<Checkbox checked={state[index]} onChange={handleChange} name={tip} />}
                label={tip}
                />
            ))}
        </FormGroup>
        <FormHelperText>Select ones you have done</FormHelperText>
      </FormControl>
    </div>
  );
}

export default class TipsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            website: "",
        }
    }

    componentDidMount() {
        this.setState({
            website: this.props.match.params.website
        });
    }

    render() {
        if (this.state.website === '') {
            return "Loading...";
        }
        return (
            <React.Fragment>
                <AppMenu/>
                <h1>{this.state.website}</h1>
                <CheckboxesGroup website={this.state.website}/>
            </React.Fragment>
        );
    }
}