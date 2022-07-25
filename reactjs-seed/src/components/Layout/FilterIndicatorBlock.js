import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse, Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Button } from 'reactstrap';

import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Select from 'react-select';

class DropdownBox extends Component  {
    state = { ddOpen: false }
    toggle = () => this.setState({
            ddOpen: !this.state.ddOpen
    })
    render() {
        const ddClass = classNames('animated', this.props.title);
        return (
            <div className="box-placeholder" style={{margin: "10px"}}>
                <Dropdown isOpen={this.state.ddOpen} toggle={this.toggle} style={{marginBotom: "auto"}}>
                    <DropdownToggle>
                        {this.props.title}
                    </DropdownToggle>
                    <DropdownMenu className={ddClass} style={{marginBottom: "auto"}}>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem active>Active Item</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

const dropdownContent = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
    { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
    { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
    { value: 'queensland', label: 'Queensland', className: 'State-Qld' },
    { value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
];
const employeDropdownContent = [
    { value: 'neo-band', label: 'NeoBand', className: 'State-ACT' },
    { value: 'copix', label: 'Copix LTDA', className: 'State-ACT' },
    { value: 'jcdecaux', label: 'JCDecaux', className: 'State-ACT' },
];

export class FilterIndicatorBlock extends Component {

    state = {
        showFilterIndicator: false
    }

    async handleStartup() {
        // await apiIndica.get();
        // const { data, status } = await apiIndica.get();
        // console.log(data, status);
        
        this.setState({dropdownContent: data})
        console.log(dropdownContent)
    }

    componentDidUpdate(oldProps) {
        if (oldProps.showFilterIndicator !== this.props.showFilterIndicator) {
            this.setState({ showFilterIndicator: this.props.showFilterIndicator })
        }
    }
    

    handleChangeSelectMulti = (selectedOptionMulti) => {
        this.setState({ selectedOptionMulti });
        console.log(`Selected Multi: ${selectedOptionMulti.label}`);
    }

    render() {
        const { selectedEmploye } = this.state;
        const { selectedClient } = this.state;
        
        return (
            <Collapse id="filter-block" isOpen={ this.state.showFilterIndicator }>
                <div  className="jumbotron" style={{margin: "20px 0"}}>
                    <h3>Filtros</h3>
                    <Row>
                        <Col md={6}>
                            <p className="mt-2 tittleInput">Empresa</p>
                            <Select
                                name="multi-select-name"
                                multi
                                simpleValue
                                value={selectedEmploye}
                                onChange={this.handleChangeSelectMulti}
                                options={employeDropdownContent}
                            />
                        </Col>
                        <Col md={6}>
                            <p className="mt-2 tittleInput">Cliente</p>
                            <Select
                                name="multi-select-name"
                                multi
                                simpleValue
                                value={selectedClient}
                                onChange={this.handleChangeSelectMulti}
                                options={dropdownContent}
                            />
                        </Col>
                    </Row>
                    <Row style={{marginTop: "15px"}}>
                        <Col md={3}>
                            <p className="tittleInput">Data Inicial</p>
                            <Datetime inputProps={{className: 'form-control'}}/>
                        </Col>
                        <Col md={3}>
                            <p className="tittleInput">Data Final</p>
                            <Datetime inputProps={{className: 'form-control'}}/>
                        </Col>
                        <Col>
                            {/* <p className="tittleInput"></p> */}
                            <Button outline className="mb-1" color="primary" type="button" style={{marginTop: "25px"}}>Filtrar</Button>
                        </Col>
                    </Row>
                </div>
            </Collapse>
        )
    }
}

FilterIndicatorBlock.propTypes = {
    showFilterIndicator: PropTypes.bool
};

const mapStateToProps = state => ({ showFilterIndicator: state.settings.showFilterIndicator })

export default connect(
    mapStateToProps
)(FilterIndicatorBlock);