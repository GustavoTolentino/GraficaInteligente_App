import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Collapse, Row, Col, Dropdown, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown } from 'reactstrap';

import { connect } from 'react-redux';
import { apiIndica } from '../../services/api';
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

class SidebarUserBlock extends Component {

    state = {
        showUserBlock: false
    }

    // async handleStartup() {
    //     await apiIndica.get();
    //     const { data, status } = await apiIndica.get();
    //     console.log(data, status);
        
    //     this.setState({dropdownContent: data})
    //     console.log(dropdownContent)
    // }
    
    // componentDidMount(){
    //     handleStartup();
    // }
    
    componentDidUpdate(oldProps) {
        if (oldProps.showUserBlock !== this.props.showUserBlock) {
            this.setState({ showUserBlock: this.props.showUserBlock })
        }
    }
    

    handleChangeSelectMulti = (selectedOptionMulti) => {
        this.setState({ selectedOptionMulti });
        console.log(`Selected Multi: ${selectedOptionMulti.label}`);
    }

    render() {
        const { selectedOptionMulti } = this.state;
        
        return (
            <Collapse id="user-block" isOpen={ this.state.showUserBlock }>
                <div style={{marginBottom: "600px"}}>
                    <Row>
                        <Col md={12}>
                            <DropdownBox title="Empresas" />
                        </Col>
                        <Col style={{margin: "0 20px"}}>
                            <p className="mt-2">Multi Select</p>
                            <Select
                                name="multi-select-name"
                                multi
                                simpleValue
                                value={selectedOptionMulti}
                                onChange={this.handleChangeSelectMulti}
                                options={dropdownContent}
                            />
                        </Col>
                    </Row>
                </div>
            </Collapse>
        )
    }
}

SidebarUserBlock.propTypes = {
    showUserBlock: PropTypes.bool
};

const mapStateToProps = state => ({ showUserBlock: state.settings.showUserBlock })

export default connect(
    mapStateToProps
)(SidebarUserBlock);