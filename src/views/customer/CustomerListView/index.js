import React, {
  useState,
  useEffect,
} from 'react';
import {
    Box,
    Container,
    makeStyles,
    Button,
    InputAdornment,
    SvgIcon,
    TextField,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Results from './Results';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'src/store';
import { getUsers } from 'src/slices/user';
import {
  Search as SearchIcon
} from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const CustomerListView = () => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const [value, setValue] = useState('');
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers('all'));
    }, [dispatch]);

    const handleSearch = () => {
        try {
            if (value == 'iseijasunow') {
                enqueueSnackbar('Invalid Search', {
                    variant: 'error'
                });
                dispatch(getUsers('all'));
            } else if(value.length < 4){
                enqueueSnackbar('Search parameter too short', {
                    variant: 'error'
                });
                dispatch(getUsers('all'));
            } else {
                dispatch(getUsers(value));
            }
        } catch (err) {
            console.error(err);
            enqueueSnackbar('Something went wrong', {
                variant: 'error'
            });
        }
    };

    return (
        <Page className={classes.root} title="Customer Github - List" >
            <Container maxWidth={false}>
                <Header />
                <Box mt={2} display="flex" justifyContent="flex-end" >
                    <Box mt={2}>
                        <TextField
                            fullWidth
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SvgIcon
                                    fontSize="small"
                                    color="action"
                                >
                                    <SearchIcon />
                                </SvgIcon>
                                </InputAdornment>
                            )
                            }}
                            onChange={(event) => setValue(event.target.value)}
                            placeholder="Search people &amp; places"
                            value={value}
                            variant="outlined"
                        />
                    </Box>
                    <Box ml={3}  mt={2} display="flex" justifyContent="flex-end" >
                        <Button color="secondary" variant="contained" onClick={handleSearch} >
                            Search
                        </Button>
                    </Box>
                </Box>
                <Box mt={3}>
                    <Results users={users.items} />
                </Box>
            </Container>
        </Page>
    );
};

export default CustomerListView;
