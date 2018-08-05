import React,{Component} from "react";
import PropTypes from "prop-types";
import moment from 'moment'
import numeral from 'numeral'
import {connect} from 'react-redux'

import {editExpensePage} from '../../../actions/expenses'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// core components
import tableStyle from "./tableStyle";



class CustomTable extends Component {

  editComponent(id) {
    this.props.edit(id)
  }

  render () {
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    
    const editIcon = index => (
      <Tooltip title="Edit">
      <IconButton onClick={() => this.editComponent(index)}>
        <EditIcon color="primary" />
      </IconButton>
      </Tooltip>
    );
    return (
      <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {
            tableData.map((n,index) =>{
              return(
                <TableRow key={index}>
                  <TableCell className={classes.tableCell}>{(index + 1)}</TableCell>
                  <TableCell className={classes.tableCell}>{n.description}</TableCell>
                  <TableCell className={classes.tableCell}>{moment(n.createdAt).format('MMMM Do, YYYY')}</TableCell>
                  <TableCell className={classes.tableCell}>{numeral(n.amount / 100).format('$0,0.00')}</TableCell>
                  <TableCell>
                    {editIcon(n.id)}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=>({
  
    edit:(id)=> dispatch(editExpensePage(id))
  
})




export default connect(null,mapDispatchToProps)(withStyles(tableStyle)(CustomTable));
