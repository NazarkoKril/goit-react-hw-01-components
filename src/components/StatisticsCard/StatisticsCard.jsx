import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './StatisticsCard.styled';


export const StatisticsCard = ({ label, percentage }) => {
    return (
        <Card>
            <span>{label}</span>
            <span>{percentage}%</span>
        </Card>
    );
};

StatisticsCard.prototype = {
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
}