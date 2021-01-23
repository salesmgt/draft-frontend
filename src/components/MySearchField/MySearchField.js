import React,{useState,useRef} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';


const useStyles =   makeStyles((theme) => ({
  search: {
    
    position: 'relative',
    borderRadius: theme.shape.borderRadius, 
    backgroundColor: "#bbdefb",  // mã màu này là màu searchfield nha, màu default á
    '&:hover': {
      backgroundColor: "#e3f2fd", //mã màu này là lúc hover nè
    },
    marginLeft: 0,
    height: '100%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




MySearchField.propTypes = {
    onSubmit: PropTypes.func,
}

MySearchField.defaultProps = {
    onSubmit: null,
}

export default function MySearchField(props) {
    const classes = useStyles();
    const typingTimeOutRef = useRef("")
    const {onSubmit} = props
    const [searchSchool, setSearchSchool] = useState('');

    const handleChange = e =>{
        const value = e.target.value
        setSearchSchool(e.target.value)
        if(!onSubmit) return
        if(typingTimeOutRef.current) clearTimeout(typingTimeOutRef.current)

        typingTimeOutRef.current = setTimeout(()=>{
            onSubmit(value)
        }, 450)
       
    }
  return (
          <div className={classes.search} style={{height: '100%'}} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
                value={searchSchool}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </div>
        
      
  );
}