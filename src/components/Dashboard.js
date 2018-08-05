import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'


import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expense-total'
import {startLogout} from '../actions/auth'
// react plugin for creating charts

// @material-ui/core
import {withStyles,MuiThemeProvider, createMuiTheme}  from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import Input from '@material-ui/core/Input';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button';


// core components
import GridItem from "./components/Grid/GridItem.js";
import GridContainer from "./components/Grid/GridContainer.js";
import Table from "./components/Table/Table.js";

import Danger from "./components/Typography/Danger.js";
import Card from "./components/Card/Card.js";
import CardHeader from "./components/Card/CardHeader.js";
import CardIcon from "./components/Card/CardIcon.js";
import CardBody from "./components/Card/CardBody.js";
import CardFooter from "./components/Card/CardFooter.js";

import dashboardStyle from "./assets/jss/views/dashboardStyle.js";

const theme = createMuiTheme({
  Input:{
    border:0,
    height: "30px"
  }
})

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleClick = () =>{
    this.props.history.push('/create');
  }

  editExpense =(id)=>{
    e.preventDefault()
    this.props.history.push(`/edit/${id}`)
  }
  
  render() {
    
    const { classes } = this.props;
   
    return (
      <div style={{padding:"10px"}}>
        <div className="dashboard-header">
            <div className="dashboard-header-title">
            <Link to="/" className="dashboard-home-link" style={{position:"absolute", left:"10px", top:"10px", textDecoration:"none", color:""}}>Expense Manager</Link>
            <MuiThemeProvider theme={theme}>
              <Input
                id="search"
                placeholder="Search"
                type="search"
                style={{ border:"none", width:"15%", fontSize:"15px"}}
              />
            </MuiThemeProvider>
            <Tooltip title="logout" style={{fontSize:"7"}}>
              <Button onClick={this.props.Logout} style={{position:"absolute", right:"0"}}>
                <Icon >settings_power</Icon>
              </Button>
            </Tooltip>
            </div>
              <Button variant="contained" color="secondary" onClick={this.handleClick} style={{position:"absolute", right:"40px", top:"50%"}}>
                Add Expense
              </Button>
            <img className="gravatar" src="/images/new_logo.png" alt=""/>
        </div>
        <GridContainer justify = "center">
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>account_balance_wallet</Icon>
                </CardIcon>
                <p className={` materialUi ${classes.cardCategory} `}>Total Expenses</p>
                <h3 className={` materialUi ${classes.cardTitle}`}>
                {`${numeral((this.props.expenseTotal)/100).format('$0,0.00')}`} 
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={` materialUi ${classes.cardCategory} `}>Expenses</p>
                <h3 className={` materialUi ${classes.cardTitle}`}>{`${numeral((this.props.todayExpense)/100).format('$0,0.00')}`} </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={` materialUi ${classes.cardCategory} `}>Number of Expenses</p>
                <h3 className={` materialUi ${classes.cardCategory} `}>{this.props.expenseCount}</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          
          <GridItem xs={9} sm={9} md={9}>
            <Card>
              <CardHeader color="warning">
                <h4 className={`materialUi ${classes.cardTitleWhite}`}>Expenses</h4>
                
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Description", "Created At", "Amount"," "]}
                  tableData={this.props.expenses}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
       
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return{
      expenses: selectExpenses(state.expenses, { text: '',sortBy: 'date',startDate: moment().startOf('year'),endDate: moment() }),
      todayExpense: selectExpensesTotal(visibleExpenses),
      expenseCount: state.expenses.length,
      expenseTotal:selectExpensesTotal(state.expenses)
  }
}

const mapDispatchToProps =(dispatch)=>({
  Logout:()=> dispatch(startLogout())
})


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(dashboardStyle)(Dashboard));
