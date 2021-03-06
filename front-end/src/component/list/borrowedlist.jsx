import React, { Component } from 'react';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Container, Typography } from "@material-ui/core";
import ApiService from "../../ApiService";
/*
function createData(name, borrowed, borrow, end) {
    return { name, borrowed, borrow, end};
  }

  const rows = [
    createData('물고기는 존재하지 않는다.', 'sifj1234', 'test', '2022.02.25'),
    createData('불편한 편의점', '독서광1', 'test', '2022.02.25'),
    createData('세븐 테크', '김홍길', 'test', '2022.02.25'),
    createData('웰씽킹', '김민선', 'test', '2022.02.25'),
    createData('어서 오세요. 휴남동 서점입니다.', '김주희', 'test', '2022.02.25'),
  ];*/

  const useStyles = makeStyles({
    root: {
      background: (props) =>
        props.color === 'red'
          ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
          : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: (props) =>
        props.color === 'red'
          ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
          : '0 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 35,
      padding: '0 30px',
      margin: 10,
    },
  });
  
  function MyButton(props) {
    const { color, ...other } = props;
    const classes = useStyles(props);
    return <Button className={classes.root} {...other} />;
  }

  MyButton.propTypes = {
    color: PropTypes.oneOf(['blue']).isRequired,
  };

class borrowedlist extends Component{

  constructor(props){
    super(props);

    this.state = {
      borrows:[]
    }
  }

  
  componentDidMount(){
    this.loadList();
  }

  loadList = () => {
    ApiService.fetchborrowinfobyemail(localStorage.getItem("uid"))
      .then( res => {
        this.setState({
          borrows: res.data
        })
      })
      .catch(err => {
        console.log('loadlist() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

    render() {
        return (
            
            <>
            <Typography variant="h4" style={style}>빌린 책 리스트</Typography>
            <hr></hr><br></br>
            <Table sx={{ minWidth: 650 }} size="middle" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>book name</TableCell>
                        <TableCell align="right">borrowed nick</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.borrows.map((btable) => (
                        <TableRow
                            key={btable.gtid}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell>{btable.btitle}</TableCell>
                            <TableCell align="right">{btable.name}</TableCell>
                            <TableCell align="right"> 
                            <MyButton variant="contained" color="blue" size="large" onClick={() => {
                              this.props.history.push('/check');
                              ApiService.deleteborrowList(btable.gtid);
                            }}>회수</MyButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </>
        );
    }
    
}

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 25
  }

export default borrowedlist;