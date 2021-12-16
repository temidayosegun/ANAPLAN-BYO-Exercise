import axios from 'axios';
import React, { Component } from 'react';
import DashboardCard from './DashboardCard';

export default class Dashboards extends Component {
    constructor() {
        super();
        this.state = {
            dashboards: []
        }
    }

    getDashboards = async () => {
        const {data} = await axios.get('/api/dashboards');
        data.sort((a, b) => (a.title > b.title) ? 1 : -1)
        this.setState({dashboards: data})
        // console.log(this.state)
    }
    componentDidMount(){
        this.getDashboards();
    }
    render() {
        return (
            <div className='dashboardListWrapper'>
                <h1 className='dashboardListHeader'>Dashboards</h1>
                <div className='dashboardList'>
                    {this.state.dashboards.map((dashboard, i) => 
                        <DashboardCard 
                            key = {`dashboard-${i}`}
                            title = {dashboard.title}
                            createdDate = {new Date(dashboard.createdAt)}
                            updatedDate = {new Date(dashboard.updatedAt)}
                            hasBeenUpdated = {dashboard.updatedAt === dashboard.createdAt? false : true}
                        />
                    )}
                </div>
            </div>
        )
    }
}