import React from 'react'

const DashboardCard = ({
   title,
   createdDate,
   updatedDate,
   hasBeenUpdated, 
}) => {
    return (
        <div className='dashboardWrapper'>
            <h2 className="dashboardTitle">
                {title}
            </h2>
            {hasBeenUpdated ?
                <div className="timestamp updated">
                    <span>updated: </span>
                    <span>{updatedDate.toUTCString()}</span>
                </div>
            : null}
            <div className="timestamp created">
                <span>created: </span>
                <span>{createdDate.toUTCString()}</span>
            </div>
        </div>
    )
}

export default DashboardCard
