import React from 'react';

import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';


const DashboardPage = () => {
    return (
        <React.Fragment>
            <BreadcrumSection/>
            <AdminCardSection1/>
            <h3>Using React-ChartJs</h3>
            <ChartSection1/>
            <ChartSection2/>
            <AdminCardSection2/>
        </React.Fragment>
    )
};

export default DashboardPage;