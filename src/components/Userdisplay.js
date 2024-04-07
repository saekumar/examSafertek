import React from 'react'
function User({data}) {
    return (
        <div>
            User ID:{data.id}<br/>
            User Name:{data.name}<br/>
            User E-Mail:{data.email}<br/>
            User Type:{data.type}<br/>
        </div>
    )
}
export default User