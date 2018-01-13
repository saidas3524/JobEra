import React from 'react'

const YearDisplay = ({ date }) => {
    return (
        <span>
            {new Date(date).getFullYear()}
        </span>
    )
}

export default YearDisplay
