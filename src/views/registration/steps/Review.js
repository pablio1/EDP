import React, { Component } from 'react'
import CollegeInfo from './CollegeInfo'
import SeniorHighInfo from './SeniorHighInfo'
import JuniorHighInfo from './JuniorHighInfo'
import ElementaryInfo from './ElementaryInfo'
import ContactDetails from './ContactDetails'
import SchoolDetails from './SchoolDetails'
import Attachments from './Attachments'

export default class componentName extends Component {
    render() {
        const {values, inputChange} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="text-center font-weight-bold">
                        Review
                    </h3>
                    <hr/>
                    {
                        values.gradeLevel === 'college' &&
                            <CollegeInfo 
                                values= {values}
                                inputChange={inputChange}
                            />
                    }
                    {
                        values.gradeLevel === 'senior' &&
                            <SeniorHighInfo 
                                values= {values}
                                inputChange={inputChange}
                            />
                    }
                    {
                        values.gradeLevel === 'junior' &&
                            <JuniorHighInfo 
                                values= {values}
                                inputChange={inputChange}
                            />
                    }
                    {
                        values.gradeLevel === 'elementary' &&
                            <ElementaryInfo 
                                values= {values}
                                inputChange={inputChange}
                            />
                    }
                    <ContactDetails 
                        values= {values}
                        inputChange={inputChange}
                    />
                    <SchoolDetails
                        values= {values}
                        inputChange={inputChange}
                    />
                    <Attachments
                        values= {values}
                        inputChange={inputChange}
                    />
                </div>
            </div>
        )
    }
}
