import React from 'react'
import classes from './Show.module.css'
const Show = ({data}) => {
    console.log(data)
  return (
    <div className={classes.maindata}>
        <div className={classes.datasegment}>
            <p>IP Address</p>
            <h2>{data.ip}</h2>
        </div>
        <div className={classes.datasegment}>
            <p>Location</p>
            <h2>{data.location.region}, {data.location.city} {data.location.postalCode}</h2>
        </div>
        <div className={classes.datasegment}>
            <p>Timezone</p>
            <h2>UTC {data.location.timezone}</h2>
        </div>
        <div className={classes.datasegment}>
            <p>ISP</p>
            <h2>{data.isp}</h2>
        </div>
    </div>
  )
}

export default Show