import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../redux/reducer/albums';
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
}));

const OwnPagination = () => {
  const request = (value)=>{
    dispatch(changePage(value));
  }
  const dispatch = useDispatch();
  const { currentPage, count } = useSelector(state=>state.albums);
  const totalPages = Math.ceil(count / 10);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination  count={totalPages} page={currentPage} onChange = {(e,value)=>{
        request(value)
      }} />
    </div>
  );
};

export default OwnPagination;
